function sendMessage() {
  // Get user input
  var userInput = document.getElementById("user-input").value;

  if (userInput.trim() === "") {
    alert("Please enter a message.");
    return;
  }

  // Clear input field
  document.getElementById("user-input").value = "";

  // Create user message element
  var userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.innerHTML = `<p><strong>You:</strong> ${userInput}</p>`;

  // Append user message to chat messages
  var chatMessages = document.getElementById("chat-messages");
  chatMessages.appendChild(userMessage);

  // Simulate a chatbot reply (for demonstration purposes)
  setTimeout(function () {
    var botMessage = document.createElement("div");
    botMessage.className = "chatbot-message";
    botMessage.innerHTML = `<p><strong>Chatbot:</strong> Thank you for your message! I'm processing your request.</p>`;
    chatMessages.appendChild(botMessage);
  }, 1000);
}
function goBack() {
  window.history.back();
}
