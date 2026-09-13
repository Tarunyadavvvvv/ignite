/* ==========================================================================
   <ignite-header> — the site's ONE header/nav/mobile-drawer definition.
   Drop `<ignite-header></ignite-header>` right after <body> on any page —
   no attributes needed. It figures out relative link paths and which nav
   item is "active" from the current URL, so nothing is hard-coded per page.
   Renders into light DOM (no shadow root) so the existing component CSS
   (site-header, nav-link, dropdown, mobile-nav, ...) applies unchanged.
   ========================================================================== */
(function () {
  'use strict';

  var ICON_CHEV = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var ICON_BOLT = '<svg viewBox="0 0 24 24" fill="#fff"><path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z"/></svg>';

  var EXERCISE_LINKS = [
    { num: '1', href: 'exercises/warmup.html', title: 'Warm-Up', desc: 'Raise heart rate, prime joints' },
    { num: '2', href: 'exercises/mobility.html', title: 'Mobility &amp; Activation', desc: 'Unlock range of motion' },
    { num: '3', href: 'exercises/home-workout.html', title: 'Home / Bodyweight', desc: 'No equipment needed' },
    { num: '4', href: 'exercises/gym.html', title: 'Gym / Weighted', desc: 'Barbell &amp; machine lifts' },
    { num: '5', href: 'exercises/core.html', title: 'Core Training', desc: 'Build a bulletproof midline' },
    { num: '6', href: 'exercises/cardio.html', title: 'Cardio', desc: 'Conditioning &amp; endurance' },
    { num: '7', href: 'exercises/cooldown.html', title: 'Cool-Down', desc: 'Bring the heart rate back down' },
    { num: '8', href: 'exercises/stretching.html', title: 'Stretching', desc: 'Static holds for flexibility' },
    { num: '9', href: 'exercises/yoga.html', title: 'Yoga', desc: 'Breath, balance, control' }
  ];

  var NUTRITION_LINKS = [
    { num: '↑', href: 'nutrition/muscle-gain.html', title: 'Muscle Gain', desc: 'Eat to build size &amp; strength' },
    { num: '↓', href: 'nutrition/fat-loss.html', title: 'Fat Loss', desc: 'Sustainable deficit strategies' },
    { num: '=', href: 'nutrition/maintenance.html', title: 'Maintenance', desc: 'Hold steady, stay consistent' },
    { num: '🍽', href: 'nutrition/meal-plans.html', title: 'Meal Plans', desc: 'Sample daily structures' },
    { num: '⚡', href: 'nutrition/pre-post-workout.html', title: 'Pre/Post-Workout', desc: 'Fuel &amp; recovery timing' },
    { num: '+', href: 'nutrition/supplements.html', title: 'Supplements', desc: 'What actually helps' }
  ];

  function dropdownLinks(items, base) {
    return items.map(function (l) {
      return '<a class="dropdown-link" href="' + base + l.href + '">' +
        '<span class="dd-num">' + l.num + '</span>' +
        '<span><span class="dd-title">' + l.title + '</span><span class="dd-desc">' + l.desc + '</span></span>' +
        '</a>';
    }).join('');
  }

  function mobileSubLinks(items, base) {
    return items.map(function (l) {
      var label = /^\d$/.test(l.num) ? l.num + '. ' + l.title : l.title;
      return '<a href="' + base + l.href + '">' + label + '</a>';
    }).join('');
  }

  function template(base) {
    return (
      '<header class="site-header">' +
        '<div class="container nav-inner">' +
          '<a href="' + base + 'index.html" class="brand"><span class="brand-mark">' + ICON_BOLT + '</span>IGNITE</a>' +
          '<nav class="main-nav" aria-label="Primary">' +
            '<div class="nav-item"><a href="' + base + 'index.html" class="nav-link" data-key="home">Home</a></div>' +
            '<div class="nav-item">' +
              '<a href="' + base + 'exercises/index.html" class="nav-link" data-key="exercises">Exercises' + ICON_CHEV + '</a>' +
              '<div class="dropdown">' +
                dropdownLinks(EXERCISE_LINKS, base) +
                '<div class="dropdown-foot"><span class="muted" style="font-size:.82rem;">72+ exercises across 9 categories</span><a href="' + base + 'exercises/index.html" class="btn btn-ghost btn-sm">View all →</a></div>' +
              '</div>' +
            '</div>' +
            '<div class="nav-item">' +
              '<a href="' + base + 'nutrition/index.html" class="nav-link" data-key="nutrition">Nutrition' + ICON_CHEV + '</a>' +
              '<div class="dropdown" style="min-width:520px;">' +
                dropdownLinks(NUTRITION_LINKS, base) +
                '<div class="dropdown-foot"><span class="muted" style="font-size:.82rem;">Nutrition, uncomplicated</span><a href="' + base + 'nutrition/index.html" class="btn btn-ghost btn-sm">View all →</a></div>' +
              '</div>' +
            '</div>' +
            '<div class="nav-item"><a href="' + base + 'recovery/index.html" class="nav-link" data-key="recovery">Recovery</a></div>' +
          '</nav>' +
          '<div class="nav-cta">' +
            '<a href="' + base + 'exercises/index.html" class="btn btn-primary btn-sm">Browse Exercises</a>' +
          '</div>' +
          '<button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
        '</div>' +
      '</header>' +
      '<div class="mobile-nav">' +
        '<a href="' + base + 'index.html" class="nav-link" data-key="home">Home</a>' +
        '<div class="mobile-group">' +
          '<div class="mobile-group-head">Exercises' + ICON_CHEV + '</div>' +
          '<div class="mobile-sub">' +
            '<a href="' + base + 'exercises/index.html">All Categories</a>' +
            mobileSubLinks(EXERCISE_LINKS, base) +
          '</div>' +
        '</div>' +
        '<div class="mobile-group">' +
          '<div class="mobile-group-head">Nutrition' + ICON_CHEV + '</div>' +
          '<div class="mobile-sub">' +
            '<a href="' + base + 'nutrition/index.html">Nutrition Overview</a>' +
            mobileSubLinks(NUTRITION_LINKS, base) +
          '</div>' +
        '</div>' +
        '<a href="' + base + 'recovery/index.html" class="nav-link" data-key="recovery">Recovery &amp; Rest</a>' +
        '<div class="mobile-nav-cta">' +
          '<a href="' + base + 'exercises/index.html" class="btn btn-primary btn-block">Browse Exercises</a>' +
        '</div>' +
      '</div>'
    );
  }

  function activeKey() {
    var path = window.location.pathname;
    if (/\/exercises\//.test(path)) return 'exercises';
    if (/\/nutrition\//.test(path)) return 'nutrition';
    if (/\/recovery\//.test(path)) return 'recovery';
    return 'home';
  }

  class IgniteHeaderElement extends HTMLElement {
    connectedCallback() {
      var depth = /\/(exercises|nutrition|recovery)\//.test(window.location.pathname) ? 1 : 0;
      var base = depth ? '../' : '';
      this.innerHTML = template(base);

      var key = activeKey();
      this.querySelectorAll('[data-key="' + key + '"]').forEach(function (el) {
        el.classList.add('is-active');
      });

      this._wireHeader();
      this._wireMobileNav();
    }

    _wireHeader() {
      var header = this.querySelector('.site-header');
      if (!header) return;
      function onScroll() {
        if (window.scrollY > 8) header.classList.add('is-scrolled');
        else header.classList.remove('is-scrolled');
      }
      document.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    _wireMobileNav() {
      var root = this;
      var navToggle = this.querySelector('.nav-toggle');
      var mobileNav = this.querySelector('.mobile-nav');
      if (!navToggle || !mobileNav) return;

      navToggle.addEventListener('click', function () {
        var open = navToggle.classList.toggle('is-open');
        mobileNav.classList.toggle('is-open', open);
        document.body.style.overflow = open ? 'hidden' : '';
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      mobileNav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          navToggle.classList.remove('is-open');
          mobileNav.classList.remove('is-open');
          document.body.style.overflow = '';
        });
      });

      root.querySelectorAll('.mobile-group-head').forEach(function (head) {
        head.addEventListener('click', function () {
          var group = head.closest('.mobile-group');
          var wasOpen = group.classList.contains('is-open');
          root.querySelectorAll('.mobile-group.is-open').forEach(function (g) {
            if (g !== group) g.classList.remove('is-open');
          });
          group.classList.toggle('is-open', !wasOpen);
        });
      });
    }
  }

  customElements.define('ignite-header', IgniteHeaderElement);
})();
