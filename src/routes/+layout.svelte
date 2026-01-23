<script>
	import {onMount} from "svelte";
	import Loader from './components/Loader.svelte';

	let loading = $state(true);

	onMount(() => {
		const removeLoader = setTimeout(() => {
			loading = false;
		}, 2000);

		return () => clearTimeout(removeLoader);
	})

	let { children } = $props();
</script>

{#if loading}
	<Loader />
{:else}
	<main>
		{@render children?.()}
	</main>
{/if}


