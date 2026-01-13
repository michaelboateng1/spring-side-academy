<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	import schoolImage from '$lib/assets/ss.png';
	
	import schoolCompoundImage from '$lib/assets/images/zhejiang-university-3776785_1280.jpg';

	let {heading, subheading, bgImage, height} = $props();

	let container;
	let heroSection;
	

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// 1. Hero Zoom Timeline
		const heroTl = gsap.timeline({
			scrollTrigger: {
				trigger: heroSection,
				start: 'top top',
				end: '+=150%',
				pin: true,
				scrub: 1
			}
		});

		heroTl
			.to('.hero__cover-img', {
				scale: 2,
				z: 400,
				transformOrigin: 'center center',
				y: 290,
				x: -100,
				ease: 'power1.inOut'
			})
			.to(
				'.hero__cover',
				{
					'--overlay-opacity': 0,
					ease: 'power1.inOut'
				},
				'<'
			)
			.to(
				'.hero__bg',
				{
					scale: 1.1,
					filter: 'blur(0px) brightness(1)',
					ease: 'power1.inOut'
				},
				'<'
			)
			.to(
				'.hero__title',
				{
					scale: 0.8,
					opacity: 1,
					filter: 'blur(0px)',
					ease: 'power1.inOut'
				},
				'<'
			);

		return () => {
			// Cleanup triggers on component unmount
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	});
</script>

<article class="overflow-x-hidden bg-[#1f1f1f] font-sans text-white" bind:this={container}>
	<div class="hero-container relative" bind:this={heroSection}>
		<section class="relative h-screen w-full overflow-hidden">
			<div class="hero__content relative h-screen w-full overflow-hidden">
				<div
					class="hero__bg h-screen w-full bg-cover bg-center bg-no-repeat blur-sm brightness-150 transition-all"
					style="background-image: linear-gradient(hsla(0, 0%, 20%, .2), hsla(0, 0%, 20%, .5)), url('{bgImage}');"
				></div>

				<!-- <p class="bg-gradient-to-r from-[#0f2a92] to-[#04095d] bg-clip-text text-transparent">subheading</p> -->
				<h1
					class="hero__title absolute top-1/2 left-1/2 z-[100] m-0 -translate-x-1/2 -translate-y-1/2 scale-40
					p-0 text-center text-[clamp(3.125rem,17.321vw-1.357rem,12.5rem)] leading-[clamp(4.688rem,21.363vw-0.84rem,16.25rem)] font-bold text-white
					opacity-0
					blur-[10px]"
				>
					 {heading}
				</h1>
			</div>

			<div
				class="hero__cover absolute inset-0 z-[2] overflow-hidden perspective-[500px]
				after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,rgba(0,0,0,0)_20%,rgba(0,0,0,1)_90%)]
				after:opacity-[var(--overlay-opacity,1)]
				after:content-['']"
			>
				<img
					class="hero__cover-img pointer-events-none h-full w-full object-cover"
					src={schoolImage}
					alt="School logo"
				/>
			</div>
		</section>
	</div>

</article>
