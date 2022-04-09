const sidebarToggle = document.querySelector("#sidebar__toggle");

sidebarToggle.addEventListener("click", () => {
  document.body.classList.toggle("sidebar__open");
});
