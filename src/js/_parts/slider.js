import Swiper from 'swiper/bundle';

const slider = {
	init: function() {
		const swiper = new Swiper('.swiper', {
			// Optional parameters
			loop: true,

			// If we need pagination
			pagination: {
			  el: '.swiper-pagination',
			},

			// Navigation arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},

			// And if we need scrollbar
			scrollbar: {
			  el: '.swiper-scrollbar',
			},
		});
	}
}

export default slider;