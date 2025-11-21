// NAV TOGGLE (burger -> X)
const navToggle = document.getElementById("navToggle");
const navDrawer = document.getElementById("navDrawer");
const navOverlay = document.getElementById("navOverlay");
const drawerLinks = document.querySelectorAll(".drawer-link");

function closeNav() {
  navDrawer.classList.remove("open");
  navOverlay.classList.remove("active");
  navToggle.classList.remove("open");
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navDrawer.classList.toggle("open");
    navOverlay.classList.toggle("active", isOpen);
    navToggle.classList.toggle("open", isOpen);
  });
}

if (navOverlay) {
  navOverlay.addEventListener("click", closeNav);
}

drawerLinks.forEach((link) => link.addEventListener("click", closeNav));

// FOOTER YEAR (keeps working on all pages)
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}