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

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

export {swiper};
