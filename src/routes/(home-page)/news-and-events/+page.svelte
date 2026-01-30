<script>
	import {onMount} from "svelte";
	import {getThreePosts} from "$lib/eventsQuery";
	import {getThreePosts as getNewsData} from "$lib/newsQuery";

	import AboutHero from '../about/components/AboutHero.svelte';
	import bgImage from '$lib/assets/images/aboutUs/hero/newsAndEventsHero.jpg';
	import Featured from './components/Featured.svelte';
	import NewsAndEvents from './components/NewsAndEvents.svelte';
	import Loader from '../../components/Loader.svelte';


	let eventsData = $state([]);
	let newsData = $state([]);
	let loadingEvents = $state(true);
	let loadingNews = $state(true);

	onMount(async () => {
		let {data, error} = await getThreePosts();
		let {data: news, error: newsError} = await getNewsData();

		if(data && data.length > 0){
			data = data.map(event => ({
				date: event.event_date,
				title: event.event_title,
				location: event.location,
				description: event.description,
				image: event.thumbnail_url
			}));
			eventsData = data;
		}
		loadingEvents = false;

		console.log("from home page events", eventsData);

		if(news && news.length > 0){
			news = news.map(article => ({
				date: article.date_posted,
				category: article.category,
				title: article.title,
				description: article.body,
				image: article.thumbnail_url
			}));
			newsData = news;
		}
		loadingNews = false;
		
	});

</script>

<!-- {#if loadingEvents || loadingNews}
	<Loader />
{/if} -->

<AboutHero
	heading="News & Event"
	subheading="Excellence. Integrity. Innovation."
	{bgImage}
	height="h-[85svh]"
/>

<Featured />
<!-- {#if !loadingEvents} -->
	<NewsAndEvents articles={eventsData} type={'events'} />
<!-- {/if} -->
<!-- {#if !loadingNews} -->
	<NewsAndEvents articles={newsData} type={'news'} />
<!-- {/if} -->
