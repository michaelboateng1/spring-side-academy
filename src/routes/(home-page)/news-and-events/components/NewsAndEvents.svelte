<script>
	import { onMount } from 'svelte';

	// import image1 from '$lib/assets/images/StudentsModel2.jpg';
	// import image2 from '$lib/assets/images/StudentModel4.jpg';
	// import image3 from '$lib/assets/images/student-7468801_1280.jpg';

	let sectionRef;
	// const articles = [
	// 	{
	// 		date: '12 Oct',
	// 		category: 'Academic',
	// 		title: 'Annual Science Fair: Exploring the Future of Green Tech',
	// 		description:
	// 			"Students showcased innovative solutions for renewable energy and sustainable living in this year's record-breaking event.",
	// 		image: image1
	// 	},
	// 	{
	// 		date: '08 Oct',
	// 		category: 'Campus Life',
	// 		title: 'Autumn Music Festival Highlights',
	// 		description:
	// 			'Our music department delivered a breathtaking performance featuring classical ensembles and modern jazz bands.',
	// 		image: image2
	// 	},
	// 	{
	// 		date: '05 Oct',
	// 		category: 'Sports',
	// 		title: 'Regional Championship: A Historic Victory',
	// 		description:
	// 			'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
	// 		image: image3
	// 	}
	// ];

	// onMount(async () => {
	// 	try {
	// 		const { gsap } = await import('gsap');
	// 		const { ScrollTrigger } = await import('gsap/ScrollTrigger');
	// 		gsap.registerPlugin(ScrollTrigger);

	// 		gsap.from('.news-card', {
	// 			opacity: 0,
	// 			y: 40,
	// 			scale: 0.95,
	// 			duration: 1,
	// 			stagger: 0.2,
	// 			ease: 'power4.out',
	// 			scrollTrigger: {
	// 				trigger: sectionRef,
	// 				start: 'top 75%'
	// 			}
	// 		});
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// });

	const { articles, type } = $props();
</script>

<section bind:this={sectionRef} class="bg-white py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row">
			<div class="max-w-2xl">
				<span class="mb-2 block text-sm font-semibold tracking-widest text-[#0f2a92] uppercase"
					>What's Happening</span
				>
				<h2 class="text-4xl font-bold tracking-tight text-slate-900 capitalize sm:text-5xl">
					Latest {type}
				</h2>
			</div>
			<a
				href="/{type === 'news' ? 'news' : 'events'}"
				class="group flex items-center gap-2 font-semibold text-slate-900 transition-colors hover:text-[#0f2a92]"
			>
				View all updates
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
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</a>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each articles as article}
				<article
					class="news-card group relative flex flex-col overflow-hidden rounded-3xl bg-slate-50 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200"
				>
					<div class="relative h-64 w-full overflow-hidden">
						<img
							src={article.image}
							alt={article.title}
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						/>
						<div
							class="absolute top-4 left-4 flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-white/90 font-bold shadow-lg backdrop-blur-md"
						>
							<span class="text-lg leading-none text-slate-900">{article.date.split(' ')[0]}</span>
							<span class="text-[10px] tracking-tighter text-[#0f2a92] uppercase"
								>{article.date.split(' ')[1]}</span
							>
						</div>
						<div
							class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
						></div>
					</div>

					<div class="flex flex-1 flex-col p-8">
						<span
							class="mb-3 inline-block text-xs font-bold tracking-widest text-[#0f2a92] uppercase"
						>
							{article.category}
						</span>
						<h3
							class="mb-4 text-xl leading-snug font-bold text-slate-900 transition-colors group-hover:text-[#0f2a92]"
						>
							{article.title}
						</h3>
						<p class="mb-6 line-clamp-3 text-slate-600">
							{article.description}
						</p>

						<div class="mt-auto border-t border-slate-200 pt-6">
							<button
								class="text-sm font-bold text-slate-900 underline decoration-[#0f2a92]/50 decoration-2 underline-offset-4 transition-all hover:decoration-[#0f2a92]"
							>
								Read More
							</button>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
