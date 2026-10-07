const ui = {
  en: {
    pageTitle: "Today's Workout 💪",
    startHere: "START HERE",
    warmup: "Warm-Up",
    mainWorkout: "MAIN WORKOUT",
    exercises: "Exercises",
    finishEasy: "FINISH EASY",
    stretch: "Cool Down & Stretch",
    breathingTitle: "Keep breathing, Papa",
    breathingText: "Breathe out during the effort and breathe in as you return. Never hold your breath while lifting.",
    papaRuleTitle: "👂 Papa's rule:",
    papaRuleText: "Use a weight you can control and finish with 2–3 good reps still possible. Stop for sharp pain, chest pain, faintness, severe dizziness, or unusual shortness of breath.",
    showHow: "How to do it",
    alternative: "Show Alternative Exercise",
    set: "SET",
    rest: "rest",
    exercisesCount: "exercises",
    done: "✓ Workout Done",
    completed: "✓ Workout Completed",
    doneMessage: "Great work, Papa! 👏 See you next workout.",
    footer: "Made with ❤️ for Papa",
    switchLanguage: "ਪੰਜਾਬੀ"
  },
  pa: {
    pageTitle: "ਅੱਜ ਦੀ ਕਸਰਤ 💪",
    startHere: "ਇੱਥੋਂ ਸ਼ੁਰੂ ਕਰੋ",
    warmup: "ਵਾਰਮ-ਅੱਪ",
    mainWorkout: "ਮੁੱਖ ਕਸਰਤ",
    exercises: "ਕਸਰਤਾਂ",
    finishEasy: "ਅੰਤ ਹੌਲੀ ਕਰੋ",
    stretch: "ਕੂਲ ਡਾਊਨ ਅਤੇ ਸਟ੍ਰੈਚ",
    breathingTitle: "ਪਾਪਾ, ਸਾਹ ਲੈਂਦੇ ਰਹੋ",
    breathingText: "ਜ਼ੋਰ ਲਗਾਉਂਦੇ ਸਮੇਂ ਸਾਹ ਬਾਹਰ ਕੱਢੋ ਅਤੇ ਵਾਪਸ ਆਉਂਦੇ ਸਮੇਂ ਸਾਹ ਅੰਦਰ ਲਵੋ। ਵਜ਼ਨ ਚੁੱਕਦੇ ਸਮੇਂ ਸਾਹ ਕਦੇ ਨਾ ਰੋਕੋ।",
    papaRuleTitle: "👂 ਪਾਪਾ ਦਾ ਨਿਯਮ:",
    papaRuleText: "ਉਹੀ ਵਜ਼ਨ ਵਰਤੋ ਜਿਸਨੂੰ ਤੁਸੀਂ ਆਰਾਮ ਨਾਲ ਕੰਟਰੋਲ ਕਰ ਸਕੋ ਅਤੇ ਸੈੱਟ ਮੁਕਣ ਤੇ 2–3 ਹੋਰ ਸਾਫ਼ ਰੈਪ ਕਰਨ ਦੀ ਤਾਕਤ ਬਚੀ ਹੋਵੇ। ਤੇਜ਼ ਦਰਦ, ਛਾਤੀ ਵਿੱਚ ਦਰਦ, ਬੇਹੋਸ਼ੀ ਵਰਗਾ ਅਹਿਸਾਸ, ਬਹੁਤ ਚੱਕਰ ਜਾਂ ਅਸਧਾਰਣ ਸਾਹ ਫੁੱਲਣ ਤੇ ਰੁਕ ਜਾਓ।",
    showHow: "ਕਿਵੇਂ ਕਰਨੀ ਹੈ",
    alternative: "ਬਦਲਵੀਂ ਕਸਰਤ ਵੇਖੋ",
    set: "ਸੈੱਟ",
    rest: "ਆਰਾਮ",
    exercisesCount: "ਕਸਰਤਾਂ",
    done: "✓ ਕਸਰਤ ਪੂਰੀ",
    completed: "✓ ਅੱਜ ਦੀ ਕਸਰਤ ਹੋ ਗਈ",
    doneMessage: "ਸ਼ਾਬਾਸ਼ ਪਾਪਾ! 👏 ਅਗਲੀ ਕਸਰਤ ਵਿੱਚ ਮਿਲਦੇ ਹਾਂ।",
    footer: "ਪਾਪਾ ਲਈ ❤️ ਨਾਲ ਬਣਾਇਆ",
    switchLanguage: "English"
  }
};

const workouts = [
  {
    day: { en: "Sunday", pa: "ਐਤਵਾਰ" },
    short: { en: "S", pa: "ਐ" },
    muscle: { en: "Recovery + Stretching", pa: "ਰਿਕਵਰੀ + ਸਟ੍ਰੈਚਿੰਗ" },
    emoji: "😌",
    message: {
      en: "Take it easy today. Recovery is part of getting stronger.",
      pa: "ਅੱਜ ਸਰੀਰ ਨੂੰ ਆਰਾਮ ਦਿਓ। ਰਿਕਵਰੀ ਵੀ ਮਜ਼ਬੂਤ ਹੋਣ ਦਾ ਹਿੱਸਾ ਹੈ।"
    },
    warmup: [
      { en: "Easy walk — 5 minutes", pa: "ਹੌਲੀ ਚਾਲ — 5 ਮਿੰਟ" }
    ],
    exercises: [
      {
        name: { en: "Easy Walk", pa: "ਹੌਲੀ ਚਾਲ" },
        sets: 1,
        reps: { en: "20–30 min", pa: "20–30 ਮਿੰਟ" },
        tip: { en: "Walk at a comfortable pace. You should still be able to talk.", pa: "ਆਰਾਮਦਾਇਕ ਰਫ਼ਤਾਰ ਨਾਲ ਚੱਲੋ। ਗੱਲ ਕਰਨ ਵਿੱਚ ਦਿੱਕਤ ਨਹੀਂ ਹੋਣੀ ਚਾਹੀਦੀ।" },
        alt: { en: "Easy stationary bike — 15–20 minutes", pa: "ਹੌਲੀ ਸਟੇਸ਼ਨਰੀ ਬਾਈਕ — 15–20 ਮਿੰਟ" },
        rest: { en: "Easy", pa: "ਆਰਾਮ ਨਾਲ" },
        how: [
          { en: "Stand tall and walk at a relaxed pace.", pa: "ਸਿੱਧੇ ਖੜ੍ਹੋ ਅਤੇ ਆਰਾਮਦਾਇਕ ਰਫ਼ਤਾਰ ਨਾਲ ਚੱਲੋ।" },
          { en: "Keep breathing normally.", pa: "ਸਧਾਰਣ ਤਰ੍ਹਾਂ ਸਾਹ ਲੈਂਦੇ ਰਹੋ।" },
          { en: "Slow down if talking becomes difficult.", pa: "ਜੇ ਗੱਲ ਕਰਨੀ ਔਖੀ ਹੋਵੇ ਤਾਂ ਰਫ਼ਤਾਰ ਘਟਾਓ।" }
        ]
      },
      {
        name: { en: "Supported Balance Hold", pa: "ਸਹਾਰੇ ਨਾਲ ਬੈਲੈਂਸ" },
        sets: 2,
        reps: { en: "20 sec each side", pa: "ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" },
        tip: { en: "Stand beside a wall or sturdy support.", pa: "ਦੀਵਾਰ ਜਾਂ ਮਜ਼ਬੂਤ ਸਹਾਰੇ ਦੇ ਕੋਲ ਖੜ੍ਹੋ।" },
        alt: { en: "Heel-to-toe standing — 2 × 20 sec", pa: "ਐੜੀ-ਤੋਂ-ਪੈਰ ਅੱਗੇ ਰੱਖ ਕੇ ਖੜ੍ਹਨਾ — 2 × 20 ਸਕਿੰਟ" },
        rest: { en: "30 sec", pa: "30 ਸਕਿੰਟ" },
        how: [
          { en: "Keep one hand close to a sturdy support.", pa: "ਇੱਕ ਹੱਥ ਮਜ਼ਬੂਤ ਸਹਾਰੇ ਦੇ ਨੇੜੇ ਰੱਖੋ।" },
          { en: "Lift one foot only as much as comfortable.", pa: "ਇੱਕ ਪੈਰ ਸਿਰਫ਼ ਉਤਨਾ ਹੀ ਚੁੱਕੋ ਜਿੰਨਾ ਆਰਾਮਦਾਇਕ ਹੋਵੇ।" },
          { en: "Look straight ahead and stay tall.", pa: "ਅੱਗੇ ਵੇਖੋ ਅਤੇ ਸਰੀਰ ਸਿੱਧਾ ਰੱਖੋ।" }
        ]
      }
    ],
    stretches: [
      { en: "Chest doorway stretch — 20 sec each side", pa: "ਦਰਵਾਜ਼ੇ ਤੇ ਛਾਤੀ ਸਟ੍ਰੈਚ — ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" },
      { en: "Hamstring stretch — 20 sec each side", pa: "ਹੈਮਸਟਰਿੰਗ ਸਟ੍ਰੈਚ — ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" },
      { en: "Calf stretch — 20 sec each side", pa: "ਕਾਫ਼ ਸਟ੍ਰੈਚ — ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" }
    ]
  },
  {
    day: { en: "Monday", pa: "ਸੋਮਵਾਰ" },
    short: { en: "M", pa: "ਸੋ" },
    muscle: { en: "Chest + Light Triceps", pa: "ਛਾਤੀ + ਹਲਕਾ ਟ੍ਰਾਈਸੈਪਸ" },
    emoji: "💪",
    message: {
      en: "Smooth, controlled reps. Today is chest first, with just a little triceps work.",
      pa: "ਰੈਪ ਹੌਲੀ ਅਤੇ ਕੰਟਰੋਲ ਨਾਲ ਕਰੋ। ਅੱਜ ਮੁੱਖ ਧਿਆਨ ਛਾਤੀ ਤੇ ਹੈ, ਅਖੀਰ ਵਿੱਚ ਥੋੜ੍ਹਾ ਟ੍ਰਾਈਸੈਪਸ।"
    },
    warmup: [
      { en: "Treadmill or bike — 5–7 minutes", pa: "ਟ੍ਰੈਡਮਿਲ ਜਾਂ ਬਾਈਕ — 5–7 ਮਿੰਟ" },
      { en: "Arm circles — 10 forward + 10 backward", pa: "ਬਾਂਹਾਂ ਦੇ ਗੋਲ ਚੱਕਰ — 10 ਅੱਗੇ + 10 ਪਿੱਛੇ" },
      { en: "Very light chest press — 1 × 12", pa: "ਬਹੁਤ ਹਲਕਾ ਚੈਸਟ ਪ੍ਰੈੱਸ — 1 × 12" }
    ],
    exercises: [
      {
        name: { en: "Machine Chest Press", pa: "ਮਸ਼ੀਨ ਚੈਸਟ ਪ੍ਰੈੱਸ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Keep shoulders back and press smoothly.", pa: "ਮੋਢੇ ਪਿੱਛੇ ਰੱਖੋ ਅਤੇ ਹੌਲੀ ਕੰਟਰੋਲ ਨਾਲ ਪ੍ਰੈੱਸ ਕਰੋ।" },
        alt: { en: "Dumbbell bench press — 2 × 10", pa: "ਡੰਬਲ ਬੈਂਚ ਪ੍ਰੈੱਸ — 2 × 10" },
        rest: { en: "75–90 sec", pa: "75–90 ਸਕਿੰਟ" },
        how: [
          { en: "Adjust the seat so the handles are around mid-chest.", pa: "ਸੀਟ ਇਸ ਤਰ੍ਹਾਂ ਸੈੱਟ ਕਰੋ ਕਿ ਹੈਂਡਲ ਛਾਤੀ ਦੇ ਵਿਚਕਾਰ ਦੇ ਲੈਵਲ ਤੇ ਹੋਣ।" },
          { en: "Keep your back against the pad and feet flat.", pa: "ਪਿੱਠ ਪੈਡ ਨਾਲ ਲੱਗੀ ਰੱਖੋ ਅਤੇ ਪੈਰ ਪੂਰੇ ਜ਼ਮੀਨ ਤੇ ਰੱਖੋ।" },
          { en: "Press without locking the elbows, then return slowly.", pa: "ਕੋਹਣੀਆਂ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਲੌਕ ਕੀਤੇ ਬਿਨਾਂ ਧੱਕੋ ਅਤੇ ਹੌਲੀ ਵਾਪਸ ਆਓ।" }
        ]
      },
      {
        name: { en: "Incline Chest Press Machine", pa: "ਇਨਕਲਾਈਨ ਚੈਸਟ ਪ੍ਰੈੱਸ ਮਸ਼ੀਨ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Keep elbows comfortable; do not flare them too wide.", pa: "ਕੋਹਣੀਆਂ ਆਰਾਮਦਾਇਕ ਰੱਖੋ, ਬਹੁਤ ਬਾਹਰ ਨਾ ਖੋਲ੍ਹੋ।" },
        alt: { en: "Incline dumbbell press — 2 × 10", pa: "ਇਨਕਲਾਈਨ ਡੰਬਲ ਪ੍ਰੈੱਸ — 2 × 10" },
        rest: { en: "75–90 sec", pa: "75–90 ਸਕਿੰਟ" },
        how: [
          { en: "Sit with your back supported.", pa: "ਪਿੱਠ ਨੂੰ ਪੂਰਾ ਸਹਾਰਾ ਦੇ ਕੇ ਬੈਠੋ।" },
          { en: "Press upward smoothly while breathing out.", pa: "ਸਾਹ ਬਾਹਰ ਕੱਢਦੇ ਹੋਏ ਹੌਲੀ ਉੱਪਰ ਪ੍ਰੈੱਸ ਕਰੋ।" },
          { en: "Lower slowly until you feel a comfortable chest stretch.", pa: "ਹੌਲੀ ਹੇਠਾਂ ਲਿਆਓ ਜਦ ਤੱਕ ਛਾਤੀ ਵਿੱਚ ਆਰਾਮਦਾਇਕ ਖਿੱਚ ਮਹਿਸੂਸ ਹੋਵੇ।" }
        ]
      },
      {
        name: { en: "Pec Deck / Chest Fly", pa: "ਪੈਕ ਡੈਕ / ਚੈਸਟ ਫਲਾਈ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Use a comfortable range and avoid overstretching.", pa: "ਆਰਾਮਦਾਇਕ ਰੇਂਜ ਵਿੱਚ ਕਰੋ, ਬਹੁਤ ਖਿੱਚ ਨਾ ਲਵੋ।" },
        alt: { en: "Cable chest fly — 2 × 10–12", pa: "ਕੇਬਲ ਚੈਸਟ ਫਲਾਈ — 2 × 10–12" },
        rest: { en: "60 sec", pa: "60 ਸਕਿੰਟ" },
        how: [
          { en: "Keep chest up and shoulders relaxed.", pa: "ਛਾਤੀ ਉੱਪਰ ਅਤੇ ਮੋਢੇ ਢਿੱਲੇ ਰੱਖੋ।" },
          { en: "Bring the handles together slowly.", pa: "ਹੈਂਡਲ ਹੌਲੀ ਹੌਲੀ ਇਕੱਠੇ ਲਿਆਓ।" },
          { en: "Return only to a comfortable stretch.", pa: "ਸਿਰਫ਼ ਆਰਾਮਦਾਇਕ ਖਿੱਚ ਤੱਕ ਹੀ ਵਾਪਸ ਜਾਓ।" }
        ]
      },
      {
        name: { en: "Rope Triceps Pushdown", pa: "ਰੋਪ ਟ੍ਰਾਈਸੈਪਸ ਪੁਸ਼ਡਾਊਨ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Keep elbows close to the body.", pa: "ਕੋਹਣੀਆਂ ਸਰੀਰ ਦੇ ਨੇੜੇ ਰੱਖੋ।" },
        alt: { en: "Triceps press machine — 2 × 10", pa: "ਟ੍ਰਾਈਸੈਪਸ ਪ੍ਰੈੱਸ ਮਸ਼ੀਨ — 2 × 10" },
        rest: { en: "60 sec", pa: "60 ਸਕਿੰਟ" },
        how: [
          { en: "Stand tall with elbows tucked beside you.", pa: "ਸਿੱਧੇ ਖੜ੍ਹੋ ਅਤੇ ਕੋਹਣੀਆਂ ਪਾਸੇ ਲੱਗੀਆਂ ਰੱਖੋ।" },
          { en: "Push the rope down while breathing out.", pa: "ਸਾਹ ਬਾਹਰ ਕੱਢਦੇ ਹੋਏ ਰੋਪ ਹੇਠਾਂ ਧੱਕੋ।" },
          { en: "Return slowly without swinging.", pa: "ਬਿਨਾਂ ਝਟਕੇ ਦੇ ਹੌਲੀ ਵਾਪਸ ਆਓ।" }
        ]
      }
    ],
    stretches: [
      { en: "Doorway chest stretch — 20 sec × 2", pa: "ਦਰਵਾਜ਼ੇ ਤੇ ਛਾਤੀ ਸਟ੍ਰੈਚ — 20 ਸਕਿੰਟ × 2" },
      { en: "Gentle triceps stretch — 20 sec each side", pa: "ਹਲਕਾ ਟ੍ਰਾਈਸੈਪਸ ਸਟ੍ਰੈਚ — ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" }
    ]
  },
  {
    day: { en: "Tuesday", pa: "ਮੰਗਲਵਾਰ" },
    short: { en: "T", pa: "ਮੰ" },
    muscle: { en: "Back + Light Biceps", pa: "ਪਿੱਠ + ਹਲਕਾ ਬਾਈਸੈਪਸ" },
    emoji: "🏋️",
    message: {
      en: "Pull with control. Keep the chest tall and avoid jerking the weight.",
      pa: "ਕੰਟਰੋਲ ਨਾਲ ਖਿੱਚੋ। ਛਾਤੀ ਉੱਪਰ ਰੱਖੋ ਅਤੇ ਵਜ਼ਨ ਨੂੰ ਝਟਕਾ ਨਾ ਦਿਓ।"
    },
    warmup: [
      { en: "Treadmill or bike — 5–7 minutes", pa: "ਟ੍ਰੈਡਮਿਲ ਜਾਂ ਬਾਈਕ — 5–7 ਮਿੰਟ" },
      { en: "Shoulder rolls — 10 each way", pa: "ਮੋਢਿਆਂ ਦੇ ਗੋਲ ਚੱਕਰ — ਹਰ ਪਾਸੇ 10" },
      { en: "Light lat pulldown — 1 × 12", pa: "ਹਲਕਾ ਲੈਟ ਪੁਲਡਾਊਨ — 1 × 12" }
    ],
    exercises: [
      {
        name: { en: "Lat Pulldown", pa: "ਲੈਟ ਪੁਲਡਾਊਨ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Pull toward the upper chest, never behind the neck.", pa: "ਬਾਰ ਨੂੰ ਉੱਪਰੀ ਛਾਤੀ ਵੱਲ ਖਿੱਚੋ, ਗਰਦਨ ਦੇ ਪਿੱਛੇ ਨਹੀਂ।" },
        alt: { en: "Assisted pull-up machine — 2 × 8–10", pa: "ਅਸਿਸਟਡ ਪੁਲ-ਅੱਪ ਮਸ਼ੀਨ — 2 × 8–10" },
        rest: { en: "75–90 sec", pa: "75–90 ਸਕਿੰਟ" },
        how: [
          { en: "Sit tall and secure the thigh pad.", pa: "ਸਿੱਧੇ ਬੈਠੋ ਅਤੇ ਥਾਈ ਪੈਡ ਠੀਕ ਲਗਾਓ।" },
          { en: "Pull the bar toward your upper chest.", pa: "ਬਾਰ ਨੂੰ ਉੱਪਰੀ ਛਾਤੀ ਵੱਲ ਖਿੱਚੋ।" },
          { en: "Let the arms rise slowly under control.", pa: "ਬਾਂਹਾਂ ਨੂੰ ਹੌਲੀ ਕੰਟਰੋਲ ਨਾਲ ਉੱਪਰ ਜਾਣ ਦਿਓ।" }
        ]
      },
      {
        name: { en: "Seated Cable Row", pa: "ਸੀਟਡ ਕੇਬਲ ਰੋ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Stay tall and squeeze the shoulder blades gently.", pa: "ਸਿੱਧੇ ਬੈਠੋ ਅਤੇ ਮੋਢਿਆਂ ਦੀਆਂ ਹੱਡੀਆਂ ਹੌਲੀ ਇਕੱਠੀਆਂ ਕਰੋ।" },
        alt: { en: "Chest-supported row machine — 2 × 10", pa: "ਚੈਸਟ-ਸਪੋਰਟਡ ਰੋ ਮਸ਼ੀਨ — 2 × 10" },
        rest: { en: "75–90 sec", pa: "75–90 ਸਕਿੰਟ" },
        how: [
          { en: "Keep the torso tall and neutral.", pa: "ਧੜ ਸਿੱਧਾ ਅਤੇ ਨਿਊਟ੍ਰਲ ਰੱਖੋ।" },
          { en: "Pull the handle toward the lower ribs.", pa: "ਹੈਂਡਲ ਨੂੰ ਹੇਠਲੀਆਂ ਪੱਸਲੀਆਂ ਵੱਲ ਖਿੱਚੋ।" },
          { en: "Return slowly without rounding the back.", pa: "ਪਿੱਠ ਗੋਲ ਕੀਤੇ ਬਿਨਾਂ ਹੌਲੀ ਵਾਪਸ ਜਾਓ।" }
        ]
      },
      {
        name: { en: "Chest-Supported Row", pa: "ਚੈਸਟ-ਸਪੋਰਟਡ ਰੋ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Let the chest pad support your torso.", pa: "ਛਾਤੀ ਨੂੰ ਪੈਡ ਦਾ ਸਹਾਰਾ ਲੈਣ ਦਿਓ।" },
        alt: { en: "One-arm cable row — 2 × 10 each side", pa: "ਇੱਕ ਬਾਂਹ ਕੇਬਲ ਰੋ — ਹਰ ਪਾਸੇ 2 × 10" },
        rest: { en: "60–75 sec", pa: "60–75 ਸਕਿੰਟ" },
        how: [
          { en: "Keep your chest against the pad.", pa: "ਛਾਤੀ ਪੈਡ ਨਾਲ ਲੱਗੀ ਰੱਖੋ।" },
          { en: "Pull elbows back without shrugging.", pa: "ਮੋਢੇ ਚੁੱਕੇ ਬਿਨਾਂ ਕੋਹਣੀਆਂ ਪਿੱਛੇ ਖਿੱਚੋ।" },
          { en: "Lower the weight slowly.", pa: "ਵਜ਼ਨ ਹੌਲੀ ਹੇਠਾਂ ਛੱਡੋ।" }
        ]
      },
      {
        name: { en: "Cable Biceps Curl", pa: "ਕੇਬਲ ਬਾਈਸੈਪਸ ਕਰਲ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Keep elbows close to your sides.", pa: "ਕੋਹਣੀਆਂ ਸਰੀਰ ਦੇ ਨੇੜੇ ਰੱਖੋ।" },
        alt: { en: "Dumbbell curl — 2 × 10", pa: "ਡੰਬਲ ਕਰਲ — 2 × 10" },
        rest: { en: "60 sec", pa: "60 ਸਕਿੰਟ" },
        how: [
          { en: "Stand tall with relaxed shoulders.", pa: "ਸਿੱਧੇ ਖੜ੍ਹੋ ਅਤੇ ਮੋਢੇ ਢਿੱਲੇ ਰੱਖੋ।" },
          { en: "Curl without moving the upper arms.", pa: "ਉੱਪਰੀ ਬਾਂਹਾਂ ਹਿਲਾਏ ਬਿਨਾਂ ਕਰਲ ਕਰੋ।" },
          { en: "Lower slowly and keep breathing.", pa: "ਹੌਲੀ ਹੇਠਾਂ ਲਿਆਓ ਅਤੇ ਸਾਹ ਲੈਂਦੇ ਰਹੋ।" }
        ]
      }
    ],
    stretches: [
      { en: "Lat stretch — 20 sec each side", pa: "ਲੈਟ ਸਟ੍ਰੈਚ — ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" },
      { en: "Upper-back hug stretch — 20 sec × 2", pa: "ਅੱਪਰ-ਬੈਕ ਹੱਗ ਸਟ੍ਰੈਚ — 20 ਸਕਿੰਟ × 2" }
    ]
  },
  {
    day: { en: "Wednesday", pa: "ਬੁੱਧਵਾਰ" },
    short: { en: "W", pa: "ਬੁੱ" },
    muscle: { en: "Recovery + Walking + Balance", pa: "ਰਿਕਵਰੀ + ਚਾਲ + ਬੈਲੈਂਸ" },
    emoji: "🚶",
    message: {
      en: "A lighter day. Move, recover and work on balance.",
      pa: "ਅੱਜ ਹਲਕਾ ਦਿਨ ਹੈ। ਚੱਲੋ, ਸਰੀਰ ਨੂੰ ਰਿਕਵਰ ਕਰੋ ਅਤੇ ਬੈਲੈਂਸ ਤੇ ਕੰਮ ਕਰੋ।"
    },
    warmup: [
      { en: "Easy walk — 5 minutes", pa: "ਹੌਲੀ ਚਾਲ — 5 ਮਿੰਟ" }
    ],
    exercises: [
      {
        name: { en: "Comfortable Walk", pa: "ਆਰਾਮਦਾਇਕ ਚਾਲ" },
        sets: 1,
        reps: { en: "20–30 min", pa: "20–30 ਮਿੰਟ" },
        tip: { en: "Keep a pace where you can still speak normally.", pa: "ਐਸੀ ਰਫ਼ਤਾਰ ਰੱਖੋ ਜਿੱਥੇ ਤੁਸੀਂ ਆਮ ਤਰ੍ਹਾਂ ਗੱਲ ਕਰ ਸਕੋ।" },
        alt: { en: "Stationary bike — 15–20 minutes", pa: "ਸਟੇਸ਼ਨਰੀ ਬਾਈਕ — 15–20 ਮਿੰਟ" },
        rest: { en: "Easy", pa: "ਆਰਾਮ ਨਾਲ" },
        how: [
          { en: "Start slowly for the first few minutes.", pa: "ਪਹਿਲੇ ਕੁਝ ਮਿੰਟ ਹੌਲੀ ਸ਼ੁਰੂ ਕਰੋ।" },
          { en: "Keep shoulders relaxed.", pa: "ਮੋਢੇ ਢਿੱਲੇ ਰੱਖੋ।" },
          { en: "Finish with a few easy minutes.", pa: "ਅੰਤ ਵਿੱਚ ਕੁਝ ਮਿੰਟ ਹੌਲੀ ਚੱਲੋ।" }
        ]
      },
      {
        name: { en: "Supported Single-Leg Stand", pa: "ਸਹਾਰੇ ਨਾਲ ਇੱਕ ਪੈਰ ਤੇ ਖੜ੍ਹਨਾ" },
        sets: 2,
        reps: { en: "15–20 sec each side", pa: "ਹਰ ਪਾਸੇ 15–20 ਸਕਿੰਟ" },
        tip: { en: "Use a wall or rail for safety.", pa: "ਸੁਰੱਖਿਆ ਲਈ ਦੀਵਾਰ ਜਾਂ ਰੇਲ ਦਾ ਸਹਾਰਾ ਲਵੋ।" },
        alt: { en: "Heel-to-toe stand — 2 × 20 sec", pa: "ਐੜੀ-ਤੋਂ-ਪੈਰ ਅੱਗੇ ਰੱਖ ਕੇ ਖੜ੍ਹਨਾ — 2 × 20 ਸਕਿੰਟ" },
        rest: { en: "30 sec", pa: "30 ਸਕਿੰਟ" },
        how: [
          { en: "Stand beside a sturdy support.", pa: "ਮਜ਼ਬੂਤ ਸਹਾਰੇ ਦੇ ਕੋਲ ਖੜ੍ਹੋ।" },
          { en: "Lift one foot slightly.", pa: "ਇੱਕ ਪੈਰ ਥੋੜ੍ਹਾ ਜਿਹਾ ਚੁੱਕੋ।" },
          { en: "Stop before you feel unstable.", pa: "ਅਸਥਿਰ ਮਹਿਸੂਸ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਰੁਕ ਜਾਓ।" }
        ]
      },
      {
        name: { en: "Sit-to-Stand", pa: "ਕੁਰਸੀ ਤੋਂ ਬੈਠ ਕੇ ਖੜ੍ਹਨਾ" },
        sets: 2,
        reps: { en: "8–10 reps", pa: "8–10 ਰੈਪ" },
        tip: { en: "Use a stable chair and move slowly.", pa: "ਮਜ਼ਬੂਤ ਕੁਰਸੀ ਵਰਤੋ ਅਤੇ ਹੌਲੀ ਹਿਲੋ।" },
        alt: { en: "Supported mini squat — 2 × 8", pa: "ਸਹਾਰੇ ਨਾਲ ਹਲਕਾ ਸਕਵਾਟ — 2 × 8" },
        rest: { en: "60 sec", pa: "60 ਸਕਿੰਟ" },
        how: [
          { en: "Sit near the front of a stable chair.", pa: "ਮਜ਼ਬੂਤ ਕੁਰਸੀ ਦੇ ਅੱਗੇਲੇ ਹਿੱਸੇ ਤੇ ਬੈਠੋ।" },
          { en: "Lean slightly forward and stand.", pa: "ਥੋੜ੍ਹਾ ਅੱਗੇ ਝੁੱਕ ਕੇ ਖੜ੍ਹੋ।" },
          { en: "Sit back down slowly.", pa: "ਹੌਲੀ ਹੌਲੀ ਵਾਪਸ ਬੈਠੋ।" }
        ]
      }
    ],
    stretches: [
      { en: "Calf stretch — 20 sec each side", pa: "ਕਾਫ਼ ਸਟ੍ਰੈਚ — ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" },
      { en: "Chest stretch — 20 sec × 2", pa: "ਛਾਤੀ ਸਟ੍ਰੈਚ — 20 ਸਕਿੰਟ × 2" }
    ]
  },
  {
    day: { en: "Thursday", pa: "ਵੀਰਵਾਰ" },
    short: { en: "T", pa: "ਵੀ" },
    muscle: { en: "Legs", pa: "ਲੱਤਾਂ" },
    emoji: "🦵",
    message: {
      en: "Controlled leg training. Use a pain-free range and do not rush.",
      pa: "ਲੱਤਾਂ ਦੀ ਕਸਰਤ ਕੰਟਰੋਲ ਨਾਲ ਕਰੋ। ਜਿੱਥੇ ਦਰਦ ਨਾ ਹੋਵੇ ਉਸ ਰੇਂਜ ਵਿੱਚ ਕਰੋ ਅਤੇ ਜਲਦੀ ਨਾ ਕਰੋ।"
    },
    warmup: [
      { en: "Stationary bike — 5–7 minutes", pa: "ਸਟੇਸ਼ਨਰੀ ਬਾਈਕ — 5–7 ਮਿੰਟ" },
      { en: "Sit-to-stand — 8 easy reps", pa: "ਕੁਰਸੀ ਤੋਂ ਉੱਠਣਾ — 8 ਹਲਕੇ ਰੈਪ" },
      { en: "Ankle circles — 10 each side", pa: "ਐਂਕਲ ਸਰਕਲ — ਹਰ ਪਾਸੇ 10" }
    ],
    exercises: [
      {
        name: { en: "Leg Press", pa: "ਲੈਗ ਪ੍ਰੈੱਸ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Feet flat and do not lock the knees.", pa: "ਪੈਰ ਪੂਰੇ ਪਲੇਟ ਤੇ ਰੱਖੋ ਅਤੇ ਘੁੱਟਣੇ ਲੌਕ ਨਾ ਕਰੋ।" },
        alt: { en: "Goblet box squat — 2 × 10", pa: "ਗੋਬਲੈਟ ਬਾਕਸ ਸਕਵਾਟ — 2 × 10" },
        rest: { en: "90 sec", pa: "90 ਸਕਿੰਟ" },
        how: [
          { en: "Place feet about shoulder-width apart.", pa: "ਪੈਰ ਲਗਭਗ ਮੋਢਿਆਂ ਦੀ ਚੌੜਾਈ ਤੇ ਰੱਖੋ।" },
          { en: "Lower only as far as comfortable.", pa: "ਸਿਰਫ਼ ਉਤਨਾ ਹੇਠਾਂ ਆਓ ਜਿੰਨਾ ਆਰਾਮਦਾਇਕ ਹੋਵੇ।" },
          { en: "Press up smoothly without locking the knees.", pa: "ਘੁੱਟਣੇ ਲੌਕ ਕੀਤੇ ਬਿਨਾਂ ਹੌਲੀ ਉੱਪਰ ਧੱਕੋ।" }
        ]
      },
      {
        name: { en: "Seated Leg Curl", pa: "ਸੀਟਡ ਲੈਗ ਕਰਲ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Control both the curl and the return.", pa: "ਕਰਲ ਅਤੇ ਵਾਪਸੀ ਦੋਵੇਂ ਕੰਟਰੋਲ ਨਾਲ ਕਰੋ।" },
        alt: { en: "Lying leg curl — 2 × 10", pa: "ਲਾਇੰਗ ਲੈਗ ਕਰਲ — 2 × 10" },
        rest: { en: "60–75 sec", pa: "60–75 ਸਕਿੰਟ" },
        how: [
          { en: "Adjust the pad comfortably above the ankles.", pa: "ਪੈਡ ਨੂੰ ਐਂਕਲ ਤੋਂ ਥੋੜ੍ਹਾ ਉੱਪਰ ਆਰਾਮ ਨਾਲ ਸੈੱਟ ਕਰੋ।" },
          { en: "Curl the legs without lifting the hips.", pa: "ਹਿੱਪ ਚੁੱਕੇ ਬਿਨਾਂ ਲੱਤਾਂ ਕਰਲ ਕਰੋ।" },
          { en: "Return slowly.", pa: "ਹੌਲੀ ਵਾਪਸ ਲਿਆਓ।" }
        ]
      },
      {
        name: { en: "Leg Extension", pa: "ਲੈਗ ਐਕਸਟੈਂਸ਼ਨ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Use light-to-moderate weight and a comfortable knee range.", pa: "ਹਲਕਾ ਜਾਂ ਮੱਧਮ ਵਜ਼ਨ ਵਰਤੋ ਅਤੇ ਘੁੱਟਣੇ ਦੀ ਆਰਾਮਦਾਇਕ ਰੇਂਜ ਵਿੱਚ ਕਰੋ।" },
        alt: { en: "Supported step-up — 2 × 8 each leg", pa: "ਸਹਾਰੇ ਨਾਲ ਸਟੈਪ-ਅੱਪ — ਹਰ ਲੱਤ 2 × 8" },
        rest: { en: "60 sec", pa: "60 ਸਕਿੰਟ" },
        how: [
          { en: "Keep your back against the pad.", pa: "ਪਿੱਠ ਪੈਡ ਨਾਲ ਲੱਗੀ ਰੱਖੋ।" },
          { en: "Straighten the knees smoothly, without snapping them.", pa: "ਘੁੱਟਣੇ ਹੌਲੀ ਸਿੱਧੇ ਕਰੋ, ਝਟਕਾ ਨਾ ਦਿਓ।" },
          { en: "Lower slowly.", pa: "ਹੌਲੀ ਹੇਠਾਂ ਲਿਆਓ।" }
        ]
      },
      {
        name: { en: "Standing Calf Raise", pa: "ਸਟੈਂਡਿੰਗ ਕਾਫ਼ ਰੇਜ਼" },
        sets: 2,
        reps: { en: "12–15 reps", pa: "12–15 ਰੈਪ" },
        tip: { en: "Hold support and pause briefly at the top.", pa: "ਸਹਾਰਾ ਫੜੋ ਅਤੇ ਉੱਪਰ ਇੱਕ ਪਲ ਰੁਕੋ।" },
        alt: { en: "Seated calf raise — 2 × 12–15", pa: "ਸੀਟਡ ਕਾਫ਼ ਰੇਜ਼ — 2 × 12–15" },
        rest: { en: "60 sec", pa: "60 ਸਕਿੰਟ" },
        how: [
          { en: "Stand tall while holding a stable support.", pa: "ਮਜ਼ਬੂਤ ਸਹਾਰਾ ਫੜ ਕੇ ਸਿੱਧੇ ਖੜ੍ਹੋ।" },
          { en: "Rise onto the balls of the feet.", pa: "ਪੈਰਾਂ ਦੇ ਅੱਗੇਲੇ ਹਿੱਸੇ ਤੇ ਉੱਪਰ ਚੜ੍ਹੋ।" },
          { en: "Lower slowly.", pa: "ਹੌਲੀ ਹੇਠਾਂ ਆਓ।" }
        ]
      }
    ],
    stretches: [
      { en: "Quad stretch — 20 sec each side", pa: "ਕੁਆਡ ਸਟ੍ਰੈਚ — ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" },
      { en: "Hamstring stretch — 20 sec each side", pa: "ਹੈਮਸਟਰਿੰਗ ਸਟ੍ਰੈਚ — ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" },
      { en: "Calf stretch — 20 sec each side", pa: "ਕਾਫ਼ ਸਟ੍ਰੈਚ — ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" }
    ]
  },
  {
    day: { en: "Friday", pa: "ਸ਼ੁੱਕਰਵਾਰ" },
    short: { en: "F", pa: "ਸ਼ੁੱ" },
    muscle: { en: "Shoulders + Light Core", pa: "ਮੋਢੇ + ਹਲਕਾ ਕੋਰ" },
    emoji: "🙌",
    message: {
      en: "Keep shoulder weights modest and every repetition smooth.",
      pa: "ਮੋਢਿਆਂ ਲਈ ਵਜ਼ਨ ਹਲਕਾ-ਮੱਧਮ ਰੱਖੋ ਅਤੇ ਹਰ ਰੈਪ ਹੌਲੀ ਕਰੋ।"
    },
    warmup: [
      { en: "Treadmill — 5 minutes", pa: "ਟ੍ਰੈਡਮਿਲ — 5 ਮਿੰਟ" },
      { en: "Arm circles — 10 each direction", pa: "ਬਾਂਹਾਂ ਦੇ ਗੋਲ ਚੱਕਰ — ਹਰ ਪਾਸੇ 10" },
      { en: "Very light shoulder press — 1 × 12", pa: "ਬਹੁਤ ਹਲਕਾ ਸ਼ੋਲਡਰ ਪ੍ਰੈੱਸ — 1 × 12" }
    ],
    exercises: [
      {
        name: { en: "Machine Shoulder Press", pa: "ਮਸ਼ੀਨ ਸ਼ੋਲਡਰ ਪ੍ਰੈੱਸ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Keep your back supported and avoid shrugging.", pa: "ਪਿੱਠ ਨੂੰ ਸਹਾਰਾ ਦਿਓ ਅਤੇ ਮੋਢੇ ਉੱਪਰ ਨਾ ਚੁੱਕੋ।" },
        alt: { en: "Seated dumbbell press — 2 × 10", pa: "ਸੀਟਡ ਡੰਬਲ ਪ੍ਰੈੱਸ — 2 × 10" },
        rest: { en: "75–90 sec", pa: "75–90 ਸਕਿੰਟ" },
        how: [
          { en: "Adjust the seat so handles start near shoulder level.", pa: "ਸੀਟ ਇਸ ਤਰ੍ਹਾਂ ਸੈੱਟ ਕਰੋ ਕਿ ਹੈਂਡਲ ਮੋਢਿਆਂ ਦੇ ਲੈਵਲ ਦੇ ਨੇੜੇ ਹੋਣ।" },
          { en: "Press upward while breathing out.", pa: "ਸਾਹ ਬਾਹਰ ਕੱਢਦੇ ਹੋਏ ਉੱਪਰ ਪ੍ਰੈੱਸ ਕਰੋ।" },
          { en: "Lower slowly without forcing the shoulders.", pa: "ਮੋਢਿਆਂ ਤੇ ਜ਼ੋਰ ਪਾਏ ਬਿਨਾਂ ਹੌਲੀ ਹੇਠਾਂ ਲਿਆਓ।" }
        ]
      },
      {
        name: { en: "Dumbbell Lateral Raise", pa: "ਡੰਬਲ ਲੈਟਰਲ ਰੇਜ਼" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Use light weights and raise only to shoulder height.", pa: "ਹਲਕਾ ਵਜ਼ਨ ਵਰਤੋ ਅਤੇ ਬਾਂਹਾਂ ਸਿਰਫ਼ ਮੋਢਿਆਂ ਦੇ ਲੈਵਲ ਤੱਕ ਚੁੱਕੋ।" },
        alt: { en: "Cable lateral raise — 2 × 10–12", pa: "ਕੇਬਲ ਲੈਟਰਲ ਰੇਜ਼ — 2 × 10–12" },
        rest: { en: "60 sec", pa: "60 ਸਕਿੰਟ" },
        how: [
          { en: "Keep a soft bend in the elbows.", pa: "ਕੋਹਣੀਆਂ ਵਿੱਚ ਹਲਕਾ ਮੋੜ ਰੱਖੋ।" },
          { en: "Raise the arms out to the sides slowly.", pa: "ਬਾਂਹਾਂ ਨੂੰ ਹੌਲੀ ਪਾਸਿਆਂ ਵੱਲ ਚੁੱਕੋ।" },
          { en: "Lower under control.", pa: "ਕੰਟਰੋਲ ਨਾਲ ਹੇਠਾਂ ਲਿਆਓ।" }
        ]
      },
      {
        name: { en: "Reverse Pec Deck", pa: "ਰਿਵਰਸ ਪੈਕ ਡੈਕ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Open the arms without arching the back.", pa: "ਪਿੱਠ ਨੂੰ ਵੱਧ ਨਾ ਮੋੜਦੇ ਹੋਏ ਬਾਂਹਾਂ ਖੋਲ੍ਹੋ।" },
        alt: { en: "Rear-delt cable fly — 2 × 10–12", pa: "ਰੀਅਰ ਡੈਲਟ ਕੇਬਲ ਫਲਾਈ — 2 × 10–12" },
        rest: { en: "60 sec", pa: "60 ਸਕਿੰਟ" },
        how: [
          { en: "Sit with chest supported if the machine allows.", pa: "ਜੇ ਮਸ਼ੀਨ ਵਿੱਚ ਹੋਵੇ ਤਾਂ ਛਾਤੀ ਨੂੰ ਸਹਾਰਾ ਦੇ ਕੇ ਬੈਠੋ।" },
          { en: "Open the arms until comfortable.", pa: "ਬਾਂਹਾਂ ਆਰਾਮਦਾਇਕ ਹੱਦ ਤੱਕ ਖੋਲ੍ਹੋ।" },
          { en: "Return slowly.", pa: "ਹੌਲੀ ਵਾਪਸ ਲਿਆਓ।" }
        ]
      },
      {
        name: { en: "Dead Bug", pa: "ਡੈਡ ਬੱਗ ਕੋਰ ਕਸਰਤ" },
        sets: 2,
        reps: { en: "6 each side", pa: "ਹਰ ਪਾਸੇ 6 ਰੈਪ" },
        tip: { en: "Slow movement; keep the lower back comfortable.", pa: "ਹੌਲੀ ਹਿਲੋ ਅਤੇ ਹੇਠਲੀ ਪਿੱਠ ਆਰਾਮਦਾਇਕ ਰੱਖੋ।" },
        alt: { en: "Standing Pallof press — 2 × 8 each side", pa: "ਸਟੈਂਡਿੰਗ ਪੈਲੌਫ ਪ੍ਰੈੱਸ — ਹਰ ਪਾਸੇ 2 × 8" },
        rest: { en: "60 sec", pa: "60 ਸਕਿੰਟ" },
        how: [
          { en: "Lie on your back with knees bent.", pa: "ਪਿੱਠ ਤੇ ਲੇਟੋ ਅਤੇ ਘੁੱਟਣੇ ਮੋੜੋ।" },
          { en: "Move opposite arm and leg slowly.", pa: "ਉਲਟੀ ਬਾਂਹ ਅਤੇ ਲੱਤ ਹੌਲੀ ਹਿਲਾਓ।" },
          { en: "Stop if the lower back feels strained.", pa: "ਜੇ ਹੇਠਲੀ ਪਿੱਠ ਤੇ ਜ਼ੋਰ ਮਹਿਸੂਸ ਹੋਵੇ ਤਾਂ ਰੁਕੋ।" }
        ]
      }
    ],
    stretches: [
      { en: "Cross-body shoulder stretch — 20 sec each side", pa: "ਕਰਾਸ-ਬਾਡੀ ਸ਼ੋਲਡਰ ਸਟ੍ਰੈਚ — ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" },
      { en: "Gentle overhead stretch — 20 sec each side", pa: "ਹਲਕਾ ਓਵਰਹੈੱਡ ਸਟ੍ਰੈਚ — ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" }
    ]
  },
  {
    day: { en: "Saturday", pa: "ਸ਼ਨੀਵਾਰ" },
    short: { en: "S", pa: "ਸ਼" },
    muscle: { en: "Arms + Walking", pa: "ਬਾਂਹਾਂ + ਚਾਲ" },
    emoji: "💪",
    message: {
      en: "A simple arm session followed by easy walking. No need to chase heavy weights.",
      pa: "ਸਧਾਰਣ ਬਾਂਹਾਂ ਦੀ ਕਸਰਤ ਤੋਂ ਬਾਅਦ ਹੌਲੀ ਚਾਲ। ਭਾਰੀ ਵਜ਼ਨ ਚੁੱਕਣ ਦੀ ਲੋੜ ਨਹੀਂ।"
    },
    warmup: [
      { en: "Easy cardio — 5 minutes", pa: "ਹਲਕਾ ਕਾਰਡੀਓ — 5 ਮਿੰਟ" },
      { en: "Elbow bends and extensions — 15 reps", pa: "ਕੋਹਣੀ ਮੋੜਨਾ ਅਤੇ ਸਿੱਧਾ ਕਰਨਾ — 15 ਰੈਪ" },
      { en: "Very light curl + pushdown — 1 × 12 each", pa: "ਬਹੁਤ ਹਲਕਾ ਕਰਲ + ਪੁਸ਼ਡਾਊਨ — ਹਰ ਇੱਕ 1 × 12" }
    ],
    exercises: [
      {
        name: { en: "Cable Biceps Curl", pa: "ਕੇਬਲ ਬਾਈਸੈਪਸ ਕਰਲ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Keep elbows close to your sides.", pa: "ਕੋਹਣੀਆਂ ਸਰੀਰ ਦੇ ਨੇੜੇ ਰੱਖੋ।" },
        alt: { en: "Dumbbell curl — 2 × 10–12", pa: "ਡੰਬਲ ਕਰਲ — 2 × 10–12" },
        rest: { en: "60 sec", pa: "60 ਸਕਿੰਟ" },
        how: [
          { en: "Stand tall and keep upper arms still.", pa: "ਸਿੱਧੇ ਖੜ੍ਹੋ ਅਤੇ ਉੱਪਰੀ ਬਾਂਹਾਂ ਸਥਿਰ ਰੱਖੋ।" },
          { en: "Curl while breathing out.", pa: "ਸਾਹ ਬਾਹਰ ਕੱਢਦੇ ਹੋਏ ਕਰਲ ਕਰੋ।" },
          { en: "Lower slowly.", pa: "ਹੌਲੀ ਹੇਠਾਂ ਲਿਆਓ।" }
        ]
      },
      {
        name: { en: "Rope Triceps Pushdown", pa: "ਰੋਪ ਟ੍ਰਾਈਸੈਪਸ ਪੁਸ਼ਡਾਊਨ" },
        sets: 2,
        reps: { en: "10–12 reps", pa: "10–12 ਰੈਪ" },
        tip: { en: "Keep upper arms still.", pa: "ਉੱਪਰੀ ਬਾਂਹਾਂ ਸਥਿਰ ਰੱਖੋ।" },
        alt: { en: "Straight-bar pushdown — 2 × 10–12", pa: "ਸਟ੍ਰੇਟ-ਬਾਰ ਪੁਸ਼ਡਾਊਨ — 2 × 10–12" },
        rest: { en: "60 sec", pa: "60 ਸਕਿੰਟ" },
        how: [
          { en: "Keep elbows tucked beside you.", pa: "ਕੋਹਣੀਆਂ ਪਾਸਿਆਂ ਨਾਲ ਲੱਗੀਆਂ ਰੱਖੋ।" },
          { en: "Push down smoothly.", pa: "ਹੌਲੀ ਕੰਟਰੋਲ ਨਾਲ ਹੇਠਾਂ ਧੱਕੋ।" },
          { en: "Return without letting the shoulders roll forward.", pa: "ਮੋਢਿਆਂ ਨੂੰ ਅੱਗੇ ਗੋਲ ਕੀਤੇ ਬਿਨਾਂ ਵਾਪਸ ਆਓ।" }
        ]
      },
      {
        name: { en: "Hammer Curl", pa: "ਹੈਮਰ ਕਰਲ" },
        sets: 2,
        reps: { en: "10 reps", pa: "10 ਰੈਪ" },
        tip: { en: "Keep wrists neutral and avoid swinging.", pa: "ਕਲਾਈ ਸਿੱਧੀ ਰੱਖੋ ਅਤੇ ਸਰੀਰ ਨੂੰ ਝੁਲਾਓ ਨਾ।" },
        alt: { en: "Rope hammer curl — 2 × 10", pa: "ਰੋਪ ਹੈਮਰ ਕਰਲ — 2 × 10" },
        rest: { en: "60 sec", pa: "60 ਸਕਿੰਟ" },
        how: [
          { en: "Hold dumbbells with palms facing each other.", pa: "ਡੰਬਲ ਇਸ ਤਰ੍ਹਾਂ ਫੜੋ ਕਿ ਹਥੇਲੀਆਂ ਇੱਕ-ਦੂਜੇ ਵੱਲ ਹੋਣ।" },
          { en: "Curl without swinging.", pa: "ਬਿਨਾਂ ਝੁਲਾਏ ਕਰਲ ਕਰੋ।" },
          { en: "Lower slowly.", pa: "ਹੌਲੀ ਹੇਠਾਂ ਲਿਆਓ।" }
        ]
      },
      {
        name: { en: "Easy Walk", pa: "ਹੌਲੀ ਚਾਲ" },
        sets: 1,
        reps: { en: "10–15 min", pa: "10–15 ਮਿੰਟ" },
        tip: { en: "Finish the session with comfortable movement.", pa: "ਸੈਸ਼ਨ ਦਾ ਅੰਤ ਆਰਾਮਦਾਇਕ ਚਾਲ ਨਾਲ ਕਰੋ।" },
        alt: { en: "Stationary bike — 10 minutes", pa: "ਸਟੇਸ਼ਨਰੀ ਬਾਈਕ — 10 ਮਿੰਟ" },
        rest: { en: "Easy", pa: "ਆਰਾਮ ਨਾਲ" },
        how: [
          { en: "Start easy and stay relaxed.", pa: "ਹੌਲੀ ਸ਼ੁਰੂ ਕਰੋ ਅਤੇ ਆਰਾਮ ਨਾਲ ਰਹੋ।" },
          { en: "Keep breathing normally.", pa: "ਸਧਾਰਣ ਸਾਹ ਲੈਂਦੇ ਰਹੋ।" },
          { en: "Use it as a cool-down, not a race.", pa: "ਇਸਨੂੰ ਕੂਲ-ਡਾਊਨ ਵਾਂਗ ਕਰੋ, ਦੌੜ ਵਾਂਗ ਨਹੀਂ।" }
        ]
      }
    ],
    stretches: [
      { en: "Biceps stretch — 20 sec each side", pa: "ਬਾਈਸੈਪਸ ਸਟ੍ਰੈਚ — ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" },
      { en: "Triceps stretch — 20 sec each side", pa: "ਟ੍ਰਾਈਸੈਪਸ ਸਟ੍ਰੈਚ — ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" },
      { en: "Forearm stretch — 20 sec each side", pa: "ਫੋਰਆਰਮ ਸਟ੍ਰੈਚ — ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ" }
    ]
  }
];

let selectedDay = new Date().getDay();
let currentLang = localStorage.getItem("trainWithPapa-language") || "en";

const els = {
  date: document.getElementById("todayDate"),
  tabs: document.getElementById("dayTabs"),
  dayLabel: document.getElementById("dayLabel"),
  muscle: document.getElementById("muscleGroup"),
  message: document.getElementById("dayMessage"),
  emoji: document.getElementById("heroEmoji"),
  warmups: document.getElementById("warmupList"),
  exercises: document.getElementById("exerciseList"),
  stretches: document.getElementById("stretchList"),
  count: document.getElementById("exerciseCount"),
  finish: document.getElementById("finishWorkout"),
  done: document.getElementById("doneMessage"),
  language: document.getElementById("languageToggle")
};

function tx(value) {
  return typeof value === "string" ? value : value[currentLang];
}

function storageKey(dayIndex, type, index = "") {
  const week = new Date();
  const mondayOffset = (week.getDay() + 6) % 7;
  week.setDate(week.getDate() - mondayOffset);
  const weekId = week.toISOString().slice(0, 10);
  return `trainWithPapa-${weekId}-${dayIndex}-${type}-${index}`;
}

function makeCheckRow(item, key) {
  const label = document.createElement("label");
  label.className = "simple-row";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = localStorage.getItem(key) === "1";
  input.addEventListener("change", () => localStorage.setItem(key, input.checked ? "1" : "0"));

  const span = document.createElement("span");
  span.textContent = tx(item);

  label.append(input, span);
  return label;
}

function renderStaticText() {
  const t = ui[currentLang];

  document.documentElement.lang = currentLang === "pa" ? "pa" : "en";
  document.body.dataset.lang = currentLang;

  document.getElementById("pageTitle").textContent = t.pageTitle;
  document.getElementById("startHereLabel").textContent = t.startHere;
  document.getElementById("warmupTitle").textContent = t.warmup;
  document.getElementById("mainWorkoutLabel").textContent = t.mainWorkout;
  document.getElementById("exercisesTitle").textContent = t.exercises;
  document.getElementById("finishEasyLabel").textContent = t.finishEasy;
  document.getElementById("stretchTitle").textContent = t.stretch;
  document.getElementById("breathingTitle").textContent = t.breathingTitle;
  document.getElementById("breathingText").textContent = t.breathingText;
  document.getElementById("papaRuleTitle").textContent = t.papaRuleTitle;
  document.getElementById("papaRuleText").textContent = t.papaRuleText;
  document.getElementById("footerText").textContent = t.footer;
  els.language.textContent = t.switchLanguage;

  els.date.textContent = new Intl.DateTimeFormat(currentLang === "pa" ? "pa-IN" : "en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric"
  }).format(new Date());
}

function renderTabs() {
  els.tabs.innerHTML = "";

  workouts.forEach((workout, index) => {
    const btn = document.createElement("button");
    btn.className = "day-tab" + (index === selectedDay ? " active" : "");
    btn.textContent = tx(workout.short);
    btn.title = tx(workout.day);

    btn.addEventListener("click", () => {
      selectedDay = index;
      render();
    });

    els.tabs.appendChild(btn);
  });
}

function render() {
  renderStaticText();

  const workout = workouts[selectedDay];
  const t = ui[currentLang];

  renderTabs();

  els.dayLabel.textContent = tx(workout.day).toUpperCase();
  els.muscle.textContent = tx(workout.muscle);
  els.message.textContent = tx(workout.message);
  els.emoji.textContent = workout.emoji;

  els.warmups.innerHTML = "";
  workout.warmup.forEach((item, i) => {
    els.warmups.appendChild(makeCheckRow(item, storageKey(selectedDay, "warmup", i)));
  });

  els.exercises.innerHTML = "";

  workout.exercises.forEach((exercise, i) => {
    const card = document.createElement("article");
    card.className = "exercise-card";

    const main = document.createElement("div");
    main.className = "exercise-main";

    const top = document.createElement("div");
    top.className = "exercise-top";

    const number = document.createElement("div");
    number.className = "exercise-number";
    number.textContent = i + 1;

    const name = document.createElement("div");
    name.className = "exercise-name";
    name.innerHTML = `<h4>${tx(exercise.name)}</h4><p>${tx(exercise.tip)}</p>`;

    top.append(number, name);
    main.appendChild(top);

    const meta = document.createElement("div");
    meta.className = "exercise-meta";
    meta.innerHTML = `
      <span class="meta-chip">🎯 ${tx(exercise.reps)}</span>
      <span class="meta-chip">⏱ ${tx(exercise.rest)} ${t.rest}</span>
    `;
    main.appendChild(meta);

    const sets = document.createElement("div");
    sets.className = "sets";

    for (let setNo = 1; setNo <= exercise.sets; setNo++) {
      const label = document.createElement("label");
      label.className = "set-check";

      const input = document.createElement("input");
      input.type = "checkbox";

      const key = storageKey(selectedDay, `exercise-${i}`, setNo);
      input.checked = localStorage.getItem(key) === "1";
      input.addEventListener("change", () => localStorage.setItem(key, input.checked ? "1" : "0"));

      const span = document.createElement("span");
      span.textContent = `${t.set} ${setNo}`;

      label.append(input, span);
      sets.appendChild(label);
    }

    main.appendChild(sets);

    const how = document.createElement("details");
    how.className = "how";
    const howList = exercise.how.map(step => `<li>${tx(step)}</li>`).join("");
    how.innerHTML = `<summary>ℹ️ ${t.showHow}</summary><ol>${howList}</ol>`;

    const alt = document.createElement("details");
    alt.className = "alt";
    alt.innerHTML = `<summary>↪ ${t.alternative}</summary><p>${tx(exercise.alt)}</p>`;

    card.append(main, how, alt);
    els.exercises.appendChild(card);
  });

  els.count.textContent = `${workout.exercises.length} ${t.exercisesCount}`;

  els.stretches.innerHTML = "";
  workout.stretches.forEach((item, i) => {
    els.stretches.appendChild(makeCheckRow(item, storageKey(selectedDay, "stretch", i)));
  });

  const complete = localStorage.getItem(storageKey(selectedDay, "complete")) === "1";
  els.finish.classList.toggle("done", complete);
  els.finish.textContent = complete ? t.completed : t.done;
  els.done.textContent = t.doneMessage;
  els.done.hidden = !complete;
}

document.getElementById("prevDay").addEventListener("click", () => {
  selectedDay = (selectedDay + 6) % 7;
  render();
});

document.getElementById("nextDay").addEventListener("click", () => {
  selectedDay = (selectedDay + 1) % 7;
  render();
});

els.language.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "pa" : "en";
  localStorage.setItem("trainWithPapa-language", currentLang);
  render();
});

els.finish.addEventListener("click", () => {
  const key = storageKey(selectedDay, "complete");
  const complete = localStorage.getItem(key) !== "1";
  localStorage.setItem(key, complete ? "1" : "0");
  render();

  if (complete) {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
});

render();
