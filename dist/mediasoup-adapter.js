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

                              if (!(self.sendAudio || self.sendVideo)) {
                                _context2.next = 11;
                                break;
                              }

                              _context2.next = 10;
                              return navigator.mediaDevices.getUserMedia({
                                video: self.sendVideo,
                                audio: self.sendAudio
                              });

                            case 10:
                              localStream = _context2.sent;

                            case 11:
                              if (!self.sendAudio) {
                                _context2.next = 28;
                                break;
                              }

                              if (localStream) self.storeAudioStream(self.myId, localStream);

                              if (self.producerTransport) {
                                _context2.next = 15;
                                break;
                              }

                              return _context2.abrupt("return", console.error('producerTransport not created yet'));

                            case 15:
                              if (self.device.canProduce('audio')) {
                                _context2.next = 17;
                                break;
                              }

                              return _context2.abrupt("return", console.error('device does not support audio'));

                            case 17:
                              _context2.prev = 17;
                              track = localStream.getAudioTracks()[0];
                              params = {
                                track: track
                              };
                              _context2.next = 22;
                              return self.producerTransport.produce(params);

                            case 22:
                              producer = _context2.sent;
                              _context2.next = 28;
                              break;

                            case 25:
                              _context2.prev = 25;
                              _context2.t0 = _context2["catch"](17);
                              console.error('fail to produce audio stream', _context2.t0);

                            case 28:
                              if (!self.sendVideo) {
                                _context2.next = 45;
                                break;
                              }

                              if (localStream) self.storeVideoStream(self.myId, localStream);

                              if (self.producerTransport) {
                                _context2.next = 32;
                                break;
                              }

                              return _context2.abrupt("return", console.error('producerTransport not created yet'));

                            case 32:
                              if (self.device.canProduce('video')) {
                                _context2.next = 34;
                                break;
                              }

                              return _context2.abrupt("return", console.error('device does not support video'));

                            case 34:
                              _context2.prev = 34;
                              _track = localStream.getVideoTracks()[0];
                              _params = self.simulcastMode ? _objectSpread({
                                track: _track
                              }, self.simulcastConfig) : {
                                track: _track
                              };
                              _context2.next = 39;
                              return self.producerTransport.produce(_params);

                            case 39:
                              _producer = _context2.sent;
                              _context2.next = 45;
                              break;

                            case 42:
                              _context2.prev = 42;
                              _context2.t1 = _context2["catch"](34);
                              console.log('fail to produce video stream', _context2.t1);

                            case 45:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2, null, [[17, 25], [34, 42]]);
                    })), 100);

                  case 5:
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
      var streamName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'audio';
      console.log("getMediaStream ".concat(type));
      var self = this;
      console.log('adapter getMediaStream');

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
      var _this = this;

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
        _this.serverTimeRequests++;

        if (_this.serverTimeRequests <= 10) {
          _this.timeOffsets.push(timeOffset);
        } else {
          _this.timeOffsets[_this.serverTimeRequests % 10] = timeOffset;
        }

        _this.avgTimeOffset = _this.timeOffsets.reduce(function (acc, offset) {
          return acc += offset;
        }, 0) / _this.timeOffsets.length;

        if (_this.serverTimeRequests > 10) {
          setTimeout(function () {
            return _this.updateTimeOffset();
          }, 5 * 60 * 1000); // Sync clock every 5 minutes.
        } else {
          _this.updateTimeOffset();
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
        var _this2 = this;

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
                console.log(producerList);

                if (producerList.length) {
                  _context7.next = 7;
                  break;
                }

                return _context7.abrupt("return", console.log('no producers currently'));

              case 7:
                producerList.forEach( /*#__PURE__*/function () {
                  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref8) {
                    var producerId, socketId;
                    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            producerId = _ref8.producerId, socketId = _ref8.socketId;
                            _context6.next = 3;
                            return _this2.subscribeStream(producerId, socketId);

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

              case 8:
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
                      console.log('SendTranport close');
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
                            console.log('consumerTransport connect fail');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0d29ya2VkLWFmcmFtZS8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vbmV0d29ya2VkLWFmcmFtZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXR3b3JrZWQtYWZyYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldHdvcmtlZC1hZnJhbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9uZXR3b3JrZWQtYWZyYW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9uZXR3b3JrZWQtYWZyYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzaW11bGNhc3RNb2RlOiB0cnVlLFxuICAgIHNpbXVsY2FzdENvbmZpZzoge1xuICAgICAgICBlbmNvZGluZ3M6XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgeyBtYXhCaXRyYXRlOiAxMDAwMDAgfSwgIC8vIGxvd1xuICAgICAgICAgICAgICAgIHsgbWF4Qml0cmF0ZTogMzAwMDAwIH0sICAvLyBtZWRpdW1cbiAgICAgICAgICAgICAgICB7IG1heEJpdHJhdGU6IDYwMDAwMCB9ICAgLy8gaGlnaFxuICAgICAgICAgICAgXSxcbiAgICAgICAgLy8gY29kZWNPcHRpb25zOlxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICB2aWRlb0dvb2dsZVN0YXJ0Qml0cmF0ZTogMTAwMFxuICAgICAgICAvLyB9XG4gICAgfSxcbiAgICBpY2VTZXJ2ZXJzOiBbXG4gICAgICAgIHsgXCJ1cmxzXCI6IFwic3R1bjpzdHVuMS5sLmdvb2dsZS5jb206MTkzMDJcIiB9LFxuICAgICAgICB7IFwidXJsc1wiOiBcInN0dW46c3R1bjIubC5nb29nbGUuY29tOjE5MzAyXCIgfSxcbiAgICBdLFxuICAgIHByZWZlcnJlZExheWVyczoge1xuICAgICAgICAvLyBsb3dlc3RcbiAgICAgICAgc3BhdGlhbExheWVyOiAwXG4gICAgfVxufSIsIi8qIGdsb2JhbCBOQUYsIGlvICovXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpXG5jbGFzcyBNZWRpYXNvdXBBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKGlvID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3NvY2tldC5pby1jbGllbnQgbWlzc2luZycpXG4gICAgICAgIGlmIChtZWRpYXNvdXBDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdtZWRpYXNvdXAtY2xpZW50IG1pc3NpbmcnKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcHAgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgdGhpcy5yb29tID0gXCJkZWZhdWx0XCI7XG4gICAgICAgIHRoaXMub2NjdXBhbnRMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIHRoaXMubXlSb29tSm9pblRpbWUgPSBudWxsO1xuICAgICAgICB0aGlzLm15SWQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMub2NjdXBhbnRzID0ge307IC8vIGlkIC0+IGpvaW5UaW1lc3RhbXBcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRDbGllbnRzID0gW107XG5cbiAgICAgICAgdGhpcy5kZXZpY2UgPSBudWxsOyAvLyBsb2NhbCBEZXZpY2UgKHdpbGwgY29ubmVjdCB0byBzZXJ2ZXItc2lkZSByb3V0ZXIgdGhyb3VnaCB0cmFuc3BvcnQpXG5cbiAgICAgICAgdGhpcy5wcm9kdWNlclRyYW5zcG9ydCA9IG51bGw7ICAgLy8gcHJvZHVjZXJUcmFuc3BvcnQgXG4gICAgICAgIHRoaXMuY29uc3VtZXJUcmFuc3BvcnQgPSBudWxsOyAgIC8vIGNvbnN1bWVyVHJhbnNwb3J0XG5cbiAgICAgICAgdGhpcy52aWRlb1Byb2R1Y2VyID0ge307ICAgLy8gcHJvZHVjZXJJZC0+cHJvZHVjZXIgaW5zdGFuY2VcbiAgICAgICAgdGhpcy52aWRlb0NvbnN1bWVycyA9IHt9OyAgLy8gY29uc3VtZXJJZC0+Y29uc3VtZXIgaW5zdGFuY2VcblxuICAgICAgICB0aGlzLmF1ZGlvUHJvZHVjZXIgPSB7fTsgICAvLyBwcm9kdWNlcklkLT5wcm9kdWNlciBpbnN0YW5jZVxuICAgICAgICB0aGlzLmF1ZGlvQ29uc3VtZXJzID0ge307ICAvLyBjb25zdW1lcklkLT5jb25zdW1lciBpbnN0YW5jZVxuXG4gICAgICAgIHRoaXMuaWNlU2VydmVycyA9IGNvbmZpZy5pY2VTZXJ2ZXJzO1xuICAgICAgICB0aGlzLnNpbXVsY2FzdE1vZGUgPSBjb25maWcuc2ltdWxjYXN0TW9kZTtcbiAgICAgICAgdGhpcy5zaW11bGNhc3RDb25maWcgPSBjb25maWcuc2ltdWxjYXN0Q29uZmlnO1xuXG4gICAgICAgIC8vIHN0b3JlIHZpZGVvL2F1ZGlvIHN0cmVhbXMgb2YgY2xpZW50c1xuICAgICAgICB0aGlzLmF1ZGlvU3RyZWFtcyA9IHt9OyAgLy8gY2xpZW50SWQtPmF1ZGlvU3RyZWFtXG4gICAgICAgIHRoaXMudmlkZW9TdHJlYW1zID0ge307ICAvLyBjbGllbnRJZC0+dmlkZW9TdHJlYW1cbiAgICAgICAgdGhpcy5wZW5kaW5nQXVkaW9SZXF1ZXN0ID0ge307XG4gICAgICAgIHRoaXMucGVuZGluZ1ZpZGVvUmVxdWVzdCA9IHt9O1xuXG4gICAgICAgIHRoaXMuc2VydmVyVGltZVJlcXVlc3RzID0gMDtcbiAgICAgICAgdGhpcy50aW1lT2Zmc2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmF2Z1RpbWVPZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIHNldFNlcnZlclVybCh3c1VybCkge1xuICAgICAgICB0aGlzLndzVXJsID0gd3NVcmw7XG4gICAgfVxuXG4gICAgc2V0QXBwKGFwcE5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHBOYW1lO1xuICAgIH1cblxuICAgIHNldFJvb20ocm9vbU5hbWUpIHtcbiAgICAgICAgdGhpcy5yb29tID0gcm9vbU5hbWU7XG4gICAgfVxuXG4gICAgc2V0V2ViUnRjT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmRhdGFjaGFubmVsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gbWVkaWFzb3VwLWFkYXB0ZXIgd2lsbCB1c2Ugd3MgdG8gc3luYyBjb21wb25lbnRzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYXVkaW8gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZEF1ZGlvID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy52aWRlbyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZW5kVmlkZW8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U2ltdWxjYXN0TW9kZShpc1NpbXVsY2FzdCkge1xuICAgICAgICB0aGlzLnNpbXVsY2FzdE1vZGUgPSBpc1NpbXVsY2FzdFxuICAgIH1cblxuICAgIHNldFNlcnZlckNvbm5lY3RMaXN0ZW5lcnMoc3VjY2Vzc0xpc3RlbmVyLCBmYWlsdXJlTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0U3VjY2VzcyA9IHN1Y2Nlc3NMaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5jb25uZWN0RmFpbHVyZSA9IGZhaWx1cmVMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBzZXRSb29tT2NjdXBhbnRMaXN0ZW5lcihvY2N1cGFudExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMub2NjdXBhbnRMaXN0ZW5lciA9IG9jY3VwYW50TGlzdGVuZXI7XG4gICAgfVxuXG4gICAgc2V0RGF0YUNoYW5uZWxMaXN0ZW5lcnMob3Blbkxpc3RlbmVyLCBjbG9zZWRMaXN0ZW5lciwgbWVzc2FnZUxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMub3Blbkxpc3RlbmVyID0gb3Blbkxpc3RlbmVyO1xuICAgICAgICB0aGlzLmNsb3NlZExpc3RlbmVyID0gY2xvc2VkTGlzdGVuZXI7XG4gICAgICAgIHRoaXMubWVzc2FnZUxpc3RlbmVyID0gbWVzc2FnZUxpc3RlbmVyO1xuICAgIH1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudXBkYXRlVGltZU9mZnNldCgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLndzVXJsIHx8IHNlbGYud3NVcmwgPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi53c1VybCA9IFwid3NzOi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi53c1VybCA9IFwid3M6Ly9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ja2V0ID0gc2VsZi5zb2NrZXQgPSBpbyhzZWxmLndzVXJsKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuc29ja2V0LnJlcXVlc3QgPSAodHlwZSwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNvY2tldC5lbWl0KHR5cGUsIGRhdGEsIHJlc29sdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNvY2tldC5vbihcImNvbm5lY3RcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOQUYubG9nLndyaXRlKFwic3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byB3ZWJzb2NrZXRcIiwgc29ja2V0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5teUlkID0gc29ja2V0LmlkO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmpvaW5Sb29tKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJjb25uZWN0U3VjY2Vzc1wiLCBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGpvaW5lZFRpbWUgfSA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5teVJvb21Kb2luVGltZSA9IGpvaW5lZFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJTdWNjZXNzZnVsbHkgam9pbmVkIHJvb21cIiwgc2VsZi5yb29tLCBcImF0IHNlcnZlciB0aW1lXCIsIGpvaW5lZFRpbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdFN1Y2Nlc3Moc2VsZi5teUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNlbGYuaW5pdGlhbEFuZExvYWREZXZpY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2VsZi5pbml0aWFsUHJvZHVjZXJDb25zdW1lclRyYW5zcG9ydCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZWxmLmdhdGhlckV4aXN0aW5nUHJvZHVjZXJzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybihzZWxmLmRldmljZSwgc2VsZi5wcm9kdWNlclRyYW5zcG9ydCwgc2VsZi5jb25zdW1lclRyYW5zcG9ydCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2NhbFN0cmVhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zZW5kQXVkaW8gfHwgc2VsZi5zZW5kVmlkZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW86IHNlbGYuc2VuZFZpZGVvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogc2VsZi5zZW5kQXVkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBhdWRpbyBzdHJlYW1zXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zZW5kQXVkaW8pIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0cmVhbSkgc2VsZi5zdG9yZUF1ZGlvU3RyZWFtKHNlbGYubXlJZCwgbG9jYWxTdHJlYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLnByb2R1Y2VyVHJhbnNwb3J0KSByZXR1cm4gY29uc29sZS5lcnJvcigncHJvZHVjZXJUcmFuc3BvcnQgbm90IGNyZWF0ZWQgeWV0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuZGV2aWNlLmNhblByb2R1Y2UoJ2F1ZGlvJykpIHJldHVybiBjb25zb2xlLmVycm9yKCdkZXZpY2UgZG9lcyBub3Qgc3VwcG9ydCBhdWRpbycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFjayA9IGxvY2FsU3RyZWFtLmdldEF1ZGlvVHJhY2tzKClbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0geyB0cmFjayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y2VyID0gYXdhaXQgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5wcm9kdWNlKHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZi5hdWRpb1Byb2R1Y2VyW3Byb2R1Y2VyLmlkXSA9IHByb2R1Y2VyIC8vIHByb2R1Y2VyLmtpbmQgPT09ICdhdWRpbydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZhaWwgdG8gcHJvZHVjZSBhdWRpbyBzdHJlYW0nLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHZpZGVvIHN0cmVhbXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnNlbmRWaWRlbykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RyZWFtKSBzZWxmLnN0b3JlVmlkZW9TdHJlYW0oc2VsZi5teUlkLCBsb2NhbFN0cmVhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYucHJvZHVjZXJUcmFuc3BvcnQpIHJldHVybiBjb25zb2xlLmVycm9yKCdwcm9kdWNlclRyYW5zcG9ydCBub3QgY3JlYXRlZCB5ZXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZi5kZXZpY2UuY2FuUHJvZHVjZSgndmlkZW8nKSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ2RldmljZSBkb2VzIG5vdCBzdXBwb3J0IHZpZGVvJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNrID0gbG9jYWxTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBzZWxmLnNpbXVsY2FzdE1vZGUgPyB7IHRyYWNrLCAuLi5zZWxmLnNpbXVsY2FzdENvbmZpZyB9IDogeyB0cmFjayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y2VyID0gYXdhaXQgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5wcm9kdWNlKHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZi52aWRlb1Byb2R1Y2VyW3Byb2R1Y2VyLmlkXSA9IHByb2R1Y2VyIC8vIHByb2R1Y2VyLmtpbmQgPT09ICd2aWRlbydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmYWlsIHRvIHByb2R1Y2UgdmlkZW8gc3RyZWFtJywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJlcnJvclwiLCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU29ja2V0IGNvbm5lY3Rpb24gZmFpbHVyZVwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbm5lY3RGYWlsdXJlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJvY2N1cGFudHNDaGFuZ2VkXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG9jY3VwYW50cyB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZSgnb2NjdXBhbnRzIGNoYW5nZWQnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNlaXZlZE9jY3VwYW50cyhvY2N1cGFudHMpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgcmVhc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xlYW4gdXAgaW5zdGFuY2VzXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGV2aWNlID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0ID0gc2VsZi5jb25zdW1lclRyYW5zcG9ydCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVBdWRpb1N0cmVhbShzZWxmLm15SWQpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlVmlkZW9TdHJlYW0oc2VsZi5teUlkKVxuICAgICAgICAgICAgICAgICAgICAvLyBtYW51YWxseSByZWNvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LmNvbm5lY3QoKVxuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgIHNvY2tldC5vbigncmVzdGFydEljZScsIGFzeW5jICh7IGljZVBhcmFtZXRlcnMgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5yZXN0YXJ0SWNlKHsgaWNlUGFyYW1ldGVycyB9KVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdGFydEljZSBlcnJvcicsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHNvY2tldC5vbignbmV3UHJvZHVjZXInLCBhc3luYyAoeyBwcm9kdWNlcklkLCBzb2NrZXRJZCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3Vic2NyaWJlU3RyZWFtKHByb2R1Y2VySWQsIHNvY2tldElkKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWNlaXZlRGF0YShwYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJvbSA9IHBhY2tldC5mcm9tO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gcGFja2V0LnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tZXNzYWdlTGlzdGVuZXIoZnJvbSwgdHlwZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKFwic2VuZFwiLCByZWNlaXZlRGF0YSk7XG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKFwiYnJvYWRjYXN0XCIsIHJlY2VpdmVEYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgam9pblJvb20oKSB7XG4gICAgICAgIE5BRi5sb2cud3JpdGUoXCJKb2luaW5nIHJvb21cIiwgdGhpcy5yb29tKTtcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcImpvaW5Sb29tXCIsIHsgcm9vbTogdGhpcy5yb29tIH0pO1xuICAgIH1cblxuICAgIHJlY2VpdmVkT2NjdXBhbnRzKG9jY3VwYW50cykge1xuICAgICAgICBkZWxldGUgb2NjdXBhbnRzW3RoaXMubXlJZF07XG4gICAgICAgIHRoaXMub2NjdXBhbnRzID0gb2NjdXBhbnRzO1xuICAgICAgICB0aGlzLm9jY3VwYW50TGlzdGVuZXIob2NjdXBhbnRzKTtcbiAgICB9XG5cbiAgICBzaG91bGRTdGFydENvbm5lY3Rpb25UbyhjbGllbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhcnRTdHJlYW1Db25uZWN0aW9uKHJlbW90ZUlkKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkQ2xpZW50cy5wdXNoKHJlbW90ZUlkKTtcbiAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXIocmVtb3RlSWQpO1xuICAgIH1cblxuICAgIGNsb3NlU3RyZWFtQ29ubmVjdGlvbihjbGllbnRJZCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RlZENsaWVudHMgPSB0aGlzLmNvbm5lY3RlZENsaWVudHMuZmlsdGVyKGMgPT4gYyAhPSBjbGllbnRJZCk7XG4gICAgICAgIHRoaXMuY2xvc2VkTGlzdGVuZXIoY2xpZW50SWQpO1xuICAgIH1cblxuICAgIGdldENvbm5lY3RTdGF0dXMoY2xpZW50SWQpIHtcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gdGhpcy5jb25uZWN0ZWRDbGllbnRzLmluZGV4T2YoY2xpZW50SWQpICE9IC0xO1xuXG4gICAgICAgIGlmIChjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBOQUYuYWRhcHRlcnMuSVNfQ09OTkVDVEVEO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE5BRi5hZGFwdGVycy5OT1RfQ09OTkVDVEVEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZERhdGEodG8sIHR5cGUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5zZW5kRGF0YUd1YXJhbnRlZWQodG8sIHR5cGUsIGRhdGEpO1xuICAgIH1cblxuICAgIHNlbmREYXRhR3VhcmFudGVlZCh0bywgdHlwZSwgZGF0YSkge1xuICAgICAgICBjb25zdCBwYWNrZXQgPSB7XG4gICAgICAgICAgICBmcm9tOiB0aGlzLm15SWQsXG4gICAgICAgICAgICB0byxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgc2VuZGluZzogdHJ1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJzZW5kXCIsIHBhY2tldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOQUYubG9nLndhcm4oJ1NvY2tldElPIHNvY2tldCBub3QgY3JlYXRlZCB5ZXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJyb2FkY2FzdERhdGEodHlwZSwgZGF0YSkge1xuICAgICAgICB0aGlzLmJyb2FkY2FzdERhdGFHdWFyYW50ZWVkKHR5cGUsIGRhdGEpO1xuICAgIH1cblxuICAgIGJyb2FkY2FzdERhdGFHdWFyYW50ZWVkKHR5cGUsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFja2V0ID0ge1xuICAgICAgICAgICAgZnJvbTogdGhpcy5teUlkLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBicm9hZGNhc3Rpbmc6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJicm9hZGNhc3RcIiwgcGFja2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5BRi5sb2cud2FybignU29ja2V0SU8gc29ja2V0IG5vdCBjcmVhdGVkIHlldCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQXVkaW9TdHJlYW0oY2xpZW50SWQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuYXVkaW9TdHJlYW1zW2NsaWVudElkXVxuICAgIH1cblxuICAgIHJlbW92ZVZpZGVvU3RyZWFtKGNsaWVudElkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnZpZGVvU3RyZWFtc1tjbGllbnRJZF1cbiAgICB9XG5cblxuICAgIHN0b3JlQXVkaW9TdHJlYW0oY2xpZW50SWQsIHN0cmVhbSkge1xuICAgICAgICB0aGlzLmF1ZGlvU3RyZWFtc1tjbGllbnRJZF0gPSBzdHJlYW07XG5cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0F1ZGlvUmVxdWVzdFtjbGllbnRJZF0pIHtcbiAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJSZWNlaXZlZCBwZW5kaW5nIGF1ZGlvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ0F1ZGlvUmVxdWVzdFtjbGllbnRJZF0oc3RyZWFtKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdBdWRpb1JlcXVlc3RbY2xpZW50SWRdKHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9yZVZpZGVvU3RyZWFtKGNsaWVudElkLCBzdHJlYW0pIHtcbiAgICAgICAgdGhpcy52aWRlb1N0cmVhbXNbY2xpZW50SWRdID0gc3RyZWFtO1xuXG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdWaWRlb1JlcXVlc3RbY2xpZW50SWRdKSB7XG4gICAgICAgICAgICBOQUYubG9nLndyaXRlKFwiUmVjZWl2ZWQgcGVuZGluZyB2aWRlbyBmb3IgXCIgKyBjbGllbnRJZCk7XG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdWaWRlb1JlcXVlc3RbY2xpZW50SWRdKHN0cmVhbSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nVmlkZW9SZXF1ZXN0W2NsaWVudElkXShzdHJlYW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TWVkaWFTdHJlYW0oY2xpZW50SWQsIHN0cmVhbU5hbWUgPSAnJywgdHlwZSA9ICdhdWRpbycpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGdldE1lZGlhU3RyZWFtICR7dHlwZX1gKTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2FkYXB0ZXIgZ2V0TWVkaWFTdHJlYW0nKTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXVkaW9TdHJlYW1zW2NsaWVudElkXSkge1xuICAgICAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJBbHJlYWR5IGhhZCBhdWRpbyBmb3IgXCIgKyBjbGllbnRJZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmF1ZGlvU3RyZWFtc1tjbGllbnRJZF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBOQUYubG9nLndyaXRlKFwiV2FpdGluZyBvbiBhdWRpbyBmb3IgXCIgKyBjbGllbnRJZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBlbmRpbmdBdWRpb1JlcXVlc3RbY2xpZW50SWRdID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52aWRlb1N0cmVhbXNbY2xpZW50SWRdKSB7XG4gICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZShcIkFscmVhZHkgaGFkIHZpZGVvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMudmlkZW9TdHJlYW1zW2NsaWVudElkXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJXYWl0aW5nIG9uIHZpZGVvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGVuZGluZ1ZpZGVvUmVxdWVzdFtjbGllbnRJZF0gPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVGltZU9mZnNldCgpIHtcbiAgICAgICAgY29uc3QgY2xpZW50U2VudFRpbWUgPSBEYXRlLm5vdygpICsgdGhpcy5hdmdUaW1lT2Zmc2V0O1xuXG4gICAgICAgIHJldHVybiBmZXRjaChkb2N1bWVudC5sb2NhdGlvbi5ocmVmLCB7IG1ldGhvZDogXCJIRUFEXCIsIGNhY2hlOiBcIm5vLWNhY2hlXCIgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJlY2lzaW9uID0gMTAwMDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2ZXJSZWNlaXZlZFRpbWUgPSBuZXcgRGF0ZShyZXMuaGVhZGVycy5nZXQoXCJEYXRlXCIpKS5nZXRUaW1lKCkgKyAocHJlY2lzaW9uIC8gMik7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50UmVjZWl2ZWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lID0gc2VydmVyUmVjZWl2ZWRUaW1lICsgKChjbGllbnRSZWNlaXZlZFRpbWUgLSBjbGllbnRTZW50VGltZSkgLyAyKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lT2Zmc2V0ID0gc2VydmVyVGltZSAtIGNsaWVudFJlY2VpdmVkVGltZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyVGltZVJlcXVlc3RzKys7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJUaW1lUmVxdWVzdHMgPD0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lT2Zmc2V0cy5wdXNoKHRpbWVPZmZzZXQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZU9mZnNldHNbdGhpcy5zZXJ2ZXJUaW1lUmVxdWVzdHMgJSAxMF0gPSB0aW1lT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYXZnVGltZU9mZnNldCA9IHRoaXMudGltZU9mZnNldHMucmVkdWNlKChhY2MsIG9mZnNldCkgPT4gYWNjICs9IG9mZnNldCwgMCkgLyB0aGlzLnRpbWVPZmZzZXRzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlcnZlclRpbWVSZXF1ZXN0cyA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVUaW1lT2Zmc2V0KCksIDUgKiA2MCAqIDEwMDApOyAvLyBTeW5jIGNsb2NrIGV2ZXJ5IDUgbWludXRlcy5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTZXJ2ZXJUaW1lKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyB0aGlzLmF2Z1RpbWVPZmZzZXQ7XG4gICAgfVxuXG5cblxuICAgIC8qKiBNRURJQVNPVVAgUkVMQVRFRCBGVU5DVElPTlMgKiovXG4gICAgYXN5bmMgZ2F0aGVyRXhpc3RpbmdQcm9kdWNlcnMoKSB7XG5cbiAgICAgICAgY29uc3QgeyBwcm9kdWNlckxpc3QgfSA9IGF3YWl0IHRoaXMuc29ja2V0LnJlcXVlc3QoJ2dhdGhlclByb2R1Y2VycycpXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y2VyTGlzdCk7XG4gICAgICAgIGlmICghcHJvZHVjZXJMaXN0Lmxlbmd0aCkgcmV0dXJuIGNvbnNvbGUubG9nKCdubyBwcm9kdWNlcnMgY3VycmVudGx5JylcblxuICAgICAgICBwcm9kdWNlckxpc3QuZm9yRWFjaChhc3luYyAoeyBwcm9kdWNlcklkLCBzb2NrZXRJZCB9KSA9PiB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN1YnNjcmliZVN0cmVhbShwcm9kdWNlcklkLCBzb2NrZXRJZClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBzdWJzY3JpYmVTdHJlYW0ocHJvZHVjZXJJZCwgc29ja2V0SWQpIHtcblxuICAgICAgICBpZiAoIXRoaXMuY29uc3VtZXJUcmFuc3BvcnQpIHJldHVybiBjb25zb2xlLmxvZyhgY29uc3VtZXJUcmFuc3BvcnQgZG9lc24ndCBleGlzdGApXG5cbiAgICAgICAgY29uc3QgeyBraW5kLCBuZXdTdHJlYW06IGNvbnN1bWVyc3RyZWFtIH0gPSBhd2FpdCB0aGlzLmdldENvbnN1bWVTdHJlYW0odGhpcy5jb25zdW1lclRyYW5zcG9ydCwgcHJvZHVjZXJJZClcblxuICAgICAgICBjb25zb2xlLmxvZygnc3Vic2NyaWJlIHN1Y2Vzc2Z1bGx5JywgeyBraW5kLCBjb25zdW1lcnN0cmVhbSB9KTtcblxuICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ZpZGVvJzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlVmlkZW9TdHJlYW0oc29ja2V0SWQsIGNvbnN1bWVyc3RyZWFtKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXVkaW8nOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVBdWRpb1N0cmVhbShzb2NrZXRJZCwgY29uc3VtZXJzdHJlYW0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmtub3duIGtpbmQnLCBraW5kKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldENvbnN1bWVTdHJlYW0oY29uc3VtZXJUcmFuc3BvcnQsIF9wcm9kdWNlcklkKSB7XG4gICAgICAgIGNvbnN0IHsgcnRwQ2FwYWJpbGl0aWVzIH0gPSB0aGlzLmRldmljZVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNvY2tldC5yZXF1ZXN0KCdjb25zdW1lU3RyZWFtJywgeyBydHBDYXBhYmlsaXRpZXMsIF9wcm9kdWNlcklkIH0pXG4gICAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gbnVsbFxuXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjZXJJZCwgaWQsIGtpbmQsIHJ0cFBhcmFtZXRlcnMgfSA9IHJlc3VsdFxuICAgICAgICBjb25zdCBjb25zdW1lciA9IGF3YWl0IGNvbnN1bWVyVHJhbnNwb3J0LmNvbnN1bWUoe1xuICAgICAgICAgICAgcHJvZHVjZXJJZCxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIHJ0cFBhcmFtZXRlcnMsXG4gICAgICAgICAgICBjb2RlY09wdGlvbnM6IHt9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbmV3U3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKClcbiAgICAgICAgbmV3U3RyZWFtLmFkZFRyYWNrKGNvbnN1bWVyLnRyYWNrKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV3U3RyZWFtLFxuICAgICAgICAgICAga2luZFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbml0aWFsQW5kTG9hZERldmljZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNvY2tldCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5kZXZpY2UpIHJldHVybiBjb25zb2xlLmxvZygnZGV2aWNlIGxvYWRlZCBhbHJlYWR5JylcbiAgICAgICAgY29uc3Qgcm91dGVyUnRwQ2FwYWJpbGl0aWVzID0gYXdhaXQgdGhpcy5zb2NrZXQucmVxdWVzdCgnZ2V0Um91dGVyUnRwQ2FwYWJpbGl0aWVzJylcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlID0gbmV3IG1lZGlhc291cENsaWVudC5EZXZpY2UoKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuZGV2aWNlLmxvYWQoeyByb3V0ZXJSdHBDYXBhYmlsaXRpZXMgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ01lZGlhc291cENsaWVudCBEZXZpY2UgbG9hZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cblxuICAgIGFzeW5jIGluaXRpYWxQcm9kdWNlckNvbnN1bWVyVHJhbnNwb3J0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAoIXNlbGYuZGV2aWNlKSByZXR1cm4gY29uc29sZS53YXJuKCdEZXZpY2Ugbm90IGxvYWRlZCcpXG4gICAgICAgIGlmIChzZWxmLnByb2R1Y2VyVHJhbnNwb3J0ICYmIHNlbGYuY29uc3VtZXJUcmFuc3BvcnQpIHJldHVybiBjb25zb2xlLmxvZygndHJhbnNwb3J0IGFyZWFkeSBleGlzdHMnKVxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZWxmLnNvY2tldC5yZXF1ZXN0KCdjcmVhdGVQcm9kdWNlclRyYW5zcG9ydCcsIHtcbiAgICAgICAgICAgICAgICBmb3JjZVRjcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcnRwQ2FwYWJpbGl0aWVzOiBzZWxmLmRldmljZS5ydHBDYXBhYmlsaXRpZXMsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiBjb25zb2xlLmxvZygnY3JlYXRlUHJvZHVjZXJUcmFuc3BvcnQgZXJyb3InKVxuICAgICAgICAgICAgLy8gdHJhbnNwb3J0SWQgPSBkYXRhLnBhcmFtcy5pZFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0cmFuc3BvcnQuaWQsXG4gICAgICAgICAgICAgICAgICAgIGljZVBhcmFtZXRlcnM6IHRyYW5zcG9ydC5pY2VQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAgICAgICBpY2VDYW5kaWRhdGVzOiB0cmFuc3BvcnQuaWNlQ2FuZGlkYXRlcywgICBcbiAgICAgICAgICAgICAgICAgICAgZHRsc1BhcmFtZXRlcnM6IHRyYW5zcG9ydC5kdGxzUGFyYW1ldGVyc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZi5wcm9kdWNlclRyYW5zcG9ydCA9IHNlbGYuZGV2aWNlLmNyZWF0ZVNlbmRUcmFuc3BvcnQoe1xuICAgICAgICAgICAgICAgIC4uLmRhdGEucGFyYW1zLFxuICAgICAgICAgICAgICAgIGljZVNlcnZlcnM6IHNlbGYuaWNlU2VydmVyc1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5vbignY29ubmVjdCcsIGFzeW5jICh7IGR0bHNQYXJhbWV0ZXJzIH0sIHN1Y2Nlc3NDYWxsLCBmYWlsdXJlQ2FsbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwcm9kdWNlciB0cmFuc3BvcnQgY29ubmVjdCcpO1xuICAgICAgICAgICAgICAgIHNlbGYuc29ja2V0LnJlcXVlc3QoJ2Nvbm5lY3RQcm9kdWNlclRyYW5zcG9ydCcsIHsgZHRsc1BhcmFtZXRlcnMgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oc3VjY2Vzc0NhbGwpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmYWlsdXJlQ2FsbClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQub24oJ3Byb2R1Y2UnLCBhc3luYyAoeyBraW5kLCBydHBQYXJhbWV0ZXJzIH0sIHN1Y2Nlc3NDYWxsLCBmYWlsdXJlQ2FsbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9kdWNlIHN0cmVhbScsIGtpbmQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHByb2R1Y2VySWQ6IGlkIH0gPSBhd2FpdCBzZWxmLnNvY2tldC5yZXF1ZXN0KCdwcm9kdWNlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHNlbGYucHJvZHVjZXJUcmFuc3BvcnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgcnRwUGFyYW1ldGVyc1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbCh7IGlkIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBmYWlsdXJlQ2FsbChlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQub24oJ2Nvbm5lY3Rpb25zdGF0ZWNoYW5nZScsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29ubmVjdGluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb25uZWN0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2R1Y2VyVHJhbnNwb3J0IGNvbm5lY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZmFpbGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZW5kVHJhbnBvcnQgY2xvc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlbGYuc29ja2V0LnJlcXVlc3QoJ2NyZWF0ZUNvbnN1bWVyVHJhbnNwb3J0Jywge1xuICAgICAgICAgICAgICAgIGZvcmNlVGNwOiBmYWxzZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiBjb25zb2xlLmxvZygnY3JlYXRlQ29uc3VtZXJUcmFuc3BvcnQgZmFpbHVyZScsIGRhdGEuZXJyb3IpXG5cbiAgICAgICAgICAgIHNlbGYuY29uc3VtZXJUcmFuc3BvcnQgPSBzZWxmLmRldmljZS5jcmVhdGVSZWN2VHJhbnNwb3J0KHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLnBhcmFtcyxcbiAgICAgICAgICAgICAgICBpY2VTZXJ2ZXJzOiBzZWxmLmljZVNlcnZlcnNcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlbGYuY29uc3VtZXJUcmFuc3BvcnQub24oJ2Nvbm5lY3QnLCBhc3luYyAoeyBkdGxzUGFyYW1ldGVycyB9LCBzdWNjZXNzQ2FsbCwgZmFpbHVyZUNhbGwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uc3VtZXIgdHJhbnNwb3J0IGNvbm5lY3QnKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNvY2tldC5yZXF1ZXN0KCdjb25uZWN0Q29uc3VtZXJUcmFuc3BvcnQnLCB7IGR0bHNQYXJhbWV0ZXJzIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3NDYWxsKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZmFpbHVyZUNhbGwpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzZWxmLmNvbnN1bWVyVHJhbnNwb3J0Lm9uKCdjb25uZWN0aW9uc3RhdGVjaGFuZ2UnLCBhc3luYyAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nvbm5lY3RpbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbnN1bWVyIGNvbm5lY3RpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb25uZWN0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbnN1bWVyVHJhbnNwb3J0IGNvbm5lY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZhaWxlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uc3VtZXJUcmFuc3BvcnQgY29ubmVjdCBmYWlsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnN1bWVyVHJhbnNwb3J0LmNsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbk5BRi5hZGFwdGVycy5yZWdpc3RlcihcIm1lZGlhc291cFwiLCBNZWRpYXNvdXBBZGFwdGVyKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYXNvdXBBZGFwdGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzaW11bGNhc3RNb2RlIiwic2ltdWxjYXN0Q29uZmlnIiwiZW5jb2RpbmdzIiwibWF4Qml0cmF0ZSIsImljZVNlcnZlcnMiLCJwcmVmZXJyZWRMYXllcnMiLCJzcGF0aWFsTGF5ZXIiLCJjb25maWciLCJyZXF1aXJlIiwiTWVkaWFzb3VwQWRhcHRlciIsImlvIiwidW5kZWZpbmVkIiwiY29uc29sZSIsIndhcm4iLCJtZWRpYXNvdXBDbGllbnQiLCJhcHAiLCJyb29tIiwib2NjdXBhbnRMaXN0ZW5lciIsIm15Um9vbUpvaW5UaW1lIiwibXlJZCIsIm9jY3VwYW50cyIsImNvbm5lY3RlZENsaWVudHMiLCJkZXZpY2UiLCJwcm9kdWNlclRyYW5zcG9ydCIsImNvbnN1bWVyVHJhbnNwb3J0IiwidmlkZW9Qcm9kdWNlciIsInZpZGVvQ29uc3VtZXJzIiwiYXVkaW9Qcm9kdWNlciIsImF1ZGlvQ29uc3VtZXJzIiwiYXVkaW9TdHJlYW1zIiwidmlkZW9TdHJlYW1zIiwicGVuZGluZ0F1ZGlvUmVxdWVzdCIsInBlbmRpbmdWaWRlb1JlcXVlc3QiLCJzZXJ2ZXJUaW1lUmVxdWVzdHMiLCJ0aW1lT2Zmc2V0cyIsImF2Z1RpbWVPZmZzZXQiLCJ3c1VybCIsImFwcE5hbWUiLCJyb29tTmFtZSIsIm9wdGlvbnMiLCJkYXRhY2hhbm5lbCIsImF1ZGlvIiwic2VuZEF1ZGlvIiwidmlkZW8iLCJzZW5kVmlkZW8iLCJpc1NpbXVsY2FzdCIsInN1Y2Nlc3NMaXN0ZW5lciIsImZhaWx1cmVMaXN0ZW5lciIsImNvbm5lY3RTdWNjZXNzIiwiY29ubmVjdEZhaWx1cmUiLCJvcGVuTGlzdGVuZXIiLCJjbG9zZWRMaXN0ZW5lciIsIm1lc3NhZ2VMaXN0ZW5lciIsInNlbGYiLCJ1cGRhdGVUaW1lT2Zmc2V0IiwidGhlbiIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0Iiwic29ja2V0IiwicmVxdWVzdCIsInR5cGUiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlbWl0IiwiZXJyIiwib24iLCJOQUYiLCJsb2ciLCJ3cml0ZSIsImlkIiwiam9pblJvb20iLCJqb2luZWRUaW1lIiwic2V0VGltZW91dCIsImluaXRpYWxBbmRMb2FkRGV2aWNlIiwiaW5pdGlhbFByb2R1Y2VyQ29uc3VtZXJUcmFuc3BvcnQiLCJnYXRoZXJFeGlzdGluZ1Byb2R1Y2VycyIsImxvY2FsU3RyZWFtIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwic3RvcmVBdWRpb1N0cmVhbSIsImVycm9yIiwiY2FuUHJvZHVjZSIsInRyYWNrIiwiZ2V0QXVkaW9UcmFja3MiLCJwYXJhbXMiLCJwcm9kdWNlIiwicHJvZHVjZXIiLCJzdG9yZVZpZGVvU3RyZWFtIiwiZ2V0VmlkZW9UcmFja3MiLCJyZWNlaXZlZE9jY3VwYW50cyIsInJlYXNvbiIsInJlbW92ZUF1ZGlvU3RyZWFtIiwicmVtb3ZlVmlkZW9TdHJlYW0iLCJjb25uZWN0IiwiaWNlUGFyYW1ldGVycyIsInJlc3RhcnRJY2UiLCJwcm9kdWNlcklkIiwic29ja2V0SWQiLCJzdWJzY3JpYmVTdHJlYW0iLCJyZWNlaXZlRGF0YSIsInBhY2tldCIsImZyb20iLCJjbGllbnQiLCJyZW1vdGVJZCIsInB1c2giLCJjbGllbnRJZCIsImZpbHRlciIsImMiLCJjb25uZWN0ZWQiLCJpbmRleE9mIiwiYWRhcHRlcnMiLCJJU19DT05ORUNURUQiLCJOT1RfQ09OTkVDVEVEIiwidG8iLCJzZW5kRGF0YUd1YXJhbnRlZWQiLCJzZW5kaW5nIiwiYnJvYWRjYXN0RGF0YUd1YXJhbnRlZWQiLCJicm9hZGNhc3RpbmciLCJzdHJlYW0iLCJzdHJlYW1OYW1lIiwiY2xpZW50U2VudFRpbWUiLCJEYXRlIiwibm93IiwiZmV0Y2giLCJkb2N1bWVudCIsImhyZWYiLCJtZXRob2QiLCJjYWNoZSIsInJlcyIsInByZWNpc2lvbiIsInNlcnZlclJlY2VpdmVkVGltZSIsImhlYWRlcnMiLCJnZXQiLCJnZXRUaW1lIiwiY2xpZW50UmVjZWl2ZWRUaW1lIiwic2VydmVyVGltZSIsInRpbWVPZmZzZXQiLCJyZWR1Y2UiLCJhY2MiLCJvZmZzZXQiLCJsZW5ndGgiLCJwcm9kdWNlckxpc3QiLCJmb3JFYWNoIiwiZ2V0Q29uc3VtZVN0cmVhbSIsImtpbmQiLCJjb25zdW1lcnN0cmVhbSIsIm5ld1N0cmVhbSIsIl9wcm9kdWNlcklkIiwicnRwQ2FwYWJpbGl0aWVzIiwicmVzdWx0IiwicnRwUGFyYW1ldGVycyIsImNvbnN1bWUiLCJjb2RlY09wdGlvbnMiLCJjb25zdW1lciIsIk1lZGlhU3RyZWFtIiwiYWRkVHJhY2siLCJyb3V0ZXJSdHBDYXBhYmlsaXRpZXMiLCJEZXZpY2UiLCJsb2FkIiwiZm9yY2VUY3AiLCJjcmVhdGVTZW5kVHJhbnNwb3J0Iiwic3VjY2Vzc0NhbGwiLCJmYWlsdXJlQ2FsbCIsImR0bHNQYXJhbWV0ZXJzIiwic3RhdGUiLCJjbG9zZSIsImNyZWF0ZVJlY3ZUcmFuc3BvcnQiLCJyZWdpc3RlciJdLCJzb3VyY2VSb290IjoiIn0=