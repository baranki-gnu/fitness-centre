let formMain = document.querySelector('[data-form]');

const phonePattern = /^((\d|\+\d)[\- ]?)?(\(?\d{1,}\)?[\- ]?)?[\d\- ]*$/;

function validateTelephone(formBlock) {
  let input = formBlock.querySelector('[data-telephone-input] input');
  if (input) {
    input.addEventListener('input', () => {
      let telephoneValue = input.value;

      if (telephoneValue.match(phonePattern)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        input.setCustomValidity('');
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');

        input.setCustomValidity('Введите корректный номер телефона');
      }

      if (telephoneValue === '') {
        input.classList.remove('valid');
        input.classList.remove('invalid');
      }
    });
  }
}

function validateName(formBlock) {
  let input = formBlock.querySelector('[data-name-input] input');
  if (input) {
    input.addEventListener('input', () => {
      let nameValue = input.value;

      if (nameValue.match(/^[А-Яа-я]{1,}|[A-Za-z]{1,}$/)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        input.setCustomValidity('');
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');

        input.setCustomValidity('Введите имя контактного лица на латинице или кириллице');
      }

      if (nameValue === '') {
        input.classList.remove('valid');
        input.classList.remove('invalid');
      }
    });
  }
}

function turnFormValidationOn() {
  if (formMain) {
    validateTelephone(formMain);
    validateName(formMain);
  }
}

export {turnFormValidationOn};
