

const openButton = document.getElementById("burger-menu-btn");
const closeButton = document.getElementById("menu-close-btn");
const menu = document.getElementById("menu");

// Відкрити меню
openButton.addEventListener("click", () => {
  menu.classList.add("is-open");
});

// Закрити меню
closeButton.addEventListener("click", () => {
  menu.classList.remove("is-open");
});