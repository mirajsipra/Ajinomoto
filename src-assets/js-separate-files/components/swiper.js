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

var collectionSwiper = new Swiper(".collections-swiper .swiper-init", {
  slidesPerView: 'auto',
  // loop: true,
  grabCursor: true,
});

function showImages(index) {
    let allImages = document.querySelectorAll(".featured-collection__images-wrapper .image-wrapper");
    allImages.forEach(element => {
        element.classList.remove("show");
    });
    allImages[index].classList.add("show");
}

var featuredCollectionSwiper = new Swiper(".featured-collection--swiper .swiper-init", {
  slidesPerView: 4.7,
  spaceBetween: 80,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  on: {
    slideChange: function () {
      var activeSlide = this.slides[this.activeIndex];
      var slideIndexString = activeSlide.getAttribute('data-swiper-slide-index');
      var slideIndex = parseInt(slideIndexString, 10);
      showImages(slideIndex);
    }
  }
});

var testimonialSwiper = new Swiper(".testimonials .swiper-init", {
  modules: [Navigation],
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var instafeedSwiper = new Swiper(".insta-feed .swiper-init", {
  slidesPerView: 'auto',
  loop: true,
  grabCursor: true,
});
