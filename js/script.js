// Icon
feather.replace();

// Navbar
const navbarNav = document.getElementById('navbar-nav');
const navbarToggler = document.getElementById('navbar-toggler');
const mainContent = document.getElementById('main-content');
const toggleNavbar = () => {
  navbarNav.classList.toggle('navbar-nav--collapse');
};
const closeNavbar = () => {
  navbarNav.classList.remove('navbar-nav--collapse');
};

navbarToggler.addEventListener('click', toggleNavbar);
mainContent.addEventListener('click', closeNavbar);
