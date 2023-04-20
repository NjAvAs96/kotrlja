import Swiper from "swiper/bundle";

const services = {
	init: function () {
		const services = new Swiper(".js-services-slider", {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			grabCursor: true,
			navigation: {
				nextEl: ".js-services-next",
				prevEl: ".js-services-prev",
			},
			pagination: {
				el: ".js-services-pagination",
				dynamicBullets: true,
				clickable: true,
			},
			breakpoints: {
				767: {
					slidesPerView: 2.189,
					centeredSlides: true,
				},
				1200: {
					slidesPerView: 4,
				},
			},
		});
		const services2 = new Swiper(".js-services-slider-mobile", {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			pagination: {
				el: ".js-services-pagination-second",
				dynamicBullets: true,
				clickable: true,
			},
		});
	},
};

export default services;
