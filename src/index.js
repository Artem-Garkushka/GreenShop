document.addEventListener("DOMContentLoaded", () => {
  // Підтягуємо header.html
  fetch("./src/header/header.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("header").innerHTML = html;

      // Автоматичне підсвічування активного пункту
      document.querySelectorAll(".header-list-nav a").forEach((link) => {
        if (link.href.includes(window.location.pathname)) {
          link.classList.add("active");
        }
      });
    });
});
