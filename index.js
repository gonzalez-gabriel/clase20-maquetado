window.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const imgHamburger = document.querySelector('.hamburger');

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
    if (nav.classList.contains('nav--visible')) {
      imgHamburger.src = './images/icon-close.svg';
    } else {
      imgHamburger.src = './images/icon-hamburger.svg';
    }
  })
})