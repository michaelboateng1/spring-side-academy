<script>
	import { onMount } from 'svelte';

	let valuesSection;

	onMount(async () => {
		try {
			const gsapMod = await import('gsap');
			const stMod = await import('gsap/ScrollTrigger');

			const gsap = gsapMod.gsap || gsapMod.default || gsapMod;
			const ScrollTrigger = stMod.ScrollTrigger || stMod.default;

			if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

			gsap.from('.value-card', {
				y: 40,
				autoAlpha: 0,
				duration: 0.7,
				stagger: 0.12,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: valuesSection,
					start: 'top 75%',
					toggleActions: 'play none none reverse'
				}
			});
		} catch (e) {
			console.error('GSAP failed to load:', e);
		}
	});

	const values = [
		{
			title: 'Excellence',
			description:
				'We pursue the highest standards in everything we do, from academics to character.',
			icon: '🏆'
		},
		{
			title: 'Integrity',
			description:
				'We foster honesty, ethical behavior, and accountability in all our interactions.',
			icon: '⚖️'
		},
		{
			title: 'Innovation',
			description:
				'We embrace creative thinking and prepare students for a rapidly changing world.',
			icon: '💡'
		},
		{
			title: 'Inclusivity',
			description: 'We celebrate diversity and create a welcoming community for all students.',
			icon: '🤝'
		},
		{
			title: 'Growth Mindset',
			description: 'We believe every student can grow and achieve through effort and persistence.',
			icon: '🌱'
		},
		{
			title: 'Community',
			description:
				'We build strong partnerships between school, families, and the broader community.',
			icon: '🌍'
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
					class="value-card rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg hover:ring-primary-200"
				>
					<div class="mb-4 text-4xl">{value.icon}</div>
					<h3 class="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
					<p class="text-gray-600">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
