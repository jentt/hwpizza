// Function to get rid of preloader
window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-finish');
});

// Select DOM items
const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.navigation');
const navNav = document.querySelector('.navigation-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set inital state of menu
let showNav = false;

navBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showNav) {
    navBtn.classList.add('close');
    navNav.classList.add('show');
    nav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set menu state
    showNav = true;
  } else {
    navBtn.classList.remove('close');
    navNav.classList.remove('show');
    nav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Show menu state
    showNav = false;
  }
}


