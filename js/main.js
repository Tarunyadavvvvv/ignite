/* ==========================================================================
   IGNITE — Page-agnostic behaviour that isn't owned by a component.
   Header/footer/back-to-top live in js/components/ignite-header.js and
   ignite-footer.js; the exercise list/detail UI lives in
   js/components/exercise-explorer.js. This file only handles things every
   page needs regardless of which components it uses.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Generic accordions (nutrition meal plans / FAQs) ---------- */
  document.querySelectorAll('.accordion-head').forEach(function (head) {
    head.addEventListener('click', function () {
      var item = head.closest('.accordion-item');
      item.classList.toggle('is-open');
    });
  });

  /* ---------- TOC scroll-spy (long-form nutrition pages) ---------- */
  var tocLinks = document.querySelectorAll('.toc a[href^="#"]');
  if (tocLinks.length) {
    var targets = [];
    tocLinks.forEach(function (link) {
      var section = document.getElementById(link.getAttribute('href').slice(1));
      if (section) targets.push({ link: link, section: section });
    });
    var spy = function () {
      var pos = window.scrollY + 140;
      var current = null;
      targets.forEach(function (t) {
        if (t.section.offsetTop <= pos) current = t;
      });
      tocLinks.forEach(function (l) { l.classList.remove('is-active'); });
      if (current) current.link.classList.add('is-active');
    };
    document.addEventListener('scroll', spy, { passive: true });
    spy();
  }
})();
