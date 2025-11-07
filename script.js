// Smooth year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Mobile nav (overlays; locks scroll so it never scrolls content beneath)
const ham = document.getElementById('hamburger');
const mobile = document.getElementById('mobileNav');

function openNav() {
  mobile.classList.add('open');
  mobile.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  ham.setAttribute('aria-expanded','true');
}
function closeNav() {
  mobile.classList.remove('open');
  mobile.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  ham.setAttribute('aria-expanded','false');
}
ham.addEventListener('click', () => {
  mobile.classList.contains('open') ? closeNav() : openNav();
});
// close when clicking a link
mobile.addEventListener('click', (e) => {
  if (e.target.classList.contains('mobile-link')) closeNav();
});

// Nothing else changed – animations are purely CSS via keyframes (kept exactly).