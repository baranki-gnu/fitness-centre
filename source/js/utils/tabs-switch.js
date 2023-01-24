function switchTab() {

  let tabsButtons = document.querySelectorAll('.exercise-pass__duration-item button');

  if (tabsButtons) {

    tabsButtons.forEach((item) => {
      item.addEventListener('click', () => {
        console.log('клик');

        if (document.querySelector('.exercise-pass__duration-item--active')) {
          document.querySelector('.exercise-pass__duration-item--active').classList.remove('exercise-pass__duration-item--active');
        }


        item.closest('.exercise-pass__duration-item').classList.add('exercise-pass__duration-item--active');
        console.log(item);


        if (document.querySelector('.tab-list__item--current')) {
          document.querySelector('.tab-list__item--current').classList.remove('tab-list__item--current');
        }


        let targetDuration = item.dataset.duration;
        console.log(targetDuration);
        let targetList = document.querySelector(`.tab-list__item[data-tab="${targetDuration}"]`);

        if (targetList) {
          targetList.classList.add('tab-list__item--current');
        }
      });
    });
  }

}

export {switchTab};
