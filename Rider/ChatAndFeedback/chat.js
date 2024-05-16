// Sample data for the conversation
var conversation = [
  {
    sender: "Sonjit Babo",
    text: "Good morning! Are you ready for the meeting today?",
  },
  {
    sender: "You",
    text: "Good morning! Yes, I've just reviewed the reports. How about you?",
  },
  {
    sender: "Sonjit Babo",
    text: "I'm all set. Just going over the slides one last time. We'll ace this!",
  },
  {
    sender: "You",
    text: "Great confidence! Let's meet half an hour early to ensure we're in sync.",
  },
  {
    sender: "Sonjit Babo",
    text: "Perfect! See you in the conference room at 9:30 then. 👍",
  },
];

// Function to load the conversation into the chat history
function loadConversation() {
  var chatHistory = document.getElementById("chatHistory");
  chatHistory.innerHTML = ""; // Clear any existing messages

  conversation.forEach(function (message) {
    var messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");
    messageDiv.innerHTML = `<div class="message-content ${
      message.sender === "You" ? "sender" : ""
    }">
            <div class="sender-name">${
              message.sender === "You" ? "" : message.sender + ":"
            }</div>
            <p>${message.text}</p>
        </div>`;
    chatHistory.appendChild(messageDiv);
  });

  // Scroll to the bottom of the chat history
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Function to send a new message
function sendMessage() {
  var input = document.getElementById("chatMessageInput");
  var message = input.value.trim();
  if (message) {
    // Add new message to the conversation
    conversation.push({ sender: "You", text: message });
    loadConversation(); // Refresh the chat history with the new message
    input.value = ""; // Clear the input
  }
}
function goBack() {
  window.history.back();
}

// Initial call to load the conversation
document.addEventListener("DOMContentLoaded", loadConversation);
