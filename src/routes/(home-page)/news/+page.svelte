<script>
	import { onMount } from 'svelte';
	import { SearchOutline, ArrowLeftOutline, ArrowRightOutline } from 'flowbite-svelte-icons';
	import { getData } from '$lib/newsQuery';

	let sectionRef = $state();
	let articles = $state([]);
	let isLoading = $state(true);
	let searchTerm = $state("");

	onMount(async () => {
		const { data, error } = await getData();
		if (data) {
			articles = data;
		}
		isLoading = false;
	});

	// Pagination State
	let currentPage = $state(1);
	let itemsPerPage = 6;

	// Reactive Calculations
	let filteredArticles = $derived(articles.filter(article => 
		article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
		article.category.toLowerCase().includes(searchTerm.toLowerCase())
	));

	let totalPages = $derived(Math.ceil(filteredArticles.length / itemsPerPage));

	let currentArticles = $derived(filteredArticles.slice(
		(currentPage - 1) * itemsPerPage, 
		(currentPage - 1) * itemsPerPage + itemsPerPage
	));

	// Navigation Functions
	function goToPage(page) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	function stripHtml(html) {
		if (!html) return "";
		const tmp = document.createElement("DIV");
		tmp.innerHTML = html;
		return tmp.textContent || tmp.innerText || "";
	}
</script>

<svelte:head>
	<title>News & Events - Spring Side Academy</title>
	<meta name="description" content="Stay updated with the latest news and events at Spring Side Academy." />
</svelte:head>

<section bind:this={sectionRef} class="bg-white py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row">
			<div class="max-w-2xl">
				<span class="mb-2 block text-sm font-semibold tracking-widest text-[#0f2a92] uppercase"
					>What's Happening</span
				>
				<h2 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Latest News</h2>
			</div>

			<div class="flex items-end justify-center">
				<div class="border-b-2 border-[#0f2a92] py-2 pl-3">
					<SearchOutline class="h-6 w-6 shrink-0 text-[#0f2a92]" />
				</div>
				<input
					type="search"
					class="border-0 border-b-2 border-[#0f2a92] focus:ring-0"
					placeholder="Enter your search term..."
					bind:value={searchTerm}
				/>
			</div>
		</div>

		{#if isLoading}
			<div class="flex h-64 items-center justify-center">
				<div class="h-12 w-12 animate-spin rounded-full border-4 border-[#0f2a92] border-t-transparent"></div>
			</div>
		{:else if currentArticles.length === 0}
			<div class="text-center py-12 text-slate-500">
				No news articles found.
			</div>
		{:else}
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each currentArticles as article}
					<article
						class="news-card group relative flex flex-col overflow-hidden rounded-3xl bg-slate-50 transition-all duration-500 hover:bg-white hover:shadow-md hover:shadow-slate-200"
					>
						<div class="relative h-64 w-full overflow-hidden bg-slate-200">
							{#if article.thumbnail_url}
								<img
									src={article.thumbnail_url}
									alt={article.title}
									class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
							{:else}
								<div class="flex h-full w-full items-center justify-center text-slate-400">
									No Image
								</div>
							{/if}
							
							{#if article.date_posted}
								<div
									class="absolute top-4 left-4 flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-white/90 font-bold shadow-lg backdrop-blur-md"
								>
									<span class="text-lg leading-none text-slate-900">{article.date_posted.split(' ')[0]}</span>
									<span class="text-[10px] tracking-tighter text-[#0f2a92] uppercase"
										>{article.date_posted.split(' ')[1] || ''}</span
									>
								</div>
							{/if}
							<!-- <div
								class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
							></div> -->
						</div>

						<div class="flex flex-1 flex-col p-8">
							<span
								class="mb-3 inline-block text-xs font-bold tracking-widest text-[#0f2a92] uppercase"
							>
								{article.category}
							</span>
							<h3
								class="mb-4 text-xl leading-snug font-bold text-slate-900 transition-colors group-hover:text-[#0f2a92]"
							>
								{article.title}
							</h3>
							<p class="mb-6 line-clamp-3 text-slate-600">
								{stripHtml(article.body)}
							</p>

							<div class="mt-auto border-t border-slate-200 pt-6">
								<a href={`/news/${article.slug || '#'}`} class="cursor-pointer">
									<button
										class="text-sm font-bold text-slate-900 underline decoration-[#0f2a92]/50 decoration-2 underline-offset-4 transition-all hover:decoration-[#0f2a92]"
									>
										Read More
									</button>
								</a>
							</div>
						</div>
					</article>
				{/each}
			</div>
		{/if}
	</div>
</section>

{#if !isLoading && totalPages > 1}
	<div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
		<div class="flex items-center justify-center gap-2">
			<button
				disabled={currentPage === 1}
				onclick={() => goToPage(currentPage - 1)}
				class="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
			>
				<ArrowLeftOutline class="h-6 w-6 shrink-0" />
			</button>

			<div class="flex gap-1">
				{#each Array(totalPages) as _, i}
					<button
						onclick={() => goToPage(i + 1)}
						class="rounded-lg border px-4 py-2 transition-colors"
						class:bg-[#0f2a92]={currentPage === i + 1}
						class:text-white={currentPage === i + 1}
						class:border-[#0f2a92]={currentPage === i + 1}
						class:border-slate-300={currentPage !== i + 1}
						class:hover:bg-slate-100={currentPage !== i + 1}
					>
						{i + 1}
					</button>
				{/each}
			</div>

			<button
				disabled={currentPage === totalPages}
				onclick={() => goToPage(currentPage + 1)}
				class="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
			>
				<ArrowRightOutline class="h-6 w-6 shrink-0" />
			</button>
		</div>
	</div>
{/if}
