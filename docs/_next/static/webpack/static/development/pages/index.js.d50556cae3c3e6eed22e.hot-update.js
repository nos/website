webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Newsletter/Newsletter.js":
/*!*********************************************!*\
  !*** ./components/Newsletter/Newsletter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Newsletter; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Container */ "./components/Container/index.js");
/* harmony import */ var _Newsletter_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Newsletter.scss */ "./components/Newsletter/Newsletter.scss");
/* harmony import */ var _Newsletter_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Newsletter_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SocialIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SocialIcon */ "./components/SocialIcon/index.js");

var _jsxFileName = "D:\\Web2\\website\\components\\Newsletter\\Newsletter.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Newsletter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Newsletter, _React$Component);

  function Newsletter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Newsletter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Newsletter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      email: '',
      disabled: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (field) {
      return function (event) {
        _this.setState(_defineProperty({}, field, event.target.value));
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                event.persist();

                _this.setState({
                  disabled: true
                },
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _this.submit(event);

                        case 2:
                          return _context.abrupt("return", _context.sent);

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                })));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
        var email, _event$target, action, method, body, response, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                email = _this.state.email;
                _event$target = event.target, action = _event$target.action, method = _event$target.method;
                body = new FormData();
                body.append('email', email);
                body.append('boolean', 'true');
                body.append('list', 'cqsGQa39CKWab3nHnQyeCA');
                _context3.prev = 6;
                _context3.next = 9;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(action, {
                  method: method,
                  body: body
                });

              case 9:
                response = _context3.sent;
                _context3.next = 12;
                return response.text();

              case 12:
                data = _context3.sent;

                if (data) {
                  _context3.next = 15;
                  break;
                }

                throw new Error('Empty server response.');

              case 15:
                alert(_this.translateResponse(data));
                _context3.next = 21;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](6);
                alert("Sorry, but an unexpected error was encountered. Please try again later. (".concat(_context3.t0.message, ")"));

              case 21:
                _context3.prev = 21;

                _this.setState({
                  disabled: false
                });

                return _context3.finish(21);

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[6, 18, 21, 24]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "translateResponse", function (data) {
      switch (data) {
        case "Invalid list ID.":
          return "Invalid list ID.";

        case "Invalid email address.":
          return "Your email address is invalid.";

        case "Some fields are missing.":
          return "Please enter your email address.";

        case "Already subscribed.":
          return "You're already subscribed!";

        default:
          return "Check your e-mail for a confirmation link.";
      }
    });

    return _this;
  }

  _createClass(Newsletter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: _Newsletter_scss__WEBPACK_IMPORTED_MODULE_5___default.a.newsletter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: _Newsletter_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _Newsletter_scss__WEBPACK_IMPORTED_MODULE_5___default.a.titleLeft,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Stay in touch"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: _Newsletter_scss__WEBPACK_IMPORTED_MODULE_5___default.a.large,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Sign up to the newsletter to get our latest news & updates. Get engaged with our community.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _Newsletter_scss__WEBPACK_IMPORTED_MODULE_5___default.a.socialItems,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _Newsletter_scss__WEBPACK_IMPORTED_MODULE_5___default.a.newsletterForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        className: _Newsletter_scss__WEBPACK_IMPORTED_MODULE_5___default.a.fields,
        action: "https://email.macrowish.com/subscribe",
        method: "post",
        disabled: this.state.disabled,
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "email",
        name: "email",
        placeholder: "Your Email",
        required: true,
        "aria-required": "true",
        value: this.state.email,
        onChange: this.handleChange('email'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "submit",
        name: "subscribe",
        value: "Sign up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _Newsletter_scss__WEBPACK_IMPORTED_MODULE_5___default.a.socialIcons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SocialIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "twitter",
        href: "https://twitter.com/nOSplatform",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SocialIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "reddit",
        href: "https://www.reddit.com/r/nOSplatform",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SocialIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "noschat",
        href: "https://nos.chat/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SocialIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "telegram",
        href: "https://t.me/nOSchat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SocialIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "medium",
        href: "https://medium.com/nos-io",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }))))));
    }
  }]);

  return Newsletter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.d50556cae3c3e6eed22e.hot-update.js.map