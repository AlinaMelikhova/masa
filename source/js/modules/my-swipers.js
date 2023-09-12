import Swiper from "../vendor/swiper.js";

const initHeroSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper(".swiper-hero", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    speed: 300,
    // autoplay: {
    //   delay: 3000,
    // },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // type: "bullets",
    },

    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
    },
  });
};

const initReviewSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper(".swiper-reviews", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 300,

    pagination: {
      el: ".swiper-pagination--reviews",
      type: "progressbar",
    },

    navigation: {
      nextEl: ".swiper-button-next--reviews",
      prevEl: ".swiper-button-prev--reviews",
    },

    breakpoints: {
      1200: {
        allowTouchMove: false,
        slidesPerView: 2,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 30,
      },
    },
  });
};

export const initSwipers = () => {
  initHeroSwiper();
  //   initToursSwiper();
  //   initEducationSwiper();
  initReviewSwiper();
  //   initGalleruSwiper();

  //   if (window.matchMedia('(min-width:1200px)').matches) {
  //     document.querySelector('.swiper-benefits').classList.add('swiper');
  //     document.querySelector('.benefits__list').classList.add('swiper-wrapper');
  //     Array.from(document.querySelectorAll('.benefits__item')).forEach((slide) =>
  //       slide.classList.add('swiper-slide')
  //     );
  //     initBenefitsSwiper();
  //   }
};
