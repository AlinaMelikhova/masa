const menuToggleButton = document.querySelector('.header__menu-button');
const pageWrapper = document.querySelector('.page-wrapper');
const mainPage = document.querySelector('main');
const menuButtonWrapper = document.querySelector('.header__menu-wraper');
const menuWrapper = document.querySelector('.header__nav');
const menuLinks = Array.from(document.querySelectorAll('.header__menu-link'));
const menuExpandedLinks = Array.from(
    document.querySelectorAll('.header__menu-expanded-link')
);

const toggleMenuStyles = () => {
  menuToggleButton.classList.toggle('header__menu-button--opened');
  menuButtonWrapper.classList.toggle('header__menu-wraper--opened');
  menuWrapper.classList.toggle('header__nav--opened');
  pageWrapper.classList.toggle('page-wrapper--menu-opened');
  menuExpandedLinks.forEach((link) => {
    link.classList.remove('header__menu-expanded-link--opened');
  });
  return;
};

const menuLinksHandler = () => {
  hideMenu();
  return;
};

const menuInnerLinksHandler = (evt) => {
  evt.preventDefault();
  evt.target.classList.toggle('header__menu-expanded-link--opened');
  return;
};

const showMenu = () => {
  toggleMenuStyles();
  menuLinks.forEach((link) => {
    link.addEventListener('click', menuLinksHandler);
  });
  menuExpandedLinks.forEach((link) => {
    link.addEventListener('click', menuInnerLinksHandler);
  });
  mainPage.addEventListener('click', hideMenu);
};

const hideMenu = () => {
  toggleMenuStyles();
  menuLinks.forEach((link) => {
    link.removeEventListener('click', menuLinksHandler);
  });
  menuExpandedLinks.forEach((link) => {
    link.removeEventListener('click', menuInnerLinksHandler);
  });
  mainPage.removeEventListener('click', hideMenu);
};

export const handleMobileMenu = () => {
  menuToggleButton.addEventListener('click', () => {
    if (pageWrapper.classList.contains('page-wrapper--menu-opened')) {
      hideMenu();
    } else {
      showMenu();
    }
  });
};
