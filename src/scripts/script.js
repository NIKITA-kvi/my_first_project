const heading = document.querySelector('.heading');

console.log(heading.innerHTML); // eslint-disable-line no-console

// 1 шаг тут мне нужно получить элементы со страницы из DOM дерева и поместить их в переменную

const sliderItems = document.querySelector('.teachers-slider__items');
const sliderScrollBar = document.querySelector('.teachers-controls__scrollbar');
const sliderScrollBarThumb = document.querySelector('.teachers-controls__scrollbar-progress');
const sliderButtons = document.querySelectorAll('.teachers-controls__button');

// Шаг 2 тут я хочу удостоверится или правильно нашел элементы из DOM дерева

console.log(sliderItems);
console.log(sliderScrollBar);
console.log(sliderScrollBarThumb);
console.log(sliderButtons);

let sliderMaxScrollLeft = sliderItems.scrollWidth - sliderItems.clientWidth;
sliderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let gap = 40;
    let direction;
    if (button.id === 'btn-next') {
      direction = 1;
      console.log('SLIDE-RIGHT');
    } else {
      direction = -1;
      console.log('SLIDE-LEFT');
    }

    let scrollAmount = sliderItems.clientWidth + gap; // Слайд + отступ
    let newScrollPosition = sliderItems.scrollLeft + scrollAmount * direction; // Новая позиция прокрутки

    sliderItems.scrollTo({ left: newScrollPosition, behavior: 'smooth' }); // Прокручиваем слайдер
  });
});

sliderItems.addEventListener('scroll', () => {
  let scrollPercentage = (sliderItems.scrollLeft / sliderMaxScrollLeft) * 100;
  sliderScrollBarThumb.style.width = `${scrollPercentage}%`;
});

sliderScrollBarThumb.style.width = `${(sliderItems.clientWidth / sliderItems.scrollWidth) * 100}%`;
