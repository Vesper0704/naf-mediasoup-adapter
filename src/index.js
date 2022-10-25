/* global NAF, io */
const config = require('./config')
class MediasoupAdapter {
    constructor() {
        if (io === undefined)
            console.warn('socket.io-client missing')
        if (mediasoupClient === undefined) {
            console.warn('mediasoup-client missing')
        }

        this.app = "default";
        this.room = "default";
        this.occupantListener = null;
        this.myRoomJoinTime = null;
        this.myId = null;

        this.occupants = {}; // id -> joinTimestamp
        this.connectedClients = [];

        this.device = null; // local Device (will connect to server-side router through transport)

        this.producerTransport = null;   // producerTransport 
        this.consumerTransport = null;   // consumerTransport

        this.videoProducer = {};   // producerId->producer instance
        this.videoConsumers = {};  // consumerId->consumer instance

        this.audioProducer = {};   // producerId->producer instance
        this.audioConsumers = {};  // consumerId->consumer instance

        this.iceServers = config.iceServers;
        this.simulcastMode = config.simulcastMode;
        this.simulcastConfig = config.simulcastConfig;

        // store video/audio streams of clients
        this.audioStreams = {};  // clientId->audioStream
        this.videoStreams = {};  // clientId->videoStream
        this.pendingAudioRequest = {};
        this.pendingVideoRequest = {};

        this.serverTimeRequests = 0;
        this.timeOffsets = [];
        this.avgTimeOffset = 0;
    }

    setServerUrl(wsUrl) {
        this.wsUrl = wsUrl;
    }

    setApp(appName) {
        this.app = appName;
    }

    setRoom(roomName) {
        this.room = roomName;
    }

    setWebRtcOptions(options) {
        if (options.datachannel === false) {
            // mediasoup-adapter will use ws to sync components
        }
        if (options.audio === true) {
            this.sendAudio = true;
        }
        if (options.video === true) {
            this.sendVideo = true;
        }
    }

    setSimulcastMode(isSimulcast) {
        this.simulcastMode = isSimulcast
    }

    setServerConnectListeners(successListener, failureListener) {
        this.connectSuccess = successListener;
        this.connectFailure = failureListener;
    }

    setRoomOccupantListener(occupantListener) {
        this.occupantListener = occupantListener;
    }

    setDataChannelListeners(openListener, closedListener, messageListener) {
        this.openListener = openListener;
        this.closedListener = closedListener;
        this.messageListener = messageListener;
    }

    connect() {
        const self = this;

        this.updateTimeOffset()
            .then(() => {
                if (!self.wsUrl || self.wsUrl === "/") {
                    if (location.protocol === "https:") {
                        self.wsUrl = "wss://" + location.host;
                    } else {
                        self.wsUrl = "ws://" + location.host;
                    }
                }
                const socket = self.socket = io(self.wsUrl);

                self.socket.request = (type, data) => {
                    return new Promise((resolve, reject) => {
                        try {
                            self.socket.emit(type, data, resolve)
                        } catch (err) {
                            reject(err)
                        }
                    })
                }

                socket.on("connect", async () => {
                    NAF.log.write("successfully connected to websocket", socket.id);
                    self.myId = socket.id;
                    self.joinRoom();
                });

                socket.on("connectSuccess", async (data) => {
                    const { joinedTime } = data;

                    self.myRoomJoinTime = joinedTime;
                    NAF.log.write("Successfully joined room", self.room, "at server time", joinedTime);

                    self.connectSuccess(self.myId);

                    setTimeout(async () => {
                        await self.initialAndLoadDevice()
                        await self.initialProducerConsumerTransport()
                        await self.gatherExistingProducers()
                        // console.warn(self.device, self.producerTransport, self.consumerTransport);

                        let localStream = null;
                        if (self.sendAudio || self.sendVideo) {
                            localStream = await navigator.mediaDevices.getUserMedia({
                                video: self.sendVideo,
                                audio: self.sendAudio
                            })
                        }

                        // store audio streams
                        if (self.sendAudio) {

                            if (localStream) self.storeAudioStream(self.myId, localStream)
                            if (!self.producerTransport) return console.error('producerTransport not created yet')
                            if (!self.device.canProduce('audio')) return console.error('device does not support audio')

                            try {
                                const track = localStream.getAudioTracks()[0]
                                const params = { track }
                                const producer = await self.producerTransport.produce(params)
                                // self.audioProducer[producer.id] = producer // producer.kind === 'audio'
                            } catch (e) {
                                console.error('fail to produce audio stream', e);
                            }
                        }

                        // store video streams
                        if (self.sendVideo) {

                            if (localStream) self.storeVideoStream(self.myId, localStream)
                            if (!self.producerTransport) return console.error('producerTransport not created yet')
                            if (!self.device.canProduce('video')) return console.error('device does not support video')

                            try {
                                const track = localStream.getVideoTracks()[0]
                                const params = self.simulcastMode ? { track, ...self.simulcastConfig } : { track }
                                const producer = await self.producerTransport.produce(params)
                                // self.videoProducer[producer.id] = producer // producer.kind === 'video'
                            } catch (e) {
                                console.log('fail to produce video stream', e);
                            }
                        }
                    }, 100)
                });

                socket.on("error", err => {
                    console.error("Socket connection failure", err);
                    self.connectFailure();
                });

                socket.on("occupantsChanged", data => {
                    const { occupants } = data;
                    NAF.log.write('occupants changed', data);
                    self.receivedOccupants(occupants);
                });

                socket.on('disconnect', reason => {
                    // clean up instances
                    self.device = null
                    self.producerTransport = self.consumerTransport = null
                    self.removeAudioStream(self.myId)
                    self.removeVideoStream(self.myId)
                    // manually reconnect
                    socket.connect()
                })


                socket.on('restartIce', async ({ iceParameters }) => {
                    try {
                        await self.producerTransport.restartIce({ iceParameters })
                    } catch (e) {
                        console.log('restartIce error', e);
                    }
                })

                socket.on('newProducer', async ({ producerId, socketId }) => {
                    self.subscribeStream(producerId, socketId)
                })

                function receiveData(packet) {
                    const from = packet.from;
                    const type = packet.type;
                    const data = packet.data;
                    self.messageListener(from, type, data);
                }

                socket.on("send", receiveData);
                socket.on("broadcast", receiveData);
            })
    }

    joinRoom() {
        NAF.log.write("Joining room", this.room);
        this.socket.emit("joinRoom", { room: this.room });
    }

    receivedOccupants(occupants) {
        delete occupants[this.myId];
        this.occupants = occupants;
        this.occupantListener(occupants);
    }

    shouldStartConnectionTo(client) {
        return true;
    }

    startStreamConnection(remoteId) {
        this.connectedClients.push(remoteId);
        this.openListener(remoteId);
    }

    closeStreamConnection(clientId) {
        this.connectedClients = this.connectedClients.filter(c => c != clientId);
        this.closedListener(clientId);
    }

    getConnectStatus(clientId) {
        const connected = this.connectedClients.indexOf(clientId) != -1;

        if (connected) {
            return NAF.adapters.IS_CONNECTED;
        } else {
            return NAF.adapters.NOT_CONNECTED;
        }
    }

    sendData(to, type, data) {
        this.sendDataGuaranteed(to, type, data);
    }

    sendDataGuaranteed(to, type, data) {
        const packet = {
            from: this.myId,
            to,
            type,
            data,
            sending: true,
        };

        if (this.socket) {
            this.socket.emit("send", packet);
        } else {
            NAF.log.warn('SocketIO socket not created yet');
        }
    }

    broadcastData(type, data) {
        this.broadcastDataGuaranteed(type, data);
    }

    broadcastDataGuaranteed(type, data) {
        const packet = {
            from: this.myId,
            type,
            data,
            broadcasting: true
        };

        if (this.socket) {
            this.socket.emit("broadcast", packet);
        } else {
            NAF.log.warn('SocketIO socket not created yet');
        }
    }

    removeAudioStream(clientId) {
        delete this.audioStreams[clientId]
    }

    removeVideoStream(clientId) {
        delete this.videoStreams[clientId]
    }


    storeAudioStream(clientId, stream) {
        this.audioStreams[clientId] = stream;

        if (this.pendingAudioRequest[clientId]) {
            NAF.log.write("Received pending audio for " + clientId);
            this.pendingAudioRequest[clientId](stream);
            delete this.pendingAudioRequest[clientId](stream);
        }
    }

    storeVideoStream(clientId, stream) {
        this.videoStreams[clientId] = stream;

        if (this.pendingVideoRequest[clientId]) {
            NAF.log.write("Received pending video for " + clientId);
            this.pendingVideoRequest[clientId](stream);
            delete this.pendingVideoRequest[clientId](stream);
        }
    }

    getMediaStream(clientId, streamName = '', type = 'audio') {
        console.log(`getMediaStream ${type}`);
        const self = this;

        console.log('adapter getMediaStream');

        if (type === 'audio') {
            if (this.audioStreams[clientId]) {
                NAF.log.write("Already had audio for " + clientId);
                return Promise.resolve(this.audioStreams[clientId]);
            } else {
                NAF.log.write("Waiting on audio for " + clientId);
                return new Promise(resolve => {
                    self.pendingAudioRequest[clientId] = resolve;
                });
            }
        } else if (type === 'video') {
            if (this.videoStreams[clientId]) {
                NAF.log.write("Already had video for " + clientId);
                return Promise.resolve(this.videoStreams[clientId]);
            } else {
                NAF.log.write("Waiting on video for " + clientId);
                return new Promise(resolve => {
                    self.pendingVideoRequest[clientId] = resolve;
                });
            }
        }
    }

    updateTimeOffset() {
        const clientSentTime = Date.now() + this.avgTimeOffset;

        return fetch(document.location.href, { method: "HEAD", cache: "no-cache" })
            .then(res => {
                const precision = 1000;
                const serverReceivedTime = new Date(res.headers.get("Date")).getTime() + (precision / 2);
                const clientReceivedTime = Date.now();
                const serverTime = serverReceivedTime + ((clientReceivedTime - clientSentTime) / 2);
                const timeOffset = serverTime - clientReceivedTime;

                this.serverTimeRequests++;

                if (this.serverTimeRequests <= 10) {
                    this.timeOffsets.push(timeOffset);
                } else {
                    this.timeOffsets[this.serverTimeRequests % 10] = timeOffset;
                }

                this.avgTimeOffset = this.timeOffsets.reduce((acc, offset) => acc += offset, 0) / this.timeOffsets.length;

                if (this.serverTimeRequests > 10) {
                    setTimeout(() => this.updateTimeOffset(), 5 * 60 * 1000); // Sync clock every 5 minutes.
                } else {
                    this.updateTimeOffset();
                }
            });
    }

    getServerTime() {
        return new Date().getTime() + this.avgTimeOffset;
    }



    /** MEDIASOUP RELATED FUNCTIONS **/
    async gatherExistingProducers() {

        const { producerList } = await this.socket.request('gatherProducers')
        console.log(producerList);
        if (!producerList.length) return console.log('no producers currently')

        producerList.forEach(async ({ producerId, socketId }) => {
            await this.subscribeStream(producerId, socketId)
        })
    }

    async subscribeStream(producerId, socketId) {

        if (!this.consumerTransport) return console.log(`consumerTransport doesn't exist`)

        const { kind, newStream: consumerstream } = await this.getConsumeStream(this.consumerTransport, producerId)

        console.log('subscribe sucessfully', { kind, consumerstream });

        switch (kind) {
            case 'video':
                this.storeVideoStream(socketId, consumerstream)
                break;
            case 'audio':
                this.storeAudioStream(socketId, consumerstream)
                break;
            default:
                console.log('unknown kind', kind);
                break;
        }
    }

    async getConsumeStream(consumerTransport, _producerId) {
        const { rtpCapabilities } = this.device
        const result = await this.socket.request('consumeStream', { rtpCapabilities, _producerId })
        if (!result) return null

        const { producerId, id, kind, rtpParameters } = result
        const consumer = await consumerTransport.consume({
            producerId,
            id,
            kind,
            rtpParameters,
            codecOptions: {}
        })

        const newStream = new MediaStream()
        newStream.addTrack(consumer.track)
        return {
            newStream,
            kind
        }
    }


    async initialAndLoadDevice() {
        if (!this.socket) return;
        if (this.device) return console.log('device loaded already')
        const routerRtpCapabilities = await this.socket.request('getRouterRtpCapabilities')
        try {
            this.device = new mediasoupClient.Device()
        } catch (e) {
            return e
        }
        await this.device.load({ routerRtpCapabilities })
        console.log('MediasoupClient Device load successfully');
        return null
    }


    async initialProducerConsumerTransport() {
        const self = this
        if (!self.device) return console.warn('Device not loaded')
        if (self.producerTransport && self.consumerTransport) return console.log('transport aready exists')

        {
            const data = await self.socket.request('createProducerTransport', {
                forceTcp: false,
                rtpCapabilities: self.device.rtpCapabilities,
            })
            if (data.error) return console.log('createProducerTransport error')
            // transportId = data.params.id
            /**
             *  params: {
                    id: transport.id,
                    iceParameters: transport.iceParameters,
                    iceCandidates: transport.iceCandidates,   
                    dtlsParameters: transport.dtlsParameters
                }
             */
            self.producerTransport = self.device.createSendTransport({
                ...data.params,
                iceServers: self.iceServers
            })

            self.producerTransport.on('connect', async ({ dtlsParameters }, successCall, failureCall) => {
                // console.log('producer transport connect');
                self.socket.request('connectProducerTransport', { dtlsParameters })
                    .then(successCall)
                    .catch(failureCall)
            })

            self.producerTransport.on('produce', async ({ kind, rtpParameters }, successCall, failureCall) => {
                try {
                    console.log('produce stream', kind);
                    const { producerId: id } = await self.socket.request('produce', {
                        id: self.producerTransport.id,
                        kind,
                        rtpParameters
                    })
                    successCall({ id })
                } catch (e) {
                    failureCall(e)
                }
            })

            self.producerTransport.on('connectionstatechange', (state) => {
                switch (state) {
                    case 'connecting':
                        break;

                    case 'connected':
                        console.log('producerTransport connected');
                        break;

                    case 'failed':
                        self.producerTransport.close();
                        console.log('SendTranport close');
                        break;

                    default:
                        break;
                }
            });

        }

        {
            const data = await self.socket.request('createConsumerTransport', {
                forceTcp: false
            })

            if (data.error) return console.log('createConsumerTransport failure', data.error)

            self.consumerTransport = self.device.createRecvTransport({
                ...data.params,
                iceServers: self.iceServers
            })

            self.consumerTransport.on('connect', async ({ dtlsParameters }, successCall, failureCall) => {
                console.log('consumer transport connect');
                self.socket.request('connectConsumerTransport', { dtlsParameters })
                    .then(successCall)
                    .catch(failureCall)
            })

            self.consumerTransport.on('connectionstatechange', async (state) => {
                switch (state) {
                    case 'connecting':
                        // console.log('consumer connecting');
                        break;
                    case 'connected':
                        console.log('consumerTransport connected');
                        break;
                    case 'failed':
                        console.log('consumerTransport connect fail');
                        self.consumerTransport.close()
                        break;
                    default:
                        break
                }
            })
        }

    }
}

NAF.adapters.register("mediasoup", MediasoupAdapter);

module.exports = MediasoupAdapter;
