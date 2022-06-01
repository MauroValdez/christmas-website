import 'boxicons';

// variables

const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');
const navLink = document.querySelectorAll('.nav__link');
const header = document.querySelector('#header');

document.addEventListener('DOMContentLoaded', () => {
  abrirMenu();
  cerrarMenu();
  accionLink();
  scrollHeader();
});

function abrirMenu() {
  if(navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    })
  }
}

function cerrarMenu() {
  if(navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    })
  }
}

function accionLink() {
  navLink.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  }))
}

function scrollHeader() {
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 60) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  })
}
