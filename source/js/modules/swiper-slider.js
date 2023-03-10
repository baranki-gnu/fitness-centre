import Swiper from '../vendor/swiper';

const coachSlider = new Swiper('.coach-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  loopFillGroupWithBlank: true,
  slidesPerView: 4,
  spaceBetween: 40,
  slidesOffsetBefore: -15,
  freeMode: true,

  keyboard: {
    enabled: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: 2,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesOffsetBefore: -44,
      initialSlide: 2,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesOffsetBefore: -15,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const reviewSlider = new Swiper('.review-slider', {
  // Optional parameters
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export {coachSlider, reviewSlider};
