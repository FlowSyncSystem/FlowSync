// Mobile menu toggle + smooth scroll (also closes menu on click)
const nav = document.getElementById('navlinks');
const burger = document.getElementById('hamburger');

burger?.addEventListener('click', () => {
  const open = nav.style.display === 'grid';
  nav.style.display = open ? '' : 'grid';
});

document.querySelectorAll('[data-scroll]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (!id || !id.startsWith('#')) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    nav.style.display = '';            // close mobile menu
    target.scrollIntoView({behavior:'smooth', block:'start'});
    history.replaceState(null, '', id);
  });
});

// Footer year
document.getElementById('y')?.append(new Date().getFullYear());