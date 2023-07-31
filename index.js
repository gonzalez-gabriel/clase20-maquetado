window.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const imgHamburger = document.querySelector('.hamburger');

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
    imgHamburger.src = nav.classList.contains('nav--visible') ? './images/icon-close.svg' : './images/icon-hamburger.svg';
  })
})