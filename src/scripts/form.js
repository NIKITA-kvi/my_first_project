const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const form = document.getElementById('form');
const button = document.getElementById('submit-btn');

const nameRegex = /^[А-Яа-яЁё\s]+$/;
const phoneRegex = /^\d+$/;
const emailRegex = /^[^\s@]+@[\w-]+(\.[\w-]+)+$/;

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
  2;
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

const checkFormValidity = () => {
  const isNameValid = checkNameInputValidity();
  const isPhoneValid = checkPhoneInputValidity();
  const isEmailValid = checkEmailInputValidity();

  return isNameValid && isPhoneValid && isEmailValid;
};

button.addEventListener('click', (e) => {
  e.preventDefault();

  const isFormValid = checkFormValidity();

  if (!isFormValid) {
    return;
  }

  // eslint-disable-next-line
  console.log('✅ Все поля заполнены корректно!');
  // eslint-disable-next-line
  console.log(formState);
  resetForm();
});
