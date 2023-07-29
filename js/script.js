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

// Swiper
const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  speed: 750,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});
