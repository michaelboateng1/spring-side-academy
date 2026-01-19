<script>
	import { onMount } from 'svelte';
	import '../../layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';

	

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Sping Side Academy</title>
	<meta
		name="description"
		content="A modern, nurturing K-12 school focused on excellence, creativity, and character."
	/>
</svelte:head>



<Header />

<main class="min-h-[calc(100vh-200px)]" >
	{@render children?.()}
</main>

<Footer />
