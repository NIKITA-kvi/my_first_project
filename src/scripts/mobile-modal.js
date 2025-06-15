document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const modalCloseBtns = modal.querySelectorAll('.modal__close-btn, .modal__close-mobile');

  const mobileTabBtn = document.getElementById('mobileTabSelectBtn');
  const mobileTabText = mobileTabBtn.querySelector('.mobile-tabs__text');
  const dropdown = document.getElementById('mobileTabDropdown');
  const options = dropdown.querySelectorAll('.mobile-tabs__option');

  const tabContents = document.querySelectorAll('.teacher-info-tab__content');

  mobileTabBtn.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const selectedTab = option.dataset.tab;

      mobileTabText.textContent = option.textContent;

      options.forEach((opt) => opt.classList.remove('selected'));
      option.classList.add('selected');

      tabContents.forEach((content) => {
        content.classList.toggle('active', content.dataset.tab === selectedTab);
      });

      dropdown.classList.remove('open');
    });
  });

  modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = 'auto';

      mobileTabText.textContent = 'Образование';

      tabContents.forEach((content) => {
        content.classList.toggle('active', content.dataset.tab === 'education');
      });

      options.forEach((opt) => {
        opt.classList.toggle('selected', opt.dataset.tab === 'education');
      });

      dropdown.classList.remove('open');
    });
  });

  // Закрытие выпадающего списка при клике вне селекта
  document.addEventListener('click', (e) => {
    const isClickInsideDropdown = dropdown.contains(e.target);
    const isClickOnTabBtn = mobileTabBtn.contains(e.target);

    if (!isClickInsideDropdown && !isClickOnTabBtn) {
      dropdown.classList.remove('open');
    }
  });
});
