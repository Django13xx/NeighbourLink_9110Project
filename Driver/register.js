document.addEventListener("DOMContentLoaded", function () {
  const roleRadios = document.querySelectorAll('input[name="role"]');
  const driverFields = document.getElementById("driver-specific-fields");

  // Function to toggle the display of driver-specific fields
  function toggleDriverFields(display) {
    driverFields.style.display = display ? "block" : "none";
  }

  // Initially hide the driver-specific fields
  toggleDriverFields(false);

  // Add change event listeners to the radio buttons
  roleRadios.forEach((radio) => {
    radio.addEventListener("change", function (event) {
      // Show driver fields if the driver radio is selected
      toggleDriverFields(event.target.value === "driver");
    });
  });

  // Handle form submission
  document
    .getElementById("registration-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // Implementation of form data collection and submission goes here
      console.log("Form submitted");
    });
});
