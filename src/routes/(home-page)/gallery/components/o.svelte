<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	// Sample data - in SvelteKit, this might come from a +page.server.js load function
	export let items = [
		{
			id: 1,
			date: 'Jan 24, 2024',
			title: 'The Future of Web Design',
			category: 'Design',
			image:
				'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
			excerpt: 'Exploring how AI and spatial computing are reshaping the digital landscape.'
		},
		{
			id: 2,
			date: 'Feb 12, 2024',
			title: 'Svelte 5: The Rune Revolution',
			category: 'Development',
			image:
				'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
			excerpt: 'Understanding the shift from reactive statements to fine-grained signals.'
		},
		{
			id: 3,
			date: 'Mar 05, 2024',
			title: 'Creative Coding Workshop',
			category: 'Events',
			image:
				'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
			excerpt: 'Join us for a weekend of shaders, canvas API, and generative art.'
		}
	];

	let gsap;
	onMount(async () => {
		// Optional: If you want to use GSAP for the entrance staggered reveal
		const module = await import('gsap');
		gsap = module.gsap;
		gsap.from('.card-anim', {
			y: 50,
			opacity: 0,
			duration: 0.8,
			stagger: 0.2,
			ease: 'power3.out'
		});
	});
</script>

<div class="mx-auto max-w-7xl px-4 py-12">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each items as item}
			<div
				class="card-anim group relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-900 shadow-xl"
			>
				<img
					src={item.image}
					alt={item.title}
					class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-40"
				/>

				<div
					class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
				></div>

				<div class="absolute inset-0 flex flex-col justify-end p-8 text-white">
					<div
						class="mb-2 flex items-center gap-3 text-xs font-bold tracking-widest text-primary-400 uppercase transition-all duration-500 group-hover:-translate-y-2"
					>
						<span>{item.category}</span>
						<span class="h-1 w-1 rounded-full bg-white/30"></span>
						<span class="text-white/70">{item.date}</span>
					</div>

					<h3
						class="text-2xl leading-tight font-bold transition-all duration-500 group-hover:-translate-y-2"
					>
						{item.title}
					</h3>

					<div
						class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:mt-4 group-hover:max-h-32 group-hover:opacity-100"
					>
						<p class="text-sm leading-relaxed text-slate-300">
							{item.excerpt}
						</p>
						<button
							class="mt-6 flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-primary-400"
						>
							Read More
							<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	/* Custom ease for a more "organic" feel similar to Paul Noble's work */
	.group:hover img {
		filter: grayscale(20%);
	}

	/* Target specific color based on your primary brand color */
	:global(.text-primary-400) {
		color: #60a5fa; /* Blue-400 */
	}
</style>
