<script>
	import { onMount } from 'svelte';

	import '../../../layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import NavBar from './components/NavBar.svelte';


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

 <NavBar>
	{@render children?.()}
 </NavBar>

<!-- <Footer /> -->

<style>
	:global(*, body, h1, h2, h3, h4, h5, h6, p, span, a, div, li, ul, ol, button, input, textarea, select){
    font-family: 'Poppins', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: 'wdth' 100;
  }

  :global(strong, b){
	font-family: 'Poppins', sans-serif;
    font-optical-sizing: auto;
	font-weight: 700;
	font-style: normal;
	font-variation-settings: 'wdth' 100;
  }

  :global(i, em){
	font-family: 'Poppins', sans-serif;
    font-optical-sizing: auto;
	font-weight: 400;
	font-style: italic;
	font-variation-settings: 'wdth' 100;
  }
</style>