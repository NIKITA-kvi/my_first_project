const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const form = document.getElementById('form');
const button = document.getElementById('submit-btn');

// eslint-disable-next-line
console.log(nameInput);
// eslint-disable-next-line
console.log(phoneInput);
// eslint-disable-next-line
console.log(emailInput);
// eslint-disable-next-line
console.log(form);
// eslint-disable-next-line
console.log(button);

const nameRegex = new RegExp('^[А-Яа-яЁё\s]+$');
const phoneRegex = new RegExp('^\\d+$');
const emailRegex = new RegExp('^[^\\s@]+@[\\w-]+(\\.[\\w-]+)+$');

let formState = {
  name: {
    value: '',
    isValid: true,
  },
  phone: {
    value: '',
    isValid: true,
  },
  email: {
    value: '',
    isValid: true,
  },
};

const highlightInput = (input, isValid) => {
  if (isValid) {
    input.classList.remove('enroll-field__input--invalid');
    return;
  }

  input.classList.add('enroll-field__input--invalid');
};

const checkNameInputValidity = () => {
  if (!formState.name.value.length) {
    nameInput.setCustomValidity('Поле "Имя" обязательно для заполнения.');
    nameInput.reportValidity();
    formState.name.isValid = false;
    highlightInput(nameInput, false);
    return false;
  }

  if (!formState.name.value.match(nameRegex)) {
    nameInput.setCustomValidity('Имя должно содержать только русские буквы и пробелы.');
    nameInput.reportValidity();
    formState.name.isValid = false;
    highlightInput(nameInput, false);
    return false;
  }

  nameInput.setCustomValidity('');
  formState.name.isValid = true;
  highlightInput(nameInput, true);
  return true;
};

const checkPhoneInputValidity = () => {
  if (!formState.phone.value.length) {
    phoneInput.setCustomValidity('Поле "Телефон" обязательно для заполнения.');
    phoneInput.reportValidity();
    formState.phone.isValid = false;
    highlightInput(phoneInput, false);
    return false;
  }

  if (!formState.phone.value.match(phoneRegex)) {
    phoneInput.setCustomValidity('Телефон должен содержать только цифры.');
    phoneInput.reportValidity();
    formState.phone.isValid = false;
    highlightInput(phoneInput, false);
    return false;
  }

  phoneInput.setCustomValidity('');
  formState.phone.isValid = true;
  highlightInput(phoneInput, true);
  return true;
};

const checkEmailInputValidity = () => {
  if (!formState.email.value.length) {
    emailInput.setCustomValidity('Поле "Email" обязательно для заполнения.');
    emailInput.reportValidity();
    formState.email.isValid = false;
    highlightInput(emailInput, false);
    return false;
  }

  if (!formState.email.value.match(emailRegex)) {
    emailInput.setCustomValidity('Введите корректный email (например, test@mail.ru).');
    emailInput.reportValidity();
    formState.email.isValid = false;
    highlightInput(emailInput, false);
    return false;
  }

  emailInput.setCustomValidity('');
  formState.email.isValid = true;
  highlightInput(emailInput, true);
  return true;
};

nameInput.addEventListener('input', (event) => {
  formState.name.value = event.target.value;
  if (!formState.name.isValid) {
    checkNameInputValidity();
  }
});
phoneInput.addEventListener('input', (event) => {
  formState.phone.value = event.target.value;
  if (!formState.phone.isValid) {
    checkPhoneInputValidity();
  }
});
emailInput.addEventListener('input', (event) => {
  formState.email.value = event.target.value;
  if (!formState.email.isValid) {
    checkEmailInputValidity();
  }
});

const checkFormValidity = () => {
  const isNameValid = checkNameInputValidity();
  const isPhoneValid = checkPhoneInputValidity();
  const isEmailValid = checkEmailInputValidity();

  return isNameValid && isPhoneValid && isEmailValid;
};

const resetForm = () => {
  form.reset();

  formState = {
    name: {
      value: '',
      isValid: true,
    },
    phone: {
      value: '',
      isValid: true,
    },
    email: {
      value: '',
      isValid: true,
    },
  };
};

button.addEventListener('click', (e) => {
  e.preventDefault();

  const isNameValid = checkNameInputValidity();
  if (!isNameValid) {
    return;
  }

  const isPhoneValid = checkPhoneInputValidity();
  if (!isPhoneValid) {
    return;
  }

  const isEmailValid = checkEmailInputValidity();
  if (!isEmailValid) {
    return;
  }

  // eslint-disable-next-line
  console.log('✅ Все поля заполнены корректно!');
  // eslint-disable-next-line
  console.log(formState);
  resetForm();
});

// const formState = {
//   name: '',
//   phone: '',
//   email: '',
// };

// const nameInput = document.getElementById('name');
// const phoneInput = document.getElementById('phone');
// const emailInput = document.getElementById('email');
// const form = document.getElementById('form');

// const nameRegex = /^[А-Яа-яЁё\s]+$/;
// const phoneRegex = /^\d+$/;
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// function highlightInput(input, isValid) {
//   if (isValid) {
//     input.classList.remove('enroll-field__input--invalid');
//     return;
//   }
//   input.classList.add('enroll-field__input--invalid');
// }

// nameInput.addEventListener('input', (event) => {
//   formState.name = event.target.value;
//   if (formState.name === '') {
//     nameInput.setCustomValidity('Поле "Имя" обязательно для заполнения.');
//     highlightInput(nameInput, false);
//     return;
//   }
//   if (!nameRegex.test(formState.name)) {
//     nameInput.setCustomValidity('Имя должно содержать только русские буквы и пробелы.');
//     highlightInput(nameInput, false);
//     return;
//   }
//   nameInput.setCustomValidity('');
//   highlightInput(nameInput, true);
// });

// phoneInput.addEventListener('input', (event) => {
//   formState.phone = event.target.value;
//   if (formState.phone === '') {
//     phoneInput.setCustomValidity('Поле "Телефон" обязательно для заполнения.');
//     highlightInput(phoneInput, false);
//     return;
//   }
//   if (!phoneRegex.test(formState.phone)) {
//     phoneInput.setCustomValidity('Телефон должен содержать только цифры.');
//     highlightInput(phoneInput, false);
//     return;
//   }
//   phoneInput.setCustomValidity('');
//   highlightInput(phoneInput, true);
// });

// emailInput.addEventListener('input', (event) => {
//   formState.email = event.target.value;
//   if (formState.email === '') {
//     emailInput.setCustomValidity('Поле "Email" обязательно для заполнения.');
//     highlightInput(emailInput, false);
//     return;
//   }
//   if (!emailRegex.test(formState.email)) {
//     emailInput.setCustomValidity('Введите корректный email (например, test@mail.ru).');
//     highlightInput(emailInput, false);
//     return;
//   }
//   emailInput.setCustomValidity('');
//   highlightInput(emailInput, true);
// });

// form.addEventListener('submit', function (event) {
//   event.preventDefault();

//   const isNameValid = nameRegex.test(formState.name);
//   const isPhoneValid = phoneRegex.test(formState.phone);
//   const isEmailValid = emailRegex.test(formState.email);

//   if (isNameValid && isPhoneValid && isEmailValid) {
//     // eslint-disable-next-line
//     console.log('✅ Все поля заполнены корректно!');
//     // eslint-disable-next-line
//     console.log(formState);

//     formState.name = '';
//     formState.phone = '';
//     formState.email = '';
//   }
// });
