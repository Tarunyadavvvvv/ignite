# 3D Exercise Model Images

Drop the PNG demonstration images for each exercise into this folder, then
point that exercise's `images` array at them in
[`js/exercise-data.js`](../../js/exercise-data.js) — the exercise browser
picks them up automatically, in both the detail panel's image gallery and
that exercise's thumbnail in the list.

## Naming convention

Name files `<slug>-<stage>.png`, matching the exercise's `slug` in
`exercise-data.js`, e.g. for a multi-stage lift:

```
assets/models/squat-setup.png
assets/models/squat-bottom.png
assets/models/squat-lockout.png
```

## Wiring an image up

Find the exercise in `js/exercise-data.js` and fill in its `images` array
with paths relative to the `fitness/` project root:

```js
{ slug: 'squat', name: 'Barbell Back Squat', /* ...other fields... */,
  images: ['assets/models/squat-setup.png', 'assets/models/squat-bottom.png'] }
```

That's the only change needed — no HTML to touch. An empty array (`images:
[]`) keeps the "3D model coming soon" placeholder card.

## One landscape image vs. multiple portrait stages

There are two supported styles — pick whichever the source art was made
for, no code changes needed either way, the gallery frame adapts on its own
based on how many paths are in `images`:

- **One landscape image (preferred for new exercises)** — a single wide
  strip that shows every stage of the movement side by side (e.g. start →
  mid-rep → finish) in one picture. `images: ['assets/images/<name>.png']`
  — a lone image gets a wide frame at the gallery's full width instead of
  the portrait shape below. These live in `../images/` alongside the
  site's other illustrations (not this folder), since they're one-off
  compositions rather than a stage set. See
  `../images/dumbbell-curl2.png` for the reference example.
- **Multiple portrait stages (older exercises like squat)** — two or three
  separate images (setup / bottom / lockout), named `<slug>-<stage>.png` in
  *this* folder and listed in stage order:

  ```
  assets/models/squat-setup.png
  assets/models/squat-bottom.png
  assets/models/squat-lockout.png
  ```

Either way, wiring it up is the same: fill in that exercise's `images`
array with the path(s), relative to the `fitness/` project root:

```js
{ slug: 'squat', name: 'Barbell Back Squat', /* ...other fields... */,
  images: ['assets/models/squat-setup.png', 'assets/models/squat-bottom.png'] }
```

That's the only change needed — no HTML to touch. An empty array (`images:
[]`) keeps the "3D model coming soon" placeholder card.

## Suggested image specs

- Format: PNG with a transparent background
- Orientation: landscape (roughly 21:9) for a single all-in-one-image
  exercise; portrait, roughly 3:4, for the older multi-stage style — frames
  use `object-fit: contain` either way, so a transparent cutout looks best
- Consistent art style/lighting across all exercises for a cohesive look
  (see `character-reference.png` in `../images/` for the reference figure
  used so far)
