const activityData = {
  title: "Mt. Whitney Benchmark Activity",
  subtitle: "Imported route and performance analysis",
  heroTitle: "Whitney Performance Analysis",
  heroSubtitle: "Analyze pace, elevation, heart rate, timing, and split performance.",

  summary: {
    distance: "10.80 mi",
    movingTime: "6:20:51",
    totalDuration: "9:18:33",
    elevationGain: "6,368 ft",
    avgPace: "35:17 /mi",
    calories: "4,952 kcal",
    avgHR: "141 bpm",
    maxHR: "175 bpm",
    maxAltitude: "14,505 ft",
    minAltitude: "8,360 ft"
  },

  chart: {
    pace: [62, 28, 54, 44, 50, 76, 34, 59, 19, 63, 40, 26, 60, 66, 68, 63],
    elevation: [86, 80, 74, 60, 42, 18, 8, 22, 48, 52, 68, 70, 75, 81, 87, 92],
    heartRate: [78, 60, 50, 38, 30, 24, 29, 36, 42, 39, 32, 26, 21, 16, 12, 9]
  },

  splits: {
    split01: [
      ["0.1", "14:52", "32 ft", "126"],
      ["0.2", "15:04", "28 ft", "129"],
      ["0.3", "15:18", "36 ft", "132"],
      ["0.4", "15:41", "41 ft", "135"],
      ["0.5", "16:02", "26 ft", "137"]
    ],
    split05: [
      ["0.5", "16:12", "161 ft", "128"],
      ["1.0", "16:43", "151 ft", "136"],
      ["1.5", "17:12", "75 ft", "143"],
      ["2.0", "16:40", "10 ft", "146"]
    ],
    split1: [
      ["1", "25:02", "502 ft", "128"],
      ["2", "29:21", "610 ft", "134"],
      ["3", "29:35", "538 ft", "141"],
      ["4", "28:51", "364 ft", "148"],
      ["5", "34:55", "518 ft", "153"],
      ["6", "40:02", "827 ft", "157"],
      ["7", "37:28", "597 ft", "151"],
      ["8", "43:05", "817 ft", "146"],
      ["9", "39:57", "673 ft", "141"],
      ["10", "41:36", "400 ft", "135"],
      ["10.8", "38:54", "522 ft", "131"]
    ],
    split5: [
      ["5", "29:33", "2,532 ft", "141"],
      ["10", "40:34", "3,314 ft", "145"]
    ]
  },

  pause: {
    start: "01:14:22",
    end: "01:17:03",
    duration: "2m 41s"
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

function setHeaderContent() {
  document.getElementById("activityDate").textContent = formatToday();
  document.getElementById("activityTitle").textContent = activityData.title;
  document.getElementById("activitySubtitle").textContent = activityData.subtitle;
  document.getElementById("activityHeroTitle").textContent = activityData.heroTitle;
  document.getElementById("activityHeroSubtitle").textContent = activityData.heroSubtitle;
}

function setSummaryMetrics() {
  const { summary } = activityData;

  document.getElementById("summaryDistance").textContent = summary.distance;
  document.getElementById("summaryMovingTime").textContent = summary.movingTime;
  document.getElementById("summaryTotalDuration").textContent = summary.totalDuration;
  document.getElementById("summaryElevationGain").textContent = summary.elevationGain;

  document.getElementById("metricAvgPace").textContent = summary.avgPace;
  document.getElementById("metricCalories").textContent = summary.calories;
  document.getElementById("metricAvgHR").textContent = summary.avgHR;
  document.getElementById("metricMaxHR").textContent = summary.maxHR;
  document.getElementById("metricMaxAltitude").textContent = summary.maxAltitude;
  document.getElementById("metricMinAltitude").textContent = summary.minAltitude;
}

function normalizeSeriesToPoints(series) {
  const width = 1000;
  const height = 360;
  const paddingX = 20;
  const usableWidth = width - paddingX * 2;
  const max = Math.max(...series);
  const min = Math.min(...series);
  const range = Math.max(1, max - min);

  return series
    .map((value, index) => {
      const x = paddingX + (usableWidth / (series.length - 1)) * index;
      const normalized = (value - min) / range;
      const y = 320 - normalized * 260;
      return `${x},${y}`;
    })
    .join(" ");
}

function renderChart() {
  document.getElementById("paceLine").setAttribute(
    "points",
    normalizeSeriesToPoints(activityData.chart.pace)
  );
  document.getElementById("elevationLine").setAttribute(
    "points",
    normalizeSeriesToPoints(activityData.chart.elevation)
  );
  document.getElementById("heartRateLine").setAttribute(
    "points",
    normalizeSeriesToPoints(activityData.chart.heartRate)
  );
}

function renderSplitTable(targetId, rows) {
  const body = document.getElementById(targetId);
  if (!body) return;

  body.innerHTML = rows
    .map(
      ([split, pace, elev, hr]) => `
        <tr>
          <td>${split}</td>
          <td>${pace}</td>
          <td>${elev}</td>
          <td>${hr}</td>
        </tr>
      `
    )
    .join("");
}

function renderAllSplits() {
  renderSplitTable("split01Body", activityData.splits.split01);
  renderSplitTable("split05Body", activityData.splits.split05);
  renderSplitTable("split1Body", activityData.splits.split1);
  renderSplitTable("split5Body", activityData.splits.split5);
}

function attachSplitTabs() {
  const tabs = document.querySelectorAll(".split-tab");
  const wraps = document.querySelectorAll(".split-table-wrap");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.splitTarget;

      tabs.forEach((t) => t.classList.remove("active"));
      wraps.forEach((w) => w.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(target)?.classList.add("active");
    });
  });
}

function setPauseInfo() {
  document.getElementById("pauseStart").textContent = activityData.pause.start;
  document.getElementById("pauseEnd").textContent = activityData.pause.end;
  document.getElementById("pauseDuration").textContent = activityData.pause.duration;
}

document.addEventListener("DOMContentLoaded", () => {
  setHeaderContent();
  setSummaryMetrics();
  renderChart();
  renderAllSplits();
  attachSplitTabs();
  setPauseInfo();
});