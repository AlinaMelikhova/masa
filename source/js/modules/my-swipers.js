import Swiper from '../vendor/swiper.js';

const initHeroSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper-hero', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 300,

    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: '.swiper-pagination--hero',
      clickable: true,
      renderBullet(index, className) {
        return (
          '<span class="' + className + ' pagination-bullet--hero">' + '</span>'
        );
      },
    },

    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
    },
  });
};

const initNewsSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper-news', {
    loop: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: 'news__item--visible',
    speed: 300,
    slidesPerView: 1,
    spaceBetween: 20,
    grid: {
      rows: 2,
      fill: 'column',
    },

    pagination: {
      el: '.swiper-pagination--news',
      clickable: true,
      renderBullet(index, className) {
        return (
          '<span class="' +
          className +
          ' pagination-bullet--news">' +
          (index + 1) +
          '</span>'
        );
      },
    },

    navigation: {
      nextEl: '.swiper-button-next--news',
      prevEl: '.swiper-button-prev--news',
    },

    breakpoints: {
      1200: {
        allowTouchMove: false,
        slidesPerView: 'auto',
        spaceBetween: 32,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
          fill: 'column',
        },
      },
    },
  });
};

const initProgramsSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper-programs', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 300,

    scrollbar: {
      el: '.swiper-scrollbar--programs',
    },

    navigation: {
      nextEl: '.swiper-button-next--programs',
      prevEl: '.swiper-button-prev--programs',
    },

    breakpoints: {
      1200: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });
};

const initReviewSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper-reviews', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 300,

    scrollbar: {
      el: '.swiper-scrollbar--reviews',
    },

    navigation: {
      nextEl: '.swiper-button-next--reviews',
      prevEl: '.swiper-button-prev--reviews',
    },

    breakpoints: {
      1200: {
        allowTouchMove: false,
        slidesPerView: 2,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });
};

export const initSwipers = () => {
  initHeroSwiper();
  initProgramsSwiper();
  initNewsSwiper();
  initReviewSwiper();
};
