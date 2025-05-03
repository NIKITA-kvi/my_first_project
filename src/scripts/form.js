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

function highlightInput(input, isValid) {
  if (isValid) {
    input.classList.remove('enroll-field__input--invalid'); // Убираем красную границу, если данные корректны
  } else {
    input.classList.add('enroll-field__input--invalid'); // Добавляем красную границу при ошибке
  }
}

nameInput.addEventListener('input', (event) => {
  formState.name = event.target.value;

  if (formState.name === '') {
    nameInput.setCustomValidity('Поле "Имя" обязательно для заполнения.');
    highlightInput(nameInput, false);
    return;
  }

  if (!nameRegex.test(formState.name)) {
    nameInput.setCustomValidity('Имя должно содержать только русские буквы и пробелы.');
    highlightInput(nameInput, false);
    return;
  }

  nameInput.setCustomValidity('');
  highlightInput(nameInput, true);
});

phoneInput.addEventListener('input', (event) => {
  formState.phone = event.target.value;

  if (formState.phone === '') {
    phoneInput.setCustomValidity('Поле "Телефон" обязательно для заполнения.');
    highlightInput(phoneInput, false);
    return;
  }

  if (!phoneRegex.test(formState.phone)) {
    phoneInput.setCustomValidity('Телефон должен содержать только цифры.');
    highlightInput(phoneInput, false);
    return;
  }
  phoneInput.setCustomValidity('');
  highlightInput(phoneInput, true);
});

emailInput.addEventListener('input', (event) => {
  formState.email = event.target.value;

  if (formState.email === '') {
    emailInput.setCustomValidity('Поле "Email" обязательно для заполнения.');
    highlightInput(emailInput, false);
    return;
  }

  if (!emailRegex.test(formState.email)) {
    emailInput.setCustomValidity('Введите корректный email (например, test@mail.ru).');
    highlightInput(emailInput, false);
    return;
  }

  emailInput.setCustomValidity('');
  highlightInput(emailInput, true);
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const isNameValid = nameRegex.test(formState.name);
  const isPhoneValid = phoneRegex.test(formState.phone);
  const isEmailValid = emailRegex.test(formState.email);

  if (isNameValid && isPhoneValid && isEmailValid) {
    // eslint-disable-next-line
    console.log('✅ Все поля заполнены корректно!');
    // eslint-disable-next-line
    console.log(formState);

    form.reset();

    formState.name = '';
    formState.phone = '';
    formState.email = '';
  }
});
