import Swiper from 'swiper/bundle';

const info = {
	init: function() {
		this.infoSlider();
		this.bio();
	},
	infoSlider: function() {
		const swiper = new Swiper('.js-info', {
			effect: 'fade',
			speed: 1000,
			fadeEffect: {
				crossFade: true
			},
			loop: true,
			grabCursor: true,
			slidesPerView: 1,
			navigation: {
			  nextEl: '.js-info-prev',
			  prevEl: '.js-info-next',
			},
		});
	},
	bio: function() {
		let open = document.querySelectorAll('.js-bio-open');
		let close = document.querySelectorAll('.js-info-close');
		let controls = document.querySelector('.js-info-controls');
		open.forEach(btn => {
			btn.addEventListener('click', function() {
				btn.nextElementSibling.classList.toggle('active');
				controls.style.zIndex = 0;
			})
		});
		close.forEach(element => {
			element.addEventListener('click', () => {
				element.parentElement.classList.remove('active');
				controls.removeAttribute('style');

			})
		})
	}
}

export default info;