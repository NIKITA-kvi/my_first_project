const modal = document.querySelector('.modal');
const modalBackDrop = document.querySelector('.modal__backdrop');
const closeModalBtn = document.querySelector('.modal__close-btn');
const tabButtons = document.querySelectorAll('.teacher-modal__button');
const tabContents = document.querySelectorAll('.teacher-modal__info-content');
const openModalBtn = document.querySelectorAll('.teachers-card__btn');

openModalBtn.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.add('open');

    document.body.style.overflow = 'hidden';
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('open');

  document.body.style.overflow = 'visible';
});

document.addEventListener('keydown', (keyDownEvent) => {
  if (keyDownEvent.key === 'Escape' && modal.classList.contains('open')) {
    modal.classList.remove('open');
  }
});

modalBackDrop.addEventListener('click', () => {
  modal.classList.remove('open');
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
      .querySelector(`.teacher-modal__info-content[data-tab="${tab}"]`)
      .classList.add('active');
  });
});
