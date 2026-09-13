# IGNITE — Fitness &amp; Exercise Guide

A multi-page, static HTML/CSS/JS fitness platform: warm-up → mobility →
bodyweight → gym → core → cardio → cool-down → stretching → yoga → recovery
→ nutrition. No build step, no framework — open `index.html` directly, or
serve the `fitness/` folder with any static file server.

## Design system

All color, type, spacing, radius and motion values live in
[`css/variables.css`](css/variables.css) as CSS custom properties — change a
value there and it updates everywhere. Nothing else should ever hard-code a
color or font. The visual language is a bright, illustrated, "friendly
wellness app" look (Baloo 2 + Nunito, hot-pink→orange gradient, rounded
cards, emoji icon badges) — [`index.html`](index.html) is the reference
implementation for it.

Cards, badges, buttons and other UI carry a **data-accent** variant system
(`data-accent="pink|orange|green|violet|cyan|amber"`) that recolors a card's
numbered badge, icon circle and arrow nub in one go — see `.topic-card` and
`[data-accent]` in [`css/components.css`](css/components.css). This is what
makes recoloring a whole card a one-attribute change instead of new CSS.

## Component architecture

Header, footer and the exercise browser are **Custom Elements** — the
closest thing to a React component vanilla HTML/JS offers, with no build
step. They render into light DOM (no shadow root), so the existing
component CSS applies to them unchanged.

- [`js/components/ignite-header.js`](js/components/ignite-header.js) —
  `<ignite-header></ignite-header>`. Drop it right after `<body>` on any
  page — no attributes needed. It works out its own relative link depth and
  which nav item is "active" from `location.pathname`. Change the nav once
  here and every page picks it up.
- [`js/components/ignite-footer.js`](js/components/ignite-footer.js) —
  `<ignite-footer></ignite-footer>`, placed right before `</body>`. Renders
  the footer and the back-to-top button.
- [`js/components/exercise-explorer.js`](js/components/exercise-explorer.js)
  — `<ignite-exercise-explorer category="warmup"></ignite-exercise-explorer>`.
  The list-on-the-left / detail-on-the-right exercise browser used on 8 of
  the 9 category pages. See below.
- [`js/components/muscle-library.js`](js/components/muscle-library.js) —
  `<ignite-muscle-library></ignite-muscle-library>`. The one exception:
  `exercises/gym.html` is organized muscle-first instead (Back → Lats →
  ranked exercises) rather than as a flat exercise list. See "The Gym muscle
  library" below.

`js/main.js` only holds what's left over that isn't owned by a component:
scroll-reveal (`[data-reveal]`), the generic accordion toggle (nutrition
meal plans), and TOC scroll-spy (long-form nutrition pages).

## Folder structure

```
fitness/
├── index.html                 Home page
├── css/
│   ├── variables.css           Design tokens
│   ├── base.css                 Reset + base element styles
│   ├── components.css           Buttons, cards, nav, footer, badges,
│   │                             exercise explorer, accent system, etc.
│   ├── layout.css                Page-level layout + responsive rules
│   └── animations.css            Keyframes + scroll-reveal utilities
├── js/
│   ├── components/
│   │   ├── ignite-header.js       <ignite-header>
│   │   ├── ignite-footer.js       <ignite-footer>
│   │   ├── exercise-explorer.js   <ignite-exercise-explorer category="...">
│   │   └── muscle-library.js      <ignite-muscle-library> (gym.html only)
│   ├── exercise-data.js           The exercise database (see below)
│   ├── gym-muscle-data.js         Gym's muscle → exercise → rating data
│   └── main.js                    Scroll-reveal, accordions, TOC scroll-spy
├── exercises/
│   ├── index.html                Category hub
│   ├── gym.html                  Banner + <ignite-muscle-library> (muscle-first)
│   └── warmup.html, mobility.html, home-workout.html, core.html, cardio.html,
│       cooldown.html, stretching.html, yoga.html
│       — each just a banner + <ignite-exercise-explorer category="...">
├── nutrition/
│   ├── index.html                 Nutrition hub (macros, calories, food basics)
│   └── muscle-gain.html, fat-loss.html, maintenance.html, meal-plans.html,
│       pre-post-workout.html, supplements.html
├── recovery/
│   └── index.html                  Sleep, rest days, active recovery, hydration
└── assets/
    ├── models/                     Exercise demonstration PNGs (see its README)
    ├── images/                     Hero illustration, character reference, etc.
    └── icons/                      Reserved (site uses inline SVG + emoji)
```

## The exercise browser (no more one-page-per-exercise)

Every category page is just a page banner plus one tag:
`<ignite-exercise-explorer category="gym"></ignite-exercise-explorer>`.
Clicking an exercise in the left-hand list swaps the right-hand detail panel
in place — nothing navigates. The panel updates the URL hash (`#squat`), so
a link like `exercises/gym.html#squat` opens that page with Squat
pre-selected — that's how the homepage's "featured exercise" cards link in.

### Adding a new exercise

Open [`js/exercise-data.js`](js/exercise-data.js) and add an object to the
relevant category array:

```js
{ slug: 'lat-raise', name: 'Lateral Raise', difficulty: 'beginner',
  equipment: 'Dumbbells', muscles: ['Shoulders'], duration: '3 x 12-15 reps',
  desc: 'Isolates the side delts for shoulder width.',
  steps: [], dos: [], donts: [], images: [] }
```

Save — it appears in that category's list automatically, searchable and
filterable by difficulty. Leave `steps`/`dos`/`donts` empty until you've
written them; the detail panel shows a friendly "Full guide coming soon"
note instead of a dead link, so nothing is ever unclickable.

### Writing the full guide for an exercise

Fill in `steps` (3-5 short imperative bullets — no long paragraphs), `dos`
and `donts` (2-3 short, exercise-specific bullets each — see the existing
entries like `squat` or `plank` for the expected length and tone), and
`images` (see below). That's the whole write-up — there's no separate page
to create.

### Adding 3D demonstration images

See [`assets/models/README.md`](assets/models/README.md) for naming and
sizing. Add the path(s) to that exercise's `images` array in
`exercise-data.js` — the detail panel and the list-item thumbnail both pick
it up automatically. Leave `images: []` for the existing "3D model coming
soon" placeholder.

Keep Do's/Don'ts and steps **specific to that exercise** — if an exercise
genuinely doesn't need much guidance (a simple warm-up move, say), it's
fine, even preferred, to leave it lighter rather than padding it with
generic advice.

## The Gym muscle library (different from the other 8 categories)

`exercises/gym.html` doesn't use `<ignite-exercise-explorer>` — gym/weighted
training is organized **muscle-first** instead of as a flat exercise list,
via `<ignite-muscle-library>`. It's a drill-down, not a long scrolling page:

1. **Big category tabs** across the top (Warm-Up, Back, Biceps/Arms, Chest,
   Triceps, Legs, Shoulders, Core, Full Body, Cool-Down) — only one
   category's panel is visible below at a time (defaults to the first).
2. Inside that panel, the **left sidebar is an accordion of muscles**
   (Lats, Upper Traps, ...) — opening one reveals its exercise alternatives,
   styled exactly like the plain exercise list on every other category page.
3. Clicking an exercise updates the **right-hand detail panel** — image
   gallery, rating badge, equipment, and a short note — the same
   list-left/detail-right shape as `<ignite-exercise-explorer>`, just one
   level deeper (category → muscle → exercise instead of category →
   exercise).

`Full Body` has no muscle level — it's a flat exercise list directly under
that tab, since it has no single target muscle.

The rating (🟢 Best / 🟡 Average / 🟠 Okay / 🔴 Poor) is how effectively
*that exercise* trains *that specific muscle* — not how popular or generally
effective the exercise is. The same exercise legitimately gets different
ratings under different muscles (e.g. Romanian Deadlift is 🟢 Best for both
Hamstrings and Glutes; Upright Row is 🟡 Okay for Lateral Delts but 🔴 Poor
for Lower Traps — it just doesn't train that one).

### Warm-Up and Cool-Down (grouped by "must before/after", not ranked)

`Warm-Up` (first tab) and `Cool-Down` (last tab) use the exact same
tab → accordion-group → exercise shape as every other category — they just
group by *when a movement is mandatory* instead of by anatomical muscle.
Each accordion group's `label` is a "Must Before/After …" heading (e.g.
`'Must Before Legs'`, `'Must After Shoulders'`, plus a general `'Must Before
Every Session'` / `'Must After Every Session'` group) — opening it reveals
the movements that are non-negotiable before or after training that
category. Because these movements aren't being ranked against each other,
their entries have no `rating`; the group label itself becomes the
✅ indicator badge shown in the detail panel. Each entry still carries a
`note` — a one-line reason it matters, shown in place of the usual
rating-based blurb.

A category can also carry a `note` (a short intro line rendered at the top
of its panel) — used by Warm-Up and Cool-Down to explain the section, but
available to any category.

### Editing the muscle library

Everything lives in [`js/gym-muscle-data.js`](js/gym-muscle-data.js) as
`window.GYM_MUSCLE_DATA` — an array of categories. Most have a `muscles`
array (each `{ label, exercises }`), including `Warm-Up` and `Cool-Down`
(where `label` is a "Must Before/After …" grouping instead of a muscle
name). Only `Full Body` has a flat `exercises` array directly instead,
since it has no single target muscle and nothing to group by.

To add an exercise alternative:

```js
{ name: 'Cable Curl', equipment: 'Cable Machine', rating: 'average' }
```

into the relevant muscle's `exercises` array. `rating` is one of `'best'`,
`'average'`, `'okay'`, `'poor'`. An exercise row is anchor-linkable
(`exercises/gym.html#<id>`) — it gets an auto-generated id from its name,
unless you set an explicit `id` (only needed when something outside this
file links to it directly, like the homepage's featured Squat card linking
to `#squat`).
