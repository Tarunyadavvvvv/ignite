/* ==========================================================================
   IGNITE — Gym & Weighted muscle library
   The data behind <ignite-muscle-library> (exercises/gym.html). Organized
   muscle-first rather than as a flat exercise list: categories, each broken
   into specific muscles/regions, each listing exercise alternatives ranked
   by how effectively THAT exercise trains THAT specific muscle.

   Ratings reflect the exercise's biomechanical effectiveness for the
   specific muscle listed — not general popularity — so the same exercise
   can (and does) carry a different rating under a different muscle.

   rating: 'best' | 'average' | 'okay' | 'poor'

   To add an exercise: push an object into the relevant muscle's
   `exercises` array — { name, equipment, rating }. To add a whole new
   muscle: push a { label, exercises } object into a category's `muscles`
   array. To add a category: push a new entry into GYM_MUSCLE_DATA with
   either `muscles` (sub-divided) or `exercises` (flat, like Full Body).

   `id` is optional and only needed when something outside this file links
   directly to a specific exercise row (e.g. the homepage's featured Squat
   card links to exercises/gym.html#squat) — everything else gets an
   auto-generated id, scoped to its category + muscle so repeated exercise
   names (e.g. "Romanian Deadlift" under both Hamstrings and Glutes) don't
   collide.

   `images` is optional — paths under assets/models/ (see its README),
   shown in the detail panel when that exercise is selected. Leave it off
   for the "3D model coming soon" placeholder.

   Warm-Up and Cool-Down are different from the ranked muscle categories:
   their "muscles" aren't anatomical, they're groupings like "Must Before
   Legs" — exactly the same { label, exercises } shape as every other
   category, just used to say *when* each movement is mandatory instead of
   *how effective* it is. So these exercises carry no `rating` — the group
   label itself is the indicator, shown as a badge in the detail panel.
   `cat.note` is an optional intro line shown at the top of a category's
   panel (used here to explain the section).
   ========================================================================== */
window.GYM_MUSCLE_DATA = [
  {
    key: 'warmup', label: 'Warm-Up', emoji: '🔥', accent: 'orange',
    note: 'Do these before you touch a weight — a few minutes of blood flow and joint prep now prevents needless strains later. Pick the group that matches what you\'re about to train.',
    muscles: [
      { label: 'Must Before Every Session', exercises: [
        { name: 'Light Cardio (Jumping Jacks / Brisk Walk)', equipment: 'Bodyweight',
          note: 'Raises your core temperature and heart rate so muscles and joints are ready to load — 2-3 minutes is enough.' },
        { name: "World's Greatest Stretch", equipment: 'Bodyweight',
          note: "Opens the hips, spine and shoulders together in one flowing move — a good default whatever you're about to train." }
      ]},
      { label: 'Must Before Back', exercises: [
        { name: 'Cat-Cow', equipment: 'Bodyweight',
          note: 'Mobilizes the spine through flexion and extension before any loaded hinge or row.' },
        { name: 'Band Pull-Apart', equipment: 'Resistance Band',
          note: 'Wakes up the rear delts and upper back so they can stabilize the shoulder blades during rows.' }
      ]},
      { label: 'Must Before Biceps / Arms', exercises: [
        { name: 'Wrist Circles & Wrist Flexor Stretch', equipment: 'Bodyweight',
          note: 'Protects the wrists before curls and any barbell work that loads them.' },
        { name: 'Light Band Curl (Empty-Hand Rehearsal)', equipment: 'Resistance Band',
          note: 'Grooves the curl path and gets blood into the biceps before adding real load.' }
      ]},
      { label: 'Must Before Chest', exercises: [
        { name: 'Arm Circles (Forward & Backward)', equipment: 'Bodyweight',
          note: 'Lubricates the shoulder joint through its full range before any pressing movement.' },
        { name: 'Scapular Push-Up', equipment: 'Bodyweight',
          note: 'Primes the shoulder blades to stay stable under a loaded bench press.' }
      ]},
      { label: 'Must Before Triceps', exercises: [
        { name: 'Cross-Body Arm Swing', equipment: 'Bodyweight',
          note: 'Loosens the triceps and rear shoulder before pressing or extension work.' },
        { name: 'Light Band Pushdown', equipment: 'Resistance Band',
          note: 'Rehearses the pushdown path and warms up the elbow before loading it.' }
      ]},
      { label: 'Must Before Legs', exercises: [
        { name: 'Bodyweight Squat (Slow, Full Depth)', equipment: 'Bodyweight',
          note: 'Grooves the squat pattern and opens the hips before adding load.' },
        { name: 'Leg Swings (Front-to-Back & Lateral)', equipment: 'Bodyweight',
          note: "Takes the hips through their full range so they're not stiff on the first working set." },
        { name: 'Hip Circles (90-90 Rotation)', equipment: 'Bodyweight',
          note: 'Opens the hip capsule before squatting or hinging patterns.' }
      ]},
      { label: 'Must Before Shoulders', exercises: [
        { name: 'Arm Circles (Forward & Backward)', equipment: 'Bodyweight',
          note: 'Lubricates the shoulder joint through its full range before pressing or raising.' },
        { name: 'Band Shoulder Dislocate', equipment: 'Resistance Band / PVC Pipe',
          note: 'Opens the front of the shoulder before overhead pressing.' }
      ]},
      { label: 'Must Before Core', exercises: [
        { name: 'Dead Bug (Activation)', equipment: 'Bodyweight',
          note: 'Switches on the deep core before loaded ab work.' },
        { name: 'Bird Dog', equipment: 'Bodyweight',
          note: "Activates the core's anti-rotation stabilizers before loaded core work." }
      ]}
    ]
  },
  {
    key: 'back', label: 'Back', emoji: '🔙', accent: 'pink',
    muscles: [
      { label: 'Lats', exercises: [
        { name: 'Pull-Up / Chin-Up', equipment: 'Bodyweight', rating: 'best',
          images: ['assets/images/pull-ups.png'] },
        { name: 'Lat Pulldown', equipment: 'Cable Machine', rating: 'best',
          images: ['assets/images/lat-pulldown.png'] },
        { name: 'Straight-Arm Pulldown', equipment: 'Cable Machine', rating: 'average',
          images: ['assets/images/Straight-Arm Pulldown.png'] },
        { name: 'Seated Cable Row (Wide Grip)', equipment: 'Cable Machine', rating: 'okay',
          images: ['assets/images/Seated Cable Row (Wide Grip).png'] }
      ]},
      { label: 'Upper Traps', exercises: [
        { name: 'Barbell Shrug', equipment: 'Barbell', rating: 'best',
          images: ['assets/images/barbell shrug.png'] },
        { name: 'Dumbbell Shrug', equipment: 'Dumbbells', rating: 'best',
          images: ['assets/images/Dumbbell Shrug.png'] },
        { name: 'Cable Shrug', equipment: 'Cable Machine', rating: 'average',
          images: ['assets/images/cable shrug.png'] },
        { name: "Farmer's Carry", equipment: 'Dumbbells / Kettlebells', rating: 'okay',
          images: ['assets/images/farmers-carry.png'] }
      ]},
      { label: 'Middle Traps', exercises: [
        { name: 'Chest-Supported Row', equipment: 'Dumbbells / Machine', rating: 'best',
          images: ['assets/images/chest supported rows.png'] },
        { name: 'Seated Cable Row (Neutral Grip)', equipment: 'Cable Machine', rating: 'best',
          images: ['assets/images/seated cable row.png'] },
        { name: 'Reverse Fly', equipment: 'Dumbbells', rating: 'average',
          images: ['assets/images/reverse fly with dumbbells.png'] },
        { name: 'Face Pull', equipment: 'Cable Machine', rating: 'average',
          images: ['assets/images/face-pulls.png'] }
      ]},
      { label: 'Lower Traps', exercises: [
        { name: 'Incline Y-Raise', equipment: 'Dumbbells', rating: 'best',
          images: ['assets/images/incline Y raise.png'] },
        { name: 'Prone Trap Raise / Snow Angel', equipment: 'Bodyweight', rating: 'best',
          images: ['assets/images/Prone Trap Raise(Snow Angel).png'] },
        { name: 'Face Pull (High Angle)', equipment: 'Cable Machine', rating: 'average',
          images: ['assets/images/face pulls(high angle)png.png'] }
      ]},
      { label: 'Rhomboids', exercises: [
        { name: 'Bent-Over Barbell Row', equipment: 'Barbell', rating: 'best',
          images: ['assets/images/Bent-Over Barbell Row.png'] },
        { name: 'Seated Cable Row', equipment: 'Cable Machine', rating: 'best',
          images: ['assets/images/seated cable row.png'] },
        { name: 'Reverse Pec-Deck Fly', equipment: 'Machine', rating: 'average',
          images: ['assets/images/machine-reverse-fly.png'] },
        { name: 'Face Pull', equipment: 'Cable Machine', rating: 'average',
          images: ['assets/images/face-pulls.png'] }
      ]},
      { label: 'Erector Spinae (Lower Back)', exercises: [
        { name: 'Deadlift', equipment: 'Barbell', rating: 'best',
          images: ['assets/images/deadlift.png'] },
        { name: 'Back Extension', equipment: 'Machine / Bench', rating: 'best',
          images: ['assets/images/back-extension.png'] },
        { name: 'Good Morning', equipment: 'Barbell', rating: 'average',
          images: ['assets/images/good morning.png'] },
        { name: 'Superman', equipment: 'Bodyweight', rating: 'okay',
          images: ['assets/images/superman.png'] }
      ]}
    ]
  },
  {
    key: 'biceps-arms', label: 'Biceps / Arms', emoji: '💪', accent: 'orange',
    muscles: [
      { label: 'Biceps (Overall / Short Head)', exercises: [
        { name: 'Barbell Curl', equipment: 'Barbell', rating: 'best' },
        { name: 'Dumbbell Curl', equipment: 'Dumbbells', rating: 'best',
          images: ['assets/images/dumbbell-curl2.png'] },
        { name: 'Preacher Curl', equipment: 'Barbell / Machine', rating: 'average' },
        { name: 'Cable Curl', equipment: 'Cable Machine', rating: 'average' }
      ]},
      { label: 'Biceps (Long Head)', exercises: [
        { name: 'Incline Dumbbell Curl', equipment: 'Dumbbells', rating: 'best' },
        { name: 'Drag Curl', equipment: 'Barbell', rating: 'average' },
        { name: 'Cable Curl (Low Pulley)', equipment: 'Cable Machine', rating: 'okay' }
      ]},
      { label: 'Brachialis', exercises: [
        { name: 'Hammer Curl', equipment: 'Dumbbells', rating: 'best' },
        { name: 'Cross-Body Hammer Curl', equipment: 'Dumbbells', rating: 'best' },
        { name: 'Reverse-Grip Curl', equipment: 'Barbell', rating: 'average' }
      ]},
      { label: 'Forearms', exercises: [
        { name: 'Wrist Curl', equipment: 'Barbell / Dumbbells', rating: 'best' },
        { name: "Farmer's Carry", equipment: 'Dumbbells / Kettlebells', rating: 'average',
          images: ['assets/images/farmers-carry.png'] },
        { name: 'Reverse Wrist Curl', equipment: 'Barbell / Dumbbells', rating: 'average' },
        { name: 'Standard Barbell Curl', equipment: 'Barbell', rating: 'poor' }
      ]}
    ]
  },
  {
    key: 'chest', label: 'Chest', emoji: '🎽', accent: 'green',
    muscles: [
      { label: 'Upper Chest', exercises: [
        { name: 'Incline Barbell Bench Press', equipment: 'Barbell', rating: 'best',
          images: ['assets/images/Incline Bench Press.png'] },
        { name: 'Incline Dumbbell Press', equipment: 'Dumbbells', rating: 'best' },
        { name: 'Incline Cable Fly (Low-to-High)', equipment: 'Cable Machine', rating: 'average' },
        { name: 'Decline Push-Up (Feet Elevated)', equipment: 'Bodyweight', rating: 'okay' }
      ]},
      { label: 'Middle Chest', exercises: [
        { name: 'Flat Barbell Bench Press', equipment: 'Barbell', rating: 'best' },
        { name: 'Flat Dumbbell Press', equipment: 'Dumbbells', rating: 'best' },
        { name: 'Push-Up', equipment: 'Bodyweight', rating: 'average' },
        { name: 'Flat Cable Fly / Pec-Deck', equipment: 'Cable Machine', rating: 'average',
          images: ['assets/images/miachine-fly.png'] }
      ]},
      { label: 'Lower Chest', exercises: [
        { name: 'Dip (Torso Leaned Forward)', equipment: 'Bodyweight / Machine', rating: 'best' },
        { name: 'Decline Barbell Bench Press', equipment: 'Barbell', rating: 'best' },
        { name: 'Cable Fly (High-to-Low)', equipment: 'Cable Machine', rating: 'average' },
        { name: 'Incline Push-Up (Hands Elevated)', equipment: 'Bodyweight', rating: 'okay' }
      ]}
    ]
  },
  {
    key: 'triceps', label: 'Triceps', emoji: '🔻', accent: 'violet',
    muscles: [
      { label: 'Long Head', exercises: [
        { name: 'Overhead Dumbbell Extension', equipment: 'Dumbbells', rating: 'best' },
        { name: 'Overhead Cable Extension (Rope)', equipment: 'Cable Machine', rating: 'best' },
        { name: 'Skull Crusher', equipment: 'Barbell / EZ-Bar', rating: 'average' },
        { name: 'Close-Grip Bench Press', equipment: 'Barbell', rating: 'okay' }
      ]},
      { label: 'Lateral Head', exercises: [
        { name: 'Cable Pushdown (Straight Bar)', equipment: 'Cable Machine', rating: 'best' },
        { name: 'Dip (Upright Torso)', equipment: 'Bodyweight / Machine', rating: 'best' },
        { name: 'Diamond Push-Up', equipment: 'Bodyweight', rating: 'average' }
      ]},
      { label: 'Medial Head', exercises: [
        { name: 'Close-Grip Bench Press', equipment: 'Barbell', rating: 'best' },
        { name: 'Reverse-Grip Pushdown', equipment: 'Cable Machine', rating: 'average' },
        { name: 'Triceps Kickback', equipment: 'Dumbbells', rating: 'okay' }
      ]}
    ]
  },
  {
    key: 'legs', label: 'Legs', emoji: '🦵', accent: 'cyan',
    muscles: [
      { label: 'Quads', exercises: [
        { name: 'Barbell Back Squat', equipment: 'Barbell', rating: 'best', id: 'squat',
          images: ['assets/models/squat-top.png', 'assets/models/squat-bottom.png', 'assets/models/squat-top.png'] },
        { name: 'Leg Press', equipment: 'Machine', rating: 'best' },
        { name: 'Leg Extension', equipment: 'Machine', rating: 'average' },
        { name: 'Bulgarian Split Squat', equipment: 'Dumbbells', rating: 'average' }
      ]},
      { label: 'Hamstrings', exercises: [
        { name: 'Romanian Deadlift', equipment: 'Barbell / Dumbbells', rating: 'best' },
        { name: 'Lying / Seated Leg Curl', equipment: 'Machine', rating: 'best' },
        { name: 'Nordic Curl', equipment: 'Bodyweight', rating: 'average' },
        { name: 'Good Morning', equipment: 'Barbell', rating: 'okay',
          images: ['assets/images/good morning.png'] }
      ]},
      { label: 'Glutes', exercises: [
        { name: 'Hip Thrust', equipment: 'Barbell', rating: 'best' },
        { name: 'Romanian Deadlift', equipment: 'Barbell / Dumbbells', rating: 'best' },
        { name: 'Bulgarian Split Squat', equipment: 'Dumbbells', rating: 'average' },
        { name: 'Cable Kickback', equipment: 'Cable Machine', rating: 'okay' }
      ]},
      { label: 'Calves', exercises: [
        { name: 'Standing Calf Raise', equipment: 'Machine / Barbell', rating: 'best' },
        { name: 'Seated Calf Raise', equipment: 'Machine', rating: 'best' },
        { name: 'Leg Press Calf Raise', equipment: 'Machine', rating: 'average' },
        { name: 'Jump Rope', equipment: 'Jump Rope', rating: 'okay' }
      ]},
      { label: 'Adductors (Inner Thigh)', exercises: [
        { name: 'Cable Hip Adduction', equipment: 'Cable Machine', rating: 'best' },
        { name: 'Sumo Squat', equipment: 'Barbell / Dumbbell', rating: 'average' },
        { name: 'Copenhagen Plank', equipment: 'Bodyweight', rating: 'average' }
      ]}
    ]
  },
  {
    key: 'shoulders', label: 'Shoulders', emoji: '🏔️', accent: 'amber',
    muscles: [
      { label: 'Front Delts', exercises: [
        { name: 'Overhead Barbell Press', equipment: 'Barbell', rating: 'best',
          images: ['assets/images/overhead-barbell-press.png'] },
        { name: 'Dumbbell Shoulder Press', equipment: 'Dumbbells', rating: 'best',
          images: ['assets/images/Dumbbell-Shoulder-Press.png'] },
        { name: 'Front Raise', equipment: 'Dumbbells / Plate', rating: 'average',
          images: ['assets/images/Front-Raise.png'] },
        { name: 'Incline Bench Press', equipment: 'Barbell', rating: 'okay',
          images: ['assets/images/Incline Bench Press.png'] }
      ]},
      { label: 'Lateral Delts', exercises: [
        { name: 'Dumbbell Lateral Raise', equipment: 'Dumbbells', rating: 'best',
          images: ['assets/images/Dumbbell-Lateral-Raise.png'] },
        { name: 'Cable Lateral Raise', equipment: 'Cable Machine', rating: 'best',
          images: ['assets/images/Cable-Lateral-Raise.png'] },
        { name: 'Machine Lateral Raise', equipment: 'Machine', rating: 'average',
          images: ['assets/images/Machine-Lateral-Raise.png'] },
        { name: 'Upright Row', equipment: 'Barbell / Dumbbells', rating: 'okay',
          images: ['assets/images/Upright-Row.png'] }
      ]},
      { label: 'Rear Delts', exercises: [
        { name: 'Face Pull', equipment: 'Cable Machine', rating: 'best',
          images: ['assets/images/face-pulls.png'] },
        { name: 'Reverse Pec-Deck Fly', equipment: 'Machine', rating: 'best',
          images: ['assets/images/machine-reverse-fly.png'] },
        { name: 'Bent-Over Reverse Fly', equipment: 'Dumbbells', rating: 'average' },
        { name: 'Front Raise', equipment: 'Dumbbells / Plate', rating: 'poor',
          images: ['assets/images/Front-Raise.png'] }
      ]}
    ]
  },
  {
    key: 'core', label: 'Core', emoji: '🎯', accent: 'green',
    muscles: [
      { label: 'Upper Abs (Rectus Abdominis)', exercises: [
        { name: 'Cable Crunch', equipment: 'Cable Machine', rating: 'best',
          images: ['assets/images/cable-crunch.png'] },
        { name: 'Weighted Decline Sit-Up', equipment: 'Weight Plate / Bench', rating: 'best' },
        { name: 'Hanging Knee Raise', equipment: 'Bodyweight', rating: 'average' },
        { name: 'Standard Crunch', equipment: 'Bodyweight', rating: 'okay' }
      ]},
      { label: 'Obliques', exercises: [
        { name: 'Cable Woodchopper', equipment: 'Cable Machine', rating: 'best' },
        { name: 'Weighted Russian Twist', equipment: 'Medicine Ball / Plate', rating: 'best' },
        { name: 'Hanging Oblique Raise', equipment: 'Bodyweight', rating: 'average' },
        { name: 'Side Plank', equipment: 'Bodyweight', rating: 'okay' }
      ]},
      { label: 'Lower Abs / Hip Flexors', exercises: [
        { name: 'Hanging Leg Raise', equipment: 'Bodyweight', rating: 'best' },
        { name: "Captain's Chair Leg Raise", equipment: 'Machine', rating: 'best' },
        { name: 'Reverse Crunch', equipment: 'Bodyweight', rating: 'average' },
        { name: 'Lying Leg Raise', equipment: 'Bodyweight', rating: 'okay' }
      ]},
      { label: 'Deep Core (Anti-Rotation & Stability)', exercises: [
        { name: 'Ab Wheel Rollout', equipment: 'Ab Wheel', rating: 'best' },
        { name: 'Pallof Press', equipment: 'Cable Machine', rating: 'best' },
        { name: 'Weighted Plank', equipment: 'Bodyweight / Weight Plate', rating: 'average' },
        { name: "Farmer's Carry", equipment: 'Dumbbells / Kettlebells', rating: 'okay',
          images: ['assets/images/farmers-carry.png'] }
      ]}
    ]
  },
  {
    key: 'full-body', label: 'Full Body', emoji: '🧍', accent: 'pink',
    exercises: [
      { name: 'Deadlift', equipment: 'Barbell', rating: 'best',
        images: ['assets/images/deadlift.png'] },
      { name: 'Clean and Press', equipment: 'Barbell', rating: 'best' },
      { name: 'Kettlebell Swing', equipment: 'Kettlebell', rating: 'average' },
      { name: 'Thruster', equipment: 'Barbell / Dumbbells', rating: 'average' },
      { name: 'Burpee', equipment: 'Bodyweight', rating: 'okay' }
    ]
  },
  {
    key: 'cooldown', label: 'Cool-Down', emoji: '🌬️', accent: 'cyan',
    note: 'Do these after your last set — a short cool-down brings your heart rate down and stops today\'s worked muscles from staying tight tomorrow. Pick the group that matches what you just trained.',
    muscles: [
      { label: 'Must After Every Session', exercises: [
        { name: 'Deep Breathing (Box Breathing)', equipment: 'Bodyweight',
          note: 'Brings your heart rate back down and shifts you out of training mode before you leave the gym.' }
      ]},
      { label: 'Must After Back', exercises: [
        { name: "Child's Pose", equipment: 'Bodyweight',
          note: 'Decompresses the spine and stretches the lats after rows and pull-ups.' }
      ]},
      { label: 'Must After Biceps / Arms', exercises: [
        { name: 'Biceps Wall Stretch', equipment: 'Bodyweight',
          note: 'Counters the shortened position curls leave the biceps and forearms in.' }
      ]},
      { label: 'Must After Chest', exercises: [
        { name: 'Doorway Chest Stretch', equipment: 'Bodyweight',
          note: "Opens the chest and front shoulder after pressing volume so they don't stay shortened." }
      ]},
      { label: 'Must After Triceps', exercises: [
        { name: 'Overhead Triceps Stretch', equipment: 'Bodyweight',
          note: 'Releases the triceps and lat attachment after pressing and extension work.' }
      ]},
      { label: 'Must After Legs', exercises: [
        { name: 'Standing Quad Stretch', equipment: 'Bodyweight',
          note: 'Releases the quads after squatting and pressing patterns.' },
        { name: 'Seated Forward Fold (Hamstring Stretch)', equipment: 'Bodyweight',
          note: 'Lengthens the hamstrings and lower back after hinge-dominant work like deadlifts.' }
      ]},
      { label: 'Must After Shoulders', exercises: [
        { name: 'Cross-Body Shoulder Stretch', equipment: 'Bodyweight',
          note: 'Eases tension in the rear delt and shoulder capsule after pressing and raising work.' }
      ]},
      { label: 'Must After Core', exercises: [
        { name: 'Cobra Stretch', equipment: 'Bodyweight',
          note: 'Lengthens the abdominal wall after loaded core work.' }
      ]}
    ]
  }
];
