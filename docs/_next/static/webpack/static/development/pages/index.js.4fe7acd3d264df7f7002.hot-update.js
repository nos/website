webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! what-input */ "./node_modules/what-input/dist/what-input.js");
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(what_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Navigation */ "./components/Navigation/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Footer */ "./components/Footer/index.js");
/* harmony import */ var _GDPRBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../GDPRBanner */ "./components/GDPRBanner/index.js");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Layout.scss */ "./components/Layout/Layout.scss");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Layout_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Context */ "./components/Layout/Context.js");
/* harmony import */ var _JobPostingBanner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../JobPostingBanner */ "./components/JobPostingBanner/index.js");

var _jsxFileName = "D:\\Web2\\website\\components\\Layout\\Layout.js";


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












var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      accepted: true,
      downloadUrl: 'https://github.com/nos/client/releases'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setDownloadUrl",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var resp, response, assets;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('https://api.github.com/repos/nos/client/releases/latest');

            case 3:
              resp = _context.sent;
              _context.next = 6;
              return resp.json();

            case 6:
              response = _context.sent;
              assets = response.assets;
              assets.forEach(function (asset) {
                var browserDownloadUrl = asset.browser_download_url;

                if (browserDownloadUrl.endsWith(".exe") && navigator.platform.indexOf('Win') !== -1 || browserDownloadUrl.endsWith(".dmg") && navigator.platform.indexOf('Mac') !== -1 || browserDownloadUrl.endsWith(".AppImage") && navigator.platform.indexOf('Linux') !== -1) {
                  _this.setState({
                    downloadUrl: browserDownloadUrl
                  });
                }
              });
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 11]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      _this.setDownloadUrl();

      if (!js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('gdpr')) {
        _this.setState({
          accepted: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderJobBanner", function () {
      if (_this.state.closed) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_JobPostingBanner__WEBPACK_IMPORTED_MODULE_11__["default"], {
        accepted: _this.state.closed,
        onClose: _this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderBanner", function () {
      if (_this.state.accepted) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GDPRBanner__WEBPACK_IMPORTED_MODULE_8__["default"], {
        accepted: _this.state.accepted,
        onAccept: _this.handleAccept,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleAccept", function () {
      _this.setState({
        accepted: true
      }, function () {
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('gdpr', 'true');
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function () {
      console.log('close');

      _this.setState({
        closed: true
      });
    });

    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_10__["Provider"], {
        value: this.state.downloadUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        httpEquiv: "x-ua-compatible",
        content: "ie=edge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "description",
        content: "nOS is the Virtual Operating for the Decentralized Internet. Build, discover, and use Decentralized Applications",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "og:image",
        content: "static/dapps-snapshot.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "static/logo-nos.png",
        type: "image/x-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, this.props.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fixed: this.props.fixed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), this.props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), this.renderBanner(), this.renderJobBanner()));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(Layout, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_5__["string"],
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_5__["bool"]
});

_defineProperty(Layout, "defaultProps", {
  title: 'nOS - Operating System for the Decentralized Internet',
  fixed: false
});



/***/ })

})
//# sourceMappingURL=index.js.4fe7acd3d264df7f7002.hot-update.js.map