function filterMessages() {
  var input, filter, messageList, messages, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  messageList = document.getElementById("messageList");
  messages = messageList.getElementsByClassName("message");

  for (i = 0; i < messages.length; i++) {
    var h2 = messages[i].getElementsByTagName("h2")[0];
    var txtValue = h2.textContent || h2.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      messages[i].style.display = "";
    } else {
      messages[i].style.display = "none";
    }
  }
}
function goBack() {
  window.history.back();
}
function callEmergencyHelp() {
  alert("Call the emergency help");
}
