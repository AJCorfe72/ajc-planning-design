// Mobile navigation
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
}

// Footer year
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('is-visible'));
}

// Portfolio filters (also honours #residential / #commercial / #energy links)
const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.portfolio-item');
function applyFilter(cat) {
  filters.forEach(f => {
    const on = f.dataset.filter === cat;
    f.classList.toggle('is-active', on);
    f.setAttribute('aria-pressed', String(on));
  });
  items.forEach(i => { i.hidden = !(cat === 'all' || i.dataset.category === cat); if (!i.hidden) i.classList.add('is-visible'); });
}
filters.forEach(f => f.addEventListener('click', () => applyFilter(f.dataset.filter)));
if (filters.length) {
  const hash = location.hash.replace('#', '');
  if (['residential', 'commercial', 'energy'].includes(hash)) applyFilter(hash);
}

// Lightbox
const lb = document.querySelector('.lightbox');
if (lb) {
  const img = lb.querySelector('img');
  const cap = lb.querySelector('figcaption');
  const closeBtn = lb.querySelector('.lightbox-close');
  let lastFocus = null;
  const close = () => { lb.classList.remove('is-open'); if (lastFocus) lastFocus.focus(); };
  document.querySelectorAll('[data-full]').forEach(btn => btn.addEventListener('click', () => {
    lastFocus = btn;
    img.src = btn.dataset.full;
    img.alt = btn.dataset.caption;
    cap.textContent = btn.dataset.caption;
    lb.classList.add('is-open');
    closeBtn.focus();
  }));
  closeBtn.addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && lb.classList.contains('is-open')) close(); });
}

// Contact form: opens the visitor's email app with the message filled in
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const subject = `Website enquiry (${d.get('type')}) from ${d.get('name')}`;
    const body = `Name: ${d.get('name')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone') || '-'}\nProject type: ${d.get('type')}\n\n${d.get('message')}`;
    window.location.href = `mailto:adrian@ajcplanningdesign.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById('form-note').textContent = 'Your email app should now open with the message ready to send. If it does not, please email adrian@ajcplanningdesign.com directly.';
  });
}
