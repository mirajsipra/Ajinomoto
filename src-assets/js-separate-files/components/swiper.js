import Swiper from 'swiper';

import {
  Autoplay,
  EffectFade,
  Pagination,
  Navigation,
  Thumbs,
  Controller
} from 'swiper/modules';

const heroBgSwiper = new Swiper(".hero-bg-swiper .swiper", {
  modules: [Pagination, Autoplay, EffectFade],
  speed: 1000,
  loop: true,
  slidesPerView: "auto",
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const heroSwiper = new Swiper(".hero-caption .swiper", {
  modules: [Pagination, Autoplay, EffectFade, Controller],
  speed: 1000,
  loop: true,
  slidesPerView: "auto",
  effect: 'fade',
  grabCursor: true,
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.hero-caption__pagination',
    clickable: true,
  },
  controller: {
    by: 'slide',
    control: heroBgSwiper,
  },
});

var collectionSwiper = new Swiper(".collections-swiper .swiper-init", {
  slidesPerView: 'auto',
  // loop: true,
  grabCursor: true,
});

function showImages(index) {
  let allImages = document.querySelectorAll(".featured-collection__images-wrapper .image-wrapper");
  if (allImages) {
    allImages.forEach(element => {
      element.classList.remove("show");
    });
    allImages[index].classList.add("show");
  }
}

var featuredCollectionSwiper = new Swiper(".featured-collection--swiper .swiper-init", {
  slidesPerView: 3.2,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  on: {
    init: function () {
      // Initialize the swiper
      var swiper = this;

      // Get all slides using querySelectorAll
      var slides = document.querySelectorAll(".featured-collection--swiper .swiper-init .swiper-slide");

      // Attach mouseenter event listeners to each slide
      slides.forEach(function (slide, index) {
        slide.addEventListener('mouseenter', function () {
          var slideIndexString = slide.getAttribute('data-swiper-slide-index');
          var slideIndex = parseInt(slideIndexString, 10);
          showImages(slideIndex);
        });
        slide.addEventListener('mouseleave', function () {
          let activeImage = document.querySelector(".featured-collection__images-wrapper .image-wrapper.show");
          if (activeImage) {
            activeImage.classList.remove("show");
          }
        });
      });
    }
  },
  breakpoints: {
    768: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3.7,
      spaceBetween: 60,
    },
    1200: {
      slidesPerView: 4.7,
      spaceBetween: 80,
    },
  },
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

var instaFeedSwiper = new Swiper(".insta-feed .swiper-init", {
  slidesPerView: 'auto',
  loop: true,
  grabCursor: true,
});

// Featured Product: pdp.html

var swiper = new Swiper(".recommended-products .swiper-init", {
  slidesPerView: 3.2,
  spaceBetween: 15,
  //   loop: true,
  grabCursor: true,
});

// Product Detail Gallery: pdp.html

var productThumbNav = new Swiper(".product-detail .product-detail__thumbs-nav", {
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});

var productMainSwiper = new Swiper(".product-detail .product-detail__main-swiper", {
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
var productUsageSwiper = new Swiper(".product-how-to-use .product-usage-swiper", {
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
