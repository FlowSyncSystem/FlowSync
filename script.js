const navToggle = document.getElementById("navToggle");
const navDrawer = document.getElementById("navDrawer");
const navOverlay = document.getElementById("navOverlay");
const navLinks = document.querySelectorAll(".nav-link");

function closeNav() {
  navDrawer.classList.remove("open");
  navOverlay.classList.remove("active");
}

navToggle.addEventListener("click", () => {
  const isOpen = navDrawer.classList.toggle("open");
  navOverlay.classList.toggle("active", isOpen);
});

navOverlay.addEventListener("click", closeNav);
navLinks.forEach((link) => link.addEventListener("click", closeNav));