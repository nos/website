webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Showcase/Showcase.js":
/*!*****************************************!*\
  !*** ./components/Showcase/Showcase.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Showcase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Container */ "./components/Container/index.js");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Intro */ "./components/Intro/index.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ "./components/Showcase/Card/index.js");
/* harmony import */ var _data_showcase_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/showcase.json */ "./data/showcase.json");
var _data_showcase_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/showcase.json */ "./data/showcase.json", 1);
/* harmony import */ var _Showcase_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Showcase.scss */ "./components/Showcase/Showcase.scss");
/* harmony import */ var _Showcase_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Showcase_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/dean/Web/nos/website/components/Showcase/Showcase.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var PRIMARY_COUNT = 2;

var without = function without(obj) {
  var copy = _objectSpread({}, obj);

  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  keys.forEach(function (key) {
    delete copy[key];
  });
  return copy;
};

var Showcase =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Showcase, _React$Component);

  function Showcase() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Showcase);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Showcase)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderApp", function (app) {
      var primary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
        key: app.name,
        primary: primary
      }, without(app, 'description'), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), app.description);
    });

    return _this;
  }

  _createClass(Showcase, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: _Showcase_scss__WEBPACK_IMPORTED_MODULE_6___default.a.showcase,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        name: "showcases",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Intro__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: _Showcase_scss__WEBPACK_IMPORTED_MODULE_6___default.a.intro,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Decentralized Apps Showcase"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _Showcase_scss__WEBPACK_IMPORTED_MODULE_6___default.a.large,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/nos/client/releases",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Download nOS Client"), ' ', "to check out early nOSNet Community dApps.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Showcase_scss__WEBPACK_IMPORTED_MODULE_6___default.a.cards,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, _data_showcase_json__WEBPACK_IMPORTED_MODULE_5__.slice(0, PRIMARY_COUNT).map(function (app) {
        return _this2.renderApp(app, true);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Showcase_scss__WEBPACK_IMPORTED_MODULE_6___default.a.cards,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, _data_showcase_json__WEBPACK_IMPORTED_MODULE_5__.slice(PRIMARY_COUNT).map(function (app) {
        return _this2.renderApp(app);
      }))));
    }
  }]);

  return Showcase;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.d3dcc267d156b776cccc.hot-update.js.map