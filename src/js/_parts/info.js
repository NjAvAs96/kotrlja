import Swiper from 'swiper/bundle';

const info = {
	init: function() {
		const swiper = new Swiper('.js-info', {
			effect: 'fade',
			speed: 1000,
			fadeEffect: {
				crossFade: true
			},
			loop: true,
			slidesPerView: 1,
			navigation: {
			  nextEl: '.js-info-prev',
			  prevEl: '.js-info-next',
			},
		});
	}
}

export default info;