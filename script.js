// Mobile menu
const burger = document.getElementById('hamburger');
const links  = document.getElementById('nav-links');

if (burger && links){
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close when clicking a link (and smooth scroll)
  links.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      history.pushState(null, '', id);
    }
  });
});

// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();