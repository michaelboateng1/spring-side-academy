<script>
	import AboutHero from '../about/components/AboutHero.svelte';
	import Intro from './components/Intro.svelte';
	import Process from './components/Process.svelte';
	import Stats from './components/Stats.svelte';
	import Requirments from './components/Requirments.svelte';
	import FeesInfo from './components/FeesInfo.svelte';
	import CTA from '../components/CTA.svelte';

	import bgImage from '$lib/assets/images/aboutUs/hero/about_bg.jpeg';
</script>

<svelte:head>
	<title>Spring Side Academy | Admission</title>
	<meta
		name="description"
		content="Join us as we build confident learners and future leaders through a rigorous admissions process, innovative curriculum, and a supportive learning environment."
	/>
</svelte:head>

<AboutHero
	heading="Admissions"
	subheading="Excellence. Integrity. Innovation."
	{bgImage}
	height="h-[85svh]"
/>
<Intro />
<Requirments />
<Stats />
<FeesInfo />
<Process />
<CTA />
