// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Hamburger / mobile menu
const burger = document.getElementById('hamburger');
const mobile = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const open = mobile.style.display === 'flex';
  mobile.style.display = open ? 'none' : 'flex';
  burger.setAttribute('aria-expanded', String(!open));
});

// Close mobile menu after clicking a link + smooth scroll (native CSS handles scroll)
mobile.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=>{ mobile.style.display='none'; burger.setAttribute('aria-expanded','false'); });
});

// Optional: tiny parallax on gradient button for “motion” feel
const wobbleTargets = document.querySelectorAll('.btn--primary.anim-gradient, .gradient.anim-gradient');
window.addEventListener('scroll', () => {
  const amt = Math.min(1, window.scrollY / 600);
  wobbleTargets.forEach(el => el.style.filter = `saturate(${1+amt*0.2})`);
});