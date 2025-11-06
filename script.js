// Mobile menu
const toggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Optional: ensure monthly price text stays visible if you ever change it
document.addEventListener('DOMContentLoaded', () => {
  // no-op for now; hooks ready for future tweaks
});