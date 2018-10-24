webpackHotUpdate("styles",{

/***/ "./components/Footer/Footer.scss":
/*!***************************************!*\
  !*** ./components/Footer/Footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"text--large":"text--large___2L-_x","left":"left___3XOvc","center":"center___3a7bc","right":"right___28KmE","email":"email___1-sPJ","float1":"float1___2UvYS","float2":"float2___3qzrt","moveBottomTop":"moveBottomTop___2yA5I","barberpole":"barberpole___3ESYu"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1540333803539");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.83053d7ad6cc912db9e9.hot-update.js.map