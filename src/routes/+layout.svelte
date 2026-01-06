<!-- <script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()} -->

<script>
	import { onMount } from 'svelte';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';

	let { children } = $props();
	let mobileOpen = $state(false);
	let scrolled = $state(false);

	const nav = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/admissions', label: 'Admissions' },
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

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Shining Vessels Academy</title>
	<meta
		name="description"
		content="A modern, nurturing K-12 school focused on excellence, creativity, and character."
	/>
</svelte:head>

<!-- <header
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {scrolled
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
						class="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-400 to-indigo-500 opacity-0 blur transition-opacity group-hover:opacity-50"
					></div>
					<img
						src={favicon}
						alt="SVA"
						class="relative h-10 w-10 transition-transform group-hover:scale-110"
					/>
				</div>
				<span
					class="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-lg font-bold text-transparent"
					>Shining Vessels Academy</span
				>
			</a>
			<nav class="hidden items-center gap-8 md:flex">
				{#each nav as item}
					<a
						href={item.href}
						class="relative text-sm font-semibold transition-colors {$page.url.pathname ===
						item.href
							? 'text-sky-600'
							: 'text-slate-700 hover:text-sky-600'} group"
					>
						{item.label}
						<span
							class="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-300 {$page
								.url.pathname === item.href
								? 'w-full'
								: 'group-hover:w-full'}"
						></span>
					</a>
				{/each}
				<a
					href="/admissions"
					class="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
</header> -->

<main class="min-h-[calc(100vh-200px)]">
	{@render children?.()}
</main>

<!-- <footer
	class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
> -->
<!-- Decorative background -->
<!-- <div class="absolute inset-0 opacity-10">
		<div
			class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"
		></div>
	</div>
	<div class="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"></div>
	<div class="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>

	<div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="mb-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
			<div>
				<div class="mb-4 flex items-center gap-3">
					<div class="relative">
						<div
							class="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-400 to-indigo-500 opacity-50 blur"
						></div>
						<img src={favicon} alt="SVA" class="relative h-10 w-10" />
					</div>
					<span class="text-lg font-bold">Shining Vessels Academy</span>
				</div>
				<p class="leading-relaxed text-slate-400">
					Empowering students to shine through excellence, creativity, and character.
				</p>
				<div class="mt-6 flex gap-3">
					<a
						href="#"
						class="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/20"
					>
						<svg
							class="h-5 w-5 text-slate-400 transition-colors group-hover:text-white"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
							/>
						</svg>
					</a>
					<a
						href="#"
						class="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/20"
					>
						<svg
							class="h-5 w-5 text-slate-400 transition-colors group-hover:text-white"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
							/>
						</svg>
					</a>
					<a
						href="#"
						class="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/20"
					>
						<svg
							class="h-5 w-5 text-slate-400 transition-colors group-hover:text-white"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div>
				<h3 class="mb-4 text-sm font-bold tracking-wider text-white uppercase">Explore</h3>
				<ul class="space-y-3">
					<li>
						<a
							class="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
							href="/about"
						>
							<svg
								class="h-4 w-4 transition-transform group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
							About Us
						</a>
					</li>
					<li>
						<a
							class="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
							href="/admissions"
						>
							<svg
								class="h-4 w-4 transition-transform group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
							Admissions
						</a>
					</li>
					<li>
						<a
							class="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
							href="/contact"
						>
							<svg
								class="h-4 w-4 transition-transform group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
							Contact
						</a>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-sm font-bold tracking-wider text-white uppercase">Contact</h3>
				<ul class="space-y-3 text-slate-400">
					<li class="flex items-start gap-2">
						<svg
							class="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						<span>info@svacademy.edu</span>
					</li>
					<li class="flex items-start gap-2">
						<svg
							class="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						<span>+233 000 000 000</span>
					</li>
					<li class="flex items-start gap-2">
						<svg
							class="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<span>123 Beacon Ave, Accra</span>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-sm font-bold tracking-wider text-white uppercase">Newsletter</h3>
				<p class="mb-4 text-sm text-slate-400">Stay updated with our latest news and events.</p>
				<form class="flex flex-col gap-3">
					<input
						type="email"
						placeholder="Your email"
						class="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white transition-all placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 focus:outline-none"
					/>
					<button
						type="button"
						class="rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:from-sky-500 hover:to-indigo-500"
						>Subscribe</button
					>
				</form>
			</div>
		</div>
		<div class="border-t border-white/10 pt-8">
			<div
				class="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row"
			>
				<p>© {new Date().getFullYear()} Shining Vessels Academy. All rights reserved.</p>
				<div class="flex gap-6">
					<a href="#" class="transition-colors hover:text-white">Privacy Policy</a>
					<a href="#" class="transition-colors hover:text-white">Terms of Service</a>
				</div>
			</div>
		</div>
	</div>
</footer> -->
