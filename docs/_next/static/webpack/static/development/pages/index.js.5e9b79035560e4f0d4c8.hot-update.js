webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Showcase/Card/Card.js":
/*!******************************************!*\
  !*** ./components/Showcase/Card/Card.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DownloadModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../DownloadModal */ "./components/DownloadModal/index.js");
/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Card.scss */ "./components/Showcase/Card/Card.scss");
/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Card_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/dean/Web/nos/website/components/Showcase/Card/Card.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Card =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Card)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      target: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderModal", function () {
      if (!_this.state.target) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DownloadModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
        target: _this.state.target,
        onClose: _this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOpen", function (event) {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(window.NOS)) {
        event.preventDefault();

        _this.setState({
          target: event.target.href
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function () {
      _this.setState({
        target: null
      });
    });

    return _this;
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.handleOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, this.props.url, " target=\"_blank\" className=", classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Card_scss__WEBPACK_IMPORTED_MODULE_5___default.a.card, _Card_scss__WEBPACK_IMPORTED_MODULE_5___default.a[this.props.color], _defineProperty({}, _Card_scss__WEBPACK_IMPORTED_MODULE_5___default.a.primary, this.props.primary)), ">", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Card_scss__WEBPACK_IMPORTED_MODULE_5___default.a.main,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Card_scss__WEBPACK_IMPORTED_MODULE_5___default.a.overlay,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, this.props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _Card_scss__WEBPACK_IMPORTED_MODULE_5___default.a.large,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.props.children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.image,
        alt: this.props.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Card_scss__WEBPACK_IMPORTED_MODULE_5___default.a.meta,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: this.props.url,
        target: "_blank",
        onClick: this.handleOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.props.url), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: this.props.code,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Code")), this.renderModal());
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Card, "propTypes", {
  primary: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  color: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  name: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  image: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  code: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired
});

_defineProperty(Card, "defaultProps", {
  primary: false,
  color: null
});



/***/ })

})
//# sourceMappingURL=index.js.5e9b79035560e4f0d4c8.hot-update.js.map