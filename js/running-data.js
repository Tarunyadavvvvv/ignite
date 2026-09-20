/* ==========================================================================
   IGNITE — Running library
   The data behind <ignite-muscle-library source="RUNNING_DATA"> on
   exercises/running.html. Same shape as gym-muscle-data.js: an array of
   categories, each either `muscles` (accordion groups of exercises) or a
   flat `exercises` list.

   Warm-Up and Post-Run Stretches are checklists (no `rating`) grouped by
   what they're for, not ranked against each other — see gym-muscle-data.js
   for the full explanation of that pattern. Runner's Knee and Runner's
   Legs ARE ranked: `rating` is how effectively that exercise trains the
   specific target listed, exactly like the gym library.

   To add an exercise: push an object into the relevant group's
   `exercises` array. To add a whole new group: push a { label, exercises }
   object into a category's `muscles` array.
   ========================================================================== */
window.RUNNING_DATA = [
  {
    key: 'warmup', label: 'Warm-Up', emoji: '🔥', accent: 'orange',
    note: 'Do these before every run — a few minutes of dynamic movement primes your muscles and joints for the repetitive impact of running, and cuts your injury risk far more than static stretching cold.',
    muscles: [
      { label: 'General Activation', exercises: [
        { name: 'Brisk Walk / Light Jog', equipment: 'Bodyweight',
          note: 'Raises your heart rate and core temperature before anything more dynamic — 2-3 minutes is enough.' },
        { name: 'Arm Circles (Forward & Backward)', equipment: 'Bodyweight',
          note: 'Loosens the shoulders so your arm swing stays relaxed and efficient once you pick up pace.' }
      ]},
      { label: 'Dynamic Leg Mobility', exercises: [
        { name: 'Leg Swings (Front-to-Back & Lateral)', equipment: 'Bodyweight',
          note: "Takes the hips through their full range before the repetitive, single-plane motion of running." },
        { name: 'Walking Lunge with Twist', equipment: 'Bodyweight',
          note: 'Opens the hip flexors and warms up the quads and glutes together in one move.' },
        { name: 'High Knees', equipment: 'Bodyweight',
          note: 'Grooves the drive-knee lift you want in your stride and raises heart rate fast.' }
      ]},
      { label: 'Running-Specific Drills', exercises: [
        { name: 'Butt Kicks', equipment: 'Bodyweight',
          note: 'Activates the hamstrings and rehearses the recovery phase of your stride.' },
        { name: 'A-Skips', equipment: 'Bodyweight',
          note: 'Reinforces tall posture and a quick, high knee lift before you run at speed.' }
      ]}
    ]
  },
  {
    key: 'runners-knee', label: "Runner's Knee", emoji: '🦵', accent: 'pink',
    note: "\"Runner's knee\" almost always traces back to weak hips and quads controlling the kneecap poorly, not a problem with the knee joint itself — these are the exercises that actually protect it.",
    muscles: [
      { label: 'Quad Strength (Kneecap Stability)', exercises: [
        { name: 'Terminal Knee Extension', equipment: 'Resistance Band', rating: 'best' },
        { name: 'Wall Sit', equipment: 'Bodyweight', rating: 'best' },
        { name: 'Step-Up', equipment: 'Bodyweight / Dumbbells', rating: 'average' },
        { name: 'Leg Extension', equipment: 'Machine', rating: 'okay' }
      ]},
      { label: 'Hip & Glute Stability', exercises: [
        { name: 'Clamshell', equipment: 'Resistance Band', rating: 'best' },
        { name: 'Side-Lying Hip Abduction', equipment: 'Bodyweight / Ankle Weight', rating: 'best' },
        { name: 'Lateral Band Walk', equipment: 'Resistance Band', rating: 'average' },
        { name: 'Single-Leg Glute Bridge', equipment: 'Bodyweight', rating: 'average' }
      ]},
      { label: 'Single-Leg Control', exercises: [
        { name: 'Single-Leg Squat (Assisted)', equipment: 'Bodyweight', rating: 'best' },
        { name: 'Step-Down', equipment: 'Bodyweight', rating: 'best' },
        { name: 'Single-Leg Romanian Deadlift', equipment: 'Bodyweight / Dumbbells', rating: 'average' }
      ]}
    ]
  },
  {
    key: 'runners-legs', label: "Runner's Legs", emoji: '💪', accent: 'cyan',
    note: 'A complete lower-body strength routine built for runners — stronger legs mean more force per stride and a body that holds up over a full training block.',
    muscles: [
      { label: 'Quads', exercises: [
        { name: 'Goblet Squat', equipment: 'Dumbbell / Kettlebell', rating: 'best' },
        { name: 'Bulgarian Split Squat', equipment: 'Dumbbells', rating: 'best' },
        { name: 'Walking Lunge', equipment: 'Dumbbells', rating: 'average' },
        { name: 'Step-Up', equipment: 'Dumbbells', rating: 'average' }
      ]},
      { label: 'Hamstrings', exercises: [
        { name: 'Romanian Deadlift', equipment: 'Barbell / Dumbbells', rating: 'best' },
        { name: 'Single-Leg Romanian Deadlift', equipment: 'Dumbbells', rating: 'best' },
        { name: 'Nordic Curl', equipment: 'Bodyweight', rating: 'average' },
        { name: 'Glute-Ham Raise', equipment: 'Machine', rating: 'average' }
      ]},
      { label: 'Calves', exercises: [
        { name: 'Standing Calf Raise', equipment: 'Bodyweight / Barbell', rating: 'best' },
        { name: 'Single-Leg Calf Raise', equipment: 'Bodyweight', rating: 'best' },
        { name: 'Seated Calf Raise', equipment: 'Machine', rating: 'average' }
      ]},
      { label: 'Glutes', exercises: [
        { name: 'Hip Thrust', equipment: 'Barbell', rating: 'best' },
        { name: 'Single-Leg Hip Thrust', equipment: 'Bodyweight', rating: 'best' },
        { name: 'Glute Bridge', equipment: 'Bodyweight', rating: 'average' }
      ]}
    ]
  },
  {
    key: 'cooldown', label: 'Post-Run Stretches', emoji: '🧘', accent: 'violet',
    note: 'Do these right after you finish, while everything is still warm — static stretching now helps you come back feeling fresher for the next run.',
    muscles: [
      { label: 'Quads & Hip Flexors', exercises: [
        { name: 'Standing Quad Stretch', equipment: 'Bodyweight',
          note: 'Releases the quads after the repeated knee drive of running.' },
        { name: 'Kneeling Hip Flexor Stretch', equipment: 'Bodyweight',
          note: 'Undoes the tightness running builds up in the front of the hip.' }
      ]},
      { label: 'Hamstrings & Calves', exercises: [
        { name: 'Standing Hamstring Stretch', equipment: 'Bodyweight',
          note: 'Lengthens the hamstrings and lower back after the push-off phase of your stride.' },
        { name: 'Standing Calf Stretch', equipment: 'Bodyweight',
          note: 'Eases the calves and Achilles after absorbing every footstrike.' }
      ]},
      { label: 'Hips & Glutes', exercises: [
        { name: 'Figure-4 Stretch', equipment: 'Bodyweight',
          note: 'Opens the glutes and outer hip — a common tight spot for runners.' },
        { name: 'Pigeon Pose', equipment: 'Bodyweight',
          note: 'A deeper hip and glute release once you have a few extra minutes to cool down.' }
      ]}
    ]
  }
];
