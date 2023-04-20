import Swiper from 'swiper/bundle';

const services = {
	init: function() {
		const services = new Swiper('.js-services-slider', {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			navigation: {
			  nextEl: '.js-services-next',
			  prevEl: '.js-services-prev',
			},
			pagination: {
			  el: '.js-services-pagination',
			  dynamicBullets: true,
			},
			breakpoints: {
				767: {
					slidesPerView: 2.189,
					centeredSlides: true,
				},
				1200: {
					slidesPerView: 4,
				}
			},
		});
		const services2 = new Swiper('.js-services-slider-mobile', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
		});
	}
}

export default services;