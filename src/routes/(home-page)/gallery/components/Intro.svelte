<script>
	import image1 from '$lib/assets/images/studentModel11.jpg';
	import image2 from '$lib/assets/images/studentModel3.jpg';
	import image3 from '$lib/assets/images/hero/studentsEngineers.jpg';
	import image4 from '$lib/assets/images/studentModel11.jpg';
	import image5 from '$lib/assets/images/studentModel6.jpg';
	import image6 from '$lib/assets/images/studentModel5.jpg';
	import image7 from '$lib/assets/images/studentModel6.jpg';
	import image8 from '$lib/assets/images/hero/098A0393.jpg';
	import image9 from '$lib/assets/images/studentModel7.jpg';
	import image10 from '$lib/assets/images/hero/assemblyImage.jpg';
	import image11 from '$lib/assets/images/hero/098A0357.jpg';
	// Data array to keep the markup clean
	const postcards = [
		{
			id: 1,
			src: image1,
			depth: 'slower'
		},
		{
			id: 2,
			src: image2,
			depth: 'faster'
		},
		{
			id: 3,
			src: image3,
			depth: 'slower-vertical'
		},
		{
			id: 4,
			src: image4,
			depth: 'slower-down'
		},
		{
			id: 5,
			src: image5,
			depth: 'normal'
		},
		{
			id: 6,
			src: image6,
			depth: 'slower'
		},
		{
			id: 7,
			src: image7,
			depth: 'faster1'
		},
		{
			id: 8,
			src: image8,
			depth: 'slower2'
		},
		{
			id: 9,
			src: image9,
			depth: 'normal'
		},
		{
			id: 10,
			src: image10,
			depth: 'slower'
		},
		{
			id: 11,
			src: image11,
			depth: 'last'
		}
	];

	// Map the depth keywords to Tailwind classes
	const depthClasses = {
		normal: ' [transform:rotate(90deg)_translateZ(0.1px)_scale(0.9)_translateY(-3vh)]',
		slower: ' [transform:rotate(180deg)_translateZ(-0.2px)_scale(1.1)_translateY(-10vh)]',
		slower1: ' [transform:rotate(-120deg)_translateZ(-0.25px)_scale(1.05)_translateY(8vh)]',
		slower2: ' [transform:rotate(90deg)_translateZ(-0.3px)_scale(1.3)_translateY(2vh)]',
		'slower-down': ' [transform:rotate(90deg)_translateZ(-0.2px)_scale(1.1)_translateY(16vh)]',
		faster: ' [transform:rotate(90deg)_translateZ(0.15px)_scale(0.8)_translateY(14vh)]',
		faster1: ' [transform:rotate(45deg)_translateZ(0.05px)_scale(0.8)_translateY(10vh)]',
		'slower-vertical': ' [transform:rotate(90deg)_translateZ(-0.15px)_scale(1.15)]',
		last: ' [transform:rotate(90deg)_translateZ(-0.2px)_scale(1.1)_translateX(25vh)_translateY(-8vh)]'
	};
</script>

<div class="h-screen w-full overflow-hidden bg-[#efecdb] hidden sm:block">
	<div class="horizontal-scroll-wrapper scrollbar-hide">
		{#each postcards as card}
			<div class="img-wrapper group {depthClasses[card.depth] || depthClasses.normal}">
				<span class="block overflow-hidden bg-[#efecdb] p-[1vh] shadow-[0_10px_50px_#5f2f1182]">
					<img
						src={card.src}
						alt="Spring Side Postcard"
						class="max-h-[50vh] max-w-[45vh] hue-rotate-[5deg] saturate-[40%] sepia-[30%] transition-all duration-500 group-hover:filter-none"
					/>
				</span>
			</div>
		{/each}
	</div>

	<!-- <div class="fixed top-4 left-4 flex items-center gap-2">
		<span class="h-12 w-12 fill-current">
			<svg viewBox="0 0 100 100">
				<path
					d="M50,67.1c-0.6,0-1.2-0.2-1.8-0.7c-3.8-3.8-7.7-7.7-11.5-11.5c-2.3-2.3,1.2-5.8,3.5-3.5c2.5,2.5,4.9,4.9,7.4,7.4 c0-13.7,0-27.4,0-41.2c0-0.6,0.2-1.2,0.5-1.5c0,0,0,0,0,0c0.4-0.6,1.1-1,2-0.9c13.7,0.3,26.4,7.2,33.5,19.1 C96.5,55.9,84.7,85,60.2,91.6C35.5,98.2,11.6,79.1,11.1,54c-0.1-3.2,4.9-3.2,5,0c0.3,13.8,8.4,26.4,21.3,31.5 c12.5,5,27.1,1.9,36.6-7.5c9.5-9.5,12.5-24.1,7.5-36.6c-4.8-12.1-16.3-20.1-29-21.2c0,12.8,0,25.5,0,38.3 c2.5-2.5,4.9-4.9,7.4-7.4c2.3-2.3,5.8,1.3,3.5,3.5c-3.9,3.9-7.8,7.8-11.8,11.8C51.2,66.9,50.6,67.1,50,67.1z"
				/>
			</svg>
		</span>
		<p class="text-sm font-medium tracking-wide uppercase">Try scrolling down</p>
	</div> -->

	<!-- <header class="fixed bottom-4 left-4 space-y-1">
		<p class="text-xs tracking-widest uppercase opacity-80">Postcards from Paris</p>
		<h1 class="text-base font-light tracking-tight">Css-only parallax horizontal gallery</h1>
		<p class="text-[10px] opacity-70">
			Photos from <a href="https://altphotos.com/free/paris/" class="underline">altphotos</a>
		</p>
	</header> -->
</div>

<style>
	/* 3D Container Logic - Difficult to do entirely in standard Tailwind */
	.horizontal-scroll-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vh;
		height: 100vw;

		/* The transformation that turns vertical scroll into horizontal */
		transform: rotate(-90deg) translate3d(0, -100vh, 0);
		transform-origin: right top;

		overflow-y: auto;
		overflow-x: hidden;
		padding-bottom: 10rem;

		/* 3D Parallax Setup */
		perspective: 1px;
		transform-style: preserve-3d;
	}

	/* Image wrappers move through 3D space */
	.img-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 40vh;
		transform-origin: 50% 50%;
		transition: all 1s ease;
	}

	.img-wrapper:hover {
		transform: rotate(90deg);
		min-height: 65vh;
	}

	/* Utility to hide scrollbars while keeping functionality */
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
