webpackHotUpdate("styles",{

/***/ "./components/DownloadButton/DownloadButton.scss":
/*!*******************************************************!*\
  !*** ./components/DownloadButton/DownloadButton.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"text--large":"text--large___3ABsX","downloadButton":"downloadButton___3t48t","bright":"bright___T1VAx","float1":"float1___1qMyx","float2":"float2___1wcQ2","moveBottomTop":"moveBottomTop___f0qgN","barberpole":"barberpole___1jrYP"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1551383509920");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.20cfb831efe6347e54f9.hot-update.js.map