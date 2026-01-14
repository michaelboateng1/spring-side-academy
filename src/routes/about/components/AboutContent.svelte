<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	let textSection;
	let revealText = `At Spring Side Academy, we believe every child carries the potential to grow, lead, and succeed. Our school is a vibrant learning community where academic excellence meets character development, creativity, and innovation.`;

	// Split text into characters for the animation
	$: characters = revealText.split('');

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Use a selector scoped to THIS component only
		const q = gsap.utils.selector(textSection);

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
			// Change '.char' to q('.char')
			.to(q('.char'), {
				opacity: 1,
				stagger: 0.1,
				ease: 'none'
			})
			.to({}, { duration: 1 })
			.to(q('.opacity-reveal'), {
				opacity: 0,
				scale: 1.2,
				duration: 2
			});

		return () => ScrollTrigger.getAll().forEach((t) => t.kill());
	});
</script>

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
