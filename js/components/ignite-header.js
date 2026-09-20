/* ==========================================================================
   <ignite-header> — the site's ONE header definition.
   Drop `<ignite-header></ignite-header>` right after <body> on any page —
   no attributes needed. It figures out the relative link depth itself, so
   nothing is hard-coded per page. Renders into light DOM (no shadow root)
   so the existing component CSS (site-header, brand, ...) applies unchanged.

   Just a logo, everywhere — no nav links or CTA button, since every
   destination is already reachable from the home page's Quick Links and
   each page's own footer. It floats transparently over whatever is at the
   top of the page (hero image or page banner) instead of reserving its
   own solid bar, and scrolls away with that top section rather than
   sticking over the content underneath it.
   ========================================================================== */
(function () {
  'use strict';

  var ICON_BOLT = '<svg viewBox="0 0 24 24" fill="#fff"><path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z"/></svg>';

  class IgniteHeaderElement extends HTMLElement {
    connectedCallback() {
      var depth = /\/(exercises|nutrition|recovery)\//.test(window.location.pathname) ? 1 : 0;
      var base = depth ? '../' : '';
      this.innerHTML =
        '<header class="site-header">' +
          '<a href="' + base + 'index.html" class="brand"><span class="brand-mark">' + ICON_BOLT + '</span>IGNITE</a>' +
        '</header>';
    }
  }

  customElements.define('ignite-header', IgniteHeaderElement);
})();
