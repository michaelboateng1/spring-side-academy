<script>
	import { onMount } from 'svelte';
	import { getData } from '$lib/galleryQuery';

	let sections = $state([]);
	let isLoading = $state(true);

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

	onMount(async () => {
		try {
			const { data, error } = await getData();
			if (error) {
				console.error('Failed to load gallery:', error);
				isLoading = false;
				return;
			}

			if (data && data.length > 0) {
				// Map gallery items to sections format
				sections = data.map((item, index) => ({
					title: item.title,
					text: item.description,
					img: item.image_url,
					reverse: index % 2 === 1
				}));
			}
		} catch (err) {
			console.error('Error loading gallery:', err);
		} finally {
			isLoading = false;
		}
	});
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
	{#if isLoading}
		<div class="flex h-screen items-center justify-center bg-gray-100">
			<div class="text-center">
				<div class="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-[#0f2a92]"></div>
				<p class="text-gray-600">Loading gallery...</p>
			</div>
		</div>
	{:else if sections.length === 0}
		<div class="flex h-screen items-center justify-center bg-gray-100">
			<div class="text-center">
				<p class="text-gray-600">No gallery items available</p>
			</div>
		</div>
	{:else}
		{#each sections as section, i}
			<section
				id="section-{i}"
				use:scrollAnimate
				class="group relative flex min-h-[300px] w-full flex-col md:h-[40vw] md:flex-row lg:h-[33vw]"
			>
				<div class="z-20 w-full bg-slate-500 md:absolute md:left-1/3 md:h-full md:w-1/3">
					<img src={section.img} alt={section.title} class="h-full w-full object-cover" width="400" height="300" />
				</div>

				<div
					class="bg-tomato z-10 flex w-full flex-col justify-center p-8 text-center text-white transition-all duration-500 ease-in-out md:absolute md:h-full md:w-1/3
                    {section.reverse
						? 'md:left-1/3 group-[.is-active]:md:left-2/3'
						: 'md:left-1/3 group-[.is-active]:md:left-0'}"
				>
					<h2 class="mb-4 text-2xl font-bold">{section.title}</h2>
					<p class="mb-6 text-sm leading-relaxed opacity-90">{@html section.text}</p>
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
							alt={section.title}
							class="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
							width="200"
							height="200"
						/>
					{/each}
				</div>
			</section>
		{/each}
	{/if}
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
