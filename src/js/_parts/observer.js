import { gsap } from "gsap";
const observerAnim = {
	sections: document.querySelectorAll('.part'),
	arrow: document.querySelector('.js-arrow-top'),
    init: function() {
        this.obs();
    },
    obs: function() {
		const t1 = gsap.timeline({ defaults: {ease: "power1.out" } });
		const t2 = gsap.timeline({ defaults: {ease: "power1.out" } });
		let _this = this;
		const options = {
			threshold: "0.7"
		}
		const observer = new IntersectionObserver(entries => {
			entries.forEach(e => {
				if (e.isIntersecting) {
					if(e.target.id === 'banner') {
						_this.arrow.classList.remove('visible');
						if(window.innerWidth > 1199) {
							t1.clear();
							t1.to('.js-header-container', {width: '100%', duration: 0.5});
							t1.to('.js-nav-container', {opacity: 1, duration: 0.3, delay: 0.2});
						} else {
							t1.clear();
						}
					} else {
						_this.arrow.classList.add('visible');
						if(window.innerWidth > 1199) {
							t1.clear();
							t1.to('.js-nav-container', {opacity: 0, duration: 0.3});
							t1.to('.js-header-container', {width: '124px', duration: 0.5, delay: 0.2});
							document.querySelector('.js-header-container').addEventListener('mouseenter', () => {
								t1.clear();
								t1.to('.js-header-container', {width: '100%', duration: 0.5});
								t1.to('.js-nav-container', {opacity: 1, duration: 0.3, delay: 0.2});
							});
							document.querySelector('.js-header-container').addEventListener('mouseleave', () => {
								t1.clear();
								t1.to('.js-nav-container', {opacity: 0, duration: 0.3});
								t1.to('.js-header-container', {width: '124px', duration: 0.5, delay: 0.2});
							});
						} else {
							t1.clear();
						}
					}
					console.log(e.target.id);
				}
			});
		}, options);
		this.sections.forEach(section => {
			observer.observe(section);
		});
	}
};

export default observerAnim;
