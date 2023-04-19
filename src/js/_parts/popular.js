import Swiper from "swiper/bundle";

const popular = {
	init: function () {
		const popularFirst = new Swiper(".js-popular-primary-slider", {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			grabCursor: true,
			pagination: {
				el: ".js-slider-pagination",
				dynamicBullets: true,
			},
			navigation: {
				nextEl: ".js-popular-next",
				prevEl: ".js-popular-prev",
			},
			breakpoints: {
				767: {
					slidesPerView: 2.14,
					centeredSlides: true,
				},
				1200: {
					slidesPerView: 3,
				}
			},
		});
		const popularSecond = new Swiper(".js-popular-second-slider", {
			loop: true,
			slidesPerView: 1,
			grabCursor: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
		});

		popularFirst.controller.control = popularSecond;
		popularSecond.controller.control = popularFirst;
	},
};

export default popular;
