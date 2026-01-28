<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	const steps = [
		{
			id: '01',
			title: 'Initial Inquiry',
			desc: 'Reach out to our team to start your journey and receive your digital welcome pack.',
			color: '#0f2a92'
		},
		{
			id: '02',
			title: 'Campus Discovery',
			desc: 'Experience our vibrant learning environment firsthand through a personalized tour.',
			color: '#0097a7'
		},
		{
			id: '03',
			title: 'Documentation',
			desc: 'Submit your journey portfolio and assessments for our academic review.',
			color: '#4f46e5'
		},
		{
			id: '04',
			title: 'Family Interview',
			desc: 'A collaborative discussion to ensure our values align with your child’s goals.',
			color: '#0891b2'
		},
		{
			id: '05',
			title: 'Official Offer',
			desc: 'Welcome to the community! Finalize your registration and join the family.',
			color: '#1e1b4b'
		}
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// 1. Animate the central path "filling up"
		gsap.fromTo(
			'.path-fill',
			{ scaleY: 0 },
			{
				scaleY: 1,
				ease: 'none',
				scrollTrigger: {
					trigger: '.process-container',
					start: 'top center',
					end: 'bottom center',
					scrub: 1
				}
			}
		);

		// 2. Animate each step (Orbs and Cards)
		const rows = document.querySelectorAll('.process-row');
		rows.forEach((row, i) => {
			const card = row.querySelector('.card-glass');
			const orb = row.querySelector('.orb-container');
			const isEven = i % 2 === 0;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: row,
					start: 'top 80%',
					end: 'top 20%',
					toggleActions: 'play reverse play reverse'
				}
			});

			tl.from(orb, {
				scale: 0,
				rotation: -180,
				duration: 0.8,
				ease: 'back.out(1.7)'
			}).from(
				card,
				{
					x: isEven ? -100 : 100,
					opacity: 0,
					rotationY: isEven ? 20 : -20,
					duration: 1,
					ease: 'power4.out'
				},
				'-=0.4'
			);
		});
	});
</script>

<section id="process"
	class="process-container relative overflow-hidden bg-linear-to-r from-[#0f2a92] via-[#04095d] to-[#0f2a92] py-32 text-white"
>
	<div class="pointer-events-none absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2">
		<div class="absolute top-0 left-1/4 h-125 w-125 bg-white opacity-20 blur-[150px]"></div>
		<div
			class="bg-white-500 absolute right-1/4 bottom-0 h-125 w-125 opacity-10 blur-[150px]"
		></div>
	</div>

	<div class="container mx-auto px-6">
		<div class="mb-32 text-center">
			<h2 class="text-6xl font-black tracking-tighter uppercase italic md:text-8xl">
				<span class="text-white"
					>Admissions Flow</span
				>
			</h2>
		</div>

		<div class="relative mx-auto max-w-6xl">
			<div
				class="absolute top-0 left-1/2 z-0 hidden h-full w-0.5 -translate-x-1/2 bg-white/10 md:block"
			>
				<div
					class="path-fill absolute top-0 left-0 h-full w-full origin-top bg-linear-to-b from-blue-400 via-blue-500 to-white shadow-[0_0_15px_rgba(96,165,250,0.8)]"
				></div>
			</div>

			{#each steps as step, i}
				<div class="process-row relative mb-32 flex flex-col items-center md:mb-52 md:flex-row">
					<div
						class="flex w-full md:w-5/12 {i % 2 === 0
							? 'justify-end'
							: 'order-last justify-start md:order-0'}"
					>
						{#if i % 2 === 0}
							<div class="card-glass group text-right">
								<span class="step-id">{step.id}</span>
								<h3 class="mb-4 text-3xl font-bold text-white">{step.title}</h3>
								<p class="text-lg leading-relaxed text-slate-400">{step.desc}</p>
							</div>
						{/if}
					</div>

					<div class="relative z-10 flex w-24 justify-center py-8 md:py-0">
						<div class="orb-container">
							<div class="orb-inner" style="background: {step.color}">
								<span class="font-black text-white">{step.id}</span>
							</div>
							<div class="orb-glow" style="background: {step.color}"></div>
						</div>
					</div>

					<div class="flex w-full md:w-5/12 {i % 2 !== 0 ? 'justify-start' : 'justify-end'}">
						{#if i % 2 !== 0}
							<div class="card-glass group text-left">
								<span class="step-id-alt">{step.id}</span>
								<h3 class="mb-4 text-3xl font-bold text-white">{step.title}</h3>
								<p class="text-lg leading-relaxed text-slate-400">{step.desc}</p>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	:global(*, body) {
		scroll-behavior: smooth;
	}

	.card-glass {
		position: relative;
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(12px);
		padding: 3rem;
		border-radius: 2.5rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: border-color 0.3s ease;
		perspective: 1000px;
	}

	.card-glass:hover {
		border-color: rgba(255, 255, 255, 0.5);
	}

	.step-id,
	.step-id-alt {
		position: absolute;
		font-size: 8rem;
		font-weight: 900;
		color: white;
		opacity: 0.08;
		top: -2rem;
		z-index: -1;
	}
	.step-id {
		right: 1rem;
	}
	.step-id-alt {
		left: 1rem;
	}

	.orb-container {
		position: relative;
		width: 80px;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.orb-inner {
		width: 56px;
		height: 56px;
		border-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
	}

	.orb-glow {
		position: absolute;
		inset: 0;
		border-radius: 50%;
		filter: blur(20px);
		opacity: 0.4;
		animation: pulse 3s infinite alternate;
	}

	@keyframes pulse {
		from {
			transform: scale(0.8);
			opacity: 0.2;
		}
		to {
			transform: scale(1.2);
			opacity: 0.5;
		}
	}

	@media (max-width: 768px) {
		.card-glass {
			text-align: center !important;
			padding: 2rem;
		}
		.path-fill {
			display: none;
		}
	}
</style>
