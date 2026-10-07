const workouts = [
  {
    day: "Sunday",
    short: "S",
    muscle: "Recovery Day",
    emoji: "🚶",
    message: "No heavy lifting today. Let the body recover so the next week feels stronger.",
    warmup: ["Easy walk — 5 minutes"],
    exercises: [
      { name: "Easy Walk", sets: 1, reps: "20–30 min", tip: "Comfortable pace. You should still be able to talk.", alt: "Easy stationary bike — 15–20 minutes", rest: "Easy" },
      { name: "Gentle Mobility", sets: 2, reps: "5 min", tip: "Move slowly through shoulders, hips and ankles.", alt: "Light full-body stretching", rest: "No rush" }
    ],
    stretches: ["Chest doorway stretch — 20 sec each side", "Hamstring stretch — 20 sec each side", "Calf stretch — 20 sec each side"]
  },
  {
    day: "Monday",
    short: "M",
    muscle: "Chest",
    emoji: "💪",
    message: "Smooth, controlled repetitions. Leave 2–3 good reps in the tank.",
    warmup: ["Treadmill or bike — 5 minutes", "Arm circles — 10 forward + 10 backward", "Very light chest press — 1 set × 12 reps"],
    exercises: [
      { name: "Machine Chest Press", sets: 3, reps: "10–12 reps", tip: "Keep shoulders back and press smoothly.", alt: "Dumbbell bench press — 3 × 10", rest: "60–90 sec" },
      { name: "Incline Chest Press Machine", sets: 3, reps: "10–12 reps", tip: "Do not flare the elbows too wide.", alt: "Incline dumbbell press — 3 × 10", rest: "60–90 sec" },
      { name: "Pec Deck / Chest Fly", sets: 3, reps: "12 reps", tip: "Use a comfortable range; do not overstretch.", alt: "Cable chest fly — 3 × 12", rest: "60 sec" },
      { name: "Wall or Incline Push-Up", sets: 2, reps: "8–12 reps", tip: "Keep the body straight and stop before form breaks.", alt: "Knee push-up — 2 × 8–10", rest: "60 sec" }
    ],
    stretches: ["Doorway chest stretch — 20–30 sec × 2", "Cross-body shoulder stretch — 20 sec each side"]
  },
  {
    day: "Tuesday",
    short: "T",
    muscle: "Back",
    emoji: "🏋️",
    message: "Pull with the elbows and keep the chest proud. No jerking the weight.",
    warmup: ["Treadmill or bike — 5 minutes", "Shoulder rolls — 10 each way", "Light lat pulldown — 1 set × 12 reps"],
    exercises: [
      { name: "Lat Pulldown", sets: 3, reps: "10–12 reps", tip: "Pull toward upper chest; do not pull behind the neck.", alt: "Assisted pull-up machine — 3 × 8–10", rest: "60–90 sec" },
      { name: "Seated Cable Row", sets: 3, reps: "10–12 reps", tip: "Stay tall and squeeze shoulder blades together.", alt: "Chest-supported row machine — 3 × 10–12", rest: "60–90 sec" },
      { name: "Chest-Supported Row", sets: 3, reps: "10–12 reps", tip: "Keep the chest on the pad and move under control.", alt: "One-arm cable row — 3 × 10 each side", rest: "60–90 sec" },
      { name: "Face Pull", sets: 2, reps: "12–15 reps", tip: "Use light weight and pull toward eye level.", alt: "Reverse pec deck — 2 × 12–15", rest: "60 sec" }
    ],
    stretches: ["Lat stretch while holding a post — 20–30 sec each side", "Upper-back hug stretch — 20–30 sec × 2"]
  },
  {
    day: "Wednesday",
    short: "W",
    muscle: "Legs",
    emoji: "🦵",
    message: "Use a comfortable range and controlled tempo. Never force painful knee or back positions.",
    warmup: ["Stationary bike — 5–7 minutes", "Bodyweight sit-to-stand — 10 reps", "Ankle circles — 10 each side"],
    exercises: [
      { name: "Leg Press", sets: 3, reps: "10–12 reps", tip: "Feet flat; do not lock the knees.", alt: "Goblet box squat — 3 × 10", rest: "90 sec" },
      { name: "Seated Leg Curl", sets: 3, reps: "10–12 reps", tip: "Move slowly and control the return.", alt: "Lying leg curl — 3 × 10–12", rest: "60–90 sec" },
      { name: "Leg Extension", sets: 2, reps: "10–12 reps", tip: "Use light-to-moderate weight and a pain-free range.", alt: "Supported step-up — 2 × 8 each leg", rest: "60 sec" },
      { name: "Standing Calf Raise", sets: 3, reps: "12–15 reps", tip: "Hold support and pause briefly at the top.", alt: "Seated calf raise — 3 × 12–15", rest: "60 sec" }
    ],
    stretches: ["Standing quad stretch — 20 sec each side", "Hamstring stretch — 20 sec each side", "Calf stretch — 20 sec each side"]
  },
  {
    day: "Thursday",
    short: "T",
    muscle: "Shoulders",
    emoji: "🙌",
    message: "Keep the weights modest. Shoulder training should feel controlled, not forced.",
    warmup: ["Treadmill — 5 minutes", "Arm circles — 10 each direction", "Very light shoulder press — 1 × 12"],
    exercises: [
      { name: "Machine Shoulder Press", sets: 3, reps: "10–12 reps", tip: "Keep the back supported and avoid shrugging.", alt: "Seated dumbbell press — 3 × 10", rest: "60–90 sec" },
      { name: "Dumbbell Lateral Raise", sets: 3, reps: "12 reps", tip: "Use light weights and raise only to shoulder height.", alt: "Cable lateral raise — 3 × 12", rest: "60 sec" },
      { name: "Reverse Pec Deck", sets: 3, reps: "12 reps", tip: "Open the arms without arching the back.", alt: "Rear-delt cable fly — 3 × 12", rest: "60 sec" },
      { name: "Cable Face Pull", sets: 2, reps: "12–15 reps", tip: "Keep elbows high and use a light weight.", alt: "Band pull-apart — 2 × 15", rest: "60 sec" }
    ],
    stretches: ["Cross-body shoulder stretch — 20 sec each side", "Gentle triceps/overhead stretch — 20 sec each side"]
  },
  {
    day: "Friday",
    short: "F",
    muscle: "Arms",
    emoji: "💪",
    message: "A simple biceps + triceps day. Control every repetition rather than chasing heavy weight.",
    warmup: ["Easy cardio — 5 minutes", "Elbow bends/extensions — 15 reps", "Very light cable curl + pushdown — 1 × 12 each"],
    exercises: [
      { name: "Cable Biceps Curl", sets: 3, reps: "10–12 reps", tip: "Keep elbows close to your sides.", alt: "Dumbbell curl — 3 × 10–12", rest: "60 sec" },
      { name: "Rope Triceps Pushdown", sets: 3, reps: "10–12 reps", tip: "Keep upper arms still and extend smoothly.", alt: "Straight-bar pushdown — 3 × 10–12", rest: "60 sec" },
      { name: "Hammer Curl", sets: 2, reps: "10–12 reps", tip: "Keep wrists neutral and avoid swinging.", alt: "Rope hammer curl — 2 × 10–12", rest: "60 sec" },
      { name: "Triceps Press Machine", sets: 2, reps: "10–12 reps", tip: "Use a comfortable elbow range.", alt: "Cable overhead extension — 2 × 10–12", rest: "60 sec" }
    ],
    stretches: ["Biceps wall stretch — 20 sec each side", "Triceps stretch — 20 sec each side", "Forearm stretch — 20 sec each side"]
  },
  {
    day: "Saturday",
    short: "S",
    muscle: "Core + Mobility",
    emoji: "🧘",
    message: "A lighter day to train balance, trunk control and movement without beating up the joints.",
    warmup: ["Easy walk — 5 minutes", "Hip circles — 10 each way", "Shoulder rolls — 10 each way"],
    exercises: [
      { name: "Dead Bug", sets: 3, reps: "6–8 each side", tip: "Keep lower back gently supported against the floor.", alt: "Heel taps — 3 × 8 each side", rest: "45–60 sec" },
      { name: "Bird Dog", sets: 3, reps: "6–8 each side", tip: "Move slowly and keep hips level.", alt: "Standing opposite arm/leg reach — 3 × 8", rest: "45–60 sec" },
      { name: "Pallof Press", sets: 2, reps: "10 each side", tip: "Resist rotation and keep the torso tall.", alt: "Cable hold — 2 × 20 sec each side", rest: "60 sec" },
      { name: "Supported Farmer Carry", sets: 3, reps: "30–45 sec", tip: "Walk tall with light dumbbells and steady breathing.", alt: "Treadmill walk — 10 minutes", rest: "60 sec" }
    ],
    stretches: ["Hip flexor stretch — 20 sec each side", "Gentle seated hamstring stretch — 20 sec each side", "Chest stretch — 20 sec × 2"]
  }
];

let selectedDay = new Date().getDay();

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
  done: document.getElementById("doneMessage")
};

function storageKey(dayIndex, type, index = "") {
  const week = new Date();
  const mondayOffset = (week.getDay() + 6) % 7;
  week.setDate(week.getDate() - mondayOffset);
  const weekId = week.toISOString().slice(0, 10);
  return `trainWithPapa-${weekId}-${dayIndex}-${type}-${index}`;
}

function makeCheckRow(text, key) {
  const label = document.createElement("label");
  label.className = "simple-row";
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = localStorage.getItem(key) === "1";
  input.addEventListener("change", () => localStorage.setItem(key, input.checked ? "1" : "0"));
  const span = document.createElement("span");
  span.textContent = text;
  label.append(input, span);
  return label;
}

function renderTabs() {
  els.tabs.innerHTML = "";
  workouts.forEach((workout, index) => {
    const btn = document.createElement("button");
    btn.className = "day-tab" + (index === selectedDay ? " active" : "");
    btn.textContent = workout.short;
    btn.title = workout.day;
    btn.addEventListener("click", () => {
      selectedDay = index;
      render();
    });
    els.tabs.appendChild(btn);
  });
}

function render() {
  const workout = workouts[selectedDay];
  renderTabs();

  els.dayLabel.textContent = workout.day.toUpperCase();
  els.muscle.textContent = workout.muscle;
  els.message.textContent = workout.message;
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
    main.innerHTML = `
      <div class="exercise-top">
        <div class="exercise-number">${i + 1}</div>
        <div class="exercise-name">
          <h4>${exercise.name}</h4>
          <p>${exercise.tip}</p>
        </div>
      </div>
      <div class="exercise-meta">
        <span class="meta-chip">🎯 ${exercise.reps}</span>
        <span class="meta-chip">⏱ ${exercise.rest} rest</span>
      </div>
    `;

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
      span.textContent = `SET ${setNo}`;
      label.append(input, span);
      sets.appendChild(label);
    }
    main.appendChild(sets);

    const alt = document.createElement("details");
    alt.className = "alt";
    alt.innerHTML = `<summary>↪ Show Alternative Exercise</summary><p>${exercise.alt}</p>`;

    card.append(main, alt);
    els.exercises.appendChild(card);
  });

  els.count.textContent = `${workout.exercises.length} exercises`;

  els.stretches.innerHTML = "";
  workout.stretches.forEach((item, i) => {
    els.stretches.appendChild(makeCheckRow(item, storageKey(selectedDay, "stretch", i)));
  });

  const complete = localStorage.getItem(storageKey(selectedDay, "complete")) === "1";
  els.finish.classList.toggle("done", complete);
  els.finish.textContent = complete ? "✓ Workout Completed" : "✓ Workout Done";
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

els.finish.addEventListener("click", () => {
  const key = storageKey(selectedDay, "complete");
  const complete = localStorage.getItem(key) !== "1";
  localStorage.setItem(key, complete ? "1" : "0");
  render();
  if (complete) window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

els.date.textContent = new Intl.DateTimeFormat("en-CA", {
  weekday: "long",
  month: "long",
  day: "numeric"
}).format(new Date());

render();
