<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let formContainer;
	let formItems = [];

	onMount(() => {
		// Entrance Animation
		const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

		tl.fromTo(formContainer, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }).fromTo(
			formItems,
			{ opacity: 0, x: -20 },
			{ opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
			'-=0.5' // Start slightly before the previous animation ends
		);
	});

	const handleFocus = (e) => {
		gsap.to(e.target, { scale: 1.02, duration: 0.3 });
	};

	const handleBlur = (e) => {
		gsap.to(e.target, { scale: 1, duration: 0.3 });
	};
</script>

<div class="form-bg flex min-h-screen items-center justify-center bg-slate-200 p-6">
	<div bind:this={formContainer} class="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl md:p-12">
		<header bind:this={formItems[0]} class="mb-8">
			<h2 class="text-3xl font-bold text-slate-800">Get in touch</h2>
			<p class="mt-2 text-slate-500">We'd love to hear from you. Send us a message.</p>
		</header>

		<form class="space-y-6" on:submit|preventDefault>
			<div bind:this={formItems[1]}>
				<!-- <label for="name" class="mb-2 block text-sm font-medium text-slate-700">Full Name</label> -->
				<input
					on:focus={handleFocus}
					on:blur={handleBlur}
					type="text"
					id="name"
					class="w-full border-0 border-b-2 border-[#0f2a92] px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
					placeholder="Enter your full name..."
				/>
			</div>

			<div bind:this={formItems[2]}>
				<!-- <label for="email" class="mb-2 block text-sm font-medium text-slate-700"
					>Email Address</label
				> -->
				<input
					on:focus={handleFocus}
					on:blur={handleBlur}
					type="email"
					id="email"
					class="w-full border-0 border-b-2 border-[#0f2a92] px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
					placeholder="Enter your email (e.g exampe.com)"
				/>
			</div>

			<div bind:this={formItems[2]}>
				<!-- <label for="email" class="mb-2 block text-sm font-medium text-slate-700"
					>Email Address</label
				> -->
				<input
					on:focus={handleFocus}
					on:blur={handleBlur}
					type="tel"
					id="number"
					class="w-full border-0 border-b-2 border-[#0f2a92] px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
					placeholder="Enter your number (e.g +233 024 8374 367)"
				/>
			</div>

			<div bind:this={formItems[3]}>
				<label for="message" class="mb-2 block text-sm font-medium text-slate-700">Message</label>
				<textarea
					on:focus={handleFocus}
					on:blur={handleBlur}
					id="message"
					rows="4"
					class="w-full rounded-lg border border-slate-200 px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
					placeholder="Tell us somthing..."
				></textarea>
			</div>

			<button
				bind:this={formItems[4]}
				type="submit"
				class="w-full transform bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 active:scale-95"
			>
				Send Message
			</button>
		</form>
	</div>
</div>

<style>
	.form-bg {
		background:
			linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('../../../../lib/assets/images/zhejiang-university-3776785_1280.jpg');
		background-position: center;
		background-attachment: fixed;
	}
</style>
