document.addEventListener("DOMContentLoaded", function () {
  const repeatCheckbox = document.getElementById("repeat");
  const repeatOptions = document.getElementById("repeat-options");

  repeatCheckbox.addEventListener("change", function () {
    if (this.checked) {
      repeatOptions.style.display = "block";
    } else {
      repeatOptions.style.display = "none";
    }
  });
});
function openChat(event, chatId) {
  event.stopPropagation();
  document.getElementById("chat-modal").style.display = "block";
  // Load chat messages for 'chatId'
}

function closeChat() {
  document.getElementById("chat-modal").style.display = "none";
}

function markResolved(event, element) {
  event.stopPropagation();
  // Implement the resolution logic
  element.parentNode.setAttribute("data-status", "resolved");
  element.parentNode.querySelector(".status").textContent = "Resolved";
  element.parentNode.querySelector(".status").style.color = "green";
}
function openDetails(event, userId) {
  event.stopPropagation(); // Stop the click event from propagating to parent elements
  document.getElementById("user-details-modal").style.display = "block";
  // Load user details dynamically, not shown here
}

function openModificationNeeded(event, userId) {
  event.stopPropagation(); // This prevents triggering clicks on underlying elements
  document.getElementById("modification-modal").style.display = "block";
  // Load modification suggestions dynamically, not shown here
}

function closeModal() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.style.display = "none";
  });
}
