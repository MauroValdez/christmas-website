import "boxicons";
import ScrollReveal from 'scrollreveal'

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// variables

const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");
const navLink = document.querySelectorAll(".nav__link");
const header = document.querySelector("#header");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

document.addEventListener("DOMContentLoaded", () => {
  abrirMenu();
  cerrarMenu();
  accionLink();
  scrollHeader();
  scrollUp();
  modoOscuro();
  revealEfect();
  swiperF();
  
});

function abrirMenu() {
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
}

function cerrarMenu() {
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
}

function accionLink() {
  navLink.forEach((link) =>
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    }),
  );
}

function scrollHeader() {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 60) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });
}

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 58;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href="#' + sectionId + '"]')
        .classList.add("active-link");
    } else {
      document
        .querySelector('.nav__menu a[href="#' + sectionId + '"]')
        .classList.remove("active-link");
    }
  });
}

function scrollUp() {
  const scrollUp = document.querySelector("#scroll-up");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 350) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });
}

function modoOscuro() {
  const themeButton = document.querySelector(".change-theme");
  const body = document.querySelector("body");

  load();

  themeButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    store(body.classList.contains("dark-theme"));
  });

  function load() {
    const darkmode = localStorage.getItem("darkmode");

    if (!darkmode) {
      store("false");
    } else if (darkmode === "true") {
      body.classList.add("dark-theme");
    }
  }

  function store(value) {
    localStorage.setItem("darkmode", value);
  }
}

function revealEfect() {
  
  const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true

})

sr.reveal('.home__img, .new__container, .footer__container');
sr.reveal('.home__data', {delay: 500});
sr.reveal('.giving__container, .gift__card', {interval: 100});
sr.reveal('.celebrate__data, .message__form, .footer__img1', {origin: 'left'});
sr.reveal('.celebrate__img, .message__img, .footer__img2', {origin: 'right'});

}

function swiperF() {
  let swiper = new Swiper(".new-swiper", {
    spaceBetween: 20,
    loop: "true",
    slidesPerView: "auto",
    centeredSlides: "true",
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      992: {
        spaceBetween: 60,
      },
      1024: {
        spaceBetween: 70,
      }
    },
  });
}

