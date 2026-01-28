<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	import image from "$lib/assets/images/heroImage5.jpg";

	let textSection;
	let revealText = `At Spring Side Academy, we believe every child carries the potential to grow, lead, and succeed. Our school is a vibrant learning community where academic excellence meets character development, creativity, and innovation. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit non aperiam doloribus rerum vel error cupiditate inventore molestias nam corrupti ea debitis deleniti corporis qui eveniet temporibus, nihil repudiandae fugiat laborum ipsum sequi similique quis sint soluta.`;

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
	class="flex flex-col items-center sm:flex-row min-h-screen gap-10 sm:justify-around bg-white p-8 text-white"
>
<div>
	<h2 class="capitalize mb-6 text-5xl font-black tracking-tight text-[#0f2a92] md:text-6xl text-center">About us</h2>
	<p class="opacity-reveal w-full max-w-4xl">
		{#each characters as char}
			<span class="char text-2xl inline-block text-[#0f2a92] 2xl:text-4xl opacity-20"
				>{char === ' ' ? '\u00A0' : char}</span
			>
		{/each}
	</p>
</div>

	<div class="rounded-xl overflow-hidden">
		<img src={image} class="w-full h-full object-cover" alt="">
	</div>
</section>


