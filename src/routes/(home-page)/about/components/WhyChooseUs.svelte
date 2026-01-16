<script>
	import { onMount } from 'svelte';

	let whySection;

	onMount(async () => {
		try {
			const gsapMod = await import('gsap');
			const stMod = await import('gsap/ScrollTrigger');

			const gsap = gsapMod.gsap || gsapMod.default || gsapMod;
			const ScrollTrigger = stMod.ScrollTrigger || stMod.default;

			if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

			gsap.from('.why-item', {
				x: -30,
				autoAlpha: 0,
				duration: 0.6,
				stagger: 0.1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: whySection,
					start: 'top 75%',
					toggleActions: 'play none none reverse'
				}
			});
		} catch (e) {
			console.error('GSAP failed to load:', e);
		}
	});

	const reasons = [
		'Rigorous, well-rounded curriculum balancing academics and character',
		'Experienced, dedicated faculty committed to student growth',
		'Small class sizes for personalized attention',
		'State-of-the-art facilities and resources',
		'Strong community and family partnerships',
		'Leadership development and global perspective'
	];
</script>

<section bind:this={whySection} class="bg-white py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2 lg:gap-20">
			<!-- Left: Image -->
			<div class="flex items-center">
				<div class="relative h-96 w-full overflow-hidden rounded-2xl shadow-xl">
					<img
						src="/images/StudentsModel2.jpg"
						alt="Spring Side Academy students"
						class="h-full w-full object-cover"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-transparent"
					/>
				</div>
			</div>

			<!-- Right: Content -->
			<div class="flex flex-col justify-center space-y-8">
				<div>
					<h2 class="text-4xl font-bold text-gray-900">Why Choose Spring Side Academy?</h2>
					<p class="mt-4 text-lg text-gray-600">
						We're committed to developing the whole child with an education that transcends the
						classroom.
					</p>
				</div>

				<ul class="space-y-4">
					{#each reasons as reason}
						<li class="why-item flex items-start gap-4">
							<div
								class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#bae6fd]"
							>
								<svg class="h-4 w-4 text-[#0369a1]" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<p class="text-lg text-gray-700">{reason}</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
