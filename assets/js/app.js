const workoutData = {
  title: "Friday Ruck — Flats + Rhythm",
  subtitle: "1:00 PM • 18–20 lb pack • conversational effort",
  stats: {
    workouts: "4",
    streak: "6 days",
    weight: "269 lb",
    volume: "18,450 lb"
  }
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

function initDashboard() {
  const dateEl = document.getElementById("todayDate");
  const titleEl = document.getElementById("todayWorkoutTitle");
  const subtitleEl = document.getElementById("todayWorkoutSubtitle");

  const statWorkouts = document.getElementById("statWorkouts");
  const statStreak = document.getElementById("statStreak");
  const statWeight = document.getElementById("statWeight");
  const statVolume = document.getElementById("statVolume");

  if (dateEl) dateEl.textContent = formatToday();
  if (titleEl) titleEl.textContent = workoutData.title;
  if (subtitleEl) subtitleEl.textContent = workoutData.subtitle;

  if (statWorkouts) statWorkouts.textContent = workoutData.stats.workouts;
  if (statStreak) statStreak.textContent = workoutData.stats.streak;
  if (statWeight) statWeight.textContent = workoutData.stats.weight;
  if (statVolume) statVolume.textContent = workoutData.stats.volume;
}

function initMotionToggle() {
  const btn = document.getElementById("themeToggle");
  const video = document.querySelector(".bg-video");

  if (!btn || !video) return;

  let motionOn = true;

  btn.addEventListener("click", () => {
    motionOn = !motionOn;

    if (motionOn) {
      video.play().catch(() => {});
      btn.textContent = "Motion: ON";
    } else {
      video.pause();
      btn.textContent = "Motion: OFF";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
  initMotionToggle();
});