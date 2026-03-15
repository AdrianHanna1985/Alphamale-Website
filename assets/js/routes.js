const routeLibrary = [
  {
    id: "arroyo",
    name: "Big Arroyo Verde Park Hike",
    type: "Hill-conditioning hike / ruck",
    distance: "6.3 mi",
    elevation: "Short route / hill exposure",
    pack: "20 lb start",
    use: "Hill Builder",
    purpose: "Use this route for hill exposure, short-to-moderate loaded efforts, and Whitney prep leg conditioning.",
    notes: "Start conservative. Use flatter stretches if knee pinch is triggered by bigger step height."
  },
  {
    id: "harmon",
    name: "Harmon Canyon 20 Mile",
    type: "Long endurance benchmark",
    distance: "20 mi",
    elevation: "Long endurance profile",
    pack: "Build gradually",
    use: "Long Engine",
    purpose: "Use this route for long loaded endurance, time-on-feet development, and later-stage mountain conditioning.",
    notes: "Do not force speed early. This is an advanced route for base building and long durability."
  },
  {
    id: "harbor",
    name: "Home / Marina Park / Ventura Harbor",
    type: "Flat rhythm route",
    distance: "Long flat walk / ruck",
    elevation: "Low elevation profile",
    pack: "Great for 18–25 lb work",
    use: "Rhythm Builder",
    purpose: "Use this route for pack rhythm, posture, breathing control, and safer joint-friendly volume.",
    notes: "Excellent route for pace practice and longer flat loaded work."
  },
  {
    id: "sulphur",
    name: "Sulphur Mountain Bike Ride",
    type: "Cycling route",
    distance: "Bike benchmark",
    elevation: "Climbing ride",
    pack: "No pack / cycling setup",
    use: "Leg Conditioning",
    purpose: "Use this route to improve aerobic conditioning, climbing legs, and cycling durability.",
    notes: "Good for longer tempo efforts and lower-impact engine building."
  },
  {
    id: "whitney",
    name: "Mt. Whitney Benchmark Hike",
    type: "Mountain benchmark",
    distance: "Whitney prep benchmark",
    elevation: "Major climbing profile",
    pack: "22–25 lb goal",
    use: "Summit Mission",
    purpose: "Use this as your primary benchmark for Whitney-specific fitness, endurance, and altitude-focused training prep.",
    notes: "This route represents your future performance standard and summit conditioning goal."
  },
  {
    id: "whitney2021",
    name: "Mount Whitney Trail 2021-08-31",
    type: "Historic benchmark",
    distance: "5.29 mi recorded segment",
    elevation: "2,963 ft recorded gain",
    pack: "Historic attempt",
    use: "Performance Reference",
    purpose: "Use this file as a historical reference point for pacing, climbing strain, and how far your fitness has already progressed.",
    notes: "Important benchmark for comparing your future Whitney performance."
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

function setRoutesDate() {
  const el = document.getElementById("routesDate");
  if (el) el.textContent = formatToday();
}

function renderRouteLibrary() {
  const library = document.getElementById("routesLibrary");
  if (!library) return;

  library.innerHTML = "";

  routeLibrary.forEach((route, index) => {
    const article = document.createElement("article");
    article.className = `route-card glass ${index === 0 ? "selected" : ""}`;
    article.dataset.routeId = route.id;

    article.innerHTML = `
      <div class="route-card-top">
        <div>
          <h3 class="route-card-name">${route.name}</h3>
          <p class="route-card-type">${route.type}</p>
        </div>
        <span class="status-badge planned">Route</span>
      </div>

      <div class="route-mini-meta">
        <span class="route-mini-pill">${route.distance}</span>
        <span class="route-mini-pill">${route.use}</span>
        <span class="route-mini-pill">${route.pack}</span>
      </div>

      <div class="route-card-actions">
        <button class="btn btn-secondary route-select-btn" type="button" data-route-id="${route.id}">
          View Details
        </button>

        <a class="btn btn-primary" href="activity.html?route=${route.id}">
          Open Activity
        </a>
      </div>
    `;

    library.appendChild(article);
  });

  attachRouteSelection();
}

function updateRouteDetailLink(route) {
  const link = document.getElementById("routeDetailOpenActivity");
  if (!link) return;
  link.href = `activity.html?route=${route.id}`;
}

function attachRouteSelection() {
  document.querySelectorAll(".route-select-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const routeId = btn.dataset.routeId;
      const selectedRoute = routeLibrary.find((r) => r.id === routeId);
      if (!selectedRoute) return;

      document.querySelectorAll(".route-card").forEach((card) => {
        card.classList.toggle("selected", card.dataset.routeId === routeId);
      });

      document.querySelectorAll(".legend-pill").forEach((pill) => {
        pill.classList.toggle("active", pill.dataset.route === routeId);
      });

      updateRouteDetail(selectedRoute);
    });
  });

  document.querySelectorAll(".legend-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const routeId = pill.dataset.route;
      const selectedRoute = routeLibrary.find((r) => r.id === routeId);
      if (!selectedRoute) return;

      document.querySelectorAll(".legend-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      document.querySelectorAll(".route-card").forEach((card) => {
        card.classList.toggle("selected", card.dataset.routeId === routeId);
      });

      updateRouteDetail(selectedRoute);
    });
  });
}

function updateRouteDetail(route) {
  const name = document.getElementById("routeDetailName");
  const type = document.getElementById("routeDetailType");
  const distance = document.getElementById("routeDistance");
  const elevation = document.getElementById("routeElevation");
  const pack = document.getElementById("routePack");
  const use = document.getElementById("routeUse");
  const purpose = document.getElementById("routePurpose");
  const notes = document.getElementById("routeNotes");

  if (name) name.textContent = route.name;
  if (type) type.textContent = route.type;
  if (distance) distance.textContent = route.distance;
  if (elevation) elevation.textContent = route.elevation;
  if (pack) pack.textContent = route.pack;
  if (use) use.textContent = route.use;
  if (purpose) purpose.textContent = route.purpose;
  if (notes) notes.textContent = route.notes;

  updateRouteDetailLink(route);
}

document.addEventListener("DOMContentLoaded", () => {
  setRoutesDate();
  renderRouteLibrary();
  updateRouteDetail(routeLibrary[0]);
});