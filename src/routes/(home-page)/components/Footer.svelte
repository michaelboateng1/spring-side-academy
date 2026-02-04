<script>
	import { gsap } from 'gsap';
	import schoolLogo from '$lib/assets/images/schoolLogo.jpg';

	let successMessage;
	let formStatus = $state("idle");

	const hundleSubmit = async (e) => {
		e.preventDefault();

		formStatus = "pending";
		const formData = new FormData(e.target);
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
				{ opacity: 0, scale: 0.8, y: -10 },
				{ opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out' }
			);

			// Auto-hide success message after 3 seconds
			setTimeout(() => {
				gsap.to(successMessage, {
					opacity: 0,
					scale: 0.8,
					y: -10,
					duration: 0.3,
					ease: 'power2.in',
					onComplete: () => {
						formStatus = "idle";
					}
				});
			}, 3000);

			e.target.reset();
		} else {
		 formStatus = "failed"
		}
	};
</script>

<footer
	class="relative overflow-hidden bg-linear-to-br from-[#0f2a92] via-[#0b247f] to-[#0f2a92] text-white"
>
	<!-- Decorative background -->
	<div class="absolute inset-0 opacity-10">
		<div
			class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"
		></div>
	</div>
	<div class="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"></div>
	<div class="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>

	<div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="mb-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
			<div>
				<div class="mb-4 flex items-center gap-3">
					<div class="relative">
						<div
							class="absolute inset-0 rounded-lg bg-linear-to-r from-sky-400 to-indigo-500 opacity-50 blur"
						></div>
						<img src={schoolLogo} alt="Spring Side Academy" class="relative h-10 w-10" />
					</div>
					<span class="text-lg font-bold">Spring Side Academy</span>
				</div>
				<p class="leading-relaxed text-[#cccccc]">
					Empowering students to shine through excellence, creativity, and character.
				</p>
				<div class="mt-6 flex gap-3">
					<a aria-label="Facebook"
						href="https://www.facebook.com/p/Spring-Side-Academy-100075940167513/"
						class="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/20"
					>
						<svg
							class="h-5 w-5 text-[#cccccc] transition-colors group-hover:text-white"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
							/>
						</svg>
					</a>
					<a aria-label="Twitter"
						href="https://x.com/springside11?lang=cs"
						class="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/20"
					>
						<svg
							class="h-5 w-5 text-[#cccccc] transition-colors group-hover:text-white"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
							/>
						</svg>
					</a>
					<a aria-label="YouTube"
						href="https://www.youtube.com/channel/UCqpaAwsznfSK9apl7biOoPA/about"
						class="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/20"
					>
						<svg
							class="h-5 w-5 text-[#cccccc] transition-colors group-hover:text-white"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div>
				<h3 class="mb-4 text-sm font-bold tracking-wider text-white uppercase">Explore</h3>
				<ul class="space-y-3">
					<li>
						<a
							class="group flex items-center gap-2 text-[#cccccc] transition-colors hover:text-white"
							href="/about"
						>
							<svg
								class="h-4 w-4 transition-transform group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
							About Us
						</a>
					</li>
					<li>
						<a
							class="group flex items-center gap-2 text-[#cccccc] transition-colors hover:text-white"
							href="/admissions"
						>
							<svg
								class="h-4 w-4 transition-transform group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
							Admissions
						</a>
					</li>
					<li>
						<a
							class="group flex items-center gap-2 text-[#cccccc] transition-colors hover:text-white"
							href="/contact"
						>
							<svg
								class="h-4 w-4 transition-transform group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
							Contact
						</a>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-sm font-bold tracking-wider text-white uppercase">Contact</h3>
				<ul class="space-y-3 text-[#cccccc]">
					<li class="flex items-start gap-2">
						<svg
							class="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						<span>springsideacademygh@gmail.com</span>
					</li>
					<li class="flex items-start gap-2">
						<svg
							class="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						<span>+233 204 864 000</span>
					</li>
					<li class="flex items-start gap-2">
						<svg
							class="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<span> Paraku Estate, Kumasi</span>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="mb-4 text-sm font-bold tracking-wider text-white uppercase">Newsletter</h3>
				<p class="mb-4 text-sm text-[#cccccc]">Stay updated with our latest news and events.</p>
				<form onsubmit={e => hundleSubmit(e)} class="relative flex flex-col gap-3">
					{#if formStatus === "success"}
						<div bind:this={successMessage} class="absolute inset-0 flex items-center justify-center rounded-lg bg-sky-600/95 backdrop-blur-sm">
							<div class="flex flex-col items-center justify-center space-y-2 text-center">
								<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
								</svg>
								<p class="text-sm font-semibold text-white">Subscribed!</p>
								<p class="text-xs text-sky-100">Thank you for joining us</p>
							</div>
						</div>
					{/if}
					<input
						type="email"
						name="newsletter-email"
						placeholder="Your email"
						class="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white transition-all placeholder:text-[#cccccc] focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 focus:outline-none"
					/>
					<button
						type="submit"
						class="rounded-lg bg-linear-to-r from-sky-600 to-[#2b52ec] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:from-sky-500 hover:to-blue-600"
						>Subscribe</button
					>
				</form>
			</div>
		</div>
		<div class="border-t border-white/10 pt-8">
			<div
				class="flex flex-col items-center justify-between gap-4 text-sm text-[#cccccc] md:flex-row"
			>
				<p>© {new Date().getFullYear()} Spring Side Academy. All rights reserved.</p>
				<div class="flex gap-6">
					<a href="#" class="transition-colors hover:text-white">Privacy Policy</a>
					<a href="#" class="transition-colors hover:text-white">Terms of Service</a>
				</div>
			</div>
		</div>
	</div>
</footer>
