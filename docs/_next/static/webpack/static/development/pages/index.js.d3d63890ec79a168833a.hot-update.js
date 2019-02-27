webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DownloadButton/DownloadButton.js":
/*!*****************************************************!*\
  !*** ./components/DownloadButton/DownloadButton.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DownloadButton_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DownloadButton.scss */ "./components/DownloadButton/DownloadButton.scss");
/* harmony import */ var _DownloadButton_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DownloadButton_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Layout_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layout/Context */ "./components/Layout/Context.js");
var _jsxFileName = "/Users/jeroenpeeters/Documents/Development/Neo/nOS/website/components/DownloadButton/DownloadButton.js";






var DownloadButton = function DownloadButton(_ref) {
  var className = _ref.className,
      label = _ref.label;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_Context__WEBPACK_IMPORTED_MODULE_4__["Consumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, function (downloadUrl) {
    return console.log(downloadUrl) || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('button', _DownloadButton_scss__WEBPACK_IMPORTED_MODULE_3___default.a.downloadButton, className),
      href: downloadUrl,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, label);
  });
};

DownloadButton.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  label: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
DownloadButton.defaultProps = {
  className: null,
  label: 'Download Now'
};

/***/ }),

/***/ "./components/DownloadButton/index.js":
/*!********************************************!*\
  !*** ./components/DownloadButton/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DownloadButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DownloadButton */ "./components/DownloadButton/DownloadButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DownloadButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

})
//# sourceMappingURL=index.js.d3d63890ec79a168833a.hot-update.js.map