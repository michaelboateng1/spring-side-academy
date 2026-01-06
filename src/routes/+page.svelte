<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import Hero from './components/Hero.svelte';
	import IntroSection from './components/IntroSection.svelte';
	import Features from './components/Features.svelte';
	import ImageScrollSection from './components/ImageScrollSection.svelte';

	gsap.registerPlugin(ScrollTrigger);

	let currentSlide = $state(0);

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
	const slides = [
		{
			title: 'Empowering Young',
			subtitle: 'Minds to Shine',
			description:
				'At Shining Vessels Academy, we nurture excellence, creativity, and character in every student.',
			gradient: 'from-[#fe0002] to-[#ff3333]'
		},
		{
			title: 'Building Future',
			subtitle: 'Leaders Today',
			description:
				'Comprehensive K-12 education that prepares students for success in a changing world.',
			gradient: 'from-[#04095d] to-[#0a0f8a]'
		},
		{
			title: 'Where Learning',
			subtitle: 'Comes Alive',
			description:
				'Join our vibrant community where every student is valued, challenged, and inspired.',
			gradient: 'from-[#fe0002] via-[#04095d] to-[#fe0002]'
		}
	];

	onMount(() => {
		// Slideshow timer
		// const slideInterval = setInterval(() => {
		// 	currentSlide = (currentSlide + 1) % slides.length;
		// }, 5000);

		// Hero animations
		// gsap.from('.hero-title', {
		// 	opacity: 0,
		// 	y: 100,
		// 	duration: 1.2,
		// 	ease: 'power4.out'
		// });

		// gsap.from('.hero-subtitle', {
		// 	opacity: 0,
		// 	y: 50,
		// 	duration: 1,
		// 	delay: 0.3,
		// 	ease: 'power3.out'
		// });

		// gsap.from('.hero-cta', {
		// 	opacity: 0,
		// 	y: 30,
		// 	duration: 0.8,
		// 	delay: 0.6,
		// 	stagger: 0.2,
		// 	ease: 'power2.out'
		// });

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
		// gsap.from('.features-section .section-heading', {
		// 	scrollTrigger: {
		// 		trigger: '.features-section',
		// 		start: 'top 80%',
		// 		toggleActions: 'play none none reverse'
		// 	},
		// 	opacity: 0,
		// 	scale: 0.8,
		// 	duration: 1,
		// 	ease: 'back.out(1.7)'
		// });

		// Features cards with rotation
		// gsap.from('.feature-card', {
		// 	scrollTrigger: {
		// 		trigger: '.features-section',
		// 		start: 'top 70%',
		// 		toggleActions: 'play none none reverse'
		// 	},
		// 	opacity: 0,
		// 	y: 100,
		// 	rotationX: -15,
		// 	duration: 1.2,
		// 	stagger: 0.2,
		// 	ease: 'power3.out'
		// });

		// Stats section with scale
		// gsap.from('.stats-section', {
		// 	scrollTrigger: {
		// 		trigger: '.stats-section',
		// 		start: 'top 80%',
		// 		end: 'top 20%',
		// 		scrub: 1
		// 	},
		// 	scale: 0.9,
		// 	opacity: 0.5
		// });

		// Stats counter animation
		// gsap.from('.stat-number', {
		// 	scrollTrigger: {
		// 		trigger: '.stats-section',
		// 		start: 'top 70%',
		// 		toggleActions: 'play none none reverse'
		// 	},
		// 	textContent: 0,
		// 	duration: 2.5,
		// 	ease: 'power2.out',
		// 	snap: { textContent: 1 },
		// 	stagger: 0.2
		// });

		// Stat cards individual animation
		// gsap.from('.stat-card', {
		// 	scrollTrigger: {
		// 		trigger: '.stats-section',
		// 		start: 'top 65%',
		// 		toggleActions: 'play none none reverse'
		// 	},
		// 	opacity: 0,
		// 	y: 60,
		// 	duration: 1,
		// 	stagger: 0.15,
		// 	ease: 'power3.out'
		// });

		// Testimonials section
		// gsap.from('.testimonials-section .section-heading', {
		// 	scrollTrigger: {
		// 		trigger: '.testimonials-section',
		// 		start: 'top 80%',
		// 		toggleActions: 'play none none reverse'
		// 	},
		// 	opacity: 0,
		// 	x: -100,
		// 	duration: 1,
		// 	ease: 'power3.out'
		// });

		// Testimonials with 3D rotation
		// gsap.from('.testimonial-card', {
		// 	scrollTrigger: {
		// 		trigger: '.testimonials-section',
		// 		start: 'top 70%',
		// 		toggleActions: 'play none none reverse'
		// 	},
		// 	opacity: 0,
		// 	scale: 0.7,
		// 	rotationY: 25,
		// 	duration: 1,
		// 	stagger: 0.2,
		// 	ease: 'back.out(1.7)'
		// });

		// CTA section reveal
		// gsap.from('.cta-section', {
		// 	scrollTrigger: {
		// 		trigger: '.cta-section',
		// 		start: 'top 80%',
		// 		toggleActions: 'play none none reverse'
		// 	},
		// 	opacity: 0,
		// 	scale: 0.95,
		// 	duration: 1.2,
		// 	ease: 'power3.out'
		// });

		// Trust indicators horizontal scroll
		// const trustIndicators = gsap.utils.toArray('.trust-indicator');
		// gsap.to(trustIndicators, {
		// 	xPercent: -100 * (trustIndicators.length - 1),
		// 	ease: 'none',
		// 	scrollTrigger: {
		// 		trigger: '.trust-indicators-wrapper',
		// 		start: 'top 80%',
		// 		end: 'bottom 20%',
		// 		scrub: 1,
		// 		pin: false
		// 	}
		// });

		// Parallax effect for decorative elements
		// gsap.utils.toArray('.parallax-section').forEach((section) => {
		// 	gsap.to(section, {
		// 		scrollTrigger: {
		// 			trigger: section,
		// 			start: 'top bottom',
		// 			end: 'bottom top',
		// 			scrub: 1
		// 		},
		// 		y: -150,
		// 		ease: 'none'
		// 	});
		// });

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
					snap: {
						snapTo: 1 / (sections.length - 1),
						duration: 0,
						delay: 0
					},
					end: () => '+=' + sections.length * window.innerWidth
				}
			});
		}
	});
</script>

<div class="horizontal-scroll-wrapper relative">
	<div class="horizontal-sections flex">
		<!-- Hero Section with Slideshow -->
		<!-- <section
			class="horizontal-section hero-section relative flex min-h-screen min-w-screen flex-shrink-0 items-center
		overflow-hidden bg-gradient-to-br from-[#04095d] via-[#06097a] to-[#04095d]"
		> -->
		<!-- Grid pattern overlay -->
		<!-- <div
				class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"
			></div> -->

		<!-- <div class="hero-content relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
				<div class="text-center">
					{#each slides as slide, index}
						<div
							class="absolute inset-0 transition-all duration-1000 {currentSlide === index
								? 'translate-y-0 opacity-100'
								: 'pointer-events-none translate-y-10 opacity-0'}"
						>
							<div class="hero-title mb-6">
								<h1 class="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
									<span
										class="block bg-gradient-to-r bg-clip-text text-transparent {slide.gradient}"
									>
										{slide.title}
									</span>
									<span class="mt-2 block text-white">{slide.subtitle}</span>
								</h1>
							</div>
							<p
								class="hero-subtitle mx-auto mt-8 max-w-3xl text-xl leading-relaxed font-light text-slate-300 md:text-2xl"
							>
								{slide.description}
							</p>
						</div>
					{/each}

					<div
						class="relative mt-[280px] flex flex-col items-center justify-center gap-6 sm:flex-row md:mt-[320px]"
					>
						<a
							href="/admissions"
							class="hero-cta group relative overflow-hidden rounded-full bg-gradient-to-r from-[#fe0002] to-[#ff3333] px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[#fe0002]/50"
						>
							<span class="relative z-10">Apply Now</span>
							<div
								class="absolute inset-0 bg-[#04095d] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>
						</a>
						<a
							href="/about"
							class="hero-cta group flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
						>
							Learn more
							<svg
								class="h-5 w-5 transition-transform group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</a>
					</div>

					<div class="relative mt-12 flex items-center justify-center gap-3">
						{#each slides as _, index}
							<button
								onclick={() => (currentSlide = index)}
								class="h-3 w-3 rounded-full transition-all duration-300 {currentSlide === index
									? 'w-8 bg-white'
									: 'bg-white/30 hover:bg-white/50'}"
								aria-label="Go to slide {index + 1}"
							></button>
						{/each}
					</div>
				</div>
			</div> -->

		<!-- Scroll indicator -->
		<!-- <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
				<svg class="h-6 w-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div> -->
		<!-- </section> -->
		<Hero />

		<IntroSection />

		<!-- Features Section -->
		<Features />

		<!-- Stats Section -->
		<ImageScrollSection />

		<!-- Testimonials Section -->
		<section
			class="horizontal-section testimonials-section relative min-w-screen flex-shrink-0 overflow-hidden bg-white py-24 sm:py-32"
		>
			<div class="absolute inset-0 opacity-30">
				<div class="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#fe0002]/10 blur-3xl"></div>
				<div
					class="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-[#04095d]/10 blur-3xl"
				></div>
			</div>

			<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="section-heading mb-16 text-center">
					<h2 class="mb-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
						What Our <span
							class="bg-gradient-to-r from-[#fe0002] to-[#04095d] bg-clip-text text-transparent"
							>Community</span
						> Says
					</h2>
					<p class="text-xl text-slate-600">Real stories from real families</p>
				</div>
				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div class="testimonial-card group relative">
						<div
							class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#fe0002] to-[#04095d] opacity-25 blur transition duration-500 group-hover:opacity-75"
						></div>
						<div class="relative h-full rounded-2xl bg-white p-8 shadow-xl">
							<!-- Quote icon -->
							<div class="absolute top-6 right-6 text-sky-200">
								<svg class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
									/>
								</svg>
							</div>
							<p class="relative z-10 mb-6 text-lg leading-relaxed text-slate-700">
								"Shining Vessels Academy has transformed my daughter's love for learning. The
								teachers are dedicated and the environment is truly nurturing."
							</p>
							<div class="relative z-10 flex items-center gap-4">
								<div
									class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#fe0002] to-[#04095d] text-lg font-bold text-white shadow-lg"
								>
									AO
								</div>
								<div>
									<div class="font-bold text-slate-900">Abena Osei</div>
									<div class="flex items-center gap-1 text-sm text-slate-600">
										<svg class="h-4 w-4 fill-current text-amber-400" viewBox="0 0 20 20">
											<path
												d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
											/>
										</svg>
										Parent
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="testimonial-card group relative">
						<div
							class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 opacity-25 blur transition duration-500 group-hover:opacity-75"
						></div>
						<div class="relative h-full rounded-2xl bg-white p-8 shadow-xl">
							<div class="absolute top-6 right-6 text-purple-200">
								<svg class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
									/>
								</svg>
							</div>
							<p class="relative z-10 mb-6 text-lg leading-relaxed text-slate-700">
								"The best decision we made was enrolling our son here. He's thriving academically
								and socially in ways we never imagined."
							</p>
							<div class="relative z-10 flex items-center gap-4">
								<div
									class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-500 text-lg font-bold text-white shadow-lg"
								>
									KM
								</div>
								<div>
									<div class="font-bold text-slate-900">Kwame Mensah</div>
									<div class="flex items-center gap-1 text-sm text-slate-600">
										<svg class="h-4 w-4 fill-current text-amber-400" viewBox="0 0 20 20">
											<path
												d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
											/>
										</svg>
										Parent
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="testimonial-card group relative">
						<div
							class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-400 to-blue-500 opacity-25 blur transition duration-500 group-hover:opacity-75"
						></div>
						<div class="relative h-full rounded-2xl bg-white p-8 shadow-xl">
							<div class="absolute top-6 right-6 text-indigo-200">
								<svg class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
									/>
								</svg>
							</div>
							<p class="relative z-10 mb-6 text-lg leading-relaxed text-slate-700">
								"I love the teachers and the friends I've made. Every day at SVA is an adventure and
								I'm learning so much!"
							</p>
							<div class="relative z-10 flex items-center gap-4">
								<div
									class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 text-lg font-bold text-white shadow-lg"
								>
									EA
								</div>
								<div>
									<div class="font-bold text-slate-900">Esi Agyeman</div>
									<div class="flex items-center gap-1 text-sm text-slate-600">
										<svg class="h-4 w-4 fill-current text-amber-400" viewBox="0 0 20 20">
											<path
												d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
											/>
										</svg>
										Grade 8 Student
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- CTA Section -->
		<section
			class="horizontal-section cta-section relative min-w-screen flex-shrink-0 overflow-hidden bg-gradient-to-br from-[#04095d] via-[#06097a] to-[#04095d] py-24 sm:py-32"
		>
			<!-- Animated background patterns -->
			<div class="absolute inset-0">
				<div
					class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"
				></div>
				<div class="absolute top-0 left-0 h-full w-full">
					<div
						class="absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full bg-white/10 blur-3xl"
					></div>
					<div
						class="absolute right-10 bottom-20 h-96 w-96 animate-pulse rounded-full bg-white/10 blur-3xl"
						style="animation-delay: 1s;"
					></div>
				</div>
			</div>

			<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 class="mb-6 text-4xl font-black tracking-tight text-white md:text-6xl">
						Ready to Join Our <br class="hidden sm:block" />
						<span
							class="bg-gradient-to-r from-[#fe0002] to-[#ff5555] bg-clip-text text-transparent"
						>
							Community?
						</span>
					</h2>
					<p
						class="mx-auto mt-6 max-w-3xl text-xl leading-relaxed font-light text-indigo-100 md:text-2xl"
					>
						Discover how Shining Vessels Academy can help your child reach their full potential.
						Schedule a tour or start your application today.
					</p>
					<div class="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
						<a
							href="/admissions"
							class="group relative overflow-hidden rounded-full bg-white px-10 py-5 text-lg font-bold text-indigo-600 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/50"
						>
							<span class="relative z-10 flex items-center gap-2">
								Start Application
								<svg
									class="h-5 w-5 transition-transform group-hover:translate-x-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 7l5 5m0 0l-5 5m5-5H6"
									/>
								</svg>
							</span>
						</a>
						<a
							href="/contact"
							class="group flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
						>
							Contact Us
							<svg
								class="h-5 w-5 transition-transform group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</a>
					</div>

					<!-- Trust indicators -->
					<div
						class="trust-indicators-wrapper mt-16 overflow-hidden border-t border-white/20 pt-12"
					>
						<div class="flex gap-16 text-white/80">
							<div
								class="trust-indicator group flex w-64 flex-shrink-0 cursor-pointer flex-col items-center"
							>
								<div class="relative mb-3">
									<div
										class="absolute inset-0 rounded-full bg-[#fe0002]/30 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
									></div>
									<svg
										class="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										/>
									</svg>
								</div>
								<span class="text-base font-bold transition-colors group-hover:text-white"
									>Accredited</span
								>
								<span class="mt-1 text-sm text-white/60">Certified Excellence</span>
							</div>
							<div
								class="trust-indicator group flex w-64 flex-shrink-0 cursor-pointer flex-col items-center"
							>
								<div class="relative mb-3">
									<div
										class="absolute inset-0 rounded-full bg-purple-400/30 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
									></div>
									<svg
										class="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
										/>
									</svg>
								</div>
								<span class="text-base font-bold transition-colors group-hover:text-white"
									>Award Winning</span
								>
								<span class="mt-1 text-sm text-white/60">National Recognition</span>
							</div>
							<div
								class="trust-indicator group flex w-64 flex-shrink-0 cursor-pointer flex-col items-center"
							>
								<div class="relative mb-3">
									<div
										class="absolute inset-0 rounded-full bg-pink-400/30 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
									></div>
									<svg
										class="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
								</div>
								<span class="text-base font-bold transition-colors group-hover:text-white"
									>500+ Families</span
								>
								<span class="mt-1 text-sm text-white/60">Trusted Community</span>
							</div>
							<div
								class="trust-indicator group flex w-64 flex-shrink-0 cursor-pointer flex-col items-center"
							>
								<div class="relative mb-3">
									<div
										class="absolute inset-0 rounded-full bg-[#fe0002]/30 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
									></div>
									<svg
										class="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
										/>
									</svg>
								</div>
								<span class="text-base font-bold transition-colors group-hover:text-white"
									>5-Star Rated</span
								>
								<span class="mt-1 text-sm text-white/60">Parent Reviews</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Programs Section -->
		<section
			class="horizontal-section programs-section relative flex min-h-screen min-w-screen flex-shrink-0 items-center overflow-hidden bg-white"
		>
			<!-- Decorative elements -->
			<div
				class="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#fe0002]/10 blur-3xl"
			></div>
			<div
				class="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#04095d]/10 blur-3xl"
			></div>

			<div class="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
				<div class="mb-16 text-center">
					<h2 class="mb-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
						Our <span
							class="bg-gradient-to-r from-[#fe0002] to-[#04095d] bg-clip-text text-transparent"
							>Programs</span
						>
					</h2>
					<p class="mx-auto max-w-3xl text-xl text-slate-600">
						Comprehensive education from kindergarten through grade 12, designed to nurture every
						student's potential.
					</p>
				</div>

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<!-- Elementary Program -->
					<div class="group relative">
						<div
							class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#fe0002] to-[#04095d] opacity-25 blur-lg transition duration-500 group-hover:opacity-75"
						></div>
						<div
							class="relative h-full rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
						>
							<div class="mb-6">
								<div
									class="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fe0002] to-[#ff3333] text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
								>
									<svg
										class="h-10 w-10"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
										/>
									</svg>
								</div>
								<h3 class="mb-2 text-3xl font-black text-slate-900">Elementary</h3>
								<p class="text-sm font-bold tracking-wider text-[#fe0002] uppercase">Grades K-5</p>
							</div>
							<p class="mb-6 leading-relaxed text-slate-600">
								Building strong foundations in literacy, numeracy, and social-emotional learning
								through engaging, hands-on activities.
							</p>
							<ul class="mb-6 space-y-3">
								<li class="flex items-start gap-2 text-slate-700">
									<svg
										class="mt-0.5 h-5 w-5 flex-shrink-0 text-[#fe0002]"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>Interactive learning centers</span>
								</li>
								<li class="flex items-start gap-2 text-slate-700">
									<svg
										class="mt-0.5 h-5 w-5 flex-shrink-0 text-[#fe0002]"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>STEAM curriculum</span>
								</li>
								<li class="flex items-start gap-2 text-slate-700">
									<svg
										class="mt-0.5 h-5 w-5 flex-shrink-0 text-[#fe0002]"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>Character development</span>
								</li>
							</ul>
							<a
								href="/admissions"
								class="inline-flex items-center gap-2 font-bold text-[#fe0002] transition-all duration-300 hover:gap-3"
							>
								Learn More
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 7l5 5m0 0l-5 5m5-5H6"
									/>
								</svg>
							</a>
						</div>
					</div>

					<!-- Middle School Program -->
					<div class="group relative">
						<div
							class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#04095d] to-[#fe0002] opacity-25 blur-lg transition duration-500 group-hover:opacity-75"
						></div>
						<div
							class="relative h-full rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
						>
							<div class="mb-6">
								<div
									class="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#04095d] to-[#fe0002] text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
								>
									<svg
										class="h-10 w-10"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										/>
									</svg>
								</div>
								<h3 class="mb-2 text-3xl font-black text-slate-900">Middle School</h3>
								<p class="text-sm font-bold tracking-wider text-[#04095d] uppercase">Grades 6-8</p>
							</div>
							<p class="mb-6 leading-relaxed text-slate-600">
								Developing critical thinking, leadership skills, and academic excellence during
								these transformative years.
							</p>
							<ul class="mb-6 space-y-3">
								<li class="flex items-start gap-2 text-slate-700">
									<svg
										class="mt-0.5 h-5 w-5 flex-shrink-0 text-[#04095d]"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>Advanced coursework</span>
								</li>
								<li class="flex items-start gap-2 text-slate-700">
									<svg
										class="mt-0.5 h-5 w-5 flex-shrink-0 text-[#04095d]"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>Leadership programs</span>
								</li>
								<li class="flex items-start gap-2 text-slate-700">
									<svg
										class="mt-0.5 h-5 w-5 flex-shrink-0 text-[#04095d]"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>Clubs & activities</span>
								</li>
							</ul>
							<a
								href="/admissions"
								class="inline-flex items-center gap-2 font-bold text-[#04095d] transition-all duration-300 hover:gap-3"
							>
								Learn More
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 7l5 5m0 0l-5 5m5-5H6"
									/>
								</svg>
							</a>
						</div>
					</div>

					<!-- High School Program -->
					<div class="group relative">
						<div
							class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#fe0002] via-[#04095d] to-[#fe0002] opacity-25 blur-lg transition duration-500 group-hover:opacity-75"
						></div>
						<div
							class="relative h-full rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
						>
							<div class="mb-6">
								<div
									class="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#04095d] to-[#04095d] text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
								>
									<svg
										class="h-10 w-10"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="M12 14l9-5-9-5-9 5 9 5z" />
										<path
											d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
										/>
									</svg>
								</div>
								<h3 class="mb-2 text-3xl font-black text-slate-900">High School</h3>
								<p class="text-sm font-bold tracking-wider text-[#04095d] uppercase">Grades 9-12</p>
							</div>
							<p class="mb-6 leading-relaxed text-slate-600">
								College-preparatory curriculum with AP courses, career exploration, and university
								counseling support.
							</p>
							<ul class="mb-6 space-y-3">
								<li class="flex items-start gap-2 text-slate-700">
									<svg
										class="mt-0.5 h-5 w-5 flex-shrink-0 text-[#04095d]"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>AP & honors courses</span>
								</li>
								<li class="flex items-start gap-2 text-slate-700">
									<svg
										class="mt-0.5 h-5 w-5 flex-shrink-0 text-[#04095d]"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>College counseling</span>
								</li>
								<li class="flex items-start gap-2 text-slate-700">
									<svg
										class="mt-0.5 h-5 w-5 flex-shrink-0 text-[#04095d]"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>Career exploration</span>
								</li>
							</ul>
							<a
								href="/admissions"
								class="inline-flex items-center gap-2 font-bold text-[#04095d] transition-all duration-300 hover:gap-3"
							>
								Learn More
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 7l5 5m0 0l-5 5m5-5H6"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<!-- Additional Info Banner -->
				<div class="relative mt-16">
					<div
						class="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fe0002] to-[#04095d] opacity-20 blur-xl"
					></div>
					<div
						class="relative rounded-3xl bg-gradient-to-r from-[#fe0002] via-[#04095d] to-[#fe0002] p-8 text-center shadow-2xl md:p-12"
					>
						<h3 class="mb-4 text-3xl font-black text-white md:text-4xl">
							Extended Learning Opportunities
						</h3>
						<p class="mx-auto mb-6 max-w-3xl text-lg text-white/90">
							Beyond the classroom, we offer after-school programs, summer camps, sports teams, arts
							programs, and community service initiatives.
						</p>
						<div class="flex flex-wrap justify-center gap-4">
							<span
								class="rounded-full border border-white/30 bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
								>Athletics</span
							>
							<span
								class="rounded-full border border-white/30 bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
								>Arts & Music</span
							>
							<span
								class="rounded-full border border-white/30 bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
								>Robotics</span
							>
							<span
								class="rounded-full border border-white/30 bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
								>Debate Club</span
							>
							<span
								class="rounded-full border border-white/30 bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
								>Community Service</span
							>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer Section -->
		<section
			class="horizontal-section footer-section relative flex min-h-screen min-w-screen flex-shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-[#04095d] via-[#06097a] to-[#04095d]"
		>
			<div class="relative mx-auto w-full max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
				<h2 class="mb-6 text-5xl font-black text-white md:text-6xl">
					Thank You for <span
						class="bg-gradient-to-r from-[#fe0002] to-[#ff5555] bg-clip-text text-transparent"
						>Visiting</span
					>
				</h2>
				<p class="mb-8 text-xl text-slate-300">
					Connect with us on social media or reach out directly.
				</p>
				<div class="mb-12 flex justify-center gap-6">
					<a
						href="#"
						class="group flex h-16 w-16 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/20"
					>
						<svg
							class="h-8 w-8 text-slate-400 transition-colors group-hover:text-white"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
							/>
						</svg>
					</a>
					<a
						href="#"
						class="group flex h-16 w-16 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/20"
					>
						<svg
							class="h-8 w-8 text-slate-400 transition-colors group-hover:text-white"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
							/>
						</svg>
					</a>
					<a
						href="#"
						class="group flex h-16 w-16 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/20"
					>
						<svg
							class="h-8 w-8 text-slate-400 transition-colors group-hover:text-white"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
							/>
						</svg>
					</a>
				</div>
				<div class="space-y-2 text-slate-400">
					<p>© {new Date().getFullYear()} Shining Vessels Academy. All rights reserved.</p>
					<p class="text-sm">123 Beacon Ave, Accra | info@svacademy.edu | +233 000 000 000</p>
				</div>
			</div>
		</section>
	</div>
</div>
