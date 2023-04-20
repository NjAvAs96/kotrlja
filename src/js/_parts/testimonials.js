import Swiper from 'swiper/bundle';

const testimonials = {
	init: function() {
		const swiper = new Swiper('.js-testimonials-slider', {
			loop: true,
			grabCursor: true,
			pagination: {
				el: ".js-testimonials-pagination",
				clickable: true,
				dynamicBullets: true,
			  },
		});
	}
}

export default testimonials;