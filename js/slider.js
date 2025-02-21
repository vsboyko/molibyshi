const menu = new Swiper(".menu__slider", {
	loop: true,
	effect: "fade",
	autoplay: true,
	speed: 1000,
	grabCursor: false,
	simulateTouch: false,
	autoplay: {
		delay: 6000,
	},
	lazy: {
		loadPrevNext: true,
		loadPrevNextAmount: 2,
	},
});

const interior = new Swiper(".interior-slider", {
  speed: 600,

  navigation: {
    nextEl: ".slider-navigation__interior-btn-next",
    prevEl: ".slider-navigation__interior-btn-prev",
  },

  spaceBetween: 46,
});

const food = new Swiper(".food-slider", {
  speed: 600,

  navigation: {
    nextEl: ".slider-navigation__food-btn-next",
    prevEl: ".slider-navigation__food-btn-prev",
  },

  spaceBetween: 46,
});

const guests = new Swiper(".guests-slider", {
  speed: 600,

  navigation: {
    nextEl: ".slider-navigation__guests-btn-next",
    prevEl: ".slider-navigation__guests-btn-prev",
  },

  spaceBetween: 46,
});

const news = new Swiper(".article__slider", {
  loop: true,
  speed: 600,
  effect: "fade",

  navigation: {
    nextEl: ".slider-navigation__news-btn-next",
    prevEl: ".slider-navigation__news-btn-prev",
  },
});

const pressSlider = new Swiper(".js-press-slider-init", {
  loop: true,
  speed: 600,
  navigation: {
    nextEl: ".js-press-slider-btn-next",
    prevEl: ".js-press-slider-btn-prev",
  },
  breakpoints: {
    0: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    575: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    1199: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    1601: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
  },
});