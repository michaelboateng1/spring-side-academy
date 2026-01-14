<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Timeline for the sophisticated entrance
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.academic-section',
				start: 'top 70%',
				end: 'bottom center',
				toggleActions: 'play none none reverse'
			}
		});

		tl.from('.reveal-line', { scaleX: 0, duration: 1.2, ease: 'power4.inOut' })
			.from(
				'.reveal-text',
				{ y: 100, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
				'-=0.6'
			)
			.from(
				'.magnetic-button',
				{ scale: 0, rotation: -15, duration: 0.6, ease: 'back.out(1.7)' },
				'-=0.4'
			)
			.from('.bg-float', { opacity: 0, scale: 0.8, duration: 2, ease: 'power2.out' }, '0');

		// Parallax effect for the background text
		gsap.to('.parallax-bg', {
			y: -100,
			scrollTrigger: {
				trigger: '.academic-section',
				scrub: true
			}
		});
	});
</script>

<section class="academic-section relative isolate overflow-hidden py-24 sm:py-32">
	<div
		class="bg-float pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-10 select-none"
	>
		<span class="parallax-bg text-[25rem] leading-none font-black text-black">EST. 2026</span>
	</div>

	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="relative flex flex-col items-center text-center">
			<div
				class="reveal-line mb-12 h-px w-32 bg-linear-to-r from-transparent via-blue-400 to-transparent"
			></div>

			<div class="flex flex-col gap-6">
				<!-- <div class="reveal-text flex justify-center">
					<span
						class="inline-flex items-center gap-2 rounded-full border border-[#0f2a92]/30 bg-[#0f2a92]/5 px-4 py-1.5 text-xs font-bold tracking-[0.3em] text-[#0f2a92] uppercase"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-[#0f2a92]"></span>
						Legacy of Learning
					</span>
				</div> -->

				<h2 class="reveal-text text-5xl font-black tracking-tighter text-[#0f2a92] md:text-8xl">
					Join our <span
						class="bg-linear-to-r from-[#0f2a92] to-blue-400 bg-clip-text text-transparent"
						>vibrant</span
					> <br />
					learning community.
				</h2>

				<div class="reveal-text mx-auto mt-4 max-w-3xl">
					<p class="text-lg leading-relaxed text-slate-400 md:text-xl">
						We welcome <span class="font-semibold text-slate-800">curious minds</span> and kind hearts.
						Our admissions process is a collaborative journey, crafted to discover the unique brilliance
						within every student.
					</p>
				</div>

				<div class="magnetic-button mt-10">
					<a
						href="#process"
						class="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-white/10 bg-white px-10 py-5 transition-all hover:bg-white"
					>
						<span
							class="relative z-10 text-sm font-black tracking-widest text-[#020617] uppercase transition-colors group-hover:text-white"
						>
							Begin Your Journey
						</span>
						<div
							class="absolute inset-0 -translate-x-full bg-[#0f2a92] transition-transform duration-500 group-hover:translate-x-0"
						></div>

						<svg
							class="relative z-10 h-5 w-5 text-[#020617] group-hover:text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
				</div>
			</div>

			<div
				class="reveal-line mt-24 h-px w-full max-w-lg bg-linear-to-r from-transparent via-blue-800 to-transparent"
			></div>
		</div>
	</div>

	<div
		class="absolute bottom-0 left-0 m-8 h-32 w-32 rounded-bl-3xl border-b-2 border-l-2 border-blue-500/20"
	></div>
	<div
		class="absolute top-0 right-0 m-8 h-32 w-32 rounded-tr-3xl border-t-2 border-r-2 border-blue-500/20"
	></div>
</section>

<style>
	/* Custom Font Pairing: Sans for UI, Serif for Elegance */

	.academic-section {
		/* Subtle noise texture for a paper/parchment feel */
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
		background-blend-mode: overlay;
	}
</style>
