// Function to open chat modal
function openChat(request) {
  const modal = document.getElementById("chat-modal");
  const userAvatar = modal.querySelector(".chat-header img");
  const userName = modal.querySelector(".chat-header h2");

  const requestName = request.querySelector(".user-info h2").textContent;
  const requestAvatar = request.querySelector(".user-info img").src;

  userAvatar.src = requestAvatar;
  userName.textContent = `Chat with ${requestName}`;

  modal.style.display = "block";
}

// Function to close chat modal
function closeChat() {
  const modal = document.getElementById("chat-modal");
  modal.style.display = "none";
}

// Function to mark request as resolved/unresolved
function markResolved(event, button) {
  event.stopPropagation(); // Prevent opening the chat modal

  const request = button.parentNode;
  const requestStatus = button.dataset.status;

  if (requestStatus === "pending") {
    request.dataset.status = "resolved";
    request.classList.add("resolved");
    button.dataset.status = "resolved";
    button.textContent = "Mark as Unresolved";
    request.querySelector(".status-icon").classList.remove("pending");
    request.querySelector(".status-icon").classList.add("resolved");
    request.querySelector(".status").textContent = "Resolved";
  } else {
    request.dataset.status = "pending";
    request.classList.remove("resolved");
    button.dataset.status = "pending";
    button.textContent = "Mark as Resolved";
    request.querySelector(".status-icon").classList.remove("resolved");
    request.querySelector(".status-icon").classList.add("pending");
    request.querySelector(".status").textContent = "Pending";
  }
}
