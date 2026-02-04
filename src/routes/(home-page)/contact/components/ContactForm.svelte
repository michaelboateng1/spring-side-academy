<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let formContainer;
	let successMessage;
	let formItems = [];
	let formData = {
		name: '',
		email: '',
		number: '',
		message: ''
	};

	let formStatus = $state("idle");

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

	const hundleSubmit = async (e) => {
		e.preventDefault();

 		formStatus = "pending";

		const formData = new FormData(event.target);
    	formData.append("access_key", "fdbebf65-58c0-43bf-87f6-80cfc25a5be0");

		
		const response = await fetch("https://api.web3forms.com/submit", {
		method: "POST",
		body: formData
		});

		const data = await response.json();

		if (data.success) {
			formStatus = "success";
			
			// Success animation
			const successTl = gsap.timeline();
			successTl.fromTo(
				successMessage,
				{ opacity: 0, scale: 0.8, y: -20 },
				{ opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out' }
			);

			// Auto-hide success message after 4 seconds
			setTimeout(() => {
				gsap.to(successMessage, {
					opacity: 0,
					scale: 0.8,
					y: -20,
					duration: 0.4,
					ease: 'power2.in',
					onComplete: () => {
						formStatus = "idle";
					}
				});
			}, 4000);

			e.target.reset();
		} else {
			formStatus = "failed";
		}
	};

	const handleFocus = (e) => {
		gsap.to(e.target, { scale: 1.02, duration: 0.3 });
	};

	const handleBlur = (e) => {
		gsap.to(e.target, { scale: 1, duration: 0.3 });
	};
</script>

<div class="form-bg flex min-h-screen items-center justify-center bg-slate-200 p-6">
	<div bind:this={formContainer} class="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl md:p-12">
		{#if formStatus === "success"}
			<div bind:this={successMessage} class="absolute z-10 bg-white w-full h-full inset-0 flex items-center justify-center rounded-2xl">
				<div class="flex flex-col items-center justify-center space-y-4 ">
					<div class="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
						<svg class="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-slate-800">Message Sent!</h3>
					<p class="text-center text-slate-600">Thank you for reaching out. We'll get back to you soon.</p>
				</div>
			</div>
		{/if}

		<header bind:this={formItems[0]} class="mb-8">
			<h2 class="text-3xl font-bold text-slate-800">Get in touch</h2>
			<p class="mt-2 text-slate-500">We'd love to hear from you. Send us a message.</p>
		</header>

		<form class="space-y-6" onsubmit={e => hundleSubmit(e)}>
			<div bind:this={formItems[1]}>
				<!-- <label for="name" class="mb-2 block text-sm font-medium text-slate-700">Full Name</label> -->
				<input bind:this={formData.name}
					onfocus={handleFocus}
					onblur={handleBlur}
					type="text"
					name="name"
					id="name"
					class="w-full border-0 border-b-2 border-[#0f2a92] px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
					placeholder="Enter your full name..."
				/>
			</div>

			<div bind:this={formItems[2]}>
				<!-- <label for="email" class="mb-2 block text-sm font-medium text-slate-700"
					>Email Address</label
				> -->
				<input bind:this={formData.email}
					onfocus={handleFocus}
					onblur={handleBlur}
					type="email"
					name="email"
					id="email"
					class="w-full border-0 border-b-2 border-[#0f2a92] px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
					placeholder="Enter your email (e.g exampe.com)"
				/>
			</div>

			<div bind:this={formItems[2]}>
				<!-- <label for="email" class="mb-2 block text-sm font-medium text-slate-700"
					>Email Address</label
				> -->
				<input bind:this={formData.number}
					onfocus={handleFocus}
					onblur={handleBlur}
					type="tel"
					id="number"
					name="number"
					class="w-full border-0 border-b-2 border-[#0f2a92] px-4 py-3 transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
					placeholder="Enter your number (e.g +233 024 8374 367)"
				/>
			</div>

			<div bind:this={formItems[3]}>
				<label for="message" class="mb-2 block text-sm font-medium text-slate-700">Message</label>
				<textarea bind:this={formData.message}
					onfocus={handleFocus}
					onblur={handleBlur}
					id="message"
					name="message"
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
			url('../../../../lib/assets/images/aboutUs//hero//contactFormBg.jpg');
		background-position: center;
		background-attachment: fixed;
		background-size: contain;
	}
</style>
