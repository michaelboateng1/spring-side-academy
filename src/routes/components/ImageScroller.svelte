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
		},
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

	let isScrolling = $state(true);
	let speed = $state(1);
	let direction = $state('up');
	let currentPosition = $state(0);
	let notification = $state('');
	let animationId = null;
	let scrollContainer;

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

	onMount(() => {
		const animate = () => {
			if (isScrolling) {
				const scrollAmount = direction === 'up' ? -speed : speed;
				currentPosition += scrollAmount;

				// Reset when scrolled halfway
				if (scrollContainer) {
					const halfHeight = scrollContainer.scrollHeight / 2;
					if (Math.abs(currentPosition) >= halfHeight) {
						currentPosition = 0;
					}
				}
			}

			animationId = requestAnimationFrame(animate);
		};

		animationId = requestAnimationFrame(animate);

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	});
</script>

<div class="container">
	<div class="image-scroller-widget">
		<div class="scroller-header">
			<!-- <h3>📚 Our School Moments</h3>
			<p>Watch our memorable moments scroll smoothly. Hover to pause, click to interact!</p> -->

			<div class="controls">
				<button class="control-btn" class:active={speed === 0.5} onclick={() => changeSpeed(0.5)}>
					Slow
				</button>
				<button class="control-btn" class:active={speed === 1} onclick={() => changeSpeed(1)}>
					Normal
				</button>
				<button class="control-btn" class:active={speed === 2} onclick={() => changeSpeed(2)}>
					Fast
				</button>
				<button class="control-btn" onclick={toggleDirection}> Reverse ↕️ </button>
				<button class="control-btn" onclick={togglePause}>
					{isScrolling ? '⏸️ Pause' : '▶️ Play'}
				</button>
				<button class="control-btn" onclick={resetGallery}> Reset 🔄 </button>
			</div>
		</div>

		<div
			class="image-scroll-container"
			onmouseenter={() => isScrolling && (isScrolling = false)}
			onmouseleave={() => !isScrolling && (isScrolling = true)}
		>
			<div
				class="scrolling-images"
				bind:this={scrollContainer}
				class:paused={!isScrolling}
				style={`transform: translateY(${currentPosition}px)`}
			>
				{#each [...schoolImages, ...schoolImages] as image, index (index)}
					<img
						src={image.url}
						alt={image.title}
						title={`${image.title}: ${image.desc}`}
						loading="lazy"
						onclick={() => showImageDetails(image.id)}
					/>
				{/each}
			</div>
		</div>
	</div>

	<!-- {#if notification}
		<div class="notification" transition:fade={{ duration: 300 }}>
			{notification}
		</div>
	{/if} -->
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	/* header {
		text-align: center;
		margin-bottom: 40px;
		padding: 20px;
		background: white;
		border-radius: 15px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}

	h1 {
		color: #2c3e50;
		margin-bottom: 10px;
		font-size: 2.5em;
	}

	.subtitle {
		color: #7f8c8d;
		font-size: 1.2em;
		margin-bottom: 20px;
	} */

	/* Scroller Widget Styles */
	.image-scroller-widget {
		background: white;
		border-radius: 15px;
		/* padding: 25px; */
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
		/* margin-bottom: 40px; */
	}

	.scroller-header {
		text-align: center;
		/* margin-bottom: 25px; */
		/* padding-bottom: 20px; */
		border-bottom: 2px solid #ecf0f1;
	}

	.scroller-header h3 {
		color: #3498db;
		/* font-size: 1.8em; */
		/* margin-bottom: 15px; */
	}

	.controls {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 12px;
		/* margin-top: 15px; */
	}

	.control-btn {
		/* padding: 10px 20px; */
		background: #3498db;
		color: white;
		border: none;
		border-radius: 50px;
		cursor: pointer;
		font-weight: 600;
		transition: all 0.3s ease;
		box-shadow: 0 4px 6px rgba(52, 152, 219, 0.2);
	}

	.control-btn:hover {
		background: #2980b9;
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(52, 152, 219, 0.3);
	}

	.control-btn.active {
		background: #2ecc71;
		box-shadow: 0 4px 6px rgba(46, 204, 113, 0.3);
	}

	/* Image Scroll Container */
	.image-scroll-container {
		overflow: hidden;
		height: 500px;
		position: relative;
		border-radius: 10px;
		border: 3px solid #ecf0f1;
	}

	.scrolling-images {
		display: flex;
		flex-direction: column;
		transition: transform 0.05s linear;
	}

	.scrolling-images.paused {
		transition: none;
	}

	.scrolling-images img {
		width: 100%;
		height: auto;
		min-height: 300px;
		max-height: 480px;
		/* margin: 10px 0; */
		border-radius: 8px;
		object-fit: cover;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
		cursor: pointer;
	}

	.scrolling-images img:hover {
		transform: scale(1.02);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
	}

	/* Notification */
	.notification {
		position: fixed;
		top: 0px;
		right: 0px;
		background: #2ecc71;
		color: white;
		/* padding: 15px 25px; */
		border-radius: 50px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
		z-index: 1000;
		font-weight: 600;
	}

	/* Info Section */
	.info-section {
		background: white;
		border-radius: 15px;
		/* padding: 30px; */
		/* margin-top: 30px; */
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}

	.info-section h2 {
		color: #2c3e50;
		/* margin-bottom: 20px; */
		font-size: 1.8em;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
		/* margin-top: 20px; */
	}

	.feature {
		background: #f8f9fa;
		/* padding: 20px; */
		border-radius: 10px;
		border-left: 4px solid #3498db;
	}

	.feature h4 {
		color: #3498db;
		/* margin-bottom: 10px; */
		font-size: 1.2em;
	}

	footer {
		text-align: center;
		/* margin-top: 40px; */
		/* padding: 20px; */
		color: #7f8c8d;
		font-size: 0.9em;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.image-scroll-container {
			height: 400px;
		}

		.scrolling-images img {
			max-height: 380px;
		}

		.controls {
			gap: 8px;
		}

		.control-btn {
			padding: 8px 15px;
			font-size: 0.9em;
		}
	}

	@media (max-width: 480px) {
		.image-scroll-container {
			height: 350px;
		}

		.scrolling-images img {
			max-height: 330px;
		}

		h1 {
			font-size: 2em;
		}

		.scroller-header h3 {
			font-size: 1.5em;
		}
	}
</style>
