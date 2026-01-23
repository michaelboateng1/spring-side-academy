<script>
	import '../../../../layout.css';
	import favicon from '$lib/assets/favicon.svg';

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

{@render children?.()}
