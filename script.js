// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Hamburger + overlay with backdrop close & Esc
const ham = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');

function setMenu(open){
  ham.setAttribute('aria-expanded', open ? 'true' : 'false');
  overlay.classList.toggle('open', open);
  overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
  document.body.classList.toggle('menu-open', open);
}

ham.addEventListener('click', () => {
  const open = overlay.classList.contains('open') === false;
  setMenu(open);
});

// Close when clicking outside menu items (on the blurred backdrop)
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) setMenu(false);
});

// Close on Esc
document.addEventListener('keydown', (e)=>{
  if (e.key === 'Escape') setMenu(false);
});

// Smooth scroll for in-page nav
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      setMenu(false);
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});