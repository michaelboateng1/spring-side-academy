<script>
	import { onMount } from 'svelte';
	import '../../layout.css';
	import icon from '$lib/assets/images/schoolLogo.jpg';

	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';

	var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
		(function(){
		var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
		s1.async=true;
		s1.src='https://embed.tawk.to/6982f65d5a86941c39bbb2df/1jgjp4nev';
		s1.charset='UTF-8';
		s1.setAttribute('crossorigin','*');
		s0.parentNode.insertBefore(s1,s0);
		})();


	let { children } = $props();
</script>


<svelte:head>
	<link rel="icon" href={icon} />
	<title>Spring Side Academy</title>
</svelte:head>



<Header />

<main class="min-h-[calc(100vh-200px)]" >
	{@render children?.()}
</main>

<Footer />
