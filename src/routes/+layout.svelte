<script>
	import '../layout.css';
	import { navigating } from '$app/stores';
	import Loader from './(home-page)/components/Loader.svelte';

	let { children } = $props();

	let show = $state(true); // 👈 show on first load
	let timeout;

	$effect(() => {
		// if ($navigating) {
			timeout = setTimeout(() => {
				show = false;
			}, 5000);
		// } else {
		// 	show = false;
		// }

		return () => clearTimeout(timeout);
	});
</script>

{#if show}
	<Loader />
	{:else}
	<main>
		{@render children?.()}
	</main>
{/if}

