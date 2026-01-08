<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import Hero from './components/Hero.svelte';
	import IntroSection from './components/IntroSection.svelte';
	import Banner from './components/Banner.svelte';
	import Features from './components/Features.svelte';
	import ImageScrollSection from './components/ImageScrollSection.svelte';
	import Testimonials from './components/Testimonials.svelte';
	import CTA from './components/CTA.svelte';
	import Programs from './components/Programs.svelte';
	import ThankYou from './components/ThankYou.svelte';

	gsap.registerPlugin(ScrollTrigger);

	// Brand colors
	const colors = {
		primary: '#fe0002',
		primaryLight: '#ff3333',
		primaryLighter: '#ff5555',
		secondary: '#04095d',
		secondaryLight: '#06097a',
		secondaryLighter: '#0a0f8a',
		white: '#ffffff'
	};

	onMount(() => {
		// Keep overflow-x-hidden to disable horizontal scrolling on sections outside the horizontal scroll wrapper
		document.querySelector('body').classList.add('overflow-x-hidden');

		// Floating shapes animation
		// gsap.to('.floating-shape', {
		// 	y: -30,
		// 	duration: 3,
		// 	repeat: -1,
		// 	yoyo: true,
		// 	ease: 'sine.inOut',
		// 	stagger: 0.5
		// });

		// Section heading animations
		// gsap.utils.toArray('.section-heading').forEach((heading) => {
		// 	gsap.from(heading, {
		// 		scrollTrigger: {
		// 			trigger: heading,
		// 			start: 'top 85%',
		// 			toggleActions: 'play none none reverse'
		// 		},
		// 		opacity: 0,
		// 		y: 50,
		// 		duration: 1,
		// 		ease: 'power3.out'
		// 	});
		// });

		// Features section title
		gsap.from('.features-section .section-heading', {
			scrollTrigger: {
				trigger: '.features-section',
				start: 'top 80%',
				toggleActions: 'play none none reverse'
			},
			opacity: 0,
			scale: 0.8,
			duration: 1,
			ease: 'back.out(1.7)'
		});

		// Features cards with rotation
		gsap.from('.feature-card', {
			scrollTrigger: {
				trigger: '.features-section',
				start: 'top 70%',
				toggleActions: 'play none none reverse'
			},
			opacity: 0,
			y: 100,
			rotationX: -15,
			duration: 1.2,
			stagger: 0.2,
			ease: 'power3.out'
		});

		// Parallax effect for decorative elements
		gsap.utils.toArray('.parallax-section').forEach((section) => {
			gsap.to(section, {
				scrollTrigger: {
					trigger: section,
					start: 'top bottom',
					end: 'bottom top',
					scrub: 1
				},
				y: -150,
				ease: 'none'
			});
		});

		// Horizontal scroll for main sections
		const sections = gsap.utils.toArray('.horizontal-section');
		if (sections.length > 0) {
			gsap.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: 'none',
				scrollTrigger: {
					trigger: '.horizontal-scroll-wrapper',
					pin: true,
					scrub: 1,
					// snap: {
					// 	snapTo: 1 / (sections.length - 1),
					// 	duration: 0,
					// 	delay: 0
					// },
					end: () => '+=' + sections.length * window.innerWidth
				}
			});
		}
	});
</script>

<Hero />

<IntroSection />

<Banner />

<div class="horizontal-scroll-wrapper relative">
	<div class="horizontal-sections flex">
		<!-- Features Section -->
		<Features />

		<!-- Stats Section -->
		<ImageScrollSection />

		<!-- Testimonials Section -->
		<Testimonials />

		<!-- CTA Section -->
		<CTA />

		<!-- Programs Section -->
		<Programs />

		<!-- Footer Section -->
		<!-- <ThankYou /> -->
	</div>
</div>
