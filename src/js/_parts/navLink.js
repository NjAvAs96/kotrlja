const navLink = {
	sections: document.querySelectorAll('section'),
	navList: document.querySelectorAll('.js-nav-href'),
	init: function() {
		this.obs();
	},
	obs: function() {
		let _this = this;
		const options = {
			threshold: "0.7"
		}
		const observer = new IntersectionObserver(entries => {
			entries.forEach(e => {
				if (e.isIntersecting) {
					_this.navList.forEach(link => {
						link.classList.remove('active');
						if(e.target.id === link.dataset.nav) {
							link.classList.add('active');
						}

					});
				}
			});
		}, options);
		this.sections.forEach(section => {
			observer.observe(section);
		});
	}
}

export default navLink;