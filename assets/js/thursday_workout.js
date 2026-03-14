const workoutExercises = [
  {
    name: "Chest Press (Machine)",
    targetSets: 3,
    targetReps: "12",
    targetWeights: [45, 45, 40]
  },
  {
    name: "Lat Pulldown (Machine)",
    targetSets: 3,
    targetReps: "12",
    targetWeights: [100, 100, 80]
  },
  {
    name: "Seated Row (Machine)",
    targetSets: 3,
    targetReps: "12",
    targetWeights: [120, 120, 100]
  },
  {
    name: "DB Incline Press",
    targetSets: 3,
    targetReps: "12",
    targetWeights: [35, 35, 25]
  },
  {
    name: "Face Pulls / Rear Delts",
    targetSets: 3,
    targetReps: "12",
    targetWeights: [55, 55, 50]
  },
  {
    name: "Assisted Pull-Ups",
    targetSets: 4,
    targetReps: "12",
    targetWeights: [175, 175, 175, 175]
  },
  {
    name: "Assisted Dips",
    targetSets: 4,
    targetReps: "12",
    targetWeights: [175, 175, 175, 175]
  },
  {
    name: "Overhead Press",
    targetSets: 3,
    targetReps: "12",
    targetWeights: [35, 30, 25]
  },
  {
    name: "Dumbbell Upright Row",
    targetSets: 3,
    targetReps: "12",
    targetWeights: [35, 35, 25]
  },
  {
    name: "Farmer Carry",
    targetSets: 3,
    targetReps: "70–85 yd",
    targetWeights: [50, 40, 30]
  },
  {
    name: "Dead Bug",
    targetSets: 3,
    targetReps: "12/side",
    targetWeights: [0, 0, 0]
  },
  {
    name: "Plank",
    targetSets: 3,
    targetReps: "30s",
    targetWeights: [0, 0, 0]
  }
];

const sessionState = {
  completedSets: 0,
  totalVolume: 0,
  timerInterval: null,
  currentTimerSeconds: 90
};

function formatToday() {
  const today = new Date();
  return today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function initHeaderDate() {
  const loggerDate = document.getElementById("loggerDate");
  if (loggerDate) loggerDate.textContent = formatToday();
}

function renderExercises() {
  const exerciseList = document.getElementById("exerciseList");
  const exerciseCount = document.getElementById("exerciseCount");
  if (!exerciseList) return;

  exerciseList.innerHTML = "";
  if (exerciseCount) exerciseCount.textContent = workoutExercises.length;

  workoutExercises.forEach((exercise, exerciseIndex) => {
    const exerciseCard = document.createElement("article");
    exerciseCard.className = "exercise-card glass";

    let setsHtml = "";

    for (let i = 0; i < exercise.targetSets; i++) {
      const targetWeight = exercise.targetWeights[i] ?? 0;
      const initialReps = extractNumericReps(exercise.targetReps);

      setsHtml += `
        <div class="set-card" data-exercise-index="${exerciseIndex}" data-set-index="${i}">
          <div class="set-top">
            <div>
              <div class="set-title">Set ${i + 1}</div>
              <div class="set-target">Target: ${targetWeight > 0 ? targetWeight + " lb" : "BW"} • ${exercise.targetReps}</div>
            </div>
          </div>

          <div class="set-input-grid">
            <div class="set-control">
              <label>Weight</label>
              <div class="stepper">
                <button type="button" data-action="decrease" data-type="weight" data-exercise="${exerciseIndex}" data-set="${i}">-</button>
                <div class="stepper-value" id="weight-value-${exerciseIndex}-${i}">${targetWeight}</div>
                <button type="button" data-action="increase" data-type="weight" data-exercise="${exerciseIndex}" data-set="${i}">+</button>
              </div>
            </div>

            <div class="set-control">
              <label>Reps / Time</label>
              <div class="stepper">
                <button type="button" data-action="decrease" data-type="reps" data-exercise="${exerciseIndex}" data-set="${i}">-</button>
                <div class="stepper-value" id="reps-value-${exerciseIndex}-${i}">${initialReps}</div>
                <button type="button" data-action="increase" data-type="reps" data-exercise="${exerciseIndex}" data-set="${i}">+</button>
              </div>
            </div>
          </div>

          <div class="set-actions">
            <button
              type="button"
              class="btn btn-secondary complete-set-btn"
              data-exercise="${exerciseIndex}"
              data-set="${i}"
            >
              Complete Set
            </button>
          </div>

          <div class="set-volume" id="set-volume-${exerciseIndex}-${i}">
            Set Volume: 0 lb
          </div>
        </div>
      `;
    }

    exerciseCard.innerHTML = `
      <div class="exercise-header">
        <div>
          <h3 class="exercise-name">${exercise.name}</h3>
          <p class="exercise-meta">${exercise.targetSets} sets • Target reps: ${exercise.targetReps}</p>
        </div>

        <label class="exercise-complete">
          <input type="checkbox" data-exercise-complete="${exerciseIndex}" />
          Done
        </label>
      </div>

      <div class="set-list">
        ${setsHtml}
      </div>

      <div class="exercise-footer">
        <div class="exercise-total" id="exercise-total-${exerciseIndex}">
          Exercise Total: 0 lb
        </div>
      </div>
    `;

    exerciseList.appendChild(exerciseCard);
  });

  attachSetControls();
}

function extractNumericReps(repText) {
  const match = String(repText).match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function attachSetControls() {
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", handleStepperClick);
  });

  document.querySelectorAll(".complete-set-btn").forEach((button) => {
    button.addEventListener("click", handleCompleteSet);
  });

  document.querySelectorAll(".symptom-buttons").forEach((group) => {
    group.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        group.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  });
}

function handleStepperClick(event) {
  const button = event.currentTarget;
  const action = button.dataset.action;
  const type = button.dataset.type;
  const exerciseIndex = button.dataset.exercise;
  const setIndex = button.dataset.set;

  const valueEl = document.getElementById(`${type}-value-${exerciseIndex}-${setIndex}`);
  if (!valueEl) return;

  let currentValue = Number(valueEl.textContent);
  const stepAmount = type === "weight" ? 5 : 1;

  if (action === "increase") {
    currentValue += stepAmount;
  } else {
    currentValue = Math.max(0, currentValue - stepAmount);
  }

  valueEl.textContent = currentValue;
  updateSetVolume(exerciseIndex, setIndex);
  updateExerciseTotal(exerciseIndex);
  updateWorkoutTotal();
}

function updateSetVolume(exerciseIndex, setIndex) {
  const weightEl = document.getElementById(`weight-value-${exerciseIndex}-${setIndex}`);
  const repsEl = document.getElementById(`reps-value-${exerciseIndex}-${setIndex}`);
  const volumeEl = document.getElementById(`set-volume-${exerciseIndex}-${setIndex}`);

  if (!weightEl || !repsEl || !volumeEl) return;

  const weight = Number(weightEl.textContent);
  const reps = Number(repsEl.textContent);
  const volume = weight * reps;

  volumeEl.textContent = `Set Volume: ${volume.toLocaleString()} lb`;
}

function updateExerciseTotal(exerciseIndex) {
  const exercise = workoutExercises[exerciseIndex];
  let total = 0;

  for (let i = 0; i < exercise.targetSets; i++) {
    const weightEl = document.getElementById(`weight-value-${exerciseIndex}-${i}`);
    const repsEl = document.getElementById(`reps-value-${exerciseIndex}-${i}`);

    if (weightEl && repsEl) {
      total += Number(weightEl.textContent) * Number(repsEl.textContent);
    }
  }

  const exerciseTotalEl = document.getElementById(`exercise-total-${exerciseIndex}`);
  if (exerciseTotalEl) {
    exerciseTotalEl.textContent = `Exercise Total: ${total.toLocaleString()} lb`;
  }
}

function updateWorkoutTotal() {
  let grandTotal = 0;

  workoutExercises.forEach((exercise, exerciseIndex) => {
    for (let i = 0; i < exercise.targetSets; i++) {
      const weightEl = document.getElementById(`weight-value-${exerciseIndex}-${i}`);
      const repsEl = document.getElementById(`reps-value-${exerciseIndex}-${i}`);

      if (weightEl && repsEl) {
        grandTotal += Number(weightEl.textContent) * Number(repsEl.textContent);
      }
    }
  });

  sessionState.totalVolume = grandTotal;
  const totalVolumeEl = document.getElementById("totalVolume");
  if (totalVolumeEl) {
    totalVolumeEl.textContent = `${grandTotal.toLocaleString()} lb`;
  }
}

function handleCompleteSet(event) {
  const btn = event.currentTarget;
  btn.textContent = "Set Complete";
  btn.disabled = true;

  sessionState.completedSets += 1;
  const setsCompletedEl = document.getElementById("setsCompleted");
  if (setsCompletedEl) {
    setsCompletedEl.textContent = sessionState.completedSets;
  }

  startTimer(90);
}

function startTimer(seconds) {
  clearInterval(sessionState.timerInterval);
  sessionState.currentTimerSeconds = seconds;

  const display = document.getElementById("restTimerDisplay");
  updateTimerDisplay(display, sessionState.currentTimerSeconds);

  sessionState.timerInterval = setInterval(() => {
    sessionState.currentTimerSeconds -= 1;
    updateTimerDisplay(display, sessionState.currentTimerSeconds);

    if (sessionState.currentTimerSeconds <= 0) {
      clearInterval(sessionState.timerInterval);
      if (display) display.textContent = "Done";
    }
  }, 1000);
}

function updateTimerDisplay(displayEl, seconds) {
  if (!displayEl) return;
  displayEl.textContent = `${seconds}s`;
}

function attachTimerButtons() {
  const warmupBtn = document.getElementById("startWarmupTimer");
  const restBtn = document.getElementById("startRestTimer");

  if (warmupBtn) {
    warmupBtn.addEventListener("click", () => startTimer(300));
  }

  if (restBtn) {
    restBtn.addEventListener("click", () => startTimer(90));
  }
}

function attachSessionButtons() {
  const saveWorkout = document.getElementById("saveWorkout");
  const clearWorkout = document.getElementById("clearWorkout");

  if (saveWorkout) {
    saveWorkout.addEventListener("click", () => {
      alert("Thursday workout saved locally later. For now, this is your working logger prototype.");
    });
  }

  if (clearWorkout) {
    clearWorkout.addEventListener("click", () => {
      window.location.reload();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initHeaderDate();
  renderExercises();
  attachTimerButtons();
  attachSessionButtons();
  updateWorkoutTotal();
});