const imageList = document.querySelector('.teachers-slider__items');
const slideButtons = document.querySelectorAll('.teachers-controls__button');
const sliderScrollbar = document.querySelector('.teachers-controls__scrollbar');
const scrollbarThumb = document.querySelector('.teachers-controls__scrollbar-progress');

const updateMaxScrollLeft = () => {
  return imageList.scrollWidth - imageList.clientWidth;
};

let maxScrollLeft = updateMaxScrollLeft();

const createSlideButtonClickHandler = (button) => () => {
  let direction;

  if (button.id === 'btn-prev') {
    direction = -1;
  } else {
    direction = 1;
  }

  const scrollAmount = (imageList.clientWidth + 40) * direction;
  imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
};

slideButtons.forEach((button) => {
  button.addEventListener('click', createSlideButtonClickHandler(button));
});

const updateScrollThumbPosition = () => {
  maxScrollLeft = updateMaxScrollLeft();
  const scrollPosition = imageList.scrollLeft;
  const thumbPosition =
    (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
  scrollbarThumb.style.left = `${thumbPosition}px`;
};

imageList.addEventListener('scroll', updateScrollThumbPosition);

let isDragging = false;
let startX = 0;
let startThumbLeft = 0;
let animationFrameId;

scrollbarThumb.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startThumbLeft = scrollbarThumb.offsetLeft;
  scrollbarThumb.style.cursor = 'grabbing';
  document.body.style.userSelect = 'none';

  const maxThumbPosition = sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth;

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(() => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = startThumbLeft + deltaX;
      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
    });
  };

  const handleMouseUp = () => {
    isDragging = false;
    scrollbarThumb.style.cursor = 'grab';
    document.body.style.userSelect = '';
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
});

updateScrollThumbPosition();
