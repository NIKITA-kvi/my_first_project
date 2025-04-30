const formState = {
  name: '',
  phone: '',
  email: '',
};

const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const form = document.getElementById('form');

const nameRegex = /^[А-Яа-яЁё\s]+$/;
const phoneRegex = /^\d+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

nameInput.addEventListener('input', (event) => {
  formState.name = event.target.value;

  if (formState.name === '') {
    nameInput.setCustomValidity('Поле "Имя" обязательно для заполнения.');
  } else if (!nameRegex.test(formState.name)) {
    nameInput.setCustomValidity('Имя должно содержать только русские буквы и пробелы.');
  } else {
    nameInput.setCustomValidity('');
  }
});

phoneInput.addEventListener('input', (event) => {
  formState.phone = event.target.value;

  if (formState.phone === '') {
    phoneInput.setCustomValidity('Поле "Телефон" обязательно для заполнения.');
  } else if (!phoneRegex.test(formState.phone)) {
    phoneInput.setCustomValidity('Телефон должен содержать только цифры.');
  } else {
    phoneInput.setCustomValidity('');
  }
});

emailInput.addEventListener('input', (event) => {
  formState.email = event.target.value;

  if (formState.email === '') {
    emailInput.setCustomValidity('Поле "Email" обязательно для заполнения.');
  } else if (!emailRegex.test(formState.email)) {
    emailInput.setCustomValidity('Введите корректный email (например, test@mail.ru).');
  } else {
    emailInput.setCustomValidity('');
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const isNameValid = nameRegex.test(formState.name);
  const isPhoneValid = phoneRegex.test(formState.phone);
  const isEmailValid = emailRegex.test(formState.email);

  if (isNameValid && isPhoneValid && isEmailValid) {
    // console.log('✅ Все поля заполнены корректно!');
    // console.log(formState);
  } else {
    // console.log('❌ Ошибка в форме.');

    if (!isNameValid) {
      //   console.log('⚠️ Ошибка в поле "Имя": недопустимые символы.');
    }
    if (!isPhoneValid) {
      //   console.log('⚠️ Ошибка в поле "Телефон": должно быть только цифры.');
    }
    if (!isEmailValid) {
      //   console.log('⚠️ Ошибка в поле "Email": неправильный формат email.');
    }
  }
});
