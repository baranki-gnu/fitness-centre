function removeNoJs() {
  let durationButtons = document.querySelector('[data-tabs-duration-wrap]');
  if (durationButtons) {
    durationButtons.classList.remove('exercise-pass__duration-wrap--nojs');
  }

  let tabsList = document.querySelector('[data-tabs-content]');
  if (tabsList) {
    tabsList.classList.remove('tab-list--nojs');

    let tabItems = tabsList.querySelectorAll('[data-tab]');

    if (tabItems) {
      tabItems.forEach((item) => {
        item.classList.remove('tab-list__item--nojs');
      });
    }

    let tabTips = tabsList.querySelectorAll('[data-tab-tip]');

    if (tabTips) {
      tabTips.forEach((item) => {
        item.classList.remove('pass-types__item-info-tip--nojs');
      });
    }
  }
}

function switchTab() {
  removeNoJs();

  let tabsButtons = document.querySelectorAll('.exercise-pass__duration-item button');

  if (tabsButtons) {

    tabsButtons.forEach((item) => {
      item.addEventListener('click', () => {

        if (document.querySelector('.exercise-pass__duration-item--active')) {
          document.querySelector('.exercise-pass__duration-item--active').classList.remove('exercise-pass__duration-item--active');
        }

        item.closest('.exercise-pass__duration-item').classList.add('exercise-pass__duration-item--active');

        if (document.querySelector('.tab-list__item--current')) {
          document.querySelector('.tab-list__item--current').classList.remove('tab-list__item--current');
        }

        let targetDuration = item.dataset.duration;

        let targetList = document.querySelector(`.tab-list__item[data-tab="${targetDuration}"]`);

        if (targetList) {
          targetList.classList.add('tab-list__item--current');
        }
      });
    });
  }
}

export {switchTab};
