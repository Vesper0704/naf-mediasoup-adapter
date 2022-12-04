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


// IIF create websocket server and mediasoup worker/router
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
        const { transport, params, error } = await createWebRTCTransport(socket)
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
        const { kind, rtpParameters, appData } = data
        console.log('produce', kind);
        const producerTransport = producerTransportMap.get(socket.id)
        if (!producerTransport) return console.log('fail to get ProducerTransport')

        const producer = await producerTransport.produce({
            kind,
            rtpParameters
        })
        producer.streamName = appData.streamName
        producer.observer.on('close', () => {
            console.log(`producer of ${producer.streamName} is closed`);
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

    socket.on('closeProducer', ({ id, streamName }, callback) => {
        console.log('closeProducer', { id, streamName });
        const targetProducer = producerListMap.get(id)
        console.log({ targetProducer });
        if (!targetProducer) return callback({ closeRes: 'failure' })
        targetProducer.close()

        producerListMap.delete(id)
        let prevList = producerIdList.get(socket.id)
        producerIdList.set(socket.id, prevList.filter(_id => _id !== id))

        callback({ closeRes: 'success' })
    })


    socket.on('createConsumerTransport', async (_, callback) => {
        try {
            const { transport, params, error } = await createWebRTCTransport(socket)
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
        console.log('producerType ', producer.type, producer.streamName);
        /**
         * producerRtpParameters  {
                codecs: [
                    {
                    mimeType: 'video/VP8',
                    payloadType: 96,
                    clockRate: 90000,
                    parameters: {},
                    rtcpFeedback: [Array]
                    },
                    {
                    mimeType: 'video/rtx',
                    payloadType: 97,
                    clockRate: 90000,
                    parameters: [Object],
                    rtcpFeedback: []
                    }
                ],
                headerExtensions: [ ],
                // depends on what encodings producer use
                encodings: [
                    {
                    active: true,
                    maxBitrate: 100000,
                    rid: 'r0',
                    scalabilityMode: 'S1T3',
                    dtx: false
                    },
                    {
                    active: true,
                    maxBitrate: 300000,
                    rid: 'r1',
                    scalabilityMode: 'S1T3',
                    dtx: false
                    },
                    {
                    active: true,
                    maxBitrate: 600000,
                    rid: 'r2',
                    scalabilityMode: 'S1T3',
                    dtx: false
                    }
                ],
                rtcp: { cname: 'dd9a8e43', reducedSize: true },
                mid: '0'
                }
         */
        // console.log('producerRtpParameters ', producer.rtpParameters);
        const consumer = await createConsumer(producer, rtpCapabilities, socket.id)
        if (consumer) {
            console.log('consumerType ', consumer.type);
            callback(consumer)
        } else {
            callback(null)
        }
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

    socket.on('keep-alive', () => {
        console.log(`keep-alive message from ${socket.id}`);
    })
}

async function createWebRTCTransport(socket) {
    const {
        maxIncomingBitrate,
        initialAvailableOutgoingBitrate
    } = config.mediasoup.webRtcTransport;

    const transport = await mediasoupRouter.createWebRtcTransport({
        listenIps: config.mediasoup.webRtcTransport.listenIps,
        enableUdp: true,
        enableTcp: true,
        preferUdp: true,
        initialAvailableOutgoingBitrate,
    });


    transport.on('icestatechange', async (iceState) => {
        switch (iceState) {
            case 'new':
            case 'connected':
            case 'completed':
            default:
                break;
            case 'disconnected':
                console.log(`ICE was connected or completed but it has suddenly failed`);
                const iceParameters = await transport.restartIce();
                /**
                 * iceParameters like this:
                 * {
                        iceParameters: {
                            iceLite: true,
                            password: 'gfes9ndv2r8dc8gv1c7pms2g3w5mhl1k',
                            usernameFragment: '698mftj1sh6biyi5zutz8ucet2rwrf7a'
                        }
                    }
                 */
                // console.log({ iceParameters });
                socket.emit('restartIce', { iceParameters })
                break;
        }
    })

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
            iceCandidates: transport.iceCandidates,
            dtlsParameters: transport.dtlsParameters
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

        consumer.on('producerclose', () => {
            console.log(`associated producer of stream ${streamName} closed so consumer closed`);
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

    if (consumer.type === 'simulcast') {
        // select the highest layers to be sent to the consuming endpoint
        const spatialLayer = producer.rtpParameters.encodings.length - 1
        console.log('selected spatialLayer', spatialLayer);
        await consumer.setPreferredLayers({ spatialLayer })
    }

    return {
        producerId: producer.id,
        id: consumer.id,
        kind: consumer.kind,
        rtpParameters: consumer.rtpParameters,
        type: consumer.type,
        streamName: producer.streamName
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


const rooms = {}
function createSocketServer() {
    const app = express()
    app.get('/info', (_, res) => {
        res.json({
            server: 'mediasoup-server',
            date: new Date().toLocaleString(),
            rooms
        })
    })
    const staticPath = path.join(__dirname, '..')
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
            socket.to(curRoom).emit("broadcast", data);
        });

        socket.on("disconnect", () => {
            console.log('disconnected: ', socket.id, curRoom);
            if (rooms[curRoom]) {
                console.log("user disconnected", socket.id);

                delete rooms[curRoom].occupants[socket.id];
                const occupants = rooms[curRoom].occupants;
                socket.to(curRoom).emit("occupantsChanged", { occupants });

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


