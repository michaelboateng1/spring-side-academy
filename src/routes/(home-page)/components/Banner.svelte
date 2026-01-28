<script>
	import { onMount } from 'svelte';

	let currentSlide = $state(0);
	const slides = [
		{
			title: 'Empowering Young',
			subtitle: 'Minds to Shine',
			description:
				'At Spring Side Academy, we nurture excellence, creativity, and character in every student.',
			gradient: 'bg-white'
		},
		{
			title: 'Building Future',
			subtitle: 'Leaders Today',
			description:
				'Comprehensive K-12 education that prepares students for success in a changing world.',
			gradient: 'bg-white'
		},
		{
			title: 'Where Learning',
			subtitle: 'Comes Alive',
			description:
				'Join our vibrant community where every student is valued, challenged, and inspired.',
			gradient: 'bg-white'
		}
	];

	onMount(() => {
		// Slideshow timer
		const slideInterval = setInterval(() => {
			currentSlide = (currentSlide + 1) % slides.length;
		}, 5000);

		return () => {
			clearInterval(slideInterval);
		};
	});
</script>

<section
	class=" flex min-h-screen min-w-full items- mt-30 2xl:mt-0
		overflow-hidden bg-linear-to-br from-[#04095d] via-[#06097a] to-[#04095d]"
>
	<!-- Grid pattern overlay -->
	<div
		class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"
	></div>

	<div class="hero-content relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
		<div class="text-center">
			{#each slides as slide, index}
				<div
					class="absolute inset-0 transition-all duration-1000 {currentSlide === index
						? 'translate-y-0 opacity-100'
						: 'pointer-events-none translate-y-10 opacity-0'}"
				>
					<div class="hero-title mb-6 py-10 px-5">
						<h2 class="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
							<span class="block bg-gradient-to-r bg-clip-text text-transparent {slide.gradient}">
								{slide.title}
							</span>
							<span class="mt-2 block text-white">{slide.subtitle}</span>
						</h2>
					</div>
					<p
						class="hero-subtitle mx-auto mt- px-5 max-w-3xl text-xl leading-relaxed font-light text-slate-200 md:text-2xl"
					>
						{slide.description}
					</p>
				</div>
			{/each}

			<div
				class="relative mt-[280px] flex flex-col items-center justify-center gap-6 sm:flex-row md:mt-[320px]"
			>
				<a
					href="/contact"
					class="hero-cta group relative overflow-hidden rounded-full bg-[#fff] px-8 py-4 text-lg font-bold text-[#0f2a92] shadow-md transition-all duration-300 hover:scale-102 hover:text-white"
				>
					<span class="relative z-10 capitalize">Contact us</span>
					<div
						class="absolute inset-0 bg-[#04095d] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</a>
				<a
					href="/about"
					class="hero-cta  hidden  md:flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
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
	</div>
</section>

<style>
	section {
		background:
			linear-gradient(hsla(0, 0%, 0%, 0.3), hsla(0, 0%, 0%, 0.3)),
			url('../../../lib/assets/images/banner_bg.JPG');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}
</style>
