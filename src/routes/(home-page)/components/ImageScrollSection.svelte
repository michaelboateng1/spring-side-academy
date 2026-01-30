<script>
	import ImageScroller from './ImageScroller.svelte';
	import bookSVG from '$lib/assets/svg/book-303927.svg';
	import bookSVG2 from '$lib/assets/svg/book-6780766.svg';
	import booksSVG from '$lib/assets/svg/books-6780765.svg';
	import pencilSVG from '$lib/assets/svg/pencil-sharpener-149613.svg';
</script>

<section
	class="horizontal-section stats-section relative min-w-screen flex-shrink-0 overflow-hidden bg-gradient-to-br from-[#0f2a92] via-[#0f2a92] to-[#04095d] py-24 sm:py-32"
>
	<img
		src={bookSVG}
		class="absolute top-0 left-0 h-[200px] w-[200px] opacity-[0.15]"
		width="100"
		height="100"
		alt=""
	/>
	<img
		src={bookSVG2}
		class="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-1/2 -rotate-20 transform opacity-[0.15]"
		width="100"
		height="100"
		alt=""
	/>
	<img
		src={booksSVG}
		class="absolute -right-30 bottom-0 h-[500px] w-[500px] rotate-45 transform opacity-[0.15]"
		width="100"
		height="100"
		alt=""
	/>
	<img
		src={pencilSVG}
		class="absolute top-0 right-0 h-[300px] w-[300px] opacity-[0.15]"
		width="100"
		height="100"
		alt=""
	/>
	<!-- Animated background -->
	<div class="absolute inset-0 opacity-20">
		<div
			class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"
		></div>
	</div>

	<ImageScroller />

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
