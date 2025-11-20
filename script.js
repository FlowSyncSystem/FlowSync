const navToggle = document.getElementById("navToggle");
const navDrawer = document.getElementById("navDrawer");
const navOverlay = document.getElementById("navOverlay");
const navLinks = document.querySelectorAll(".nav-link");

function closeNav() {
  navDrawer.classList.remove("open");
  navOverlay.classList.remove("active");
  navToggle.classList.remove("open"); // NEW — closes “X”
}

navToggle.addEventListener("click", () => {
  const isOpen = navDrawer.classList.toggle("open");
  navOverlay.classList.toggle("active", isOpen);

  navToggle.classList.toggle("open", isOpen);  // NEW — toggles hamburger ↔ X
});

navOverlay.addEventListener("click", closeNav);
navLinks.forEach((link) => link.addEventListener("click", closeNav));