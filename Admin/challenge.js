// Add challenge form submission
const addChallengeForm = document.getElementById("add-challenge-form");
const challengesList = document.querySelector(".challenges-list");
const leaderboardBody = document.querySelector(".leaderboard tbody");

let challenges = [];
let leaderboard = [];

// Sample challenge data
const sampleChallenges = [
  {
    name: "Weekly Eco-Warrior",
    duration: "7 days",
    goal: "Complete 5 carpool rides",
    progress: 0.6,
    pinned: false,
  },
  {
    name: "Monthly Green Commuter",
    duration: "30 days",
    goal: "Complete 20 carpool rides",
    progress: 0.25,
    pinned: false,
  },
  {
    name: "Earth Day Challenge",
    duration: "7 days",
    goal: "Reduce carbon footprint by 50%",
    progress: 0.8,
    pinned: true,
  },
];

// Sample leaderboard data
const sampleLeaderboard = [
  { name: "Jane Doe", ridesCompleted: 15 },
  { name: "John Smith", ridesCompleted: 12 },
  { name: "Alice Johnson", ridesCompleted: 9 },
  { name: "Bob Williams", ridesCompleted: 7 },
  { name: "Sarah Lee", ridesCompleted: 5 },
];

// Function to render challenges
function renderChallenges() {
  challengesList.innerHTML = "";
  challenges.forEach((challenge) => {
    const challengeElement = document.createElement("div");
    challengeElement.classList.add("challenge");
    if (challenge.pinned) challengeElement.classList.add("pinned");

    challengeElement.innerHTML = `
      <h3>${challenge.name}</h3>
      <p class="duration">Duration: ${challenge.duration}</p>
      <p class="goal">Goal: ${challenge.goal}</p>
      <div class="progress-bar">
        <div class="progress" style="width: ${challenge.progress * 100}%"></div>
      </div>
      <p class="progress-text">${Math.round(
        challenge.progress * 100
      )}% completed</p>
    `;

    challengesList.appendChild(challengeElement);
  });
}

// Function to render leaderboard
function renderLeaderboard() {
  leaderboardBody.innerHTML = "";
  leaderboard.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${entry.name}</td>
      <td>${entry.ridesCompleted}</td>
    `;
    leaderboardBody.appendChild(row);
  });
}

// Add challenge form submission
addChallengeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const challengeName = formData.get("challengeName");
  const startDate = formData.get("start-date");
  const endDate = formData.get("end-date");
  const repeat = formData.get("repeat");
  const repeatFrequency = formData.get("repeat-frequency");
  const pinned = formData.get("pinned");
  const description = formData.get("description");

  const duration = calculateDuration(startDate, endDate);

  const newChallenge = {
    name: challengeName,
    startDate,
    endDate,
    repeat,
    repeatFrequency,
    pinned,
    description,
    duration,
    goal: "Complete 5 carpool rides",
    progress: 0, // Initialize progress to 0 for new challenges
  };

  challenges.push(newChallenge);
  renderChallenges();

  event.target.reset();
});

// Function to calculate challenge duration
function calculateDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const durationInDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return `${durationInDays} days`;
}

// Show/hide repeat options based on checkbox
const repeatCheckbox = document.getElementById("repeat");
const repeatOptions = document.getElementById("repeat-options");

repeatCheckbox.addEventListener("change", () => {
  repeatOptions.style.display = repeatCheckbox.checked ? "block" : "none";
});

// Initial render
challenges = [...sampleChallenges];
leaderboard = [...sampleLeaderboard];
renderChallenges();
renderLeaderboard();
