webpackHotUpdate("styles",{

/***/ "./components/SocialIcon/SocialIcon.scss":
/*!***********************************************!*\
  !*** ./components/SocialIcon/SocialIcon.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"text--large":"text--large___oaWku","socialIcon":"socialIcon___2LQEH","twitter":"twitter___2Zs3U","reddit":"reddit___18pvN","discord":"discord___1dxfd","telegram":"telegram___1s6Yw","medium":"medium___26E7Z","noschat":"noschat___3AWFa","float1":"float1___37n3T","float2":"float2___2Bz8G","moveBottomTop":"moveBottomTop___bs5r4","barberpole":"barberpole___3NGk7"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1565361429874");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.9e1c43b4eef0b725d836.hot-update.js.map