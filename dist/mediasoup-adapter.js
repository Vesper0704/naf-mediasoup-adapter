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
                                _context2.next = 35;
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
                              _context2.next = 35;
                              break;

                            case 32:
                              _context2.prev = 32;
                              _context2.t1 = _context2["catch"](24);
                              console.error('fail to produce audio stream', _context2.t1);

                            case 35:
                              if (!self.sendVideo) {
                                _context2.next = 52;
                                break;
                              }

                              if (localStream) self.storeVideoStream(self.myId, localStream);

                              if (self.producerTransport) {
                                _context2.next = 39;
                                break;
                              }

                              return _context2.abrupt("return", console.error('producerTransport not created yet'));

                            case 39:
                              if (self.device.canProduce('video')) {
                                _context2.next = 41;
                                break;
                              }

                              return _context2.abrupt("return", console.error('device does not support video'));

                            case 41:
                              _context2.prev = 41;
                              _track = localStream.getVideoTracks()[0];
                              _params = self.simulcastMode ? _objectSpread({
                                track: _track
                              }, self.simulcastConfig) : {
                                track: _track
                              };
                              _context2.next = 46;
                              return self.producerTransport.produce(_params);

                            case 46:
                              _producer = _context2.sent;
                              _context2.next = 52;
                              break;

                            case 49:
                              _context2.prev = 49;
                              _context2.t2 = _context2["catch"](41);
                              console.log('fail to produce video stream', _context2.t2);

                            case 52:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2, null, [[7, 14], [24, 32], [41, 49]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQTs0QkFTdkM1QyxPQUFPLENBQUM0QyxHQUFSLENBQVksMENBQVo7NEJBQ0FLLElBQUksQ0FBQ3JDLGlCQUFMLENBQXVCc0osS0FBdkI7NEJBVnVDOzswQkFBQTs0QkFBQTs7MEJBQUE7MEJBQUE7NEJBQUE7d0JBQUE7c0JBQUE7b0JBQUE7a0JBQUEsQ0FBbkQ7O2tCQUFBO29CQUFBO2tCQUFBO2dCQUFBOztjQXRGUjtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7Ozs7Ozs7Ozs7Ozs7QUEyR0puRyxHQUFHLENBQUM2QyxRQUFKLENBQWF3RCxRQUFiLENBQXNCLFdBQXRCLEVBQW1DdkssZ0JBQW5DO0FBRUFYLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlUsZ0JBQWpCOzs7Ozs7VUMxa0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXR3b3JrZWQtYWZyYW1lLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9uZXR3b3JrZWQtYWZyYW1lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL25ldHdvcmtlZC1hZnJhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV0d29ya2VkLWFmcmFtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL25ldHdvcmtlZC1hZnJhbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL25ldHdvcmtlZC1hZnJhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHNpbXVsY2FzdE1vZGU6IHRydWUsXG4gICAgc2ltdWxjYXN0Q29uZmlnOiB7XG4gICAgICAgIGVuY29kaW5nczpcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7IG1heEJpdHJhdGU6IDEwMDAwMCB9LCAgLy8gbG93XG4gICAgICAgICAgICAgICAgeyBtYXhCaXRyYXRlOiAzMDAwMDAgfSwgIC8vIG1lZGl1bVxuICAgICAgICAgICAgICAgIHsgbWF4Qml0cmF0ZTogNjAwMDAwIH0gICAvLyBoaWdoXG4gICAgICAgICAgICBdLFxuICAgICAgICAvLyBjb2RlY09wdGlvbnM6XG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIHZpZGVvR29vZ2xlU3RhcnRCaXRyYXRlOiAxMDAwXG4gICAgICAgIC8vIH1cbiAgICB9LFxuICAgIGljZVNlcnZlcnM6IFtcbiAgICAgICAgeyBcInVybHNcIjogXCJzdHVuOnN0dW4xLmwuZ29vZ2xlLmNvbToxOTMwMlwiIH0sXG4gICAgICAgIHsgXCJ1cmxzXCI6IFwic3R1bjpzdHVuMi5sLmdvb2dsZS5jb206MTkzMDJcIiB9LFxuICAgIF0sXG4gICAgcHJlZmVycmVkTGF5ZXJzOiB7XG4gICAgICAgIC8vIGxvd2VzdFxuICAgICAgICBzcGF0aWFsTGF5ZXI6IDBcbiAgICB9XG59IiwiLyogZ2xvYmFsIE5BRiwgaW8gKi9cbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJylcbmNsYXNzIE1lZGlhc291cEFkYXB0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoaW8gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignc29ja2V0LmlvLWNsaWVudCBtaXNzaW5nJylcbiAgICAgICAgaWYgKG1lZGlhc291cENsaWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ21lZGlhc291cC1jbGllbnQgbWlzc2luZycpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFwcCA9IFwiZGVmYXVsdFwiO1xuICAgICAgICB0aGlzLnJvb20gPSBcImRlZmF1bHRcIjtcbiAgICAgICAgdGhpcy5vY2N1cGFudExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5teVJvb21Kb2luVGltZSA9IG51bGw7XG4gICAgICAgIHRoaXMubXlJZCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5vY2N1cGFudHMgPSB7fTsgLy8gaWQgLT4gam9pblRpbWVzdGFtcFxuICAgICAgICB0aGlzLmNvbm5lY3RlZENsaWVudHMgPSBbXTtcblxuICAgICAgICB0aGlzLmRldmljZSA9IG51bGw7IC8vIGxvY2FsIERldmljZSAod2lsbCBjb25uZWN0IHRvIHNlcnZlci1zaWRlIHJvdXRlciB0aHJvdWdoIHRyYW5zcG9ydClcblxuICAgICAgICB0aGlzLnByb2R1Y2VyVHJhbnNwb3J0ID0gbnVsbDsgICAvLyBwcm9kdWNlclRyYW5zcG9ydCBcbiAgICAgICAgdGhpcy5jb25zdW1lclRyYW5zcG9ydCA9IG51bGw7ICAgLy8gY29uc3VtZXJUcmFuc3BvcnRcblxuICAgICAgICB0aGlzLnZpZGVvUHJvZHVjZXIgPSB7fTsgICAvLyBwcm9kdWNlcklkLT5wcm9kdWNlciBpbnN0YW5jZVxuICAgICAgICB0aGlzLnZpZGVvQ29uc3VtZXJzID0ge307ICAvLyBjb25zdW1lcklkLT5jb25zdW1lciBpbnN0YW5jZVxuXG4gICAgICAgIHRoaXMuYXVkaW9Qcm9kdWNlciA9IHt9OyAgIC8vIHByb2R1Y2VySWQtPnByb2R1Y2VyIGluc3RhbmNlXG4gICAgICAgIHRoaXMuYXVkaW9Db25zdW1lcnMgPSB7fTsgIC8vIGNvbnN1bWVySWQtPmNvbnN1bWVyIGluc3RhbmNlXG5cbiAgICAgICAgdGhpcy5pY2VTZXJ2ZXJzID0gY29uZmlnLmljZVNlcnZlcnM7XG4gICAgICAgIHRoaXMuc2ltdWxjYXN0TW9kZSA9IGNvbmZpZy5zaW11bGNhc3RNb2RlO1xuICAgICAgICB0aGlzLnNpbXVsY2FzdENvbmZpZyA9IGNvbmZpZy5zaW11bGNhc3RDb25maWc7XG5cbiAgICAgICAgLy8gc3RvcmUgdmlkZW8vYXVkaW8gc3RyZWFtcyBvZiBjbGllbnRzXG4gICAgICAgIHRoaXMuYXVkaW9TdHJlYW1zID0ge307ICAvLyBjbGllbnRJZC0+YXVkaW9TdHJlYW1cbiAgICAgICAgdGhpcy52aWRlb1N0cmVhbXMgPSB7fTsgIC8vIGNsaWVudElkLT52aWRlb1N0cmVhbVxuICAgICAgICB0aGlzLnBlbmRpbmdBdWRpb1JlcXVlc3QgPSB7fTtcbiAgICAgICAgdGhpcy5wZW5kaW5nVmlkZW9SZXF1ZXN0ID0ge307XG5cbiAgICAgICAgdGhpcy5oZWFydGJlYXRJbnRlcnZhbCA9IDIwIC8vIGluIHNlY29uZHNcbiAgICAgICAgdGhpcy5oZWFyYmVhdFRpbWVyID0gbnVsbFxuXG4gICAgICAgIHRoaXMuc2VydmVyVGltZVJlcXVlc3RzID0gMDtcbiAgICAgICAgdGhpcy50aW1lT2Zmc2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmF2Z1RpbWVPZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIHNldFNlcnZlclVybCh3c1VybCkge1xuICAgICAgICB0aGlzLndzVXJsID0gd3NVcmw7XG4gICAgfVxuXG4gICAgc2V0QXBwKGFwcE5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHBOYW1lO1xuICAgIH1cblxuICAgIHNldFJvb20ocm9vbU5hbWUpIHtcbiAgICAgICAgdGhpcy5yb29tID0gcm9vbU5hbWU7XG4gICAgfVxuXG4gICAgc2V0V2ViUnRjT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmRhdGFjaGFubmVsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gbWVkaWFzb3VwLWFkYXB0ZXIgd2lsbCB1c2Ugd3MgdG8gc3luYyBjb21wb25lbnRzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYXVkaW8gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZEF1ZGlvID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy52aWRlbyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZW5kVmlkZW8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U2ltdWxjYXN0TW9kZShpc1NpbXVsY2FzdCkge1xuICAgICAgICB0aGlzLnNpbXVsY2FzdE1vZGUgPSBpc1NpbXVsY2FzdFxuICAgIH1cblxuICAgIHNldFNlcnZlckNvbm5lY3RMaXN0ZW5lcnMoc3VjY2Vzc0xpc3RlbmVyLCBmYWlsdXJlTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0U3VjY2VzcyA9IHN1Y2Nlc3NMaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5jb25uZWN0RmFpbHVyZSA9IGZhaWx1cmVMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBzZXRSb29tT2NjdXBhbnRMaXN0ZW5lcihvY2N1cGFudExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMub2NjdXBhbnRMaXN0ZW5lciA9IG9jY3VwYW50TGlzdGVuZXI7XG4gICAgfVxuXG4gICAgc2V0RGF0YUNoYW5uZWxMaXN0ZW5lcnMob3Blbkxpc3RlbmVyLCBjbG9zZWRMaXN0ZW5lciwgbWVzc2FnZUxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMub3Blbkxpc3RlbmVyID0gb3Blbkxpc3RlbmVyO1xuICAgICAgICB0aGlzLmNsb3NlZExpc3RlbmVyID0gY2xvc2VkTGlzdGVuZXI7XG4gICAgICAgIHRoaXMubWVzc2FnZUxpc3RlbmVyID0gbWVzc2FnZUxpc3RlbmVyO1xuICAgIH1cblxuICAgIHNldEhlYXJ0YmVhdFRpbWVyKF9oZWFydGJlYXRJbnRlcnZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgcmVzZXQgaGVhcnRiZWF0SW50ZXJ2YWwgZnJvbSAke3RoaXMuaGVhcnRiZWF0SW50ZXJ2YWx9cyB0byAke19oZWFydGJlYXRJbnRlcnZhbH1zYCk7XG4gICAgICAgIHRoaXMuaGVhcnRiZWF0SW50ZXJ2YWwgPSBfaGVhcnRiZWF0SW50ZXJ2YWxcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhlYXJiZWF0VGltZXIpXG4gICAgICAgIHRoaXMuaGVhcmJlYXRUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2tlZXAtYWxpdmUnKVxuICAgICAgICB9LCBfaGVhcnRiZWF0SW50ZXJ2YWwgKiAxMDAwKVxuICAgIH1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudXBkYXRlVGltZU9mZnNldCgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLndzVXJsIHx8IHNlbGYud3NVcmwgPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi53c1VybCA9IFwid3NzOi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi53c1VybCA9IFwid3M6Ly9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ja2V0ID0gc2VsZi5zb2NrZXQgPSBpbyhzZWxmLndzVXJsKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuc29ja2V0LnJlcXVlc3QgPSAodHlwZSwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNvY2tldC5lbWl0KHR5cGUsIGRhdGEsIHJlc29sdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNvY2tldC5vbihcImNvbm5lY3RcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOQUYubG9nLndyaXRlKFwic3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byB3ZWJzb2NrZXRcIiwgc29ja2V0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5teUlkID0gc29ja2V0LmlkO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmpvaW5Sb29tKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJjb25uZWN0U3VjY2Vzc1wiLCBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGpvaW5lZFRpbWUgfSA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5teVJvb21Kb2luVGltZSA9IGpvaW5lZFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJTdWNjZXNzZnVsbHkgam9pbmVkIHJvb21cIiwgc2VsZi5yb29tLCBcImF0IHNlcnZlciB0aW1lXCIsIGpvaW5lZFRpbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdFN1Y2Nlc3Moc2VsZi5teUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldEhlYXJ0YmVhdFRpbWVyKHNlbGYuaGVhcnRiZWF0SW50ZXJ2YWwpXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZWxmLmluaXRpYWxBbmRMb2FkRGV2aWNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNlbGYuaW5pdGlhbFByb2R1Y2VyQ29uc3VtZXJUcmFuc3BvcnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2VsZi5nYXRoZXJFeGlzdGluZ1Byb2R1Y2VycygpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oc2VsZi5kZXZpY2UsIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQsIHNlbGYuY29uc3VtZXJUcmFuc3BvcnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9jYWxTdHJlYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zZW5kQXVkaW8gfHwgc2VsZi5zZW5kVmlkZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlbzogc2VsZi5zZW5kVmlkZW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogc2VsZi5zZW5kQXVkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF5YmUgcGVybWlzc2lvbiBkZW5pZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBhdWRpbyBzdHJlYW1zXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zZW5kQXVkaW8pIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0cmVhbSkgc2VsZi5zdG9yZUF1ZGlvU3RyZWFtKHNlbGYubXlJZCwgbG9jYWxTdHJlYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLnByb2R1Y2VyVHJhbnNwb3J0KSByZXR1cm4gY29uc29sZS5lcnJvcigncHJvZHVjZXJUcmFuc3BvcnQgbm90IGNyZWF0ZWQgeWV0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuZGV2aWNlLmNhblByb2R1Y2UoJ2F1ZGlvJykpIHJldHVybiBjb25zb2xlLmVycm9yKCdkZXZpY2UgZG9lcyBub3Qgc3VwcG9ydCBhdWRpbycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFjayA9IGxvY2FsU3RyZWFtLmdldEF1ZGlvVHJhY2tzKClbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0geyB0cmFjayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y2VyID0gYXdhaXQgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5wcm9kdWNlKHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZi5hdWRpb1Byb2R1Y2VyW3Byb2R1Y2VyLmlkXSA9IHByb2R1Y2VyIC8vIHByb2R1Y2VyLmtpbmQgPT09ICdhdWRpbydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZhaWwgdG8gcHJvZHVjZSBhdWRpbyBzdHJlYW0nLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHZpZGVvIHN0cmVhbXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnNlbmRWaWRlbykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RyZWFtKSBzZWxmLnN0b3JlVmlkZW9TdHJlYW0oc2VsZi5teUlkLCBsb2NhbFN0cmVhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYucHJvZHVjZXJUcmFuc3BvcnQpIHJldHVybiBjb25zb2xlLmVycm9yKCdwcm9kdWNlclRyYW5zcG9ydCBub3QgY3JlYXRlZCB5ZXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZi5kZXZpY2UuY2FuUHJvZHVjZSgndmlkZW8nKSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ2RldmljZSBkb2VzIG5vdCBzdXBwb3J0IHZpZGVvJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNrID0gbG9jYWxTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBzZWxmLnNpbXVsY2FzdE1vZGUgPyB7IHRyYWNrLCAuLi5zZWxmLnNpbXVsY2FzdENvbmZpZyB9IDogeyB0cmFjayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y2VyID0gYXdhaXQgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5wcm9kdWNlKHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZi52aWRlb1Byb2R1Y2VyW3Byb2R1Y2VyLmlkXSA9IHByb2R1Y2VyIC8vIHByb2R1Y2VyLmtpbmQgPT09ICd2aWRlbydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmYWlsIHRvIHByb2R1Y2UgdmlkZW8gc3RyZWFtJywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJlcnJvclwiLCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU29ja2V0IGNvbm5lY3Rpb24gZmFpbHVyZVwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbm5lY3RGYWlsdXJlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJvY2N1cGFudHNDaGFuZ2VkXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG9jY3VwYW50cyB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZSgnb2NjdXBhbnRzIGNoYW5nZWQnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNlaXZlZE9jY3VwYW50cyhvY2N1cGFudHMpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgcmVhc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xlYW4gdXAgaW5zdGFuY2VzXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGV2aWNlID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0ID0gc2VsZi5jb25zdW1lclRyYW5zcG9ydCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVBdWRpb1N0cmVhbShzZWxmLm15SWQpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlVmlkZW9TdHJlYW0oc2VsZi5teUlkKVxuICAgICAgICAgICAgICAgICAgICAvLyBtYW51YWxseSByZWNvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LmNvbm5lY3QoKVxuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgIHNvY2tldC5vbigncmVzdGFydEljZScsIGFzeW5jICh7IGljZVBhcmFtZXRlcnMgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5yZXN0YXJ0SWNlKHsgaWNlUGFyYW1ldGVycyB9KVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdGFydEljZSBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHNvY2tldC5vbignbmV3UHJvZHVjZXInLCBhc3luYyAoeyBwcm9kdWNlcklkLCBzb2NrZXRJZCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3Vic2NyaWJlU3RyZWFtKHByb2R1Y2VySWQsIHNvY2tldElkKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWNlaXZlRGF0YShwYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJvbSA9IHBhY2tldC5mcm9tO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gcGFja2V0LnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tZXNzYWdlTGlzdGVuZXIoZnJvbSwgdHlwZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKFwic2VuZFwiLCByZWNlaXZlRGF0YSk7XG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKFwiYnJvYWRjYXN0XCIsIHJlY2VpdmVEYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgam9pblJvb20oKSB7XG4gICAgICAgIE5BRi5sb2cud3JpdGUoXCJKb2luaW5nIHJvb21cIiwgdGhpcy5yb29tKTtcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcImpvaW5Sb29tXCIsIHsgcm9vbTogdGhpcy5yb29tIH0pO1xuICAgIH1cblxuICAgIHJlY2VpdmVkT2NjdXBhbnRzKG9jY3VwYW50cykge1xuICAgICAgICBkZWxldGUgb2NjdXBhbnRzW3RoaXMubXlJZF07XG4gICAgICAgIHRoaXMub2NjdXBhbnRzID0gb2NjdXBhbnRzO1xuICAgICAgICB0aGlzLm9jY3VwYW50TGlzdGVuZXIob2NjdXBhbnRzKTtcbiAgICB9XG5cbiAgICBzaG91bGRTdGFydENvbm5lY3Rpb25UbyhjbGllbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhcnRTdHJlYW1Db25uZWN0aW9uKHJlbW90ZUlkKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkQ2xpZW50cy5wdXNoKHJlbW90ZUlkKTtcbiAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXIocmVtb3RlSWQpO1xuICAgIH1cblxuICAgIGNsb3NlU3RyZWFtQ29ubmVjdGlvbihjbGllbnRJZCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RlZENsaWVudHMgPSB0aGlzLmNvbm5lY3RlZENsaWVudHMuZmlsdGVyKGMgPT4gYyAhPSBjbGllbnRJZCk7XG4gICAgICAgIHRoaXMuY2xvc2VkTGlzdGVuZXIoY2xpZW50SWQpO1xuICAgIH1cblxuICAgIGdldENvbm5lY3RTdGF0dXMoY2xpZW50SWQpIHtcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gdGhpcy5jb25uZWN0ZWRDbGllbnRzLmluZGV4T2YoY2xpZW50SWQpICE9IC0xO1xuXG4gICAgICAgIGlmIChjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBOQUYuYWRhcHRlcnMuSVNfQ09OTkVDVEVEO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5BRi5hZGFwdGVycy5OT1RfQ09OTkVDVEVEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZERhdGEodG8sIHR5cGUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5zZW5kRGF0YUd1YXJhbnRlZWQodG8sIHR5cGUsIGRhdGEpO1xuICAgIH1cblxuICAgIHNlbmREYXRhR3VhcmFudGVlZCh0bywgdHlwZSwgZGF0YSkge1xuICAgICAgICBjb25zdCBwYWNrZXQgPSB7XG4gICAgICAgICAgICBmcm9tOiB0aGlzLm15SWQsXG4gICAgICAgICAgICB0byxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgc2VuZGluZzogdHJ1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJzZW5kXCIsIHBhY2tldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOQUYubG9nLndhcm4oJ1NvY2tldElPIHNvY2tldCBub3QgY3JlYXRlZCB5ZXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJyb2FkY2FzdERhdGEodHlwZSwgZGF0YSkge1xuICAgICAgICB0aGlzLmJyb2FkY2FzdERhdGFHdWFyYW50ZWVkKHR5cGUsIGRhdGEpO1xuICAgIH1cblxuICAgIGJyb2FkY2FzdERhdGFHdWFyYW50ZWVkKHR5cGUsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFja2V0ID0ge1xuICAgICAgICAgICAgZnJvbTogdGhpcy5teUlkLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBicm9hZGNhc3Rpbmc6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJicm9hZGNhc3RcIiwgcGFja2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5BRi5sb2cud2FybignU29ja2V0SU8gc29ja2V0IG5vdCBjcmVhdGVkIHlldCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQXVkaW9TdHJlYW0oY2xpZW50SWQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuYXVkaW9TdHJlYW1zW2NsaWVudElkXVxuICAgIH1cblxuICAgIHJlbW92ZVZpZGVvU3RyZWFtKGNsaWVudElkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnZpZGVvU3RyZWFtc1tjbGllbnRJZF1cbiAgICB9XG5cblxuICAgIHN0b3JlQXVkaW9TdHJlYW0oY2xpZW50SWQsIHN0cmVhbSkge1xuICAgICAgICB0aGlzLmF1ZGlvU3RyZWFtc1tjbGllbnRJZF0gPSBzdHJlYW07XG5cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0F1ZGlvUmVxdWVzdFtjbGllbnRJZF0pIHtcbiAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJSZWNlaXZlZCBwZW5kaW5nIGF1ZGlvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ0F1ZGlvUmVxdWVzdFtjbGllbnRJZF0oc3RyZWFtKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdBdWRpb1JlcXVlc3RbY2xpZW50SWRdKHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9yZVZpZGVvU3RyZWFtKGNsaWVudElkLCBzdHJlYW0pIHtcbiAgICAgICAgdGhpcy52aWRlb1N0cmVhbXNbY2xpZW50SWRdID0gc3RyZWFtO1xuXG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdWaWRlb1JlcXVlc3RbY2xpZW50SWRdKSB7XG4gICAgICAgICAgICBOQUYubG9nLndyaXRlKFwiUmVjZWl2ZWQgcGVuZGluZyB2aWRlbyBmb3IgXCIgKyBjbGllbnRJZCk7XG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdWaWRlb1JlcXVlc3RbY2xpZW50SWRdKHN0cmVhbSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nVmlkZW9SZXF1ZXN0W2NsaWVudElkXShzdHJlYW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TWVkaWFTdHJlYW0oY2xpZW50SWQsIHR5cGUgPSAnYXVkaW8nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBnZXRNZWRpYVN0cmVhbSAke3R5cGV9YCk7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdWRpb1N0cmVhbXNbY2xpZW50SWRdKSB7XG4gICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZShcIkFscmVhZHkgaGFkIGF1ZGlvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuYXVkaW9TdHJlYW1zW2NsaWVudElkXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJXYWl0aW5nIG9uIGF1ZGlvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGVuZGluZ0F1ZGlvUmVxdWVzdFtjbGllbnRJZF0gPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZGVvU3RyZWFtc1tjbGllbnRJZF0pIHtcbiAgICAgICAgICAgICAgICBOQUYubG9nLndyaXRlKFwiQWxyZWFkeSBoYWQgdmlkZW8gZm9yIFwiICsgY2xpZW50SWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy52aWRlb1N0cmVhbXNbY2xpZW50SWRdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZShcIldhaXRpbmcgb24gdmlkZW8gZm9yIFwiICsgY2xpZW50SWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wZW5kaW5nVmlkZW9SZXF1ZXN0W2NsaWVudElkXSA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVUaW1lT2Zmc2V0KCkge1xuICAgICAgICBjb25zdCBjbGllbnRTZW50VGltZSA9IERhdGUubm93KCkgKyB0aGlzLmF2Z1RpbWVPZmZzZXQ7XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsIHsgbWV0aG9kOiBcIkhFQURcIiwgY2FjaGU6IFwibm8tY2FjaGVcIiB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmVjaXNpb24gPSAxMDAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZlclJlY2VpdmVkVGltZSA9IG5ldyBEYXRlKHJlcy5oZWFkZXJzLmdldChcIkRhdGVcIikpLmdldFRpbWUoKSArIChwcmVjaXNpb24gLyAyKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnRSZWNlaXZlZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZlclRpbWUgPSBzZXJ2ZXJSZWNlaXZlZFRpbWUgKyAoKGNsaWVudFJlY2VpdmVkVGltZSAtIGNsaWVudFNlbnRUaW1lKSAvIDIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVPZmZzZXQgPSBzZXJ2ZXJUaW1lIC0gY2xpZW50UmVjZWl2ZWRUaW1lO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2ZXJUaW1lUmVxdWVzdHMrKztcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlcnZlclRpbWVSZXF1ZXN0cyA8PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVPZmZzZXRzLnB1c2godGltZU9mZnNldCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lT2Zmc2V0c1t0aGlzLnNlcnZlclRpbWVSZXF1ZXN0cyAlIDEwXSA9IHRpbWVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hdmdUaW1lT2Zmc2V0ID0gdGhpcy50aW1lT2Zmc2V0cy5yZWR1Y2UoKGFjYywgb2Zmc2V0KSA9PiBhY2MgKz0gb2Zmc2V0LCAwKSAvIHRoaXMudGltZU9mZnNldHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VydmVyVGltZVJlcXVlc3RzID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVRpbWVPZmZzZXQoKSwgNSAqIDYwICogMTAwMCk7IC8vIFN5bmMgY2xvY2sgZXZlcnkgNSBtaW51dGVzLlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZU9mZnNldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFNlcnZlclRpbWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHRoaXMuYXZnVGltZU9mZnNldDtcbiAgICB9XG5cblxuXG4gICAgLyoqIE1FRElBU09VUCBSRUxBVEVEIEZVTkNUSU9OUyAqKi9cbiAgICBhc3luYyBnYXRoZXJFeGlzdGluZ1Byb2R1Y2VycygpIHtcblxuICAgICAgICBjb25zdCB7IHByb2R1Y2VyTGlzdCB9ID0gYXdhaXQgdGhpcy5zb2NrZXQucmVxdWVzdCgnZ2F0aGVyUHJvZHVjZXJzJylcbiAgICAgICAgaWYgKCFwcm9kdWNlckxpc3QubGVuZ3RoKSByZXR1cm4gY29uc29sZS5sb2coJ25vIHByb2R1Y2VycyBjdXJyZW50bHknLCBwcm9kdWNlckxpc3QpXG5cbiAgICAgICAgcHJvZHVjZXJMaXN0LmZvckVhY2goYXN5bmMgKHsgcHJvZHVjZXJJZCwgc29ja2V0SWQgfSkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdWJzY3JpYmVTdHJlYW0ocHJvZHVjZXJJZCwgc29ja2V0SWQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgc3Vic2NyaWJlU3RyZWFtKHByb2R1Y2VySWQsIHNvY2tldElkKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbnN1bWVyVHJhbnNwb3J0KSByZXR1cm4gY29uc29sZS5sb2coYGNvbnN1bWVyVHJhbnNwb3J0IGRvZXNuJ3QgZXhpc3RgKVxuXG4gICAgICAgIGNvbnN0IHsga2luZCwgbmV3U3RyZWFtOiBjb25zdW1lcnN0cmVhbSB9ID0gYXdhaXQgdGhpcy5nZXRDb25zdW1lU3RyZWFtKHRoaXMuY29uc3VtZXJUcmFuc3BvcnQsIHByb2R1Y2VySWQpXG5cbiAgICAgICAgY29uc29sZS5sb2coJ3N1YnNjcmliZSBzdWNlc3NmdWxseScsIHsga2luZCwgY29uc3VtZXJzdHJlYW0gfSk7XG5cbiAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICBjYXNlICd2aWRlbyc6XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZVZpZGVvU3RyZWFtKHNvY2tldElkLCBjb25zdW1lcnN0cmVhbSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2F1ZGlvJzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlQXVkaW9TdHJlYW0oc29ja2V0SWQsIGNvbnN1bWVyc3RyZWFtKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5rbm93biBraW5kJywga2luZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb25zdW1lU3RyZWFtKGNvbnN1bWVyVHJhbnNwb3J0LCBfcHJvZHVjZXJJZCkge1xuICAgICAgICBjb25zdCB7IHJ0cENhcGFiaWxpdGllcyB9ID0gdGhpcy5kZXZpY2VcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zb2NrZXQucmVxdWVzdCgnY29uc3VtZVN0cmVhbScsIHsgcnRwQ2FwYWJpbGl0aWVzLCBfcHJvZHVjZXJJZCB9KVxuICAgICAgICBpZiAoIXJlc3VsdCkgcmV0dXJuIG51bGxcblxuICAgICAgICBjb25zdCB7IHByb2R1Y2VySWQsIGlkLCBraW5kLCBydHBQYXJhbWV0ZXJzIH0gPSByZXN1bHRcbiAgICAgICAgY29uc3QgY29uc3VtZXIgPSBhd2FpdCBjb25zdW1lclRyYW5zcG9ydC5jb25zdW1lKHtcbiAgICAgICAgICAgIHByb2R1Y2VySWQsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBydHBQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgY29kZWNPcHRpb25zOiB7fVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG5ld1N0cmVhbSA9IG5ldyBNZWRpYVN0cmVhbSgpXG4gICAgICAgIG5ld1N0cmVhbS5hZGRUcmFjayhjb25zdW1lci50cmFjaylcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5ld1N0cmVhbSxcbiAgICAgICAgICAgIGtpbmRcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgaW5pdGlhbEFuZExvYWREZXZpY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5zb2NrZXQpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlKSByZXR1cm4gY29uc29sZS5sb2coJ2RldmljZSBsb2FkZWQgYWxyZWFkeScpXG4gICAgICAgIGNvbnN0IHJvdXRlclJ0cENhcGFiaWxpdGllcyA9IGF3YWl0IHRoaXMuc29ja2V0LnJlcXVlc3QoJ2dldFJvdXRlclJ0cENhcGFiaWxpdGllcycpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmRldmljZSA9IG5ldyBtZWRpYXNvdXBDbGllbnQuRGV2aWNlKClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmRldmljZS5sb2FkKHsgcm91dGVyUnRwQ2FwYWJpbGl0aWVzIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCdNZWRpYXNvdXBDbGllbnQgRGV2aWNlIGxvYWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG5cbiAgICBhc3luYyBpbml0aWFsUHJvZHVjZXJDb25zdW1lclRyYW5zcG9ydCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYgKCFzZWxmLmRldmljZSkgcmV0dXJuIGNvbnNvbGUud2FybignRGV2aWNlIG5vdCBsb2FkZWQnKVxuICAgICAgICBpZiAoc2VsZi5wcm9kdWNlclRyYW5zcG9ydCAmJiBzZWxmLmNvbnN1bWVyVHJhbnNwb3J0KSByZXR1cm4gY29uc29sZS5sb2coJ3RyYW5zcG9ydCBhcmVhZHkgZXhpc3RzJylcblxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VsZi5zb2NrZXQucmVxdWVzdCgnY3JlYXRlUHJvZHVjZXJUcmFuc3BvcnQnLCB7XG4gICAgICAgICAgICAgICAgZm9yY2VUY3A6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJ0cENhcGFiaWxpdGllczogc2VsZi5kZXZpY2UucnRwQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSByZXR1cm4gY29uc29sZS5sb2coJ2NyZWF0ZVByb2R1Y2VyVHJhbnNwb3J0IGVycm9yJylcbiAgICAgICAgICAgIC8vIHRyYW5zcG9ydElkID0gZGF0YS5wYXJhbXMuaWRcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogdHJhbnNwb3J0LmlkLFxuICAgICAgICAgICAgICAgICAgICBpY2VQYXJhbWV0ZXJzOiB0cmFuc3BvcnQuaWNlUGFyYW1ldGVycyxcbiAgICAgICAgICAgICAgICAgICAgaWNlQ2FuZGlkYXRlczogdHJhbnNwb3J0LmljZUNhbmRpZGF0ZXMsICAgXG4gICAgICAgICAgICAgICAgICAgIGR0bHNQYXJhbWV0ZXJzOiB0cmFuc3BvcnQuZHRsc1BhcmFtZXRlcnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQgPSBzZWxmLmRldmljZS5jcmVhdGVTZW5kVHJhbnNwb3J0KHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLnBhcmFtcyxcbiAgICAgICAgICAgICAgICBpY2VTZXJ2ZXJzOiBzZWxmLmljZVNlcnZlcnNcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQub24oJ2Nvbm5lY3QnLCBhc3luYyAoeyBkdGxzUGFyYW1ldGVycyB9LCBzdWNjZXNzQ2FsbCwgZmFpbHVyZUNhbGwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncHJvZHVjZXIgdHJhbnNwb3J0IGNvbm5lY3QnKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNvY2tldC5yZXF1ZXN0KCdjb25uZWN0UHJvZHVjZXJUcmFuc3BvcnQnLCB7IGR0bHNQYXJhbWV0ZXJzIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3NDYWxsKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZmFpbHVyZUNhbGwpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0Lm9uKCdwcm9kdWNlJywgYXN5bmMgKHsga2luZCwgcnRwUGFyYW1ldGVycyB9LCBzdWNjZXNzQ2FsbCwgZmFpbHVyZUNhbGwpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncHJvZHVjZSBzdHJlYW0nLCBraW5kKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwcm9kdWNlcklkOiBpZCB9ID0gYXdhaXQgc2VsZi5zb2NrZXQucmVxdWVzdCgncHJvZHVjZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0cFBhcmFtZXRlcnNcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGwoeyBpZCB9KVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFpbHVyZUNhbGwoZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0Lm9uKCdjb25uZWN0aW9uc3RhdGVjaGFuZ2UnLCAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nvbm5lY3RpbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29ubmVjdGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9kdWNlclRyYW5zcG9ydCBjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZhaWxlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncHJvZHVjZXJUcmFuc3BvcnQgY29ubmVjdCBmYWlsIGFuZCBjbG9zZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VsZi5zb2NrZXQucmVxdWVzdCgnY3JlYXRlQ29uc3VtZXJUcmFuc3BvcnQnLCB7XG4gICAgICAgICAgICAgICAgZm9yY2VUY3A6IGZhbHNlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikgcmV0dXJuIGNvbnNvbGUubG9nKCdjcmVhdGVDb25zdW1lclRyYW5zcG9ydCBmYWlsdXJlJywgZGF0YS5lcnJvcilcblxuICAgICAgICAgICAgc2VsZi5jb25zdW1lclRyYW5zcG9ydCA9IHNlbGYuZGV2aWNlLmNyZWF0ZVJlY3ZUcmFuc3BvcnQoe1xuICAgICAgICAgICAgICAgIC4uLmRhdGEucGFyYW1zLFxuICAgICAgICAgICAgICAgIGljZVNlcnZlcnM6IHNlbGYuaWNlU2VydmVyc1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2VsZi5jb25zdW1lclRyYW5zcG9ydC5vbignY29ubmVjdCcsIGFzeW5jICh7IGR0bHNQYXJhbWV0ZXJzIH0sIHN1Y2Nlc3NDYWxsLCBmYWlsdXJlQ2FsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25zdW1lciB0cmFuc3BvcnQgY29ubmVjdCcpO1xuICAgICAgICAgICAgICAgIHNlbGYuc29ja2V0LnJlcXVlc3QoJ2Nvbm5lY3RDb25zdW1lclRyYW5zcG9ydCcsIHsgZHRsc1BhcmFtZXRlcnMgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oc3VjY2Vzc0NhbGwpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmYWlsdXJlQ2FsbClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlbGYuY29uc3VtZXJUcmFuc3BvcnQub24oJ2Nvbm5lY3Rpb25zdGF0ZWNoYW5nZScsIGFzeW5jIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29ubmVjdGluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY29uc3VtZXIgY29ubmVjdGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nvbm5lY3RlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uc3VtZXJUcmFuc3BvcnQgY29ubmVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZmFpbGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25zdW1lclRyYW5zcG9ydCBjb25uZWN0IGZhaWwgYW5kIGNsb3NlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnN1bWVyVHJhbnNwb3J0LmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbk5BRi5hZGFwdGVycy5yZWdpc3RlcihcIm1lZGlhc291cFwiLCBNZWRpYXNvdXBBZGFwdGVyKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYXNvdXBBZGFwdGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzaW11bGNhc3RNb2RlIiwic2ltdWxjYXN0Q29uZmlnIiwiZW5jb2RpbmdzIiwibWF4Qml0cmF0ZSIsImljZVNlcnZlcnMiLCJwcmVmZXJyZWRMYXllcnMiLCJzcGF0aWFsTGF5ZXIiLCJjb25maWciLCJyZXF1aXJlIiwiTWVkaWFzb3VwQWRhcHRlciIsImlvIiwidW5kZWZpbmVkIiwiY29uc29sZSIsIndhcm4iLCJtZWRpYXNvdXBDbGllbnQiLCJhcHAiLCJyb29tIiwib2NjdXBhbnRMaXN0ZW5lciIsIm15Um9vbUpvaW5UaW1lIiwibXlJZCIsIm9jY3VwYW50cyIsImNvbm5lY3RlZENsaWVudHMiLCJkZXZpY2UiLCJwcm9kdWNlclRyYW5zcG9ydCIsImNvbnN1bWVyVHJhbnNwb3J0IiwidmlkZW9Qcm9kdWNlciIsInZpZGVvQ29uc3VtZXJzIiwiYXVkaW9Qcm9kdWNlciIsImF1ZGlvQ29uc3VtZXJzIiwiYXVkaW9TdHJlYW1zIiwidmlkZW9TdHJlYW1zIiwicGVuZGluZ0F1ZGlvUmVxdWVzdCIsInBlbmRpbmdWaWRlb1JlcXVlc3QiLCJoZWFydGJlYXRJbnRlcnZhbCIsImhlYXJiZWF0VGltZXIiLCJzZXJ2ZXJUaW1lUmVxdWVzdHMiLCJ0aW1lT2Zmc2V0cyIsImF2Z1RpbWVPZmZzZXQiLCJ3c1VybCIsImFwcE5hbWUiLCJyb29tTmFtZSIsIm9wdGlvbnMiLCJkYXRhY2hhbm5lbCIsImF1ZGlvIiwic2VuZEF1ZGlvIiwidmlkZW8iLCJzZW5kVmlkZW8iLCJpc1NpbXVsY2FzdCIsInN1Y2Nlc3NMaXN0ZW5lciIsImZhaWx1cmVMaXN0ZW5lciIsImNvbm5lY3RTdWNjZXNzIiwiY29ubmVjdEZhaWx1cmUiLCJvcGVuTGlzdGVuZXIiLCJjbG9zZWRMaXN0ZW5lciIsIm1lc3NhZ2VMaXN0ZW5lciIsIl9oZWFydGJlYXRJbnRlcnZhbCIsImxvZyIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNvY2tldCIsImVtaXQiLCJzZWxmIiwidXBkYXRlVGltZU9mZnNldCIsInRoZW4iLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsInJlcXVlc3QiLCJ0eXBlIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwib24iLCJOQUYiLCJ3cml0ZSIsImlkIiwiam9pblJvb20iLCJqb2luZWRUaW1lIiwic2V0SGVhcnRiZWF0VGltZXIiLCJzZXRUaW1lb3V0IiwiaW5pdGlhbEFuZExvYWREZXZpY2UiLCJpbml0aWFsUHJvZHVjZXJDb25zdW1lclRyYW5zcG9ydCIsImdhdGhlckV4aXN0aW5nUHJvZHVjZXJzIiwibG9jYWxTdHJlYW0iLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJzdG9yZUF1ZGlvU3RyZWFtIiwiZXJyb3IiLCJjYW5Qcm9kdWNlIiwidHJhY2siLCJnZXRBdWRpb1RyYWNrcyIsInBhcmFtcyIsInByb2R1Y2UiLCJwcm9kdWNlciIsInN0b3JlVmlkZW9TdHJlYW0iLCJnZXRWaWRlb1RyYWNrcyIsInJlY2VpdmVkT2NjdXBhbnRzIiwicmVhc29uIiwicmVtb3ZlQXVkaW9TdHJlYW0iLCJyZW1vdmVWaWRlb1N0cmVhbSIsImNvbm5lY3QiLCJpY2VQYXJhbWV0ZXJzIiwicmVzdGFydEljZSIsInByb2R1Y2VySWQiLCJzb2NrZXRJZCIsInN1YnNjcmliZVN0cmVhbSIsInJlY2VpdmVEYXRhIiwicGFja2V0IiwiZnJvbSIsImNsaWVudCIsInJlbW90ZUlkIiwicHVzaCIsImNsaWVudElkIiwiZmlsdGVyIiwiYyIsImNvbm5lY3RlZCIsImluZGV4T2YiLCJhZGFwdGVycyIsIklTX0NPTk5FQ1RFRCIsIk5PVF9DT05ORUNURUQiLCJ0byIsInNlbmREYXRhR3VhcmFudGVlZCIsInNlbmRpbmciLCJicm9hZGNhc3REYXRhR3VhcmFudGVlZCIsImJyb2FkY2FzdGluZyIsInN0cmVhbSIsImNsaWVudFNlbnRUaW1lIiwiRGF0ZSIsIm5vdyIsImZldGNoIiwiZG9jdW1lbnQiLCJocmVmIiwibWV0aG9kIiwiY2FjaGUiLCJyZXMiLCJwcmVjaXNpb24iLCJzZXJ2ZXJSZWNlaXZlZFRpbWUiLCJoZWFkZXJzIiwiZ2V0IiwiZ2V0VGltZSIsImNsaWVudFJlY2VpdmVkVGltZSIsInNlcnZlclRpbWUiLCJ0aW1lT2Zmc2V0IiwicmVkdWNlIiwiYWNjIiwib2Zmc2V0IiwibGVuZ3RoIiwicHJvZHVjZXJMaXN0IiwiZm9yRWFjaCIsImdldENvbnN1bWVTdHJlYW0iLCJraW5kIiwiY29uc3VtZXJzdHJlYW0iLCJuZXdTdHJlYW0iLCJfcHJvZHVjZXJJZCIsInJ0cENhcGFiaWxpdGllcyIsInJlc3VsdCIsInJ0cFBhcmFtZXRlcnMiLCJjb25zdW1lIiwiY29kZWNPcHRpb25zIiwiY29uc3VtZXIiLCJNZWRpYVN0cmVhbSIsImFkZFRyYWNrIiwicm91dGVyUnRwQ2FwYWJpbGl0aWVzIiwiRGV2aWNlIiwibG9hZCIsImZvcmNlVGNwIiwiY3JlYXRlU2VuZFRyYW5zcG9ydCIsInN1Y2Nlc3NDYWxsIiwiZmFpbHVyZUNhbGwiLCJkdGxzUGFyYW1ldGVycyIsInN0YXRlIiwiY2xvc2UiLCJjcmVhdGVSZWN2VHJhbnNwb3J0IiwicmVnaXN0ZXIiXSwic291cmNlUm9vdCI6IiJ9