import { gsap } from "gsap";
import helpers from "./helpers";

const loader = {
	init: function () {
		if (history.scrollRestoration) {
			history.scrollRestoration = 'manual';
		} else {
			window.onbeforeunload = function () {
				window.scrollTo(0, 0);
			}
		}
		this.animation();
	},
	animation: function() {
		const t1 = gsap.timeline({ defaults: {ease: "power1.out" } });
		helpers.addClassNameListener('body', function() {
			t1.to('.loader', {opacity: 0, duration: 0.5, delay: 1.5, onComplete: function() {
				document.querySelector('.js-banner-logo').classList.add('loaded');
			}});
			t1.fromTo('.js-header-container', { y: '-150px'}, { y: '0px', duration: 0.3, delay: 1});
			t1.to('.js-header-container', {width: '100%', duration: 0.5 ,delay: 0.5});
			t1.to('.js-nav', { opacity: 1, duration: 0.5 })
		})
	}
};

export default loader;
