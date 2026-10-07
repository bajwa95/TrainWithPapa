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
    lastDone: "Last done",
    neverDone: "Not done yet",
    demo: "Exercise demo",
    visualUnavailable: "Visual guide coming soon",
    switchAlternative: "↪ Use Alternate Exercise",
    showMain: "↩ Use Main Exercise",
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
    lastDone: "ਪਿਛਲੀ ਵਾਰ",
    neverDone: "ਹਾਲੇ ਨਹੀਂ ਕੀਤੀ",
    demo: "ਕਸਰਤ ਦੀ ਚਲਦੀ ਤਸਵੀਰ",
    visualUnavailable: "ਇਸ ਕਸਰਤ ਦੀ ਤਸਵੀਰ ਜਲਦੀ ਜੋੜੀ ਜਾਵੇਗੀ",
    switchAlternative: "↪ ਬਦਲਵੀਂ ਕਸਰਤ ਵਰਤੋ",
    showMain: "↩ ਮੁੱਖ ਕਸਰਤ ਵਰਤੋ",
    done: "✓ ਕਸਰਤ ਪੂਰੀ",
    completed: "✓ ਅੱਜ ਦੀ ਕਸਰਤ ਹੋ ਗਈ",
    doneMessage: "ਸ਼ਾਬਾਸ਼ ਪਾਪਾ! 👏 ਅਗਲੀ ਕਸਰਤ ਵਿੱਚ ਮਿਲਦੇ ਹਾਂ।",
    footer: "ਪਾਪਾ ਲਈ ❤️ ਨਾਲ ਬਣਾਇਆ",
    switchLanguage: "English"
  }
};

const PRIMARY_IMAGES = {
  "Easy Walk": "images/exercises/walking.svg",
  "Comfortable Walk": "images/exercises/walking.svg",
  "Supported Balance Hold": "images/exercises/placeholder.svg",
  "Machine Chest Press": "images/exercises/machine-chest-press.svg",
  "Incline Chest Press Machine": "images/exercises/placeholder.svg",
  "Pec Deck / Chest Fly": "images/exercises/pec-deck.svg",
  "Rope Triceps Pushdown": "images/exercises/rope-tricep-pushdown.svg",
  "Lat Pulldown": "images/exercises/lat-pulldown.svg",
  "Seated Cable Row": "images/exercises/seated-row.svg",
  "Chest-Supported Row": "images/exercises/chest-supported-row.svg",
  "Cable Biceps Curl": "images/exercises/cable-curl.svg",
  "Supported Single-Leg Stand": "images/exercises/placeholder.svg",
  "Sit-to-Stand": "images/exercises/placeholder.svg",
  "Leg Press": "images/exercises/leg-press.svg",
  "Seated Leg Curl": "images/exercises/seated-leg-curl.svg",
  "Leg Extension": "images/exercises/leg-extension.svg",
  "Standing Calf Raise": "images/exercises/standing-calf-raise.svg",
  "Machine Shoulder Press": "images/exercises/machine-shoulder-press.svg",
  "Dumbbell Lateral Raise": "images/exercises/lateral-raise.svg",
  "Reverse Pec Deck": "images/exercises/reverse-pec-deck.svg",
  "Dead Bug": "images/exercises/dead-bug.svg",
  "Hammer Curl": "images/exercises/hammer-curl.svg"
};

const MUSCLE_IMAGES = {
  "Chest + Light Triceps": "images/muscles/chest-triceps.svg",
  "Back + Light Biceps": "images/muscles/back-biceps.svg",
  "Recovery + Walking + Balance": "images/muscles/recovery.svg",
  "Legs": "images/muscles/legs.svg",
  "Shoulders + Light Core": "images/muscles/shoulders-core.svg",
  "Arms + Walking": "images/muscles/arms.svg",
  "Recovery + Stretching": "images/muscles/recovery.svg"
};

function makeAlt(nameEn, namePa, image, repsEn, repsPa, tipEn, tipPa, howEn, howPa, options = {}) {
  return {
    name: { en: nameEn, pa: namePa },
    image: image || "images/exercises/placeholder.svg",
    sets: options.sets ?? 2,
    reps: { en: repsEn, pa: repsPa },
    rest: {
      en: options.restEn || "60 sec",
      pa: options.restPa || "60 ਸਕਿੰਟ"
    },
    tip: { en: tipEn, pa: tipPa },
    how: howEn.map((en, i) => ({ en, pa: howPa[i] }))
  };
}

const ALTERNATE_EXERCISES = {
  "Easy Walk": makeAlt(
    "Stationary Bike", "ਸਟੇਸ਼ਨਰੀ ਬਾਈਕ", null,
    "15–20 min", "15–20 ਮਿੰਟ",
    "Keep the resistance easy and pedal smoothly.", "ਰਜ਼ਿਸਟੈਂਸ ਹਲਕੀ ਰੱਖੋ ਅਤੇ ਆਰਾਮ ਨਾਲ ਪੈਡਲ ਕਰੋ।",
    ["Adjust the seat so the knee stays slightly bent.", "Pedal at a comfortable pace.", "Keep breathing normally."],
    ["ਸੀਟ ਇਸ ਤਰ੍ਹਾਂ ਸੈੱਟ ਕਰੋ ਕਿ ਘੁੱਟਣਾ ਹਲਕਾ ਮੋੜਿਆ ਰਹੇ।", "ਆਰਾਮਦਾਇਕ ਰਫ਼ਤਾਰ ਨਾਲ ਪੈਡਲ ਕਰੋ।", "ਸਧਾਰਣ ਸਾਹ ਲੈਂਦੇ ਰਹੋ।"],
    { sets: 1, restEn: "Easy", restPa: "ਆਰਾਮ ਨਾਲ" }
  ),
  "Comfortable Walk": makeAlt(
    "Stationary Bike", "ਸਟੇਸ਼ਨਰੀ ਬਾਈਕ", null,
    "15–20 min", "15–20 ਮਿੰਟ",
    "Keep the resistance easy and pedal smoothly.", "ਰਜ਼ਿਸਟੈਂਸ ਹਲਕੀ ਰੱਖੋ ਅਤੇ ਆਰਾਮ ਨਾਲ ਪੈਡਲ ਕਰੋ।",
    ["Adjust the seat comfortably.", "Pedal at an easy steady pace.", "Slow down if breathing becomes difficult."],
    ["ਸੀਟ ਆਰਾਮ ਨਾਲ ਸੈੱਟ ਕਰੋ।", "ਹੌਲੀ ਅਤੇ ਸਥਿਰ ਰਫ਼ਤਾਰ ਨਾਲ ਪੈਡਲ ਕਰੋ।", "ਜੇ ਸਾਹ ਲੈਣਾ ਔਖਾ ਹੋਵੇ ਤਾਂ ਰਫ਼ਤਾਰ ਘਟਾਓ।"],
    { sets: 1, restEn: "Easy", restPa: "ਆਰਾਮ ਨਾਲ" }
  ),
  "Supported Balance Hold": makeAlt(
    "Heel-to-Toe Stand", "ਐੜੀ-ਤੋਂ-ਪੈਰ ਅੱਗੇ ਰੱਖ ਕੇ ਖੜ੍ਹਨਾ", null,
    "20 sec each side", "ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ",
    "Stay close to a wall or rail.", "ਦੀਵਾਰ ਜਾਂ ਰੇਲ ਦੇ ਨੇੜੇ ਰਹੋ।",
    ["Place one foot directly in front of the other.", "Keep one hand near support.", "Look forward and hold steadily."],
    ["ਇੱਕ ਪੈਰ ਦੂਜੇ ਦੇ ਬਿਲਕੁਲ ਅੱਗੇ ਰੱਖੋ।", "ਇੱਕ ਹੱਥ ਸਹਾਰੇ ਦੇ ਨੇੜੇ ਰੱਖੋ।", "ਅੱਗੇ ਵੇਖੋ ਅਤੇ ਸਥਿਰ ਖੜ੍ਹੇ ਰਹੋ।"],
    { restEn: "30 sec", restPa: "30 ਸਕਿੰਟ" }
  ),
  "Supported Single-Leg Stand": makeAlt(
    "Heel-to-Toe Stand", "ਐੜੀ-ਤੋਂ-ਪੈਰ ਅੱਗੇ ਰੱਖ ਕੇ ਖੜ੍ਹਨਾ", null,
    "20 sec each side", "ਹਰ ਪਾਸੇ 20 ਸਕਿੰਟ",
    "Stay close to a wall or rail.", "ਦੀਵਾਰ ਜਾਂ ਰੇਲ ਦੇ ਨੇੜੇ ਰਹੋ।",
    ["Place one foot directly in front of the other.", "Keep one hand near support.", "Look forward and hold steadily."],
    ["ਇੱਕ ਪੈਰ ਦੂਜੇ ਦੇ ਬਿਲਕੁਲ ਅੱਗੇ ਰੱਖੋ।", "ਇੱਕ ਹੱਥ ਸਹਾਰੇ ਦੇ ਨੇੜੇ ਰੱਖੋ।", "ਅੱਗੇ ਵੇਖੋ ਅਤੇ ਸਥਿਰ ਖੜ੍ਹੇ ਰਹੋ।"],
    { restEn: "30 sec", restPa: "30 ਸਕਿੰਟ" }
  ),
  "Machine Chest Press": makeAlt(
    "Dumbbell Bench Press", "ਡੰਬਲ ਬੈਂਚ ਪ੍ਰੈੱਸ", "images/exercises/dumbbell-bench-press.svg",
    "10 reps", "10 ਰੈਪ",
    "Use light dumbbells and keep the movement controlled.", "ਹਲਕੇ ਡੰਬਲ ਵਰਤੋ ਅਤੇ ਮੂਵਮੈਂਟ ਕੰਟਰੋਲ ਨਾਲ ਕਰੋ।",
    ["Sit on the bench with dumbbells close to the chest.", "Lie back with feet flat on the floor.", "Press up while breathing out, then lower slowly."],
    ["ਡੰਬਲ ਛਾਤੀ ਦੇ ਨੇੜੇ ਰੱਖ ਕੇ ਬੈਂਚ ਤੇ ਬੈਠੋ।", "ਪਿੱਛੇ ਲੇਟੋ ਅਤੇ ਪੈਰ ਜ਼ਮੀਨ ਤੇ ਰੱਖੋ।", "ਸਾਹ ਬਾਹਰ ਕੱਢਦੇ ਹੋਏ ਉੱਪਰ ਧੱਕੋ ਅਤੇ ਹੌਲੀ ਹੇਠਾਂ ਲਿਆਓ।"],
    { restEn: "75–90 sec", restPa: "75–90 ਸਕਿੰਟ" }
  ),
  "Incline Chest Press Machine": makeAlt(
    "Incline Dumbbell Press", "ਇਨਕਲਾਈਨ ਡੰਬਲ ਪ੍ਰੈੱਸ", "images/exercises/incline-dumbbell-press.svg",
    "10 reps", "10 ਰੈਪ",
    "Keep the bench angle moderate and use light dumbbells.", "ਬੈਂਚ ਦਾ ਐਂਗਲ ਮੱਧਮ ਰੱਖੋ ਅਤੇ ਹਲਕੇ ਡੰਬਲ ਵਰਤੋ।",
    ["Set the bench to a moderate incline.", "Keep feet flat and shoulders supported.", "Press smoothly, then lower with control."],
    ["ਬੈਂਚ ਨੂੰ ਮੱਧਮ ਇਨਕਲਾਈਨ ਤੇ ਸੈੱਟ ਕਰੋ।", "ਪੈਰ ਜ਼ਮੀਨ ਤੇ ਅਤੇ ਮੋਢੇ ਸਹਾਰੇ ਨਾਲ ਰੱਖੋ।", "ਹੌਲੀ ਉੱਪਰ ਪ੍ਰੈੱਸ ਕਰੋ ਅਤੇ ਕੰਟਰੋਲ ਨਾਲ ਹੇਠਾਂ ਲਿਆਓ।"],
    { restEn: "75–90 sec", restPa: "75–90 ਸਕਿੰਟ" }
  ),
  "Pec Deck / Chest Fly": makeAlt(
    "Cable Chest Fly", "ਕੇਬਲ ਚੈਸਟ ਫਲਾਈ", "images/exercises/cable-fly.svg",
    "10–12 reps", "10–12 ਰੈਪ",
    "Use light resistance and a comfortable range.", "ਹਲਕਾ ਰਜ਼ਿਸਟੈਂਸ ਵਰਤੋ ਅਤੇ ਆਰਾਮਦਾਇਕ ਰੇਂਜ ਵਿੱਚ ਕਰੋ।",
    ["Set the handles around chest height.", "Keep a small bend in the elbows.", "Bring the hands together slowly, then return with control."],
    ["ਹੈਂਡਲ ਛਾਤੀ ਦੇ ਲੈਵਲ ਦੇ ਨੇੜੇ ਸੈੱਟ ਕਰੋ।", "ਕੋਹਣੀਆਂ ਵਿੱਚ ਹਲਕਾ ਮੋੜ ਰੱਖੋ।", "ਹੱਥ ਹੌਲੀ ਇਕੱਠੇ ਲਿਆਓ ਅਤੇ ਕੰਟਰੋਲ ਨਾਲ ਵਾਪਸ ਜਾਓ।"]
  ),
  "Rope Triceps Pushdown": makeAlt(
    "Straight-Bar Triceps Pushdown", "ਸਟ੍ਰੇਟ-ਬਾਰ ਟ੍ਰਾਈਸੈਪਸ ਪੁਸ਼ਡਾਊਨ", "images/exercises/tricep-pushdown.svg",
    "10–12 reps", "10–12 ਰੈਪ",
    "Keep the elbows beside the body.", "ਕੋਹਣੀਆਂ ਸਰੀਰ ਦੇ ਨਾਲ ਰੱਖੋ।",
    ["Stand tall facing the cable.", "Keep elbows tucked in.", "Push the bar down while breathing out and return slowly."],
    ["ਕੇਬਲ ਵੱਲ ਮੂੰਹ ਕਰਕੇ ਸਿੱਧੇ ਖੜ੍ਹੋ।", "ਕੋਹਣੀਆਂ ਅੰਦਰ ਰੱਖੋ।", "ਸਾਹ ਬਾਹਰ ਕੱਢਦੇ ਹੋਏ ਬਾਰ ਹੇਠਾਂ ਧੱਕੋ ਅਤੇ ਹੌਲੀ ਵਾਪਸ ਲਿਆਓ।"]
  ),
  "Lat Pulldown": makeAlt(
    "Assisted Pull-Up", "ਅਸਿਸਟਡ ਪੁਲ-ਅੱਪ", "images/exercises/assisted-pull-up.svg",
    "8–10 reps", "8–10 ਰੈਪ",
    "Use enough assistance to keep every rep smooth.", "ਇੰਨੀ ਸਹਾਇਤਾ ਵਰਤੋ ਕਿ ਹਰ ਰੈਪ ਆਰਾਮ ਨਾਲ ਹੋਵੇ।",
    ["Set the assistance before stepping on.", "Grip the handles and keep the chest tall.", "Pull up smoothly and lower slowly."],
    ["ਮਸ਼ੀਨ ਤੇ ਚੜ੍ਹਣ ਤੋਂ ਪਹਿਲਾਂ ਸਹਾਇਤਾ ਸੈੱਟ ਕਰੋ।", "ਹੈਂਡਲ ਫੜੋ ਅਤੇ ਛਾਤੀ ਉੱਪਰ ਰੱਖੋ।", "ਹੌਲੀ ਉੱਪਰ ਖਿੱਚੋ ਅਤੇ ਕੰਟਰੋਲ ਨਾਲ ਹੇਠਾਂ ਆਓ।"],
    { restEn: "75–90 sec", restPa: "75–90 ਸਕਿੰਟ" }
  ),
  "Seated Cable Row": makeAlt(
    "Chest-Supported Row", "ਚੈਸਟ-ਸਪੋਰਟਡ ਰੋ", "images/exercises/chest-supported-row.svg",
    "10–12 reps", "10–12 ਰੈਪ",
    "Let the pad support your chest.", "ਪੈਡ ਨੂੰ ਛਾਤੀ ਦਾ ਸਹਾਰਾ ਲੈਣ ਦਿਓ।",
    ["Adjust the seat so the chest rests comfortably on the pad.", "Pull the elbows back without shrugging.", "Return slowly."],
    ["ਸੀਟ ਇਸ ਤਰ੍ਹਾਂ ਸੈੱਟ ਕਰੋ ਕਿ ਛਾਤੀ ਪੈਡ ਤੇ ਆਰਾਮ ਨਾਲ ਟਿਕੇ।", "ਮੋਢੇ ਚੁੱਕੇ ਬਿਨਾਂ ਕੋਹਣੀਆਂ ਪਿੱਛੇ ਖਿੱਚੋ।", "ਹੌਲੀ ਵਾਪਸ ਜਾਓ।"],
    { restEn: "75–90 sec", restPa: "75–90 ਸਕਿੰਟ" }
  ),
  "Chest-Supported Row": makeAlt(
    "Single-Arm Cable Row", "ਇੱਕ ਬਾਂਹ ਕੇਬਲ ਰੋ", "images/exercises/single-arm-cable-row.svg",
    "10 each side", "ਹਰ ਪਾਸੇ 10 ਰੈਪ",
    "Keep the torso still while one arm rows.", "ਇੱਕ ਬਾਂਹ ਖਿੱਚਦੇ ਸਮੇਂ ਧੜ ਸਥਿਰ ਰੱਖੋ।",
    ["Stand or sit tall facing the cable.", "Pull one elbow back toward the ribs.", "Return slowly, then repeat on the other side."],
    ["ਕੇਬਲ ਵੱਲ ਮੂੰਹ ਕਰਕੇ ਸਿੱਧੇ ਬੈਠੋ ਜਾਂ ਖੜ੍ਹੋ।", "ਇੱਕ ਕੋਹਣੀ ਪੱਸਲੀਆਂ ਵੱਲ ਪਿੱਛੇ ਖਿੱਚੋ।", "ਹੌਲੀ ਵਾਪਸ ਜਾਓ ਅਤੇ ਦੂਜੇ ਪਾਸੇ ਕਰੋ।"]
  ),
  "Cable Biceps Curl": makeAlt(
    "Dumbbell Biceps Curl", "ਡੰਬਲ ਬਾਈਸੈਪਸ ਕਰਲ", "images/exercises/bicep-curl.svg",
    "10–12 reps", "10–12 ਰੈਪ",
    "Keep the elbows close and avoid swinging.", "ਕੋਹਣੀਆਂ ਨੇੜੇ ਰੱਖੋ ਅਤੇ ਸਰੀਰ ਨਾ ਝੁਲਾਓ।",
    ["Stand tall holding light dumbbells.", "Curl without moving the upper arms.", "Lower the dumbbells slowly."],
    ["ਹਲਕੇ ਡੰਬਲ ਫੜ ਕੇ ਸਿੱਧੇ ਖੜ੍ਹੋ।", "ਉੱਪਰੀ ਬਾਂਹਾਂ ਹਿਲਾਏ ਬਿਨਾਂ ਕਰਲ ਕਰੋ।", "ਡੰਬਲ ਹੌਲੀ ਹੇਠਾਂ ਲਿਆਓ।"]
  ),
  "Sit-to-Stand": makeAlt(
    "Supported Mini Squat", "ਸਹਾਰੇ ਨਾਲ ਹਲਕਾ ਸਕਵਾਟ", null,
    "8 reps", "8 ਰੈਪ",
    "Hold a sturdy support and use a small comfortable range.", "ਮਜ਼ਬੂਤ ਸਹਾਰਾ ਫੜੋ ਅਤੇ ਛੋਟੀ ਆਰਾਮਦਾਇਕ ਰੇਂਜ ਵਰਤੋ।",
    ["Stand holding a rail or stable support.", "Push the hips slightly back and bend the knees a little.", "Stand tall again without rushing."],
    ["ਰੇਲ ਜਾਂ ਮਜ਼ਬੂਤ ਸਹਾਰਾ ਫੜ ਕੇ ਖੜ੍ਹੋ।", "ਹਿੱਪ ਥੋੜ੍ਹੇ ਪਿੱਛੇ ਕਰਕੇ ਘੁੱਟਣੇ ਹਲਕੇ ਮੋੜੋ।", "ਬਿਨਾਂ ਜਲਦੀ ਕੀਤੇ ਮੁੜ ਸਿੱਧੇ ਖੜ੍ਹੋ।"]
  ),
  "Leg Press": makeAlt(
    "Goblet Squat", "ਗੋਬਲੈਟ ਸਕਵਾਟ", "images/exercises/goblet-squat.svg",
    "10 reps", "10 ਰੈਪ",
    "Use a light dumbbell and squat only as low as comfortable.", "ਹਲਕਾ ਡੰਬਲ ਵਰਤੋ ਅਤੇ ਸਿਰਫ਼ ਆਰਾਮਦਾਇਕ ਹੱਦ ਤੱਕ ਹੇਠਾਂ ਜਾਓ।",
    ["Hold one dumbbell close to the chest.", "Sit the hips back and bend the knees comfortably.", "Stand up smoothly while breathing out."],
    ["ਇੱਕ ਡੰਬਲ ਛਾਤੀ ਦੇ ਨੇੜੇ ਫੜੋ।", "ਹਿੱਪ ਪਿੱਛੇ ਲੈ ਜਾ ਕੇ ਘੁੱਟਣੇ ਆਰਾਮ ਨਾਲ ਮੋੜੋ।", "ਸਾਹ ਬਾਹਰ ਕੱਢਦੇ ਹੋਏ ਹੌਲੀ ਖੜ੍ਹੋ।"],
    { restEn: "90 sec", restPa: "90 ਸਕਿੰਟ" }
  ),
  "Seated Leg Curl": makeAlt(
    "Lying Leg Curl", "ਲਾਇੰਗ ਲੈਗ ਕਰਲ", "images/exercises/lying-leg-curl.svg",
    "10 reps", "10 ਰੈਪ",
    "Keep the hips down and move slowly.", "ਹਿੱਪ ਹੇਠਾਂ ਰੱਖੋ ਅਤੇ ਹੌਲੀ ਮੂਵਮੈਂਟ ਕਰੋ।",
    ["Lie face down and set the ankle pad comfortably.", "Curl the heels toward the body.", "Lower the weight slowly."],
    ["ਮੂੰਹ ਹੇਠਾਂ ਲੇਟੋ ਅਤੇ ਐਂਕਲ ਪੈਡ ਆਰਾਮ ਨਾਲ ਸੈੱਟ ਕਰੋ।", "ਐੜੀਆਂ ਨੂੰ ਸਰੀਰ ਵੱਲ ਕਰਲ ਕਰੋ।", "ਵਜ਼ਨ ਹੌਲੀ ਹੇਠਾਂ ਲਿਆਓ।"],
    { restEn: "60–75 sec", restPa: "60–75 ਸਕਿੰਟ" }
  ),
  "Leg Extension": makeAlt(
    "Supported Step-Up", "ਸਹਾਰੇ ਨਾਲ ਸਟੈਪ-ਅੱਪ", null,
    "8 each leg", "ਹਰ ਲੱਤ 8 ਰੈਪ",
    "Use a low step and hold support.", "ਛੋਟਾ ਸਟੈਪ ਵਰਤੋ ਅਤੇ ਸਹਾਰਾ ਫੜੋ।",
    ["Stand close to a low stable step.", "Hold a rail and step up with one foot.", "Step down slowly and repeat on the other leg."],
    ["ਛੋਟੇ ਮਜ਼ਬੂਤ ਸਟੈਪ ਦੇ ਨੇੜੇ ਖੜ੍ਹੋ।", "ਰੇਲ ਫੜ ਕੇ ਇੱਕ ਪੈਰ ਨਾਲ ਉੱਪਰ ਚੜ੍ਹੋ।", "ਹੌਲੀ ਹੇਠਾਂ ਆਓ ਅਤੇ ਦੂਜੇ ਪੈਰ ਨਾਲ ਦੁਹਰਾਓ।"]
  ),
  "Standing Calf Raise": makeAlt(
    "Seated Calf Raise", "ਸੀਟਡ ਕਾਫ਼ ਰੇਜ਼", "images/exercises/seated-calf-raise.svg",
    "12–15 reps", "12–15 ਰੈਪ",
    "Pause briefly at the top.", "ਉੱਪਰ ਇੱਕ ਪਲ ਰੁਕੋ।",
    ["Sit with feet planted on the platform.", "Raise the heels slowly.", "Pause, then lower under control."],
    ["ਪੈਰ ਪਲੇਟਫਾਰਮ ਤੇ ਰੱਖ ਕੇ ਬੈਠੋ।", "ਐੜੀਆਂ ਹੌਲੀ ਉੱਪਰ ਚੁੱਕੋ।", "ਇੱਕ ਪਲ ਰੁਕੋ ਅਤੇ ਕੰਟਰੋਲ ਨਾਲ ਹੇਠਾਂ ਲਿਆਓ।"]
  ),
  "Machine Shoulder Press": makeAlt(
    "Seated Dumbbell Press", "ਸੀਟਡ ਡੰਬਲ ਪ੍ਰੈੱਸ", "images/exercises/seated-dumbbell-press.svg",
    "10 reps", "10 ਰੈਪ",
    "Use light dumbbells and keep the back supported.", "ਹਲਕੇ ਡੰਬਲ ਵਰਤੋ ਅਤੇ ਪਿੱਠ ਨੂੰ ਸਹਾਰਾ ਦਿਓ।",
    ["Sit against a backrest with dumbbells near shoulder level.", "Press upward while breathing out.", "Lower slowly without forcing the shoulders."],
    ["ਬੈਕਰੇਸਟ ਨਾਲ ਬੈਠੋ ਅਤੇ ਡੰਬਲ ਮੋਢਿਆਂ ਦੇ ਨੇੜੇ ਰੱਖੋ।", "ਸਾਹ ਬਾਹਰ ਕੱਢਦੇ ਹੋਏ ਉੱਪਰ ਪ੍ਰੈੱਸ ਕਰੋ।", "ਮੋਢਿਆਂ ਤੇ ਜ਼ੋਰ ਪਾਏ ਬਿਨਾਂ ਹੌਲੀ ਹੇਠਾਂ ਲਿਆਓ।"],
    { restEn: "75–90 sec", restPa: "75–90 ਸਕਿੰਟ" }
  ),
  "Dumbbell Lateral Raise": makeAlt(
    "Cable Lateral Raise", "ਕੇਬਲ ਲੈਟਰਲ ਰੇਜ਼", "images/exercises/cable-lateral-raise.svg",
    "10–12 reps", "10–12 ਰੈਪ",
    "Use light resistance and stop around shoulder height.", "ਹਲਕਾ ਰਜ਼ਿਸਟੈਂਸ ਵਰਤੋ ਅਤੇ ਮੋਢਿਆਂ ਦੇ ਲੈਵਲ ਦੇ ਨੇੜੇ ਰੁਕੋ।",
    ["Stand side-on to a low cable.", "Raise the arm out to the side slowly.", "Lower under control and repeat on the other side."],
    ["ਲੋ ਕੇਬਲ ਦੇ ਪਾਸੇ ਖੜ੍ਹੋ।", "ਬਾਂਹ ਨੂੰ ਹੌਲੀ ਪਾਸੇ ਵੱਲ ਚੁੱਕੋ।", "ਕੰਟਰੋਲ ਨਾਲ ਹੇਠਾਂ ਲਿਆਓ ਅਤੇ ਦੂਜੇ ਪਾਸੇ ਕਰੋ।"]
  ),
  "Reverse Pec Deck": makeAlt(
    "Cable Rear-Delt Fly", "ਕੇਬਲ ਰੀਅਰ-ਡੈਲਟ ਫਲਾਈ", "images/exercises/cable-rear-delt-fly.svg",
    "10–12 reps", "10–12 ਰੈਪ",
    "Keep the weight light and shoulders relaxed.", "ਵਜ਼ਨ ਹਲਕਾ ਰੱਖੋ ਅਤੇ ਮੋਢੇ ਢਿੱਲੇ ਰੱਖੋ।",
    ["Set the cables around shoulder height.", "Open the arms without arching the back.", "Return slowly."],
    ["ਕੇਬਲ ਮੋਢਿਆਂ ਦੇ ਲੈਵਲ ਦੇ ਨੇੜੇ ਸੈੱਟ ਕਰੋ।", "ਪਿੱਠ ਨੂੰ ਵੱਧ ਮੋੜੇ ਬਿਨਾਂ ਬਾਂਹਾਂ ਖੋਲ੍ਹੋ।", "ਹੌਲੀ ਵਾਪਸ ਆਓ।"]
  ),
  "Dead Bug": makeAlt(
    "Standing Pallof Press", "ਸਟੈਂਡਿੰਗ ਪੈਲੌਫ ਪ੍ਰੈੱਸ", "images/exercises/pallof-press.svg",
    "8 each side", "ਹਰ ਪਾਸੇ 8 ਰੈਪ",
    "Use light resistance and resist twisting.", "ਹਲਕਾ ਰਜ਼ਿਸਟੈਂਸ ਵਰਤੋ ਅਤੇ ਧੜ ਨੂੰ ਘੁੰਮਣ ਨਾ ਦਿਓ।",
    ["Stand sideways to the cable with both hands at the chest.", "Press the hands straight forward.", "Hold the torso still, return slowly, then change sides."],
    ["ਕੇਬਲ ਦੇ ਪਾਸੇ ਖੜ੍ਹ ਕੇ ਦੋਵੇਂ ਹੱਥ ਛਾਤੀ ਕੋਲ ਰੱਖੋ।", "ਹੱਥ ਸਿੱਧੇ ਅੱਗੇ ਧੱਕੋ।", "ਧੜ ਸਥਿਰ ਰੱਖੋ, ਹੌਲੀ ਵਾਪਸ ਆਓ ਅਤੇ ਪਾਸਾ ਬਦਲੋ।"]
  ),
  "Hammer Curl": makeAlt(
    "Rope Hammer Curl", "ਰੋਪ ਹੈਮਰ ਕਰਲ", "images/exercises/rope-hammer-curl.svg",
    "10 reps", "10 ਰੈਪ",
    "Keep the elbows still and wrists neutral.", "ਕੋਹਣੀਆਂ ਸਥਿਰ ਅਤੇ ਕਲਾਈ ਸਿੱਧੀ ਰੱਖੋ।",
    ["Hold the rope ends with neutral wrists.", "Curl toward the shoulders without swinging.", "Lower slowly."],
    ["ਰੋਪ ਦੇ ਸਿਰੇ ਫੜੋ ਅਤੇ ਕਲਾਈ ਸਿੱਧੀ ਰੱਖੋ।", "ਬਿਨਾਂ ਝੁਲਾਏ ਮੋਢਿਆਂ ਵੱਲ ਕਰਲ ਕਰੋ।", "ਹੌਲੀ ਹੇਠਾਂ ਲਿਆਓ।"]
  )
};

const exerciseVariantState = {};

function variantStateKey(dayIndex, exerciseIndex) {
  return `${dayIndex}-${exerciseIndex}`;
}

function getDisplayedExercise(baseExercise, exerciseIndex) {
  const alt = ALTERNATE_EXERCISES[baseExercise.name.en];
  const usingAlt = exerciseVariantState[variantStateKey(selectedDay, exerciseIndex)] === "alternate";

  if (alt && usingAlt) return alt;

  return {
    ...baseExercise,
    image: PRIMARY_IMAGES[baseExercise.name.en] || "images/exercises/placeholder.svg"
  };
}

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
let currentLang = localStorage.getItem("trainWithPapa-language") || "pa";

const els = {
  date: document.getElementById("todayDate"),
  tabs: document.getElementById("dayTabs"),
  dayLabel: document.getElementById("dayLabel"),
  muscle: document.getElementById("muscleGroup"),
  message: document.getElementById("dayMessage"),
  emoji: document.getElementById("heroEmoji"),
  muscleImage: document.getElementById("muscleHighlightImage"),
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

function exerciseId(exercise) {
  return exercise.name.en
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function exerciseHistoryKey(exercise) {
  return `trainWithPapa-lastDone-${exerciseId(exercise)}`;
}

function localDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatHistoryDate(value) {
  if (!value) return null;

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat(currentLang === "pa" ? "pa-IN" : "en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}

function updateExerciseHistoryIfComplete(exercise) {
  const allComplete = Array.from({ length: exercise.sets }, (_, setIndex) => {
    const key = storageKey(selectedDay, `exercise-${exerciseId(exercise)}`, setIndex + 1);
    return localStorage.getItem(key) === "1";
  }).every(Boolean);

  if (!allComplete) return;

  localStorage.setItem(exerciseHistoryKey(exercise), localDateString());

  const historyEl = document.querySelector(
    `[data-history-id="${exerciseId(exercise)}"]`
  );

  if (historyEl) {
    historyEl.textContent = `📅 ${ui[currentLang].lastDone}: ${formatHistoryDate(localDateString())}`;
  }
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

let lightboxAnimationTimer = null;

function stopLightboxAnimation() {
  if (lightboxAnimationTimer) {
    clearInterval(lightboxAnimationTimer);
    lightboxAnimationTimer = null;
  }
}

function getExerciseAnimationFrames(localPath) {
  if (!localPath) return null;

  const match = localPath.match(/^images\/exercises\/([a-z0-9-]+)\.svg$/);
  if (!match || match[1] === "placeholder") return null;

  const slug = match[1];

  return [
    `images/exercises/frames/${slug}-1.svg`,
    `images/exercises/${slug}.svg`,
    `images/exercises/frames/${slug}-3.svg`,
    `images/exercises/${slug}.svg`
  ];
}

function openImageLightbox(src, caption, localPath = null) {
  const dialog = document.getElementById("imageLightbox");
  const image = document.getElementById("lightboxImage");
  const label = document.getElementById("lightboxCaption");
  const status = document.getElementById("lightboxStatus");

  stopLightboxAnimation();

  image.src = src;
  image.alt = caption;
  label.textContent = caption;
  status.textContent = "";

  const frames = getExerciseAnimationFrames(localPath);
  const reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (frames && !reduceMotion) {
    frames.forEach(frameSrc => {
      const preload = new Image();
      preload.src = frameSrc;
    });

    let frameIndex = 0;
    image.src = frames[frameIndex];

    status.textContent =
      currentLang === "pa"
        ? "▶ ਕਸਰਤ ਦੀ ਪੂਰੀ ਮੂਵਮੈਂਟ"
        : "▶ Full movement preview";

    lightboxAnimationTimer = setInterval(() => {
      frameIndex = (frameIndex + 1) % frames.length;
      image.src = frames[frameIndex];
    }, 700);
  } else if (frames) {
    status.textContent =
      currentLang === "pa"
        ? "ਤਸਵੀਰ — ਮੂਵਮੈਂਟ ਐਨੀਮੇਸ਼ਨ ਬੰਦ ਹੈ"
        : "Static view — motion animation is disabled";
  }

  image.onerror = () => {
    stopLightboxAnimation();
    image.onerror = null;
    image.src = src;
    status.textContent = "";
  };

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeImageLightbox() {
  stopLightboxAnimation();

  const dialog = document.getElementById("imageLightbox");

  if (typeof dialog.close === "function" && dialog.open) {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
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

  els.muscleImage.src =
    MUSCLE_IMAGES[workout.muscle.en] || "images/muscles/recovery.svg";
  els.muscleImage.alt =
    currentLang === "pa"
      ? `${tx(workout.muscle)} — ਅੱਜ ਦੇ ਮੁੱਖ ਮਾਸਪੇਸ਼ੀ ਹਿੱਸੇ`
      : `${tx(workout.muscle)} — today's target muscle areas`;
  els.muscleImage.classList.add("zoomable-image");
  els.muscleImage.tabIndex = 0;
  els.muscleImage.setAttribute("role", "button");
  els.muscleImage.setAttribute(
    "aria-label",
    currentLang === "pa" ? "ਮਾਸਪੇਸ਼ੀਆਂ ਦੀ ਵੱਡੀ ਤਸਵੀਰ ਵੇਖੋ" : "View larger muscle image"
  );
  els.muscleImage.onclick = () => openImageLightbox(els.muscleImage.src, tx(workout.muscle));
  els.muscleImage.onkeydown = event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImageLightbox(els.muscleImage.src, tx(workout.muscle));
    }
  };

  els.warmups.innerHTML = "";
  workout.warmup.forEach((item, i) => {
    els.warmups.appendChild(makeCheckRow(item, storageKey(selectedDay, "warmup", i)));
  });

  els.exercises.innerHTML = "";

  workout.exercises.forEach((baseExercise, i) => {
    const exercise = getDisplayedExercise(baseExercise, i);
    const altAvailable = !!ALTERNATE_EXERCISES[baseExercise.name.en];
    const stateKey = variantStateKey(selectedDay, i);
    const usingAlt = exerciseVariantState[stateKey] === "alternate";

    const card = document.createElement("article");
    card.className = "exercise-card";

    const main = document.createElement("div");
    main.className = "exercise-main";

    const media = document.createElement("div");
    media.className = "exercise-media";

    const img = document.createElement("img");
    img.className = "exercise-demo-image";
    img.src = exercise.image || "images/exercises/placeholder.svg";
    img.alt = tx(exercise.name);
    img.loading = "lazy";
    img.decoding = "async";
    img.classList.add("zoomable-image");
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", `${tx(exercise.name)} — ${currentLang === "pa" ? "ਵੱਡੀ ਤਸਵੀਰ ਵੇਖੋ" : "view larger image"}`);

    const openExerciseImage = () => openImageLightbox(img.src, tx(exercise.name), exercise.image);
    img.addEventListener("click", openExerciseImage);
    img.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openExerciseImage();
      }
    });

    img.addEventListener("error", () => {
      img.onerror = null;
      img.src = "images/exercises/placeholder.svg";
    });

    media.appendChild(img);
    main.appendChild(media);

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

    const history = document.createElement("div");
    history.className = "exercise-history";
    history.dataset.historyId = exerciseId(exercise);

    const lastDoneValue = localStorage.getItem(exerciseHistoryKey(exercise));
    history.textContent = lastDoneValue
      ? `📅 ${t.lastDone}: ${formatHistoryDate(lastDoneValue)}`
      : `📅 ${t.neverDone}`;

    main.appendChild(history);

    const sets = document.createElement("div");
    sets.className = "sets";

    for (let setNo = 1; setNo <= exercise.sets; setNo++) {
      const label = document.createElement("label");
      label.className = "set-check";

      const input = document.createElement("input");
      input.type = "checkbox";

      const key = storageKey(
        selectedDay,
        `exercise-${exerciseId(exercise)}`,
        setNo
      );

      input.checked = localStorage.getItem(key) === "1";

      input.addEventListener("change", () => {
        localStorage.setItem(key, input.checked ? "1" : "0");
        updateExerciseHistoryIfComplete(exercise);
      });

      const span = document.createElement("span");
      span.textContent = `${t.set} ${setNo}`;

      label.append(input, span);
      sets.appendChild(label);
    }

    main.appendChild(sets);

    const how = document.createElement("details");
    how.className = "how";
    const howList = exercise.how
      .map(step => `<li>${tx(step)}</li>`)
      .join("");
    how.innerHTML = `<summary>ℹ️ ${t.showHow}</summary><ol>${howList}</ol>`;

    if (altAvailable) {
      const switchBtn = document.createElement("button");
      switchBtn.type = "button";
      switchBtn.className = "switch-exercise-btn";
      switchBtn.textContent = usingAlt ? t.showMain : t.switchAlternative;

      switchBtn.addEventListener("click", () => {
        exerciseVariantState[stateKey] = usingAlt ? "main" : "alternate";
        render();
      });

      card.append(main, switchBtn, how);
    } else {
      card.append(main, how);
    }

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

document.getElementById("closeLightbox").addEventListener("click", closeImageLightbox);

document.getElementById("imageLightbox").addEventListener("click", event => {
  if (event.target === event.currentTarget) closeImageLightbox();
});

document.getElementById("imageLightbox").addEventListener("cancel", () => {
  stopLightboxAnimation();
});

render();
