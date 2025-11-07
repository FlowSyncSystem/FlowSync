// year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// mobile menu + smooth scroll (kept the same behavior)
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  mobileMenu.setAttribute('aria-hidden', open ? 'false' : 'true');
});

// close menu when clicking a link & smooth scroll
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded','false');
    mobileMenu.setAttribute('aria-hidden','true');
    document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
  });
});