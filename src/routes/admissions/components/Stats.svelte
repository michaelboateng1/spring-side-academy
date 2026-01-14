<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	const stats = [
		{ number: 98, suffix: '%', label: 'Admission Success', color: '#6366f1' },
		{ number: 48, suffix: 'h', label: 'Response Time', color: '#06b6d4' },
		{ number: 100, suffix: '%', label: 'Exam Completion', color: '#f59e0b' },
		{ number: 100, suffix: '+', label: 'Global Partners', color: '#10b981' }
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Count-up animation logic
		stats.forEach((stat, i) => {
			const target = { val: 0 };
			const el = document.querySelectorAll('.stat-val')[i];

			gsap.to(target, {
				val: stat.number,
				duration: 2.5,
				ease: 'power4.out',
				scrollTrigger: {
					trigger: el,
					start: 'top 90%'
				},
				onUpdate: () => {
					el.innerText = Math.floor(target.val);
				}
			});
		});

		// 3D Tilt Effect on Mouse Move
		const cards = document.querySelectorAll('.stat-card');
		cards.forEach((card) => {
			card.addEventListener('mousemove', (e) => {
				const rect = card.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				const xc = rect.width / 2;
				const yc = rect.height / 2;
				const dx = x - xc;
				const dy = y - yc;

				gsap.to(card, {
					rotationY: dx / 10,
					rotationX: -dy / 10,
					perspective: 1000,
					duration: 0.5
				});
			});

			card.addEventListener('mouseleave', () => {
				gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.5 });
			});
		});
	});
</script>

<section
	class="relative overflow-hidden bg-linear-to-br from-[#0f2a92] via-[#0b247f] to-[#0f2a92] px-6 py-32"
>
	<div
		class="absolute inset-0 mask-[radial-gradient(ellipse_at_center,white,transparent)] opacity-20"
	>
		<div
			class="absolute inset-0 animate-[move-grid_20s_linear_infinite] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]"
		></div>
	</div>

	<div class="relative mx-auto max-w-7xl">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
			{#each stats as stat}
				<div class="stat-card group relative transform-gpu">
					<div
						class="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-transparent via-[var(--stat-color)] to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40"
						style="--stat-color: {stat.color}"
					></div>

					<div
						class="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 text-center backdrop-blur-2xl"
					>
						<div
							class="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--stat-color)] to-transparent opacity-50"
							style="--stat-color: {stat.color}"
						></div>

						<div class="relative">
							<span class="stat-val text-6xl font-black tracking-tighter text-white md:text-7xl"
								>0</span
							>
							<span class="text-4xl font-bold text-white/40">{stat.suffix}</span>
						</div>

						<p
							class="mt-4 text-xs font-black tracking-[0.3em] text-slate-500 uppercase transition-colors group-hover:text-white"
						>
							{stat.label}
						</p>

						<div
							class="absolute -right-6 -bottom-6 h-24 w-24 rounded-br-[2rem] border-r-4 border-b-4 opacity-10 transition-all group-hover:border-[var(--stat-color)] group-hover:opacity-100"
							style="--stat-color: {stat.color}"
						></div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	@keyframes move-grid {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(4rem);
		}
	}

	.stat-card {
		perspective: 1000px;
		will-change: transform;
	}

	.stat-val {
		/* Chromatic aberration style text shadow */
		text-shadow:
			2px 0 0 rgba(255, 0, 0, 0.1),
			-2px 0 0 rgba(0, 255, 255, 0.1);
	}
</style>
