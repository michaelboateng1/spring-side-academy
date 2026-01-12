<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	import schoolImage from '$lib/assets/ss.png';
	import bgImage from '$lib/assets/images/zhejiang-university-3776783_1280.jpg';
	import schoolCompoundImage from '$lib/assets/images/zhejiang-university-3776785_1280.jpg';

	// Note: ScrollSmoother and SplitText are Premium GSAP plugins.
	// If you have them, import and register them here.

	let container;
	let heroSection;
	let textSection;
	let revealText = `At Spring Side Academy, we believe every child carries the potential to grow, lead, and succeed. Our school is a vibrant learning community where academic excellence meets character development, creativity, and innovation.`;

	// Split text into characters for the animation
	$: characters = revealText.split('');

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

		// 2. Text Reveal Timeline
		const textTl = gsap.timeline({
			scrollTrigger: {
				trigger: textSection,
				pin: true,
				start: 'center center',
				end: '+=1500',
				scrub: 1
			}
		});

		textTl
			.to('.char', {
				opacity: 1,
				stagger: 0.1,
				ease: 'none'
			})
			.to({}, { duration: 1 }) // Buffer
			.to('.opacity-reveal', {
				opacity: 0,
				scale: 1.2,
				duration: 2
			});

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

				<h1
					class="hero__title absolute top-1/2 left-1/2 z-[100] m-0 -translate-x-1/2 -translate-y-1/2 scale-40
					p-0 text-center text-[clamp(3.125rem,17.321vw-1.357rem,12.5rem)] leading-[clamp(4.688rem,21.363vw-0.84rem,16.25rem)] font-bold text-white
					opacity-0
					blur-[10px]"
				>
					<span class="bg-gradient-to-r from-[#0f2a92] to-[#04095d] bg-clip-text text-transparent"
						>About</span
					> Spring Side Academy
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

	<section
		bind:this={textSection}
		class="flex min-h-screen items-center justify-center bg-white p-8 text-white"
	>
		<p class="opacity-reveal w-full max-w-4xl text-center text-4xl leading-tight md:text-7xl">
			{#each characters as char}
				<span class="char poppins-medium inline-block text-black opacity-20"
					>{char === ' ' ? '\u00A0' : char}</span
				>
			{/each}
		</p>
	</section>

	<section
		class="hobbiton relative w-full overflow-hidden
		after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_90%)]
		after:content-['']"
	>
		<img
			class="hobbiton-img h-screen w-full object-cover"
			src={schoolCompoundImage}
			alt="School Compund"
		/>
	</section>
</article>
