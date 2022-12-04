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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    key: "removeLocalMediaStream",
    value: function () {
      var _removeLocalMediaStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(streamName) {
        var videoProducer, audioProducer, screenProducer, producers, targetProducer, id, _yield$this$socket$re, closeRes;

        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (streamName) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return");

              case 2:
                _context7.prev = 2;
                videoProducer = this.videoProducer, audioProducer = this.audioProducer, screenProducer = this.screenProducer;
                producers = [].concat(_toConsumableArray(Object.values(videoProducer)), _toConsumableArray(Object.values(audioProducer)), _toConsumableArray(Object.values(screenProducer)));
                console.log({
                  producers: producers
                });
                targetProducer = producers.find(function (each) {
                  return each.appData.streamName === streamName;
                });
                console.log({
                  targetProducer: targetProducer
                });

                if (targetProducer) {
                  _context7.next = 10;
                  break;
                }

                return _context7.abrupt("return", console.log("producer of stream ".concat(streamName, " not found")));

              case 10:
                id = targetProducer.id;
                console.log({
                  id: id
                }); // No more media is transmitted. The producer's track is internally stopped by calling stop() on it
                // This method should be called when the server side producer has been closed (and vice-versa).
                // just like track.stop() in native WebRTC

                targetProducer.close(); // notify the server to close corresponding producer

                _context7.next = 15;
                return this.socket.request('closeProducer', {
                  id: id,
                  streamName: streamName
                });

              case 15:
                _yield$this$socket$re = _context7.sent;
                closeRes = _yield$this$socket$re.closeRes;
                console.log(closeRes);
                delete videoProducer[id];
                delete audioProducer[id];
                delete screenProducer[id];
                _context7.next = 26;
                break;

              case 23:
                _context7.prev = 23;
                _context7.t0 = _context7["catch"](2);
                console.log("removeLocalMediaStream(".concat(streamName, ") error:"), _context7.t0);

              case 26:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[2, 23]]);
      }));

      function removeLocalMediaStream(_x6) {
        return _removeLocalMediaStream.apply(this, arguments);
      }

      return removeLocalMediaStream;
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
    /**
     * for adapter compatibility
     */

  }, {
    key: "enableMicrophone",
    value: function enableMicrophone(enabled) {
      return enabled ? this.resumeStream('audio') : this.pauseStream('audio');
    }
  }, {
    key: "enableCamera",
    value: function enableCamera(enabled) {
      return enabled ? this.resumeStream('video') : this.pauseStream('video');
    }
  }, {
    key: "enableScreenSharing",
    value: function enableScreenSharing(enabled) {
      return enabled ? this.resumeStream('screenshare') : this.pauseStream('screenshare');
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
      var _gatherExistingProducers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _this3 = this;

        var _yield$this$socket$re2, producerList;

        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.socket.request('gatherProducers');

              case 2:
                _yield$this$socket$re2 = _context9.sent;
                producerList = _yield$this$socket$re2.producerList;

                if (producerList.length) {
                  _context9.next = 6;
                  break;
                }

                return _context9.abrupt("return", console.log('no producers currently', producerList));

              case 6:
                producerList.forEach( /*#__PURE__*/function () {
                  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(_ref8) {
                    var producerId, socketId;
                    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            producerId = _ref8.producerId, socketId = _ref8.socketId;
                            _context8.next = 3;
                            return _this3.subscribeStream(producerId, socketId);

                          case 3:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x7) {
                    return _ref9.apply(this, arguments);
                  };
                }());

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function gatherExistingProducers() {
        return _gatherExistingProducers.apply(this, arguments);
      }

      return gatherExistingProducers;
    }()
  }, {
    key: "subscribeStream",
    value: function () {
      var _subscribeStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(producerId, socketId) {
        var _yield$this$getConsum, kind, consumerstream, streamName;

        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (this.consumerTransport) {
                  _context10.next = 2;
                  break;
                }

                return _context10.abrupt("return", console.log("consumerTransport doesn't exist"));

              case 2:
                _context10.next = 4;
                return this.getConsumeStream(this.consumerTransport, producerId);

              case 4:
                _yield$this$getConsum = _context10.sent;
                kind = _yield$this$getConsum.kind;
                consumerstream = _yield$this$getConsum.newStream;
                streamName = _yield$this$getConsum.streamName;
                console.log('subscribe sucessfully', {
                  kind: kind,
                  streamName: streamName,
                  consumerstream: consumerstream
                });
                _context10.t0 = streamName;
                _context10.next = _context10.t0 === 'video' ? 12 : _context10.t0 === 'audio' ? 14 : _context10.t0 === 'screenshare' ? 16 : 18;
                break;

              case 12:
                this.storeVideoStream(socketId, consumerstream);
                return _context10.abrupt("break", 20);

              case 14:
                this.storeAudioStream(socketId, consumerstream);
                return _context10.abrupt("break", 20);

              case 16:
                this.storeScreenStream(socketId, consumerstream);
                return _context10.abrupt("break", 20);

              case 18:
                console.log('unknown kind', kind);
                return _context10.abrupt("break", 20);

              case 20:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function subscribeStream(_x8, _x9) {
        return _subscribeStream.apply(this, arguments);
      }

      return subscribeStream;
    }()
  }, {
    key: "getConsumeStream",
    value: function () {
      var _getConsumeStream = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(consumerTransport, _producerId) {
        var rtpCapabilities, result, producerId, id, kind, rtpParameters, streamName, consumer, newStream;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                rtpCapabilities = this.device.rtpCapabilities;
                _context11.next = 3;
                return this.socket.request('consumeStream', {
                  rtpCapabilities: rtpCapabilities,
                  _producerId: _producerId
                });

              case 3:
                result = _context11.sent;

                if (result) {
                  _context11.next = 6;
                  break;
                }

                return _context11.abrupt("return", null);

              case 6:
                producerId = result.producerId, id = result.id, kind = result.kind, rtpParameters = result.rtpParameters, streamName = result.streamName;
                _context11.next = 9;
                return consumerTransport.consume({
                  producerId: producerId,
                  id: id,
                  kind: kind,
                  rtpParameters: rtpParameters,
                  codecOptions: {}
                });

              case 9:
                consumer = _context11.sent;
                newStream = new MediaStream();
                newStream.addTrack(consumer.track);
                return _context11.abrupt("return", {
                  newStream: newStream,
                  kind: kind,
                  streamName: streamName
                });

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getConsumeStream(_x10, _x11) {
        return _getConsumeStream.apply(this, arguments);
      }

      return getConsumeStream;
    }()
  }, {
    key: "initialAndLoadDevice",
    value: function () {
      var _initialAndLoadDevice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var routerRtpCapabilities;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (this.socket) {
                  _context12.next = 2;
                  break;
                }

                return _context12.abrupt("return");

              case 2:
                if (!this.device) {
                  _context12.next = 4;
                  break;
                }

                return _context12.abrupt("return", console.log('device loaded already'));

              case 4:
                _context12.next = 6;
                return this.socket.request('getRouterRtpCapabilities');

              case 6:
                routerRtpCapabilities = _context12.sent;
                _context12.prev = 7;
                this.device = new mediasoupClient.Device();
                _context12.next = 14;
                break;

              case 11:
                _context12.prev = 11;
                _context12.t0 = _context12["catch"](7);
                return _context12.abrupt("return", _context12.t0);

              case 14:
                _context12.next = 16;
                return this.device.load({
                  routerRtpCapabilities: routerRtpCapabilities
                });

              case 16:
                console.log('MediasoupClient Device load successfully');
                return _context12.abrupt("return", null);

              case 18:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[7, 11]]);
      }));

      function initialAndLoadDevice() {
        return _initialAndLoadDevice.apply(this, arguments);
      }

      return initialAndLoadDevice;
    }()
  }, {
    key: "initialProducerConsumerTransport",
    value: function () {
      var _initialProducerConsumerTransport = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
        var self, data, _data;

        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                self = this;

                if (self.device) {
                  _context17.next = 3;
                  break;
                }

                return _context17.abrupt("return", console.warn('Device not loaded'));

              case 3:
                if (!(self.producerTransport && self.consumerTransport)) {
                  _context17.next = 5;
                  break;
                }

                return _context17.abrupt("return", console.log('transport aready exists'));

              case 5:
                _context17.next = 7;
                return self.socket.request('createProducerTransport', {
                  forceTcp: false,
                  rtpCapabilities: self.device.rtpCapabilities
                });

              case 7:
                data = _context17.sent;

                if (!data.error) {
                  _context17.next = 10;
                  break;
                }

                return _context17.abrupt("return", console.log('createProducerTransport error'));

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
                  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(_ref10, successCall, failureCall) {
                    var dtlsParameters;
                    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            dtlsParameters = _ref10.dtlsParameters;
                            // console.log('producer transport connect');
                            self.socket.request('connectProducerTransport', {
                              dtlsParameters: dtlsParameters
                            }).then(successCall)["catch"](failureCall);

                          case 2:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));

                  return function (_x12, _x13, _x14) {
                    return _ref11.apply(this, arguments);
                  };
                }());
                self.producerTransport.on('produce', /*#__PURE__*/function () {
                  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(_ref12, successCall, failureCall) {
                    var kind, rtpParameters, appData, _yield$self$socket$re, id;

                    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                      while (1) {
                        switch (_context14.prev = _context14.next) {
                          case 0:
                            kind = _ref12.kind, rtpParameters = _ref12.rtpParameters, appData = _ref12.appData;
                            _context14.prev = 1;
                            console.log('produce stream', kind, {
                              appData: appData
                            });
                            _context14.next = 5;
                            return self.socket.request('produce', {
                              id: self.producerTransport.id,
                              kind: kind,
                              rtpParameters: rtpParameters,
                              appData: appData
                            });

                          case 5:
                            _yield$self$socket$re = _context14.sent;
                            id = _yield$self$socket$re.producerId;
                            successCall({
                              id: id
                            });
                            _context14.next = 13;
                            break;

                          case 10:
                            _context14.prev = 10;
                            _context14.t0 = _context14["catch"](1);
                            failureCall(_context14.t0);

                          case 13:
                          case "end":
                            return _context14.stop();
                        }
                      }
                    }, _callee14, null, [[1, 10]]);
                  }));

                  return function (_x15, _x16, _x17) {
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
                _context17.next = 16;
                return self.socket.request('createConsumerTransport', {
                  forceTcp: false
                });

              case 16:
                _data = _context17.sent;

                if (!_data.error) {
                  _context17.next = 19;
                  break;
                }

                return _context17.abrupt("return", console.log('createConsumerTransport failure', _data.error));

              case 19:
                self.consumerTransport = self.device.createRecvTransport(_objectSpread(_objectSpread({}, _data.params), {}, {
                  iceServers: self.iceServers
                }));
                self.consumerTransport.on('connect', /*#__PURE__*/function () {
                  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(_ref14, successCall, failureCall) {
                    var dtlsParameters;
                    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            dtlsParameters = _ref14.dtlsParameters;
                            console.log('consumer transport connect');
                            self.socket.request('connectConsumerTransport', {
                              dtlsParameters: dtlsParameters
                            }).then(successCall)["catch"](failureCall);

                          case 3:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }));

                  return function (_x18, _x19, _x20) {
                    return _ref15.apply(this, arguments);
                  };
                }());
                self.consumerTransport.on('connectionstatechange', /*#__PURE__*/function () {
                  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(state) {
                    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                      while (1) {
                        switch (_context16.prev = _context16.next) {
                          case 0:
                            _context16.t0 = state;
                            _context16.next = _context16.t0 === 'connecting' ? 3 : _context16.t0 === 'connected' ? 4 : _context16.t0 === 'failed' ? 6 : 9;
                            break;

                          case 3:
                            return _context16.abrupt("break", 10);

                          case 4:
                            console.log('consumerTransport connected');
                            return _context16.abrupt("break", 10);

                          case 6:
                            console.log('consumerTransport connect fail and close');
                            self.consumerTransport.close();
                            return _context16.abrupt("break", 10);

                          case 9:
                            return _context16.abrupt("break", 10);

                          case 10:
                          case "end":
                            return _context16.stop();
                        }
                      }
                    }, _callee16);
                  }));

                  return function (_x21) {
                    return _ref16.apply(this, arguments);
                  };
                }());

              case 22:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEQsT0FBTyxDQUFDZ0QsR0FBUixDQUFZLDBDQUFaOzRCQUNBSyxJQUFJLENBQUN6QyxpQkFBTCxDQUF1QmdILEtBQXZCOzRCQVZ1Qzs7MEJBQUE7NEJBQUE7OzBCQUFBOzBCQUFBOzRCQUFBO3dCQUFBO3NCQUFBO29CQUFBO2tCQUFBLENBQW5EOztrQkFBQTtvQkFBQTtrQkFBQTtnQkFBQTs7Y0F2RlI7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBOzs7Ozs7Ozs7Ozs7O0FBNEdKekQsR0FBRyxDQUFDaUMsUUFBSixDQUFha0YsUUFBYixDQUFzQixXQUF0QixFQUFtQ3pMLGdCQUFuQztBQUVBWCxNQUFNLENBQUNDLE9BQVAsR0FBaUJVLGdCQUFqQjs7Ozs7O1VDMXVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0d29ya2VkLWFmcmFtZS8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vbmV0d29ya2VkLWFmcmFtZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXR3b3JrZWQtYWZyYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25ldHdvcmtlZC1hZnJhbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9uZXR3b3JrZWQtYWZyYW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9uZXR3b3JrZWQtYWZyYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzaW11bGNhc3RNb2RlOiB0cnVlLFxuICAgIHNpbXVsY2FzdENvbmZpZzoge1xuICAgICAgICBlbmNvZGluZ3M6XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgeyBtYXhCaXRyYXRlOiAxMDAwMDAgfSwgIC8vIGxvd1xuICAgICAgICAgICAgICAgIHsgbWF4Qml0cmF0ZTogMzAwMDAwIH0sICAvLyBtZWRpdW1cbiAgICAgICAgICAgICAgICB7IG1heEJpdHJhdGU6IDYwMDAwMCB9ICAgLy8gaGlnaFxuICAgICAgICAgICAgXSxcbiAgICAgICAgLy8gY29kZWNPcHRpb25zOlxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICB2aWRlb0dvb2dsZVN0YXJ0Qml0cmF0ZTogMTAwMFxuICAgICAgICAvLyB9XG4gICAgfSxcbiAgICBpY2VTZXJ2ZXJzOiBbXG4gICAgICAgIHsgXCJ1cmxzXCI6IFwic3R1bjpzdHVuMS5sLmdvb2dsZS5jb206MTkzMDJcIiB9LFxuICAgICAgICB7IFwidXJsc1wiOiBcInN0dW46c3R1bjIubC5nb29nbGUuY29tOjE5MzAyXCIgfSxcbiAgICBdLFxuICAgIHByZWZlcnJlZExheWVyczoge1xuICAgICAgICAvLyBsb3dlc3RcbiAgICAgICAgc3BhdGlhbExheWVyOiAwXG4gICAgfVxufSIsIi8qIGdsb2JhbCBOQUYsIGlvICovXG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpXG5jbGFzcyBNZWRpYXNvdXBBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKGlvID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3NvY2tldC5pby1jbGllbnQgbWlzc2luZycpXG4gICAgICAgIGlmIChtZWRpYXNvdXBDbGllbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdtZWRpYXNvdXAtY2xpZW50IG1pc3NpbmcnKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcHAgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgdGhpcy5yb29tID0gXCJkZWZhdWx0XCI7XG4gICAgICAgIHRoaXMub2NjdXBhbnRMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIHRoaXMubXlSb29tSm9pblRpbWUgPSBudWxsO1xuICAgICAgICB0aGlzLm15SWQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMub2NjdXBhbnRzID0ge307IC8vIGlkIC0+IGpvaW5UaW1lc3RhbXBcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRDbGllbnRzID0gW107XG5cbiAgICAgICAgdGhpcy5kZXZpY2UgPSBudWxsOyAvLyBsb2NhbCBEZXZpY2UgKHdpbGwgY29ubmVjdCB0byBzZXJ2ZXItc2lkZSByb3V0ZXIgdGhyb3VnaCB0cmFuc3BvcnQpXG5cbiAgICAgICAgdGhpcy5wcm9kdWNlclRyYW5zcG9ydCA9IG51bGw7ICAgLy8gcHJvZHVjZXJUcmFuc3BvcnQgXG4gICAgICAgIHRoaXMuY29uc3VtZXJUcmFuc3BvcnQgPSBudWxsOyAgIC8vIGNvbnN1bWVyVHJhbnNwb3J0XG5cbiAgICAgICAgdGhpcy52aWRlb1Byb2R1Y2VyID0ge307ICAgLy8gcHJvZHVjZXJJZC0+cHJvZHVjZXIgaW5zdGFuY2VcbiAgICAgICAgdGhpcy52aWRlb0NvbnN1bWVycyA9IHt9OyAgLy8gY29uc3VtZXJJZC0+Y29uc3VtZXIgaW5zdGFuY2VcblxuICAgICAgICB0aGlzLmF1ZGlvUHJvZHVjZXIgPSB7fTsgICAvLyBwcm9kdWNlcklkLT5wcm9kdWNlciBpbnN0YW5jZVxuICAgICAgICB0aGlzLmF1ZGlvQ29uc3VtZXJzID0ge307ICAvLyBjb25zdW1lcklkLT5jb25zdW1lciBpbnN0YW5jZVxuXG4gICAgICAgIHRoaXMuc2NyZWVuUHJvZHVjZXIgPSB7fTtcbiAgICAgICAgdGhpcy5zY3JlZW5Db25zdW1lcnMgPSB7fTtcblxuICAgICAgICB0aGlzLmljZVNlcnZlcnMgPSBjb25maWcuaWNlU2VydmVycztcbiAgICAgICAgdGhpcy5zaW11bGNhc3RNb2RlID0gY29uZmlnLnNpbXVsY2FzdE1vZGU7XG4gICAgICAgIHRoaXMuc2ltdWxjYXN0Q29uZmlnID0gY29uZmlnLnNpbXVsY2FzdENvbmZpZztcblxuICAgICAgICAvLyBzdG9yZSB2aWRlby9hdWRpbyBzdHJlYW1zIG9mIGNsaWVudHNcbiAgICAgICAgdGhpcy5hdWRpb1N0cmVhbXMgPSB7fTsgIC8vIGNsaWVudElkLT5hdWRpb1N0cmVhbVxuICAgICAgICB0aGlzLnZpZGVvU3RyZWFtcyA9IHt9OyAgLy8gY2xpZW50SWQtPnZpZGVvU3RyZWFtXG4gICAgICAgIHRoaXMuc2NyZWVuU3RyZWFtcyA9IHt9OyAvLyBjbGllbnRJZC0+c2NyZWVuIHNoYXJlIHN0cmVhbXNcbiAgICAgICAgdGhpcy5wZW5kaW5nQXVkaW9SZXF1ZXN0ID0ge307XG4gICAgICAgIHRoaXMucGVuZGluZ1ZpZGVvUmVxdWVzdCA9IHt9O1xuICAgICAgICB0aGlzLnBlbmRpbmdTY3JlZW5SZXF1ZXN0ID0ge307XG5cblxuICAgICAgICB0aGlzLmhlYXJ0YmVhdEludGVydmFsID0gMjAgLy8gaW4gc2Vjb25kc1xuICAgICAgICB0aGlzLmhlYXJiZWF0VGltZXIgPSBudWxsXG5cbiAgICAgICAgdGhpcy5zZXJ2ZXJUaW1lUmVxdWVzdHMgPSAwO1xuICAgICAgICB0aGlzLnRpbWVPZmZzZXRzID0gW107XG4gICAgICAgIHRoaXMuYXZnVGltZU9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgc2V0U2VydmVyVXJsKHdzVXJsKSB7XG4gICAgICAgIHRoaXMud3NVcmwgPSB3c1VybDtcbiAgICB9XG5cbiAgICBzZXRBcHAoYXBwTmFtZSkge1xuICAgICAgICB0aGlzLmFwcCA9IGFwcE5hbWU7XG4gICAgfVxuXG4gICAgc2V0Um9vbShyb29tTmFtZSkge1xuICAgICAgICB0aGlzLnJvb20gPSByb29tTmFtZTtcbiAgICB9XG5cbiAgICBzZXRXZWJSdGNPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YWNoYW5uZWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBtZWRpYXNvdXAtYWRhcHRlciB3aWxsIHVzZSB3cyB0byBzeW5jIGNvbXBvbmVudHNcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5hdWRpbyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZW5kQXVkaW8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnZpZGVvID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRWaWRlbyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTaW11bGNhc3RNb2RlKGlzU2ltdWxjYXN0KSB7XG4gICAgICAgIHRoaXMuc2ltdWxjYXN0TW9kZSA9IGlzU2ltdWxjYXN0XG4gICAgfVxuXG4gICAgc2V0U2VydmVyQ29ubmVjdExpc3RlbmVycyhzdWNjZXNzTGlzdGVuZXIsIGZhaWx1cmVMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmNvbm5lY3RTdWNjZXNzID0gc3VjY2Vzc0xpc3RlbmVyO1xuICAgICAgICB0aGlzLmNvbm5lY3RGYWlsdXJlID0gZmFpbHVyZUxpc3RlbmVyO1xuICAgIH1cblxuICAgIHNldFJvb21PY2N1cGFudExpc3RlbmVyKG9jY3VwYW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5vY2N1cGFudExpc3RlbmVyID0gb2NjdXBhbnRMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBzZXREYXRhQ2hhbm5lbExpc3RlbmVycyhvcGVuTGlzdGVuZXIsIGNsb3NlZExpc3RlbmVyLCBtZXNzYWdlTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5vcGVuTGlzdGVuZXIgPSBvcGVuTGlzdGVuZXI7XG4gICAgICAgIHRoaXMuY2xvc2VkTGlzdGVuZXIgPSBjbG9zZWRMaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5tZXNzYWdlTGlzdGVuZXIgPSBtZXNzYWdlTGlzdGVuZXI7XG4gICAgfVxuXG4gICAgc2V0SGVhcnRiZWF0VGltZXIoX2hlYXJ0YmVhdEludGVydmFsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGByZXNldCBoZWFydGJlYXRJbnRlcnZhbCBmcm9tICR7dGhpcy5oZWFydGJlYXRJbnRlcnZhbH1zIHRvICR7X2hlYXJ0YmVhdEludGVydmFsfXNgKTtcbiAgICAgICAgdGhpcy5oZWFydGJlYXRJbnRlcnZhbCA9IF9oZWFydGJlYXRJbnRlcnZhbFxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaGVhcmJlYXRUaW1lcilcbiAgICAgICAgdGhpcy5oZWFyYmVhdFRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgna2VlcC1hbGl2ZScpXG4gICAgICAgIH0sIF9oZWFydGJlYXRJbnRlcnZhbCAqIDEwMDApXG4gICAgfVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy51cGRhdGVUaW1lT2Zmc2V0KClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYud3NVcmwgfHwgc2VsZi53c1VybCA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnByb3RvY29sID09PSBcImh0dHBzOlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLndzVXJsID0gXCJ3c3M6Ly9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLndzVXJsID0gXCJ3czovL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBzb2NrZXQgPSBzZWxmLnNvY2tldCA9IGlvKHNlbGYud3NVcmwpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5zb2NrZXQucmVxdWVzdCA9ICh0eXBlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc29ja2V0LmVtaXQodHlwZSwgZGF0YSwgcmVzb2x2ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJzdWNjZXNzZnVsbHkgY29ubmVjdGVkIHRvIHdlYnNvY2tldFwiLCBzb2NrZXQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm15SWQgPSBzb2NrZXQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuam9pblJvb20oKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNvY2tldC5vbihcImNvbm5lY3RTdWNjZXNzXCIsIGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgam9pbmVkVGltZSB9ID0gZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLm15Um9vbUpvaW5UaW1lID0gam9pbmVkVGltZTtcbiAgICAgICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZShcIlN1Y2Nlc3NmdWxseSBqb2luZWQgcm9vbVwiLCBzZWxmLnJvb20sIFwiYXQgc2VydmVyIHRpbWVcIiwgam9pbmVkVGltZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25uZWN0U3VjY2VzcyhzZWxmLm15SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0SGVhcnRiZWF0VGltZXIoc2VsZi5oZWFydGJlYXRJbnRlcnZhbClcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNlbGYuaW5pdGlhbEFuZExvYWREZXZpY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2VsZi5pbml0aWFsUHJvZHVjZXJDb25zdW1lclRyYW5zcG9ydCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZWxmLmdhdGhlckV4aXN0aW5nUHJvZHVjZXJzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybihzZWxmLmRldmljZSwgc2VsZi5wcm9kdWNlclRyYW5zcG9ydCwgc2VsZi5jb25zdW1lclRyYW5zcG9ydCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBsb2NhbFN0cmVhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChzZWxmLnNlbmRBdWRpbyB8fCBzZWxmLnNlbmRWaWRlbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsb2NhbFN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZpZGVvOiBzZWxmLnNlbmRWaWRlbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGF1ZGlvOiBzZWxmLnNlbmRBdWRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBtYXliZSBwZXJtaXNzaW9uIGRlbmllZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIGF1ZGlvIHN0cmVhbXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChzZWxmLnNlbmRBdWRpbykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGxvY2FsU3RyZWFtKSBzZWxmLnN0b3JlQXVkaW9TdHJlYW0oc2VsZi5teUlkLCBsb2NhbFN0cmVhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoIXNlbGYucHJvZHVjZXJUcmFuc3BvcnQpIHJldHVybiBjb25zb2xlLmVycm9yKCdwcm9kdWNlclRyYW5zcG9ydCBub3QgY3JlYXRlZCB5ZXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmICghc2VsZi5kZXZpY2UuY2FuUHJvZHVjZSgnYXVkaW8nKSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ2RldmljZSBkb2VzIG5vdCBzdXBwb3J0IGF1ZGlvJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHRyYWNrID0gbG9jYWxTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHRyYWNrIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgcHJvZHVjZXIgPSBhd2FpdCBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0LnByb2R1Y2UocGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBzZWxmLmF1ZGlvUHJvZHVjZXJbcHJvZHVjZXIuaWRdID0gcHJvZHVjZXIgLy8gcHJvZHVjZXIua2luZCA9PT0gJ2F1ZGlvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcignZmFpbCB0byBwcm9kdWNlIGF1ZGlvIHN0cmVhbScsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gc3RvcmUgdmlkZW8gc3RyZWFtc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHNlbGYuc2VuZFZpZGVvKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAobG9jYWxTdHJlYW0pIHNlbGYuc3RvcmVWaWRlb1N0cmVhbShzZWxmLm15SWQsIGxvY2FsU3RyZWFtKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmICghc2VsZi5wcm9kdWNlclRyYW5zcG9ydCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ3Byb2R1Y2VyVHJhbnNwb3J0IG5vdCBjcmVhdGVkIHlldCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKCFzZWxmLmRldmljZS5jYW5Qcm9kdWNlKCd2aWRlbycpKSByZXR1cm4gY29uc29sZS5lcnJvcignZGV2aWNlIGRvZXMgbm90IHN1cHBvcnQgdmlkZW8nKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgdHJhY2sgPSBsb2NhbFN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHNlbGYuc2ltdWxjYXN0TW9kZSA/IHsgdHJhY2ssIC4uLnNlbGYuc2ltdWxjYXN0Q29uZmlnIH0gOiB7IHRyYWNrIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgcHJvZHVjZXIgPSBhd2FpdCBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0LnByb2R1Y2UocGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBzZWxmLnZpZGVvUHJvZHVjZXJbcHJvZHVjZXIuaWRdID0gcHJvZHVjZXIgLy8gcHJvZHVjZXIua2luZCA9PT0gJ3ZpZGVvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2ZhaWwgdG8gcHJvZHVjZSB2aWRlbyBzdHJlYW0nLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMClcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNvY2tldC5vbihcImVycm9yXCIsIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTb2NrZXQgY29ubmVjdGlvbiBmYWlsdXJlXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdEZhaWx1cmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNvY2tldC5vbihcIm9jY3VwYW50c0NoYW5nZWRcIiwgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgb2NjdXBhbnRzIH0gPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBOQUYubG9nLndyaXRlKCdvY2N1cGFudHMgY2hhbmdlZCcsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY2VpdmVkT2NjdXBhbnRzKG9jY3VwYW50cyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCByZWFzb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhbiB1cCBpbnN0YW5jZXNcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kZXZpY2UgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQgPSBzZWxmLmNvbnN1bWVyVHJhbnNwb3J0ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZUF1ZGlvU3RyZWFtKHNlbGYubXlJZClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVWaWRlb1N0cmVhbShzZWxmLm15SWQpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlU2NyZWVuU3RyZWFtKHNlbGYubXlJZClcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFudWFsbHkgcmVjb25uZWN0XG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5jb25uZWN0KClcbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oJ3Jlc3RhcnRJY2UnLCBhc3luYyAoeyBpY2VQYXJhbWV0ZXJzIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNlbGYucHJvZHVjZXJUcmFuc3BvcnQucmVzdGFydEljZSh7IGljZVBhcmFtZXRlcnMgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3RhcnRJY2UgZXJyb3InLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBzb2NrZXQub24oJ25ld1Byb2R1Y2VyJywgYXN5bmMgKHsgcHJvZHVjZXJJZCwgc29ja2V0SWQgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnN1YnNjcmliZVN0cmVhbShwcm9kdWNlcklkLCBzb2NrZXRJZClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZURhdGEocGFja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyb20gPSBwYWNrZXQuZnJvbTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHBhY2tldC50eXBlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcGFja2V0LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubWVzc2FnZUxpc3RlbmVyKGZyb20sIHR5cGUsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNvY2tldC5vbihcInNlbmRcIiwgcmVjZWl2ZURhdGEpO1xuICAgICAgICAgICAgICAgIHNvY2tldC5vbihcImJyb2FkY2FzdFwiLCByZWNlaXZlRGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGpvaW5Sb29tKCkge1xuICAgICAgICBOQUYubG9nLndyaXRlKFwiSm9pbmluZyByb29tXCIsIHRoaXMucm9vbSk7XG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJqb2luUm9vbVwiLCB7IHJvb206IHRoaXMucm9vbSB9KTtcbiAgICB9XG5cbiAgICByZWNlaXZlZE9jY3VwYW50cyhvY2N1cGFudHMpIHtcbiAgICAgICAgZGVsZXRlIG9jY3VwYW50c1t0aGlzLm15SWRdO1xuICAgICAgICB0aGlzLm9jY3VwYW50cyA9IG9jY3VwYW50cztcbiAgICAgICAgdGhpcy5vY2N1cGFudExpc3RlbmVyKG9jY3VwYW50cyk7XG4gICAgfVxuXG4gICAgc2hvdWxkU3RhcnRDb25uZWN0aW9uVG8oY2xpZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXJ0U3RyZWFtQ29ubmVjdGlvbihyZW1vdGVJZCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RlZENsaWVudHMucHVzaChyZW1vdGVJZCk7XG4gICAgICAgIHRoaXMub3Blbkxpc3RlbmVyKHJlbW90ZUlkKTtcbiAgICB9XG5cbiAgICBjbG9zZVN0cmVhbUNvbm5lY3Rpb24oY2xpZW50SWQpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRDbGllbnRzID0gdGhpcy5jb25uZWN0ZWRDbGllbnRzLmZpbHRlcihjID0+IGMgIT0gY2xpZW50SWQpO1xuICAgICAgICB0aGlzLmNsb3NlZExpc3RlbmVyKGNsaWVudElkKTtcbiAgICB9XG5cbiAgICBnZXRDb25uZWN0U3RhdHVzKGNsaWVudElkKSB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9IHRoaXMuY29ubmVjdGVkQ2xpZW50cy5pbmRleE9mKGNsaWVudElkKSAhPSAtMTtcblxuICAgICAgICBpZiAoY29ubmVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gTkFGLmFkYXB0ZXJzLklTX0NPTk5FQ1RFRDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOQUYuYWRhcHRlcnMuTk9UX0NPTk5FQ1RFRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbmREYXRhKHRvLCB0eXBlLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuc2VuZERhdGFHdWFyYW50ZWVkKHRvLCB0eXBlLCBkYXRhKTtcbiAgICB9XG5cbiAgICBzZW5kRGF0YUd1YXJhbnRlZWQodG8sIHR5cGUsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFja2V0ID0ge1xuICAgICAgICAgICAgZnJvbTogdGhpcy5teUlkLFxuICAgICAgICAgICAgdG8sXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHNlbmRpbmc6IHRydWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KFwic2VuZFwiLCBwYWNrZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTkFGLmxvZy53YXJuKCdTb2NrZXRJTyBzb2NrZXQgbm90IGNyZWF0ZWQgeWV0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBicm9hZGNhc3REYXRhKHR5cGUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5icm9hZGNhc3REYXRhR3VhcmFudGVlZCh0eXBlLCBkYXRhKTtcbiAgICB9XG5cbiAgICBicm9hZGNhc3REYXRhR3VhcmFudGVlZCh0eXBlLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IHBhY2tldCA9IHtcbiAgICAgICAgICAgIGZyb206IHRoaXMubXlJZCxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgYnJvYWRjYXN0aW5nOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KFwiYnJvYWRjYXN0XCIsIHBhY2tldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBOQUYubG9nLndhcm4oJ1NvY2tldElPIHNvY2tldCBub3QgY3JlYXRlZCB5ZXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGFkZExvY2FsTWVkaWFTdHJlYW0oc3RyZWFtLCBzdHJlYW1OYW1lKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGlmICghc2VsZi5wcm9kdWNlclRyYW5zcG9ydCkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ3Byb2R1Y2VyVHJhbnNwb3J0IG5vdCBjcmVhdGVkIHlldCcpXG4gICAgICAgIGNvbnNvbGUubG9nKHsgc3RyZWFtTmFtZSB9KTtcbiAgICAgICAgc3dpdGNoIChzdHJlYW1OYW1lKSB7XG4gICAgICAgICAgICBjYXNlICd2aWRlbyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuZGV2aWNlLmNhblByb2R1Y2UoJ3ZpZGVvJykpIHJldHVybiBjb25zb2xlLmVycm9yKCdkZXZpY2UgZG9lcyBub3Qgc3VwcG9ydCB2aWRlbycpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNrID0gc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gc2VsZi5zaW11bGNhc3RNb2RlID8geyB0cmFjaywgLi4uc2VsZi5zaW11bGNhc3RDb25maWcgfSA6IHsgdHJhY2sgfVxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuYXBwRGF0YSA9IHsgc3RyZWFtTmFtZSB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y2VyID0gYXdhaXQgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5wcm9kdWNlKHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aWRlb1Byb2R1Y2VyW3Byb2R1Y2VyLmlkXSA9IHByb2R1Y2VyIC8vIHByb2R1Y2VyLmtpbmQgPT09ICd2aWRlbydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhdWRpbyc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGYuZGV2aWNlLmNhblByb2R1Y2UoJ2F1ZGlvJykpIHJldHVybiBjb25zb2xlLmVycm9yKCdkZXZpY2UgZG9lcyBub3Qgc3VwcG9ydCBhdWRpbycpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNrID0gc3RyZWFtLmdldEF1ZGlvVHJhY2tzKClbMF1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0geyB0cmFjayB9XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBEYXRhID0geyBzdHJlYW1OYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjZXIgPSBhd2FpdCBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0LnByb2R1Y2UocGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmF1ZGlvUHJvZHVjZXJbcHJvZHVjZXIuaWRdID0gcHJvZHVjZXIgLy8gcHJvZHVjZXIua2luZCA9PT0gJ2F1ZGlvJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NjcmVlbnNoYXJlJzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2VsZi5kZXZpY2UuY2FuUHJvZHVjZSgndmlkZW8nKSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ2RldmljZSBkb2VzIG5vdCBzdXBwb3J0IHZpZGVvJylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhY2sgPSBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHRyYWNrIH1cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmFwcERhdGEgPSB7IHN0cmVhbU5hbWUgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWNlciA9IGF3YWl0IHNlbGYucHJvZHVjZXJUcmFuc3BvcnQucHJvZHVjZShwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2NyZWVuUHJvZHVjZXJbcHJvZHVjZXIuaWRdID0gcHJvZHVjZXIgLy8gcHJvZHVjZXIua2luZCA9PT0gJ3ZpZGVvJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHVua25vd24gdHlwZTogJHt0eXBlfWApXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGFzeW5jIHJlbW92ZUxvY2FsTWVkaWFTdHJlYW0oc3RyZWFtTmFtZSkge1xuICAgICAgICBpZiAoIXN0cmVhbU5hbWUpIHJldHVyblxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IHZpZGVvUHJvZHVjZXIsIGF1ZGlvUHJvZHVjZXIsIHNjcmVlblByb2R1Y2VyIH0gPSB0aGlzXG4gICAgICAgICAgICBjb25zdCBwcm9kdWNlcnMgPSBbLi4uT2JqZWN0LnZhbHVlcyh2aWRlb1Byb2R1Y2VyKSwgLi4uT2JqZWN0LnZhbHVlcyhhdWRpb1Byb2R1Y2VyKSwgLi4uT2JqZWN0LnZhbHVlcyhzY3JlZW5Qcm9kdWNlcildXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7IHByb2R1Y2VycyB9KTtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UHJvZHVjZXIgPSBwcm9kdWNlcnMuZmluZChlYWNoID0+IGVhY2guYXBwRGF0YS5zdHJlYW1OYW1lID09PSBzdHJlYW1OYW1lKVxuICAgICAgICAgICAgY29uc29sZS5sb2coeyB0YXJnZXRQcm9kdWNlciB9KTtcblxuICAgICAgICAgICAgaWYgKCF0YXJnZXRQcm9kdWNlcikgcmV0dXJuIGNvbnNvbGUubG9nKGBwcm9kdWNlciBvZiBzdHJlYW0gJHtzdHJlYW1OYW1lfSBub3QgZm91bmRgKTtcblxuICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gdGFyZ2V0UHJvZHVjZXJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgaWQgfSk7XG5cbiAgICAgICAgICAgIC8vIE5vIG1vcmUgbWVkaWEgaXMgdHJhbnNtaXR0ZWQuIFRoZSBwcm9kdWNlcidzIHRyYWNrIGlzIGludGVybmFsbHkgc3RvcHBlZCBieSBjYWxsaW5nIHN0b3AoKSBvbiBpdFxuICAgICAgICAgICAgLy8gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZSBzZXJ2ZXIgc2lkZSBwcm9kdWNlciBoYXMgYmVlbiBjbG9zZWQgKGFuZCB2aWNlLXZlcnNhKS5cbiAgICAgICAgICAgIC8vIGp1c3QgbGlrZSB0cmFjay5zdG9wKCkgaW4gbmF0aXZlIFdlYlJUQ1xuICAgICAgICAgICAgdGFyZ2V0UHJvZHVjZXIuY2xvc2UoKVxuXG4gICAgICAgICAgICAvLyBub3RpZnkgdGhlIHNlcnZlciB0byBjbG9zZSBjb3JyZXNwb25kaW5nIHByb2R1Y2VyXG4gICAgICAgICAgICBjb25zdCB7IGNsb3NlUmVzIH0gPSBhd2FpdCB0aGlzLnNvY2tldC5yZXF1ZXN0KCdjbG9zZVByb2R1Y2VyJywgeyBpZCwgc3RyZWFtTmFtZSB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2coY2xvc2VSZXMpO1xuXG4gICAgICAgICAgICBkZWxldGUgdmlkZW9Qcm9kdWNlcltpZF1cbiAgICAgICAgICAgIGRlbGV0ZSBhdWRpb1Byb2R1Y2VyW2lkXVxuICAgICAgICAgICAgZGVsZXRlIHNjcmVlblByb2R1Y2VyW2lkXVxuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZW1vdmVMb2NhbE1lZGlhU3RyZWFtKCR7c3RyZWFtTmFtZX0pIGVycm9yOmAsIGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgcmVtb3ZlQXVkaW9TdHJlYW0oY2xpZW50SWQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuYXVkaW9TdHJlYW1zW2NsaWVudElkXVxuICAgIH1cblxuICAgIHJlbW92ZVZpZGVvU3RyZWFtKGNsaWVudElkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnZpZGVvU3RyZWFtc1tjbGllbnRJZF1cbiAgICB9XG5cbiAgICByZW1vdmVTY3JlZW5TdHJlYW0oY2xpZW50SWQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2NyZWVuU3RyZWFtc1tjbGllbnRJZF1cbiAgICB9XG5cblxuICAgIHN0b3JlQXVkaW9TdHJlYW0oY2xpZW50SWQsIHN0cmVhbSkge1xuICAgICAgICB0aGlzLmF1ZGlvU3RyZWFtc1tjbGllbnRJZF0gPSBzdHJlYW07XG5cbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0F1ZGlvUmVxdWVzdFtjbGllbnRJZF0pIHtcbiAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJSZWNlaXZlZCBwZW5kaW5nIGF1ZGlvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ0F1ZGlvUmVxdWVzdFtjbGllbnRJZF0oc3RyZWFtKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdBdWRpb1JlcXVlc3RbY2xpZW50SWRdKHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9yZVZpZGVvU3RyZWFtKGNsaWVudElkLCBzdHJlYW0pIHtcbiAgICAgICAgdGhpcy52aWRlb1N0cmVhbXNbY2xpZW50SWRdID0gc3RyZWFtO1xuXG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdWaWRlb1JlcXVlc3RbY2xpZW50SWRdKSB7XG4gICAgICAgICAgICBOQUYubG9nLndyaXRlKFwiUmVjZWl2ZWQgcGVuZGluZyB2aWRlbyBmb3IgXCIgKyBjbGllbnRJZCk7XG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdWaWRlb1JlcXVlc3RbY2xpZW50SWRdKHN0cmVhbSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nVmlkZW9SZXF1ZXN0W2NsaWVudElkXShzdHJlYW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcmVTY3JlZW5TdHJlYW0oY2xpZW50SWQsIHN0cmVhbSkge1xuICAgICAgICB0aGlzLnNjcmVlblN0cmVhbXNbY2xpZW50SWRdID0gc3RyZWFtO1xuXG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdTY3JlZW5SZXF1ZXN0W2NsaWVudElkXSkge1xuICAgICAgICAgICAgTkFGLmxvZy53cml0ZShcIlJlY2VpdmVkIHBlbmRpbmcgc2NyZWVuIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ1NjcmVlblJlcXVlc3RbY2xpZW50SWRdKHN0cmVhbSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nU2NyZWVuUmVxdWVzdFtjbGllbnRJZF0oc3RyZWFtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1lZGlhU3RyZWFtKGNsaWVudElkLCB0eXBlID0gJ2F1ZGlvJykge1xuICAgICAgICBjb25zb2xlLmxvZyhgZ2V0TWVkaWFTdHJlYW0gJHt0eXBlfWApO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXVkaW9TdHJlYW1zW2NsaWVudElkXSkge1xuICAgICAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJBbHJlYWR5IGhhZCBhdWRpbyBmb3IgXCIgKyBjbGllbnRJZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmF1ZGlvU3RyZWFtc1tjbGllbnRJZF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBOQUYubG9nLndyaXRlKFwiV2FpdGluZyBvbiBhdWRpbyBmb3IgXCIgKyBjbGllbnRJZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBlbmRpbmdBdWRpb1JlcXVlc3RbY2xpZW50SWRdID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52aWRlb1N0cmVhbXNbY2xpZW50SWRdKSB7XG4gICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZShcIkFscmVhZHkgaGFkIHZpZGVvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMudmlkZW9TdHJlYW1zW2NsaWVudElkXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE5BRi5sb2cud3JpdGUoXCJXYWl0aW5nIG9uIHZpZGVvIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGVuZGluZ1ZpZGVvUmVxdWVzdFtjbGllbnRJZF0gPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY3JlZW5zaGFyZScpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcmVlblN0cmVhbXNbY2xpZW50SWRdKSB7XG4gICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZShcIkFscmVhZHkgaGFkIHNjcmVlbiBmb3IgXCIgKyBjbGllbnRJZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNjcmVlblN0cmVhbXNbY2xpZW50SWRdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTkFGLmxvZy53cml0ZShcIldhaXRpbmcgb24gc2NyZWVuIGZvciBcIiArIGNsaWVudElkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucGVuZGluZ1NjcmVlblJlcXVlc3RbY2xpZW50SWRdID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlU3RyZWFtKHR5cGUgPSAndmlkZW8nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWNlcnMgPSBPYmplY3QudmFsdWVzKHR5cGUgPT09ICd2aWRlbycgPyB0aGlzLnZpZGVvUHJvZHVjZXIgOiB0eXBlID09PSAnYXVkaW8nID8gdGhpcy5hdWRpb1Byb2R1Y2VyIDogdGhpcy5zY3JlZW5Qcm9kdWNlcilcbiAgICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBwcm9kdWNlcnNcbiAgICAgICAgICAgIGlmICghcHJvZHVjZXJzIHx8ICFsZW5ndGgpIHJldHVybiB7IGU6IG51bGwsIG1zZzogYG5vICR7dHlwZX0gcHJvZHVjZXJzIG5vd2AsIGxlbmd0aCB9XG4gICAgICAgICAgICBwcm9kdWNlcnMuZm9yRWFjaChwcm9kdWNlciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjZXIpO1xuICAgICAgICAgICAgICAgIHByb2R1Y2VyLnBhdXNlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4geyBlOiBudWxsLCBtc2c6ICdwYXVzZSBzdHJlYW0gc3VjY2VzcycsIGxlbmd0aCB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXVzZVN0cmVhbSBlcnJvcicsIGUpO1xuICAgICAgICAgICAgcmV0dXJuIHsgZSB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN1bWVTdHJlYW0odHlwZSA9ICd2aWRlbycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y2VycyA9IE9iamVjdC52YWx1ZXModHlwZSA9PT0gJ3ZpZGVvJyA/IHRoaXMudmlkZW9Qcm9kdWNlciA6IHR5cGUgPT09ICdhdWRpbycgPyB0aGlzLmF1ZGlvUHJvZHVjZXIgOiB0aGlzLnNjcmVlblByb2R1Y2VyKVxuICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHByb2R1Y2Vyc1xuICAgICAgICAgICAgaWYgKCFwcm9kdWNlcnMgfHwgIWxlbmd0aCkgcmV0dXJuIHsgZTogbnVsbCwgbXNnOiBgbm8gJHt0eXBlfSBwcm9kdWNlcnMgbm93YCwgbGVuZ3RoIH1cbiAgICAgICAgICAgIHByb2R1Y2Vycy5mb3JFYWNoKHByb2R1Y2VyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWNlcik7XG4gICAgICAgICAgICAgICAgcHJvZHVjZXIucmVzdW1lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4geyBlOiBudWxsLCBtc2c6ICdyZXN1bWUgc3RyZWFtIHN1Y2Nlc3MnLCBsZW5ndGggfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdW1lU3RyZWFtIGVycm9yJywgZSk7XG4gICAgICAgICAgICByZXR1cm4geyBlIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGZvciBhZGFwdGVyIGNvbXBhdGliaWxpdHlcbiAgICAgKi9cbiAgICBlbmFibGVNaWNyb3Bob25lKGVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIGVuYWJsZWQgPyB0aGlzLnJlc3VtZVN0cmVhbSgnYXVkaW8nKSA6IHRoaXMucGF1c2VTdHJlYW0oJ2F1ZGlvJylcbiAgICB9XG4gICAgZW5hYmxlQ2FtZXJhKGVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIGVuYWJsZWQgPyB0aGlzLnJlc3VtZVN0cmVhbSgndmlkZW8nKSA6IHRoaXMucGF1c2VTdHJlYW0oJ3ZpZGVvJylcbiAgICB9XG4gICAgZW5hYmxlU2NyZWVuU2hhcmluZyhlbmFibGVkKSB7XG4gICAgICAgIHJldHVybiBlbmFibGVkID8gdGhpcy5yZXN1bWVTdHJlYW0oJ3NjcmVlbnNoYXJlJykgOiB0aGlzLnBhdXNlU3RyZWFtKCdzY3JlZW5zaGFyZScpXG4gICAgfVxuXG4gICAgdXBkYXRlVGltZU9mZnNldCgpIHtcbiAgICAgICAgY29uc3QgY2xpZW50U2VudFRpbWUgPSBEYXRlLm5vdygpICsgdGhpcy5hdmdUaW1lT2Zmc2V0O1xuXG4gICAgICAgIHJldHVybiBmZXRjaChkb2N1bWVudC5sb2NhdGlvbi5ocmVmLCB7IG1ldGhvZDogXCJIRUFEXCIsIGNhY2hlOiBcIm5vLWNhY2hlXCIgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJlY2lzaW9uID0gMTAwMDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2ZXJSZWNlaXZlZFRpbWUgPSBuZXcgRGF0ZShyZXMuaGVhZGVycy5nZXQoXCJEYXRlXCIpKS5nZXRUaW1lKCkgKyAocHJlY2lzaW9uIC8gMik7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50UmVjZWl2ZWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lID0gc2VydmVyUmVjZWl2ZWRUaW1lICsgKChjbGllbnRSZWNlaXZlZFRpbWUgLSBjbGllbnRTZW50VGltZSkgLyAyKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lT2Zmc2V0ID0gc2VydmVyVGltZSAtIGNsaWVudFJlY2VpdmVkVGltZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyVGltZVJlcXVlc3RzKys7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJUaW1lUmVxdWVzdHMgPD0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lT2Zmc2V0cy5wdXNoKHRpbWVPZmZzZXQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZU9mZnNldHNbdGhpcy5zZXJ2ZXJUaW1lUmVxdWVzdHMgJSAxMF0gPSB0aW1lT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYXZnVGltZU9mZnNldCA9IHRoaXMudGltZU9mZnNldHMucmVkdWNlKChhY2MsIG9mZnNldCkgPT4gYWNjICs9IG9mZnNldCwgMCkgLyB0aGlzLnRpbWVPZmZzZXRzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlcnZlclRpbWVSZXF1ZXN0cyA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVUaW1lT2Zmc2V0KCksIDUgKiA2MCAqIDEwMDApOyAvLyBTeW5jIGNsb2NrIGV2ZXJ5IDUgbWludXRlcy5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVPZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTZXJ2ZXJUaW1lKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyB0aGlzLmF2Z1RpbWVPZmZzZXQ7XG4gICAgfVxuXG5cblxuICAgIC8qKiBNRURJQVNPVVAgUkVMQVRFRCBGVU5DVElPTlMgKiovXG4gICAgYXN5bmMgZ2F0aGVyRXhpc3RpbmdQcm9kdWNlcnMoKSB7XG5cbiAgICAgICAgY29uc3QgeyBwcm9kdWNlckxpc3QgfSA9IGF3YWl0IHRoaXMuc29ja2V0LnJlcXVlc3QoJ2dhdGhlclByb2R1Y2VycycpXG4gICAgICAgIGlmICghcHJvZHVjZXJMaXN0Lmxlbmd0aCkgcmV0dXJuIGNvbnNvbGUubG9nKCdubyBwcm9kdWNlcnMgY3VycmVudGx5JywgcHJvZHVjZXJMaXN0KVxuXG4gICAgICAgIHByb2R1Y2VyTGlzdC5mb3JFYWNoKGFzeW5jICh7IHByb2R1Y2VySWQsIHNvY2tldElkIH0pID0+IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3Vic2NyaWJlU3RyZWFtKHByb2R1Y2VySWQsIHNvY2tldElkKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFzeW5jIHN1YnNjcmliZVN0cmVhbShwcm9kdWNlcklkLCBzb2NrZXRJZCkge1xuXG4gICAgICAgIGlmICghdGhpcy5jb25zdW1lclRyYW5zcG9ydCkgcmV0dXJuIGNvbnNvbGUubG9nKGBjb25zdW1lclRyYW5zcG9ydCBkb2Vzbid0IGV4aXN0YClcblxuICAgICAgICBjb25zdCB7IGtpbmQsIG5ld1N0cmVhbTogY29uc3VtZXJzdHJlYW0sIHN0cmVhbU5hbWUgfSA9IGF3YWl0IHRoaXMuZ2V0Q29uc3VtZVN0cmVhbSh0aGlzLmNvbnN1bWVyVHJhbnNwb3J0LCBwcm9kdWNlcklkKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWJzY3JpYmUgc3VjZXNzZnVsbHknLCB7IGtpbmQsIHN0cmVhbU5hbWUsIGNvbnN1bWVyc3RyZWFtIH0pO1xuXG4gICAgICAgIHN3aXRjaCAoc3RyZWFtTmFtZSkge1xuICAgICAgICAgICAgY2FzZSAndmlkZW8nOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVWaWRlb1N0cmVhbShzb2NrZXRJZCwgY29uc3VtZXJzdHJlYW0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhdWRpbyc6XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZUF1ZGlvU3RyZWFtKHNvY2tldElkLCBjb25zdW1lcnN0cmVhbSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NjcmVlbnNoYXJlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlU2NyZWVuU3RyZWFtKHNvY2tldElkLCBjb25zdW1lcnN0cmVhbSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Vua25vd24ga2luZCcsIGtpbmQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29uc3VtZVN0cmVhbShjb25zdW1lclRyYW5zcG9ydCwgX3Byb2R1Y2VySWQpIHtcbiAgICAgICAgY29uc3QgeyBydHBDYXBhYmlsaXRpZXMgfSA9IHRoaXMuZGV2aWNlXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc29ja2V0LnJlcXVlc3QoJ2NvbnN1bWVTdHJlYW0nLCB7IHJ0cENhcGFiaWxpdGllcywgX3Byb2R1Y2VySWQgfSlcbiAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiBudWxsXG5cbiAgICAgICAgY29uc3QgeyBwcm9kdWNlcklkLCBpZCwga2luZCwgcnRwUGFyYW1ldGVycywgc3RyZWFtTmFtZSB9ID0gcmVzdWx0XG4gICAgICAgIGNvbnN0IGNvbnN1bWVyID0gYXdhaXQgY29uc3VtZXJUcmFuc3BvcnQuY29uc3VtZSh7XG4gICAgICAgICAgICBwcm9kdWNlcklkLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgcnRwUGFyYW1ldGVycyxcbiAgICAgICAgICAgIGNvZGVjT3B0aW9uczoge31cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBuZXdTdHJlYW0gPSBuZXcgTWVkaWFTdHJlYW0oKVxuICAgICAgICBuZXdTdHJlYW0uYWRkVHJhY2soY29uc3VtZXIudHJhY2spXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXdTdHJlYW0sXG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgc3RyZWFtTmFtZVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbml0aWFsQW5kTG9hZERldmljZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNvY2tldCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5kZXZpY2UpIHJldHVybiBjb25zb2xlLmxvZygnZGV2aWNlIGxvYWRlZCBhbHJlYWR5JylcbiAgICAgICAgY29uc3Qgcm91dGVyUnRwQ2FwYWJpbGl0aWVzID0gYXdhaXQgdGhpcy5zb2NrZXQucmVxdWVzdCgnZ2V0Um91dGVyUnRwQ2FwYWJpbGl0aWVzJylcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlID0gbmV3IG1lZGlhc291cENsaWVudC5EZXZpY2UoKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuZGV2aWNlLmxvYWQoeyByb3V0ZXJSdHBDYXBhYmlsaXRpZXMgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ01lZGlhc291cENsaWVudCBEZXZpY2UgbG9hZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cblxuICAgIGFzeW5jIGluaXRpYWxQcm9kdWNlckNvbnN1bWVyVHJhbnNwb3J0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBpZiAoIXNlbGYuZGV2aWNlKSByZXR1cm4gY29uc29sZS53YXJuKCdEZXZpY2Ugbm90IGxvYWRlZCcpXG4gICAgICAgIGlmIChzZWxmLnByb2R1Y2VyVHJhbnNwb3J0ICYmIHNlbGYuY29uc3VtZXJUcmFuc3BvcnQpIHJldHVybiBjb25zb2xlLmxvZygndHJhbnNwb3J0IGFyZWFkeSBleGlzdHMnKVxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzZWxmLnNvY2tldC5yZXF1ZXN0KCdjcmVhdGVQcm9kdWNlclRyYW5zcG9ydCcsIHtcbiAgICAgICAgICAgICAgICBmb3JjZVRjcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcnRwQ2FwYWJpbGl0aWVzOiBzZWxmLmRldmljZS5ydHBDYXBhYmlsaXRpZXMsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiBjb25zb2xlLmxvZygnY3JlYXRlUHJvZHVjZXJUcmFuc3BvcnQgZXJyb3InKVxuICAgICAgICAgICAgLy8gdHJhbnNwb3J0SWQgPSBkYXRhLnBhcmFtcy5pZFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0cmFuc3BvcnQuaWQsXG4gICAgICAgICAgICAgICAgICAgIGljZVBhcmFtZXRlcnM6IHRyYW5zcG9ydC5pY2VQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAgICAgICBpY2VDYW5kaWRhdGVzOiB0cmFuc3BvcnQuaWNlQ2FuZGlkYXRlcywgICBcbiAgICAgICAgICAgICAgICAgICAgZHRsc1BhcmFtZXRlcnM6IHRyYW5zcG9ydC5kdGxzUGFyYW1ldGVyc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZi5wcm9kdWNlclRyYW5zcG9ydCA9IHNlbGYuZGV2aWNlLmNyZWF0ZVNlbmRUcmFuc3BvcnQoe1xuICAgICAgICAgICAgICAgIC4uLmRhdGEucGFyYW1zLFxuICAgICAgICAgICAgICAgIGljZVNlcnZlcnM6IHNlbGYuaWNlU2VydmVyc1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5vbignY29ubmVjdCcsIGFzeW5jICh7IGR0bHNQYXJhbWV0ZXJzIH0sIHN1Y2Nlc3NDYWxsLCBmYWlsdXJlQ2FsbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwcm9kdWNlciB0cmFuc3BvcnQgY29ubmVjdCcpO1xuICAgICAgICAgICAgICAgIHNlbGYuc29ja2V0LnJlcXVlc3QoJ2Nvbm5lY3RQcm9kdWNlclRyYW5zcG9ydCcsIHsgZHRsc1BhcmFtZXRlcnMgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oc3VjY2Vzc0NhbGwpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmYWlsdXJlQ2FsbClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlbGYucHJvZHVjZXJUcmFuc3BvcnQub24oJ3Byb2R1Y2UnLCBhc3luYyAoeyBraW5kLCBydHBQYXJhbWV0ZXJzLCBhcHBEYXRhIH0sIHN1Y2Nlc3NDYWxsLCBmYWlsdXJlQ2FsbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9kdWNlIHN0cmVhbScsIGtpbmQsIHsgYXBwRGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwcm9kdWNlcklkOiBpZCB9ID0gYXdhaXQgc2VsZi5zb2NrZXQucmVxdWVzdCgncHJvZHVjZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBzZWxmLnByb2R1Y2VyVHJhbnNwb3J0LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ0cFBhcmFtZXRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBEYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsKHsgaWQgfSlcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmVDYWxsKGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5vbignY29ubmVjdGlvbnN0YXRlY2hhbmdlJywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb25uZWN0aW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nvbm5lY3RlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncHJvZHVjZXJUcmFuc3BvcnQgY29ubmVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdmYWlsZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9kdWNlclRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2R1Y2VyVHJhbnNwb3J0IGNvbm5lY3QgZmFpbCBhbmQgY2xvc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHNlbGYuc29ja2V0LnJlcXVlc3QoJ2NyZWF0ZUNvbnN1bWVyVHJhbnNwb3J0Jywge1xuICAgICAgICAgICAgICAgIGZvcmNlVGNwOiBmYWxzZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiBjb25zb2xlLmxvZygnY3JlYXRlQ29uc3VtZXJUcmFuc3BvcnQgZmFpbHVyZScsIGRhdGEuZXJyb3IpXG5cbiAgICAgICAgICAgIHNlbGYuY29uc3VtZXJUcmFuc3BvcnQgPSBzZWxmLmRldmljZS5jcmVhdGVSZWN2VHJhbnNwb3J0KHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLnBhcmFtcyxcbiAgICAgICAgICAgICAgICBpY2VTZXJ2ZXJzOiBzZWxmLmljZVNlcnZlcnNcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNlbGYuY29uc3VtZXJUcmFuc3BvcnQub24oJ2Nvbm5lY3QnLCBhc3luYyAoeyBkdGxzUGFyYW1ldGVycyB9LCBzdWNjZXNzQ2FsbCwgZmFpbHVyZUNhbGwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uc3VtZXIgdHJhbnNwb3J0IGNvbm5lY3QnKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNvY2tldC5yZXF1ZXN0KCdjb25uZWN0Q29uc3VtZXJUcmFuc3BvcnQnLCB7IGR0bHNQYXJhbWV0ZXJzIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3NDYWxsKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZmFpbHVyZUNhbGwpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzZWxmLmNvbnN1bWVyVHJhbnNwb3J0Lm9uKCdjb25uZWN0aW9uc3RhdGVjaGFuZ2UnLCBhc3luYyAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nvbm5lY3RpbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbnN1bWVyIGNvbm5lY3RpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb25uZWN0ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbnN1bWVyVHJhbnNwb3J0IGNvbm5lY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZhaWxlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29uc3VtZXJUcmFuc3BvcnQgY29ubmVjdCBmYWlsIGFuZCBjbG9zZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25zdW1lclRyYW5zcG9ydC5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5OQUYuYWRhcHRlcnMucmVnaXN0ZXIoXCJtZWRpYXNvdXBcIiwgTWVkaWFzb3VwQWRhcHRlcik7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFzb3VwQWRhcHRlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2ltdWxjYXN0TW9kZSIsInNpbXVsY2FzdENvbmZpZyIsImVuY29kaW5ncyIsIm1heEJpdHJhdGUiLCJpY2VTZXJ2ZXJzIiwicHJlZmVycmVkTGF5ZXJzIiwic3BhdGlhbExheWVyIiwiY29uZmlnIiwicmVxdWlyZSIsIk1lZGlhc291cEFkYXB0ZXIiLCJpbyIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJ3YXJuIiwibWVkaWFzb3VwQ2xpZW50IiwiYXBwIiwicm9vbSIsIm9jY3VwYW50TGlzdGVuZXIiLCJteVJvb21Kb2luVGltZSIsIm15SWQiLCJvY2N1cGFudHMiLCJjb25uZWN0ZWRDbGllbnRzIiwiZGV2aWNlIiwicHJvZHVjZXJUcmFuc3BvcnQiLCJjb25zdW1lclRyYW5zcG9ydCIsInZpZGVvUHJvZHVjZXIiLCJ2aWRlb0NvbnN1bWVycyIsImF1ZGlvUHJvZHVjZXIiLCJhdWRpb0NvbnN1bWVycyIsInNjcmVlblByb2R1Y2VyIiwic2NyZWVuQ29uc3VtZXJzIiwiYXVkaW9TdHJlYW1zIiwidmlkZW9TdHJlYW1zIiwic2NyZWVuU3RyZWFtcyIsInBlbmRpbmdBdWRpb1JlcXVlc3QiLCJwZW5kaW5nVmlkZW9SZXF1ZXN0IiwicGVuZGluZ1NjcmVlblJlcXVlc3QiLCJoZWFydGJlYXRJbnRlcnZhbCIsImhlYXJiZWF0VGltZXIiLCJzZXJ2ZXJUaW1lUmVxdWVzdHMiLCJ0aW1lT2Zmc2V0cyIsImF2Z1RpbWVPZmZzZXQiLCJ3c1VybCIsImFwcE5hbWUiLCJyb29tTmFtZSIsIm9wdGlvbnMiLCJkYXRhY2hhbm5lbCIsImF1ZGlvIiwic2VuZEF1ZGlvIiwidmlkZW8iLCJzZW5kVmlkZW8iLCJpc1NpbXVsY2FzdCIsInN1Y2Nlc3NMaXN0ZW5lciIsImZhaWx1cmVMaXN0ZW5lciIsImNvbm5lY3RTdWNjZXNzIiwiY29ubmVjdEZhaWx1cmUiLCJvcGVuTGlzdGVuZXIiLCJjbG9zZWRMaXN0ZW5lciIsIm1lc3NhZ2VMaXN0ZW5lciIsIl9oZWFydGJlYXRJbnRlcnZhbCIsImxvZyIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNvY2tldCIsImVtaXQiLCJzZWxmIiwidXBkYXRlVGltZU9mZnNldCIsInRoZW4iLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsInJlcXVlc3QiLCJ0eXBlIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwib24iLCJOQUYiLCJ3cml0ZSIsImlkIiwiam9pblJvb20iLCJqb2luZWRUaW1lIiwic2V0SGVhcnRiZWF0VGltZXIiLCJzZXRUaW1lb3V0IiwiaW5pdGlhbEFuZExvYWREZXZpY2UiLCJpbml0aWFsUHJvZHVjZXJDb25zdW1lclRyYW5zcG9ydCIsImdhdGhlckV4aXN0aW5nUHJvZHVjZXJzIiwiZXJyb3IiLCJyZWNlaXZlZE9jY3VwYW50cyIsInJlYXNvbiIsInJlbW92ZUF1ZGlvU3RyZWFtIiwicmVtb3ZlVmlkZW9TdHJlYW0iLCJyZW1vdmVTY3JlZW5TdHJlYW0iLCJjb25uZWN0IiwiaWNlUGFyYW1ldGVycyIsInJlc3RhcnRJY2UiLCJwcm9kdWNlcklkIiwic29ja2V0SWQiLCJzdWJzY3JpYmVTdHJlYW0iLCJyZWNlaXZlRGF0YSIsInBhY2tldCIsImZyb20iLCJjbGllbnQiLCJyZW1vdGVJZCIsInB1c2giLCJjbGllbnRJZCIsImZpbHRlciIsImMiLCJjb25uZWN0ZWQiLCJpbmRleE9mIiwiYWRhcHRlcnMiLCJJU19DT05ORUNURUQiLCJOT1RfQ09OTkVDVEVEIiwidG8iLCJzZW5kRGF0YUd1YXJhbnRlZWQiLCJzZW5kaW5nIiwiYnJvYWRjYXN0RGF0YUd1YXJhbnRlZWQiLCJicm9hZGNhc3RpbmciLCJzdHJlYW0iLCJzdHJlYW1OYW1lIiwiY2FuUHJvZHVjZSIsInRyYWNrIiwiZ2V0VmlkZW9UcmFja3MiLCJwYXJhbXMiLCJhcHBEYXRhIiwicHJvZHVjZSIsInByb2R1Y2VyIiwiZ2V0QXVkaW9UcmFja3MiLCJwcm9kdWNlcnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ0YXJnZXRQcm9kdWNlciIsImZpbmQiLCJlYWNoIiwiY2xvc2UiLCJjbG9zZVJlcyIsImxlbmd0aCIsImUiLCJtc2ciLCJmb3JFYWNoIiwicGF1c2UiLCJyZXN1bWUiLCJlbmFibGVkIiwicmVzdW1lU3RyZWFtIiwicGF1c2VTdHJlYW0iLCJjbGllbnRTZW50VGltZSIsIkRhdGUiLCJub3ciLCJmZXRjaCIsImRvY3VtZW50IiwiaHJlZiIsIm1ldGhvZCIsImNhY2hlIiwicmVzIiwicHJlY2lzaW9uIiwic2VydmVyUmVjZWl2ZWRUaW1lIiwiaGVhZGVycyIsImdldCIsImdldFRpbWUiLCJjbGllbnRSZWNlaXZlZFRpbWUiLCJzZXJ2ZXJUaW1lIiwidGltZU9mZnNldCIsInJlZHVjZSIsImFjYyIsIm9mZnNldCIsInByb2R1Y2VyTGlzdCIsImdldENvbnN1bWVTdHJlYW0iLCJraW5kIiwiY29uc3VtZXJzdHJlYW0iLCJuZXdTdHJlYW0iLCJzdG9yZVZpZGVvU3RyZWFtIiwic3RvcmVBdWRpb1N0cmVhbSIsInN0b3JlU2NyZWVuU3RyZWFtIiwiX3Byb2R1Y2VySWQiLCJydHBDYXBhYmlsaXRpZXMiLCJyZXN1bHQiLCJydHBQYXJhbWV0ZXJzIiwiY29uc3VtZSIsImNvZGVjT3B0aW9ucyIsImNvbnN1bWVyIiwiTWVkaWFTdHJlYW0iLCJhZGRUcmFjayIsInJvdXRlclJ0cENhcGFiaWxpdGllcyIsIkRldmljZSIsImxvYWQiLCJmb3JjZVRjcCIsImNyZWF0ZVNlbmRUcmFuc3BvcnQiLCJzdWNjZXNzQ2FsbCIsImZhaWx1cmVDYWxsIiwiZHRsc1BhcmFtZXRlcnMiLCJzdGF0ZSIsImNyZWF0ZVJlY3ZUcmFuc3BvcnQiLCJyZWdpc3RlciJdLCJzb3VyY2VSb290IjoiIn0=