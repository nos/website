webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Team/Card/Card.js":
/*!**************************************!*\
  !*** ./components/Team/Card/Card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card.scss */ "./components/Team/Card/Card.scss");
/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Card_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/dean/Web/nos/website/components/Team/Card/Card.js";





var Card = function Card(props) {
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
  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.role), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _Card_scss__WEBPACK_IMPORTED_MODULE_3___default.a.social,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.linkedin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
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
  })), props.twitter && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: props.twitter,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Card_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icon, _Card_scss__WEBPACK_IMPORTED_MODULE_3___default.a.twitter),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), props.github && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: props.github,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Card_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icon, _Card_scss__WEBPACK_IMPORTED_MODULE_3___default.a.github),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), props.dribbble && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: props.dribbble,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Card_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icon, _Card_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dribbble),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _Card_scss__WEBPACK_IMPORTED_MODULE_3___default.a.experience,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.experience.map(function (exp) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: exp,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, exp);
  })));
};

Card.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  role: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  image: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  experience: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]).isRequired,
  linkedin: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  twitter: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  github: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  dribbble: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
Card.defaultProps = {
  linkedin: null,
  twitter: null,
  github: null,
  dribbble: null
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.8cba433b765a4da74526.hot-update.js.map