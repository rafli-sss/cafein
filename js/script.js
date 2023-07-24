feather.replace();

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

// About's image
// const aboutImg = document.getElementById('about-img');
// const imgMouseOver = () => {
//   aboutImg.classList.remove('main-img--animate-1');
// };
// const imgMouseOut = () => {
//   setTimeout(() => {
//     aboutImg.classList.add('main-img--animate-1');
//   }, 500);
// };

// aboutImg.addEventListener('mouseover', imgMouseOver);
// aboutImg.addEventListener('mouseout', imgMouseOut);
