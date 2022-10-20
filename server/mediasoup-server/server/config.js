module.exports = {
    listenIp: '0.0.0.0',
    listenPort: 8181,
    sslCrt: `${__dirname}/ssl/server.crt`,
    sslKey: `${__dirname}/ssl/server.key`,
    mediasoup: {
      // Worker settings
      worker: {
        rtcMinPort: 10000,
        rtcMaxPort: 10100,
        logLevel: 'debug',
        logTags: [
          'info',
          'ice',
          'dtls',
          'rtp',
          'srtp',
          'rtcp',
          // 'rtx',
          // 'bwe',
          // 'score',
          // 'simulcast',
          // 'svc'
        ],
        // logInterval: 60000
      },
      // Router settings
      router: {
        mediaCodecs:
          [
            {
              kind: 'audio',
              mimeType: 'audio/opus', //opus音频
              clockRate: 48000,
              channels: 2
            },
            {
              kind: 'video',
              mimeType: 'video/VP8', //vp8视频
              clockRate: 90000,
              parameters:
                {
                  'x-google-start-bitrate': 1000
                }
            },
          ]
      },
      // WebRtcTransport settings
      webRtcTransport: {
        listenIps: [
          {
            ip: '127.0.0.1',
            announcedIp: null,
          }
        ],
        maxIncomingBitrate: 1500000,
        initialAvailableOutgoingBitrate: 1000000,
        // 合理配置 出口带宽一般都会小于入口带宽
      }
    }
  };
  