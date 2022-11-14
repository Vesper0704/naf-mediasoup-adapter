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

    this.screenProducer = {};
    this.screenConsumers = {};
    this.iceServers = config.iceServers;
    this.simulcastMode = config.simulcastMode;
    this.simulcastConfig = config.simulcastConfig; // store video/audio streams of clients

    this.audioStreams = {}; // clientId->audioStream

    this.videoStreams = {}; // clientId->videoStream

    this.screenStreams = {}; // clientId->screen share streams

    this.pendingAudioRequest = {};
    this.pendingVideoRequest = {};
    this.pendingScreenRequest = {};
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
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
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
          self.removeVideoStream(self.myId);
          self.removeScreenStream(self.myId); // manually reconnect

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
    key: "addLocalMediaStream",
    value: function () {
      var _addLocalMediaStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(stream, streamName) {
        var self, track, params, producer, _track, _params, _producer, _track2, _params2, _producer2;

        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                self = this;

                if (self.producerTransport) {
                  _context6.next = 3;
                  break;
                }

                return _context6.abrupt("return", console.error('producerTransport not created yet'));

              case 3:
                console.log({
                  streamName: streamName
                });
                _context6.t0 = streamName;
                _context6.next = _context6.t0 === 'video' ? 7 : _context6.t0 === 'audio' ? 17 : _context6.t0 === 'screenshare' ? 27 : 37;
                break;

              case 7:
                if (self.device.canProduce('video')) {
                  _context6.next = 9;
                  break;
                }

                return _context6.abrupt("return", console.error('device does not support video'));

              case 9:
                track = stream.getVideoTracks()[0];
                params = self.simulcastMode ? _objectSpread({
                  track: track
                }, self.simulcastConfig) : {
                  track: track
                };
                params.appData = {
                  streamName: streamName
                };
                _context6.next = 14;
                return self.producerTransport.produce(params);

              case 14:
                producer = _context6.sent;
                self.videoProducer[producer.id] = producer; // producer.kind === 'video'

                return _context6.abrupt("break", 39);

              case 17:
                if (self.device.canProduce('audio')) {
                  _context6.next = 19;
                  break;
                }

                return _context6.abrupt("return", console.error('device does not support audio'));

              case 19:
                _track = stream.getAudioTracks()[0];
                _params = {
                  track: _track
                };
                _params.appData = {
                  streamName: streamName
                };
                _context6.next = 24;
                return self.producerTransport.produce(_params);

              case 24:
                _producer = _context6.sent;
                self.audioProducer[_producer.id] = _producer; // producer.kind === 'audio'

                return _context6.abrupt("break", 39);

              case 27:
                if (self.device.canProduce('video')) {
                  _context6.next = 29;
                  break;
                }

                return _context6.abrupt("return", console.error('device does not support video'));

              case 29:
                _track2 = stream.getVideoTracks()[0];
                _params2 = {
                  track: _track2
                };
                _params2.appData = {
                  streamName: streamName
                };
                _context6.next = 34;
                return self.producerTransport.produce(_params2);

              case 34:
                _producer2 = _context6.sent;
                self.screenProducer[_producer2.id] = _producer2; // producer.kind === 'video'

                return _context6.abrupt("break", 39);

              case 37:
                console.log("unknown type: ".concat(type));
                return _context6.abrupt("break", 39);

              case 39:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function addLocalMediaStream(_x4, _x5) {
        return _addLocalMediaStream.apply(this, arguments);
      }

      return addLocalMediaStream;
    }()
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
    key: "removeScreenStream",
    value: function removeScreenStream(clientId) {
      delete this.screenStreams[clientId];
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
    key: "storeScreenStream",
    value: function storeScreenStream(clientId, stream) {
      this.screenStreams[clientId] = stream;

      if (this.pendingScreenRequest[clientId]) {
        NAF.log.write("Received pending screen for " + clientId);
        this.pendingScreenRequest[clientId](stream);
        delete this.pendingScreenRequest[clientId](stream);
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
      } else if (type === 'screenshare') {
        if (this.screenStreams[clientId]) {
          NAF.log.write("Already had screen for " + clientId);
          return Promise.resolve(this.screenStreams[clientId]);
        } else {
          NAF.log.write("Waiting on screen for " + clientId);
          return new Promise(function (resolve) {
            self.pendingScreenRequest[clientId] = resolve;
          });
        }
      }
    }
  }, {
    key: "pauseStream",
    value: function pauseStream() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'video';

      try {
        var producers = Object.values(type === 'video' ? this.videoProducer : type === 'audio' ? this.audioProducer : this.screenProducer);
        var length = producers.length;
        if (!producers || !length) return {
          e: null,
          msg: "no ".concat(type, " producers now"),
          length: length
        };
        producers.forEach(function (producer) {
          // console.log(producer);
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
        var producers = Object.values(type === 'video' ? this.videoProducer : type === 'audio' ? this.audioProducer : this.screenProducer);
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
      var _gatherExistingProducers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _this3 = this;

        var _yield$this$socket$re, producerList;

        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.socket.request('gatherProducers');

              case 2:
                _yield$this$socket$re = _context8.sent;
                producerList = _yield$this$socket$re.producerList;

                if (producerList.length) {
                  _context8.next = 6;
                  break;
                }

                return _context8.abrupt("return", console.log('no producers currently', producerList));

              case 6:
                producerList.forEach( /*#__PURE__*/function () {
                  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(_ref8) {
                    var producerId, socketId;
                    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            producerId = _ref8.producerId, socketId = _ref8.socketId;
                            _context7.next = 3;
                            return _this3.subscribeStream(producerId, socketId);

                          case 3:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x6) {
                    return _ref9.apply(this, arguments);
                  };
                }());

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function gatherExistingProducers() {
        return _gatherExistingProducers.apply(this, arguments);
      }

      return gatherExistingProducers;
    }()
  }, {
    key: "subscribeStream",
    value: function () {
      var _subscribeStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(producerId, socketId) {
        var _yield$this$getConsum, kind, consumerstream, streamName;

        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (this.consumerTransport) {
                  _context9.next = 2;
                  break;
                }

                return _context9.abrupt("return", console.log("consumerTransport doesn't exist"));

              case 2:
                _context9.next = 4;
                return this.getConsumeStream(this.consumerTransport, producerId);

              case 4:
                _yield$this$getConsum = _context9.sent;
                kind = _yield$this$getConsum.kind;
                consumerstream = _yield$this$getConsum.newStream;
                streamName = _yield$this$getConsum.streamName;
                console.log('subscribe sucessfully', {
                  kind: kind,
                  streamName: streamName,
                  consumerstream: consumerstream
                });
                _context9.t0 = streamName;
                _context9.next = _context9.t0 === 'video' ? 12 : _context9.t0 === 'audio' ? 14 : _context9.t0 === 'screenshare' ? 16 : 18;
                break;

              case 12:
                this.storeVideoStream(socketId, consumerstream);
                return _context9.abrupt("break", 20);

              case 14:
                this.storeAudioStream(socketId, consumerstream);
                return _context9.abrupt("break", 20);

              case 16:
                this.storeScreenStream(socketId, consumerstream);
                return _context9.abrupt("break", 20);

              case 18:
                console.log('unknown kind', kind);
                return _context9.abrupt("break", 20);

              case 20:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function subscribeStream(_x7, _x8) {
        return _subscribeStream.apply(this, arguments);
      }

      return subscribeStream;
    }()
  }, {
    key: "getConsumeStream",
    value: function () {
      var _getConsumeStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(consumerTransport, _producerId) {
        var rtpCapabilities, result, producerId, id, kind, rtpParameters, streamName, consumer, newStream;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                rtpCapabilities = this.device.rtpCapabilities;
                _context10.next = 3;
                return this.socket.request('consumeStream', {
                  rtpCapabilities: rtpCapabilities,
                  _producerId: _producerId
                });

              case 3:
                result = _context10.sent;

                if (result) {
                  _context10.next = 6;
                  break;
                }

                return _context10.abrupt("return", null);

              case 6:
                producerId = result.producerId, id = result.id, kind = result.kind, rtpParameters = result.rtpParameters, streamName = result.streamName;
                _context10.next = 9;
                return consumerTransport.consume({
                  producerId: producerId,
                  id: id,
                  kind: kind,
                  rtpParameters: rtpParameters,
                  codecOptions: {}
                });

              case 9:
                consumer = _context10.sent;
                newStream = new MediaStream();
                newStream.addTrack(consumer.track);
                return _context10.abrupt("return", {
                  newStream: newStream,
                  kind: kind,
                  streamName: streamName
                });

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getConsumeStream(_x9, _x10) {
        return _getConsumeStream.apply(this, arguments);
      }

      return getConsumeStream;
    }()
  }, {
    key: "initialAndLoadDevice",
    value: function () {
      var _initialAndLoadDevice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var routerRtpCapabilities;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (this.socket) {
                  _context11.next = 2;
                  break;
                }

                return _context11.abrupt("return");

              case 2:
                if (!this.device) {
                  _context11.next = 4;
                  break;
                }

                return _context11.abrupt("return", console.log('device loaded already'));

              case 4:
                _context11.next = 6;
                return this.socket.request('getRouterRtpCapabilities');

              case 6:
                routerRtpCapabilities = _context11.sent;
                _context11.prev = 7;
                this.device = new mediasoupClient.Device();
                _context11.next = 14;
                break;

              case 11:
                _context11.prev = 11;
                _context11.t0 = _context11["catch"](7);
                return _context11.abrupt("return", _context11.t0);

              case 14:
                _context11.next = 16;
                return this.device.load({
                  routerRtpCapabilities: routerRtpCapabilities
                });

              case 16:
                console.log('MediasoupClient Device load successfully');
                return _context11.abrupt("return", null);

              case 18:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[7, 11]]);
      }));

      function initialAndLoadDevice() {
        return _initialAndLoadDevice.apply(this, arguments);
      }

      return initialAndLoadDevice;
    }()
  }, {
    key: "initialProducerConsumerTransport",
    value: function () {
      var _initialProducerConsumerTransport = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
        var self, data, _data;

        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                self = this;

                if (self.device) {
                  _context16.next = 3;
                  break;
                }

                return _context16.abrupt("return", console.warn('Device not loaded'));

              case 3:
                if (!(self.producerTransport && self.consumerTransport)) {
                  _context16.next = 5;
                  break;
                }

                return _context16.abrupt("return", console.log('transport aready exists'));

              case 5:
                _context16.next = 7;
                return self.socket.request('createProducerTransport', {
                  forceTcp: false,
                  rtpCapabilities: self.device.rtpCapabilities
                });

              case 7:
                data = _context16.sent;

                if (!data.error) {
                  _context16.next = 10;
                  break;
                }

                return _context16.abrupt("return", console.log('createProducerTransport error'));

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
                  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(_ref10, successCall, failureCall) {
                    var dtlsParameters;
                    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                      while (1) {
                        switch (_context12.prev = _context12.next) {
                          case 0:
                            dtlsParameters = _ref10.dtlsParameters;
                            // console.log('producer transport connect');
                            self.socket.request('connectProducerTransport', {
                              dtlsParameters: dtlsParameters
                            }).then(successCall)["catch"](failureCall);

                          case 2:
                          case "end":
                            return _context12.stop();
                        }
                      }
                    }, _callee12);
                  }));

                  return function (_x11, _x12, _x13) {
                    return _ref11.apply(this, arguments);
                  };
                }());
                self.producerTransport.on('produce', /*#__PURE__*/function () {
                  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(_ref12, successCall, failureCall) {
                    var kind, rtpParameters, appData, _yield$self$socket$re, id;

                    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            kind = _ref12.kind, rtpParameters = _ref12.rtpParameters, appData = _ref12.appData;
                            _context13.prev = 1;
                            console.log('produce stream', kind, {
                              appData: appData
                            });
                            _context13.next = 5;
                            return self.socket.request('produce', {
                              id: self.producerTransport.id,
                              kind: kind,
                              rtpParameters: rtpParameters,
                              appData: appData
                            });

                          case 5:
                            _yield$self$socket$re = _context13.sent;
                            id = _yield$self$socket$re.producerId;
                            successCall({
                              id: id
                            });
                            _context13.next = 13;
                            break;

                          case 10:
                            _context13.prev = 10;
                            _context13.t0 = _context13["catch"](1);
                            failureCall(_context13.t0);

                          case 13:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13, null, [[1, 10]]);
                  }));

                  return function (_x14, _x15, _x16) {
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
                _context16.next = 16;
                return self.socket.request('createConsumerTransport', {
                  forceTcp: false
                });

              case 16:
                _data = _context16.sent;

                if (!_data.error) {
                  _context16.next = 19;
                  break;
                }

                return _context16.abrupt("return", console.log('createConsumerTransport failure', _data.error));

              case 19:
                self.consumerTransport = self.device.createRecvTransport(_objectSpread(_objectSpread({}, _data.params), {}, {
                  iceServers: self.iceServers
                }));
                self.consumerTransport.on('connect', /*#__PURE__*/function () {
                  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(_ref14, successCall, failureCall) {
                    var dtlsParameters;
                    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                      while (1) {
                        switch (_context14.prev = _context14.next) {
                          case 0:
                            dtlsParameters = _ref14.dtlsParameters;
                            console.log('consumer transport connect');
                            self.socket.request('connectConsumerTransport', {
                              dtlsParameters: dtlsParameters
                            }).then(successCall)["catch"](failureCall);

                          case 3:
                          case "end":
                            return _context14.stop();
                        }
                      }
                    }, _callee14);
                  }));

                  return function (_x17, _x18, _x19) {
                    return _ref15.apply(this, arguments);
                  };
                }());
                self.consumerTransport.on('connectionstatechange', /*#__PURE__*/function () {
                  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(state) {
                    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            _context15.t0 = state;
                            _context15.next = _context15.t0 === 'connecting' ? 3 : _context15.t0 === 'connected' ? 4 : _context15.t0 === 'failed' ? 6 : 9;
                            break;

                          case 3:
                            return _context15.abrupt("break", 10);

                          case 4:
                            console.log('consumerTransport connected');
                            return _context15.abrupt("break", 10);

                          case 6:
                            console.log('consumerTransport connect fail and close');
                            self.consumerTransport.close();
                            return _context15.abrupt("break", 10);

                          case 9:
                            return _context15.abrupt("break", 10);

                          case 10:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }));

                  return function (_x20) {
                    return _ref16.apply(this, arguments);
                  };
                }());

              case 22:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUFBLG9DQUV0QyxZQUZzQyx5QkFLdEMsV0FMc0MseUJBUXRDLFFBUnNDOzRCQUFBOzswQkFBQTs0QkFBQTs7MEJBQUE7NEJBTXZDNUssT0FBTyxDQUFDZ0QsR0FBUixDQUFZLDZCQUFaOzRCQU51Qzs7MEJBQUE7NEJBU3ZDaEQsT0FBTyxDQUFDZ0QsR0FBUixDQUFZLDBDQUFaOzRCQUNBSyxJQUFJLENBQUN6QyxpQkFBTCxDQUF1QmlLLEtBQXZCOzRCQVZ1Qzs7MEJBQUE7NEJBQUE7OzBCQUFBOzBCQUFBOzRCQUFBO3dCQUFBO3NCQUFBO29CQUFBO2tCQUFBLENBQW5EOztrQkFBQTtvQkFBQTtrQkFBQTtnQkFBQTs7Y0F2RlI7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBOzs7Ozs7Ozs7Ozs7O0FBNEdKMUcsR0FBRyxDQUFDaUMsUUFBSixDQUFhMkUsUUFBYixDQUFzQixXQUF0QixFQUFtQ2xMLGdCQUFuQztBQUVBWCxNQUFNLENBQUNDLE9BQVAsR0FBaUJVLGdCQUFqQjs7Ozs7O1VDenJCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0d29ya2VkLWFmcmFtZS8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vbmV0d29ya2VkLWFmcmFtZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXR3b3JrZWQtYWZyYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldHdvcmtlZC1hZnJhbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9uZXR3b3JrZWQtYWZyYW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9uZXR3b3JrZWQtYWZyYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzaW11bGNhc3RNb2RlOiB0cnVlLFxuICAgIHNpbXVsY2FzdENvbmZpZzoge1xuICAgICAgICBlbmNvZGluZ3M6XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgeyBtYXhCaXRyYXRlOiAxMDAwMDAgfSwgIC8vIGxvd1xuICAgICAgICAgICAgICAgIHsgbWF4Qml0cmF0ZTogMzAwMDAwIH0sICAvLyBtZWRpdW1cbiAgICAgICAgICAgICAgICB7IG1heEJpdHJhdGU6IDYwMDAwMCB9ICAgLy8gaGlnaFxuICAgICAgICAgICAgXSxcbiAgICAgICAgLy8gY29kZWNPcHRpb25zOlxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICB2aWRlb0dvb2dsZVN0YXJ0Qml0cmF0ZTogMTAwMFxuICAgICAgICAvLyB9XG4gICAgfSxcbiAgICBpY2VTZXJ2ZXJzOiBbXG4gICAgICAgIHsgXCJ1cmxzXCI6IFwic3R1bjpzdHVuMS5sLmdvb2dsZS5jb206MTkzMDJcIiB9LFxuICAgICAgICB7IFwidXJsc1wiOiBcInN0dW46c3R1bjIubC5nb29nbGUuY29tOjE5MzAyXCIgfSxcbiAgICBdLFxuICAgIHByZWZlcnJlZExheWVyczoge1xuICAgICAgICAvLyBsb3dlc3RcbiAgICAgICAgc3BhdGlhbExheWVyOiAwXG4gICAgfVxufSIsIi8qIGdsb2JhbCBOQUYsIGlvICovXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpXG5jbGFzcyBNZWRpYXNvdXBBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKGlvID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3NvY2tldC5pby1jbGllbnQgbWlzc2luZycpXG4gICAgICAgIGlmIChtZWRpYXNvdXBDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdtZWRpYXNvdXAtY2xpZW50IG1pc3NpbmcnKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcHAgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgdGhpcy5yb29tID0gXCJkZWZhdWx0XCI7XG4gICAgICAgIHRoaXMub2NjdXBhbnRMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIHRoaXMubXlSb29tSm9pblRpbWUgPSBudWxsO1xuICAgICAgICB0aGlzLm15SWQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMub2NjdXBhbnRzID0ge307IC8vIGlkIC0+IGpvaW5UaW1lc3RhbXBcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRDbGllbnRzID0gW107XG5cbiAgICAgICAgdGhpcy5kZXZpY2UgPSBudWxsOyAvLyBsb2NhbCBEZXZpY2UgKHdpbGwgY29ubmVjdCB0byBzZXJ2ZXItc2lkZSByb3V0ZXIgdGhyb3VnaCB0cmFuc3BvcnQpXG5cbiAgICAgICAgdGhpcy5wcm9kdWNlclRyYW5zcG9ydCA9IG51bGw7ICAgLy8gcHJvZHVjZXJUcmFuc3BvcnQgXG4gICAgICAgIHRoaXMuY29uc3VtZXJUcmFuc3BvcnQgPSBudWxsOyAgIC8vIGNvbnN1bWVyVHJhbnNwb3J0XG5cbiAgICAgICAgdGhpcy52aWRlb1Byb2R1Y2VyID0ge307ICAgLy8gcHJvZHVjZXJJZC0+cHJvZHVjZXIgaW5zdGFuY2VcbiAgICAgICAgdGhpcy52aWRlb0NvbnN1bWVycyA9IHt9OyAgLy8gY29uc3VtZXJJZC0+Y29uc3VtZXIgaW5zdGFuY2VcblxuICAgICAgICB0aGlzLmF1ZGlvUHJvZHVjZXIgPSB7fTsgICAvLyBwcm9kdWNlcklkLT5wcm9kdWNlciBpbnN0YW5jZVxuICAgICAgICB0aGlzLmF1ZGlvQ29uc3VtZXJzID0ge307ICAvLyBjb25zdW1lcklkLT5jb25zdW1lciBpbnN0YW5jZVxuXG4gICAgICAgIHRoaXMuc2NyZWVuUHJvZHVjZXIgPSB7fTtcbiAgICAgICAgdGhpcy5zY3JlZW5Db25zdW1lcnMgPSB7fTtcblxuICAgICAgICB0aGlzLmljZVNlcnZlcnMgPSBjb25maWcuaWNlU2VydmVycztcbiAgICAgICAgdGhpcy5zaW11bGNhc3RNb2RlID0gY29uZmlnLnNpbXVsY2FzdE1vZGU7XG4gICAgICAgIHRoaXMuc2ltdWxjYXN0Q29uZmlnID0gY29uZmlnLnNpbXVsY2FzdENvbmZpZztcblxuICAgICAgICAvLyBzdG9yZSB2aWRlby9hdWRpbyBzdHJlYW1zIG9mIGNsaWVudHNcbiAgICAgICAgdGhpcy5hdWRpb1N0cmVhbXMgPSB7fTsgIC8vIGNsaWVudElkLT5hdWRpb1N0cmVhbVxuICAgICAgICB0aGlzLnZpZGVvU3RyZWFtcyA9IHt9OyAgLy8gY2xpZW50SWQtPnZpZGVvU3RyZWFtXG4gICAgICAgIHRoaXMuc2NyZWVuU3RyZWFtcyA9IHt9OyAvLyBjbGllbnRJZC0+c2NyZWVuIHNoYXJlIHN0cmVhbXNcbiAgICAgICAgdGhpcy5wZW5kaW5nQXVkaW9SZXF1ZXN0ID0ge307XG4gICAgICAgIHRoaXMucGVuZGluZ1ZpZGVvUmVxdWVzdCA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdTY3JlZW5SZXF1ZXN0ID0ge307XG5cbiAgICAgICAgdGhpcy5oZWFydGJlYXRJbnRlcnZhbCA9IDIwIC8vIGluIHNlY29uZHNcbiAgICAgICAgdGhpcy5oZWFyYmVhdFRpbWVyID0gbnVsbFxuXG4gICAgICAgIHRoaXMuc2VydmVyVGltZVJlcXVlc3RzID0gMDtcbiAgICAgICAgdGhpcy50aW1lT2Zmc2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmF2Z1RpbWVPZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIHNldFNlcnZlclVybCh3c1VybCkge1xuICAgICAgICB0aGlzLndzVXJsID0gd3NVcmw7XG4gICAgfVxuXG4gICAgc2V0QXBwKGFwcE5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHBOYW1lO1xuICAgIH1cblxuICAgIHNldFJvb20ocm9vbU5hbWUpIHtcbiAgICAgICAgdGhpcy5yb29tID0gcm9vbU5hbWU7XG4gICAgfVxuXG4gICAgc2V0V2ViUnRjT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmRhdGFjaGFubmVsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gbWVkaWFzb3VwLWFkYXB0ZXIgd2lsbCB1c2Ugd3MgdG8gc3luYyBjb21wb25lbnRzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYXVkaW8gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZEF1ZGlvID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy52aWRlbyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZW5kVmlkZW8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U2ltdWxjYXN0TW9kZShpc1NpbXVsY2FzdCkge1xuICAgICAgICB0aGlzLnNpbXVsY2FzdE1vZGUgPSBpc1NpbXVsY2FzdFxuICAgIH1cblxuICAgIHNldFNlcnZlckNvbm5lY3RMaXN0ZW5lcnMoc3VjY2Vzc0xpc3RlbmVyLCBmYWlsdXJlTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0U3VjY2VzcyA9IHN1Y2Nlc3NMaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5jb25uZWN0RmFpbHVyZSA9IGZhaWx1cmVMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBzZXRSb29tT2NjdXBhbnRMaXN0ZW5lcihvY2N1cGFudExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMub2NjdXBhbnRMaXN0ZW5lciA9IG9jY3VwYW50TGlzdGVuZXI7XG4gICAgfVxuXG4gICAgc2V0RGF0YUNoYW5uZWxMaXN0ZW5lcnMob3Blbkxpc3RlbmVyLCBjbG9zZWRMaXN0ZW5lciwgbWVzc2FnZUxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMub3Blbkxpc3RlbmVyID0gb3Blbkxpc3RlbmVyO1xuICAgICAgICB0aGlzLmNsb3NlZExpc3RlbmVyID0gY2xvc2VkTGlzdGVuZXI7XG4gICAgICAgIHRoaXMubWVzc2FnZUxpc3RlbmVyID0gbWVzc2FnZUxpc3RlbmVyO1xuICAgIH1cblxuICAgIHNldEhlYXJ0YmVhdFRpbWVyKF9oZWFydGJlYXRJbnRlcnZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgcmVzZXQgaGVhcnRiZWF0SW50ZXJ2YWwgZnJvbSAke3RoaXMuaGVhcnRiZWF0SW50ZXJ2YWx9cyB0byAke19oZWFydGJlYXRJbnRlcnZhbH1zYCk7XG4gICAgICAgIHRoaXMuaGVhcnRiZWF0SW50ZXJ2YWwgPSBfaGVhcnRiZWF0SW50ZXJ2YWxcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhlYXJiZWF0VGltZXIpXG4gICAgICAgIHRoaXMuaGVhcmJlYXRUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2tlZXAtYWxpdmUnKVxuICAgICAgICB9LCBfaGVhcnRiZWF0SW50ZXJ2YWwgKiAxMDAwKVxuICAgIH1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudXBkYXRlVGltZU9mZnNldCgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLndzVXJsIHx8IHNlbGYud3NVcmwgPT09IFwiL1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi53c1VybCA9IFwid3NzOi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi53c1VybCA9IFwid3M6Ly9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ja2V0ID0gc2VsZi5zb2NrZXQgPSBpbyhzZWxmLndzVXJsKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuc29ja2V0LnJlcXVlc3QgPSAodHlwZSwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNvY2tldC5lbWl0KHR5cGUsIGRhdGEsIHJlc29sdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNvY2tldC5vbihcImNvbm5lY3RcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOQUYubG9nLndyaXRlKFwic3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byB3ZWJzb2NrZXRcIiwgc29ja2V0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5teUlkID0gc29ja2V0LmlkO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmpvaW5Sb29tKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJjb25uZWN0U3VjY2Vzc1wiLCBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGpvaW5lZFRpbWUgfSA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5teVJvb21Kb2luVGltZSA9IGpvaW5lZFRpbWU7XG4gICAgICAgICAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJTdWNjZXNzZnVsbHkgam9pbmVkIHJvb21cIiwgc2VsZi5yb29tLCBcImF0IHNlcnZlciB0aW1lXCIsIGpvaW5lZFRpbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdFN1Y2Nlc3Moc2VsZi5teUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldEhlYXJ0YmVhdFRpbWVyKHNlbGYuaGVhcnRiZWF0SW50ZXJ2YWwpXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZWxmLmluaXRpYWxBbmRMb2FkRGV2aWNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNlbGYuaW5pdGlhbFByb2R1Y2VyQ29uc3VtZXJUcmFuc3BvcnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2VsZi5nYXRoZXJFeGlzdGluZ1Byb2R1Y2VycygpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oc2VsZi5kZXZpY2UsIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQsIHNlbGYuY29uc3VtZXJUcmFuc3BvcnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgbG9jYWxTdHJlYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoc2VsZi5zZW5kQXVkaW8gfHwgc2VsZi5zZW5kVmlkZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbG9jYWxTdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2aWRlbzogc2VsZi5zZW5kVmlkZW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBhdWRpbzogc2VsZi5zZW5kQXVkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gbWF5YmUgcGVybWlzc2lvbiBkZW5pZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSBhdWRpbyBzdHJlYW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoc2VsZi5zZW5kQXVkaW8pIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChsb2NhbFN0cmVhbSkgc2VsZi5zdG9yZUF1ZGlvU3RyZWFtKHNlbGYubXlJZCwgbG9jYWxTdHJlYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKCFzZWxmLnByb2R1Y2VyVHJhbnNwb3J0KSByZXR1cm4gY29uc29sZS5lcnJvcigncHJvZHVjZXJUcmFuc3BvcnQgbm90IGNyZWF0ZWQgeWV0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoIXNlbGYuZGV2aWNlLmNhblByb2R1Y2UoJ2F1ZGlvJykpIHJldHVybiBjb25zb2xlLmVycm9yKCdkZXZpY2UgZG9lcyBub3Qgc3VwcG9ydCBhdWRpbycpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB0cmFjayA9IGxvY2FsU3RyZWFtLmdldEF1ZGlvVHJhY2tzKClbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgcGFyYW1zID0geyB0cmFjayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2R1Y2VyID0gYXdhaXQgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5wcm9kdWNlKHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2VsZi5hdWRpb1Byb2R1Y2VyW3Byb2R1Y2VyLmlkXSA9IHByb2R1Y2VyIC8vIHByb2R1Y2VyLmtpbmQgPT09ICdhdWRpbydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZhaWwgdG8gcHJvZHVjZSBhdWRpbyBzdHJlYW0nLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC8vIHN0b3JlIHZpZGVvIHN0cmVhbXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChzZWxmLnNlbmRWaWRlbykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGxvY2FsU3RyZWFtKSBzZWxmLnN0b3JlVmlkZW9TdHJlYW0oc2VsZi5teUlkLCBsb2NhbFN0cmVhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoIXNlbGYucHJvZHVjZXJUcmFuc3BvcnQpIHJldHVybiBjb25zb2xlLmVycm9yKCdwcm9kdWNlclRyYW5zcG9ydCBub3QgY3JlYXRlZCB5ZXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmICghc2VsZi5kZXZpY2UuY2FuUHJvZHVjZSgndmlkZW8nKSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ2RldmljZSBkb2VzIG5vdCBzdXBwb3J0IHZpZGVvJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHRyYWNrID0gbG9jYWxTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBwYXJhbXMgPSBzZWxmLnNpbXVsY2FzdE1vZGUgPyB7IHRyYWNrLCAuLi5zZWxmLnNpbXVsY2FzdENvbmZpZyB9IDogeyB0cmFjayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByb2R1Y2VyID0gYXdhaXQgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5wcm9kdWNlKHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2VsZi52aWRlb1Byb2R1Y2VyW3Byb2R1Y2VyLmlkXSA9IHByb2R1Y2VyIC8vIHByb2R1Y2VyLmtpbmQgPT09ICd2aWRlbydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdmYWlsIHRvIHByb2R1Y2UgdmlkZW8gc3RyZWFtJywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJlcnJvclwiLCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU29ja2V0IGNvbm5lY3Rpb24gZmFpbHVyZVwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbm5lY3RGYWlsdXJlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJvY2N1cGFudHNDaGFuZ2VkXCIsIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG9jY3VwYW50cyB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZSgnb2NjdXBhbnRzIGNoYW5nZWQnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNlaXZlZE9jY3VwYW50cyhvY2N1cGFudHMpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgcmVhc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xlYW4gdXAgaW5zdGFuY2VzXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGV2aWNlID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0ID0gc2VsZi5jb25zdW1lclRyYW5zcG9ydCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVBdWRpb1N0cmVhbShzZWxmLm15SWQpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlVmlkZW9TdHJlYW0oc2VsZi5teUlkKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZVNjcmVlblN0cmVhbShzZWxmLm15SWQpXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hbnVhbGx5IHJlY29ubmVjdFxuICAgICAgICAgICAgICAgICAgICBzb2NrZXQuY29ubmVjdCgpXG4gICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKCdyZXN0YXJ0SWNlJywgYXN5bmMgKHsgaWNlUGFyYW1ldGVycyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0LnJlc3RhcnRJY2UoeyBpY2VQYXJhbWV0ZXJzIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN0YXJ0SWNlIGVycm9yJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKCduZXdQcm9kdWNlcicsIGFzeW5jICh7IHByb2R1Y2VySWQsIHNvY2tldElkIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zdWJzY3JpYmVTdHJlYW0ocHJvZHVjZXJJZCwgc29ja2V0SWQpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVEYXRhKHBhY2tldCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcm9tID0gcGFja2V0LmZyb207XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBwYWNrZXQudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHBhY2tldC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1lc3NhZ2VMaXN0ZW5lcihmcm9tLCB0eXBlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJzZW5kXCIsIHJlY2VpdmVEYXRhKTtcbiAgICAgICAgICAgICAgICBzb2NrZXQub24oXCJicm9hZGNhc3RcIiwgcmVjZWl2ZURhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBqb2luUm9vbSgpIHtcbiAgICAgICAgTkFGLmxvZy53cml0ZShcIkpvaW5pbmcgcm9vbVwiLCB0aGlzLnJvb20pO1xuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KFwiam9pblJvb21cIiwgeyByb29tOiB0aGlzLnJvb20gfSk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZWRPY2N1cGFudHMob2NjdXBhbnRzKSB7XG4gICAgICAgIGRlbGV0ZSBvY2N1cGFudHNbdGhpcy5teUlkXTtcbiAgICAgICAgdGhpcy5vY2N1cGFudHMgPSBvY2N1cGFudHM7XG4gICAgICAgIHRoaXMub2NjdXBhbnRMaXN0ZW5lcihvY2N1cGFudHMpO1xuICAgIH1cblxuICAgIHNob3VsZFN0YXJ0Q29ubmVjdGlvblRvKGNsaWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydFN0cmVhbUNvbm5lY3Rpb24ocmVtb3RlSWQpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRDbGllbnRzLnB1c2gocmVtb3RlSWQpO1xuICAgICAgICB0aGlzLm9wZW5MaXN0ZW5lcihyZW1vdGVJZCk7XG4gICAgfVxuXG4gICAgY2xvc2VTdHJlYW1Db25uZWN0aW9uKGNsaWVudElkKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkQ2xpZW50cyA9IHRoaXMuY29ubmVjdGVkQ2xpZW50cy5maWx0ZXIoYyA9PiBjICE9IGNsaWVudElkKTtcbiAgICAgICAgdGhpcy5jbG9zZWRMaXN0ZW5lcihjbGllbnRJZCk7XG4gICAgfVxuXG4gICAgZ2V0Q29ubmVjdFN0YXR1cyhjbGllbnRJZCkge1xuICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSB0aGlzLmNvbm5lY3RlZENsaWVudHMuaW5kZXhPZihjbGllbnRJZCkgIT0gLTE7XG5cbiAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIE5BRi5hZGFwdGVycy5JU19DT05ORUNURUQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTkFGLmFkYXB0ZXJzLk5PVF9DT05ORUNURUQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kRGF0YSh0bywgdHlwZSwgZGF0YSkge1xuICAgICAgICB0aGlzLnNlbmREYXRhR3VhcmFudGVlZCh0bywgdHlwZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgc2VuZERhdGFHdWFyYW50ZWVkKHRvLCB0eXBlLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IHBhY2tldCA9IHtcbiAgICAgICAgICAgIGZyb206IHRoaXMubXlJZCxcbiAgICAgICAgICAgIHRvLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBzZW5kaW5nOiB0cnVlLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnNvY2tldCkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcInNlbmRcIiwgcGFja2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5BRi5sb2cud2FybignU29ja2V0SU8gc29ja2V0IG5vdCBjcmVhdGVkIHlldCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0RGF0YSh0eXBlLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0RGF0YUd1YXJhbnRlZWQodHlwZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0RGF0YUd1YXJhbnRlZWQodHlwZSwgZGF0YSkge1xuICAgICAgICBjb25zdCBwYWNrZXQgPSB7XG4gICAgICAgICAgICBmcm9tOiB0aGlzLm15SWQsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGJyb2FkY2FzdGluZzogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnNvY2tldCkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcImJyb2FkY2FzdFwiLCBwYWNrZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTkFGLmxvZy53YXJuKCdTb2NrZXRJTyBzb2NrZXQgbm90IGNyZWF0ZWQgeWV0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBhZGRMb2NhbE1lZGlhU3RyZWFtKHN0cmVhbSwgc3RyZWFtTmFtZSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAoIXNlbGYucHJvZHVjZXJUcmFuc3BvcnQpIHJldHVybiBjb25zb2xlLmVycm9yKCdwcm9kdWNlclRyYW5zcG9ydCBub3QgY3JlYXRlZCB5ZXQnKVxuICAgICAgICBjb25zb2xlLmxvZyh7IHN0cmVhbU5hbWUgfSk7XG4gICAgICAgIHN3aXRjaCAoc3RyZWFtTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAndmlkZW8nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLmRldmljZS5jYW5Qcm9kdWNlKCd2aWRlbycpKSByZXR1cm4gY29uc29sZS5lcnJvcignZGV2aWNlIGRvZXMgbm90IHN1cHBvcnQgdmlkZW8nKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFjayA9IHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHNlbGYuc2ltdWxjYXN0TW9kZSA/IHsgdHJhY2ssIC4uLnNlbGYuc2ltdWxjYXN0Q29uZmlnIH0gOiB7IHRyYWNrIH1cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmFwcERhdGEgPSB7IHN0cmVhbU5hbWUgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWNlciA9IGF3YWl0IHNlbGYucHJvZHVjZXJUcmFuc3BvcnQucHJvZHVjZShwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudmlkZW9Qcm9kdWNlcltwcm9kdWNlci5pZF0gPSBwcm9kdWNlciAvLyBwcm9kdWNlci5raW5kID09PSAndmlkZW8nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXVkaW8nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLmRldmljZS5jYW5Qcm9kdWNlKCdhdWRpbycpKSByZXR1cm4gY29uc29sZS5lcnJvcignZGV2aWNlIGRvZXMgbm90IHN1cHBvcnQgYXVkaW8nKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFjayA9IHN0cmVhbS5nZXRBdWRpb1RyYWNrcygpWzBdXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdHJhY2sgfVxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuYXBwRGF0YSA9IHsgc3RyZWFtTmFtZSB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y2VyID0gYXdhaXQgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5wcm9kdWNlKHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hdWRpb1Byb2R1Y2VyW3Byb2R1Y2VyLmlkXSA9IHByb2R1Y2VyIC8vIHByb2R1Y2VyLmtpbmQgPT09ICdhdWRpbydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzY3JlZW5zaGFyZSc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuZGV2aWNlLmNhblByb2R1Y2UoJ3ZpZGVvJykpIHJldHVybiBjb25zb2xlLmVycm9yKCdkZXZpY2UgZG9lcyBub3Qgc3VwcG9ydCB2aWRlbycpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNrID0gc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0geyB0cmFjayB9XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBEYXRhID0geyBzdHJlYW1OYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjZXIgPSBhd2FpdCBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0LnByb2R1Y2UocGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNjcmVlblByb2R1Y2VyW3Byb2R1Y2VyLmlkXSA9IHByb2R1Y2VyIC8vIHByb2R1Y2VyLmtpbmQgPT09ICd2aWRlbydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1bmtub3duIHR5cGU6ICR7dHlwZX1gKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgcmVtb3ZlQXVkaW9TdHJlYW0oY2xpZW50SWQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuYXVkaW9TdHJlYW1zW2NsaWVudElkXVxuICAgIH1cblxuICAgIHJlbW92ZVZpZGVvU3RyZWFtKGNsaWVudElkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnZpZGVvU3RyZWFtc1tjbGllbnRJZF1cbiAgICB9XG5cbiAgICByZW1vdmVTY3JlZW5TdHJlYW0oY2xpZW50SWQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2NyZWVuU3RyZWFtc1tjbGllbnRJZF1cbiAgICB9XG5cblxuICAgIHN0b3JlQXVkaW9TdHJlYW0oY2xpZW50SWQsIHN0cmVhbSkge1xuICAgICAgICB0aGlzLmF1ZGlvU3RyZWFtc1tjbGllbnRJZF0gPSBzdHJlYW07XG5cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0F1ZGlvUmVxdWVzdFtjbGllbnRJZF0pIHtcbiAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJSZWNlaXZlZCBwZW5kaW5nIGF1ZGlvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ0F1ZGlvUmVxdWVzdFtjbGllbnRJZF0oc3RyZWFtKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdBdWRpb1JlcXVlc3RbY2xpZW50SWRdKHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9yZVZpZGVvU3RyZWFtKGNsaWVudElkLCBzdHJlYW0pIHtcbiAgICAgICAgdGhpcy52aWRlb1N0cmVhbXNbY2xpZW50SWRdID0gc3RyZWFtO1xuXG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdWaWRlb1JlcXVlc3RbY2xpZW50SWRdKSB7XG4gICAgICAgICAgICBOQUYubG9nLndyaXRlKFwiUmVjZWl2ZWQgcGVuZGluZyB2aWRlbyBmb3IgXCIgKyBjbGllbnRJZCk7XG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdWaWRlb1JlcXVlc3RbY2xpZW50SWRdKHN0cmVhbSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nVmlkZW9SZXF1ZXN0W2NsaWVudElkXShzdHJlYW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcmVTY3JlZW5TdHJlYW0oY2xpZW50SWQsIHN0cmVhbSkge1xuICAgICAgICB0aGlzLnNjcmVlblN0cmVhbXNbY2xpZW50SWRdID0gc3RyZWFtO1xuXG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdTY3JlZW5SZXF1ZXN0W2NsaWVudElkXSkge1xuICAgICAgICAgICAgTkFGLmxvZy53cml0ZShcIlJlY2VpdmVkIHBlbmRpbmcgc2NyZWVuIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ1NjcmVlblJlcXVlc3RbY2xpZW50SWRdKHN0cmVhbSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nU2NyZWVuUmVxdWVzdFtjbGllbnRJZF0oc3RyZWFtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1lZGlhU3RyZWFtKGNsaWVudElkLCB0eXBlID0gJ2F1ZGlvJykge1xuICAgICAgICBjb25zb2xlLmxvZyhgZ2V0TWVkaWFTdHJlYW0gJHt0eXBlfWApO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXVkaW9TdHJlYW1zW2NsaWVudElkXSkge1xuICAgICAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJBbHJlYWR5IGhhZCBhdWRpbyBmb3IgXCIgKyBjbGllbnRJZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmF1ZGlvU3RyZWFtc1tjbGllbnRJZF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBOQUYubG9nLndyaXRlKFwiV2FpdGluZyBvbiBhdWRpbyBmb3IgXCIgKyBjbGllbnRJZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBlbmRpbmdBdWRpb1JlcXVlc3RbY2xpZW50SWRdID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52aWRlb1N0cmVhbXNbY2xpZW50SWRdKSB7XG4gICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZShcIkFscmVhZHkgaGFkIHZpZGVvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMudmlkZW9TdHJlYW1zW2NsaWVudElkXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJXYWl0aW5nIG9uIHZpZGVvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGVuZGluZ1ZpZGVvUmVxdWVzdFtjbGllbnRJZF0gPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY3JlZW5zaGFyZScpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcmVlblN0cmVhbXNbY2xpZW50SWRdKSB7XG4gICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZShcIkFscmVhZHkgaGFkIHNjcmVlbiBmb3IgXCIgKyBjbGllbnRJZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNjcmVlblN0cmVhbXNbY2xpZW50SWRdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZShcIldhaXRpbmcgb24gc2NyZWVuIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGVuZGluZ1NjcmVlblJlcXVlc3RbY2xpZW50SWRdID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlU3RyZWFtKHR5cGUgPSAndmlkZW8nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWNlcnMgPSBPYmplY3QudmFsdWVzKHR5cGUgPT09ICd2aWRlbycgPyB0aGlzLnZpZGVvUHJvZHVjZXIgOiB0eXBlID09PSAnYXVkaW8nID8gdGhpcy5hdWRpb1Byb2R1Y2VyIDogdGhpcy5zY3JlZW5Qcm9kdWNlcilcbiAgICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBwcm9kdWNlcnNcbiAgICAgICAgICAgIGlmICghcHJvZHVjZXJzIHx8ICFsZW5ndGgpIHJldHVybiB7IGU6IG51bGwsIG1zZzogYG5vICR7dHlwZX0gcHJvZHVjZXJzIG5vd2AsIGxlbmd0aCB9XG4gICAgICAgICAgICBwcm9kdWNlcnMuZm9yRWFjaChwcm9kdWNlciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjZXIpO1xuICAgICAgICAgICAgICAgIHByb2R1Y2VyLnBhdXNlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4geyBlOiBudWxsLCBtc2c6ICdwYXVzZSBzdHJlYW0gc3VjY2VzcycsIGxlbmd0aCB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXVzZVN0cmVhbSBlcnJvcicsIGUpO1xuICAgICAgICAgICAgcmV0dXJuIHsgZSB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN1bWVTdHJlYW0odHlwZSA9ICd2aWRlbycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y2VycyA9IE9iamVjdC52YWx1ZXModHlwZSA9PT0gJ3ZpZGVvJyA/IHRoaXMudmlkZW9Qcm9kdWNlciA6IHR5cGUgPT09ICdhdWRpbycgPyB0aGlzLmF1ZGlvUHJvZHVjZXIgOiB0aGlzLnNjcmVlblByb2R1Y2VyKVxuICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHByb2R1Y2Vyc1xuICAgICAgICAgICAgaWYgKCFwcm9kdWNlcnMgfHwgIWxlbmd0aCkgcmV0dXJuIHsgZTogbnVsbCwgbXNnOiBgbm8gJHt0eXBlfSBwcm9kdWNlcnMgbm93YCwgbGVuZ3RoIH1cbiAgICAgICAgICAgIHByb2R1Y2Vycy5mb3JFYWNoKHByb2R1Y2VyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWNlcik7XG4gICAgICAgICAgICAgICAgcHJvZHVjZXIucmVzdW1lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4geyBlOiBudWxsLCBtc2c6ICdyZXN1bWUgc3RyZWFtIHN1Y2Nlc3MnLCBsZW5ndGggfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdW1lU3RyZWFtIGVycm9yJywgZSk7XG4gICAgICAgICAgICByZXR1cm4geyBlIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVRpbWVPZmZzZXQoKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudFNlbnRUaW1lID0gRGF0ZS5ub3coKSArIHRoaXMuYXZnVGltZU9mZnNldDtcblxuICAgICAgICByZXR1cm4gZmV0Y2goZG9jdW1lbnQubG9jYXRpb24uaHJlZiwgeyBtZXRob2Q6IFwiSEVBRFwiLCBjYWNoZTogXCJuby1jYWNoZVwiIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZWNpc2lvbiA9IDEwMDA7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmVyUmVjZWl2ZWRUaW1lID0gbmV3IERhdGUocmVzLmhlYWRlcnMuZ2V0KFwiRGF0ZVwiKSkuZ2V0VGltZSgpICsgKHByZWNpc2lvbiAvIDIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudFJlY2VpdmVkVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmVyVGltZSA9IHNlcnZlclJlY2VpdmVkVGltZSArICgoY2xpZW50UmVjZWl2ZWRUaW1lIC0gY2xpZW50U2VudFRpbWUpIC8gMik7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZU9mZnNldCA9IHNlcnZlclRpbWUgLSBjbGllbnRSZWNlaXZlZFRpbWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZlclRpbWVSZXF1ZXN0cysrO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VydmVyVGltZVJlcXVlc3RzIDw9IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZU9mZnNldHMucHVzaCh0aW1lT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVPZmZzZXRzW3RoaXMuc2VydmVyVGltZVJlcXVlc3RzICUgMTBdID0gdGltZU9mZnNldDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmF2Z1RpbWVPZmZzZXQgPSB0aGlzLnRpbWVPZmZzZXRzLnJlZHVjZSgoYWNjLCBvZmZzZXQpID0+IGFjYyArPSBvZmZzZXQsIDApIC8gdGhpcy50aW1lT2Zmc2V0cy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJUaW1lUmVxdWVzdHMgPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlVGltZU9mZnNldCgpLCA1ICogNjAgKiAxMDAwKTsgLy8gU3luYyBjbG9jayBldmVyeSA1IG1pbnV0ZXMuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lT2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0U2VydmVyVGltZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdGhpcy5hdmdUaW1lT2Zmc2V0O1xuICAgIH1cblxuXG5cbiAgICAvKiogTUVESUFTT1VQIFJFTEFURUQgRlVOQ1RJT05TICoqL1xuICAgIGFzeW5jIGdhdGhlckV4aXN0aW5nUHJvZHVjZXJzKCkge1xuXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjZXJMaXN0IH0gPSBhd2FpdCB0aGlzLnNvY2tldC5yZXF1ZXN0KCdnYXRoZXJQcm9kdWNlcnMnKVxuICAgICAgICBpZiAoIXByb2R1Y2VyTGlzdC5sZW5ndGgpIHJldHVybiBjb25zb2xlLmxvZygnbm8gcHJvZHVjZXJzIGN1cnJlbnRseScsIHByb2R1Y2VyTGlzdClcblxuICAgICAgICBwcm9kdWNlckxpc3QuZm9yRWFjaChhc3luYyAoeyBwcm9kdWNlcklkLCBzb2NrZXRJZCB9KSA9PiB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN1YnNjcmliZVN0cmVhbShwcm9kdWNlcklkLCBzb2NrZXRJZClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBzdWJzY3JpYmVTdHJlYW0ocHJvZHVjZXJJZCwgc29ja2V0SWQpIHtcblxuICAgICAgICBpZiAoIXRoaXMuY29uc3VtZXJUcmFuc3BvcnQpIHJldHVybiBjb25zb2xlLmxvZyhgY29uc3VtZXJUcmFuc3BvcnQgZG9lc24ndCBleGlzdGApXG5cbiAgICAgICAgY29uc3QgeyBraW5kLCBuZXdTdHJlYW06IGNvbnN1bWVyc3RyZWFtLCBzdHJlYW1OYW1lIH0gPSBhd2FpdCB0aGlzLmdldENvbnN1bWVTdHJlYW0odGhpcy5jb25zdW1lclRyYW5zcG9ydCwgcHJvZHVjZXJJZClcblxuICAgICAgICBjb25zb2xlLmxvZygnc3Vic2NyaWJlIHN1Y2Vzc2Z1bGx5JywgeyBraW5kLCBzdHJlYW1OYW1lLCBjb25zdW1lcnN0cmVhbSB9KTtcblxuICAgICAgICBzd2l0Y2ggKHN0cmVhbU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ZpZGVvJzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlVmlkZW9TdHJlYW0oc29ja2V0SWQsIGNvbnN1bWVyc3RyZWFtKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXVkaW8nOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVBdWRpb1N0cmVhbShzb2NrZXRJZCwgY29uc3VtZXJzdHJlYW0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzY3JlZW5zaGFyZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZVNjcmVlblN0cmVhbShzb2NrZXRJZCwgY29uc3VtZXJzdHJlYW0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmtub3duIGtpbmQnLCBraW5kKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldENvbnN1bWVTdHJlYW0oY29uc3VtZXJUcmFuc3BvcnQsIF9wcm9kdWNlcklkKSB7XG4gICAgICAgIGNvbnN0IHsgcnRwQ2FwYWJpbGl0aWVzIH0gPSB0aGlzLmRldmljZVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnNvY2tldC5yZXF1ZXN0KCdjb25zdW1lU3RyZWFtJywgeyBydHBDYXBhYmlsaXRpZXMsIF9wcm9kdWNlcklkIH0pXG4gICAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gbnVsbFxuXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjZXJJZCwgaWQsIGtpbmQsIHJ0cFBhcmFtZXRlcnMsIHN0cmVhbU5hbWUgfSA9IHJlc3VsdFxuICAgICAgICBjb25zdCBjb25zdW1lciA9IGF3YWl0IGNvbnN1bWVyVHJhbnNwb3J0LmNvbnN1bWUoe1xuICAgICAgICAgICAgcHJvZHVjZXJJZCxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIHJ0cFBhcmFtZXRlcnMsXG4gICAgICAgICAgICBjb2RlY09wdGlvbnM6IHt9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbmV3U3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKClcbiAgICAgICAgbmV3U3RyZWFtLmFkZFRyYWNrKGNvbnN1bWVyLnRyYWNrKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV3U3RyZWFtLFxuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIHN0cmVhbU5hbWVcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgaW5pdGlhbEFuZExvYWREZXZpY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5zb2NrZXQpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlKSByZXR1cm4gY29uc29sZS5sb2coJ2RldmljZSBsb2FkZWQgYWxyZWFkeScpXG4gICAgICAgIGNvbnN0IHJvdXRlclJ0cENhcGFiaWxpdGllcyA9IGF3YWl0IHRoaXMuc29ja2V0LnJlcXVlc3QoJ2dldFJvdXRlclJ0cENhcGFiaWxpdGllcycpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmRldmljZSA9IG5ldyBtZWRpYXNvdXBDbGllbnQuRGV2aWNlKClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmRldmljZS5sb2FkKHsgcm91dGVyUnRwQ2FwYWJpbGl0aWVzIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCdNZWRpYXNvdXBDbGllbnQgRGV2aWNlIGxvYWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG5cbiAgICBhc3luYyBpbml0aWFsUHJvZHVjZXJDb25zdW1lclRyYW5zcG9ydCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYgKCFzZWxmLmRldmljZSkgcmV0dXJuIGNvbnNvbGUud2FybignRGV2aWNlIG5vdCBsb2FkZWQnKVxuICAgICAgICBpZiAoc2VsZi5wcm9kdWNlclRyYW5zcG9ydCAmJiBzZWxmLmNvbnN1bWVyVHJhbnNwb3J0KSByZXR1cm4gY29uc29sZS5sb2coJ3RyYW5zcG9ydCBhcmVhZHkgZXhpc3RzJylcblxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgc2VsZi5zb2NrZXQucmVxdWVzdCgnY3JlYXRlUHJvZHVjZXJUcmFuc3BvcnQnLCB7XG4gICAgICAgICAgICAgICAgZm9yY2VUY3A6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJ0cENhcGFiaWxpdGllczogc2VsZi5kZXZpY2UucnRwQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSByZXR1cm4gY29uc29sZS5sb2coJ2NyZWF0ZVByb2R1Y2VyVHJhbnNwb3J0IGVycm9yJylcbiAgICAgICAgICAgIC8vIHRyYW5zcG9ydElkID0gZGF0YS5wYXJhbXMuaWRcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogdHJhbnNwb3J0LmlkLFxuICAgICAgICAgICAgICAgICAgICBpY2VQYXJhbWV0ZXJzOiB0cmFuc3BvcnQuaWNlUGFyYW1ldGVycyxcbiAgICAgICAgICAgICAgICAgICAgaWNlQ2FuZGlkYXRlczogdHJhbnNwb3J0LmljZUNhbmRpZGF0ZXMsICAgXG4gICAgICAgICAgICAgICAgICAgIGR0bHNQYXJhbWV0ZXJzOiB0cmFuc3BvcnQuZHRsc1BhcmFtZXRlcnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQgPSBzZWxmLmRldmljZS5jcmVhdGVTZW5kVHJhbnNwb3J0KHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLnBhcmFtcyxcbiAgICAgICAgICAgICAgICBpY2VTZXJ2ZXJzOiBzZWxmLmljZVNlcnZlcnNcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQub24oJ2Nvbm5lY3QnLCBhc3luYyAoeyBkdGxzUGFyYW1ldGVycyB9LCBzdWNjZXNzQ2FsbCwgZmFpbHVyZUNhbGwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncHJvZHVjZXIgdHJhbnNwb3J0IGNvbm5lY3QnKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNvY2tldC5yZXF1ZXN0KCdjb25uZWN0UHJvZHVjZXJUcmFuc3BvcnQnLCB7IGR0bHNQYXJhbWV0ZXJzIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3NDYWxsKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZmFpbHVyZUNhbGwpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0Lm9uKCdwcm9kdWNlJywgYXN5bmMgKHsga2luZCwgcnRwUGFyYW1ldGVycywgYXBwRGF0YSB9LCBzdWNjZXNzQ2FsbCwgZmFpbHVyZUNhbGwpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncHJvZHVjZSBzdHJlYW0nLCBraW5kLCB7IGFwcERhdGEgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcHJvZHVjZXJJZDogaWQgfSA9IGF3YWl0IHNlbGYuc29ja2V0LnJlcXVlc3QoJ3Byb2R1Y2UnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBydHBQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwRGF0YVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbCh7IGlkIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBmYWlsdXJlQ2FsbChlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQub24oJ2Nvbm5lY3Rpb25zdGF0ZWNoYW5nZScsIChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29ubmVjdGluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb25uZWN0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2R1Y2VyVHJhbnNwb3J0IGNvbm5lY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZmFpbGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9kdWNlclRyYW5zcG9ydCBjb25uZWN0IGZhaWwgYW5kIGNsb3NlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZWxmLnNvY2tldC5yZXF1ZXN0KCdjcmVhdGVDb25zdW1lclRyYW5zcG9ydCcsIHtcbiAgICAgICAgICAgICAgICBmb3JjZVRjcDogZmFsc2VcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSByZXR1cm4gY29uc29sZS5sb2coJ2NyZWF0ZUNvbnN1bWVyVHJhbnNwb3J0IGZhaWx1cmUnLCBkYXRhLmVycm9yKVxuXG4gICAgICAgICAgICBzZWxmLmNvbnN1bWVyVHJhbnNwb3J0ID0gc2VsZi5kZXZpY2UuY3JlYXRlUmVjdlRyYW5zcG9ydCh7XG4gICAgICAgICAgICAgICAgLi4uZGF0YS5wYXJhbXMsXG4gICAgICAgICAgICAgICAgaWNlU2VydmVyczogc2VsZi5pY2VTZXJ2ZXJzXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzZWxmLmNvbnN1bWVyVHJhbnNwb3J0Lm9uKCdjb25uZWN0JywgYXN5bmMgKHsgZHRsc1BhcmFtZXRlcnMgfSwgc3VjY2Vzc0NhbGwsIGZhaWx1cmVDYWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbnN1bWVyIHRyYW5zcG9ydCBjb25uZWN0Jyk7XG4gICAgICAgICAgICAgICAgc2VsZi5zb2NrZXQucmVxdWVzdCgnY29ubmVjdENvbnN1bWVyVHJhbnNwb3J0JywgeyBkdGxzUGFyYW1ldGVycyB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihzdWNjZXNzQ2FsbClcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZhaWx1cmVDYWxsKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2VsZi5jb25zdW1lclRyYW5zcG9ydC5vbignY29ubmVjdGlvbnN0YXRlY2hhbmdlJywgYXN5bmMgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb25uZWN0aW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb25zdW1lciBjb25uZWN0aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29ubmVjdGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25zdW1lclRyYW5zcG9ydCBjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmYWlsZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbnN1bWVyVHJhbnNwb3J0IGNvbm5lY3QgZmFpbCBhbmQgY2xvc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29uc3VtZXJUcmFuc3BvcnQuY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuTkFGLmFkYXB0ZXJzLnJlZ2lzdGVyKFwibWVkaWFzb3VwXCIsIE1lZGlhc291cEFkYXB0ZXIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhc291cEFkYXB0ZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNpbXVsY2FzdE1vZGUiLCJzaW11bGNhc3RDb25maWciLCJlbmNvZGluZ3MiLCJtYXhCaXRyYXRlIiwiaWNlU2VydmVycyIsInByZWZlcnJlZExheWVycyIsInNwYXRpYWxMYXllciIsImNvbmZpZyIsInJlcXVpcmUiLCJNZWRpYXNvdXBBZGFwdGVyIiwiaW8iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwid2FybiIsIm1lZGlhc291cENsaWVudCIsImFwcCIsInJvb20iLCJvY2N1cGFudExpc3RlbmVyIiwibXlSb29tSm9pblRpbWUiLCJteUlkIiwib2NjdXBhbnRzIiwiY29ubmVjdGVkQ2xpZW50cyIsImRldmljZSIsInByb2R1Y2VyVHJhbnNwb3J0IiwiY29uc3VtZXJUcmFuc3BvcnQiLCJ2aWRlb1Byb2R1Y2VyIiwidmlkZW9Db25zdW1lcnMiLCJhdWRpb1Byb2R1Y2VyIiwiYXVkaW9Db25zdW1lcnMiLCJzY3JlZW5Qcm9kdWNlciIsInNjcmVlbkNvbnN1bWVycyIsImF1ZGlvU3RyZWFtcyIsInZpZGVvU3RyZWFtcyIsInNjcmVlblN0cmVhbXMiLCJwZW5kaW5nQXVkaW9SZXF1ZXN0IiwicGVuZGluZ1ZpZGVvUmVxdWVzdCIsInBlbmRpbmdTY3JlZW5SZXF1ZXN0IiwiaGVhcnRiZWF0SW50ZXJ2YWwiLCJoZWFyYmVhdFRpbWVyIiwic2VydmVyVGltZVJlcXVlc3RzIiwidGltZU9mZnNldHMiLCJhdmdUaW1lT2Zmc2V0Iiwid3NVcmwiLCJhcHBOYW1lIiwicm9vbU5hbWUiLCJvcHRpb25zIiwiZGF0YWNoYW5uZWwiLCJhdWRpbyIsInNlbmRBdWRpbyIsInZpZGVvIiwic2VuZFZpZGVvIiwiaXNTaW11bGNhc3QiLCJzdWNjZXNzTGlzdGVuZXIiLCJmYWlsdXJlTGlzdGVuZXIiLCJjb25uZWN0U3VjY2VzcyIsImNvbm5lY3RGYWlsdXJlIiwib3Blbkxpc3RlbmVyIiwiY2xvc2VkTGlzdGVuZXIiLCJtZXNzYWdlTGlzdGVuZXIiLCJfaGVhcnRiZWF0SW50ZXJ2YWwiLCJsb2ciLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzb2NrZXQiLCJlbWl0Iiwic2VsZiIsInVwZGF0ZVRpbWVPZmZzZXQiLCJ0aGVuIiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJyZXF1ZXN0IiwidHlwZSIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsIm9uIiwiTkFGIiwid3JpdGUiLCJpZCIsImpvaW5Sb29tIiwiam9pbmVkVGltZSIsInNldEhlYXJ0YmVhdFRpbWVyIiwic2V0VGltZW91dCIsImluaXRpYWxBbmRMb2FkRGV2aWNlIiwiaW5pdGlhbFByb2R1Y2VyQ29uc3VtZXJUcmFuc3BvcnQiLCJnYXRoZXJFeGlzdGluZ1Byb2R1Y2VycyIsImVycm9yIiwicmVjZWl2ZWRPY2N1cGFudHMiLCJyZWFzb24iLCJyZW1vdmVBdWRpb1N0cmVhbSIsInJlbW92ZVZpZGVvU3RyZWFtIiwicmVtb3ZlU2NyZWVuU3RyZWFtIiwiY29ubmVjdCIsImljZVBhcmFtZXRlcnMiLCJyZXN0YXJ0SWNlIiwicHJvZHVjZXJJZCIsInNvY2tldElkIiwic3Vic2NyaWJlU3RyZWFtIiwicmVjZWl2ZURhdGEiLCJwYWNrZXQiLCJmcm9tIiwiY2xpZW50IiwicmVtb3RlSWQiLCJwdXNoIiwiY2xpZW50SWQiLCJmaWx0ZXIiLCJjIiwiY29ubmVjdGVkIiwiaW5kZXhPZiIsImFkYXB0ZXJzIiwiSVNfQ09OTkVDVEVEIiwiTk9UX0NPTk5FQ1RFRCIsInRvIiwic2VuZERhdGFHdWFyYW50ZWVkIiwic2VuZGluZyIsImJyb2FkY2FzdERhdGFHdWFyYW50ZWVkIiwiYnJvYWRjYXN0aW5nIiwic3RyZWFtIiwic3RyZWFtTmFtZSIsImNhblByb2R1Y2UiLCJ0cmFjayIsImdldFZpZGVvVHJhY2tzIiwicGFyYW1zIiwiYXBwRGF0YSIsInByb2R1Y2UiLCJwcm9kdWNlciIsImdldEF1ZGlvVHJhY2tzIiwicHJvZHVjZXJzIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiZSIsIm1zZyIsImZvckVhY2giLCJwYXVzZSIsInJlc3VtZSIsImNsaWVudFNlbnRUaW1lIiwiRGF0ZSIsIm5vdyIsImZldGNoIiwiZG9jdW1lbnQiLCJocmVmIiwibWV0aG9kIiwiY2FjaGUiLCJyZXMiLCJwcmVjaXNpb24iLCJzZXJ2ZXJSZWNlaXZlZFRpbWUiLCJoZWFkZXJzIiwiZ2V0IiwiZ2V0VGltZSIsImNsaWVudFJlY2VpdmVkVGltZSIsInNlcnZlclRpbWUiLCJ0aW1lT2Zmc2V0IiwicmVkdWNlIiwiYWNjIiwib2Zmc2V0IiwicHJvZHVjZXJMaXN0IiwiZ2V0Q29uc3VtZVN0cmVhbSIsImtpbmQiLCJjb25zdW1lcnN0cmVhbSIsIm5ld1N0cmVhbSIsInN0b3JlVmlkZW9TdHJlYW0iLCJzdG9yZUF1ZGlvU3RyZWFtIiwic3RvcmVTY3JlZW5TdHJlYW0iLCJfcHJvZHVjZXJJZCIsInJ0cENhcGFiaWxpdGllcyIsInJlc3VsdCIsInJ0cFBhcmFtZXRlcnMiLCJjb25zdW1lIiwiY29kZWNPcHRpb25zIiwiY29uc3VtZXIiLCJNZWRpYVN0cmVhbSIsImFkZFRyYWNrIiwicm91dGVyUnRwQ2FwYWJpbGl0aWVzIiwiRGV2aWNlIiwibG9hZCIsImZvcmNlVGNwIiwiY3JlYXRlU2VuZFRyYW5zcG9ydCIsInN1Y2Nlc3NDYWxsIiwiZmFpbHVyZUNhbGwiLCJkdGxzUGFyYW1ldGVycyIsInN0YXRlIiwiY2xvc2UiLCJjcmVhdGVSZWN2VHJhbnNwb3J0IiwicmVnaXN0ZXIiXSwic291cmNlUm9vdCI6IiJ9