// Sample ad report data
const adReports = [
  {
    id: 1,
    content: "Buy counterfeit products here!",
    reportedBy: "Jane Doe",
    timestamp: "2024-04-14 15:37",
  },
  {
    id: 2,
    content: "Get rich quick with this illegal scheme!",
    reportedBy: "John Smith",
    timestamp: "2024-04-12 09:15",
  },
  {
    id: 3,
    content: "Unlock your phone for free, no questions asked!",
    reportedBy: "Alice Johnson",
    timestamp: "2024-04-17 11:22",
  },
  {
    id: 4,
    content: "Pirated movies and TV shows available here!",
    reportedBy: "Bob Williams",
    timestamp: "2024-04-15 18:45",
  },
  {
    id: 5,
    content: "Earn easy money by working from home (illegal opportunity)",
    reportedBy: "Sarah Lee",
    timestamp: "2024-04-13 21:03",
  },
];

// Function to render ad reports
function renderAdReports(adReports) {
  const adReportsContainer = document.querySelector(".ad-reports");
  adReportsContainer.innerHTML = ""; // Clear previous reports

  adReports.forEach((report) => {
    const reportElement = document.createElement("div");
    reportElement.classList.add("ad-report");
    reportElement.dataset.id = report.id; // Add data-id attribute

    reportElement.innerHTML = `
        <p><strong>Content:</strong> ${report.content}</p>
        <p><strong>Reported by:</strong> ${report.reportedBy}</p>
        <p><strong>Timestamp:</strong> ${report.timestamp}</p>
        <div class="actions">
          <button class="delete" onclick="handleDelete(${report.id})">Delete Ad</button>
          <button class="warn" onclick="handleAction('warn', '${report.content}')">Warn User</button>
        </div>
      `;

    adReportsContainer.appendChild(reportElement);
  });
}

// Function to handle delete action
function handleDelete(id) {
  const adReportIndex = adReports.findIndex((report) => report.id === id);
  if (adReportIndex !== -1) {
    adReports.splice(adReportIndex, 1); // Remove the ad report from the array
    renderAdReports(adReports); // Re-render the updated list

    const feedbackMessage = document.getElementById("feedbackMessage");
    feedbackMessage.textContent = "Ad report deleted successfully.";
    openModal();
  }
}

// Function to handle warn action
function handleAction(action, content) {
  const feedbackMessage = document.getElementById("feedbackMessage");
  const actionText = action === "warn" ? "Warned" : "Unknown action";

  feedbackMessage.textContent = `${actionText} ad: "${content}"`;
  openModal();
}

// Function to open the feedback modal
function openModal() {
  const modal = document.getElementById("feedbackModal");
  modal.style.display = "block";
}

// Function to close the feedback modal
function closeModal() {
  const modal = document.getElementById("feedbackModal");
  modal.style.display = "none";
}

// Initial render of ad reports
renderAdReports(adReports);

// Search functionality
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredReports = adReports.filter((report) =>
    report.content.toLowerCase().includes(searchTerm)
  );
  renderAdReports(filteredReports);
});

// Sort functionality
const sortOption = document.getElementById("sortOption");
sortOption.addEventListener("change", () => {
  const sortOrder = sortOption.value;
  let sortedReports = [...adReports];

  if (sortOrder === "newest") {
    sortedReports.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  } else if (sortOrder === "oldest") {
    sortedReports.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  }

  renderAdReports(sortedReports);
});
