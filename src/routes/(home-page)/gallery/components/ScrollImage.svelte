<script>
	import { onMount } from 'svelte';

	import image1 from '$lib/assets/images/StudentModel4.jpg';
	import image2 from '$lib/assets/images/studentModel11.jpg';
	import image3 from '$lib/assets/images/studentModel7.jpg';
	import image4 from '$lib/assets/images/studentModel8.jpg';
	import image5 from '$lib/assets/images/studentModel5.jpg';

	// Data array to remove repetitive HTML
	const sections = [
		{
			title: 'Learning in Action',
			text: 'Students actively engaged in collaborative lessons that spark curiosity, creativity, and confidence.',
			img: image1,
			reverse: false
		},
		{
			title: 'Building Bright Futures',
			text: 'Every classroom moment at Spring Side Academy is designed to inspire growth, leadership, and excellence.',
			img: image2,
			reverse: true
		},
		{
			title: 'Moments That Matter.',
			text: 'From academics to extracurricular activities, our students create memories that shape their future.',
			img: image3,
			reverse: false
		},
		{
			title: 'A Community of Learners',
			text: 'Spring Side Academy fosters teamwork, respect, and a strong sense of belonging among students.',
			img: image4,
			reverse: true
		}
	];

	// Svelte Action for Intersection Observer
	function scrollAnimate(node) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						node.classList.add('is-active');
					} else {
						node.classList.remove('is-active');
					}
				});
			},
			{ threshold: 0.5 }
		);
		observer.observe(node);
		return { destroy: () => observer.disconnect() };
	}

	// const handleLied = () => alert('I lied');
</script>

<!-- <header
	id="top"
	class="flex h-[350px] flex-col items-center justify-center bg-[#2e2e2e] text-center text-white"
>
	<h1 class="mb-4 text-6xl font-light">Scroll Down</h1>
	<a href="#section-0" class="animate-bounce text-5xl">
		<i class="fa fa-angle-down" /> ↓
	</a>
</header> -->

<main class="overflow-x-hidden">
	{#each sections as section, i}
		<section
			id="section-{i}"
			use:scrollAnimate
			class="group relative flex min-h-[300px] w-full flex-col md:h-[40vw] md:flex-row lg:h-[33vw]"
		>
			<div class="z-20 w-full bg-slate-500 md:absolute md:left-1/3 md:h-full md:w-1/3">
				<img src={section.img} alt="Main" class="h-full w-full object-cover" />
			</div>

			<div
				class="bg-tomato z-10 flex w-full flex-col justify-center p-8 text-center text-white transition-all duration-500 ease-in-out md:absolute md:h-full md:w-1/3
                {section.reverse
					? 'md:left-1/3 group-[.is-active]:md:left-2/3'
					: 'md:left-1/3 group-[.is-active]:md:left-0'}"
			>
				<h2 class="mb-4 text-2xl font-bold">{section.title}</h2>
				<p class="mb-6 text-sm leading-relaxed opacity-90">{section.text}</p>
			</div>

			<div
				class="hidden overflow-hidden bg-white transition-all duration-500 ease-in-out md:absolute md:grid md:h-full md:w-1/3 md:grid-cols-2
                {section.reverse
					? 'md:left-1/3 group-[.is-active]:md:left-0'
					: 'md:left-1/3 group-[.is-active]:md:left-2/3'}"
			>
				{#each Array(4) as _}
					<img
						src={section.img}
						alt="Tile"
						class="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
					/>
				{/each}
			</div>
		</section>
	{/each}
</main>

<!-- <footer
	class="flex h-[350px] flex-col items-center justify-center bg-[#2e2e2e] text-center text-white"
>
	<a href="#top" class="mb-4 animate-bounce text-5xl">↑</a>
	<h1 class="text-6xl font-light">Scroll Up</h1>
</footer> -->

<style lang="postcss">
	:global(html) {
		scroll-behavior: smooth;
	}

	.bg-tomato {
		background-color: #0f2a92;
	}

	/* Force panels behind the center image when not active to prevent overlapping center image borders */
	section div {
		box-sizing: border-box;
	}
</style>
