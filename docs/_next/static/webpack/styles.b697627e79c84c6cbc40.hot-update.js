webpackHotUpdate("styles",{

/***/ "./components/Contributors/Profile/Profile.scss":
/*!******************************************************!*\
  !*** ./components/Contributors/Profile/Profile.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"text--large":"text--large___3i4-5","profile":"profile___2HMX_","float1":"float1___3Hi0L","float2":"float2___1ZUAv","moveBottomTop":"moveBottomTop___3sZYa","barberpole":"barberpole___2QVc-"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1564609785333");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.b697627e79c84c6cbc40.hot-update.js.map