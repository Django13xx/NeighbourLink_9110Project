document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  const contentFrame = document.getElementById("content-frame");

  sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      sidebarLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      const target = this.getAttribute("data-target");
      contentFrame.src = target;
      this.classList.add("active");
    });
  });
});
window.addEventListener("hashchange", function () {
  var hash = window.location.hash;
  if (hash === "#logout") {
    var iframe = document.getElementById("sidebar");
    if (iframe) {
      iframe.style.display = "none"; // 隐藏 iframe
    }
  }
});
