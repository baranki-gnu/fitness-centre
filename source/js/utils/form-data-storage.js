let formMain = document.querySelector('[data-form]');

function storeFieldData(field, key) {
  if (field && key) {
    localStorage.setItem(key, field.value);
  }
}

function storeFormData(formBlock) {
  if (formBlock) {
    let userName = formBlock.querySelector('[data-name-input] input');
    let userNameKey = 'user-name';
    let userTel = formBlock.querySelector('[data-telephone-input] input');
    let userTelKey = 'user-telephone';

    storeFieldData(userName, userNameKey);
    storeFieldData(userTel, userTelKey);
  }
}

function startStoringData() {
  storeFormData(formMain);
}

export {startStoringData};
