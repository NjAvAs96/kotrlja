import helpers from "./helpers";
const header = {
	header: document.querySelector('.js-header'),
	nav: document.querySelector('.js-nav-container'),
	links: document.querySelectorAll('.js-nav-href'),
	btnOpen: document.querySelector('.js-nav-btn-open'),
	btnClose: document.querySelector('.js-nav-btn-close'),
	init: function() {
		this.open();
		this.closeEvents();
	},
	open: function() {
		let _this = this;
		this.btnOpen.addEventListener('click', function(e) {
			_this.nav.classList.add('active');
			_this.header.classList.add('active');
		});
	},
	close: function() {
		let _this = this;
		setTimeout(function() {
			_this.nav.classList.remove('active');
			_this.header.classList.remove('active');
		}, 100);
	},
	closeEvents: function() {
		let _this = this
		this.btnClose.addEventListener('click', function(e) {
			_this.close();
		});
		this.links.forEach(link => {
			link.addEventListener('click', function(e) {
				_this.close();
			})
		})
	}
}

export default header;