

let sliderContainer = document.querySelector('[data-slider-container]');

let coachCards = sliderContainer.querySelectorAll('[data-coach-card]');
//let hasFocus = sliderContainer.matches(':focus-within:not(:focus)');


const isEnterKey = (evt) => {
  return evt.key === 'Enter';
};


function toggleSliderView() {
  console.log('я работаю');

    let activeSlide = coachCards.querySelector('.swiper-slide-active');
    activeSlide.classList.add('coach-card--check');

    let sliderButtons = sliderContainer.querySelectorAll('[data-slider-button]');

    sliderContainer.addEventListener('focusout', () => {
      coachCards.forEach((card) => {
        card.classList.remove('coach-card--check');
      });
      console.log('нет фокуса на слайдере');
      return;
    });

    sliderButtons.forEach('button', (button) => {
    if (button.matches(':focus')) {
      sliderButtons.addEventListener('keydown', (evt) => {
        onSliderButtonPress(evt, activeSlide);
      });
    }
  });

}

function onSliderButtonPress(evt, activeSlide) {
  if (isEnterKey(evt)) {
    activeSlide.classList.remove('coach-card--check');
    activeSlide = coachCards.querySelector('.swiper-slide-active');
    activeSlide.classList.add('coach-card--check');
  }
}

//function hasSliderFocus() {
  //console.log(hasFocus = sliderContainer.matches(':focus-within:not(:focus)'));
  sliderContainer.addEventListener('focus', toggleSliderView);
  //sliderContainer.addEventListener('focus', () => {
  //  let hasFocus = sliderContainer.matches(':focus');
  //  console.log(hasFocus);
  //}
  //);
//}


//function haveSliderButtonsFocus() {
//  let sliderButtons = sliderContainer.querySelectorAll('[data-slider-button]');
//  Array.from(sliderButtons).forEach(function (button) {
//    button.addEventListener('focus', () => {
//      console.log('есть фокус');
//   }, true);
//  });
//}

function hasSliderFocus() {
  document.addEventListener('focusin', () => {
    console.log('фокус!');
    if (sliderContainer.contains(document.activeElement)) {
      console.log('есть фокус на слайдере!');
      toggleSliderView();

    }

  });
}

export {hasSliderFocus};
