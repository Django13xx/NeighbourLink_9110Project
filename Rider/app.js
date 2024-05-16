document.querySelectorAll(".footer-icons .icon").forEach((icon) => {
  icon.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = this.getAttribute("href");
  });
});
const carList = document.querySelector(".car-list");
const carInfo = document.querySelector(".car-info");

function toggleCarInfo() {
  carList.style.display = "none";
  carInfo.style.display = "flex";
}

// Get all tab buttons and tab content containers
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

// Add click event listener to each tab button
tabButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    tabButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to the clicked button
    btn.classList.add("active");

    // Hide all tab content containers
    tabContents.forEach((content) => (content.style.display = "none"));

    // Show the corresponding tab content container
    tabContents[index].style.display = "block";
  });
});

const myTrip = document.querySelector(".my-trip");
const tripHistory = document.querySelector(".trip-history");

function toggleTripInfo() {
  myTrip.style.display = "flex";
  tripHistory.style.display = "none";
}
function toggleHistoryInfo() {
  myTrip.style.display = "none";
  tripHistory.style.display = "flex";
}
function goBack() {
  window.history.back();
}

// Agregar evento de clic a los elementos de notificación
const notificationItems = document.querySelectorAll(".notification-item");

notificationItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Aquí puedes agregar la lógica para mostrar los detalles de la notificación
    console.log("Clicked notification item");
  });
});

// Sample trip data
const trips = [
  {
    id: 1,
    origin: "New York",
    destination: "Los Angeles",
    date: "2023-06-15",
    time: "10:00 AM",
    role: "driver",
    seats: 4,
  },
  {
    id: 2,
    origin: "Chicago",
    destination: "San Francisco",
    date: "2023-06-20",
    time: "2:00 PM",
    role: "rider",
    seats: 1,
  },
  {
    id: 3,
    origin: "Miami",
    destination: "Seattle",
    date: "2023-06-25",
    time: "6:00 PM",
    role: "driver",
    seats: 3,
  },
  // Add more trip data as needed
];

// Function to render trip cards
function renderTripCards(filteredTrips) {
  const tripList = document.querySelector(".trip-list");
  tripList.innerHTML = "";

  filteredTrips.forEach((trip) => {
    const tripCard = document.createElement("div");
    tripCard.classList.add("trip-card");
    tripCard.innerHTML = `
      <h3><i class="fas fa-map-marker-alt"></i>${trip.origin} to ${trip.destination}</h3>
      <p><i class="fas fa-calendar-alt"></i> <strong>Date:</strong> ${trip.date}</p>
      <p><i class="fas fa-clock"></i> <strong>Time:</strong> ${trip.time}</p>
      <p><i class="fas fa-user"></i> <strong>Role:</strong> <span class="role">${trip.role}</span></p>
      <p><i class="fas fa-chair"></i> <strong>Seats:</strong> ${trip.seats}</p>
    `;
    tripList.appendChild(tripCard);
  });
}

// Initial rendering of all trips
renderTripCards(trips);

// Search and filter functionality
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");

function filterTrips() {
  const searchTerm = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value;

  const filteredTrips = trips.filter((trip) => {
    const matchesSearch = trip.destination.toLowerCase().includes(searchTerm);
    const matchesFilter = filterValue === "" || trip.role === filterValue;
    return matchesSearch && matchesFilter;
  });

  renderTripCards(filteredTrips);
}

searchInput.addEventListener("input", filterTrips);
filterSelect.addEventListener("change", filterTrips);
// Post Trip Modal
const postTripBtn = document.getElementById("postTripBtn");
const postTripModal = document.getElementById("postTripModal");
const closeModal = document.getElementsByClassName("close")[0];
const postTripForm = document.getElementById("postTripForm");

postTripBtn.onclick = function () {
  postTripModal.style.display = "block";
};

closeModal.onclick = function () {
  postTripModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === postTripModal) {
    postTripModal.style.display = "none";
  }
};

postTripForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const origin = formData.get("origin");
  const destination = formData.get("destination");
  const date = formData.get("date");
  const time = formData.get("time");
  const role = formData.get("role");
  const seats = formData.get("seats");

  const newTrip = {
    id: trips.length + 1,
    origin,
    destination,
    date,
    time,
    role,
    seats: parseInt(seats),
  };

  trips.push(newTrip);
  renderTripCards(trips);
  postTripModal.style.display = "none";
  event.target.reset();
});
function rating() {
  window.location.href = "mytrip.html";
}
