<script>
	import { Carousel, Button, Indicator } from 'flowbite-svelte';
	import {
		AngleLeftOutline,
		AngleRightOutline,
		CalendarMonthOutline,
		ArrowRightOutline,
		ChevronDoubleDownOutline
	} from 'flowbite-svelte-icons';

	import { fade, slide as svelteSlide, fly as svelteFly } from 'svelte/transition';
	import { onMount } from 'svelte';
	
	import studentsNurses from '$lib/assets/images/hero/studentsNurses.jpg';
	import studentsNurses2 from '$lib/assets/images/hero/studentsNurses2.jpg';
	import assemblyImage from '$lib/assets/images/hero/assemblyImage.jpg';
	import assemblyImage2 from '$lib/assets/images/hero/assemblyImage2.jpg';
	import schoolTeachers from '$lib/assets/images/hero/schoolTeachers.jpg';
	import studentsSoldiers from '$lib/assets/images/hero/studentsSodiers.jpg';

	// Slide data
	const slides = [
		{
			id: 1,
			title: 'Ready to start new journey at Spring Side Academy?',
			subtitle: 'Building a Stronger Tomorrow',
			description:
				'Our community thrives on collaboration, compassion, and commitment. We foster an environment where everyone contributes to building a better future together.',
			image: studentsNurses,
			cta: 'Join us now',
			cta2: 'Get Intouch',
			color: 'bg-[#ffb3c1]'
			//   stats: {
			//     service: '10K+ Volunteer Hours',   // Increased service hours
			//     events: '50+ Yearly',               // More events annually
			//     parents: '90% Active Participation', // Slightly adjusted parent involvement
			//     alumni: '3,000+'                   // Increased number of alumni
			//   }
		},
		{
			id: 2,
			title: 'Innovative Learning Spaces',
			subtitle: 'State-of-the-Art Facilities',
			description:
				'Modern classrooms, science labs, and creative studios designed to inspire curiosity and foster innovation.',
			image: assemblyImage,
			cta: 'View Facilities',
			cta2: 'Virtual Tour',
			color: 'bg-[#888]'
			// stats: {
			// 	labs: '12',
			// 	classrooms: '45',
			// 	library: '25K+ Books',
			// 	sports: '8 Fields'
			// }
		},
		{
			id: 3,
			title: 'Holistic Development',
			subtitle: 'Beyond Academics',
			description:
				'Comprehensive extracurricular programs including arts, sports, music, robotics, and leadership development.',
			image: assemblyImage2,
			// cta: 'Explore Programs',
			// cta2: 'Meet Our Coaches',
			color: 'bg-[#98aef1]',
			stats: [
				{
					top: '16',
					middle: 'Teams',
					bottom: 'sports'
				},
				{
					top: '12',
					middle: 'Programs',
					bottom: 'arts'
				},
				{
					top: '8',
					middle: 'Ensembles',
					bottom: 'music'
				}
			]
		},
		{
			id: 4,
			title: 'Community & Values',
			subtitle: 'Building Character',
			description:
				'A nurturing environment that promotes respect, integrity, and social responsibility through community engagement.',
			image: studentsNurses2,
			cta: 'Our Values',
			cta2: 'Community Outreach',
			color: 'bg-[#99d3bb]'
			// stats: {
			// 	service: '5K+ Hours',
			// 	events: '40+ Yearly',
			// 	parents: '95% Involved',
			// 	alumni: '2,500+'
			// }
		},
		{
			id: 5,
			title: 'Excellence in Education',
			subtitle: 'Since 1985',
			description:
				'A premier educational institution dedicated to holistic development and academic excellence for students from preschool to high school.',
			image: schoolTeachers,
			// cta: 'Schedule a Tour',
			// cta2: 'Apply Now',
			color: 'bg-[#ccc]',
			stats: [
				{
					top: '1,200+',
					bottom: 'students'
				},
				{
					top: '15:1',
					bottom: 'ratio'
				},
				{
					top: '98%',
					bottom: 'graduation'
				},
				{
					top: '35+',
					bottom: 'clubs'
				}
			]
		},
		{
			id: 6,
			title: 'Excellence in Education',
			subtitle: 'Since 1985',
			description:
				'A premier educational institution dedicated to holistic development and academic excellence for students from preschool to high school.',
			image: studentsSoldiers,
			// cta: 'Schedule a Tour',
			// cta2: 'Apply Now',
			color: 'bg-[#0d698d]',
			// stats: [
			// 	{
			// 		top: '1,200+',
			// 		bottom: 'students'
			// 	},
			// 	{
			// 		top: '15:1',
			// 		bottom: 'ratio'
			// 	},
			// 	{
			// 		top: '98%',
			// 		bottom: 'graduation'
			// 	},
			// 	{
			// 		top: '35+',
			// 		bottom: 'clubs'
			// 	}
			// ]
		}
	];

	let activeSlide = 0;
	let autoSlide = true;
	let interval;

	// Auto slide functionality
	const startAutoSlide = () => {
		if (autoSlide) {
			interval = setInterval(() => {
				activeSlide = (activeSlide + 1) % slides.length;
			}, 9000);
		}
	};

	const stopAutoSlide = () => {
		clearInterval(interval);
	};

	const nextSlide = () => {
		activeSlide = (activeSlide + 1) % slides.length;
		resetAutoSlide();
	};

	const prevSlide = () => {
		activeSlide = (activeSlide - 1 + slides.length) % slides.length;
		resetAutoSlide();
	};

	const goToSlide = (index) => {
		activeSlide = index;
		resetAutoSlide();
	};

	const resetAutoSlide = () => {
		stopAutoSlide();
		startAutoSlide();
	};

	onMount(() => {
		startAutoSlide();
		return () => stopAutoSlide();
	});
</script>

<div>
	<section
		class="relative min-h-screen min-w-screen"
		aria-label="Hero carousel"
		onmouseenter={stopAutoSlide}
		onmouseleave={startAutoSlide}
	>
		<!-- Slides -->
		{#each slides as slide, index (slide.id)}
			<div
				class="absolute inset-0 transition-opacity duration-1000 ease-in-out {index === activeSlide
					? 'z-10 opacity-100'
					: 'z-0 opacity-0'}"
			>
				<!-- Background Image with Overlay -->
				<div class={`absolute inset-0 mix-blend-multiply ${slide.color}`}></div>
				<img src={slide.image} alt={slide.title} class="h-full w-full object-cover" />

				<!-- Content -->
				<div class="absolute inset-0 flex items-center">
					<div class="container mx-auto px-4 md:px-8 lg:px-16">
						<div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
							<!-- Text Content -->
							<div transition:fade={{ duration: 800, delay: 200 }} class="text-white py-5">
								<!-- <div
									class="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm"
								>
									<span class="h-2 w-2 animate-pulse rounded-full bg-[#fff]"></span>
									<span class="text-sm font-medium">{slide.subtitle}</span>
								</div> -->

								<h1
									in:svelteSlide={{ duration: 800, delay: 100 }}
									out:fade={{ duration: 300 }}
									class="mb-6 text-4xl add-shadow leading-tight font-extrabold md:text-5xl lg:text-6xl xl:text-7xl"
									style="view-transition-name: title"
								>
									{slide.title}
								</h1>

								<p
									in:fade={{ duration: 800, delay: 400 }}
									out:fade={{ duration: 300 }}
									class="mb-8 max-w-2xl add-shadow text-xl text-white/90"
								>
									A nurturing environment that promotes respect, integrity, and social
									responsibility through community engagement.
								</p>

								<!-- CTA Buttons -->
								{#if slide.cta && slide.cta2}
									<div
										in:fade={{ duration: 800, delay: 600 }}
										out:fade={{ duration: 300 }}
										class="mb-10 flex flex-wrap gap-4"
									>
										<Button
											size="md"
											class="poppins-bold cursor-pointer bg-[#0f2a92] px-8 py-3 text-lg font-semibold text-[#510c04] text-white transition duration-500 hover:scale-105 hover:bg-white hover:text-[#0f2a92]"
										>
											<CalendarMonthOutline class="poppins-bold mr-2 h-6 w-6 shrink-0" />
											{slide.cta}
										</Button>
										<Button
											size="md"
											color="alternative"
											class="poppins-bold border-2 border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition duration-500 hover:bg-white/20 hover:text-[#fff]"
										>
											<ArrowRightOutline class="poppins-bold mr-2 h-6 w-6 shrink-0" />
											{slide.cta2}
										</Button>
									</div>
								{/if}

								<!-- Stats Grid -->
								{#if slide.stats}
									<div
										in:fade={{ duration: 800, delay: 800 }}
										out:fade={{ duration: 300 }}
										class="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
									>
										{#each slide['stats'] as stat}
											<div
												class="rounded-xl border border-white/20 bg-white/15 p-4 text-center backdrop-blur-sm"
											>
												{#if stat.top}
													<p class="poppins-extrabold text-2xl font-bold md:text-3xl">{stat.top}</p>
												{/if}
												{#if stat.middle}
													<p class="text-md poppins-bold font-bold md:text-lg">{stat.middle}</p>
												{/if}
												{#if stat.bottom}
													<p class="mt-1 text-sm capitalize opacity-90">{stat.bottom}</p>
												{/if}
											</div>
										{/each}
									</div>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}

		<div
			class="backdrop-blurounded-sm absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 transform items-center gap-4 rounded-full bg-black/30 px-4 py-2"
		>
			<button
				onclick={prevSlide}
				aria-label="Previous slide"
				title="Previous slide"
				class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
			>
				<AngleLeftOutline class="h-6 w-6 shrink-0" />
			</button>

			<!-- Indicators -->
			<div class="flex items-center gap-2">
				{#each slides as slide, index (slide.id)}
					<button
						onclick={() => goToSlide(index)}
						class={`h-3 w-3 rounded-full transition-all ${index === activeSlide ? 'w-8 bg-[#fff]' : 'bg-white/50 hover:bg-white'}`}
						aria-label={`Go to slide ${index + 1}`}
					></button>
				{/each}
			</div>

			<button
				onclick={nextSlide}
				aria-label="Next slide"
				title="Next slide"
				class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
			>
				<AngleRightOutline class="h-6 w-6 shrink-0" />
			</button>
		</div>
	</section>
</div>

<!-- Scroll indicator -->
<div class="absolute right-8 bottom-4 z-20 hidden animate-bounce md:block">
	<div class="flex flex-col items-center justify-center text-center text-white opacity-70">
		<p class="mb-2 rotate-90 text-sm">Scroll</p>
		<ChevronDoubleDownOutline class="h-8 w-8 shrink-0" />
	</div>
</div>

<!-- Auto-play toggle -->
<!-- <div class="absolute top-8 right-8 z-20">
	<button
		onclick={() => {
			autoSlide = !autoSlide;
			autoSlide ? startAutoSlide() : stopAutoSlide();
		}}
		class="rounded-full bg-black/30 p-3 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
		title={autoSlide ? 'Pause slideshow' : 'Play slideshow'}
	>
		{#if autoSlide}
			<i class="fas fa-pause h-5 w-5"></i>
		{:else}
			<i class="fas fa-play h-5 w-5"></i>
		{/if}
	</button>
</div> -->

<!-- Slide counter -->
<!-- <div
	class="absolute top-8 left-8 z-20 rounded-full bg-black/30 px-4 py-2 text-white backdrop-blur-sm"
>
	<span class="font-mono text-lg">
		<span class="text-yellow-400">{activeSlide + 1}</span> / {slides.length}
	</span>
</div> -->

<!-- Optional Right Column Content -->
<!-- <div
    in:svelteFly={{ duration: 800, delay: 300, x: 100 }}
    out:fade={{ duration: 300 }}
    class="hidden lg:block"
>
    <div
        class="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg"
    >
        <h3 class="mb-4 text-2xl font-bold text-white">Quick Facts</h3>
        <ul class="space-y-4">
            <li class="flex items-center gap-3 text-white">
                <div
                    class="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500"
                >
                    <i class="fas fa-award text-sm"></i>
                </div>
                <span>Ranked #1 in State for 5 consecutive years</span>
            </li>
            <li class="flex items-center gap-3 text-white">
                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                    <i class="fas fa-graduation-cap text-sm"></i>
                </div>
                <span>100% college acceptance rate</span>
            </li>
            <li class="flex items-center gap-3 text-white">
                <div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                    <i class="fas fa-users text-sm"></i>
                </div>
                <span>Student-teacher ratio of 15:1</span>
            </li>
            <li class="flex items-center gap-3 text-white">
                <div
                    class="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500"
                >
                    <i class="fas fa-trophy text-sm"></i>
                </div>
                <span>50+ National awards in STEM</span>
            </li>
        </ul>
    </div>
</div> -->

<!-- </div> -->

<style>
	.add-shadow {
		text-shadow: 2px 2px 4px #333;
	}
</style>
