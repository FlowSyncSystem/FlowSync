// Mobile menu
const burger = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');
burger?.addEventListener('click', () => {
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
      menu.style.display = 'none';
    }
  });
});

// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();