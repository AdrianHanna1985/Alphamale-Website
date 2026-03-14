const weeklyCalendarData = [
  {
    dayKey: "sun",
    dayName: "Sunday",
    shortDay: "Sun",
    title: "Cycling",
    time: "9:00 AM",
    location: "Outdoor Ride",
    status: "planned",
    notes: "Endurance ride. Build aerobic engine and leg conditioning.",
    focus: "Steady aerobic work with smooth cadence and controlled effort.",
    warmup: "5–10 min easy spin before settling into ride pace.",
    actionLabel: "Coming Soon",
    actionHref: "#",
    isReady: false
  },
  {
    dayKey: "mon",
    dayName: "Monday",
    shortDay: "Mon",
    title: "Ruck",
    time: "1:00 PM",
    location: "Outdoor / Harbor or Hills",
    status: "done",
    notes: "Primary loaded carry day. Focus on posture, breathing, and steady pace.",
    focus: "Time on feet, pack comfort, aerobic durability.",
    warmup: "Easy walk, ankle work, glute bridges, light marching.",
    actionLabel: "Coming Soon",
    actionHref: "#",
    isReady: false
  },
  {
    dayKey: "tue",
    dayName: "Tuesday",
    shortDay: "Tue",
    title: "Upper",
    time: "YMCA",
    location: "Strength Floor",
    status: "done",
    notes: "Upper body strength session using machines + free weights.",
    focus: "Chest, pull, shoulders, arms, carries, and core.",
    warmup: "Incline walk or bike, band pull-aparts, light warm-up sets.",
    actionLabel: "Open Workout",
    actionHref: "tuesday_workout.html",
    isReady: true
  },
  {
    dayKey: "wed",
    dayName: "Wednesday",
    shortDay: "Wed",
    title: "Swim + Walk",
    time: "10:00 / 2:00",
    location: "YMCA + Outdoor",
    status: "done",
    notes: "Aerobic swim plus easy flat brisk walk. Low impact, recovery-biased.",
    focus: "Breathing, easy endurance, and active recovery.",
    warmup: "Easy mobility before swim, keep walk conversational.",
    actionLabel: "Coming Soon",
    actionHref: "#",
    isReady: false
  },
  {
    dayKey: "thu",
    dayName: "Thursday",
    shortDay: "Thu",
    title: "Upper",
    time: "YMCA",
    location: "Strength Floor",
    status: "today",
    notes: "Second upper body session of the week. Controlled form and clean reps.",
    focus: "Machines + dumbbells, volume quality, timer discipline.",
    warmup: "Incline walk or bike, shoulder prep, light warm-up sets.",
    actionLabel: "Open Workout",
    actionHref: "thursday_workout.html",
    isReady: true
  },
  {
    dayKey: "fri",
    dayName: "Friday",
    shortDay: "Fri",
    title: "Ruck",
    time: "1:00 PM",
    location: "Outdoor Route",
    status: "planned",
    notes: "Rhythm ruck day. Stay conversational and keep mechanics clean.",
    focus: "Aerobic base, pack tolerance, stride control.",
    warmup: "Easy walk, calf raises, hip hinge, low marching.",
    actionLabel: "Coming Soon",
    actionHref: "#",
    isReady: false
  },
  {
    dayKey: "sat",
    dayName: "Saturday",
    shortDay: "Sat",
    title: "Recovery",
    time: "Choose",
    location: "Flexible",
    status: "recovery",
    notes: "Active recovery only: easy swim, walk, mobility, or easy spin.",
    focus: "Restore, recover, reset.",
    warmup: "Keep it light. This is not a grind day.",
    actionLabel: "Coming Soon",
    actionHref: "#",
    isReady: false
  }
];

function formatToday() {
  const today = new Date();
  return today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function setCalendarHeaderDate() {
  const el = document.getElementById("calendarDate");
  if (el) el.textContent = formatToday();
}

function statusBadgeClass(status) {
  switch (status) {
    case "done":
      return "done";
    case "today":
      return "today";
    case "recovery":
      return "recovery";
    default:
      return "planned";
  }
}

function statusLabel(status) {
  switch (status) {
    case "done":
      return "Done";
    case "today":
      return "Today";
    case "recovery":
      return "Recovery";
    default:
      return "Planned";
  }
}

function cardClass(status) {
  switch (status) {
    case "done":
      return "completed";
    case "today":
      return "today";
    case "recovery":
      return "recovery";
    default:
      return "planned";
  }
}

function renderWeeklyCards() {
  const list = document.getElementById("calendarWeekList");
  if (!list) return;

  list.innerHTML = "";

  weeklyCalendarData.forEach((day, index) => {
    const card = document.createElement("article");
    card.className = `calendar-day-card glass ${cardClass(day.status)}`;

    const actionClass = day.isReady ? "" : "disabled";

    card.innerHTML = `
      <div class="calendar-day-top">
        <div class="calendar-day-label">
          <p class="calendar-day-name">${day.dayName}</p>
          <h3 class="calendar-day-title">${day.title}</h3>
          <p class="calendar-day-subtitle">${day.time} • ${day.location}</p>
        </div>

        <span class="status-badge ${statusBadgeClass(day.status)}">
          ${statusLabel(day.status)}
        </span>
      </div>

      <div class="calendar-day-body">
        <p class="calendar-notes-preview">${day.notes}</p>

        <div class="calendar-meta-row">
          <span class="calendar-meta-pill">${day.shortDay}</span>
          <span class="calendar-meta-pill">${day.time}</span>
          <span class="calendar-meta-pill">${day.location}</span>
        </div>

        <button
          class="calendar-expand-toggle"
          type="button"
          data-expand-index="${index}"
        >
          Show Details
        </button>

        <div class="calendar-day-details" id="day-details-${index}">
          <div class="calendar-detail-block">
            <p class="calendar-detail-label">Focus</p>
            <p class="calendar-detail-text">${day.focus}</p>
          </div>

          <div class="calendar-detail-block">
            <p class="calendar-detail-label">Warm-Up / Reminder</p>
            <p class="calendar-detail-text">${day.warmup}</p>
          </div>

          <div class="calendar-day-actions">
            <a
              class="btn btn-primary calendar-day-link ${actionClass}"
              href="${day.actionHref}"
            >
              ${day.actionLabel}
            </a>
          </div>
        </div>
      </div>
    `;

    list.appendChild(card);
  });

  attachExpandEvents();
}

function attachExpandEvents() {
  document.querySelectorAll("[data-expand-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.dataset.expandIndex;
      const details = document.getElementById(`day-details-${index}`);
      if (!details) return;

      const isOpen = details.classList.contains("open");
      details.classList.toggle("open", !isOpen);
      button.textContent = isOpen ? "Show Details" : "Hide Details";
    });
  });
}

function updateSummaryStats() {
  const planned = weeklyCalendarData.length;
  const completed = weeklyCalendarData.filter((d) => d.status === "done").length;

  const plannedEl = document.getElementById("plannedSessions");
  const completedEl = document.getElementById("completedSessions");

  if (plannedEl) plannedEl.textContent = planned;
  if (completedEl) completedEl.textContent = completed;
}

document.addEventListener("DOMContentLoaded", () => {
  setCalendarHeaderDate();
  renderWeeklyCards();
  updateSummaryStats();
});