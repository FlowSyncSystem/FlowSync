// mobile menu
const burger = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');
if (burger){
  burger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
}

// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
      menu.style.display = 'none';
    }
  });
});

// copyright year
document.getElementById('y').textContent = new Date().getFullYear();