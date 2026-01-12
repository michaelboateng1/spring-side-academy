<script>
	import { onMount } from 'svelte';

	let valuesSection;

	// onMount(async () => {
	// 	try {
	// 		const gsapMod = await import('gsap');
	// 		const stMod = await import('gsap/ScrollTrigger');

	// 		const gsap = gsapMod.gsap || gsapMod.default || gsapMod;
	// 		const ScrollTrigger = stMod.ScrollTrigger || stMod.default;

	// 		if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

	// 		gsap.from('.value-card', {
	// 			y: 40,
	// 			autoAlpha: 0,
	// 			duration: 0.7,
	// 			stagger: 0.12,
	// 			ease: 'power2.out',
	// 			scrollTrigger: {
	// 				trigger: valuesSection,
	// 				start: 'top 75%',
	// 				toggleActions: 'play none none reverse'
	// 			}
	// 		});
	// 	} catch (e) {
	// 		console.error('GSAP failed to load:', e);
	// 	}
	// });

	const values = [
		{
			title: 'Excellence',
			description: 'We pursue the highest standards in everything we do, from academics to character.',
			// Only store the "d" attribute logic here
			iconPath: "M6 9a6 6 0 1 1 12 0m-12 0a6.5 6.5 0 0 0-2.5 5c0 1.5 1.333 2.5 2.5 2.5m12-7.5a6.5 6.5 0 0 1 2.5 5c0 1.5-1.333 2.5-2.5 2.5M12 15v4m-3 3h6"
		},
		{
			title: 'Integrity',
			description:
				'We foster honesty, ethical behavior, and accountability in all our interactions.',
			iconPath: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
		},
		{
			title: 'Innovation',
			description:
				'We embrace creative thinking and prepare students for a rapidly changing world.',
			iconPath: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
		},
		{
			title: 'Inclusivity',
			description: 'We celebrate diversity and create a welcoming community for all students.',
			iconPath: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.952 11.952 0 0112 15a11.952 11.952 0 01-8.716-2.747M3.284 14.253A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253"
		},
		{
			title: 'Growth Mindset',
			description: 'We believe every student can grow and achieve through effort and persistence.',
			iconPath: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94"
		},
		{
			title: 'Community',
			description:
				'We build strong partnerships between school, families, and the broader community.',
				iconPath: "M12 4.5v15m7.5-7.5h-15m12.939-4.939l-10.878 10.878m0-10.878l10.878 10.878"
			}
	];
</script>

<section bind:this={valuesSection} class="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="text-4xl font-bold text-gray-900 sm:text-5xl">Our Core Values</h2>
			<p class="mt-4 text-lg text-gray-600">
				These principles guide our decisions and shape our school culture
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each values as value}
				<div
					class="value-card rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg hover:ring-[#0369a1]"
				>
					<div class="mb-4 text-4xl"><svg
						class="h-8 w-8 text-[#0369a1] mb-4" 
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d={value.iconPath} 
						/>
					</svg></div>
					<h3 class="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
					<p class="text-gray-600">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>


