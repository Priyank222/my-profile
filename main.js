// Theme toggle (persisted in localStorage)
var root = document.documentElement;
var checkbox = document.getElementById('checkbox');

function applyTheme(theme) {
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    checkbox.checked = false;
  } else {
    root.setAttribute('data-theme', 'light');
    checkbox.checked = true;
  }
}

var savedTheme = null;
try {
  savedTheme = localStorage.getItem('theme');
} catch (e) {}

applyTheme(savedTheme === 'light' ? 'light' : 'dark');

checkbox.addEventListener('change', function () {
  var theme = checkbox.checked ? 'light' : 'dark';
  applyTheme(theme);
  try {
    localStorage.setItem('theme', theme);
  } catch (e) {}
});

// Mobile nav toggle
var navToggle = document.getElementById('navToggle');
var mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', function () {
  var isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// Footer year
var yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
