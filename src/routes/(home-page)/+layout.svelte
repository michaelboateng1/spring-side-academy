<script>
	import { onMount } from 'svelte';
	import '../../layout.css';
	import favicon from '$lib/assets/favicon.svg';

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
	<link rel="icon" href={favicon} />
	<title>Sping Side Academy</title>
	<meta
		name="description"
		content="A modern, nurturing K-12 school focused on excellence, creativity, and character."
	/>
	<meta property="og:title" content="Spring Side Academy" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://spring-side-academy.netlify.app/" />
	<meta property="og:image" content="https://scontent.facc5-2.fna.fbcdn.net/v/t39.30808-6/475119007_644681824739817_3993957919059475782_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGsNg7g9Lnkf8ko2lnUxrcANNv7yiwLpn402_vKLAumfsGFGYuUpTykdEt2F4AwKwEcjqfq8fbC1gu-kmEbnD-K&_nc_ohc=gxkxBOy1oCsQ7kNvwEk3GFo&_nc_oc=AdlDyi_Lv3-XNP2KRYqWBd1uA2fScp_cHGyPIEBCVkD3_9IsywiOeAwvJJnLc7LfyxQ&_nc_zt=23&_nc_ht=scontent.facc5-2.fna&_nc_gid=ggzcGzj1HB4vLoz_hGUYGw&oh=00_Afvi3pHkGgcBVI2pAWeCnYF_yLxjqDO5Mbo9Xe2hUa3sww&oe=6988D8EB" />
	<meta property="og:image:secure_url" content="https://scontent.facc5-2.fna.fbcdn.net/v/t39.30808-6/475119007_644681824739817_3993957919059475782_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGsNg7g9Lnkf8ko2lnUxrcANNv7yiwLpn402_vKLAumfsGFGYuUpTykdEt2F4AwKwEcjqfq8fbC1gu-kmEbnD-K&_nc_ohc=gxkxBOy1oCsQ7kNvwEk3GFo&_nc_oc=AdlDyi_Lv3-XNP2KRYqWBd1uA2fScp_cHGyPIEBCVkD3_9IsywiOeAwvJJnLc7LfyxQ&_nc_zt=23&_nc_ht=scontent.facc5-2.fna&_nc_gid=ggzcGzj1HB4vLoz_hGUYGw&oh=00_Afvi3pHkGgcBVI2pAWeCnYF_yLxjqDO5Mbo9Xe2hUa3sww&oe=6988D8EB" />
	<meta property="og:image:width" content="400" />
<meta property="og:image:height" content="300" />
<meta property="og:image:alt" content="Spring Side Academy" />
	<meta property="og:description" 
  content="Spring Side Academy is a school within the Kumasi catchment area, specifically at Atasomanso. Our thriving school community includes Nursery and Primary classes." />
  <meta property="og:locale" content="en_US" />
</svelte:head>



<Header />

<main class="min-h-[calc(100vh-200px)]" >
	{@render children?.()}
</main>

<Footer />
