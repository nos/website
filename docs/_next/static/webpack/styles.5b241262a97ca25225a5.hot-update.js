webpackHotUpdate("styles",{

/***/ "./components/Contributors/Contributors.scss":
/*!***************************************************!*\
  !*** ./components/Contributors/Contributors.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"contributors":"contributors___3c2N0","large":"large___20BzV","text--large":"text--large___1Nmno","profiles":"profiles___2iqG5","cHero":"cHero___4x-WW","float1":"float1___pD8O1","float2":"float2___2AZN1","moveBottomTop":"moveBottomTop___3hnHM","barberpole":"barberpole___1ttwV"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1564609813365");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.5b241262a97ca25225a5.hot-update.js.map