<script>
	import Swiper from 'swiper';
	import { Pagination, EffectCoverflow } from 'swiper/modules'; // Import modules
	import 'swiper/css'; // Core Swiper styles
	import 'swiper/css/pagination'; // Pagination styles
	import 'swiper/css/effect-coverflow'; // Coverflow effect styles
	import { onMount } from 'svelte';

	import studentModelImage1 from '$lib/assets/images/StudentModel4.jpg';

	const gradient = 'linear-gradient(to_top,#0f2027,#203a4300,#2c536400)';

	const slides = [
		{
			title: 'Creativity',
			description:
				'A glimpse into the vibrant learning experiences, creativity, and teamwork that shape life at Springside Academy.',
			link: '/gallery',
			styles:
				"bg-[linear-gradient(to_top,#0f2027,#203a4300,#2c536400),url('/images/studentModel1.jpg')] bg-center bg-no-repeat bg-cover"
		},
		{
			title: 'Life Style',
			description:
				'A glimpse into the vibrant learning experiences, creativity, and teamwork that shape lifStudents at Spring Side Academy engage in interactive, teacher-guided lessons that encourage critical thinking, collaboration, and confidence. Our classrooms are designed to inspire curiosity while building strong academic foundations for lifelong learning.e at Springside Academy.',
			link: '/gallery',
			styles:
				"bg-[linear-gradient(to_top,#0f2027,#203a4300,#2c536400),url('/images/studentModel3.jpg')] bg-center bg-no-repeat bg-cover"
		},
		{
			title: 'Education',
			description:
				'Spring Side Academy is more than a school—it’s a family. Through teamwork, respect, and shared values, we create an environment where every student feels supported, valued, and motivated to succeed.',
			link: '/gallery',
			styles:
				"bg-[linear-gradient(to_top,#0f2027,#203a4300,#2c536400),url('/images/studentModel12.jpg')] bg-center bg-no-repeat bg-cover"
		},
		{
			title: 'Entertainment',
			description:
				'At Spring Side Academy, learning is balanced with joy and celebration. Through music, dance, games, cultural displays, and school events, students express creativity, build confidence, and strengthen friendships in a lively and supportive atmosphere.',
			link: '/gallery',
			styles:
				"bg-[linear-gradient(to_top,#0f2027,#203a4300,#2c536400),url('/images/studentModel7.jpg')] bg-center bg-no-repeat bg-cover"
		},
		{
			title: 'Robotics',
			description:
				'Through hands-on robotics and technology activities, students at Spring Side Academy explore problem-solving, creativity, and teamwork. These experiences introduce learners to coding, engineering, and critical thinking skills that prepare them for a technology-driven future.',
			link: '/gallery',
			styles:
				"bg-[linear-gradient(to_top,#0f2027,#203a4300,#2c536400),url('/images/studentModel8.jpg')] bg-center bg-no-repeat bg-cover"
		},
		{
			title: 'Coding',
			description:
				'At Spring Side Academy, students learn the fundamentals of coding through engaging and age-appropriate activities. By exploring logic, creativity, and problem-solving, learners develop digital skills that empower them to confidently navigate and shape the modern world.',
			link: '/gallery',
			styles:
				"bg-[linear-gradient(to_top,#0f2027,#203a4300,#2c536400),url('/images/studentModel8.jpg')] bg-center bg-no-repeat bg-cover"
		},
		{
			title: 'Abacus Training',
			description:
				'Through abacus training, students strengthen concentration, speed, and accuracy in mathematics. This hands-on approach helps learners build strong number sense, improve mental arithmetic, and develop confidence in problem-solving from an early age.',
			styles:
				"bg-[linear-gradient(to_top,#0f2027,#203a4300,#2c536400),url('/images/studentModel8.jpg')] bg-center bg-no-repeat bg-cover"
		}
	];

	onMount(() => {
		var swiper = new Swiper('.swiper', {
			modules: [Pagination, EffectCoverflow],
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 100,
				modifier: 3,
				slideShadows: true
			},
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			breakpoints: {
				640: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 1
				},
				1024: {
					slidesPerView: 2
				},
				1560: {
					slidesPerView: 3
				}
			}
		});
	});
</script>

<main>
	<div>
		<span>visit</span>
		<h2>Spring Side Academy Today</h2>
		<hr />
		<p>Where strong foundations meet limitless possibilities—shaping tomorrow’s leaders today.</p>
		<a href="/about">About us</a>
	</div>
	<div class="swiper">
		<div class="swiper-wrapper">
			{#each slides as slide}
				<div class="swiper-slide {slide.styles}">
					<!-- <div class="absolute top-0 left-0">
						<img src={slide.image} class="h-full w-full object-cover" alt="" />
					</div>
					<div
						class="absolute top-0 left-0 z-10 h-full w-full bg-[linear-gradient(to_top,#0f2027,#203a4377,#2c536400)] bg-cover bg-center bg-no-repeat"
					></div> -->
					<div class="z-20">
						<p class="text-3xl! text-white!">{slide.title}</p>
						<p>
							{slide.description}
						</p>
						<a href={slide.link} target="_blank">explore</a>
					</div>
				</div>
			{/each}
		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>
	</div>
	<img
		src="https://cdn.pixabay.com/photo/2021/11/04/19/39/jellyfish-6769173_960_720.png"
		alt=""
		class="bg"
	/>
	<img
		src="https://cdn.pixabay.com/photo/2015/09/12/23/20/star-937527_1280.jpg"
		alt=""
		class="bg2"
	/>
</main>

<!-- 
<div class="bg-[linear-gradient(to_top,#0f2027,#203a4300,#2c536400),url('https://images.unsplash.com/photo-1628944682084-831f35256163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-center bg-no-repeat bg-cover">
    </div> -->

<style>
	/* @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Roboto:wght@300;400;500;900&display=swap'); */

	/* h1{
        color: #203a4355;
    } */

	main {
		position: relative;
		width: calc(min(90rem, 90%));
		margin: 0 auto;
		min-height: 100vh;
		column-gap: 3rem;
		padding-block: min(20vh, 3rem);
	}

	.bg {
		position: fixed;
		top: -4rem;
		left: -12rem;
		z-index: -1;
		opacity: 0;
	}

	.bg2 {
		position: fixed;
		bottom: -2rem;
		right: -3rem;
		z-index: -1;
		width: 9.375rem;
		opacity: 0;
	}

	main > div span {
		text-transform: uppercase;
		letter-spacing: 1.5px;
		font-size: 1rem;
		color: #717171;
	}

	main > div hr {
		display: block;
		background: #005baa;
		height: 0.25rem;
		width: 6.25rem;
		border: none;
		margin: 1.125rem 0 1.875rem 0;
	}

	main > div p {
		line-height: 1.6;
	}

	main a {
		display: inline-block;
		text-decoration: none;
		text-transform: capitalize;
		color: #717171;
		font-weight: 500;
		background: #fff;
		border-radius: 3.125rem;
		transition: 0.3s ease-in-out;
	}

	main > div > a {
		border: 2px solid #c2c2c2;
		margin-top: 2.188rem;
		padding: 0.625rem 1.875rem;
	}

	main > div > a:hover {
		border: 0.125rem solid #005baa;
		color: #005baa;
	}

	.swiper {
		width: 100%;
		padding-top: 3.125rem;
	}

	:global(.swiper-pagination-bullet, .swiper-pagination-bullet-active) {
		background: #fff !important;
	}

	.swiper-pagination {
		bottom: 1.25rem !important;
	}

	.swiper-slide {
		width: 18.75rem;
		height: 28.125rem;
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: self-start;
	}

	.swiper-slide h2 {
		color: #fff;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1.4rem;
		line-height: 1.4;
		margin-bottom: 0.625rem;
		padding: 0 0 0 1.563rem;
		text-transform: uppercase;
	}

	.swiper-slide p {
		color: #dadada;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		padding: 0 1.563rem;
		line-height: 1.6;
		font-size: 0.75rem;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.swiper-slide a {
		margin: 1.25rem 1.563rem 3.438rem 1.563rem;
		padding: 0.438em 1.875rem;
		font-size: 0.9rem;
	}

	.swiper-slide a:hover {
		color: #005baa;
	}

	.swiper-slide div {
		display: none;
		opacity: 0;
		padding-bottom: 0.625rem;
	}

	:global(.swiper-slide-active div) {
		display: block !important;
		opacity: 1 !important;
	}

	.swiper-slide--one {
		background:
			linear-gradient(to top, #0f2027, #203a4300, #2c536400),
			url('https://images.unsplash.com/photo-1628944682084-831f35256163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')
				no-repeat 50% 50% / cover;
	}

	.swiper-slide--two {
		background:
			linear-gradient(to top, #0f2027, #203a4300, #2c536400),
			url('https://images.unsplash.com/photo-1515309025403-4b0184873cef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80')
				no-repeat 50% 50% / cover;
	}

	.swiper-slide--three {
		background:
			linear-gradient(to top, #0f2027, #203a4300, #2c536400),
			url('https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
				no-repeat 50% 50% / cover;
	}

	.swiper-slide--four {
		background:
			linear-gradient(to top, #0f2027, #203a4300, #2c536400),
			url('https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
				no-repeat 50% 50% / cover;
	}

	.swiper-slide--five {
		background:
			linear-gradient(to top, #0f2027, #203a4300, #2c536400),
			url('https://images.unsplash.com/photo-1570481662006-a3a1374699e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80')
				no-repeat 50% 50% / cover;
	}

	:global(.swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right) {
		background-image: none !important;
	}

	@media screen and (min-width: 48rem) {
		main {
			display: flex;
			align-items: center;
		}
		.bg,
		.bg2 {
			opacity: 0.1;
		}
	}

	@media screen and (min-width: 93.75rem) {
		.swiper {
			width: 85%;
		}
	}
</style>
