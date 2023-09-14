import Swiper from 'swiper';
import {
    Autoplay,
    EffectFade,
    Pagination,
    Navigation
} from 'swiper/modules';
  
  const heroSwiper = new Swiper(".hero .hero-swiper", {
    modules: [Pagination, Autoplay, EffectFade],
    speed: 1000,
    loop: true,
    slidesPerView: "auto",
    effect: 'fade',
    grabCursor: true,
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 15000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });