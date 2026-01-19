<script>
	import { onMount } from 'svelte';
	import schoolLogo from '$lib/assets/schooLogo.png';

	import { page } from '$app/stores';

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	const nav = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/admissions', label: 'Admissions' },
		{ href: '/news-and-events', label: 'News & Events' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/contact', label: 'Contact' }
	];

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 right-0 left-0 z-40 transition-all duration-300 {scrolled
		? 'bg-white/95 shadow-lg backdrop-blur-xl'
		: 'bg-white/80 backdrop-blur-md'} border-b {scrolled ? 'border-slate-300' : 'border-slate-200'}"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div
			class="flex items-center justify-between {scrolled
				? 'py-3'
				: 'py-4'} transition-all duration-300"
		>
			<a href="/" class="group flex items-center gap-3">
				<div class="relative">
					<div
						class="absolute inset-0 rounded-lg opacity-0 blur transition-opacity group-hover:opacity-50"
					></div>
					<div class="h-[60px] w-30 overflow-hidden rounded-lg">
						<img
							src={schoolLogo}
							alt="Spring Side Academy"
							class="relative h-full w-full transition-transform group-hover:scale-110"
						/>
					</div>
				</div>
				<span
					class="bg-gradient-to-r from-[#0f2a92] to-slate-600 bg-clip-text text-2xl font-bold text-transparent uppercase"
					>Sping Side Academy</span
				>
			</a>
			<nav class="hidden items-center gap-8 md:flex">
				{#each nav as item}
					<a
						href={item.href}
						class="relative text-sm font-semibold transition-colors {$page.url.pathname ===
						item.href
							? 'text-[#0f2a92]'
							: 'text-slate-700 hover:text-[#0f2a92]'} group"
					>
						{item.label}
						<span
							class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#0f2a92] transition-all duration-300 {$page
								.url.pathname === item.href
								? 'w-full'
								: 'group-hover:w-full'}"
						></span>
					</a>
				{/each}
				<a
					href="/admissions"
					class="group relative inline-flex items-center overflow-hidden rounded-full bg-[#0f2a92] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
				>
					<span class="relative z-10">Apply Now</span>
					<div
						class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</a>
			</nav>
			<button
				class="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
				aria-label="Menu"
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				<svg
					class="h-6 w-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					{#if mobileOpen}
						<path d="M18 6L6 18M6 6l12 12" />
					{:else}
						<path d="M3 6h18M3 12h18M3 18h18" />
					{/if}
				</svg>
			</button>
		</div>
	</div>
	<div class="md:hidden" hidden={!mobileOpen}>
		<div class="space-y-1 px-4 pb-4">
			{#each nav as item}
				<a
					href={item.href}
					class="block rounded-md px-3 py-2 text-base font-medium {$page.url.pathname === item.href
						? 'bg-sky-50 text-sky-700'
						: 'text-slate-700 hover:bg-slate-50'}"
					onclick={() => (mobileOpen = false)}>{item.label}</a
				>
			{/each}
			<a
				href="/admissions"
				class="block rounded-md bg-sky-600 px-3 py-2 text-base font-semibold text-white"
				onclick={() => (mobileOpen = false)}>Apply</a
			>
		</div>
	</div>
</header>
