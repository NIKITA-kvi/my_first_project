document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const modalBackdrop = document.querySelector('.modal__backdrop');
  const closeModalBtns = document.querySelectorAll('.modal__close-btn, .modal__close-mobile');
  const openModalButtons = document.querySelectorAll('.teachers-card__btn');

  const desktopTabs = document.querySelectorAll('.teacher-tabs__buttons');
  const mobileTabBtn = document.getElementById('mobileTabSelectBtn');
  const mobileTabText = mobileTabBtn?.querySelector('.mobile-tabs__text');
  const mobileTabDropdown = document.getElementById('mobileTabDropdown');
  const mobileTabOptions = mobileTabDropdown?.querySelectorAll('.mobile-tabs__option');
  const tabContents = document.querySelectorAll('.teacher-info-tab__content');

  function openModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    setActiveTab('education');
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (mobileTabDropdown) {
      mobileTabDropdown.classList.remove('open');
      mobileTabBtn?.setAttribute('aria-expanded', 'false');
    }
    setActiveTab('education');
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  function setActiveTab(tab) {
    desktopTabs.forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
    });

    tabContents.forEach((content) => {
      content.classList.toggle('active', content.getAttribute('data-tab') === tab);
    });

    if (mobileTabText) {
      const activeDesktopBtn = Array.from(desktopTabs).find(
        (btn) => btn.getAttribute('data-tab') === tab,
      );
      mobileTabText.textContent = activeDesktopBtn ? activeDesktopBtn.textContent : '';
    }
  }

  openModalButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      openModal();
    });
  });

  closeModalBtns.forEach((btn) => btn.addEventListener('click', closeModal));
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  desktopTabs.forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      setActiveTab(tabBtn.getAttribute('data-tab'));
    });
  });

  if (mobileTabBtn && mobileTabDropdown && mobileTabOptions) {
    mobileTabBtn.addEventListener('click', () => {
      const expanded = mobileTabBtn.getAttribute('aria-expanded') === 'true';
      mobileTabBtn.setAttribute('aria-expanded', String(!expanded));
      mobileTabDropdown.classList.toggle('open');
    });

    mobileTabOptions.forEach((option) => {
      option.addEventListener('click', () => {
        const tab = option.getAttribute('data-tab');
        setActiveTab(tab);
        mobileTabDropdown.classList.remove('open');
        mobileTabBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  setActiveTab('education');
});
