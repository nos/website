webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DownloadButton/DownloadButton.js":
/*!*****************************************************!*\
  !*** ./components/DownloadButton/DownloadButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DownloadButton; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DownloadButton_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DownloadButton.scss */ "./components/DownloadButton/DownloadButton.scss");
/* harmony import */ var _DownloadButton_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DownloadButton_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/dean/Web/nos/website/components/DownloadButton/DownloadButton.js";


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





var DownloadButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DownloadButton, _React$Component);

  function DownloadButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DownloadButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DownloadButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      downloadUrl: "https://github.com/nos/client/releases"
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setDownloadUrl",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var downloadUrl, resp, response, assets;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              downloadUrl = "https://github.com/nos/client/releases";
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
                if (asset.url.endsWith(".exe") && navigator.platform.indexOf('Win') !== -1 || asset.url.endsWith(".dmg") && navigator.platform.indexOf('Mac') !== -1 || asset.url.endsWith(".AppImage") && navigator.platform.indexOf('Linux') !== -1) {
                  _this.setState({
                    downloadUrl: downloadUrl
                  });
                }
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    return _this;
  }

  _createClass(DownloadButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.downloadUrl === "https://github.com/nos/client/releases") {
        this.setDownloadUrl();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('button', _DownloadButton_scss__WEBPACK_IMPORTED_MODULE_4___default.a.downloadButton, this.props.className),
        href: this.state.downloadUrl,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.props.label);
    }
  }]);

  return DownloadButton;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


DownloadButton.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  label: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
};
DownloadButton.defaultProps = {
  className: null,
  label: 'Download Now'
};

/***/ })

})
//# sourceMappingURL=index.js.c6f81aa44c8747ce2de6.hot-update.js.map