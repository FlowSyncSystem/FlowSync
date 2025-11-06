// Mobile drawer
const menuBtn = document.getElementById('menuBtn');
const drawer  = document.getElementById('drawer');
menuBtn?.addEventListener('click', () => {
  const open = drawer.style.display === 'block';
  drawer.style.display = open ? 'none' : 'block';
});

// Calendly popup connections
const buttons = [
  'bookNowTop','bookNowTopMobile','bookNowHero','bookNowPrice','bookNowPrice2','bookNowFoot'
];
buttons.forEach(id=>{
  const el = document.getElementById(id);
  if(el){ el.addEventListener('click', e => openCalendly(e)); }
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();
