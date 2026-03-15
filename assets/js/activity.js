const activityLibrary = {
  arroyo: {
    title: "Big Arroyo Verde Park Hike",
    subtitle: "Imported route and performance analysis",
    heroTitle: "Arroyo Verde Performance Analysis",
    heroSubtitle: "Analyze pace, elevation, heart rate, timing, and split performance.",
    summary: {
      distance: "6.3 mi",
      movingTime: "1:45:12",
      totalDuration: "1:58:34",
      elevationGain: "Hill route",
      avgPace: "18:20 /mi",
      calories: "1,040 kcal",
      avgHR: "138 bpm",
      maxHR: "161 bpm",
      maxAltitude: "—",
      minAltitude: "—"
    },
    chart: {
      pace: [52, 44, 47, 42, 55, 60, 51, 48, 43, 46, 41, 45],
      elevation: [90, 82, 74, 61, 45, 26, 18, 30, 49, 64, 78, 88],
      heartRate: [84, 72, 63, 54, 39, 26, 20, 27, 41, 53, 65, 74]
    },
    splits: {
      split01: [
        ["0.1", "17:40", "18 ft", "128"],
        ["0.2", "18:02", "21 ft", "131"],
        ["0.3", "18:13", "24 ft", "134"],
        ["0.4", "18:30", "19 ft", "136"],
        ["0.5", "18:42", "14 ft", "137"]
      ],
      split05: [
        ["0.5", "18:35", "96 ft", "133"],
        ["1.0", "18:52", "122 ft", "137"],
        ["1.5", "19:10", "110 ft", "141"],
        ["2.0", "18:44", "84 ft", "143"]
      ],
      split1: [
        ["1", "18:52", "122 ft", "137"],
        ["2", "18:44", "84 ft", "143"],
        ["3", "19:08", "136 ft", "146"],
        ["4", "18:31", "71 ft", "142"],
        ["5", "18:58", "88 ft", "145"],
        ["6", "19:11", "95 ft", "147"]
      ],
      split5: [
        ["5", "18:49", "501 ft", "142"]
      ]
    },
    pause: {
      start: "00:48:22",
      end: "00:50:10",
      duration: "1m 48s"
    }
  },

  harmon: {
    title: "Harmon Canyon 20 Mile",
    subtitle: "Long endurance route analysis",
    heroTitle: "Harmon Canyon Activity Analysis",
    heroSubtitle: "Review long-duration pace, elevation demand, and endurance performance.",
    summary: {
      distance: "20.0 mi",
      movingTime: "6:40:00",
      totalDuration: "7:10:00",
      elevationGain: "Long endurance profile",
      avgPace: "20:00 /mi",
      calories: "3,200 kcal",
      avgHR: "139 bpm",
      maxHR: "162 bpm",
      maxAltitude: "—",
      minAltitude: "—"
    },
    chart: {
      pace: [60, 58, 55, 52, 54, 57, 53, 49, 50, 54, 56, 59],
      elevation: [88, 81, 75, 64, 53, 38, 28, 35, 50, 63, 76, 85],
      heartRate: [80, 74, 69, 60, 49, 39, 33, 40, 51, 63, 71, 76]
    },
    splits: {
      split01: [
        ["0.1", "19:45", "10 ft", "126"],
        ["0.2", "19:58", "11 ft", "128"],
        ["0.3", "20:11", "12 ft", "129"],
        ["0.4", "20:19", "13 ft", "130"],
        ["0.5", "20:22", "14 ft", "131"]
      ],
      split05: [
        ["0.5", "20:12", "60 ft", "129"],
        ["1.0", "20:08", "78 ft", "132"],
        ["1.5", "20:22", "88 ft", "135"],
        ["2.0", "20:31", "95 ft", "137"]
      ],
      split1: [
        ["1", "20:08", "78 ft", "132"],
        ["2", "20:31", "95 ft", "137"],
        ["3", "20:02", "110 ft", "141"],
        ["4", "19:58", "102 ft", "143"],
        ["5", "20:18", "121 ft", "145"]
      ],
      split5: [
        ["5", "20:11", "506 ft", "140"],
        ["10", "20:38", "644 ft", "144"],
        ["15", "21:02", "690 ft", "146"],
        ["20", "21:21", "702 ft", "148"]
      ]
    },
    pause: {
      start: "03:11:05",
      end: "03:15:44",
      duration: "4m 39s"
    }
  },

  harbor: {
    title: "Home / Marina Park / Ventura Harbor",
    subtitle: "Flat rhythm route analysis",
    heroTitle: "Harbor Route Activity Analysis",
    heroSubtitle: "Review flat loaded pace, rhythm, and long steady effort performance.",
    summary: {
      distance: "12.62 mi",
      movingTime: "3:33:02",
      totalDuration: "3:40:11",
      elevationGain: "203.4 ft",
      avgPace: "16:52 /mi",
      calories: "1,961 kcal",
      avgHR: "136 bpm",
      maxHR: "154 bpm",
      maxAltitude: "42 ft",
      minAltitude: "5 ft"
    },
    chart: {
      pace: [41, 38, 36, 35, 36, 37, 35, 34, 33, 34, 35, 36],
      elevation: [22, 23, 21, 20, 18, 17, 16, 17, 18, 19, 20, 22],
      heartRate: [76, 69, 61, 52, 44, 38, 41, 47, 54, 61, 67, 72]
    },
    splits: {
      split01: [
        ["0.1", "16:30", "1 ft", "130"],
        ["0.2", "16:42", "2 ft", "132"],
        ["0.3", "16:51", "0 ft", "133"],
        ["0.4", "16:55", "1 ft", "134"],
        ["0.5", "16:58", "2 ft", "135"]
      ],
      split05: [
        ["0.5", "16:52", "6 ft", "133"],
        ["1.0", "16:49", "10 ft", "135"],
        ["1.5", "16:57", "7 ft", "136"],
        ["2.0", "16:55", "8 ft", "137"]
      ],
      split1: [
        ["1", "16:49", "10 ft", "135"],
        ["2", "16:55", "8 ft", "137"],
        ["3", "16:58", "12 ft", "138"],
        ["4", "16:47", "13 ft", "139"],
        ["5", "16:53", "15 ft", "140"]
      ],
      split5: [
        ["5", "16:52", "58 ft", "138"],
        ["10", "16:59", "96 ft", "141"]
      ]
    },
    pause: {
      start: "01:46:10",
      end: "01:48:01",
      duration: "1m 51s"
    }
  },

  sulphur: {
    title: "Sulphur Mountain Bike Ride",
    subtitle: "Cycling performance analysis",
    heroTitle: "Sulphur Mountain Ride Analysis",
    heroSubtitle: "Review climbing pace, leg conditioning, and aerobic ride performance.",
    summary: {
      distance: "30.09 mi",
      movingTime: "3:09:25",
      totalDuration: "3:19:12",
      elevationGain: "1,261.2 ft",
      avgPace: "6:19 /mi",
      calories: "1,594 kcal",
      avgHR: "144 bpm",
      maxHR: "167 bpm",
      maxAltitude: "—",
      minAltitude: "—"
    },
    chart: {
      pace: [24, 29, 31, 33, 34, 35, 37, 39, 36, 34, 32, 30],
      elevation: [78, 73, 66, 58, 47, 33, 22, 31, 46, 57, 69, 76],
      heartRate: [88, 81, 72, 63, 53, 43, 38, 45, 56, 67, 76, 84]
    },
    splits: {
      split01: [
        ["0.1", "5:50", "4 ft", "132"],
        ["0.2", "6:02", "6 ft", "135"],
        ["0.3", "6:09", "3 ft", "137"],
        ["0.4", "6:14", "5 ft", "139"],
        ["0.5", "6:18", "7 ft", "140"]
      ],
      split05: [
        ["0.5", "6:12", "25 ft", "138"],
        ["1.0", "6:18", "34 ft", "141"],
        ["1.5", "6:24", "41 ft", "144"],
        ["2.0", "6:31", "46 ft", "146"]
      ],
      split1: [
        ["1", "6:18", "34 ft", "141"],
        ["2", "6:31", "46 ft", "146"],
        ["3", "6:25", "53 ft", "148"],
        ["4", "6:40", "61 ft", "149"],
        ["5", "6:48", "72 ft", "151"]
      ],
      split5: [
        ["5", "6:32", "266 ft", "147"],
        ["10", "6:40", "388 ft", "149"],
        ["15", "6:54", "271 ft", "146"],
        ["20", "6:58", "202 ft", "144"]
      ]
    },
    pause: {
      start: "01:25:22",
      end: "01:27:54",
      duration: "2m 32s"
    }
  },

  whitney: {
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
  },

  whitney2021: {
    title: "Mount Whitney Trail 2021-08-31",
    subtitle: "Historic benchmark performance",
    heroTitle: "Whitney 2021 Attempt Analysis",
    heroSubtitle: "Compare your earlier Whitney pacing and climbing strain against current goals.",
    summary: {
      distance: "5.29 mi",
      movingTime: "3:09:08",
      totalDuration: "3:28:18",
      elevationGain: "2,963 ft",
      avgPace: "35:44 /mi",
      calories: "2,737 kcal",
      avgHR: "146 bpm",
      maxHR: "168 bpm",
      maxAltitude: "—",
      minAltitude: "—"
    },
    chart: {
      pace: [58, 51, 49, 44, 46, 55, 62, 68, 73, 79, 84, 88],
      elevation: [85, 79, 71, 60, 49, 37, 23, 12, 20, 34, 49, 62],
      heartRate: [83, 72, 61, 50, 41, 31, 24, 28, 34, 43, 53, 66]
    },
    splits: {
      split01: [
        ["0.1", "21:55", "44 ft", "132"],
        ["0.2", "22:08", "51 ft", "135"],
        ["0.3", "22:20", "47 ft", "137"],
        ["0.4", "22:31", "55 ft", "138"],
        ["0.5", "22:39", "49 ft", "140"]
      ],
      split05: [
        ["0.5", "22:39", "249 ft", "140"],
        ["1.0", "27:28", "653 ft", "145"],
        ["1.5", "32:06", "525 ft", "149"],
        ["2.0", "37:28", "358 ft", "152"]
      ],
      split1: [
        ["1", "22:39", "518 ft", "141"],
        ["2", "27:28", "653 ft", "145"],
        ["3", "32:06", "525 ft", "149"],
        ["4", "37:28", "358 ft", "154"],
        ["5", "49:35", "604 ft", "158"],
        ["5.3", "67:30", "312 ft", "160"]
      ],
      split5: [
        ["5", "33:51", "2,658 ft", "149"]
      ]
    },
    pause: {
      start: "01:52:14",
      end: "01:56:22",
      duration: "4m 08s"
    }
  }
};

function getSelectedRouteId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("route") || "whitney";
}

const activityData = activityLibrary[getSelectedRouteId()] || activityLibrary.whitney;

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