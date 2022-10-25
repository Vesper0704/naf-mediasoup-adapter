module.exports = {
    simulcastMode: true,
    simulcastConfig: {
        encodings:
            [
                { maxBitrate: 100000 },  // low
                { maxBitrate: 300000 },  // medium
                { maxBitrate: 600000 }   // high
            ],
        // codecOptions:
        // {
        //     videoGoogleStartBitrate: 1000
        // }
    },
    iceServers: [
        { "urls": "stun:stun1.l.google.com:19302" },
        { "urls": "stun:stun2.l.google.com:19302" },
    ],
    preferredLayers: {
        // lowest
        spatialLayer: 0
    }
}