const sidebarToggle = document.querySelector("#sidebar__toggle");
const sidebarMenu = document.querySelector("#sidebar__menu");
const overlay = document.querySelector("#overlay");

sidebarToggle.addEventListener("click", () => {
  document.body.classList.toggle("sidebar__open");
});

sidebarMenu.addEventListener("click", () => {
  document.body.classList.toggle("sidebar__open");
});

overlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar__open");
})
