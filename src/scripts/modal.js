const modal = document.querySelector('.modal');
const modalBackDrop = document.querySelector('.modal__backdrop');
const closeModalBtn = document.querySelector('.modal__close-btn');
const tabButtons = document.querySelectorAll('.teacher-tabs__buttons');
const tabContents = document.querySelectorAll('.teacher-info-tab__content');
const openModalBtn = document.querySelectorAll('.teachers-card__btn');

const modalOpen = () => {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

const modalClose = () => {
  modal.classList.remove('open');
  document.body.style.overflow = 'auto';
};

openModalBtn.forEach((button) => {
  button.addEventListener('click', modalOpen);
});

closeModalBtn.addEventListener('click', modalClose);

document.addEventListener('keydown', (keyDownEvent) => {
  if (keyDownEvent.key === 'Escape' && modal.classList.contains('open')) {
    modalClose();
  }
});

modalBackDrop.addEventListener('click', modalClose);

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
    const tabContent = document.querySelector(`.teacher-info-tab__content[data-tab="${tab}"]`);
    tabContent.classList.add('active');
  });
});
