### NAF-Mediasoup-Adapter

#### Why SFU?

P2P architecture of WebRTC is good and easy to implement and scale, and has no pressure on the server side because the stream is transported and received directly to/from the other side, where the server only takes care of `small packet exchange`(candidate/sdp/room info, etc.) but has no awareness of the video/audio stream. However, the pressure goes to the client side. For each new peer coming in, a single client will have to encode/decode/... two more individual streams, which decides the scalability and efficiency of P2P is poor especially when there are more than 5 people in the room video chatting.

<img src="./img/options.png" alt="how to choose the architecture" style="zoom:50%;" />

SFU architecture will mitigate such problems and has better scalability and capacity of media streaming, while it allows the server to do something about the video/audio streaming. Thus, the client will suffer less and enjoy more people concurrently joining the room and chatting via video and voice, with better quality and lower delay.

#### Intro

All the excellent features already provided by [NAF](https://github.com/networked-aframe/networked-aframe) remain the same. The only thing that this mediasoup-adapter does is to allow more clients to have voice/video chat with each other with higher quality and lower delay. You will find it useful especially when there are 8/9 or more players in a single room.

#### Install

```shell
git clone https://github.com/Vesper0704/naf-mediasoup-adapter.git

cd /path/to/naf-mediasoup-adapter

### install the dependencies of NAF
npm install

### make your own ssl certificate and key and place them under ssl directory
openssl genrsa -out server.key 1024
openssl req -new -key server.key -out server.csr
openssl x509 -req -in server.csr -signkey server.key -out server.crt

### run the server
npm start

### open the browser to test (open multiple tabs to see each other)
https://127.0.0.1:8185/examples
```

#### Example

- [demo](./examples/index.html)

#### Demo

- Enable screen sharing and webcam at the same time.

![img](./img/demo.png)

#### Mediasoup

Any questions and details on the mediasoup refer to [mediasoup documentation](https://mediasoup.org/documentation/v3/).

Installation can be found in https://mediasoup.org/documentation/v3/mediasoup/installation/

#### Make it better

I'm just a startup learner and there are a lot more to be fixed and done in the future. If you are interested, you can check out the source code and help me to point out any flaws. I'll appreciate it!!!

#### Issues For Now

- ...