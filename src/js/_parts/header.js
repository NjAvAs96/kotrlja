import helpers from "./helpers";
const header = {
	header: document.querySelector('.js-header'),
	nav: document.querySelector('.js-nav-container'),
	btnOpen: document.querySelector('.js-nav-btn-open'),
	btnClose: document.querySelector('.js-nav-btn-close'),
	init: function() {
		this.open();
		this.close();
	},
	open: function() {
		let _this = this;
		this.btnOpen.addEventListener('click', function(e) {
			_this.nav.classList.add('active');
			_this.header.classList.add('active');
			helpers.disableScroll();
		});
	},
	close: function() {
		let _this = this;
		this.btnClose.addEventListener('click', function(e) {
			_this.nav.classList.remove('active');
			_this.header.classList.remove('active');
			helpers.enableScroll();
		});
	}
}

export default header;