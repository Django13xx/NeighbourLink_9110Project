// Sample user data
const users = [
  {
    id: "JohnDoe",
    name: "John Doe",
    role: "driver",
    status: "verified",
    license: "XYZ123456",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    age: 32,
    occupation: "Software Developer",
    family: "Married, two children",
    address: "1234 Main St, Metropolis, NY 10101",
    notes: "Active community volunteer, enjoys cycling and hiking.",
  },
  {
    id: "JaneSmith",
    name: "Jane Smith",
    role: "rider",
    status: "verified",
    license: null,
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    age: 28,
    occupation: "Marketing Specialist",
    family: "Single",
    address: "5678 Oak Rd, Cityville, CA 90210",
    notes: "Avid reader, loves traveling.",
  },
  {
    id: "BobJohnson",
    name: "Bob Johnson",
    role: "driver",
    status: "unverified",
    license: "ABC987654",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    age: 45,
    occupation: "Delivery Driver",
    family: "Married, no children",
    address: "9012 Elm St, Townsville, TX 78901",
    notes: "Enjoys watching sports and cooking.",
  },
  {
    id: "SarahLee",
    name: "Sarah Lee",
    role: "rider",
    status: "verified",
    license: null,
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
    age: 35,
    occupation: "Graphic Designer",
    family: "Married, one child",
    address: "3456 Oak Ave, Suburbia, CA 92101",
    notes: "Loves painting and gardening.",
  },
  {
    id: "MichaelBrown",
    name: "Michael Brown",
    role: "driver",
    status: "verified",
    license: "DEF456789",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    age: 28,
    occupation: "Taxi Driver",
    family: "Single",
    address: "7890 Park Blvd, Cityville, CA 90210",
    notes: "Enjoys reading and playing video games.",
  },
  {
    id: "EmilyWilson",
    name: "Emily Wilson",
    role: "rider",
    status: "verified",
    license: null,
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    age: 31,
    occupation: "Nurse",
    family: "Engaged",
    address: "2468 Pine St, Suburbia, CA 92101",
    notes: "Loves hiking and practicing yoga.",
  },
  {
    id: "DavidThompson",
    name: "David Thompson",
    role: "driver",
    status: "unverified",
    license: "GHI789012",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    age: 41,
    occupation: "Truck Driver",
    family: "Married, three children",
    address: "5432 Oak Ln, Townsville, TX 78901",
    notes: "Enjoys fishing and camping.",
  },
  {
    id: "SophiaRodriguez",
    name: "Sophia Rodriguez",
    role: "rider",
    status: "verified",
    license: null,
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    age: 24,
    occupation: "Student",
    family: "Single",
    address: "9876 Maple Ave, Metropolis, NY 10101",
    notes: "Loves photography and playing guitar.",
  },
];

// Function to render user profiles
function renderUserProfiles(filter) {
  const userProfilesContainer = document.querySelector(".user-profiles");
  userProfilesContainer.innerHTML = ""; // Clear previous profiles

  const filteredUsers = users.filter((user) => {
    if (filter === "all") {
      return true;
    } else if (filter === "drivers") {
      return user.role === "driver";
    } else if (filter === "riders") {
      return user.role === "rider";
    }
    return false;
  });

  if (filteredUsers.length === 0) {
    const noUserMessage = document.createElement("p");
    noUserMessage.textContent = "No users found.";
    userProfilesContainer.appendChild(noUserMessage);
  } else {
    filteredUsers.forEach((user) => {
      const profileElement = document.createElement("div");
      profileElement.classList.add("profile");
      profileElement.dataset.role = user.role;
      profileElement.dataset.status = user.status;

      const statusClass =
        user.status === "verified" ? "verified" : "unverified";
      profileElement.classList.add(statusClass);

      profileElement.innerHTML = `
          <img src="${user.avatar}" alt="${user.name}" class="user-avatar" />
          <h2>${user.name} - ${
        user.role.charAt(0).toUpperCase() + user.role.slice(1)
      }</h2>
          <p><strong>Verification Status:</strong> ${user.status}</p>
          ${
            user.license
              ? `<p><strong>License:</strong> ${user.license}</p>`
              : ""
          }
          <div class="actions">
            <button onclick="openModificationNeeded(event, '${
              user.id
            }');">Modification</button>
            <button onclick="toggleVerification(event, '${user.id}');">${
        user.status === "verified" ? "Unverify" : "Verify"
      }</button>
            <button class="danger">Delete</button>
            <button onclick="openDetails(event, '${user.id}');">Details</button>
          </div>
        `;

      userProfilesContainer.appendChild(profileElement);
    });
  }
}

// Function to open user details modal
function openDetails(event, userId) {
  event.stopPropagation(); // Stop the click event from propagating to parent elements

  const user = users.find((u) => u.id === userId);
  if (user) {
    document.getElementById("user-avatar").src = user.avatar;
    document.getElementById("user-name").textContent = user.name;
    document.getElementById("user-role").textContent =
      user.role.charAt(0).toUpperCase() + user.role.slice(1);
    document.getElementById("verification-status").textContent = user.status;
    document.getElementById("license").textContent = user.license || "N/A";
    document.getElementById("age").textContent = user.age;
    document.getElementById("occupation").textContent = user.occupation;
    document.getElementById("family").textContent = user.family;
    document.getElementById("address").textContent = user.address;
    document.getElementById("notes").textContent = user.notes;
  }

  document.getElementById("user-details-modal").style.display = "block";
}

// Function to open Modification modal
function openModificationNeeded(event, userId) {
  event.stopPropagation(); // This prevents triggering clicks on underlying elements
  document.getElementById("modification-modal").style.display = "block";
  // Load modification suggestions dynamically, not shown here
}

// Function to toggle user verification status
function toggleVerification(event, userId) {
  event.stopPropagation(); // This prevents triggering clicks on underlying elements

  const user = users.find((u) => u.id === userId);
  if (user) {
    user.status = user.status === "verified" ? "unverified" : "verified";
    renderUserProfiles(
      document.querySelector(".filter-btn.active").dataset.filter
    );
  }
}

// Function to close modals
function closeModal() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.style.display = "none";
  });
}

// Event listeners for filter buttons
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderUserProfiles(filter);
  });
});

// Initial render with 'all' filter
renderUserProfiles("all");
