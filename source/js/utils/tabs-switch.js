let tabsButtonsList = document.querySelector('[data-tabs-buttons]');
let tabsButtons = Array.from(tabsButtonsList.querySelectorAll('[data-duration]'));

function findActiveButton() {
  let activeButton = tabsButtonsList.querySelector('.exercise-pass__duration-item--active');
  console.log(activeButton);

  return activeButton;
}

function isButtonActive(button) {
  if (button.dataset.duration === findActiveButton().dataset.duration) {
    console.log('да');
    return true;
  }
  console.log('нет');

  return false;
}

function findActiveTab(dataInfo) {
  console.log('дата ' + dataInfo);
  let tabsList = document.querySelector('[data-tabs-content]');
  //let string = 'data-tab=' + '\"' + dataInfo + '\"';
  let activeTab = tabsList.querySelector('[data-tab=dataInfo]');
  console.log('активный таб' + activeTab);

  return activeTab;
}


function switchTab() {
  tabsButtons.forEach((item) => {
    item.addEventListener('click', () => {
      console.log('клик');

      if (isButtonActive(item)) {

        return;
      }

      let activeButton = findActiveButton();
      console.log(activeButton);
      let activeData = activeButton.dataset.duration;
      //let activeData = activeButton.dataset;
      let activeTab = findActiveTab(activeData);

      activeButton.classList.remove('exercise-pass__duration-item--active');
      activeTab.classList.remove('tab-list__item--current');

      let itemData = item.dataset.duration;
      let itemTab = findActiveTab(itemData);

      item.classList.add('exercise-pass__duration-item--active');
      itemTab.classList.remove('tab-list__item--current');


    });
  });
}

export {switchTab};
