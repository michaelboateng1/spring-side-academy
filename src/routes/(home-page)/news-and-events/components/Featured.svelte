<script>
	import image1 from '$lib/assets/images/studentModel1.jpg';
	import image2 from '$lib/assets/images/classroom-2787754_1280.jpg';
	import image3 from '$lib/assets/images/heroImage6.jpg';
	import image4 from '$lib/assets/images/zhejiang-university-3776783_1280.jpg';
	import image5 from '$lib/assets/images/student-7468799_1280.jpg';
	import image6 from '$lib/assets/images/zhejiang-university-3776785_1280.jpg';
</script>

<article class="grid-container container mx-auto">
	<section class="first-grid group cursor-pointer overflow-hidden rounded-xl">
		<figure class="relative h-full w-full">
			<img src={image1} class="h-full w-full object-cover" alt="Some News" />
			<figcaption
				class="absolute top-0 left-0 flex h-full w-full translate-y-120 transform flex-col justify-end bg-black/40 p-5 text-white backdrop-blur-md transition-transform duration-300 ease-in group-hover:translate-y-0"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</figcaption>
		</figure>
	</section>
	<section class="second-grid group cursor-pointer overflow-hidden rounded-xl bg-slate-200">
		<div class="flex h-full w-full items-center justify-end">
			<div class="flex flex-col items-center justify-center text-center text-black">
				<h2 class="text-2xl text-[#0f2a92]">Some News</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<figure class="relative h-full w-full">
				<img src={image2} class="h-full w-full object-cover" alt="Some News" />
			</figure>
		</div>
	</section>
	<section class="abitrary-grid group cursor-pointer overflow-hidden rounded-xl">
		<figure class="relative h-full w-full">
			<img src={image5} class="h-full w-full object-cover" alt="Some News" />
			<figcaption
				class="linear absolute top-0 left-0 flex h-full w-full translate-y-120 transform flex-col items-center justify-center bg-black/40 p-5 text-center text-white backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</figcaption>
		</figure>
	</section>
	<section class="third-grid group cursor-pointer overflow-hidden rounded-xl">
		<figure class="relative h-full w-full">
			<img src={image4} class="h-full w-full object-cover" alt="Some News" />
			<figcaption
				class="linear absolute top-0 left-0 flex h-full w-full translate-y-120 transform flex-col justify-end bg-black/40 p-5 text-white backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</figcaption>
		</figure>
	</section>
	<section class="fourth-grid group cursor-pointer overflow-hidden rounded-xl">
		<figure class="relative h-full w-full">
			<img src={image3} class="h-full w-full object-cover" alt="Some News" />
			<figcaption
				class="linear absolute top-0 left-0 flex h-full w-full translate-y-120 transform flex-col justify-end bg-black/40 p-5 text-white backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</figcaption>
		</figure>
	</section>
	<section class="fifth-grid group cursor-pointer overflow-hidden rounded-xl bg-slate-200">
		<div class="flex h-full w-full flex-row-reverse items-center justify-end">
			<div class="flex flex-col items-center justify-center text-center text-black">
				<h2 class="text-2xl text-[#0f2a92]">Some News</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<figure class="relative h-full w-full">
				<img src={image6} class="h-full w-full object-cover" alt="Some News" />
			</figure>
		</div>
	</section>
</article>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-auto-rows: 200px;
		gap: 1rem;
		padding: 2rem;
	}

	@media (min-width: 768px) {
		.grid-container {
			grid-template-columns: repeat(4, 1fr);
			grid-template-areas:
				'first second second abitrary'
				'first third fourth fourth'
				'fifth fifth fourth fourth';
		}

		.first-grid {
			grid-area: first;
			background-color: green;
		}

		.second-grid {
			grid-area: second;
			/* background-color: black; */
		}

		.abitrary-grid {
			grid-area: abitrary;
			background-color: gray;
		}

		.third-grid {
			grid-area: third;
			background-color: pink;
		}

		.fourth-grid {
			grid-area: fourth;
			background-color: blue;
		}

		.fifth-grid {
			grid-area: fifth;
			/* background-color: red; */
		}
	}

	@media (max-width: 767px) {
		.grid-container {
			grid-template-columns: 1fr;
		}
	}
</style>
