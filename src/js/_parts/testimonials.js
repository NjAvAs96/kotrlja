import Swiper from 'swiper/bundle';

const testimonials = {
	init: function() {
		const swiper = new Swiper('.js-testimonials-slider', {
			// Optional parameters
			loop: true,

			// If we need pagination
			pagination: {
				el: ".js-testimonials-pagination",
				clickable: true
			  },
		});
	}
}

export default testimonials;