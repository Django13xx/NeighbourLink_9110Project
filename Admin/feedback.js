// Sample chart data
const chartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "User Engagement",
      data: [
        1200, 1500, 1800, 2100, 2400, 2700, 3000, 3200, 3400, 3600, 3800, 4000,
      ],
      backgroundColor: "rgba(76, 175, 80, 0.2)",
      borderColor: "rgba(76, 175, 80, 1)",
      borderWidth: 1,
    },
  ],
};

// Chart options
const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Create chart
const ctx = document.getElementById("userEngagementChart").getContext("2d");
const userEngagementChart = new Chart(ctx, {
  type: "line",
  data: chartData,
  options: chartOptions,
});

// Filter feedback items
const feedbackFilter = document.querySelector(".feedback-filter");
const feedbackItems = document.querySelectorAll(".feedback-item");

feedbackFilter.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const filter = event.target.textContent.toLowerCase();

    feedbackFilter
      .querySelectorAll("button")
      .forEach((btn) => btn.classList.remove("active"));
    event.target.classList.add("active");

    feedbackItems.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
});
