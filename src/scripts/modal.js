const infoBlock = document.querySelector('.modal__info-block');
const scrollbarWrapper = document.querySelector('.modal__scrollbar');
const scrollbarProgress = document.querySelector('.modal__scrollbar-progress');

const modal = document.querySelector('.modal-overlay');
const openModalBtn = document.querySelectorAll('.teachers-card__btn');
const closeModalBtn = document.querySelector('.modal__close-btn');
const tabButtons = document.querySelectorAll('.modal__button');
const tabContents = document.querySelectorAll('.modal__info-content');

openModalBtn.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.add('open');
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
  if (event.target === modal) {
    modal.classList.remove('open');
  }
});

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((button) => {
      button.classList.remove('active');
    });
    tabContents.forEach((content) => {
      content.classList.remove('active');
    });

    const tab = button.getAttribute('data-tab');

    button.classList.add('active');
    document.querySelector(`.modal__info-content[data-tab="${tab}"]`).classList.add('active');
  });
});

infoBlock.addEventListener('scroll', () => {
  const scrollRatio = infoBlock.scrollTop / (infoBlock.scrollHeight - infoBlock.clientHeight);
  const scrollbarHeight = scrollbarWrapper.clientHeight - scrollbarProgress.clientHeight;
  scrollbarProgress.style.transform = `translateY(${scrollRatio * scrollbarHeight}px)`;
});

let isDragging = false;
let startY;
let startScrollTop;

scrollbarProgress.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
  startScrollTop = infoBlock.scrollTop;
  document.body.style.userSelect = 'none';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaY = e.clientY - startY;
  const scrollableHeight = infoBlock.scrollHeight - infoBlock.clientHeight;
  const scrollbarHeight = scrollbarWrapper.clientHeight - scrollbarProgress.clientHeight;
  const scrollRatio = deltaY / scrollbarHeight;
  infoBlock.scrollTop = startScrollTop + scrollRatio * scrollableHeight;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.userSelect = '';
});
