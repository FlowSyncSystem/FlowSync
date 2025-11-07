// Mobile nav toggle with auto-close on selection
const toggleBtn = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');

if (toggleBtn && nav) {
  toggleBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('show');
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('show');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// (Optional) Progressive enhancement to re-trigger gradient animation
// when the elements enter the viewport (keeps things lively on iOS)
const animTargets = document.querySelectorAll('.anim-gradient');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries =>
    entries.forEach(e => { if (e.isIntersecting) e.target.style.animationPlayState = 'running'; })
  , { threshold: 0.2 });
  animTargets.forEach(el => {
    el.style.animationPlayState = 'paused';
    io.observe(el);
  });
}