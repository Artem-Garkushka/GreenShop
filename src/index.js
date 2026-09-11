document.addEventListener("DOMContentLoaded", () => {
  // Визначаємо, де знаходиться поточна сторінка
  const isSrcPage = window.location.pathname.includes("/src/");

  // Шлях до header.html
  const headerPath = isSrcPage
    ? "../header/header.html"
    : "./src/header/header.html";

  // Підтягуємо header.html
  fetch(headerPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Помилка завантаження header: ${response.status}`);
      }

      return response.text();
    })
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // -----------------------------
      // Шляхи для посилань
      // -----------------------------

      const paths = isSrcPage
        ? {
            home: "../../index.html",
            shop: "../shop/shop.html",
            plan: "../plan-care/plan-care.html",
            blogs: "../blogs/blogs.html",
          }
        : {
            home: "./index.html",
            shop: "./src/shop/shop.html",
            plan: "./src/plan-care/plan-care.html",
            blogs: "./src/blogs/blogs.html",
          };

      // -----------------------------
      // Встановлюємо href
      // -----------------------------

      document.querySelectorAll("[data-page]").forEach((link) => {
        const page = link.dataset.page;

        if (paths[page]) {
          link.href = paths[page];
        }
      });

      // -----------------------------
      // Логотип
      // -----------------------------

      document.getElementById("home-link").href = paths.home;

      // -----------------------------
      // SVG sprite
      // -----------------------------

      const spritePath = isSrcPage
        ? "../Photo/sprite.svg"
        : "./src/Photo/sprite.svg";

      document
        .getElementById("logo-icon")
        .setAttribute("href", `${spritePath}#icon-logo`);

      document
        .getElementById("find-icon")
        .setAttribute("href", `${spritePath}#icon-find`);

      document
        .getElementById("cart-icon")
        .setAttribute("href", `${spritePath}#icon-cart`);

      // -----------------------------
      // Активний пункт меню
      // -----------------------------

      document.querySelectorAll(".header-list-nav a").forEach((link) => {
        if (
          link.href === window.location.href ||
          link.href.replace(/\/$/, "") ===
            window.location.href.replace(/\/$/, "")
        ) {
          link.classList.add("active");
        }
      });
    })
    .catch((error) => {
      console.error("Помилка:", error);
    });
});
