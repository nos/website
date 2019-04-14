webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/JobPostingBanner/JobPostingBanner.js":
/*!*********************************************************!*\
  !*** ./components/JobPostingBanner/JobPostingBanner.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobPostingBanner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Portal */ "./components/Portal/index.js");
/* harmony import */ var _JobPostingBanner_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JobPostingBanner.scss */ "./components/JobPostingBanner/JobPostingBanner.scss");
/* harmony import */ var _JobPostingBanner_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_JobPostingBanner_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Web2\\website\\components\\JobPostingBanner\\JobPostingBanner.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var JobPostingBanner =
/*#__PURE__*/
function (_React$Component) {
  _inherits(JobPostingBanner, _React$Component);

  function JobPostingBanner() {
    _classCallCheck(this, JobPostingBanner);

    return _possibleConstructorReturn(this, _getPrototypeOf(JobPostingBanner).apply(this, arguments));
  }

  _createClass(JobPostingBanner, [{
    key: "render",
    value: function render() {
      if (this.props.closed) {
        return null;
      }

      return this.renderBanner();
    }
  }, {
    key: "renderBanner",
    value: function renderBanner() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _JobPostingBanner_scss__WEBPACK_IMPORTED_MODULE_5___default.a.gdprBanner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "We're hiring! ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "https://docs.google.com/document/d/e/2PACX-1vSU0_vV4jrazlGeIKQdHjgPTKAZQenfr1qW5yjt9slUPWnakXx0CpmDwiMp9b7DTx_BWNcgh5N4wagd/pub",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Hybrid React & React Native Developer")), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: this.props.onClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Close"));
    }
  }]);

  return JobPostingBanner;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(JobPostingBanner, "propTypes", {
  closed: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"]
});

_defineProperty(JobPostingBanner, "defaultProps", {
  closed: false,
  onClose: lodash__WEBPACK_IMPORTED_MODULE_3__["noop"]
});



/***/ })

})
//# sourceMappingURL=index.js.3755a0bcea9192c28f8b.hot-update.js.map