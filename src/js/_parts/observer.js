import { gsap } from "gsap";
const observerAnim = {
	sections: document.querySelectorAll('.part'),
	arrow: document.querySelector('.js-arrow-top'),
    init: function() {
        this.obs();
		this.obsanim();
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
				}
			});
		}, options);
		this.sections.forEach(section => {
			observer.observe(section);
		});
	},
	obsanim: function() {
		const t1 = gsap.timeline({ defaults: {ease: "power1.out" } });
		const t2 = gsap.timeline({ defaults: {ease: "power1.out" } });
		const t3 = gsap.timeline({ defaults: {ease: "power1.out" } });
		const t4 = gsap.timeline({ defaults: {ease: "power1.out" } });
		const t5 = gsap.timeline({ defaults: {ease: "power1.out" } });
		const t6 = gsap.timeline({ defaults: {ease: "power1.out" } });
		const t7 = gsap.timeline({ defaults: {ease: "power1.out" } });


		let _this = this;
		const options = {
			threshold: "0.4"
		}
		const observer = new IntersectionObserver(entries => {
			entries.forEach(e => {
				if (e.isIntersecting) {
					if(e.target.id === 'about' && !e.target.classList.contains('in-view')) {
						if(window.innerWidth > 767) {
							t1.to('.about__img-container', {opacity: 1, y: 0, duration: 0.5});
							t1.to('.about__info', {opacity: 1, x: 0, duration: 1});
						} else {
							t1.to('.about__img-container', {opacity: 1, duration: 0.5});
							t1.to('.about__info', {opacity: 1, duration: 1});
						}
						e.target.classList.add('in-view');
					}
					if(e.target.id === 'time' && !e.target.classList.contains('in-view')) {
						t2.to('.time__title', {opacity: 1, duration: 1});
						t2.to('.time__logo', {opacity: 1, duration: 1}, '-=1');
						t2.to('.time__cell', {scale: 1, duration: 1, stagger: 0.15}, '-=0.5');
						e.target.classList.add('in-view');
					}
					if(e.target.id === 'services' && !e.target.classList.contains('in-view')) {
						t3.to('.services', {opacity: 1, duration: 1});
						e.target.classList.add('in-view');
					}
					if(e.target.id === 'popular' && !e.target.classList.contains('in-view')) {
						t4.to('.popular__title', {opacity: 1, duration: 1});
						t4.to('.popular__slider-primary-box', {opacity: 1, duration: 1}, '-=0.5');
						t4.to('.popular__slider-second', {opacity: 1, duration: 1}, '-=0.5');
						t4.to('.popular__pagination', {opacity: 1, duration: 1}, '-=0.5');
						e.target.classList.add('in-view');
					}
					if(e.target.id === 'info' && !e.target.classList.contains('in-view')) {
						t5.to('.info__intro', {opacity: 1, duration: 1});
						t5.to('.info__img-container', {opacity: 1, y: 0, duration: 1}, '-=0.5');
						t5.to('.info__box', {opacity: 1, duration: 1}, '-=0.5');
						e.target.classList.add('in-view');
					}
					// if(e.target.id === 'testimonials' && !e.target.classList.contains('in-view')) {
					// 	t6.to('.testimonials__title', {opacity: 1, duration: 1});
					// 	t6.to('.testimonials__logo', {opacity: 1, y: 0, duration: 1}, '-=0.5');
					// 	t6.to('.testimonials__slider', {opacity: 1, duration: 1}, '-=0.5');
					// 	e.target.classList.add('in-view');
					// }
					if(e.target.id === 'footer' && !e.target.classList.contains('in-view')) {
						t7.to('.footer__logo', {opacity: 1, duration: 0.7});
						t7.to('.footer__mail', {opacity: 1, y: 0, duration: 0.7}, '-=0.5');
						t7.to('.footer__phone', {opacity: 1, duration: 0.7}, '-=0.5');
						t7.to('.footer__location', {opacity: 1, duration: 0.7}, '-=0.5');
						t7.to('.footer__social-media', {opacity: 1, duration: 0.7}, '-=0.5');
						t7.to('.footer__copy', {opacity: 1, duration: 0.7}, '-=0.5');
						e.target.classList.add('in-view');
					}
				}
			});
		}, options);
		this.sections.forEach(section => {
			observer.observe(section);
		});
	}
};

export default observerAnim;
