/* ==========================================================================
   <ignite-muscle-library> — the Gym & Weighted muscle-first browser.
   Reads window.GYM_MUSCLE_DATA (gym-muscle-data.js must load first).

   Layout: big category tabs across the top — only ONE category's panel is
   visible below at a time. Inside a panel, the left sidebar is an accordion
   of muscles; opening one reveals its exercises (styled like the plain
   exercise list on every other category page). Clicking an exercise
   updates the right-hand detail panel — image gallery + rating + a short
   note — exactly like <ignite-exercise-explorer>, just one drill-down
   level deeper (category → muscle → exercise instead of category → exercise).
   ========================================================================== */
(function () {
  'use strict';

  var RATING_META = {
    best: { emoji: '🟢', label: 'Best' },
    average: { emoji: '🟡', label: 'Average' },
    okay: { emoji: '🟠', label: 'Okay' },
    poor: { emoji: '🔴', label: 'Poor' }
  };

  var ICON_CHEV = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var ICON_CHEV_RIGHT = '<svg class="eli-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var ICON_CAMERA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 8h3l2-2h6l2 2h3v11H4z" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="13.5" r="3.2"/></svg>';

  function slugify(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function blurbFor(ex, targetLabel) {
    var t = targetLabel || 'this movement pattern';
    switch (ex.rating) {
      case 'best': return 'One of the most effective exercises for training the ' + t + '.';
      case 'average': return 'A solid, reliable option for training the ' + t + '.';
      case 'okay': return 'Trains the ' + t + ' to some degree, but the options above it are more effective.';
      case 'poor': return 'Commonly used, but not an effective choice for the ' + t + ' specifically.';
      default: return '';
    }
  }

  class MuscleLibrary extends HTMLElement {
    connectedCallback() {
      this._data = window.GYM_MUSCLE_DATA || [];
      this._base = /\/(exercises|nutrition|recovery)\//.test(window.location.pathname) ? '../' : '';
      this._openMuscle = {};  // categoryKey -> open muscle index (-1 = none)
      this._selected = {};    // categoryKey -> selected exercise id
      this._index = {};       // exercise id -> { catKey, catLabel, muscleLabel, muscleIndex, ex }
      this._activeCategory = this._data.length ? this._data[0].key : null;

      this._buildIndex();
      this._render();
      this._wire();
      this._applyInitial();
    }

    _buildIndex() {
      var self = this;
      this._data.forEach(function (cat) {
        if (cat.muscles) {
          cat.muscles.forEach(function (m, mi) {
            m.exercises.forEach(function (ex) {
              var id = ex.id || (cat.key + '-' + slugify(m.label) + '-' + slugify(ex.name));
              ex._id = id;
              self._index[id] = { catKey: cat.key, catLabel: cat.label, muscleLabel: m.label, muscleIndex: mi, ex: ex };
            });
          });
          self._openMuscle[cat.key] = 0;
          if (cat.muscles[0] && cat.muscles[0].exercises[0]) self._selected[cat.key] = cat.muscles[0].exercises[0]._id;
        } else if (cat.exercises) {
          cat.exercises.forEach(function (ex) {
            var id = ex.id || (cat.key + '-' + slugify(ex.name));
            ex._id = id;
            self._index[id] = { catKey: cat.key, catLabel: cat.label, muscleLabel: null, muscleIndex: -1, ex: ex };
          });
          if (cat.exercises[0]) self._selected[cat.key] = cat.exercises[0]._id;
        }
      });
    }

    _render() {
      var self = this;
      var tabs = this._data.map(function (cat) {
        var active = cat.key === self._activeCategory;
        return (
          '<button type="button" class="muscle-tab' + (active ? ' is-active' : '') + '" data-key="' + cat.key + '" data-accent="' + cat.accent + '" role="tab" aria-selected="' + active + '">' +
            '<span class="muscle-tab-icon">' + cat.emoji + '</span>' +
            '<span class="muscle-tab-label">' + esc(cat.label) + '</span>' +
          '</button>'
        );
      }).join('');

      var panels = this._data.map(function (cat) { return self._renderPanel(cat); }).join('');

      this.innerHTML =
        '<div class="muscle-tabs" role="tablist">' + tabs + '</div>' +
        '<div class="muscle-panels">' + panels + '</div>';
    }

    _renderPanel(cat) {
      var self = this;
      var hiddenAttr = cat.key === this._activeCategory ? '' : ' hidden';
      var noteHtml = cat.note ? '<p class="muscle-panel-note">' + esc(cat.note) + '</p>' : '';
      var sidebarInner = cat.muscles
        ? cat.muscles.map(function (m, i) { return self._renderMuscleGroup(cat, m, i); }).join('')
        : (cat.exercises || []).map(function (ex) { return self._renderExerciseRow(cat, ex); }).join('');

      return (
        '<div class="muscle-panel" data-key="' + cat.key + '"' + hiddenAttr + '>' +
          noteHtml +
          '<div class="exercise-explorer">' +
            '<div class="explorer-sidebar"><div class="exercise-list muscle-accordion" role="listbox">' + sidebarInner + '</div></div>' +
            '<div class="exercise-detail" data-detail-for="' + cat.key + '"></div>' +
          '</div>' +
        '</div>'
      );
    }

    _renderMuscleGroup(cat, muscle, index) {
      var self = this;
      var isOpen = this._openMuscle[cat.key] === index;
      var rows = muscle.exercises.map(function (ex) { return self._renderExerciseRow(cat, ex); }).join('');
      return (
        '<div class="muscle-group-item' + (isOpen ? ' is-open' : '') + '" data-muscle-index="' + index + '">' +
          '<button type="button" class="muscle-group-head">' + esc(muscle.label) + ICON_CHEV + '</button>' +
          '<div class="muscle-group-body">' + rows + '</div>' +
        '</div>'
      );
    }

    _renderExerciseRow(cat, ex) {
      var isActive = this._selected[cat.key] === ex._id;

      if (!ex.rating) {
        // Checklist-style row (Warm-Up / Cool-Down): no effectiveness
        // ranking — the "Must before/after <category>" group it sits under
        // (rendered by _renderMuscleGroup) is the indicator, so the row
        // itself just needs the name and equipment.
        return (
          '<button type="button" class="exercise-list-item' + (isActive ? ' is-active' : '') + '" data-cat="' + cat.key + '" data-ex-id="' + ex._id + '">' +
            '<span class="eli-thumb">✅</span>' +
            '<span class="eli-body">' +
              '<span class="eli-name">' + esc(ex.name) + '</span>' +
              '<span class="eli-meta">' + esc(ex.equipment) + '</span>' +
            '</span>' +
            ICON_CHEV_RIGHT +
          '</button>'
        );
      }

      var rating = RATING_META[ex.rating] || RATING_META.average;
      return (
        '<button type="button" class="exercise-list-item' + (isActive ? ' is-active' : '') + '" data-cat="' + cat.key + '" data-ex-id="' + ex._id + '">' +
          '<span class="eli-thumb">' + rating.emoji + '</span>' +
          '<span class="eli-body">' +
            '<span class="eli-name">' + esc(ex.name) + '</span>' +
            '<span class="eli-meta"><span class="dot" style="background:var(--rate-' + ex.rating + ')"></span>' + rating.label + ' · ' + esc(ex.equipment) + '</span>' +
          '</span>' +
          ICON_CHEV_RIGHT +
        '</button>'
      );
    }

    _wire() {
      var self = this;
      this.addEventListener('click', function (e) {
        var tab = e.target.closest('.muscle-tab');
        if (tab) { self._selectCategory(tab.getAttribute('data-key')); return; }

        var head = e.target.closest('.muscle-group-head');
        if (head) { self._toggleMuscleGroup(head.closest('.muscle-group-item')); return; }

        var item = e.target.closest('.exercise-list-item');
        if (item) { self._selectExercise(item.getAttribute('data-cat'), item.getAttribute('data-ex-id')); }
      });
    }

    _selectCategory(key) {
      if (key === this._activeCategory || !key) return;
      this._activeCategory = key;
      this.querySelectorAll('.muscle-tab').forEach(function (t) {
        var active = t.getAttribute('data-key') === key;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active);
      });
      this.querySelectorAll('.muscle-panel').forEach(function (p) {
        p.hidden = p.getAttribute('data-key') !== key;
      });
    }

    _toggleMuscleGroup(groupEl) {
      if (!groupEl) return;
      var panel = groupEl.closest('.muscle-panel');
      var catKey = panel.getAttribute('data-key');
      var index = Number(groupEl.getAttribute('data-muscle-index'));
      var wasOpen = groupEl.classList.contains('is-open');

      panel.querySelectorAll('.muscle-group-item.is-open').forEach(function (g) { g.classList.remove('is-open'); });
      this._openMuscle[catKey] = wasOpen ? -1 : index;
      if (!wasOpen) groupEl.classList.add('is-open');
    }

    _openMuscleGroupByIndex(catKey, index) {
      var panel = this.querySelector('.muscle-panel[data-key="' + catKey + '"]');
      if (!panel) return;
      var groupEl = panel.querySelector('.muscle-group-item[data-muscle-index="' + index + '"]');
      if (!groupEl) return;
      panel.querySelectorAll('.muscle-group-item.is-open').forEach(function (g) { g.classList.remove('is-open'); });
      groupEl.classList.add('is-open');
      this._openMuscle[catKey] = index;
    }

    _selectExercise(catKey, exId) {
      var entry = this._index[exId];
      if (!entry) return;
      this._selected[catKey] = exId;

      var panel = this.querySelector('.muscle-panel[data-key="' + catKey + '"]');
      panel.querySelectorAll('.exercise-list-item').forEach(function (el) {
        el.classList.toggle('is-active', el.getAttribute('data-ex-id') === exId);
      });

      this._renderDetail(panel.querySelector('.exercise-detail'), entry);
    }

    _renderDetail(container, entry) {
      if (!container || !entry) return;
      var ex = entry.ex;
      var base = this._base;

      var metaTags;
      if (ex.rating) {
        var rating = RATING_META[ex.rating] || RATING_META.average;
        metaTags =
          '<span class="rate-badge rate-' + ex.rating + '">' + rating.emoji + ' ' + rating.label + '</span>' +
          '<span class="tag">' + esc(ex.equipment) + '</span>' +
          (entry.muscleLabel ? '<span class="tag">Targets: ' + esc(entry.muscleLabel) + '</span>' : '');
      } else {
        metaTags =
          (entry.muscleLabel ? '<span class="must-badge must-badge-lg">✅ ' + esc(entry.muscleLabel) + '</span>' : '') +
          '<span class="tag">' + esc(ex.equipment) + '</span>';
      }

      var gallery;
      if (ex.images && ex.images.length) {
        gallery = '<div class="exercise-detail-gallery">' + ex.images.map(function (src) {
          return '<div class="model-frame has-image"><img src="' + base + src + '" alt="' + esc(ex.name) + ' demonstration"></div>';
        }).join('') + '</div>';
      } else {
        gallery = '<div class="exercise-detail-gallery"><div class="model-frame">' + ICON_CAMERA + '<span class="label">3D model coming soon</span></div></div>';
      }

      container.innerHTML =
        '<div class="exercise-detail-head"><div>' +
          '<h3>' + esc(ex.name) + '</h3>' +
          '<div class="exercise-detail-meta">' + metaTags + '</div>' +
        '</div></div>' +
        gallery +
        '<p class="exercise-detail-note">' + esc(ex.note || blurbFor(ex, entry.muscleLabel)) + '</p>';
    }

    _applyInitial() {
      var self = this;
      // Pre-render every category's default detail panel up front so
      // switching tabs never reveals an empty state.
      this._data.forEach(function (cat) {
        var exId = self._selected[cat.key];
        if (!exId) return;
        var panel = self.querySelector('.muscle-panel[data-key="' + cat.key + '"]');
        self._renderDetail(panel.querySelector('.exercise-detail'), self._index[exId]);
      });

      this._resolveDeepLink();
    }

    _resolveDeepLink() {
      var hash = window.location.hash.replace('#', '');
      var entry = hash && this._index[hash];
      if (!entry) return;

      this._selectCategory(entry.catKey);
      if (entry.muscleIndex > -1) this._openMuscleGroupByIndex(entry.catKey, entry.muscleIndex);
      this._selectExercise(entry.catKey, hash);

      var root = this;
      function jump() {
        var detail = root.querySelector('.muscle-panel[data-key="' + entry.catKey + '"] .exercise-detail');
        // Instant, not smooth: this fires on page load before the user has
        // done anything, so it should land immediately, not animate.
        if (detail) detail.scrollIntoView({ behavior: 'instant', block: 'center' });
      }
      window.requestAnimationFrame(jump);
      if (document.readyState !== 'complete') window.addEventListener('load', jump, { once: true });
    }
  }

  customElements.define('ignite-muscle-library', MuscleLibrary);
})();
