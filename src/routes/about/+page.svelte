<script>
	import bgImage from '$lib/assets/images/zhejiang-university-3776783_1280.jpg';

	import AboutHero from './components/AboutHero.svelte';
	import AboutContent from './components/AboutContent.svelte';
	import SchoolCompound from './components/SchoolCompound.svelte';
	import Mission from './components/Mission.svelte';
	import Values from './components/Values.svelte';
	import WhyChooseUs from './components/WhyChooseUs.svelte';
	import Leadership from './components/Leadership.svelte';
	import CTA from '../components/CTA.svelte';
</script>

<AboutHero
	heading="About Spring Side Academy"
	subheading="Excellence. Integrity. Innovation."
	{bgImage}
	height="h-[85svh]"
/>
<AboutContent />
<SchoolCompound />
<Mission />
<Values />
<WhyChooseUs />
<CTA />
<Leadership />
