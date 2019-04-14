webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Token/Token.js":
/*!***********************************!*\
  !*** ./components/Token/Token.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Container */ "./components/Container/index.js");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Intro */ "./components/Intro/index.js");
/* harmony import */ var _Token_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Token.scss */ "./components/Token/Token.scss");
/* harmony import */ var _Token_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Token_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Card */ "./components/Token/Card/index.js");
/* harmony import */ var _data_token_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/token.json */ "./data/token.json");
var _data_token_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/token.json */ "./data/token.json", 1);
/* harmony import */ var _data_exchanges_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/exchanges.json */ "./data/exchanges.json");
var _data_exchanges_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/exchanges.json */ "./data/exchanges.json", 1);
var _jsxFileName = "/home/dean/Web/nos/website/components/Token/Token.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var Token = function Token() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_1__["JobPostingBanner"], {
    className: _Token_scss__WEBPACK_IMPORTED_MODULE_4___default.a.token,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    name: "token",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Intro__WEBPACK_IMPORTED_MODULE_3__["JobPostingBanner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: _Token_scss__WEBPACK_IMPORTED_MODULE_4___default.a.subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Token Utility"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "NOS Token"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _Token_scss__WEBPACK_IMPORTED_MODULE_4___default.a.large,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "NOS is the backbone of the nOS Virtual Operating System.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _Token_scss__WEBPACK_IMPORTED_MODULE_4___default.a.small,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Please note that we are still adding new utilities. Not all listed features are live yet."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Token_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cards,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, _data_token_json__WEBPACK_IMPORTED_MODULE_6__.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_5__["JobPostingBanner"], _extends({
      key: item.title
    }, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["JobPostingBanner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: _Token_scss__WEBPACK_IMPORTED_MODULE_4___default.a.subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Get NOS token"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Token_scss__WEBPACK_IMPORTED_MODULE_4___default.a.exchanges,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, _data_exchanges_json__WEBPACK_IMPORTED_MODULE_7__.map(function (exchange, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: "anchorelement-".concat(i),
      href: exchange.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      key: exchange.name,
      src: exchange.image,
      alt: exchange.name,
      width: exchange.width,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["JobPostingBanner"] = (Token);

/***/ })

})
//# sourceMappingURL=index.js.6e91adb320f1a96ee912.hot-update.js.map