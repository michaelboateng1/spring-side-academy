<script>
	import bgImage from '$lib/assets/images/aboutUs/hero/aboutBg.jpeg';

	import AboutHero from './components/AboutHero.svelte';
	import AboutContent from './components/AboutContent.svelte';
	import AboutContent2 from './components/AboutContent2.svelte';
	import SchoolCompound from './components/SchoolCompound.svelte';
	import Mission from './components/Mission.svelte';
	import Values from './components/Values.svelte';
	import WhyChooseUs from './components/WhyChooseUs.svelte';
	import Leadership from './components/Leadership.svelte';
	import CTA from '../components/CTA.svelte';
</script>

<AboutHero
	heading="About Us"
	subheading="Excellence. Integrity. Innovation."
	{bgImage}
	height="h-[85svh]"
/>
<AboutContent />
<AboutContent2 />
<SchoolCompound />
<Mission />
<Values />
<WhyChooseUs />
<CTA />
<Leadership />
