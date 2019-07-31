webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Contributors/Profile/Profile.js":
/*!****************************************************!*\
  !*** ./components/Contributors/Profile/Profile.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card.scss */ "./components/Contributors/Profile/Card.scss");
/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Card_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jeroen.peeters/Documents/nos/website/components/Contributors/Profile/Profile.js";





var Profile = function Profile(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Card_scss__WEBPACK_IMPORTED_MODULE_3___default.a.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _Card_scss__WEBPACK_IMPORTED_MODULE_3___default.a.social,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.linkedin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: props.linkedin,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Card_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icon, _Card_scss__WEBPACK_IMPORTED_MODULE_3___default.a.linkedin),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }))));
};

Profile.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  role: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  image: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  experience: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]).isRequired,
  linkedin: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  twitter: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  github: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  dribbble: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
Profile.defaultProps = {
  linkedin: null,
  twitter: null,
  github: null,
  dribbble: null
};
/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=index.js.28e4210baed43e9f8043.hot-update.js.map