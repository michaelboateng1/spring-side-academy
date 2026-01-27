<script>
	import { page } from '$app/stores';
	import { getArticleBySlug } from '$lib/newsQuery';
	import { ArrowLeftOutline } from 'flowbite-svelte-icons';
	
	let article = $state(null);
	let loading = $state(true);
	let error = $state(null);
    let slug = $derived($page.params.slug);

	$effect(() => {
        if (slug) {
            loadArticle(slug);
        }
    });

	async function loadArticle(currentSlug) {
		loading = true;
		error = null;
		try {
			const result = await getArticleBySlug(currentSlug);
			if (result.error) {
				error = result.error;
			} else {
				article = result.data;
			}
		} catch (e) {
			error = e;
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>{article?.title || 'News'} - Spring Side Academy</title>
</svelte:head>

<div class="bg-gray-50 min-h-screen py-24 lg:py-32">
    <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <a 
            href="/news" 
            class="inline-flex items-center gap-2 text-sm font-semibold text-[#0f2a92] hover:text-[#0f2a92]/80 transition-colors mb-8 group"
        >
            <ArrowLeftOutline class="w-4 h-4 transition-transform group-hover:-translate-x-1" /> 
            Back to News
        </a>

        {#if loading}
            <div class="flex h-64 items-center justify-center bg-white rounded-3xl shadow-sm">
                <div class="h-12 w-12 animate-spin rounded-full border-4 border-[#0f2a92] border-t-transparent"></div>
            </div>
        {:else if error}
            <div class="flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-sm text-center px-6">
                <div class="text-red-500 mb-4 text-lg font-semibold">Unable to load article</div>
                <p class="text-slate-500 mb-6">We encountered an error while fetching the news article.</p>
                <button onclick={() => loadArticle(slug)} class="px-6 py-2 bg-[#0f2a92] text-white rounded-lg hover:bg-[#0f2a92]/90 transition-colors cursor-pointer">
                    Try Again
                </button>
            </div>
        {:else if article}
            <article class="bg-white rounded-3xl shadow-sm overflow-hidden">
                {#if article.thumbnail_url}
                    <div class="relative w-full aspect-video md:aspect-[21/9] overflow-hidden">
                        <img
                            src={article.thumbnail_url}
                            alt={article.title}
                            class="h-full w-full object-cover"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                            <span class="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest bg-[#0f2a92] rounded-full uppercase">
                                {article.category}
                            </span>
                             <h1 class="text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
                                {article.title}
                            </h1>
                        </div>
                    </div>
                {:else}
                    <div class="p-8 md:p-12 border-b border-gray-100">
                        <span class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white bg-[#0f2a92] rounded-full uppercase">
                            {article.category}
                        </span>
                        <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                            {article.title}
                        </h1>
                    </div>
                {/if}

                <div class="p-8 md:p-12">
                     <div class="flex items-center gap-4 text-sm text-slate-500 mb-8 border-b border-gray-100 pb-8">
                        <span class="font-medium text-slate-900">Published on {article.date_posted}</span>
                        <span>•</span>
                        <span>News Update</span>
                    </div>

                    <div class="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-[#0f2a92] hover:prose-a:text-[#0f2a92]/80 prose-img:rounded-2xl">
                        {@html article.body}
                    </div>
                </div>
            </article>
        {:else}
             <div class="flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-sm text-center px-6">
                <h2 class="text-2xl font-bold text-slate-900 mb-2">Article Not Found</h2>
                <p class="text-slate-500 mb-6">The article you are looking for does not exist or has been removed.</p>
                <a href="/news" class="px-6 py-2 bg-[#0f2a92] text-white rounded-lg hover:bg-[#0f2a92]/90 transition-colors">
                    Browse All News
                </a>
            </div>
        {/if}
    </div>
</div>
