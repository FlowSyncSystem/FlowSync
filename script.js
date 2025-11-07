// Close mobile menu on link click + smooth scroll programmatically (for older iOS)
const nav = document.getElementById('navlinks');
const burger = document.getElementById('hamburger');

burger?.addEventListener('click', () => {
  nav.classList.toggle('open');
  if (nav.classList.contains('open')) {
    nav.style.display = 'grid';
  } else {
    nav.style.display = '';
  }
});

document.querySelectorAll('[data-scroll]').forEach(a => {
  a.addEventListener('click', (e) => {
    const hash = a.getAttribute('href');
    if (!hash || !hash.startsWith('#')) return;
    const target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();

    // close menu if open
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      nav.style.display = '';
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', hash); // keep anchor in URL
  });
});

// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();