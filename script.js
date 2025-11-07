// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Mobile menu toggle
const burger = document.getElementById('hamburger');
const menu   = document.getElementById('mobileMenu');
burger?.addEventListener('click', () => {
  const open = menu.hasAttribute('hidden') ? false : true;
  if (open) { menu.setAttribute('hidden',''); burger.setAttribute('aria-expanded','false'); }
  else { menu.removeAttribute('hidden'); burger.setAttribute('aria-expanded','true'); }
});

// Smooth scroll (forces smooth in Safari/iOS too)
function smoothTo(id){
  const el = document.querySelector(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    if (id.startsWith('#')) {
      e.preventDefault();
      smoothTo(id);
      // close mobile menu after tap
      if (!menu.hasAttribute('hidden')) {
        menu.setAttribute('hidden','');
        burger.setAttribute('aria-expanded','false');
      }
    }
  });
});