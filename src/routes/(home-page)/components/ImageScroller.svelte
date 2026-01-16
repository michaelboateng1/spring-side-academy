<script>
	import { onMount } from 'svelte';

	import studentModel1 from '$lib/assets/images/studentModel1.jpg';
	import studentModel2 from '$lib/assets/images/StudentsModel2.jpg';
	import studentModel3 from '$lib/assets/images/studentModel3.jpg';
	import studentModel4 from '$lib/assets/images/StudentModel4.jpg';

	const schoolImages = [
		{
			id: 1,
			url: studentModel1,
			title: 'Graduation Day',
			desc: 'Celebrating our graduates'
		},
		{
			id: 2,
			url: studentModel2,
			title: 'Science Lab',
			desc: 'Students conducting experiments'
		}
		// {
		// 	id: 5,
		// 	url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
		// 	title: 'Sports Day',
		// 	desc: 'Annual sports competition'
		// },
		// {
		// 	id: 6,
		// 	url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
		// 	title: 'Art Exhibition',
		// 	desc: 'Student artwork showcase'
		// },
		// {
		// 	id: 7,
		// 	url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
		// 	title: 'Group Project',
		// 	desc: 'Collaborative learning'
		// },
		// {
		// 	id: 8,
		// 	url: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&q=80',
		// 	title: 'Computer Lab',
		// 	desc: 'Technology education'
		// }
	];

	const schoolImages2 = [
		{
			id: 3,
			url: studentModel3,
			title: 'Library Studies',
			desc: 'Quiet study time in our library'
		},
		{
			id: 4,
			url: studentModel4,
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

<div class="flex items-center justify-evenly">
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
