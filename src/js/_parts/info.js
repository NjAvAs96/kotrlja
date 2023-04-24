import Swiper from 'swiper/bundle';

const info = {
	open: document.querySelectorAll('.js-bio-open'),
	close: document.querySelectorAll('.js-info-close'),
	controls: document.querySelector('.js-info-controls'),
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
		let _this = this;
		this.open.forEach(btn => {
			btn.addEventListener('click', function() {
				btn.nextElementSibling.classList.toggle('active');
				_this.controls.style.zIndex = 0;
			});
		});
		this.close.forEach(element => {
			element.addEventListener('click', () => {
				element.parentElement.classList.remove('active');
				_this.controls.removeAttribute('style');
			});
		});
	}
}

export default info;