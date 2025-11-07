// Hamburger + overlay
const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('menuOverlay');

function toggleMenu(forceOpen = null){
  const open = forceOpen ?? overlay.hasAttribute('hidden');
  if(open){
    overlay.removeAttribute('hidden');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }else{
    overlay.setAttribute('hidden', '');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}
hamburger.addEventListener('click', () => toggleMenu());
overlay?.addEventListener('click', (e) => {
  if(e.target === overlay) toggleMenu(false);
});
overlay.querySelectorAll('.menu-link').forEach(a=>{
  a.addEventListener('click', ()=>toggleMenu(false));
});

// Smooth, continuous gradient motion for the CTA — already in CSS.
// Add a subtle “magnetic” hover on pointer devices.
const floaters = document.querySelectorAll('.anim-smooth');
floaters.forEach(btn=>{
  let raf, x=0,y=0;
  const onMove = (e)=>{
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width/2;
    const cy = rect.top + rect.height/2;
    const dx = (e.clientX - cx) / 20;
    const dy = (e.clientY - cy) / 20;
    x = dx; y = dy;
    if(!raf) raf = requestAnimationFrame(()=> {
      btn.style.transform = `translate(${x}px, ${y}px)`;
      raf = null;
    });
  };
  const reset = ()=>{
    btn.style.transform = '';
  };
  btn.addEventListener('pointermove', onMove);
  btn.addEventListener('pointerleave', reset);
});

// Load Calendly only when visible (keeps page light)
const calWrap = document.querySelector('.calendly-wrap');
if('IntersectionObserver' in window && calWrap){
  const io = new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting){
      const url = calWrap.getAttribute('data-calendly');
      calWrap.innerHTML = `<iframe src="${url}" width="100%" height="100%" style="border:0;"></iframe>`;
      io.disconnect();
    }
  },{rootMargin:'200px'});
  io.observe(calWrap);
}else if(calWrap){
  const url = calWrap.getAttribute('data-calendly');
  calWrap.innerHTML = `<iframe src="${url}" width="100%" height="100%" style="border:0;"></iframe>`;
}

// Ensure Stripe buttons open correctly (links already set in HTML)
document.getElementById('btnMonthly')?.addEventListener('click',()=>{/* noop */});
document.getElementById('btnOnetime')?.addEventListener('click',()=>{/* noop */});