import Swiper from 'swiper';
import {
  Autoplay,
  EffectFade,
  Pagination,
  Navigation,
  Thumbs
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

// Featured Product: pdp.html

var swiper = new Swiper(".featuredProduct", {
  slidesPerView: 3.1,
  spaceBetween: 15,
  loop: true,
  grabCursor: true,
});

// Product Detail Gallery: pdp.html

var productThumbNav = new Swiper(".product-detail__ThumbsNav", {
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});
var productMain = new Swiper(".product-detail__Main", {
  modules: [Navigation, Thumbs],
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productThumbNav,
  },
});

//  Product How To Use: pdp.html
var productusageSwiper = new Swiper(".product-usageSwiper", {
  modules: [Navigation],
  slidesPerView: 3.5,
  spaceBetween: 60,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  Brand Story: brand-story.html
var brandStory = new Swiper(".brandStory", {
  slidesPerView: 4,
  spaceBetween: 16,
  grabCursor: true,
});


//  Product Usage on Brand Page: product-usage.html
var productUsage = new Swiper(".productUsage", {
  modules: [Navigation],
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//  Discover More: discover-more.html
var discoverMore = new Swiper(".discover-more__swiper .discoverMore", {
  slidesPerView: 4,
  spaceBetween: 16,
  grabCursor: true,
});