<script>
	import { onMount } from 'svelte';

	// import studentModel1 from '$lib/assets/images/studentModel1.jpg';
	// import studentModel2 from '$lib/assets/images/StudentsModel2.jpg';
	// import studentModel3 from '$lib/assets/images/studentModel3.jpg';
	// import studentModel4 from '$lib/assets/images/StudentModel4.jpg';

	import scrollImage1 from "$lib/assets/images/ScrollImages/ScrollImage1.jpeg";
	import scrollImage2 from "$lib/assets/images/ScrollImages/ScrollImage2.jpeg";
	import scrollImage3 from "$lib/assets/images/ScrollImages/ScrollImage3.jpeg";
	import scrollImage4 from "$lib/assets/images/ScrollImages/ScrollImage4.jpeg";
	import scrollImage5 from "$lib/assets/images/ScrollImages/ScrollImage5.jpeg";
	import scrollImage6 from "$lib/assets/images/ScrollImages/ScrollImage6.jpeg";
	import scrollImage7 from "$lib/assets/images/ScrollImages/ScrollImage7.jpeg";
	import scrollImage8 from "$lib/assets/images/ScrollImages/ScrollImage8.jpeg";
	import scrollImage9 from "$lib/assets/images/ScrollImages/ScrollImage9.jpeg";
	import scrollImage10 from "$lib/assets/images/ScrollImages/ScrollImage10.jpeg";
	import scrollImage11 from "$lib/assets/images/ScrollImages/ScrollImage11.jpeg";
	import scrollImage12 from "$lib/assets/images/ScrollImages/ScrollImage12.jpeg";
	import scrollImage13 from "$lib/assets/images/ScrollImages/ScrollImage13.jpeg";
	import scrollImage14 from "$lib/assets/images/ScrollImages/ScrollImage14.jpeg";
	import scrollImage15 from "$lib/assets/images/ScrollImages/ScrollImage15.jpeg";
	import scrollImage16 from "$lib/assets/images/ScrollImages/ScrollImage16.jpeg";
	import scrollImage17 from "$lib/assets/images/ScrollImages/ScrollImage17.jpeg";
	import scrollImage18 from "$lib/assets/images/ScrollImages/ScrollImage18.jpeg";
	import scrollImage19 from "$lib/assets/images/ScrollImages/ScrollImage19.jpeg";
	import scrollImage20 from "$lib/assets/images/ScrollImages/ScrollImage20.jpeg";
	import scrollImage21 from "$lib/assets/images/ScrollImages/ScrollImage21.jpeg";
	import scrollImage22 from "$lib/assets/images/ScrollImages/ScrollImage22.jpeg";
	import scrollImage23 from "$lib/assets/images/ScrollImages/ScrollImage23.jpeg";

	const schoolImages = [
		{
			id: 1,
			url: scrollImage1,
			title: 'Graduation Day',
			desc: 'Celebrating our graduates'
		},
		{
			id: 2,
			url: scrollImage2,
			title: 'Science Lab',
			desc: 'Students conducting experiments'
		},
		{
			id: 3,
			url: scrollImage3,
			title: 'Science Lab',
			desc: 'Students conducting experiments'
		},
		{
			id: 4,
			url: scrollImage4,
			title: 'Science Lab',
			desc: 'Students conducting experiments'
		},
		{
			id: 5,
			url: scrollImage5,
			title: 'Science Lab',
			desc: 'Students conducting experiments'
		},
		{
			id: 6,
			url: scrollImage6,
			title: 'Science Lab',
			desc: 'Students conducting experiments'
		},
		{
			id: 7,
			url: scrollImage7,
			title: 'Science Lab',
			desc: 'Students conducting experiments'
		},
		{
			id: 8,
			url: scrollImage8,
			title: 'Science Lab',
			desc: 'Students conducting experiments'
		},
		{
			id: 9,
			url: scrollImage9,
			title: 'Science Lab',
			desc: 'Students conducting experiments'
		},
		{
			id: 10,
			url: scrollImage10,
			title: 'Science Lab',
			desc: 'Students conducting experiments'
		}
		
	];

	const schoolImages2 = [
		{
			id: 11,
			url: scrollImage11,
			title: 'Library Studies',
			desc: 'Quiet study time in our library'
		},
		{
			id: 12,
			url: scrollImage12,
			title: 'Classroom Learning',
			desc: 'Interactive classroom session'
		},
		{
			id: 13,
			url: scrollImage13,
			title: 'Classroom Learning',
			desc: 'Interactive classroom session'
		},
		{
			id: 14,
			url: scrollImage14,
			title: 'Classroom Learning',
			desc: 'Interactive classroom session'
		},
		{
			id: 15,
			url: scrollImage15,
			title: 'Classroom Learning',
			desc: 'Interactive classroom session'
		},
		{
			id: 16,
			url: scrollImage16,
			title: 'Classroom Learning',
			desc: 'Interactive classroom session'
		},
		{
			id: 17,
			url: scrollImage17,
			title: 'Classroom Learning',
			desc: 'Interactive classroom session'
		},
		{
			id: 18,
			url: scrollImage18,
			title: 'Classroom Learning',
			desc: 'Interactive classroom session'
		},
		{
			id: 19,
			url: scrollImage19,
			title: 'Classroom Learning',
			desc: 'Interactive classroom session'
		},
		{
			id: 20,
			url: scrollImage20,
			title: 'Classroom Learning',
			desc: 'Interactive classroom session'
		},
		{
			id: 21,
			url: scrollImage21,
			title: 'Classroom Learning',
			desc: 'Interactive classroom session'
		},
		{
			id: 22,
			url: scrollImage22,
			title: 'Classroom Learning',
			desc: 'Interactive classroom session'
		},
		{
			id: 23,
			url: scrollImage23,
			title: 'Classroom Learning',
			desc: 'Interactive classroom session'
		}
	];

	let isScrolling = $state(true);
	let speed = $state(1);
	let direction = $state('up');
	let currentPosition = $state(0);
	let currentPosition2 = $state(0);
	let notification = $state('');
	let animationId = null;

	let scrollContainer;
	let scrollContainer2;

	const changeSpeed = (newSpeed) => {
		speed = newSpeed;
	};

	const toggleDirection = () => {
		direction = direction === 'up' ? 'down' : 'up';
	};

	const togglePause = () => {
		isScrolling = !isScrolling;
	};

	const resetGallery = () => {
		currentPosition = 0;
		direction = 'up';
		speed = 1;
		isScrolling = true;
		showNotification('Gallery has been reset!');
	};

	const showImageDetails = (imageId) => {
		const img = schoolImages.find((i) => i.id == imageId);
		if (img) {
			showNotification(`📸 ${img.title}: ${img.desc}`);
		}
	};

	const showNotification = (message) => {
		notification = message;
		setTimeout(() => {
			notification = '';
		}, 3000);
	};

	// onMount(() => {
	// 	// const animate = () => {
	// 	// 	if (isScrolling) {
	// 	// 		const scrollAmount = direction === 'up' ? -speed : speed;
	// 	// 		currentPosition += scrollAmount;

	// 	// 		// Reset when scrolled halfway
	// 	// 		if (scrollContainer) {
	// 	// 			const halfHeight = scrollContainer.scrollHeight / 2;
	// 	// 			if (Math.abs(currentPosition) >= halfHeight) {
	// 	// 				currentPosition = 0;
	// 	// 			}
	// 	// 		}
	// 	// 	}

	// 	// 	animationId = requestAnimationFrame(animate);
	// 	// };

	// 	if (scrollContainer2) {
	// 	currentPosition2 = -scrollContainer2.scrollHeight / 2;
	// }

	// 	const animate = () => {
	// 		if (isScrolling) {
	// 			// FIRST SCROLLER → UP
	// 			currentPosition -= speed;

	// 			if (scrollContainer) {
	// 				const halfHeight = scrollContainer.scrollHeight / 2;
	// 				if (Math.abs(currentPosition) >= halfHeight) {
	// 					currentPosition = 0;
	// 				}
	// 			}

	// 			// SECOND SCROLLER → DOWN
	// 			currentPosition2 += speed;

	// 			if (scrollContainer2) {
	// 				const halfHeight2 = -scrollContainer2.scrollHeight / 2;
	// 				if (currentPosition2 >= halfHeight2) {
	// 					currentPosition2 = 0;
	// 				}
	// 			}
	// 		}

	// 		animationId = requestAnimationFrame(animate);
	// 	};

	// 	animate();

	// 	// animationId = requestAnimationFrame(animate);

	// 	return () => {
	// 		if (animationId) {
	// 			cancelAnimationFrame(animationId);
	// 		}
	// 	};
	// });

	onMount(() => {
		if (scrollContainer2) {
			currentPosition2 = -scrollContainer2.scrollHeight / 2;
		}

		const animate = () => {
			if (isScrolling) {
				// First → UP
				currentPosition -= speed;

				if (scrollContainer) {
					const half = scrollContainer.scrollHeight / 2;
					if (Math.abs(currentPosition) >= half) currentPosition = 0;
					// if (Math.abs(currentPosition) >= half) (currentPosition + speed) % half;
				}

				// Second → DOWN
				currentPosition2 += speed;

				if (scrollContainer2) {
					const half2 = scrollContainer2.scrollHeight / 2;
					if (currentPosition2 >= 0) {
						currentPosition2 = -half2;
						// currentPosition2 = (currentPosition2 + speed) % half2;
					}
				}
			}

			animationId = requestAnimationFrame(animate);
		};

		animationId = requestAnimationFrame(animate);
	});
</script>

<div class="flex flex-col sm:flex-row gap-10 items-center justify-evenly px-5">
	<div
		class="customs-height relative mx-auto max-w-2xl overflow-hidden rounded-2xl border-8 border-white"
	>
		<div
			class="flex flex-col transition-transform duration-50 ease-linear"
			bind:this={scrollContainer}
			class:paused={!isScrolling}
			style={`transform: translateY(${currentPosition}px)`}
		>
			{#each [...schoolImages, ...schoolImages] as image, index (index)}
				<div class=" border-t-4 border-b-4 border-white">
					<img
						src={image.url}
						alt={image.title}
						title={`${image.title}: ${image.desc}`}
						loading="lazy"
						width="400"
						hegith="300"
						class="h-full w-full object-cover"
					/>
				</div>
			{/each}
		</div>
	</div>

	<div class="relative mx-auto">
		<h2 class="mb-8 text-center text-xl tracking-tight text-white md:text-4xl lg:text-5xl">
			Warm & Community-focused
		</h2>
		<div class=" max-h-[500px] max-w-2xl overflow-hidden rounded-xl border-4 border-white">
			<div
				class="flex flex-col transition-transform duration-50 ease-linear"
				bind:this={scrollContainer2}
				class:paused={!isScrolling}
				style={`transform: translateY(${currentPosition2}px)`}
			>
				{#each [...schoolImages2, ...schoolImages2] as image, index (index)}
					<div class=" border-b-4 border-white">
						<img
							src={image.url}
							alt={image.title}
							title={`${image.title}: ${image.desc}`}
							loading="lazy"
							class="h-full w-full object-cover"
						/>
					</div>
				{/each}
			</div>
		</div>
		<h5 class="mt-5 text-center text-xl tracking-tight text-white md:text-4xl lg:text-5xl">
			Capturing growth, learning, and success
		</h5>
	</div>
</div>

<!-- 
onmouseenter={() => isScrolling && (isScrolling = false)}
			onmouseleave={() => !isScrolling && (isScrolling = true)} -->

<style>
	.customs-height {
		max-height: calc(100vh - 200px);
	}
</style>
