webpackHotUpdate("styles",{

/***/ "./components/Navigation/Navigation.scss":
/*!***********************************************!*\
  !*** ./components/Navigation/Navigation.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"text--large":"text--large___s9BkI","navigation":"navigation___lGW1A","fixed":"fixed___xUf4R","logo":"logo___1wZqy","navItems":"navItems___ENJRP","float1":"float1___l3sbV","float2":"float2___3SzQS","moveBottomTop":"moveBottomTop___wIz4V","barberpole":"barberpole___2XQfp"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1541877145807");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.c47380f0cb8f9d37ade3.hot-update.js.map