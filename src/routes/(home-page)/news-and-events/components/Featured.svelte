<script>
	import image1 from '$lib/assets/images/newsAndEvents/featured/featuredImage2.jpg';
	import image2 from '$lib/assets/images/newsAndEvents/featured/featuredImage3.jpg';
	import image3 from '$lib/assets/images/newsAndEvents/featured/featuredImage5.jpg';
	import image4 from '$lib/assets/images/newsAndEvents/featured/featuredImage6.jpg';
	import image5 from '$lib/assets/images/newsAndEvents/featured/featuredImage7.jpg';
	import image6 from '$lib/assets/images/newsAndEvents/featured/featuredImage8.jpg';
</script>

<article class="grid-container container mx-auto">
	<section class="first-grid group cursor-pointer overflow-hidden rounded-xl">
		<figure class="relative h-full w-full">
			<img src={image1} class="h-full w-full object-cover" alt="Some News" />
			<figcaption
			class="absolute top-0 left-0 flex h-full w-full translate-y-120 transform flex-col justify-end bg-black/40 p-5 text-white backdrop-blur-md transition-transform duration-300 ease-in group-hover:translate-y-0"
			>
				<h2 class="text-2xl mb-2">Science & Innovation Day</h2>
				Students showcased creativity and problem-solving through exciting science and technology projects.
			</figcaption>
		</figure>
	</section>
	<section class="second-grid group cursor-pointer overflow-hidden rounded-xl bg-slate-200">
		<div class="flex h-full w-full items-center justify-end">
			<div class="flex flex-col items-center justify-center text-center text-black">
				<h2 class="text-2xl text-[#0f2a92] mb-2">Leaders of Tomorrow</h2>
				<p>Encouraging early career exploration as students dressed to represent professions that shape our world.</p>
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
			>  <h2 class="text-2xl mb-2">Career Awareness Day</h2>
				Encouraging early career exploration as students dressed to represent professions that shape our world.
			</figcaption>
		</figure>
	</section>
	<section class="third-grid group cursor-pointer overflow-hidden rounded-xl">
		<figure class="relative h-full w-full">
			<img src={image4} class="h-full w-full object-cover" alt="Some News" />
			<figcaption
				class="linear absolute top-0 left-0 flex h-full w-full translate-y-120 transform flex-col justify-end bg-black/40 p-5 text-white backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0"
			>  <h2 class="text-2xl mb-2">Creative Arts Exhibition</h2>
				An inspiring showcase of student talent in food, art, music, and performance
			</figcaption>
		</figure>
	</section>
	<section class="fourth-grid group cursor-pointer overflow-hidden rounded-xl">
		<figure class="relative h-full w-full">
			<img src={image3} class="h-full w-full object-cover" alt="Some News" />
			<figcaption
				class="linear absolute top-0 left-0 flex h-full w-full translate-y-120 transform flex-col justify-end bg-black/40 p-5 text-white backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0"
			> <h2 class="text-2xl mb-2">Academic Excellence</h2>
				Honouring outstanding students for academic achievement, discipline, and leadership.
			</figcaption>
		</figure>
	</section>
	<section class="fifth-grid group cursor-pointer overflow-hidden rounded-xl bg-slate-200">
		<div class="flex h-full w-full flex-row-reverse items-center justify-end">
			<div class="flex flex-col items-center justify-center text-center text-black">
				<h2 class="text-2xl text-[#0f2a92]">Abacus & Math Challenge</h2>
				<p>Building speed, accuracy, and confidence through fun and competitive mental math.</p>
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
			background-color: #ccc;
		}

		.second-grid {
			grid-area: second;
			/* background-color: black; */
		}

		.abitrary-grid {
			grid-area: abitrary;
			background-color: #ccc;
		}

		.third-grid {
			grid-area: third;
			background-color: #ccc;
		}

		.fourth-grid {
			grid-area: fourth;
			background-color: #ccc;
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
