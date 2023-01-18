let item = document.querySelector(".header__hamburger");
item.addEventListener("click", function () {
	document.body.classList.toggle("menu-open");
});

//intro
gsap.from(".intro__bg", {
	scale: 0.6,
	duration: 0.8,
	opacity: 0,
	ease: Power2.easeOut,
	delay: 0.2,
	filter: "blur(100px)",
});

//fade up
ScrollTrigger.batch(".fade-up", {
	start: "top 80%",
	onEnter: (elements, triggers) => {
		gsap.to(elements, {
			opacity: 1,
			stagger: 0.3,
			y: 0,
			duration: 1.5,
			ease: Power2.easeOut,
		});
	},
});

// parallax
gsap.to(".intro", {
	yPercent: 55,
	scale: 0.6,
	opacity: 0,
	scrollTrigger: {
		trigger: ".intro",
		scrub: true,
		start: "top top",
		end: "bottom top",
		//markers: true,
	},
});

//video
let video_bg = document.querySelector("#video");

video_bg.pause();

let tl = gsap.timeline();

gsap.to(".panel-video", {
	yPercent: -5,
	opacity: 1,
	scrollTrigger: {
		trigger: ".panel-video",
		scrub: true,
		start: "top 70%",
		end: "bottom 40%",
		// markers: true,
		onEnter: function () {
			video_bg.play();
		},
		onLeave: function () {
			video_bg.pause();
			tl.to(".panel-video", { opacity: 0 });
		},
	},
});

//color inversion

gsap.to(".panel-invert", {
	scrollTrigger: {
		trigger: ".panel-invert",
		start: "top 80%",
		end: "bottom 30%",
		toggleClass: {
			targets: "body",
			className: "panel-white",
		},
		// markers: true,
	},
});

// ipad big
gsap.to(".ipad-big", {
	yPercent: -40,
	xPercent: -40,
	scale: 0.8,
	rotate: 25,
	scrollTrigger: {
		trigger: ".panel-invert",
		scrub: true,
		start: "top 10%",
		end: "bottom top",
		// markers: true,
	},
});

gsap.to(".ipad-big-3", {
	yPercent: -60,
	xPercent: -30,
	scale: 0.8,
	rotate: -25,
	scrollTrigger: {
		trigger: ".ipad-big-3",
		scrub: true,
		start: "top 80%",
		end: "bottom top",
		// markers: true,
	},
});

/* fine file */
