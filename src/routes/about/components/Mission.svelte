<script>
	import { onMount } from 'svelte';

	let missionSection;

	onMount(async () => {
		try {
			const gsapMod = await import('gsap');
			const stMod = await import('gsap/ScrollTrigger');

			const gsap = gsapMod.gsap || gsapMod.default || gsapMod;
			const ScrollTrigger = stMod.ScrollTrigger || stMod.default;

			if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

			gsap.from('.mission-item', {
				y: 30,
				autoAlpha: 0,
				duration: 0.6,
				stagger: 0.15,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: missionSection,
					start: 'top 80%',
					toggleActions: 'play none none reverse'
				}
			});
		} catch (e) {
			console.error('GSAP failed to load:', e);
		}
	});
</script>

<section bind:this={missionSection} class="bg-white py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-16 lg:grid-cols-3">
			<!-- Mission -->
			<div class="mission-item space-y-4">
				<div class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
					<svg
						class="h-6 w-6 text-primary-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-bold text-gray-900">Our Mission</h3>
				<p class="text-gray-600">
					To nurture curious, capable, and compassionate young minds in a supportive, innovative
					learning environment that prepares them for success in an ever-changing world.
				</p>
			</div>

			<!-- Vision -->
			<div class="mission-item space-y-4">
				<div class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100">
					<svg
						class="h-6 w-6 text-secondary-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-bold text-gray-900">Our Vision</h3>
				<p class="text-gray-600">
					Spring Side Academy aspires to be a leading educational institution known for cultivating
					leaders, innovators, and responsible global citizens.
				</p>
			</div>

			<!-- Approach -->
			<div class="mission-item space-y-4">
				<div class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
					<svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-bold text-gray-900">Our Approach</h3>
				<p class="text-gray-600">
					We combine rigorous academics with character education, creative expression, and hands-on
					learning to develop well-rounded students.
				</p>
			</div>
		</div>
	</div>
</section>
