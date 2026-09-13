/* ==========================================================================
   IGNITE — Exercise database
   The single source of truth for every exercise rendered by
   <ignite-exercise-explorer> on each category page (exercises/*.html).

   To add a new exercise: add an object to the relevant category array.
   That's it — the list/detail explorer picks it up automatically.

   Fields:
     slug        kebab-case id (also used for #hash deep links)
     name        display name
     difficulty  'beginner' | 'intermediate' | 'advanced'
     equipment   short string, e.g. 'Bodyweight', 'Dumbbells', 'Barbell'
     muscles     array of primary muscles/areas targeted
     duration    sets/reps or time, e.g. '3 x 12-15 reps'
     desc        one-line description (used on category/hub summary cards)
     steps       OPTIONAL — 3-5 short key steps. Leave empty ([]) until
                 written; the detail panel shows a friendly "coming soon"
                 note instead.
     dos/donts   OPTIONAL — 2-3 short, exercise-specific bullets each.
     images      OPTIONAL — paths under assets/models/ (see its README).
                 Leave empty for the "3D model coming soon" placeholder.
   ========================================================================== */
window.EXERCISE_DATA = {

  warmup: [
    { slug: 'jumping-jacks', name: 'Jumping Jacks', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Full Body', 'Heart Rate'], duration: '3 x 30 sec', desc: 'Full-body rhythmic warm-up that raises heart rate and primes coordination.',
      steps: ['Stand tall, feet together, arms at your sides.', 'Jump your feet out wide while raising your arms overhead.', 'Jump back to the start and repeat at a steady pace.'],
      dos: ['Land softly with slightly bent knees', 'Keep a steady, controlled rhythm'],
      donts: ['Land with locked, straight knees', 'Let your arms and legs fall out of sync'],
      images: [] },
    { slug: 'high-knees', name: 'High Knees', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Hip Flexors', 'Core'], duration: '3 x 20 sec', desc: 'Fast in-place knee drive to activate the hip flexors and elevate heart rate.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'arm-circles', name: 'Arm Circles', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Shoulders'], duration: '2 x 15 each way', desc: 'Loosens the shoulder joint and warms up the rotator cuff before pressing work.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'butt-kicks', name: 'Butt Kicks', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Hamstrings'], duration: '3 x 20 sec', desc: 'Light jogging drill that activates the hamstrings and opens the knees.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'torso-twists', name: 'Standing Torso Twists', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Obliques', 'Spine'], duration: '2 x 15 each side', desc: 'Rotational drill that wakes up the core and thoracic spine.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'leg-swings', name: 'Dynamic Leg Swings', difficulty: 'intermediate', equipment: 'Bodyweight', muscles: ['Hips', 'Hamstrings'], duration: '2 x 12 each leg', desc: 'Controlled front-to-back and side-to-side swings to open the hip capsule.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'jump-rope-warmup', name: 'Jump Rope Warm-Up', difficulty: 'intermediate', equipment: 'Jump Rope', muscles: ['Calves', 'Coordination'], duration: '3 x 45 sec', desc: 'Builds rhythm and elevates heart rate before cardio or leg day.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'walkout-to-plank', name: 'Walkout to Plank', difficulty: 'intermediate', equipment: 'Bodyweight', muscles: ['Core', 'Shoulders', 'Hamstrings'], duration: '2 x 8 reps', desc: 'Hinges into a hand-walk to plank, priming the posterior chain and shoulders.', steps: [], dos: [], donts: [], images: [] }
  ],

  mobility: [
    { slug: 'cat-cow', name: 'Cat-Cow Stretch', difficulty: 'beginner', equipment: 'Mat', muscles: ['Spine', 'Core'], duration: '2 x 10 reps', desc: 'Segmental spinal flexion and extension to unlock the back before training.',
      steps: ['Start on hands and knees, wrists under shoulders.', 'Inhale: drop your belly, lift your chest and tailbone (Cow).', 'Exhale: round your spine toward the ceiling (Cat).', 'Move slowly — one breath per phase.'],
      dos: ['Let your breath lead the pace', 'Keep wrists stacked under your shoulders'],
      donts: ['Rush through the reps', 'Only move your neck instead of the whole spine'],
      images: [] },
    { slug: 'worlds-greatest-stretch', name: "World's Greatest Stretch", difficulty: 'intermediate', equipment: 'Bodyweight', muscles: ['Hips', 'Thoracic Spine', 'Hamstrings'], duration: '2 x 6 each side', desc: 'A single flow that mobilizes the hips, spine and hamstrings together.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'glute-bridge-activation', name: 'Glute Bridge Activation', difficulty: 'beginner', equipment: 'Mat', muscles: ['Glutes', 'Core'], duration: '2 x 15 reps', desc: 'Wakes up the glutes before squats or deadlifts to protect the lower back.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'band-pull-aparts', name: 'Band Pull-Aparts', difficulty: 'beginner', equipment: 'Resistance Band', muscles: ['Rear Delts', 'Upper Back'], duration: '3 x 15 reps', desc: 'Activates the upper back and rear shoulders before pressing sessions.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'hip-circles', name: 'Standing Hip Circles', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Hips'], duration: '2 x 10 each way', desc: 'Frees up rotation in the hip socket, useful before squats and lunges.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'shoulder-dislocates', name: 'Band Shoulder Dislocates', difficulty: 'intermediate', equipment: 'Resistance Band', muscles: ['Shoulders', 'Chest'], duration: '2 x 10 reps', desc: 'Improves overhead shoulder mobility using a light band or PVC pipe.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'ankle-rocks', name: 'Ankle Mobility Rocks', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Ankles', 'Calves'], duration: '2 x 10 each side', desc: 'Improves ankle dorsiflexion, key for squat depth and running mechanics.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'scapular-push-ups', name: 'Scapular Push-Ups', difficulty: 'intermediate', equipment: 'Bodyweight', muscles: ['Shoulders', 'Serratus'], duration: '2 x 12 reps', desc: 'Trains scapular control, protecting the shoulders during pressing work.', steps: [], dos: [], donts: [], images: [] }
  ],

  'home-workout': [
    { slug: 'push-up', name: 'Push-Up', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Chest', 'Shoulders', 'Triceps', 'Core'], duration: '3 x 10-15 reps', desc: 'The foundational bodyweight press for chest, shoulders and triceps.',
      steps: ['High plank, hands slightly wider than shoulders.', 'Brace your core, keep your body in a straight line.', 'Lower your chest to just above the floor, elbows ~45°.', 'Push back up without locking your elbows out hard.'],
      dos: ['Keep a straight line from head to heels', 'Lower until your chest nears the floor'],
      donts: ['Let your hips sag toward the floor', 'Flare your elbows straight out to the sides'],
      images: [] },
    { slug: 'bodyweight-squat', name: 'Bodyweight Squat', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Quads', 'Glutes'], duration: '3 x 15 reps', desc: 'Builds foundational squat mechanics before adding external load.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'lunges', name: 'Forward Lunges', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Quads', 'Glutes', 'Balance'], duration: '3 x 10 each leg', desc: 'Single-leg strength and balance builder for the lower body.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'glute-bridge', name: 'Glute Bridge', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Glutes', 'Hamstrings'], duration: '3 x 15 reps', desc: 'Hip-hinge builder that strengthens the glutes without any equipment.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'tricep-dips', name: 'Chair Tricep Dips', difficulty: 'intermediate', equipment: 'Chair / Bench', muscles: ['Triceps', 'Shoulders'], duration: '3 x 10-12 reps', desc: 'Uses a sturdy chair or bench to isolate the triceps at home.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'pike-push-up', name: 'Pike Push-Up', difficulty: 'intermediate', equipment: 'Bodyweight', muscles: ['Shoulders', 'Triceps'], duration: '3 x 8-10 reps', desc: 'A hip-hinged push-up variation that shifts load onto the shoulders.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'pistol-squat', name: 'Pistol Squat', difficulty: 'advanced', equipment: 'Bodyweight', muscles: ['Quads', 'Glutes', 'Balance'], duration: '3 x 5-6 each leg', desc: 'A demanding single-leg squat requiring strength, mobility and balance.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'handstand-push-up', name: 'Handstand Push-Up', difficulty: 'advanced', equipment: 'Wall', muscles: ['Shoulders', 'Triceps', 'Core'], duration: '3 x 3-6 reps', desc: 'Advanced vertical press against a wall for elite shoulder strength.', steps: [], dos: [], donts: [], images: [] }
  ],

  gym: [
    { slug: 'squat', name: 'Barbell Back Squat', difficulty: 'intermediate', equipment: 'Barbell', muscles: ['Quads', 'Glutes', 'Core'], duration: '4 x 6-8 reps', desc: 'The cornerstone lower-body lift for strength and muscle mass.',
      steps: ['Set the bar across your upper back, feet shoulder-width apart.', 'Brace your core, push your hips back and bend your knees.', 'Descend until your hip crease passes knee level.', 'Drive through your whole foot to stand back up.'],
      dos: ['Keep the bar over your midfoot', 'Keep your knees tracking over your toes'],
      donts: ['Let your knees cave inward', 'Round your lower back at the bottom'],
      images: ['assets/models/squat-top.png', 'assets/models/squat-bottom.png', 'assets/models/squat-top.png'] },
    { slug: 'deadlift', name: 'Deadlift', difficulty: 'intermediate', equipment: 'Barbell', muscles: ['Hamstrings', 'Glutes', 'Back'], duration: '4 x 5 reps', desc: 'A full posterior-chain lift that builds total-body strength.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'bench-press', name: 'Bench Press', difficulty: 'intermediate', equipment: 'Barbell', muscles: ['Chest', 'Shoulders', 'Triceps'], duration: '4 x 6-8 reps', desc: 'The classic horizontal press for building chest strength and size.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'overhead-press', name: 'Overhead Press', difficulty: 'intermediate', equipment: 'Barbell', muscles: ['Shoulders', 'Triceps', 'Core'], duration: '4 x 6-8 reps', desc: 'Standing vertical press that builds shoulder strength and stability.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'barbell-row', name: 'Bent-Over Barbell Row', difficulty: 'intermediate', equipment: 'Barbell', muscles: ['Back', 'Biceps'], duration: '4 x 8-10 reps', desc: 'A hinge-position pulling movement that builds a thicker back.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'lat-pulldown', name: 'Lat Pulldown', difficulty: 'beginner', equipment: 'Cable Machine', muscles: ['Back', 'Biceps'], duration: '3 x 10-12 reps', desc: 'A machine-based pulling movement, a great entry point before pull-ups.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'romanian-deadlift', name: 'Romanian Deadlift', difficulty: 'intermediate', equipment: 'Barbell / Dumbbells', muscles: ['Hamstrings', 'Glutes'], duration: '3 x 8-10 reps', desc: 'A hip-hinge variation that emphasizes the hamstrings under stretch.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'weighted-lunges', name: 'Weighted Walking Lunges', difficulty: 'intermediate', equipment: 'Dumbbells', muscles: ['Quads', 'Glutes'], duration: '3 x 10 each leg', desc: 'Adds load to the lunge pattern for greater lower-body overload.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'leg-press', name: 'Leg Press', difficulty: 'beginner', equipment: 'Machine', muscles: ['Quads', 'Glutes'], duration: '3 x 10-12 reps', desc: 'A supported machine movement for safely overloading the legs.', steps: [], dos: [], donts: [], images: [] }
  ],

  core: [
    { slug: 'plank', name: 'Plank', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Core', 'Shoulders'], duration: '3 x 30-45 sec', desc: 'An isometric hold that builds whole-core stability and endurance.',
      steps: ['Forearms down, elbows under your shoulders.', 'Extend your legs back, body in a straight line.', 'Brace your core and squeeze your glutes.', 'Hold, breathing steadily throughout.'],
      dos: ['Keep hips level with your shoulders', 'Breathe steadily through the hold'],
      donts: ['Let your hips sag toward the floor', 'Pike your hips up toward the ceiling'],
      images: [] },
    { slug: 'bicycle-crunch', name: 'Bicycle Crunch', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Abs', 'Obliques'], duration: '3 x 20 reps', desc: 'A rotational crunch variation that targets the obliques and abs.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'russian-twist', name: 'Russian Twist', difficulty: 'beginner', equipment: 'Bodyweight / Weight Plate', muscles: ['Obliques', 'Core'], duration: '3 x 16 reps', desc: 'A seated rotation drill that builds rotational core strength.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'hanging-leg-raise', name: 'Hanging Leg Raise', difficulty: 'advanced', equipment: 'Pull-Up Bar', muscles: ['Lower Abs', 'Hip Flexors'], duration: '3 x 8-12 reps', desc: 'An advanced hanging movement that targets the lower abdominals.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'dead-bug', name: 'Dead Bug', difficulty: 'beginner', equipment: 'Mat', muscles: ['Deep Core'], duration: '3 x 10 each side', desc: 'A controlled anti-extension drill that teaches core bracing.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'mountain-climbers-core', name: 'Mountain Climbers', difficulty: 'intermediate', equipment: 'Bodyweight', muscles: ['Core', 'Shoulders', 'Cardio'], duration: '3 x 30 sec', desc: 'A dynamic plank variation that blends core work with conditioning.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'ab-wheel-rollout', name: 'Ab Wheel Rollout', difficulty: 'advanced', equipment: 'Ab Wheel', muscles: ['Core', 'Lats'], duration: '3 x 8-10 reps', desc: 'A demanding anti-extension exercise for advanced core strength.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'side-plank', name: 'Side Plank', difficulty: 'intermediate', equipment: 'Bodyweight', muscles: ['Obliques', 'Hips'], duration: '3 x 20-30 sec each side', desc: 'An isometric hold that targets the obliques and hip stabilizers.', steps: [], dos: [], donts: [], images: [] }
  ],

  cardio: [
    { slug: 'burpees', name: 'Burpees', difficulty: 'intermediate', equipment: 'Bodyweight', muscles: ['Full Body', 'Cardio'], duration: '4 x 10 reps', desc: 'A full-body conditioning move that spikes heart rate fast.',
      steps: ['Squat down and place your hands on the floor.', 'Kick your feet back into a plank.', 'Jump your feet back up to your hands.', 'Explode upward into a jump.'],
      dos: ['Keep your core braced in the plank phase', 'Land softly with bent knees'],
      donts: ['Let your lower back sag in the plank', 'Sacrifice form for speed'],
      images: [] },
    { slug: 'jump-rope', name: 'Jump Rope', difficulty: 'beginner', equipment: 'Jump Rope', muscles: ['Calves', 'Cardio'], duration: '5 x 1 min', desc: 'A classic, portable conditioning tool that builds footwork and stamina.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'sprint-intervals', name: 'Sprint Intervals', difficulty: 'advanced', equipment: 'None / Track', muscles: ['Legs', 'Cardio'], duration: '8 x 20 sec sprint / 40 sec rest', desc: 'High-intensity sprint efforts for anaerobic conditioning.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'shadow-boxing', name: 'Shadow Boxing', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Shoulders', 'Cardio', 'Core'], duration: '5 x 2 min rounds', desc: 'Combines footwork and punching combos for a low-impact cardio hit.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'stair-climbing', name: 'Stair Climbing', difficulty: 'beginner', equipment: 'Stairs / Stepper', muscles: ['Glutes', 'Cardio'], duration: '15-20 min', desc: 'A joint-friendly steady-state cardio option using stairs or a stepper.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'rowing-machine', name: 'Rowing Machine', difficulty: 'beginner', equipment: 'Rowing Machine', muscles: ['Back', 'Legs', 'Cardio'], duration: '15-20 min', desc: 'A low-impact full-body cardio machine that also builds pulling strength.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'cycling-intervals', name: 'Cycling Intervals', difficulty: 'intermediate', equipment: 'Bike', muscles: ['Legs', 'Cardio'], duration: '6 x 1 min hard / 1 min easy', desc: 'Alternating hard and easy efforts on a bike for aerobic and anaerobic fitness.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'jumping-lunges', name: 'Jumping Lunges', difficulty: 'advanced', equipment: 'Bodyweight', muscles: ['Legs', 'Cardio'], duration: '4 x 12 reps', desc: 'An explosive, plyometric lunge variation for power and conditioning.', steps: [], dos: [], donts: [], images: [] }
  ],

  cooldown: [
    { slug: 'walking-cooldown', name: 'Walking Cool-Down', difficulty: 'beginner', equipment: 'None', muscles: ['Heart Rate'], duration: '5 min', desc: 'Gradually lowers heart rate after intense training instead of stopping abruptly.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'standing-forward-fold', name: 'Standing Forward Fold', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Hamstrings', 'Lower Back'], duration: '3 x 30 sec', desc: 'A calming forward fold that releases the hamstrings and spine.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'childs-pose-cooldown', name: "Child's Pose", difficulty: 'beginner', equipment: 'Mat', muscles: ['Lower Back', 'Hips'], duration: '1-2 min', desc: 'A restful kneeling stretch that decompresses the lower back.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'deep-breathing-reset', name: 'Deep Breathing Reset', difficulty: 'beginner', equipment: 'None', muscles: ['Nervous System'], duration: '2-3 min', desc: 'Slow diaphragmatic breathing to shift the body out of training mode.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'gentle-torso-twists', name: 'Gentle Torso Twists', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Spine', 'Obliques'], duration: '2 x 10 each side', desc: 'Slow, controlled rotations to ease the spine after heavy training.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'foam-rolling-basics', name: 'Foam Rolling Basics', difficulty: 'beginner', equipment: 'Foam Roller', muscles: ['Full Body'], duration: '5-8 min', desc: 'Self-myofascial release to reduce muscle tightness post-workout.', steps: [], dos: [], donts: [], images: [] }
  ],

  stretching: [
    { slug: 'hamstring-stretch', name: 'Seated Hamstring Stretch', difficulty: 'beginner', equipment: 'Mat', muscles: ['Hamstrings', 'Lower Back'], duration: '3 x 30 sec each leg', desc: 'A staple static stretch for tight hamstrings after leg day or running.',
      steps: ['Sit with one leg extended, the other foot at your inner thigh.', 'Sit tall, then hinge forward from the hips.', 'Reach toward your foot, keeping your back long.', 'Hold, then switch sides.'],
      dos: ['Hinge from the hips, not the spine', 'Keep a soft bend in the extended knee'],
      donts: ['Bounce or force the stretch', 'Round your back to reach further'],
      images: [] },
    { slug: 'quad-stretch', name: 'Standing Quad Stretch', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Quads', 'Hip Flexors'], duration: '3 x 30 sec each leg', desc: 'A balance-friendly stretch that lengthens the front of the thigh.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'shoulder-cross-stretch', name: 'Shoulder Cross-Body Stretch', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Shoulders'], duration: '3 x 20 sec each arm', desc: 'Targets the posterior shoulder, useful after pressing workouts.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'butterfly-stretch', name: 'Butterfly Stretch', difficulty: 'beginner', equipment: 'Mat', muscles: ['Inner Thighs', 'Hips'], duration: '3 x 30 sec', desc: 'Opens the hips and inner thighs in a seated position.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'seated-spinal-twist', name: 'Seated Spinal Twist', difficulty: 'intermediate', equipment: 'Mat', muscles: ['Spine', 'Obliques'], duration: '2 x 20 sec each side', desc: 'A rotational stretch that improves thoracic spine mobility.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'standing-calf-stretch', name: 'Standing Calf Stretch', difficulty: 'beginner', equipment: 'Wall', muscles: ['Calves'], duration: '3 x 30 sec each leg', desc: 'A wall-assisted stretch for tight calves after running or jumping.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'hip-flexor-stretch', name: 'Kneeling Hip Flexor Stretch', difficulty: 'intermediate', equipment: 'Mat', muscles: ['Hip Flexors'], duration: '3 x 30 sec each leg', desc: 'Counteracts tight hip flexors from prolonged sitting or squatting.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'triceps-overhead-stretch', name: 'Overhead Triceps Stretch', difficulty: 'beginner', equipment: 'Bodyweight', muscles: ['Triceps', 'Shoulders'], duration: '3 x 20 sec each arm', desc: 'A simple overhead reach to release the triceps and lats.', steps: [], dos: [], donts: [], images: [] }
  ],

  yoga: [
    { slug: 'downward-dog', name: 'Downward-Facing Dog', difficulty: 'beginner', equipment: 'Mat', muscles: ['Shoulders', 'Hamstrings', 'Calves'], duration: '5-8 breaths', desc: 'A foundational inversion-adjacent pose that stretches and strengthens.',
      steps: ['Start on hands and knees, wrists under shoulders.', 'Tuck your toes, lift your hips up and back.', 'Press your hands down, let your head hang relaxed.', 'Reach your heels toward the floor, knees soft.'],
      dos: ['Keep a slight bend in the knees if tight', 'Keep your neck relaxed'],
      donts: ['Round your back to force your heels down', 'Lock your elbows out straight'],
      images: [] },
    { slug: 'childs-pose-yoga', name: "Child's Pose", difficulty: 'beginner', equipment: 'Mat', muscles: ['Hips', 'Lower Back'], duration: '5-10 breaths', desc: 'A resting pose used between more demanding flows.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'warrior-two', name: 'Warrior II', difficulty: 'intermediate', equipment: 'Mat', muscles: ['Legs', 'Core', 'Shoulders'], duration: '5-8 breaths each side', desc: 'A grounding standing pose that builds leg strength and focus.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'tree-pose', name: 'Tree Pose', difficulty: 'beginner', equipment: 'Mat', muscles: ['Balance', 'Core'], duration: '5-8 breaths each side', desc: 'A single-leg balance pose that builds focus and ankle stability.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'cobra-pose', name: 'Cobra Pose', difficulty: 'beginner', equipment: 'Mat', muscles: ['Spine', 'Chest'], duration: '5-8 breaths', desc: 'A gentle backbend that opens the chest and mobilizes the spine.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'triangle-pose', name: 'Triangle Pose', difficulty: 'intermediate', equipment: 'Mat', muscles: ['Hamstrings', 'Obliques'], duration: '5-8 breaths each side', desc: 'A standing stretch that opens the side body and hamstrings.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'crow-pose', name: 'Crow Pose', difficulty: 'advanced', equipment: 'Mat', muscles: ['Core', 'Wrists', 'Arms'], duration: '3-5 breaths', desc: 'An arm-balancing pose that demands core strength and focus.', steps: [], dos: [], donts: [], images: [] },
    { slug: 'sun-salutation', name: 'Sun Salutation Flow', difficulty: 'intermediate', equipment: 'Mat', muscles: ['Full Body'], duration: '3-5 rounds', desc: 'A linked sequence of poses used to open a yoga practice.', steps: [], dos: [], donts: [], images: [] }
  ]
};
