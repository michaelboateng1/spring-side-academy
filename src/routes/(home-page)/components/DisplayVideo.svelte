<script>
	import { onMount } from 'svelte';
	import video from '$lib/assets/videos/abacusVideo.mp4';

	let videoContainer;

	onMount(() => {
		const videoElement = document.createElement('video');
		videoElement.src = video;
		videoElement.autoplay = true;
		videoElement.loop = true;
		videoElement.muted = true;
		videoElement.playsInline = true;
		videoElement.controls = false;
		videoElement.disablePictureInPicture = true;
		videoElement.className = 'w-full h-full object-cover';

		if (videoContainer) {
			videoContainer.appendChild(videoElement);
		}
	});
</script>

<section
	class=" horizontal-section relative h-screen w-screen max-w-full overflow-hidden bg-linear-to-br from-[#0f2a92] via-[#0f2a92] to-[#04095d]"
>
	<div class="h-full w-full" bind:this={videoContainer}></div>
	<div class="absolute top-0 left-0 w-full h-full z-10 bg-linear-to-br from-[#2121212d] via-[#33333352] to-[#2121213d]"></div>
	<!-- <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
					<div class="stat-card group text-center">
						<div class="relative inline-block">
							<div
								class="absolute inset-0 rounded-full bg-linear-to-r from-[#fe0002] to-[#ff3333] opacity-50 blur-2xl transition-opacity group-hover:opacity-75"
							></div>
							<div
								class="stat-number relative bg-linear-to-r from-[#fe0002] to-[#ff3333] bg-clip-text text-6xl font-black text-transparent md:text-7xl"
							>
								500
							</div>
						</div>
						<div class="mt-4 text-xl font-bold text-white">Students Enrolled</div>
						<div class="mt-2 text-slate-400">Growing community of learners</div>
					</div>
					<div class="stat-card group text-center">
						<div class="relative inline-block">
							<div
								class="absolute inset-0 rounded-full bg-linear-to-r from-[#04095d] to-[#0a0f8a] opacity-50 blur-2xl transition-opacity group-hover:opacity-75"
							></div>
							<div
								class="stat-number relative bg-linear-to-r from-white to-slate-200 bg-clip-text text-6xl font-black text-transparent md:text-7xl"
							>
								98
							</div>
						</div>
						<div class="mt-4 text-xl font-bold text-white">University Acceptance</div>
						<div class="mt-2 text-slate-400">Percentage of graduates</div>
					</div>
					<div class="stat-card group text-center">
						<div class="relative inline-block">
							<div
								class="absolute inset-0 rounded-full bg-linear-to-r from-[#fe0002] to-[#04095d] opacity-50 blur-2xl transition-opacity group-hover:opacity-75"
							></div>
							<div
								class="stat-number relative bg-linear-to-r from-[#fe0002] to-white bg-clip-text text-6xl font-black text-transparent md:text-7xl"
							>
								50
							</div>
						</div>
						<div class="mt-4 text-xl font-bold text-white">Expert Teachers</div>
						<div class="mt-2 text-slate-400">Dedicated professionals</div>
					</div>
					<div class="stat-card group text-center">
						<div class="relative inline-block">
							<div
								class="absolute inset-0 rounded-full bg-linear-to-r from-white to-slate-300 opacity-50 blur-2xl transition-opacity group-hover:opacity-75"
							></div>
							<div
								class="stat-number relative bg-linear-to-r from-white to-slate-200 bg-clip-text text-6xl font-black text-transparent md:text-7xl"
							>
								15
							</div>
						</div>
						<div class="mt-4 text-xl font-bold text-white">Years of Excellence</div>
						<div class="mt-2 text-slate-400">Proven track record</div>
					</div>
				</div>
			</div> -->
</section>
