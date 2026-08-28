// Anno corrente nel footer
document.getElementById('year').textContent = String(new Date().getFullYear());

// -------- Toggle tema chiaro/scuro --------
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function currentTheme() {
    var attr = root.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  btn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// -------- Menu di navigazione mobile --------
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  function close() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();

// -------- Ombra dell'header allo scroll --------
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;

  var ticking = false;
  function update() {
    header.classList.toggle('is-scrolled', window.scrollY > 4);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
})();

// -------- Voce di menu attiva in base alla sezione visibile --------
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-menu a[href^="#"]'));
  if (!links.length || !('IntersectionObserver' in window)) return;

  var map = {};
  var sections = [];
  links.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    var section = document.getElementById(id);
    if (section) { map[id] = link; sections.push(section); }
  });

  function setCurrent(id) {
    links.forEach(function (link) {
      if (map[id] === link) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) setCurrent(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(function (section) { observer.observe(section); });
})();
