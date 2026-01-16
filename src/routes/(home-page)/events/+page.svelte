<script>
	import { onMount } from 'svelte';
	import { SearchOutline, ArrowLeftOutline, ArrowRightOutline } from 'flowbite-svelte-icons';

	import image1 from '$lib/assets/images/StudentsModel2.jpg';
	import image2 from '$lib/assets/images/StudentModel4.jpg';
	import image3 from '$lib/assets/images/student-7468801_1280.jpg';

	let sectionRef;

	const articles = [
		{
			date: '12 Oct',
			category: 'Academic',
			title: 'Annual Science Fair: Exploring the Future of Green Tech',
			description:
				"Students showcased innovative solutions for renewable energy and sustainable living in this year's record-breaking event.",
			image: image1
		},
		{
			date: '08 Oct',
			category: 'Campus Life',
			title: 'Autumn Music Festival Highlights',
			description:
				'Our music department delivered a breathtaking performance featuring classical ensembles and modern jazz bands.',
			image: image2
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		}
	];

	// Pagination State
	let currentPage = 1;
	let itemsPerPage = 3;

	// Reactive Calculations

	$: totalPages = Math.ceil(articles.length / itemsPerPage);

	$: startIndex = (currentPage - 1) * itemsPerPage;

	$: endIndex = startIndex + itemsPerPage;

	$: currentArticles = articles.slice(startIndex, endIndex);

	// Navigation Functions
	function goToPage(page) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
			// Optional: Scroll to top of section when page changes
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}
</script>

<section bind:this={sectionRef} class="bg-white py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row">
			<div class="max-w-2xl">
				<span class="mb-2 block text-sm font-semibold tracking-widest text-[#0f2a92] uppercase"
					>What's Happening</span
				>
				<h2 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
					Our Latest Events
				</h2>
			</div>

			<div class="flex items-end justify-center">
				<div class="border-b-2 border-[#0f2a92] py-2 pl-3">
					<SearchOutline class="h-6 w-6 shrink-0 text-[#0f2a92]" />
				</div>
				<input
					type="search"
					class="border-0 border-b-2 border-[#0f2a92]"
					placeholder="Enter your search term..."
				/>
			</div>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each currentArticles as article}
				<article
					class="news-card group relative flex flex-col overflow-hidden rounded-3xl bg-slate-50 transition-all duration-500 hover:bg-white hover:shadow-md hover:shadow-slate-200"
				>
					<div class="relative h-64 w-full overflow-hidden">
						<img
							src={article.image}
							alt={article.title}
							class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						/>
						<div
							class="absolute top-4 left-4 flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-white/90 font-bold shadow-lg backdrop-blur-md"
						>
							<span class="text-lg leading-none text-slate-900">{article.date.split(' ')[0]}</span>
							<span class="text-[10px] tracking-tighter text-[#0f2a92] uppercase"
								>{article.date.split(' ')[1]}</span
							>
						</div>
						<div
							class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
						></div>
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
							{article.description}
						</p>

						<div class="mt-auto border-t border-slate-200 pt-6">
							<a href="/news/1" class="cursor-pointer">
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
	</div>
</section>

<div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
	<div class="flex items-center justify-center gap-2">
		<button
			disabled={currentPage === 1}
			on:click={() => goToPage(currentPage - 1)}
			class="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
		>
			<ArrowLeftOutline class="h-6 w-6 shrink-0" />
		</button>

		<div class="flex gap-1">
			{#each Array(totalPages) as _, i}
				<button
					on:click={() => goToPage(i + 1)}
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
			on:click={() => goToPage(currentPage + 1)}
			class="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
		>
			<ArrowRightOutline class="h-6 w-6 shrink-0" />
		</button>
	</div>
</div>
