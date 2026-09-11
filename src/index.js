document.addEventListener("DOMContentLoaded", () => {
  // Підтягуємо header.html
  fetch("./src/header/header.html")
    .then(response => response.text())
  .then(data => {
      document.getElementById("header").innerHTML = html;

      // Автоматичне підсвічування активного пункту
      document.querySelectorAll(".header-list-nav a").forEach((link) => {
        if (link.href.includes(window.location.pathname)) {
          link.classList.add("active");
        }
      });
    });
});
