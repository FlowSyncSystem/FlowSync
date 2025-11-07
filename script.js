(function () {
  const btn = document.getElementById("nav-toggle");
  const drawer = document.getElementById("nav-drawer");
  const overlay = document.getElementById("nav-overlay");

  function openNav() {
    btn.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
    drawer.classList.add("show");
    overlay.classList.add("show");
    document.body.classList.add("nav-open");
  }
  function closeNav() {
    btn.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    drawer.classList.remove("show");
    overlay.classList.remove("show");
    document.body.classList.remove("nav-open");
  }
  function toggleNav() {
    drawer.classList.contains("show") ? closeNav() : openNav();
  }

  btn.addEventListener("click", toggleNav);
  overlay.addEventListener("click", closeNav);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });

  // Smooth scroll for header links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length > 1 && document.querySelector(id)) {
        e.preventDefault();
        closeNav();
        document.querySelector(id).scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
// Animate dots + pause when menu is open
const dotBtn = document.getElementById('nav-toggle');
if (dotBtn){
  dotBtn.addEventListener('click', () => {
    const expanded = dotBtn.getAttribute('aria-expanded') === 'true';
    dotBtn.setAttribute('aria-expanded', (!expanded).toString());
    dotBtn.classList.toggle('is-open', !expanded); // this class pauses the animation via CSS
  });
}