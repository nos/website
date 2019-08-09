webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Contributors/Contributors.js":
/*!*************************************************!*\
  !*** ./components/Contributors/Contributors.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Container */ "./components/Container/index.js");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Intro */ "./components/Intro/index.js");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Profile */ "./components/Contributors/Profile/index.js");
/* harmony import */ var _data_contributors_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/contributors.json */ "./data/contributors.json");
var _data_contributors_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/contributors.json */ "./data/contributors.json", 1);
/* harmony import */ var _Contributors_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Contributors.scss */ "./components/Contributors/Contributors.scss");
/* harmony import */ var _Contributors_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Contributors_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/jeroen.peeters/Documents/nos/website/components/Contributors/Contributors.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var Team = function Team() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _Contributors_scss__WEBPACK_IMPORTED_MODULE_6___default.a.contributors,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    name: "contributors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Intro__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _Contributors_scss__WEBPACK_IMPORTED_MODULE_6___default.a.large,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "nOS has had the pleasure of working with the following long-term collaborators. They have made a meaningful impact to the ecosystem and some of them share the roots in City of Zion.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Contributors_scss__WEBPACK_IMPORTED_MODULE_6___default.a.profiles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, _data_contributors_json__WEBPACK_IMPORTED_MODULE_5__.map(function (member) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Profile__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      key: member.name
    }, member, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ }),

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
/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./components/Contributors/Profile/index.js":
/*!**************************************************!*\
  !*** ./components/Contributors/Profile/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile */ "./components/Contributors/Profile/Profile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Profile__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Contributors/index.js":
/*!******************************************!*\
  !*** ./components/Contributors/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contributors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contributors */ "./components/Contributors/Contributors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Contributors__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Diagram/Diagram.js":
false,

/***/ "./components/Diagram/index.js":
false,

/***/ "./components/DownloadModal/DownloadModal.js":
false,

/***/ "./components/DownloadModal/index.js":
false,

/***/ "./components/Modal/Modal.js":
false,

/***/ "./components/Modal/index.js":
false,

/***/ "./components/Showcase/Card/Card.js":
false,

/***/ "./components/Showcase/Card/index.js":
false,

/***/ "./components/Showcase/Showcase.js":
false,

/***/ "./components/Showcase/index.js":
false,

/***/ "./data/contributors.json":
/*!********************************!*\
  !*** ./data/contributors.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"name":"Nikolaj Kuntner","image":"static/team-nikolaj.png","linkedin":"https://www.linkedin.com/in/nikolaj-kuntner-0138aa104"},{"name":"Alexandra Bergmayr","image":"static/team-alexandra.png","linkedin":"https://www.linkedin.com/in/alexandra-b-639773173/"},{"name":"Matt Huggins","image":"static/team-matt.png","linkedin":"https://linkedin.com/in/huggie"}];

/***/ }),

/***/ "./data/showcase.json":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero/index.js");
/* harmony import */ var _components_Partners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Partners */ "./components/Partners/index.js");
/* harmony import */ var _components_Token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Token */ "./components/Token/index.js");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Features */ "./components/Features/index.js");
/* harmony import */ var _components_Team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Team */ "./components/Team/index.js");
/* harmony import */ var _components_Contributors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Contributors */ "./components/Contributors/index.js");
/* harmony import */ var _components_Newsletter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Newsletter */ "./components/Newsletter/index.js");
var _jsxFileName = "/Users/jeroen.peeters/Documents/nos/website/pages/index.js";





 // import Showcase from '../components/Showcase';
// import Diagram from '../components/Diagram';



 // import Demo from '../components/Demo';

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fixed: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Partners__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Features__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Token__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Newsletter__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Team__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contributors__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.2c50222d62fdbb28ee24.hot-update.js.map