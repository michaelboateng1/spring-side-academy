<script>
	import bgImage from '$lib/assets/images/aboutUs/hero/about-bg.jpeg';

	import AboutHero from '../about/components/AboutHero.svelte';
	import ContactInfo from './components/ContactInfo.svelte';
	import ContactForm from './components/ContactForm.svelte';
</script>

<AboutHero
	heading="Contact Us"
	subheading="Excellence. Integrity. Innovation."
	{bgImage}
	height="h-[85svh]"
/>
<ContactInfo />
<ContactForm />
