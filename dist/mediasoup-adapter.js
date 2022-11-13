/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((module) => {

module.exports = {
  simulcastMode: true,
  simulcastConfig: {
    encodings: [{
      maxBitrate: 100000
    }, // low
    {
      maxBitrate: 300000
    }, // medium
    {
      maxBitrate: 600000
    } // high
    ] // codecOptions:
    // {
    //     videoGoogleStartBitrate: 1000
    // }

  },
  iceServers: [{
    "urls": "stun:stun1.l.google.com:19302"
  }, {
    "urls": "stun:stun2.l.google.com:19302"
  }],
  preferredLayers: {
    // lowest
    spatialLayer: 0
  }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* global NAF, io */
var config = __webpack_require__(/*! ./config */ "./src/config.js");

var MediasoupAdapter = /*#__PURE__*/function () {
  function MediasoupAdapter() {
    _classCallCheck(this, MediasoupAdapter);

    if (io === undefined) console.warn('socket.io-client missing');

    if (mediasoupClient === undefined) {
      console.warn('mediasoup-client missing');
    }

    this.app = "default";
    this.room = "default";
    this.occupantListener = null;
    this.myRoomJoinTime = null;
    this.myId = null;
    this.occupants = {}; // id -> joinTimestamp

    this.connectedClients = [];
    this.device = null; // local Device (will connect to server-side router through transport)

    this.producerTransport = null; // producerTransport 

    this.consumerTransport = null; // consumerTransport

    this.videoProducer = {}; // producerId->producer instance

    this.videoConsumers = {}; // consumerId->consumer instance

    this.audioProducer = {}; // producerId->producer instance

    this.audioConsumers = {}; // consumerId->consumer instance

    this.iceServers = config.iceServers;
    this.simulcastMode = config.simulcastMode;
    this.simulcastConfig = config.simulcastConfig; // store video/audio streams of clients

    this.audioStreams = {}; // clientId->audioStream

    this.videoStreams = {}; // clientId->videoStream

    this.pendingAudioRequest = {};
    this.pendingVideoRequest = {};
    this.heartbeatInterval = 20; // in seconds

    this.hearbeatTimer = null;
    this.serverTimeRequests = 0;
    this.timeOffsets = [];
    this.avgTimeOffset = 0;
  }

  _createClass(MediasoupAdapter, [{
    key: "setServerUrl",
    value: function setServerUrl(wsUrl) {
      this.wsUrl = wsUrl;
    }
  }, {
    key: "setApp",
    value: function setApp(appName) {
      this.app = appName;
    }
  }, {
    key: "setRoom",
    value: function setRoom(roomName) {
      this.room = roomName;
    }
  }, {
    key: "setWebRtcOptions",
    value: function setWebRtcOptions(options) {
      if (options.datachannel === false) {// mediasoup-adapter will use ws to sync components
      }

      if (options.audio === true) {
        this.sendAudio = true;
      }

      if (options.video === true) {
        this.sendVideo = true;
      }
    }
  }, {
    key: "setSimulcastMode",
    value: function setSimulcastMode(isSimulcast) {
      this.simulcastMode = isSimulcast;
    }
  }, {
    key: "setServerConnectListeners",
    value: function setServerConnectListeners(successListener, failureListener) {
      this.connectSuccess = successListener;
      this.connectFailure = failureListener;
    }
  }, {
    key: "setRoomOccupantListener",
    value: function setRoomOccupantListener(occupantListener) {
      this.occupantListener = occupantListener;
    }
  }, {
    key: "setDataChannelListeners",
    value: function setDataChannelListeners(openListener, closedListener, messageListener) {
      this.openListener = openListener;
      this.closedListener = closedListener;
      this.messageListener = messageListener;
    }
  }, {
    key: "setHeartbeatTimer",
    value: function setHeartbeatTimer(_heartbeatInterval) {
      var _this = this;

      console.log("reset heartbeatInterval from ".concat(this.heartbeatInterval, "s to ").concat(_heartbeatInterval, "s"));
      this.heartbeatInterval = _heartbeatInterval;
      clearInterval(this.hearbeatTimer);
      this.hearbeatTimer = setInterval(function () {
        _this.socket.emit('keep-alive');
      }, _heartbeatInterval * 1000);
    }
  }, {
    key: "connect",
    value: function connect() {
      var self = this;
      this.updateTimeOffset().then(function () {
        if (!self.wsUrl || self.wsUrl === "/") {
          if (location.protocol === "https:") {
            self.wsUrl = "wss://" + location.host;
          } else {
            self.wsUrl = "ws://" + location.host;
          }
        }

        var socket = self.socket = io(self.wsUrl);

        self.socket.request = function (type, data) {
          return new Promise(function (resolve, reject) {
            try {
              self.socket.emit(type, data, resolve);
            } catch (err) {
              reject(err);
            }
          });
        };

        socket.on("connect", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  NAF.log.write("successfully connected to websocket", socket.id);
                  self.myId = socket.id;
                  self.joinRoom();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
        socket.on("connectSuccess", /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
            var joinedTime;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    joinedTime = data.joinedTime;
                    self.myRoomJoinTime = joinedTime;
                    NAF.log.write("Successfully joined room", self.room, "at server time", joinedTime);
                    self.connectSuccess(self.myId);
                    self.setHeartbeatTimer(self.heartbeatInterval);
                    setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                      var localStream, track, params, producer, _track, _params, _producer;

                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return self.initialAndLoadDevice();

                            case 2:
                              _context2.next = 4;
                              return self.initialProducerConsumerTransport();

                            case 4:
                              _context2.next = 6;
                              return self.gatherExistingProducers();

                            case 6:
                              // console.warn(self.device, self.producerTransport, self.consumerTransport);
                              localStream = null;
                              _context2.prev = 7;

                              if (!(self.sendAudio || self.sendVideo)) {
                                _context2.next = 12;
                                break;
                              }

                              _context2.next = 11;
                              return navigator.mediaDevices.getUserMedia({
                                video: self.sendVideo,
                                audio: self.sendAudio
                              });

                            case 11:
                              localStream = _context2.sent;

                            case 12:
                              _context2.next = 18;
                              break;

                            case 14:
                              _context2.prev = 14;
                              _context2.t0 = _context2["catch"](7);
                              // maybe permission denied
                              console.log(_context2.t0);
                              return _context2.abrupt("return");

                            case 18:
                              if (!self.sendAudio) {
                                _context2.next = 36;
                                break;
                              }

                              if (localStream) self.storeAudioStream(self.myId, localStream);

                              if (self.producerTransport) {
                                _context2.next = 22;
                                break;
                              }

                              return _context2.abrupt("return", console.error('producerTransport not created yet'));

                            case 22:
                              if (self.device.canProduce('audio')) {
                                _context2.next = 24;
                                break;
                              }

                              return _context2.abrupt("return", console.error('device does not support audio'));

                            case 24:
                              _context2.prev = 24;
                              track = localStream.getAudioTracks()[0];
                              params = {
                                track: track
                              };
                              _context2.next = 29;
                              return self.producerTransport.produce(params);

                            case 29:
                              producer = _context2.sent;
                              self.audioProducer[producer.id] = producer; // producer.kind === 'audio'

                              _context2.next = 36;
                              break;

                            case 33:
                              _context2.prev = 33;
                              _context2.t1 = _context2["catch"](24);
                              console.error('fail to produce audio stream', _context2.t1);

                            case 36:
                              if (!self.sendVideo) {
                                _context2.next = 54;
                                break;
                              }

                              if (localStream) self.storeVideoStream(self.myId, localStream);

                              if (self.producerTransport) {
                                _context2.next = 40;
                                break;
                              }

                              return _context2.abrupt("return", console.error('producerTransport not created yet'));

                            case 40:
                              if (self.device.canProduce('video')) {
                                _context2.next = 42;
                                break;
                              }

                              return _context2.abrupt("return", console.error('device does not support video'));

                            case 42:
                              _context2.prev = 42;
                              _track = localStream.getVideoTracks()[0];
                              _params = self.simulcastMode ? _objectSpread({
                                track: _track
                              }, self.simulcastConfig) : {
                                track: _track
                              };
                              _context2.next = 47;
                              return self.producerTransport.produce(_params);

                            case 47:
                              _producer = _context2.sent;
                              self.videoProducer[_producer.id] = _producer; // producer.kind === 'video'

                              _context2.next = 54;
                              break;

                            case 51:
                              _context2.prev = 51;
                              _context2.t2 = _context2["catch"](42);
                              console.log('fail to produce video stream', _context2.t2);

                            case 54:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2, null, [[7, 14], [24, 33], [42, 51]]);
                    })), 100);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
        socket.on("error", function (err) {
          console.error("Socket connection failure", err);
          self.connectFailure();
        });
        socket.on("occupantsChanged", function (data) {
          var occupants = data.occupants;
          NAF.log.write('occupants changed', data);
          self.receivedOccupants(occupants);
        });
        socket.on('disconnect', function (reason) {
          // clean up instances
          self.device = null;
          self.producerTransport = self.consumerTransport = null;
          self.removeAudioStream(self.myId);
          self.removeVideoStream(self.myId); // manually reconnect

          socket.connect();
        });
        socket.on('restartIce', /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref4) {
            var iceParameters;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    iceParameters = _ref4.iceParameters;
                    _context4.prev = 1;
                    _context4.next = 4;
                    return self.producerTransport.restartIce({
                      iceParameters: iceParameters
                    });

                  case 4:
                    _context4.next = 9;
                    break;

                  case 6:
                    _context4.prev = 6;
                    _context4.t0 = _context4["catch"](1);
                    console.log('restartIce error', _context4.t0);

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[1, 6]]);
          }));

          return function (_x2) {
            return _ref5.apply(this, arguments);
          };
        }());
        socket.on('newProducer', /*#__PURE__*/function () {
          var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(_ref6) {
            var producerId, socketId;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    producerId = _ref6.producerId, socketId = _ref6.socketId;
                    self.subscribeStream(producerId, socketId);

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          return function (_x3) {
            return _ref7.apply(this, arguments);
          };
        }());

        function receiveData(packet) {
          var from = packet.from;
          var type = packet.type;
          var data = packet.data;
          self.messageListener(from, type, data);
        }

        socket.on("send", receiveData);
        socket.on("broadcast", receiveData);
      });
    }
  }, {
    key: "joinRoom",
    value: function joinRoom() {
      NAF.log.write("Joining room", this.room);
      this.socket.emit("joinRoom", {
        room: this.room
      });
    }
  }, {
    key: "receivedOccupants",
    value: function receivedOccupants(occupants) {
      delete occupants[this.myId];
      this.occupants = occupants;
      this.occupantListener(occupants);
    }
  }, {
    key: "shouldStartConnectionTo",
    value: function shouldStartConnectionTo(client) {
      return true;
    }
  }, {
    key: "startStreamConnection",
    value: function startStreamConnection(remoteId) {
      this.connectedClients.push(remoteId);
      this.openListener(remoteId);
    }
  }, {
    key: "closeStreamConnection",
    value: function closeStreamConnection(clientId) {
      this.connectedClients = this.connectedClients.filter(function (c) {
        return c != clientId;
      });
      this.closedListener(clientId);
    }
  }, {
    key: "getConnectStatus",
    value: function getConnectStatus(clientId) {
      var connected = this.connectedClients.indexOf(clientId) != -1;

      if (connected) {
        return NAF.adapters.IS_CONNECTED;
      } else {
        return NAF.adapters.NOT_CONNECTED;
      }
    }
  }, {
    key: "sendData",
    value: function sendData(to, type, data) {
      this.sendDataGuaranteed(to, type, data);
    }
  }, {
    key: "sendDataGuaranteed",
    value: function sendDataGuaranteed(to, type, data) {
      var packet = {
        from: this.myId,
        to: to,
        type: type,
        data: data,
        sending: true
      };

      if (this.socket) {
        this.socket.emit("send", packet);
      } else {
        NAF.log.warn('SocketIO socket not created yet');
      }
    }
  }, {
    key: "broadcastData",
    value: function broadcastData(type, data) {
      this.broadcastDataGuaranteed(type, data);
    }
  }, {
    key: "broadcastDataGuaranteed",
    value: function broadcastDataGuaranteed(type, data) {
      var packet = {
        from: this.myId,
        type: type,
        data: data,
        broadcasting: true
      };

      if (this.socket) {
        this.socket.emit("broadcast", packet);
      } else {
        NAF.log.warn('SocketIO socket not created yet');
      }
    }
  }, {
    key: "removeAudioStream",
    value: function removeAudioStream(clientId) {
      delete this.audioStreams[clientId];
    }
  }, {
    key: "removeVideoStream",
    value: function removeVideoStream(clientId) {
      delete this.videoStreams[clientId];
    }
  }, {
    key: "storeAudioStream",
    value: function storeAudioStream(clientId, stream) {
      this.audioStreams[clientId] = stream;

      if (this.pendingAudioRequest[clientId]) {
        NAF.log.write("Received pending audio for " + clientId);
        this.pendingAudioRequest[clientId](stream);
        delete this.pendingAudioRequest[clientId](stream);
      }
    }
  }, {
    key: "storeVideoStream",
    value: function storeVideoStream(clientId, stream) {
      this.videoStreams[clientId] = stream;

      if (this.pendingVideoRequest[clientId]) {
        NAF.log.write("Received pending video for " + clientId);
        this.pendingVideoRequest[clientId](stream);
        delete this.pendingVideoRequest[clientId](stream);
      }
    }
  }, {
    key: "getMediaStream",
    value: function getMediaStream(clientId) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'audio';
      console.log("getMediaStream ".concat(type));
      var self = this;

      if (type === 'audio') {
        if (this.audioStreams[clientId]) {
          NAF.log.write("Already had audio for " + clientId);
          return Promise.resolve(this.audioStreams[clientId]);
        } else {
          NAF.log.write("Waiting on audio for " + clientId);
          return new Promise(function (resolve) {
            self.pendingAudioRequest[clientId] = resolve;
          });
        }
      } else if (type === 'video') {
        if (this.videoStreams[clientId]) {
          NAF.log.write("Already had video for " + clientId);
          return Promise.resolve(this.videoStreams[clientId]);
        } else {
          NAF.log.write("Waiting on video for " + clientId);
          return new Promise(function (resolve) {
            self.pendingVideoRequest[clientId] = resolve;
          });
        }
      }
    }
  }, {
    key: "pauseStream",
    value: function pauseStream() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'video';

      try {
        var producers = Object.values(type === 'video' ? this.videoProducer : this.audioProducer);
        var length = producers.length;
        if (!producers || !length) return {
          e: null,
          msg: "no ".concat(type, " producers now"),
          length: length
        };
        producers.forEach(function (producer) {
          console.log(producer);
          producer.pause();
        });
        return {
          e: null,
          msg: 'pause stream success',
          length: length
        };
      } catch (e) {
        console.log('pauseStream error', e);
        return {
          e: e
        };
      }
    }
  }, {
    key: "resumeStream",
    value: function resumeStream() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'video';

      try {
        var producers = Object.values(type === 'video' ? this.videoProducer : this.audioProducer);
        var length = producers.length;
        if (!producers || !length) return {
          e: null,
          msg: "no ".concat(type, " producers now"),
          length: length
        };
        producers.forEach(function (producer) {
          console.log(producer);
          producer.resume();
        });
        return {
          e: null,
          msg: 'resume stream success',
          length: length
        };
      } catch (e) {
        console.log('resumeStream error', e);
        return {
          e: e
        };
      }
    }
  }, {
    key: "updateTimeOffset",
    value: function updateTimeOffset() {
      var _this2 = this;

      var clientSentTime = Date.now() + this.avgTimeOffset;
      return fetch(document.location.href, {
        method: "HEAD",
        cache: "no-cache"
      }).then(function (res) {
        var precision = 1000;
        var serverReceivedTime = new Date(res.headers.get("Date")).getTime() + precision / 2;
        var clientReceivedTime = Date.now();
        var serverTime = serverReceivedTime + (clientReceivedTime - clientSentTime) / 2;
        var timeOffset = serverTime - clientReceivedTime;
        _this2.serverTimeRequests++;

        if (_this2.serverTimeRequests <= 10) {
          _this2.timeOffsets.push(timeOffset);
        } else {
          _this2.timeOffsets[_this2.serverTimeRequests % 10] = timeOffset;
        }

        _this2.avgTimeOffset = _this2.timeOffsets.reduce(function (acc, offset) {
          return acc += offset;
        }, 0) / _this2.timeOffsets.length;

        if (_this2.serverTimeRequests > 10) {
          setTimeout(function () {
            return _this2.updateTimeOffset();
          }, 5 * 60 * 1000); // Sync clock every 5 minutes.
        } else {
          _this2.updateTimeOffset();
        }
      });
    }
  }, {
    key: "getServerTime",
    value: function getServerTime() {
      return new Date().getTime() + this.avgTimeOffset;
    }
    /** MEDIASOUP RELATED FUNCTIONS **/

  }, {
    key: "gatherExistingProducers",
    value: function () {
      var _gatherExistingProducers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this3 = this;

        var _yield$this$socket$re, producerList;

        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.socket.request('gatherProducers');

              case 2:
                _yield$this$socket$re = _context7.sent;
                producerList = _yield$this$socket$re.producerList;

                if (producerList.length) {
                  _context7.next = 6;
                  break;
                }

                return _context7.abrupt("return", console.log('no producers currently', producerList));

              case 6:
                producerList.forEach( /*#__PURE__*/function () {
                  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref8) {
                    var producerId, socketId;
                    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            producerId = _ref8.producerId, socketId = _ref8.socketId;
                            _context6.next = 3;
                            return _this3.subscribeStream(producerId, socketId);

                          case 3:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));

                  return function (_x4) {
                    return _ref9.apply(this, arguments);
                  };
                }());

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function gatherExistingProducers() {
        return _gatherExistingProducers.apply(this, arguments);
      }

      return gatherExistingProducers;
    }()
  }, {
    key: "subscribeStream",
    value: function () {
      var _subscribeStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(producerId, socketId) {
        var _yield$this$getConsum, kind, consumerstream;

        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (this.consumerTransport) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt("return", console.log("consumerTransport doesn't exist"));

              case 2:
                _context8.next = 4;
                return this.getConsumeStream(this.consumerTransport, producerId);

              case 4:
                _yield$this$getConsum = _context8.sent;
                kind = _yield$this$getConsum.kind;
                consumerstream = _yield$this$getConsum.newStream;
                console.log('subscribe sucessfully', {
                  kind: kind,
                  consumerstream: consumerstream
                });
                _context8.t0 = kind;
                _context8.next = _context8.t0 === 'video' ? 11 : _context8.t0 === 'audio' ? 13 : 15;
                break;

              case 11:
                this.storeVideoStream(socketId, consumerstream);
                return _context8.abrupt("break", 17);

              case 13:
                this.storeAudioStream(socketId, consumerstream);
                return _context8.abrupt("break", 17);

              case 15:
                console.log('unknown kind', kind);
                return _context8.abrupt("break", 17);

              case 17:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function subscribeStream(_x5, _x6) {
        return _subscribeStream.apply(this, arguments);
      }

      return subscribeStream;
    }()
  }, {
    key: "getConsumeStream",
    value: function () {
      var _getConsumeStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(consumerTransport, _producerId) {
        var rtpCapabilities, result, producerId, id, kind, rtpParameters, consumer, newStream;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                rtpCapabilities = this.device.rtpCapabilities;
                _context9.next = 3;
                return this.socket.request('consumeStream', {
                  rtpCapabilities: rtpCapabilities,
                  _producerId: _producerId
                });

              case 3:
                result = _context9.sent;

                if (result) {
                  _context9.next = 6;
                  break;
                }

                return _context9.abrupt("return", null);

              case 6:
                producerId = result.producerId, id = result.id, kind = result.kind, rtpParameters = result.rtpParameters;
                _context9.next = 9;
                return consumerTransport.consume({
                  producerId: producerId,
                  id: id,
                  kind: kind,
                  rtpParameters: rtpParameters,
                  codecOptions: {}
                });

              case 9:
                consumer = _context9.sent;
                newStream = new MediaStream();
                newStream.addTrack(consumer.track);
                return _context9.abrupt("return", {
                  newStream: newStream,
                  kind: kind
                });

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getConsumeStream(_x7, _x8) {
        return _getConsumeStream.apply(this, arguments);
      }

      return getConsumeStream;
    }()
  }, {
    key: "initialAndLoadDevice",
    value: function () {
      var _initialAndLoadDevice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var routerRtpCapabilities;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (this.socket) {
                  _context10.next = 2;
                  break;
                }

                return _context10.abrupt("return");

              case 2:
                if (!this.device) {
                  _context10.next = 4;
                  break;
                }

                return _context10.abrupt("return", console.log('device loaded already'));

              case 4:
                _context10.next = 6;
                return this.socket.request('getRouterRtpCapabilities');

              case 6:
                routerRtpCapabilities = _context10.sent;
                _context10.prev = 7;
                this.device = new mediasoupClient.Device();
                _context10.next = 14;
                break;

              case 11:
                _context10.prev = 11;
                _context10.t0 = _context10["catch"](7);
                return _context10.abrupt("return", _context10.t0);

              case 14:
                _context10.next = 16;
                return this.device.load({
                  routerRtpCapabilities: routerRtpCapabilities
                });

              case 16:
                console.log('MediasoupClient Device load successfully');
                return _context10.abrupt("return", null);

              case 18:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[7, 11]]);
      }));

      function initialAndLoadDevice() {
        return _initialAndLoadDevice.apply(this, arguments);
      }

      return initialAndLoadDevice;
    }()
  }, {
    key: "initialProducerConsumerTransport",
    value: function () {
      var _initialProducerConsumerTransport = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        var self, data, _data;

        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                self = this;

                if (self.device) {
                  _context15.next = 3;
                  break;
                }

                return _context15.abrupt("return", console.warn('Device not loaded'));

              case 3:
                if (!(self.producerTransport && self.consumerTransport)) {
                  _context15.next = 5;
                  break;
                }

                return _context15.abrupt("return", console.log('transport aready exists'));

              case 5:
                _context15.next = 7;
                return self.socket.request('createProducerTransport', {
                  forceTcp: false,
                  rtpCapabilities: self.device.rtpCapabilities
                });

              case 7:
                data = _context15.sent;

                if (!data.error) {
                  _context15.next = 10;
                  break;
                }

                return _context15.abrupt("return", console.log('createProducerTransport error'));

              case 10:
                // transportId = data.params.id

                /**
                 *  params: {
                        id: transport.id,
                        iceParameters: transport.iceParameters,
                        iceCandidates: transport.iceCandidates,   
                        dtlsParameters: transport.dtlsParameters
                    }
                 */
                self.producerTransport = self.device.createSendTransport(_objectSpread(_objectSpread({}, data.params), {}, {
                  iceServers: self.iceServers
                }));
                self.producerTransport.on('connect', /*#__PURE__*/function () {
                  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(_ref10, successCall, failureCall) {
                    var dtlsParameters;
                    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            dtlsParameters = _ref10.dtlsParameters;
                            // console.log('producer transport connect');
                            self.socket.request('connectProducerTransport', {
                              dtlsParameters: dtlsParameters
                            }).then(successCall)["catch"](failureCall);

                          case 2:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x9, _x10, _x11) {
                    return _ref11.apply(this, arguments);
                  };
                }());
                self.producerTransport.on('produce', /*#__PURE__*/function () {
                  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(_ref12, successCall, failureCall) {
                    var kind, rtpParameters, _yield$self$socket$re, id;

                    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                      while (1) {
                        switch (_context12.prev = _context12.next) {
                          case 0:
                            kind = _ref12.kind, rtpParameters = _ref12.rtpParameters;
                            _context12.prev = 1;
                            console.log('produce stream', kind);
                            _context12.next = 5;
                            return self.socket.request('produce', {
                              id: self.producerTransport.id,
                              kind: kind,
                              rtpParameters: rtpParameters
                            });

                          case 5:
                            _yield$self$socket$re = _context12.sent;
                            id = _yield$self$socket$re.producerId;
                            successCall({
                              id: id
                            });
                            _context12.next = 13;
                            break;

                          case 10:
                            _context12.prev = 10;
                            _context12.t0 = _context12["catch"](1);
                            failureCall(_context12.t0);

                          case 13:
                          case "end":
                            return _context12.stop();
                        }
                      }
                    }, _callee12, null, [[1, 10]]);
                  }));

                  return function (_x12, _x13, _x14) {
                    return _ref13.apply(this, arguments);
                  };
                }());
                self.producerTransport.on('connectionstatechange', function (state) {
                  switch (state) {
                    case 'connecting':
                      break;

                    case 'connected':
                      console.log('producerTransport connected');
                      break;

                    case 'failed':
                      self.producerTransport.close();
                      console.log('producerTransport connect fail and close');
                      break;

                    default:
                      break;
                  }
                });
                _context15.next = 16;
                return self.socket.request('createConsumerTransport', {
                  forceTcp: false
                });

              case 16:
                _data = _context15.sent;

                if (!_data.error) {
                  _context15.next = 19;
                  break;
                }

                return _context15.abrupt("return", console.log('createConsumerTransport failure', _data.error));

              case 19:
                self.consumerTransport = self.device.createRecvTransport(_objectSpread(_objectSpread({}, _data.params), {}, {
                  iceServers: self.iceServers
                }));
                self.consumerTransport.on('connect', /*#__PURE__*/function () {
                  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(_ref14, successCall, failureCall) {
                    var dtlsParameters;
                    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            dtlsParameters = _ref14.dtlsParameters;
                            console.log('consumer transport connect');
                            self.socket.request('connectConsumerTransport', {
                              dtlsParameters: dtlsParameters
                            }).then(successCall)["catch"](failureCall);

                          case 3:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));

                  return function (_x15, _x16, _x17) {
                    return _ref15.apply(this, arguments);
                  };
                }());
                self.consumerTransport.on('connectionstatechange', /*#__PURE__*/function () {
                  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(state) {
                    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                      while (1) {
                        switch (_context14.prev = _context14.next) {
                          case 0:
                            _context14.t0 = state;
                            _context14.next = _context14.t0 === 'connecting' ? 3 : _context14.t0 === 'connected' ? 4 : _context14.t0 === 'failed' ? 6 : 9;
                            break;

                          case 3:
                            return _context14.abrupt("break", 10);

                          case 4:
                            console.log('consumerTransport connected');
                            return _context14.abrupt("break", 10);

                          case 6:
                            console.log('consumerTransport connect fail and close');
                            self.consumerTransport.close();
                            return _context14.abrupt("break", 10);

                          case 9:
                            return _context14.abrupt("break", 10);

                          case 10:
                          case "end":
                            return _context14.stop();
                        }
                      }
                    }, _callee14);
                  }));

                  return function (_x18) {
                    return _ref16.apply(this, arguments);
                  };
                }());

              case 22:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function initialProducerConsumerTransport() {
        return _initialProducerConsumerTransport.apply(this, arguments);
      }

      return initialProducerConsumerTransport;
    }()
  }]);

  return MediasoupAdapter;
}();

NAF.adapters.register("mediasoup", MediasoupAdapter);
module.exports = MediasoupAdapter;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7VUMxbUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXR3b3JrZWQtYWZyYW1lLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9uZXR3b3JrZWQtYWZyYW1lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL25ldHdvcmtlZC1hZnJhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV0d29ya2VkLWFmcmFtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL25ldHdvcmtlZC1hZnJhbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL25ldHdvcmtlZC1hZnJhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHNpbXVsY2FzdE1vZGU6IHRydWUsXG4gICAgc2ltdWxjYXN0Q29uZmlnOiB7XG4gICAgICAgIGVuY29kaW5nczpcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7IG1heEJpdHJhdGU6IDEwMDAwMCB9LCAgLy8gbG93XG4gICAgICAgICAgICAgICAgeyBtYXhCaXRyYXRlOiAzMDAwMDAgfSwgIC8vIG1lZGl1bVxuICAgICAgICAgICAgICAgIHsgbWF4Qml0cmF0ZTogNjAwMDAwIH0gICAvLyBoaWdoXG4gICAgICAgICAgICBdLFxuICAgICAgICAvLyBjb2RlY09wdGlvbnM6XG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIHZpZGVvR29vZ2xlU3RhcnRCaXRyYXRlOiAxMDAwXG4gICAgICAgIC8vIH1cbiAgICB9LFxuICAgIGljZVNlcnZlcnM6IFtcbiAgICAgICAgeyBcInVybHNcIjogXCJzdHVuOnN0dW4xLmwuZ29vZ2xlLmNvbToxOTMwMlwiIH0sXG4gICAgICAgIHsgXCJ1cmxzXCI6IFwic3R1bjpzdHVuMi5sLmdvb2dsZS5jb206MTkzMDJcIiB9LFxuICAgIF0sXG4gICAgcHJlZmVycmVkTGF5ZXJzOiB7XG4gICAgICAgIC8vIGxvd2VzdFxuICAgICAgICBzcGF0aWFsTGF5ZXI6IDBcbiAgICB9XG59IiwiLyogZ2xvYmFsIE5BRiwgaW8gKi9cbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJylcbmNsYXNzIE1lZGlhc291cEFkYXB0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoaW8gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignc29ja2V0LmlvLWNsaWVudCBtaXNzaW5nJylcbiAgICAgICAgaWYgKG1lZGlhc291cENsaWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ21lZGlhc291cC1jbGllbnQgbWlzc2luZycpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFwcCA9IFwiZGVmYXVsdFwiO1xuICAgICAgICB0aGlzLnJvb20gPSBcImRlZmF1bHRcIjtcbiAgICAgICAgdGhpcy5vY2N1cGFudExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5teVJvb21Kb2luVGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMubXlJZCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5vY2N1cGFudHMgPSB7fTsgLy8gaWQgLT4gam9pblRpbWVzdGFtcFxuICAgICAgICB0aGlzLmNvbm5lY3RlZENsaWVudHMgPSBbXTtcblxuICAgICAgICB0aGlzLmRldmljZSA9IG51bGw7IC8vIGxvY2FsIERldmljZSAod2lsbCBjb25uZWN0IHRvIHNlcnZlci1zaWRlIHJvdXRlciB0aHJvdWdoIHRyYW5zcG9ydClcblxuICAgICAgICB0aGlzLnByb2R1Y2VyVHJhbnNwb3J0ID0gbnVsbDsgICAvLyBwcm9kdWNlclRyYW5zcG9ydCBcbiAgICAgICAgdGhpcy5jb25zdW1lclRyYW5zcG9ydCA9IG51bGw7ICAgLy8gY29uc3VtZXJUcmFuc3BvcnRcblxuICAgICAgICB0aGlzLnZpZGVvUHJvZHVjZXIgPSB7fTsgICAvLyBwcm9kdWNlcklkLT5wcm9kdWNlciBpbnN0YW5jZVxuICAgICAgICB0aGlzLnZpZGVvQ29uc3VtZXJzID0ge307ICAvLyBjb25zdW1lcklkLT5jb25zdW1lciBpbnN0YW5jZVxuXG4gICAgICAgIHRoaXMuYXVkaW9Qcm9kdWNlciA9IHt9OyAgIC8vIHByb2R1Y2VySWQtPnByb2R1Y2VyIGluc3RhbmNlXG4gICAgICAgIHRoaXMuYXVkaW9Db25zdW1lcnMgPSB7fTsgIC8vIGNvbnN1bWVySWQtPmNvbnN1bWVyIGluc3RhbmNlXG5cbiAgICAgICAgdGhpcy5pY2VTZXJ2ZXJzID0gY29uZmlnLmljZVNlcnZlcnM7XG4gICAgICAgIHRoaXMuc2ltdWxjYXN0TW9kZSA9IGNvbmZpZy5zaW11bGNhc3RNb2RlO1xuICAgICAgICB0aGlzLnNpbXVsY2FzdENvbmZpZyA9IGNvbmZpZy5zaW11bGNhc3RDb25maWc7XG5cbiAgICAgICAgLy8gc3RvcmUgdmlkZW8vYXVkaW8gc3RyZWFtcyBvZiBjbGllbnRzXG4gICAgICAgIHRoaXMuYXVkaW9TdHJlYW1zID0ge307ICAvLyBjbGllbnRJZC0+YXVkaW9TdHJlYW1cbiAgICAgICAgdGhpcy52aWRlb1N0cmVhbXMgPSB7fTsgIC8vIGNsaWVudElkLT52aWRlb1N0cmVhbVxuICAgICAgICB0aGlzLnBlbmRpbmdBdWRpb1JlcXVlc3QgPSB7fTtcbiAgICAgICAgdGhpcy5wZW5kaW5nVmlkZW9SZXF1ZXN0ID0ge307XG5cbiAgICAgICAgdGhpcy5oZWFydGJlYXRJbnRlcnZhbCA9IDIwIC8vIGluIHNlY29uZHNcbiAgICAgICAgdGhpcy5oZWFyYmVhdFRpbWVyID0gbnVsbFxuXG4gICAgICAgIHRoaXMuc2VydmVyVGltZVJlcXVlc3RzID0gMDtcbiAgICAgICAgdGhpcy50aW1lT2Zmc2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmF2Z1RpbWVPZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIHNldFNlcnZlclVybCh3c1VybCkge1xuICAgICAgICB0aGlzLndzVXJsID0gd3NVcmw7XG4gICAgfVxuXG4gICAgc2V0QXBwKGFwcE5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHBOYW1lO1xuICAgIH1cblxuICAgIHNldFJvb20ocm9vbU5hbWUpIHtcbiAgICAgICAgdGhpcy5yb29tID0gcm9vbU5hbWU7XG4gICAgfVxuXG4gICAgc2V0V2ViUnRjT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmRhdGFjaGFubmVsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gbWVkaWFzb3VwLWFkYXB0ZXIgd2lsbCB1c2Ugd3MgdG8gc3luYyBjb21wb25lbnRzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYXVkaW8gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZEF1ZGlvID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy52aWRlbyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZW5kVmlkZW8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U2ltdWxjYXN0TW9kZShpc1NpbXVsY2FzdCkge1xuICAgICAgICB0aGlzLnNpbXVsY2FzdE1vZGUgPSBpc1NpbXVsY2FzdFxuICAgIH1cblxuICAgIHNldFNlcnZlckNvbm5lY3RMaXN0ZW5lcnMoc3VjY2Vzc0xpc3RlbmVyLCBmYWlsdXJlTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0U3VjY2VzcyA9IHN1Y2Nlc3NMaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5jb25uZWN0RmFpbHVyZSA9IGZhaWx1cmVMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBzZXRSb29tT2NjdXBhbnRMaXN0ZW5lcihvY2N1cGFudExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMub2NjdXBhbnRMaXN0ZW5lciA9IG9jY3VwYW50TGlzdGVuZXI7XG4gICAgfVxuXG4gICAgc2V0RGF0YUNoYW5uZWxMaXN0ZW5lcnMob3Blbkxpc3RlbmVyLCBjbG9zZWRMaXN0ZW5lciwgbWVzc2FnZUxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMub3Blbkxpc3RlbmVyID0gb3Blbkxpc3RlbmVyO1xuICAgICAgICB0aGlzLmNsb3NlZExpc3RlbmVyID0gY2xvc2VkTGlzdGVuZXI7XG4gICAgICAgIHRoaXMubWVzc2FnZUxpc3RlbmVyID0gbWVzc2FnZUxpc3RlbmVyO1xuICAgIH1cblxuICAgIHNldEhlYXJ0YmVhdFRpbWVyKF9oZWFydGJlYXRJbnRlcnZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgcmVzZXQgaGVhcnRiZWF0SW50ZXJ2YWwgZnJvbSAke3RoaXMuaGVhcnRiZWF0SW50ZXJ2YWx9cyB0byAke19oZWFydGJlYXRJbnRlcnZhbH1zYCk7XG4gICAgICAgIHRoaXMuaGVhcnRiZWF0SW50ZXJ2YWwgPSBfaGVhcnRiZWF0SW50ZXJ2YWxcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhlYXJiZWF0VGltZXIpXG4gICAgICAgIHRoaXMuaGVhcmJlYXRUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2tlZXAtYWxpdmUnKVxuICAgICAgICB9LCBfaGVhcnRiZWF0SW50ZXJ2YWwgKiAxMDAwKVxuICAgIH1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudXBkYXRlVGltZU9mZnNldCgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLndzVXJsIHx8IHNlbGYud3NVcmwgPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi53c1VybCA9IFwid3NzOi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi53c1VybCA9IFwid3M6Ly9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ja2V0ID0gc2VsZi5zb2NrZXQgPSBpbyhzZWxmLndzVXJsKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuc29ja2V0LnJlcXVlc3QgPSAodHlwZSwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNvY2tldC5lbWl0KHR5cGUsIGRhdGEsIHJlc29sdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNvY2tldC5vbihcImNvbm5lY3RcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOQUYubG9nLndyaXRlKFwic3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byB3ZWJzb2NrZXRcIiwgc29ja2V0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5teUlkID0gc29ja2V0LmlkO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmpvaW5Sb29tKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJjb25uZWN0U3VjY2Vzc1wiLCBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGpvaW5lZFRpbWUgfSA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5teVJvb21Kb2luVGltZSA9IGpvaW5lZFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJTdWNjZXNzZnVsbHkgam9pbmVkIHJvb21cIiwgc2VsZi5yb29tLCBcImF0IHNlcnZlciB0aW1lXCIsIGpvaW5lZFRpbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdFN1Y2Nlc3Moc2VsZi5teUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldEhlYXJ0YmVhdFRpbWVyKHNlbGYuaGVhcnRiZWF0SW50ZXJ2YWwpXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZWxmLmluaXRpYWxBbmRMb2FkRGV2aWNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNlbGYuaW5pdGlhbFByb2R1Y2VyQ29uc3VtZXJUcmFuc3BvcnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2VsZi5nYXRoZXJFeGlzdGluZ1Byb2R1Y2VycygpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oc2VsZi5kZXZpY2UsIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQsIHNlbGYuY29uc3VtZXJUcmFuc3BvcnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9jYWxTdHJlYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zZW5kQXVkaW8gfHwgc2VsZi5zZW5kVmlkZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlbzogc2VsZi5zZW5kVmlkZW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogc2VsZi5zZW5kQXVkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF5YmUgcGVybWlzc2lvbiBkZW5pZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBhdWRpbyBzdHJlYW1zXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zZW5kQXVkaW8pIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0cmVhbSkgc2VsZi5zdG9yZUF1ZGlvU3RyZWFtKHNlbGYubXlJZCwgbG9jYWxTdHJlYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLnByb2R1Y2VyVHJhbnNwb3J0KSByZXR1cm4gY29uc29sZS5lcnJvcigncHJvZHVjZXJUcmFuc3BvcnQgbm90IGNyZWF0ZWQgeWV0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuZGV2aWNlLmNhblByb2R1Y2UoJ2F1ZGlvJykpIHJldHVybiBjb25zb2xlLmVycm9yKCdkZXZpY2UgZG9lcyBub3Qgc3VwcG9ydCBhdWRpbycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFjayA9IGxvY2FsU3RyZWFtLmdldEF1ZGlvVHJhY2tzKClbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0geyB0cmFjayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y2VyID0gYXdhaXQgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5wcm9kdWNlKHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdWRpb1Byb2R1Y2VyW3Byb2R1Y2VyLmlkXSA9IHByb2R1Y2VyIC8vIHByb2R1Y2VyLmtpbmQgPT09ICdhdWRpbydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZhaWwgdG8gcHJvZHVjZSBhdWRpbyBzdHJlYW0nLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHZpZGVvIHN0cmVhbXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnNlbmRWaWRlbykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RyZWFtKSBzZWxmLnN0b3JlVmlkZW9TdHJlYW0oc2VsZi5teUlkLCBsb2NhbFN0cmVhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYucHJvZHVjZXJUcmFuc3BvcnQpIHJldHVybiBjb25zb2xlLmVycm9yKCdwcm9kdWNlclRyYW5zcG9ydCBub3QgY3JlYXRlZCB5ZXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZi5kZXZpY2UuY2FuUHJvZHVjZSgndmlkZW8nKSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ2RldmljZSBkb2VzIG5vdCBzdXBwb3J0IHZpZGVvJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNrID0gbG9jYWxTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBzZWxmLnNpbXVsY2FzdE1vZGUgPyB7IHRyYWNrLCAuLi5zZWxmLnNpbXVsY2FzdENvbmZpZyB9IDogeyB0cmFjayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y2VyID0gYXdhaXQgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5wcm9kdWNlKHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi52aWRlb1Byb2R1Y2VyW3Byb2R1Y2VyLmlkXSA9IHByb2R1Y2VyIC8vIHByb2R1Y2VyLmtpbmQgPT09ICd2aWRlbydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmYWlsIHRvIHByb2R1Y2UgdmlkZW8gc3RyZWFtJywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJlcnJvclwiLCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU29ja2V0IGNvbm5lY3Rpb24gZmFpbHVyZVwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbm5lY3RGYWlsdXJlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJvY2N1cGFudHNDaGFuZ2VkXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG9jY3VwYW50cyB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZSgnb2NjdXBhbnRzIGNoYW5nZWQnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNlaXZlZE9jY3VwYW50cyhvY2N1cGFudHMpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgcmVhc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xlYW4gdXAgaW5zdGFuY2VzXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGV2aWNlID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0ID0gc2VsZi5jb25zdW1lclRyYW5zcG9ydCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVBdWRpb1N0cmVhbShzZWxmLm15SWQpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlVmlkZW9TdHJlYW0oc2VsZi5teUlkKVxuICAgICAgICAgICAgICAgICAgICAvLyBtYW51YWxseSByZWNvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LmNvbm5lY3QoKVxuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgIHNvY2tldC5vbigncmVzdGFydEljZScsIGFzeW5jICh7IGljZVBhcmFtZXRlcnMgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5yZXN0YXJ0SWNlKHsgaWNlUGFyYW1ldGVycyB9KVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdGFydEljZSBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHNvY2tldC5vbignbmV3UHJvZHVjZXInLCBhc3luYyAoeyBwcm9kdWNlcklkLCBzb2NrZXRJZCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3Vic2NyaWJlU3RyZWFtKHByb2R1Y2VySWQsIHNvY2tldElkKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWNlaXZlRGF0YShwYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJvbSA9IHBhY2tldC5mcm9tO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gcGFja2V0LnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tZXNzYWdlTGlzdGVuZXIoZnJvbSwgdHlwZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKFwic2VuZFwiLCByZWNlaXZlRGF0YSk7XG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKFwiYnJvYWRjYXN0XCIsIHJlY2VpdmVEYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgam9pblJvb20oKSB7XG4gICAgICAgIE5BRi5sb2cud3JpdGUoXCJKb2luaW5nIHJvb21cIiwgdGhpcy5yb29tKTtcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcImpvaW5Sb29tXCIsIHsgcm9vbTogdGhpcy5yb29tIH0pO1xuICAgIH1cblxuICAgIHJlY2VpdmVkT2NjdXBhbnRzKG9jY3VwYW50cykge1xuICAgICAgICBkZWxldGUgb2NjdXBhbnRzW3RoaXMubXlJZF07XG4gICAgICAgIHRoaXMub2NjdXBhbnRzID0gb2NjdXBhbnRzO1xuICAgICAgICB0aGlzLm9jY3VwYW50TGlzdGVuZXIob2NjdXBhbnRzKTtcbiAgICB9XG5cbiAgICBzaG91bGRTdGFydENvbm5lY3Rpb25UbyhjbGllbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhcnRTdHJlYW1Db25uZWN0aW9uKHJlbW90ZUlkKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkQ2xpZW50cy5wdXNoKHJlbW90ZUlkKTtcbiAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXIocmVtb3RlSWQpO1xuICAgIH1cblxuICAgIGNsb3NlU3RyZWFtQ29ubmVjdGlvbihjbGllbnRJZCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RlZENsaWVudHMgPSB0aGlzLmNvbm5lY3RlZENsaWVudHMuZmlsdGVyKGMgPT4gYyAhPSBjbGllbnRJZCk7XG4gICAgICAgIHRoaXMuY2xvc2VkTGlzdGVuZXIoY2xpZW50SWQpO1xuICAgIH1cblxuICAgIGdldENvbm5lY3RTdGF0dXMoY2xpZW50SWQpIHtcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gdGhpcy5jb25uZWN0ZWRDbGllbnRzLmluZGV4T2YoY2xpZW50SWQpICE9IC0xO1xuXG4gICAgICAgIGlmIChjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBOQUYuYWRhcHRlcnMuSVNfQ09OTkVDVEVEO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5BRi5hZGFwdGVycy5OT1RfQ09OTkVDVEVEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZERhdGEodG8sIHR5cGUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5zZW5kRGF0YUd1YXJhbnRlZWQodG8sIHR5cGUsIGRhdGEpO1xuICAgIH1cblxuICAgIHNlbmREYXRhR3VhcmFudGVlZCh0bywgdHlwZSwgZGF0YSkge1xuICAgICAgICBjb25zdCBwYWNrZXQgPSB7XG4gICAgICAgICAgICBmcm9tOiB0aGlzLm15SWQsXG4gICAgICAgICAgICB0byxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgc2VuZGluZzogdHJ1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJzZW5kXCIsIHBhY2tldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOQUYubG9nLndhcm4oJ1NvY2tldElPIHNvY2tldCBub3QgY3JlYXRlZCB5ZXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJyb2FkY2FzdERhdGEodHlwZSwgZGF0YSkge1xuICAgICAgICB0aGlzLmJyb2FkY2FzdERhdGFHdWFyYW50ZWVkKHR5cGUsIGRhdGEpO1xuICAgIH1cblxuICAgIGJyb2FkY2FzdERhdGFHdWFyYW50ZWVkKHR5cGUsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFja2V0ID0ge1xuICAgICAgICAgICAgZnJvbTogdGhpcy5teUlkLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBicm9hZGNhc3Rpbmc6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJicm9hZGNhc3RcIiwgcGFja2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5BRi5sb2cud2FybignU29ja2V0SU8gc29ja2V0IG5vdCBjcmVhdGVkIHlldCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQXVkaW9TdHJlYW0oY2xpZW50SWQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuYXVkaW9TdHJlYW1zW2NsaWVudElkXVxuICAgIH1cblxuICAgIHJlbW92ZVZpZGVvU3RyZWFtKGNsaWVudElkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnZpZGVvU3RyZWFtc1tjbGllbnRJZF1cbiAgICB9XG5cblxuICAgIHN0b3JlQXVkaW9TdHJlYW0oY2xpZW50SWQsIHN0cmVhbSkge1xuICAgICAgICB0aGlzLmF1ZGlvU3RyZWFtc1tjbGllbnRJZF0gPSBzdHJlYW07XG5cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0F1ZGlvUmVxdWVzdFtjbGllbnRJZF0pIHtcbiAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJSZWNlaXZlZCBwZW5kaW5nIGF1ZGlvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ0F1ZGlvUmVxdWVzdFtjbGllbnRJZF0oc3RyZWFtKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdBdWRpb1JlcXVlc3RbY2xpZW50SWRdKHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9yZVZpZGVvU3RyZWFtKGNsaWVudElkLCBzdHJlYW0pIHtcbiAgICAgICAgdGhpcy52aWRlb1N0cmVhbXNbY2xpZW50SWRdID0gc3RyZWFtO1xuXG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdWaWRlb1JlcXVlc3RbY2xpZW50SWRdKSB7XG4gICAgICAgICAgICBOQUYubG9nLndyaXRlKFwiUmVjZWl2ZWQgcGVuZGluZyB2aWRlbyBmb3IgXCIgKyBjbGllbnRJZCk7XG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdWaWRlb1JlcXVlc3RbY2xpZW50SWRdKHN0cmVhbSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nVmlkZW9SZXF1ZXN0W2NsaWVudElkXShzdHJlYW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TWVkaWFTdHJlYW0oY2xpZW50SWQsIHR5cGUgPSAnYXVkaW8nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBnZXRNZWRpYVN0cmVhbSAke3R5cGV9YCk7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdWRpb1N0cmVhbXNbY2xpZW50SWRdKSB7XG4gICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZShcIkFscmVhZHkgaGFkIGF1ZGlvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuYXVkaW9TdHJlYW1zW2NsaWVudElkXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJXYWl0aW5nIG9uIGF1ZGlvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGVuZGluZ0F1ZGlvUmVxdWVzdFtjbGllbnRJZF0gPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZGVvU3RyZWFtc1tjbGllbnRJZF0pIHtcbiAgICAgICAgICAgICAgICBOQUYubG9nLndyaXRlKFwiQWxyZWFkeSBoYWQgdmlkZW8gZm9yIFwiICsgY2xpZW50SWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy52aWRlb1N0cmVhbXNbY2xpZW50SWRdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZShcIldhaXRpbmcgb24gdmlkZW8gZm9yIFwiICsgY2xpZW50SWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wZW5kaW5nVmlkZW9SZXF1ZXN0W2NsaWVudElkXSA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXVzZVN0cmVhbSh0eXBlID0gJ3ZpZGVvJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjZXJzID0gT2JqZWN0LnZhbHVlcyh0eXBlID09PSAndmlkZW8nID8gdGhpcy52aWRlb1Byb2R1Y2VyIDogdGhpcy5hdWRpb1Byb2R1Y2VyKVxuICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHByb2R1Y2Vyc1xuICAgICAgICAgICAgaWYgKCFwcm9kdWNlcnMgfHwgIWxlbmd0aCkgcmV0dXJuIHsgZTogbnVsbCwgbXNnOiBgbm8gJHt0eXBlfSBwcm9kdWNlcnMgbm93YCwgbGVuZ3RoIH1cbiAgICAgICAgICAgIHByb2R1Y2Vycy5mb3JFYWNoKHByb2R1Y2VyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWNlcik7XG4gICAgICAgICAgICAgICAgcHJvZHVjZXIucGF1c2UoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB7IGU6IG51bGwsIG1zZzogJ3BhdXNlIHN0cmVhbSBzdWNjZXNzJywgbGVuZ3RoIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhdXNlU3RyZWFtIGVycm9yJywgZSk7XG4gICAgICAgICAgICByZXR1cm4geyBlIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3VtZVN0cmVhbSh0eXBlID0gJ3ZpZGVvJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjZXJzID0gT2JqZWN0LnZhbHVlcyh0eXBlID09PSAndmlkZW8nID8gdGhpcy52aWRlb1Byb2R1Y2VyIDogdGhpcy5hdWRpb1Byb2R1Y2VyKVxuICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHByb2R1Y2Vyc1xuICAgICAgICAgICAgaWYgKCFwcm9kdWNlcnMgfHwgIWxlbmd0aCkgcmV0dXJuIHsgZTogbnVsbCwgbXNnOiBgbm8gJHt0eXBlfSBwcm9kdWNlcnMgbm93YCwgbGVuZ3RoIH1cbiAgICAgICAgICAgIHByb2R1Y2Vycy5mb3JFYWNoKHByb2R1Y2VyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWNlcik7XG4gICAgICAgICAgICAgICAgcHJvZHVjZXIucmVzdW1lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4geyBlOiBudWxsLCBtc2c6ICdyZXN1bWUgc3RyZWFtIHN1Y2Nlc3MnLCBsZW5ndGggfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdW1lU3RyZWFtIGVycm9yJywgZSk7XG4gICAgICAgICAgICByZXR1cm4geyBlIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVRpbWVPZmZzZXQoKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudFNlbnRUaW1lID0gRGF0ZS5ub3coKSArIHRoaXMuYXZnVGltZU9mZnNldDtcblxuICAgICAgICByZXR1cm4gZmV0Y2goZG9jdW1lbnQubG9jYXRpb24uaHJlZiwgeyBtZXRob2Q6IFwiSEVBRFwiLCBjYWNoZTogXCJuby1jYWNoZVwiIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZWNpc2lvbiA9IDEwMDA7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmVyUmVjZWl2ZWRUaW1lID0gbmV3IERhdGUocmVzLmhlYWRlcnMuZ2V0KFwiRGF0ZVwiKSkuZ2V0VGltZSgpICsgKHByZWNpc2lvbiAvIDIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudFJlY2VpdmVkVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmVyVGltZSA9IHNlcnZlclJlY2VpdmVkVGltZSArICgoY2xpZW50UmVjZWl2ZWRUaW1lIC0gY2xpZW50U2VudFRpbWUpIC8gMik7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZU9mZnNldCA9IHNlcnZlclRpbWUgLSBjbGllbnRSZWNlaXZlZFRpbWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZlclRpbWVSZXF1ZXN0cysrO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VydmVyVGltZVJlcXVlc3RzIDw9IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZU9mZnNldHMucHVzaCh0aW1lT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVPZmZzZXRzW3RoaXMuc2VydmVyVGltZVJlcXVlc3RzICUgMTBdID0gdGltZU9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmF2Z1RpbWVPZmZzZXQgPSB0aGlzLnRpbWVPZmZzZXRzLnJlZHVjZSgoYWNjLCBvZmZzZXQpID0+IGFjYyArPSBvZmZzZXQsIDApIC8gdGhpcy50aW1lT2Zmc2V0cy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJUaW1lUmVxdWVzdHMgPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlVGltZU9mZnNldCgpLCA1ICogNjAgKiAxMDAwKTsgLy8gU3luYyBjbG9jayBldmVyeSA1IG1pbnV0ZXMuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lT2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0U2VydmVyVGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdGhpcy5hdmdUaW1lT2Zmc2V0O1xuICAgIH1cblxuXG5cbiAgICAvKiogTUVESUFTT1VQIFJFTEFURUQgRlVOQ1RJT05TICoqL1xuICAgIGFzeW5jIGdhdGhlckV4aXN0aW5nUHJvZHVjZXJzKCkge1xuXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjZXJMaXN0IH0gPSBhd2FpdCB0aGlzLnNvY2tldC5yZXF1ZXN0KCdnYXRoZXJQcm9kdWNlcnMnKVxuICAgICAgICBpZiAoIXByb2R1Y2VyTGlzdC5sZW5ndGgpIHJldHVybiBjb25zb2xlLmxvZygnbm8gcHJvZHVjZXJzIGN1cnJlbnRseScsIHByb2R1Y2VyTGlzdClcblxuICAgICAgICBwcm9kdWNlckxpc3QuZm9yRWFjaChhc3luYyAoeyBwcm9kdWNlcklkLCBzb2NrZXRJZCB9KSA9PiB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN1YnNjcmliZVN0cmVhbShwcm9kdWNlcklkLCBzb2NrZXRJZClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBzdWJzY3JpYmVTdHJlYW0ocHJvZHVjZXJJZCwgc29ja2V0SWQpIHtcblxuICAgICAgICBpZiAoIXRoaXMuY29uc3VtZXJUcmFuc3BvcnQpIHJldHVybiBjb25zb2xlLmxvZyhgY29uc3VtZXJUcmFuc3BvcnQgZG9lc24ndCBleGlzdGApXG5cbiAgICAgICAgY29uc3QgeyBraW5kLCBuZXdTdHJlYW06IGNvbnN1bWVyc3RyZWFtIH0gPSBhd2FpdCB0aGlzLmdldENvbnN1bWVTdHJlYW0odGhpcy5jb25zdW1lclRyYW5zcG9ydCwgcHJvZHVjZXJJZClcblxuICAgICAgICBjb25zb2xlLmxvZygnc3Vic2NyaWJlIHN1Y2Vzc2Z1bGx5JywgeyBraW5kLCBjb25zdW1lcnN0cmVhbSB9KTtcblxuICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ZpZGVvJzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlVmlkZW9TdHJlYW0oc29ja2V0SWQsIGNvbnN1bWVyc3RyZWFtKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXVkaW8nOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVBdWRpb1N0cmVhbShzb2NrZXRJZCwgY29uc3VtZXJzdHJlYW0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmtub3duIGtpbmQnLCBraW5kKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldENvbnN1bWVTdHJlYW0oY29uc3VtZXJUcmFuc3BvcnQsIF9wcm9kdWNlcklkKSB7XG4gICAgICAgIGNvbnN0IHsgcnRwQ2FwYWJpbGl0aWVzIH0gPSB0aGlzLmRldmljZVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNvY2tldC5yZXF1ZXN0KCdjb25zdW1lU3RyZWFtJywgeyBydHBDYXBhYmlsaXRpZXMsIF9wcm9kdWNlcklkIH0pXG4gICAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gbnVsbFxuXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjZXJJZCwgaWQsIGtpbmQsIHJ0cFBhcmFtZXRlcnMgfSA9IHJlc3VsdFxuICAgICAgICBjb25zdCBjb25zdW1lciA9IGF3YWl0IGNvbnN1bWVyVHJhbnNwb3J0LmNvbnN1bWUoe1xuICAgICAgICAgICAgcHJvZHVjZXJJZCxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIHJ0cFBhcmFtZXRlcnMsXG4gICAgICAgICAgICBjb2RlY09wdGlvbnM6IHt9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbmV3U3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKClcbiAgICAgICAgbmV3U3RyZWFtLmFkZFRyYWNrKGNvbnN1bWVyLnRyYWNrKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV3U3RyZWFtLFxuICAgICAgICAgICAga2luZFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbml0aWFsQW5kTG9hZERldmljZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNvY2tldCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5kZXZpY2UpIHJldHVybiBjb25zb2xlLmxvZygnZGV2aWNlIGxvYWRlZCBhbHJlYWR5JylcbiAgICAgICAgY29uc3Qgcm91dGVyUnRwQ2FwYWJpbGl0aWVzID0gYXdhaXQgdGhpcy5zb2NrZXQucmVxdWVzdCgnZ2V0Um91dGVyUnRwQ2FwYWJpbGl0aWVzJylcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlID0gbmV3IG1lZGlhc291cENsaWVudC5EZXZpY2UoKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuZGV2aWNlLmxvYWQoeyByb3V0ZXJSdHBDYXBhYmlsaXRpZXMgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ01lZGlhc291cENsaWVudCBEZXZpY2UgbG9hZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cblxuICAgIGFzeW5jIGluaXRpYWxQcm9kdWNlckNvbnN1bWVyVHJhbnNwb3J0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAoIXNlbGYuZGV2aWNlKSByZXR1cm4gY29uc29sZS53YXJuKCdEZXZpY2Ugbm90IGxvYWRlZCcpXG4gICAgICAgIGlmIChzZWxmLnByb2R1Y2VyVHJhbnNwb3J0ICYmIHNlbGYuY29uc3VtZXJUcmFuc3BvcnQpIHJldHVybiBjb25zb2xlLmxvZygndHJhbnNwb3J0IGFyZWFkeSBleGlzdHMnKVxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZWxmLnNvY2tldC5yZXF1ZXN0KCdjcmVhdGVQcm9kdWNlclRyYW5zcG9ydCcsIHtcbiAgICAgICAgICAgICAgICBmb3JjZVRjcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcnRwQ2FwYWJpbGl0aWVzOiBzZWxmLmRldmljZS5ydHBDYXBhYmlsaXRpZXMsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiBjb25zb2xlLmxvZygnY3JlYXRlUHJvZHVjZXJUcmFuc3BvcnQgZXJyb3InKVxuICAgICAgICAgICAgLy8gdHJhbnNwb3J0SWQgPSBkYXRhLnBhcmFtcy5pZFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0cmFuc3BvcnQuaWQsXG4gICAgICAgICAgICAgICAgICAgIGljZVBhcmFtZXRlcnM6IHRyYW5zcG9ydC5pY2VQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAgICAgICBpY2VDYW5kaWRhdGVzOiB0cmFuc3BvcnQuaWNlQ2FuZGlkYXRlcywgICBcbiAgICAgICAgICAgICAgICAgICAgZHRsc1BhcmFtZXRlcnM6IHRyYW5zcG9ydC5kdGxzUGFyYW1ldGVyc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZi5wcm9kdWNlclRyYW5zcG9ydCA9IHNlbGYuZGV2aWNlLmNyZWF0ZVNlbmRUcmFuc3BvcnQoe1xuICAgICAgICAgICAgICAgIC4uLmRhdGEucGFyYW1zLFxuICAgICAgICAgICAgICAgIGljZVNlcnZlcnM6IHNlbGYuaWNlU2VydmVyc1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5vbignY29ubmVjdCcsIGFzeW5jICh7IGR0bHNQYXJhbWV0ZXJzIH0sIHN1Y2Nlc3NDYWxsLCBmYWlsdXJlQ2FsbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwcm9kdWNlciB0cmFuc3BvcnQgY29ubmVjdCcpO1xuICAgICAgICAgICAgICAgIHNlbGYuc29ja2V0LnJlcXVlc3QoJ2Nvbm5lY3RQcm9kdWNlclRyYW5zcG9ydCcsIHsgZHRsc1BhcmFtZXRlcnMgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oc3VjY2Vzc0NhbGwpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmYWlsdXJlQ2FsbClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQub24oJ3Byb2R1Y2UnLCBhc3luYyAoeyBraW5kLCBydHBQYXJhbWV0ZXJzIH0sIHN1Y2Nlc3NDYWxsLCBmYWlsdXJlQ2FsbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9kdWNlIHN0cmVhbScsIGtpbmQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHByb2R1Y2VySWQ6IGlkIH0gPSBhd2FpdCBzZWxmLnNvY2tldC5yZXF1ZXN0KCdwcm9kdWNlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHNlbGYucHJvZHVjZXJUcmFuc3BvcnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnRwUGFyYW1ldGVyc1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbCh7IGlkIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBmYWlsdXJlQ2FsbChlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQub24oJ2Nvbm5lY3Rpb25zdGF0ZWNoYW5nZScsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29ubmVjdGluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb25uZWN0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2R1Y2VyVHJhbnNwb3J0IGNvbm5lY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZmFpbGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9kdWNlclRyYW5zcG9ydCBjb25uZWN0IGZhaWwgYW5kIGNsb3NlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZWxmLnNvY2tldC5yZXF1ZXN0KCdjcmVhdGVDb25zdW1lclRyYW5zcG9ydCcsIHtcbiAgICAgICAgICAgICAgICBmb3JjZVRjcDogZmFsc2VcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSByZXR1cm4gY29uc29sZS5sb2coJ2NyZWF0ZUNvbnN1bWVyVHJhbnNwb3J0IGZhaWx1cmUnLCBkYXRhLmVycm9yKVxuXG4gICAgICAgICAgICBzZWxmLmNvbnN1bWVyVHJhbnNwb3J0ID0gc2VsZi5kZXZpY2UuY3JlYXRlUmVjdlRyYW5zcG9ydCh7XG4gICAgICAgICAgICAgICAgLi4uZGF0YS5wYXJhbXMsXG4gICAgICAgICAgICAgICAgaWNlU2VydmVyczogc2VsZi5pY2VTZXJ2ZXJzXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzZWxmLmNvbnN1bWVyVHJhbnNwb3J0Lm9uKCdjb25uZWN0JywgYXN5bmMgKHsgZHRsc1BhcmFtZXRlcnMgfSwgc3VjY2Vzc0NhbGwsIGZhaWx1cmVDYWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbnN1bWVyIHRyYW5zcG9ydCBjb25uZWN0Jyk7XG4gICAgICAgICAgICAgICAgc2VsZi5zb2NrZXQucmVxdWVzdCgnY29ubmVjdENvbnN1bWVyVHJhbnNwb3J0JywgeyBkdGxzUGFyYW1ldGVycyB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihzdWNjZXNzQ2FsbClcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZhaWx1cmVDYWxsKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2VsZi5jb25zdW1lclRyYW5zcG9ydC5vbignY29ubmVjdGlvbnN0YXRlY2hhbmdlJywgYXN5bmMgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb25uZWN0aW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb25zdW1lciBjb25uZWN0aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29ubmVjdGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25zdW1lclRyYW5zcG9ydCBjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmYWlsZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbnN1bWVyVHJhbnNwb3J0IGNvbm5lY3QgZmFpbCBhbmQgY2xvc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29uc3VtZXJUcmFuc3BvcnQuY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuTkFGLmFkYXB0ZXJzLnJlZ2lzdGVyKFwibWVkaWFzb3VwXCIsIE1lZGlhc291cEFkYXB0ZXIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhc291cEFkYXB0ZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNpbXVsY2FzdE1vZGUiLCJzaW11bGNhc3RDb25maWciLCJlbmNvZGluZ3MiLCJtYXhCaXRyYXRlIiwiaWNlU2VydmVycyIsInByZWZlcnJlZExheWVycyIsInNwYXRpYWxMYXllciIsImNvbmZpZyIsInJlcXVpcmUiLCJNZWRpYXNvdXBBZGFwdGVyIiwiaW8iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwid2FybiIsIm1lZGlhc291cENsaWVudCIsImFwcCIsInJvb20iLCJvY2N1cGFudExpc3RlbmVyIiwibXlSb29tSm9pblRpbWUiLCJteUlkIiwib2NjdXBhbnRzIiwiY29ubmVjdGVkQ2xpZW50cyIsImRldmljZSIsInByb2R1Y2VyVHJhbnNwb3J0IiwiY29uc3VtZXJUcmFuc3BvcnQiLCJ2aWRlb1Byb2R1Y2VyIiwidmlkZW9Db25zdW1lcnMiLCJhdWRpb1Byb2R1Y2VyIiwiYXVkaW9Db25zdW1lcnMiLCJhdWRpb1N0cmVhbXMiLCJ2aWRlb1N0cmVhbXMiLCJwZW5kaW5nQXVkaW9SZXF1ZXN0IiwicGVuZGluZ1ZpZGVvUmVxdWVzdCIsImhlYXJ0YmVhdEludGVydmFsIiwiaGVhcmJlYXRUaW1lciIsInNlcnZlclRpbWVSZXF1ZXN0cyIsInRpbWVPZmZzZXRzIiwiYXZnVGltZU9mZnNldCIsIndzVXJsIiwiYXBwTmFtZSIsInJvb21OYW1lIiwib3B0aW9ucyIsImRhdGFjaGFubmVsIiwiYXVkaW8iLCJzZW5kQXVkaW8iLCJ2aWRlbyIsInNlbmRWaWRlbyIsImlzU2ltdWxjYXN0Iiwic3VjY2Vzc0xpc3RlbmVyIiwiZmFpbHVyZUxpc3RlbmVyIiwiY29ubmVjdFN1Y2Nlc3MiLCJjb25uZWN0RmFpbHVyZSIsIm9wZW5MaXN0ZW5lciIsImNsb3NlZExpc3RlbmVyIiwibWVzc2FnZUxpc3RlbmVyIiwiX2hlYXJ0YmVhdEludGVydmFsIiwibG9nIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwic29ja2V0IiwiZW1pdCIsInNlbGYiLCJ1cGRhdGVUaW1lT2Zmc2V0IiwidGhlbiIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0IiwicmVxdWVzdCIsInR5cGUiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJvbiIsIk5BRiIsIndyaXRlIiwiaWQiLCJqb2luUm9vbSIsImpvaW5lZFRpbWUiLCJzZXRIZWFydGJlYXRUaW1lciIsInNldFRpbWVvdXQiLCJpbml0aWFsQW5kTG9hZERldmljZSIsImluaXRpYWxQcm9kdWNlckNvbnN1bWVyVHJhbnNwb3J0IiwiZ2F0aGVyRXhpc3RpbmdQcm9kdWNlcnMiLCJsb2NhbFN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInN0b3JlQXVkaW9TdHJlYW0iLCJlcnJvciIsImNhblByb2R1Y2UiLCJ0cmFjayIsImdldEF1ZGlvVHJhY2tzIiwicGFyYW1zIiwicHJvZHVjZSIsInByb2R1Y2VyIiwic3RvcmVWaWRlb1N0cmVhbSIsImdldFZpZGVvVHJhY2tzIiwicmVjZWl2ZWRPY2N1cGFudHMiLCJyZWFzb24iLCJyZW1vdmVBdWRpb1N0cmVhbSIsInJlbW92ZVZpZGVvU3RyZWFtIiwiY29ubmVjdCIsImljZVBhcmFtZXRlcnMiLCJyZXN0YXJ0SWNlIiwicHJvZHVjZXJJZCIsInNvY2tldElkIiwic3Vic2NyaWJlU3RyZWFtIiwicmVjZWl2ZURhdGEiLCJwYWNrZXQiLCJmcm9tIiwiY2xpZW50IiwicmVtb3RlSWQiLCJwdXNoIiwiY2xpZW50SWQiLCJmaWx0ZXIiLCJjIiwiY29ubmVjdGVkIiwiaW5kZXhPZiIsImFkYXB0ZXJzIiwiSVNfQ09OTkVDVEVEIiwiTk9UX0NPTk5FQ1RFRCIsInRvIiwic2VuZERhdGFHdWFyYW50ZWVkIiwic2VuZGluZyIsImJyb2FkY2FzdERhdGFHdWFyYW50ZWVkIiwiYnJvYWRjYXN0aW5nIiwic3RyZWFtIiwicHJvZHVjZXJzIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiZSIsIm1zZyIsImZvckVhY2giLCJwYXVzZSIsInJlc3VtZSIsImNsaWVudFNlbnRUaW1lIiwiRGF0ZSIsIm5vdyIsImZldGNoIiwiZG9jdW1lbnQiLCJocmVmIiwibWV0aG9kIiwiY2FjaGUiLCJyZXMiLCJwcmVjaXNpb24iLCJzZXJ2ZXJSZWNlaXZlZFRpbWUiLCJoZWFkZXJzIiwiZ2V0IiwiZ2V0VGltZSIsImNsaWVudFJlY2VpdmVkVGltZSIsInNlcnZlclRpbWUiLCJ0aW1lT2Zmc2V0IiwicmVkdWNlIiwiYWNjIiwib2Zmc2V0IiwicHJvZHVjZXJMaXN0IiwiZ2V0Q29uc3VtZVN0cmVhbSIsImtpbmQiLCJjb25zdW1lcnN0cmVhbSIsIm5ld1N0cmVhbSIsIl9wcm9kdWNlcklkIiwicnRwQ2FwYWJpbGl0aWVzIiwicmVzdWx0IiwicnRwUGFyYW1ldGVycyIsImNvbnN1bWUiLCJjb2RlY09wdGlvbnMiLCJjb25zdW1lciIsIk1lZGlhU3RyZWFtIiwiYWRkVHJhY2siLCJyb3V0ZXJSdHBDYXBhYmlsaXRpZXMiLCJEZXZpY2UiLCJsb2FkIiwiZm9yY2VUY3AiLCJjcmVhdGVTZW5kVHJhbnNwb3J0Iiwic3VjY2Vzc0NhbGwiLCJmYWlsdXJlQ2FsbCIsImR0bHNQYXJhbWV0ZXJzIiwic3RhdGUiLCJjbG9zZSIsImNyZWF0ZVJlY3ZUcmFuc3BvcnQiLCJyZWdpc3RlciJdLCJzb3VyY2VSb290IjoiIn0=