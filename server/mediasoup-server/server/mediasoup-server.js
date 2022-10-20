// process.env.DEBUG = "mediasoup:WARN:* mediasoup:ERROR:*"
// process.env.DEBUG = "mediasoup*"
const mediasoup = require('mediasoup')
const socketIO = require('socket.io')
const express = require('express')
const https = require('https')
const fs = require('fs')
const path = require('path')
const config = require('./config')

let socketServer = null;
let mediasoupWorker = null;
let mediasoupRouter = null;

// just one producerTransport needed per socket client
let producerTransportMap = new Map(); // socketid->tranpsort instance
let consumerTransportMap = new Map();

let producerIdList = new Map() // socketid->producerids
let consumerIdList = new Map()  // socketid->consumerids


// allow multiple producers (videos/audios)
let producerListMap = new Map();  // producerid->producer instance
let consumerListMap = new Map(); // consumerid->consumer instance


// IIF 创造await的执行环境
(async function () {
    createSocketServer()
    await createMediasoupWorkerAndRouter()
})()


async function registerEventsAndCallback(socket) {
    // getRouterRtpCapabilities event: results for loadDevice
    socket.on('getRouterRtpCapabilities', (_, callback) => {
        callback(mediasoupRouter.rtpCapabilities)
    })

    // createProducerTransport event: triggered when the frontend produces the stream
    socket.on('createProducerTransport', async (_, callback) => {
        const { transport, params, error } = await createWebRTCTransport()
        if (error) return callback({ error })

        // set producerTransport for each socket client
        producerTransportMap.set(socket.id, transport)

        callback({
            params
        })
    })

    socket.on('connectProducerTransport', async (data, callback) => {
        const producerTransport = producerTransportMap.get(socket.id)
        if (!producerTransport) return console.log('fail to get ProducerTransport')
        await producerTransport.connect({ dtlsParameters: data.dtlsParameters });
        callback();
    })

    socket.on('produce', async (data, callback) => {
        const { kind, rtpParameters } = data
        console.log('produce', kind);
        const producerTransport = producerTransportMap.get(socket.id)
        if (!producerTransport) return console.log('fail to get ProducerTransport')

        const producer = await producerTransport.produce({
            kind,
            rtpParameters
        })


        let prevList = producerIdList.get(socket.id)
        if (!prevList) prevList = []
        prevList.push(producer.id)
        producerIdList.set(socket.id, prevList)

        producerListMap.set(producer.id, producer)

        callback({
            producerId: producer.id
        })
        // inform other clients about the new producer
        socket.broadcast.emit('newProducer', { producerId: producer.id, socketId: socket.id })
    })


    socket.on('createConsumerTransport', async (_, callback) => {
        try {
            const { transport, params, error } = await createWebRTCTransport()
            if (error) {
                console.log('fail to create consumerTransport')
                callback({ error })
                return
            }
            console.log('consumerTransport created');
            consumerTransportMap.set(socket.id, transport)
            callback({ params })
        } catch (error) {
            callback({ error })
        }
    })

    socket.on('connectConsumerTransport', async ({ dtlsParameters }, callback) => {
        const consumerTransport = consumerTransportMap.get(socket.id)
        if (!consumerTransport) return console.log('fail to get consumerTransport')
        await consumerTransport.connect({ dtlsParameters })
        callback()
    })

    socket.on('consumeStream', async ({ _producerId, rtpCapabilities }, callback) => {
        const producer = producerListMap.get(_producerId)
        if (!producer) {
            callback(null)
            return console.log('no corresponding producer found')
        }
        console.log(producer);
        const consumer = await createConsumer(producer, rtpCapabilities, socket.id)
        callback(consumer)
    })

    socket.on('gatherProducers', (_, callback) => {
        const producerList = []
        for (let [socketId, producerIds] of producerIdList) {
            producerIds.forEach(_id => {
                producerList.push({
                    socketId,
                    producerId: _id
                })
            })

        }
        callback({
            producerList
        })
    })

    socket.on('disconnect', () => {
        const { id } = socket
        console.log(id, 'leave');
        // cleanup
        const isProducerTransportRemoved = producerTransportMap.delete(id)
        const isConsumerTransportRemoved = consumerTransportMap.delete(id)

        const _producerIdList = producerIdList.get(id)
        const _consumerIdList = consumerIdList.get(id)

        _producerIdList?.forEach(id => producerListMap.delete(id))

        _consumerIdList?.forEach(id => consumerListMap.delete(id))

        console.log({
            id,
            isProducerTransportRemoved,
            isConsumerTransportRemoved,
            _producerIdList,
            _consumerIdList
        });

        producerIdList.delete(id)
        consumerIdList.delete(id)
    })
}

async function createWebRTCTransport() {
    const {
        maxIncomingBitrate,
        initialAvailableOutgoingBitrate
    } = config.mediasoup.webRtcTransport;

    const transport = await mediasoupRouter.createWebRtcTransport({
        listenIps: config.mediasoup.webRtcTransport.listenIps,
        enableUdp: true,
        enableTcp: true,
        preferUdp: true,  // prefer UDP协议 实时灵活 也是webrtc首选的(webrtc支持TCP的candidate)
        initialAvailableOutgoingBitrate,
    });
    if (maxIncomingBitrate) {
        try {
            await transport.setMaxIncomingBitrate(maxIncomingBitrate);
        } catch (error) {
            return { error }
        }
    }
    return {
        transport,
        params: {
            id: transport.id,
            iceParameters: transport.iceParameters,
            iceCandidates: transport.iceCandidates,   // 见webrtc的ice candidate
            dtlsParameters: transport.dtlsParameters // 安全相关
        },
        error: null
    };
}

async function createConsumer(producer, rtpCapabilities, socketId) {
    if (!mediasoupRouter.canConsume({
        producerId: producer.id,
        rtpCapabilities,
    })) {
        return console.error('can not consume');
    }
    let consumer = null;
    try {
        const consumerTransport = consumerTransportMap.get(socketId)
        if (!consumerTransport) return console.log('fail to get consumerTransport')

        consumer = await consumerTransport.consume({
            producerId: producer.id,
            rtpCapabilities
        })

        // {
        //     let prevList = consumerIdList.get(socketId)
        //     if (!prevList) prevList = []
        //     prevList.push(consumer.id)
        //     consumerIdList.set(socketId, prevList)
        // }

        // consumerListMap.set(consumer.id, consumer)
    } catch (e) {
        return console.error('fail to create consumer');
    }

    console.log('successfully create consumer');

    return {
        producerId: producer.id,
        id: consumer.id,
        kind: consumer.kind,
        rtpParameters: consumer.rtpParameters,
        // type: consumer.type,
        // producerPaused: consumer.producerPaused
    };
}


async function createMediasoupWorkerAndRouter() {
    mediasoupWorker = await mediasoup.createWorker(
        {
            logLevel: config.mediasoup.worker.logLevel,
            logTags: config.mediasoup.worker.logTags,
            rtcMinPort: Number(config.mediasoup.worker.rtcMinPort),
            rtcMaxPort: Number(config.mediasoup.worker.rtcMaxPort)
        });

    mediasoupWorker.on('died', () => {
        logger.error(
            'mediasoup Worker died, exiting  in 1 seconds... [pid:%d]', mediasoupWorker.pid);
        setTimeout(() => process.exit(1), 1000);
    });

    // Log worker resource usage every X seconds.
    // setInterval(async () => {
    //     const usage = await mediasoupWorker.getResourceUsage();

    //     console.info('mediasoup Worker resource usage [pid:%d]: %o', mediasoupWorker.pid, usage);
    // }, config.mediasoup.worker.logInterval);

    const mediaCodecs = config.mediasoup.router.mediaCodecs;
    // global router
    mediasoupRouter = await mediasoupWorker.createRouter({ mediaCodecs });
}


const rooms = {}  //房间连接情况
function createSocketServer() {
    const app = express()
    app.get('/info', (_, res) => {
        res.json({
            server: 'mediasoup-server',
            date: new Date().toLocaleString()
        })
    })
    const staticPath = path.join(__dirname, '..', '..', '..')
    app.use(express.static(`${staticPath}`))

    const { sslKey, sslCrt, listenPort, listenIp } = config
    const options = {
        key: fs.readFileSync(sslKey),
        cert: fs.readFileSync(sslCrt),
    }
    const httpsServer = https.createServer(options, app)

    httpsServer.listen(listenPort, listenIp, () => {
        console.log(`mediasoup server listening at https://127.0.0.1:${listenPort} ...`);
    })

    socketServer = socketIO(httpsServer)

    socketServer.on('connection', socket => {

        let curRoom = null;

        /* initial NAF functions remain the same */
        socket.on("joinRoom", data => {
            const { room } = data;

            if (!rooms[room]) {
                rooms[room] = {
                    name: room,
                    occupants: {},
                };
            }

            const joinedTime = Date.now();
            rooms[room].occupants[socket.id] = joinedTime;
            curRoom = room;

            console.log(`${socket.id} joined room ${room}`);
            socket.join(room);

            socket.emit("connectSuccess", { joinedTime });
            const occupants = rooms[room].occupants;
            socketServer.in(curRoom).emit("occupantsChanged", { occupants });
        });

        socket.on("send", data => {
            socketServer.to(data.to).emit("send", data);
        });

        socket.on("broadcast", data => {
            socket.to(curRoom).broadcast.emit("broadcast", data);
        });

        socket.on("disconnect", () => {
            console.log('disconnected: ', socket.id, curRoom);
            if (rooms[curRoom]) {
                console.log("user disconnected", socket.id);

                delete rooms[curRoom].occupants[socket.id];
                const occupants = rooms[curRoom].occupants;
                socket.to(curRoom).broadcast.emit("occupantsChanged", { occupants });

                if (Object.keys(occupants).length === 0) {
                    console.log("everybody left room");
                    delete rooms[curRoom];
                }
            }
        });

        // mediasoup-related events registration
        registerEventsAndCallback(socket)
    })

}


