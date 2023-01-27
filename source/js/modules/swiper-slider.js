import Swiper from '../vendor/swiper';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  loopFillGroupWithBlank: true,
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 4,
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
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

export {swiper};
