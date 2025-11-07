// Mobile nav
const burger = document.getElementById('hamburger');
const mobile = document.getElementById('mobileMenu');
burger?.addEventListener('click', () => {
  mobile.style.display = mobile.style.display === 'flex' ? 'none' : 'flex';
});

// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();