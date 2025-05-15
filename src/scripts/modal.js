const modal = document.querySelector('.modal');
const modalBackDrop = document.querySelector('.modal__backdrop');
const closeModalBtn = document.querySelector('.modal__close-btn');
const tabButtons = document.querySelectorAll('.teacher-block__button');
const tabContents = document.querySelectorAll('.teacher-block__info-content');
const openModalBtn = document.querySelectorAll('.teachers-card__btn');

console.log(modalBackDrop);

openModalBtn.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.add('open');

    document.body.style.overflow = 'hidden';
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});

document.addEventListener('keydown', (escape) => {
  if (escape.key === 'Escape') {
    modal.classList.remove('open');
  }
});

modal.addEventListener('click', (event) => {
  if (event.target === modalBackDrop) {
    modal.classList.remove('open');
  }
});

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((btn) => {
      btn.classList.remove('active');
    });
    tabContents.forEach((content) => {
      content.classList.remove('active');
    });

    const tab = button.getAttribute('data-tab');

    button.classList.add('active');
    document
      .querySelector(`.teacher-block__info-content[data-tab="${tab}"]`)
      .classList.add('active');
  });
});
