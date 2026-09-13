/* ==========================================================================
   <ignite-exercise-explorer category="gym"> — the reusable list+detail
   exercise browser. Reads window.EXERCISE_DATA[category] (exercise-data.js
   must load before this file). Clicking a list item swaps the detail panel
   in place — no page navigation. Deep-links via the URL hash (#slug), which
   is how other pages point at one specific exercise.
   ========================================================================== */
(function () {
  'use strict';

  var CATEGORY_META = {
    warmup: { emoji: '🔥', accent: 'pink' },
    mobility: { emoji: '🤸', accent: 'orange' },
    'home-workout': { emoji: '💪', accent: 'green' },
    gym: { emoji: '🏋️', accent: 'violet' },
    core: { emoji: '🎯', accent: 'pink' },
    cardio: { emoji: '🏃', accent: 'cyan' },
    cooldown: { emoji: '🌬️', accent: 'amber' },
    stretching: { emoji: '🙆', accent: 'violet' },
    yoga: { emoji: '🧘', accent: 'green' }
  };

  var ICON_SEARCH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.4-4.4" stroke-linecap="round"/></svg>';
  var ICON_CAMERA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 8h3l2-2h6l2 2h3v11H4z" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="13.5" r="3.2"/></svg>';
  var ICON_SOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 8v5l3 2" stroke-linecap="round"/></svg>';
  var ICON_CHEV_RIGHT = '<svg class="eli-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  class ExerciseExplorer extends HTMLElement {
    connectedCallback() {
      this._category = this.getAttribute('category');
      this._meta = CATEGORY_META[this._category] || { emoji: '💪', accent: 'pink' };
      this._exercises = (window.EXERCISE_DATA && window.EXERCISE_DATA[this._category]) || [];
      this._depth = /\/(exercises|nutrition|recovery)\//.test(window.location.pathname) ? 1 : 0;
      this._base = this._depth ? '../' : '';
      this._query = '';
      this._difficulty = 'all';

      var hashSlug = window.location.hash.replace('#', '');
      var initial = this._exercises.find(function (e) { return e.slug === hashSlug; }) || this._exercises[0];
      this._selected = initial ? initial.slug : null;

      this.setAttribute('data-accent', this._meta.accent);
      this.innerHTML =
        '<div class="exercise-explorer">' +
          '<div class="explorer-sidebar">' +
            '<div class="filter-bar">' +
              '<div class="filter-search">' + ICON_SEARCH + '<input type="text" placeholder="Search…" aria-label="Search exercises"></div>' +
              '<button type="button" class="filter-chip is-active" data-filter="all">All</button>' +
              '<button type="button" class="filter-chip" data-filter="beginner">Beginner</button>' +
              '<button type="button" class="filter-chip" data-filter="intermediate">Intermediate</button>' +
              '<button type="button" class="filter-chip" data-filter="advanced">Advanced</button>' +
            '</div>' +
            '<div class="exercise-list" role="listbox" tabindex="0"></div>' +
          '</div>' +
          '<div class="exercise-detail"></div>' +
        '</div>';

      this._listEl = this.querySelector('.exercise-list');
      this._detailEl = this.querySelector('.exercise-detail');
      this._searchInput = this.querySelector('.filter-search input');
      this._chips = this.querySelectorAll('.filter-chip');

      this._wire();
      this._renderList();
      this._renderDetail();
    }

    _wire() {
      var self = this;

      this._searchInput.addEventListener('input', function () {
        self._query = self._searchInput.value.trim().toLowerCase();
        self._renderList();
      });

      this._chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
          self._chips.forEach(function (c) { c.classList.remove('is-active'); });
          chip.classList.add('is-active');
          self._difficulty = chip.getAttribute('data-filter');
          self._renderList();
        });
      });

      this._listEl.addEventListener('click', function (e) {
        var item = e.target.closest('.exercise-list-item');
        if (!item) return;
        self._select(item.getAttribute('data-slug'));
      });

      this._listEl.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
        e.preventDefault();
        var items = Array.prototype.slice.call(self._listEl.querySelectorAll('.exercise-list-item'));
        if (!items.length) return;
        var idx = items.findIndex(function (el) { return el.classList.contains('is-active'); });
        idx = e.key === 'ArrowDown' ? Math.min(idx + 1, items.length - 1) : Math.max(idx - 1, 0);
        self._select(items[idx].getAttribute('data-slug'));
      });
    }

    _visibleExercises() {
      var q = this._query, diff = this._difficulty;
      return this._exercises.filter(function (ex) {
        var matchesQ = !q || ex.name.toLowerCase().indexOf(q) !== -1;
        var matchesDiff = diff === 'all' || ex.difficulty === diff;
        return matchesQ && matchesDiff;
      });
    }

    _select(slug) {
      this._selected = slug;
      try { history.replaceState(null, '', window.location.pathname + '#' + slug); } catch (e) {}
      this._renderList();
      this._renderDetail();
    }

    _renderList() {
      var self = this;
      var visible = this._visibleExercises();

      if (!visible.length) {
        this._listEl.innerHTML = '<div class="filter-empty">' + ICON_SEARCH + '<p>No exercises match your filters.</p></div>';
        return;
      }

      this._listEl.innerHTML = visible.map(function (ex) {
        var isActive = ex.slug === self._selected;
        var thumb = (ex.images && ex.images.length)
          ? '<span class="eli-thumb"><img src="' + self._base + ex.images[0] + '" alt=""></span>'
          : '<span class="eli-thumb">' + self._meta.emoji + '</span>';
        return (
          '<button type="button" class="exercise-list-item' + (isActive ? ' is-active' : '') + '" data-slug="' + ex.slug + '" role="option" aria-selected="' + isActive + '">' +
            thumb +
            '<span class="eli-body">' +
              '<span class="eli-name">' + esc(ex.name) + '</span>' +
              '<span class="eli-meta"><span class="dot" style="background:var(--diff-' + ex.difficulty + ')"></span>' + cap(ex.difficulty) + ' · ' + esc(ex.equipment) + '</span>' +
            '</span>' +
            ICON_CHEV_RIGHT +
          '</button>'
        );
      }).join('');
    }

    _renderDetail() {
      var ex = this._exercises.find((e) => e.slug === this._selected);
      if (!ex) {
        this._detailEl.innerHTML = '<div class="exercise-detail-soon">' + ICON_SOON + '<p>No exercises here yet.</p></div>';
        return;
      }

      var metaTags =
        '<span class="badge badge-' + ex.difficulty + '">' + ex.difficulty + '</span>' +
        '<span class="tag">' + esc(ex.equipment) + '</span>' +
        '<span class="tag">' + esc(ex.duration) + '</span>';

      var gallery;
      if (ex.images && ex.images.length) {
        gallery = '<div class="exercise-detail-gallery">' + ex.images.map((src) =>
          '<div class="model-frame has-image"><img src="' + this._base + src + '" alt="' + esc(ex.name) + ' demonstration"></div>'
        ).join('') + '</div>';
      } else {
        gallery = '<div class="exercise-detail-gallery"><div class="model-frame">' + ICON_CAMERA + '<span class="label">3D model coming soon</span></div></div>';
      }

      var body;
      if (ex.steps && ex.steps.length) {
        var stepsHtml =
          '<div class="exercise-detail-steps"><h4>Key Steps</h4><ol>' +
          ex.steps.map((s) => '<li>' + esc(s) + '</li>').join('') +
          '</ol></div>';

        var dosDonts = '';
        if ((ex.dos && ex.dos.length) || (ex.donts && ex.donts.length)) {
          dosDonts =
            '<div class="exercise-detail-dosdonts">' +
              '<div class="callout callout-do callout-compact"><span class="callout-title">✅ Do</span><ul>' +
                (ex.dos || []).map((d) => '<li>' + esc(d) + '</li>').join('') +
              '</ul></div>' +
              '<div class="callout callout-dont callout-compact"><span class="callout-title">❌ Don\'t</span><ul>' +
                (ex.donts || []).map((d) => '<li>' + esc(d) + '</li>').join('') +
              '</ul></div>' +
            '</div>';
        }
        body = stepsHtml + dosDonts;
      } else {
        body = '<div class="exercise-detail-soon">' + ICON_SOON + '<p>Full guide coming soon — check back as the exercise library grows.</p></div>';
      }

      this._detailEl.innerHTML =
        '<div class="exercise-detail-head"><div>' +
          '<h3>' + esc(ex.name) + '</h3>' +
          '<div class="exercise-detail-meta">' + metaTags + '</div>' +
        '</div></div>' +
        gallery + body;
    }
  }

  customElements.define('ignite-exercise-explorer', ExerciseExplorer);
})();
