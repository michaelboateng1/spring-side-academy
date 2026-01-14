<script>
	import AboutHero from '../about/components/AboutHero.svelte';
	import bgImage from '$lib/assets/images/zhejiang-university-3776783_1280.jpg';
	import Something from './components/something.svelte';
</script>

<AboutHero
	heading="News & Event"
	subheading="Excellence. Integrity. Innovation."
	{bgImage}
	height="h-[85svh]"
/>
<Something />
