const burger = document.querySelector('.burger-wrapper__nav');
const menu = document.querySelector('.mobile-menu');
const closeBurger = document.querySelector('.mobile-menu__close-icon');

burger.addEventListener('click', () => {
  menu.style.display = 'flex';
  menu.classList.remove('mobile-menu--closing');
  menu.classList.add('mobile-menu--opn');
  document.body.style.overflow = 'hidden';
});

closeBurger.addEventListener('click', () => {
  menu.classList.remove('mobile-menu--opn');
  menu.classList.add('mobile-menu--closing');
  document.body.style.overflow = 'auto';
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.classList.contains('mobile-menu--opn')) {
    menu.classList.remove('mobile-menu--opn');
    menu.classList.add('mobile-menu--closing');
    document.body.style.overflow = 'auto';
  }
});

menu.addEventListener('animationend', (event) => {
  if (event.animationName === 'slideOut') {
    menu.classList.remove('mobile-menu--closing');
    menu.style.display = 'none';
  }
});
