let tabsTitlesList = document.querySelector('[data-tabs-titles]');
let tabsItemTitles = tabsTitlesList.querySelectorAll('[data-tab-title]');

let tabsContentList = document.querySelector('[data-tabs-content]');
let tabsContentItems = tabsContentList.querySelectorAll('[data-tab-item]');

let titlesArray = Array.from(tabsItemTitles);
let tabsContentArray = Array.from(tabsContentItems);

/*function check() {
  titlesArray.forEach((item) => {
    item.addEventListener('click', console.log('проверка'));
  });
}*/

function switchTab() {
  titlesArray.forEach((item, index) => {
    item.addEventListener('click', () => {
      console.log('дошли до сюда');
      if (!item.classList.contains('exercise-pass__duration-item--active')) {
        console.log('здесь');
        let activeTabTitle = tabsTitlesList.querySelector('exercise-pass__duration-item--active');
        activeTabTitle.classList.remove('exercise-pass__duration-item--active');
        item.classList.add('exercise-pass__duration-item--active');
        let activeTab = tabsContentItems.querySelector('tab-list__item--current');
        activeTab.classList.remove('tab-list__item--current');
        tabsContentArray[index].classList.add('tab-list__item--current');
      }
    });
  });
}

export {switchTab};
