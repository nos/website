webpackHotUpdate("styles",{

/***/ "./components/Hero/Hero.scss":
/*!***********************************!*\
  !*** ./components/Hero/Hero.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"hero":"hero___3auCk","large":"large___3MpfL","text--large":"text--large___3fzrK","download":"download___kOgFV","meta":"meta___25fZo","social":"social___3xSeV","productShot":"productShot___1b6AD","float1":"float1___42jQA","float2":"float2___srDco","moveBottomTop":"moveBottomTop___2cZDe","barberpole":"barberpole___sse0C"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1541877313253");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.52aa4aeb98bdd3413240.hot-update.js.map