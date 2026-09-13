/* ==========================================================================
   <ignite-footer> — the site's ONE footer + back-to-top button definition.
   Drop `<ignite-footer></ignite-footer>` right before </body> on any page.
   ========================================================================== */
(function () {
  'use strict';

  var ICON_BOLT = '<svg viewBox="0 0 24 24" fill="#fff"><path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z"/></svg>';
  var ICON_UP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 19V5M6 11l6-6 6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var ICON_COMMUNITY = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4A8.3 8.3 0 0 1 8 18.6L3 20l1.5-4.5A8.3 8.3 0 0 1 3.6 11 8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z" stroke-linejoin="round"/></svg>';
  var ICON_VIDEO = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="14" height="14" rx="3"/><path d="M17 10l4-2.5v9L17 14" stroke-linejoin="round"/></svg>';
  var ICON_UPDATES = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4l16 8-16 8V4Z" stroke-linejoin="round"/></svg>';
  var ICON_GALLERY = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 15l-5-5-11 11" stroke-linejoin="round"/></svg>';

  function col(title, links, base) {
    var items = links.map(function (l) {
      return '<li><a href="' + base + l.href + '">' + l.label + '</a></li>';
    }).join('');
    return '<div class="footer-col"><h4>' + title + '</h4><ul>' + items + '</ul></div>';
  }

  function template(base) {
    var exercisesA = col('Exercises', [
      { href: 'exercises/warmup.html', label: 'Warm-Up' },
      { href: 'exercises/mobility.html', label: 'Mobility &amp; Activation' },
      { href: 'exercises/home-workout.html', label: 'Home / Bodyweight' },
      { href: 'exercises/gym.html', label: 'Gym / Weighted' },
      { href: 'exercises/core.html', label: 'Core Training' }
    ], base);
    var exercisesB = col('More Training', [
      { href: 'exercises/cardio.html', label: 'Cardio' },
      { href: 'exercises/cooldown.html', label: 'Cool-Down' },
      { href: 'exercises/stretching.html', label: 'Stretching' },
      { href: 'exercises/yoga.html', label: 'Yoga' },
      { href: 'recovery/index.html', label: 'Recovery &amp; Rest' }
    ], base);
    var nutrition = col('Nutrition', [
      { href: 'nutrition/muscle-gain.html', label: 'Muscle Gain' },
      { href: 'nutrition/fat-loss.html', label: 'Fat Loss' },
      { href: 'nutrition/maintenance.html', label: 'Maintenance' },
      { href: 'nutrition/meal-plans.html', label: 'Meal Plans' },
      { href: 'nutrition/supplements.html', label: 'Supplements' }
    ], base);
    var platform = col('Platform', [
      { href: 'exercises/index.html', label: 'Exercise Library' },
      { href: 'nutrition/index.html', label: 'Nutrition Hub' },
      { href: 'recovery/index.html', label: 'Recovery' }
    ], base);

    return (
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer-grid">' +
            '<div class="footer-brand">' +
              '<a href="' + base + 'index.html" class="brand"><span class="brand-mark">' + ICON_BOLT + '</span>IGNITE</a>' +
              '<p>A modern training platform guiding you from warm-up to recovery — one honest rep at a time.</p>' +
              '<div class="footer-social">' +
                '<a href="#" aria-label="Community">' + ICON_COMMUNITY + '</a>' +
                '<a href="#" aria-label="Video">' + ICON_VIDEO + '</a>' +
                '<a href="#" aria-label="Updates">' + ICON_UPDATES + '</a>' +
                '<a href="#" aria-label="Gallery">' + ICON_GALLERY + '</a>' +
              '</div>' +
            '</div>' +
            exercisesA + exercisesB + nutrition + platform +
          '</div>' +
          '<div class="footer-bottom">' +
            '<span>© 2026 IGNITE Fitness. Built for progressive training — content expands weekly.</span>' +
            '<div class="footer-bottom-links"><a href="#">Disclaimer</a><a href="#">Privacy</a><a href="#">Contact</a></div>' +
          '</div>' +
        '</div>' +
      '</footer>' +
      '<button class="back-to-top" aria-label="Back to top">' + ICON_UP + '</button>'
    );
  }

  class IgniteFooterElement extends HTMLElement {
    connectedCallback() {
      var depth = /\/(exercises|nutrition|recovery)\//.test(window.location.pathname) ? 1 : 0;
      var base = depth ? '../' : '';
      this.innerHTML = template(base);
      this._wireBackToTop();
    }

    _wireBackToTop() {
      var btn = this.querySelector('.back-to-top');
      if (!btn) return;
      document.addEventListener('scroll', function () {
        if (window.scrollY > 600) btn.classList.add('is-visible');
        else btn.classList.remove('is-visible');
      }, { passive: true });
      btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  customElements.define('ignite-footer', IgniteFooterElement);
})();
