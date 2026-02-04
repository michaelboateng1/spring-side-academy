<script>
	import AboutHero from '../about/components/AboutHero.svelte';
	import Intro from './components/Intro.svelte';
	import ScrollImage from './components/ScrollImage.svelte';

	import bgImage from '$lib/assets/images/aboutUs/hero/aboutBg.jpeg';
</script>

<AboutHero
	heading="Gallery"
	subheading="Excellence. Integrity. Innovation."
	{bgImage}
	height="h-[85svh]"
/>
<Intro />
<ScrollImage />
