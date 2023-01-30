import Swiper from '../vendor/swiper';

const swiper = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  loopFillGroupWithBlank: true,
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 4,
  slidesOffsetBefore: -15,
  freeMode: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      slidesOffsetBefore: -44,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4,
      slidesOffsetBefore: -15,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export {swiper, swiper2};
