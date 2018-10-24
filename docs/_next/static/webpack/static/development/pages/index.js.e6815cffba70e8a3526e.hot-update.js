webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/IcoBanner/IcoBanner.js":
/*!*******************************************!*\
  !*** ./components/IcoBanner/IcoBanner.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Section */ "./components/Section/index.js");
/* harmony import */ var _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IcoBanner.scss */ "./components/IcoBanner/IcoBanner.scss");
/* harmony import */ var _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/dean/Web/nos/website/components/IcoBanner/IcoBanner.js";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var STAGES = [{
  name: 'Private Sale',
  active: false,
  finished: true
}, {
  name: 'Whitelist Lottery',
  active: false,
  finished: true
}, {
  name: 'KYC',
  active: true,
  finished: false
}, {
  name: 'Public Sale',
  active: false,
  finished: false
}];

var IcoBanner = function IcoBanner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icoBanner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Our Token Sale is Soon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttonWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.youtube.com/watch?v=2gT2RdsT6k8",
    target: "_blank",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.button, _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttonPrimary),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "KYC Instructions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.youtube.com/watch?v=CcwBNpAfRiU",
    target: "_blank",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.button, _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttonSecondary),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "nOS Announcement Video")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.progressContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.progressIndicatorWrap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.progressIndicatorItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, STAGES.map(function (_ref) {
    var _classNames;

    var name = _ref.name,
        active = _ref.active,
        finished = _ref.finished;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: name,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.progressItem, (_classNames = {}, _defineProperty(_classNames, _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.active, active), _defineProperty(_classNames, _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.finished, finished), _classNames)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.progressLabel,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, name));
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.social,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/nOSplatform",
    target: "_blank",
    className: _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socialTwitter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://medium.com/nos-io",
    target: "_blank",
    className: _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socialMedium,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://t.me/nOSplatform",
    target: "_blank",
    className: _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socialTelegramMain,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://t.me/nOSAnnouncements",
    target: "_blank",
    className: _IcoBanner_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socialTelegramAnn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IcoBanner);

/***/ })

})
//# sourceMappingURL=index.js.e6815cffba70e8a3526e.hot-update.js.map