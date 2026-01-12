<script>
	import { onMount } from 'svelte';

	let leadershipSection;

	onMount(async () => {
		try {
			const gsapMod = await import('gsap');
			const stMod = await import('gsap/ScrollTrigger');

			const gsap = gsapMod.gsap || gsapMod.default || gsapMod;
			const ScrollTrigger = stMod.ScrollTrigger || stMod.default;

			if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

			gsap.from('.leader-card', {
				y: 40,
				autoAlpha: 0,
				duration: 0.6,
				stagger: 0.15,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: leadershipSection,
					start: 'top 75%',
					toggleActions: 'play none none reverse'
				}
			});
		} catch (e) {
			console.error('GSAP failed to load:', e);
		}
	});

	const leaders = [
		{
			name: 'Dr. Sarah Johnson',
			title: 'Head of School',
			bio: 'With 20+ years in education, Dr. Johnson leads our vision with a focus on holistic student development.'
		},
		{
			name: 'Michael Chen',
			title: 'Director of Academics',
			bio: 'Passionate educator dedicated to innovative teaching methods and student-centered learning.'
		},
		{
			name: 'Emily Rodriguez',
			title: 'Director of Student Life',
			bio: 'Committed to fostering a supportive community where every student thrives emotionally and socially.'
		}
	];
</script>

<section
	bind:this={leadershipSection}
	class="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="text-4xl font-bold text-gray-900 sm:text-5xl">Our Leadership</h2>
			<p class="mt-4 text-lg text-gray-600">
				Experienced educators dedicated to excellence and student success
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each leaders as leader}
				<div
					class="leader-card overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg"
				>
					<div class="h-48 bg-gradient-to-br from-primary-100 to-secondary-100" />
					<div class="px-6 py-8">
						<h3 class="text-xl font-bold text-gray-900">{leader.name}</h3>
						<p class="mt-1 text-sm font-medium text-primary-600">{leader.title}</p>
						<p class="mt-4 text-gray-600">{leader.bio}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
