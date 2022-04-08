const sidebarToggle = document.querySelector("#sidebar-toggle");

sidebarToggle.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-open");
});
