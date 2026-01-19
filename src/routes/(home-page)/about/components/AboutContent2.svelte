<script>
	import { onMount, tick } from 'svelte'; // Added tick
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	import image from "$lib/assets/images/heroImage8.jpg";

	let textSection;
	let revealText = `At Spring Side Academy, we believe every child carries the potential to grow, lead, and succeed. Our school is a vibrant learning community where academic excellence meets character development, creativity, and innovation.`;

	$: characters = revealText.split('');

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const q = gsap.utils.selector(textSection);

		const textTl = gsap.timeline({
			scrollTrigger: {
				trigger: textSection,
				pin: true,
				start: 'center center',
				end: '+=2500',
				scrub: 0.5
			}
		});

		textTl
			.to(q('.char'), {
				// Scoped selector
				opacity: 1,
				color: '#0f2a92',
				y: 0,
				scale: 1,
				filter: 'blur(0px)',
				stagger: 0.1,
				ease: 'bounce.inOut'
			})
			.to(
				q('.char'),
				{
					// Scoped selector
					textShadow: '0 0 20px rgba(15, 42, 146, 0.3)',
					duration: 0.5
				},
				'-=1'
			)
			.to(q('.opacity-reveal'), {
				// Scoped selector
				// opacity: 0,
				// scale: -2,
				// filter: 'blur(20px)',
				duration: 3,
				ease: 'power4.in'
			});

		return () => ScrollTrigger.getAll().forEach((t) => t.kill());
	});
</script>

<section
	bind:this={textSection}
	class="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 p-8"
>
	<div
		class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] select-none"
	>
		<span class="text-[20vw] leading-none font-black">SPRING SIDE</span>
	</div>

	<div class="flex items-start justify-around gap-10 p-8">
		<div class="rounded-xl overflow-hidden">
			<img src={image} class="w-full h-full object-cover" alt="">
		</div>
		<div class="opacity-reveal w-full max-w-6xl text-center">

		<div>
			<h2 class="capitalize mb-6 text-5xl font-black tracking-tight text-[#0f2a92] md:text-6xl text-center">Our History</h2>
			<p class="text-3xl 2xl:text-4xl leading-[1.1] font-bold tracking-tighter">
				{#each characters as char}
					<span
						class="char inline-block translate-y-12 scale-150 opacity-0 "
						style="display: {char === ' ' ? 'inline' : 'inline-block'}"
					>
						{char === ' ' ? '\u00A0' : char}
					</span>
				{/each}
			</p>
		</div>
	</div>
	</div>

	<div
		class="absolute top-12 left-12 h-24 w-24 rounded-tl-3xl border-t-2 border-l-2 border-[#0f2a92]/20"
	></div>
	<div
		class="absolute right-12 bottom-12 h-24 w-24 rounded-br-3xl border-r-2 border-b-2 border-[#0f2a92]/20"
	></div>
</section>

<style>
	.char {
		will-change: transform, opacity, filter;
		font-family: 'Poppins', sans-serif;
	}
	section {
		background-image: radial-gradient(#0f2a92 0.5px, transparent 0.5px);
		background-size: 40px 40px;
		background-position: center;
	}
</style>
