webpackHotUpdate("styles",{

/***/ "./components/Navigation/Navigation.scss":
/*!***********************************************!*\
  !*** ./components/Navigation/Navigation.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"text--large":"text--large___3REeS","navigation":"navigation___1xNl6","fixed":"fixed___b9qbd","logo":"logo___3fN8p","navItems":"navItems___2SYKh","starGazer":"starGazer___3ZTj-","float1":"float1___IMWXY","float2":"float2___1OqnS","moveBottomTop":"moveBottomTop___IiNS6","barberpole":"barberpole___2amjX"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1551384334181");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.875842bd2fa091b76c47.hot-update.js.map