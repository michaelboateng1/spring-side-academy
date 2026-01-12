<!-- <script>
	import { onMount } from 'svelte';

	let leadershipSection;

	// onMount(async () => {
	// 	try {
	// 		const gsapMod = await import('gsap');
	// 		const stMod = await import('gsap/ScrollTrigger');

	// 		const gsap = gsapMod.gsap || gsapMod.default || gsapMod;
	// 		const ScrollTrigger = stMod.ScrollTrigger || stMod.default;

	// 		if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

	// 		gsap.from('.leader-card', {
	// 			y: 40,
	// 			autoAlpha: 0,
	// 			duration: 0.6,
	// 			stagger: 0.15,
	// 			ease: 'power2.out',
	// 			scrollTrigger: {
	// 				trigger: leadershipSection,
	// 				start: 'top 75%',
	// 				toggleActions: 'play none none reverse'
	// 			}
	// 		});
	// 	} catch (e) {
	// 		console.error('GSAP failed to load:', e);
	// 	}
	// });

	const leaders = [
		{
			name: 'Dr. Sarah Johnson',
			title: 'Head of School',
			bio: 'With 20+ years in education, Dr. Johnson leads our vision with a focus on holistic student development.'
		},
		{
			name: 'Michael Chen',
			title: 'Director of Academics',
			bio: 'Passionate educator dedicated to innovative teaching methods and student-centered learning.'
		},
		{
			name: 'Emily Rodriguez',
			title: 'Director of Student Life',
			bio: 'Committed to fostering a supportive community where every student thrives emotionally and socially.'
		}
	];
</script>

<section
	bind:this={leadershipSection}
	class="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="text-4xl font-bold text-gray-900 sm:text-5xl">Our Leadership</h2>
			<p class="mt-4 text-lg text-gray-600">
				Experienced educators dedicated to excellence and student success
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each leaders as leader}
				<div
					class="leader-card overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg"
				>
					<div class="h-48 bg-gradient-to-br from-primary-100 to-secondary-100" />
					<div class="px-6 py-8">
						<h3 class="text-xl font-bold text-gray-900">{leader.name}</h3>
						<p class="mt-1 text-sm font-medium text-primary-600">{leader.title}</p>
						<p class="mt-4 text-gray-600">{leader.bio}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section> -->

<svg aria-hidden="true" width="0" height="0" style="position: fixed;">
	<filter id="sharp">
	  <feComponentTransfer>
		<feFuncA type="discrete" tableValues="0 1" />
	  </feComponentTransfer>
	</filter>
  
	<filter id="shape">
	  <feComponentTransfer>
		<feFuncA type="discrete" tableValues="0 1 0" />
	  </feComponentTransfer>
	</filter>
  
	<filter id="smooth">
	  <feGaussianBlur stdDeviation="4" />
	  <feComponentTransfer>
		<feFuncA type="table" tableValues="-5 4" />
	  </feComponentTransfer>
	  <feComposite in="SourceGraphic" operator="in" />
	</filter>
  </svg>
  
  <section class="flex flex-wrap justify-evenly gap-4 items-center py-20 lg:py-28">
	<div>
		<div class="back head-teacher" aria-hidden="true">
			<div class="shape"></div>
		</div>
		<p>Mr. Kwaku Obeng Bonsu</p>
		<a href="#">Head Master</a>
	</div>

	<div>
		<div class="back assistant-head-teacher" aria-hidden="true">
			<div class="shape"></div>
		</div>
		<p>Mr. Michael Boateng</p>
		<a href="#">Assistant Head Master</a>
	</div>

	<div>
		<div class="back academics-director" aria-hidden="true">
			<div class="shape"></div>
		</div>
		<p>Mr. Michael Boateng</p>
		<a href="#">Academics Director</a>
	</div>
  </section>


  <style>
	/* Layout & Container */
section div {
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
  width: min(30em, 100cqi);
  aspect-ratio: 1;
}

.back,
.shape {
  display: grid;
  grid-area: 1 / 1 / -1 / -1;
  grid-template: subgrid / subgrid;
}

/* Background Image Layer */
.back {
  filter: url(#shape) url(#smooth);
  pointer-events: none;
}

.back::before {
  grid-area: inherit;
  opacity: 0.5;
  content: '';
}

.head-teacher::before {
  background: url(https://cdn.pixabay.com/photo/2024/11/08/08/02/ai-generated-9182782_1280.jpg) 50% / cover;
}

.assistant-head-teacher::before {
  background: url(https://cdn.pixabay.com/photo/2025/06/03/07/31/ai-generated-9638601_1280.jpg) 50% / cover;
}

.academics-director::before {
  background: url(https://cdn.pixabay.com/photo/2023/12/29/10/39/woman-8475959_1280.jpg) 50% / cover;
}

/* Geometric Shape Layer */
.shape {
  outline: solid 1em #000;
  outline-offset: -1px;
  filter: blur(0.375em) url(#sharp);
}

.shape::before,
.shape::after {
  --i: 0;
  --j: (1 - var(--i));
  --o: 2em;
  grid-area: calc(1 + 2 * var(--i)) / calc(1 + 2 * var(--i));
  margin-inline: calc(-1 * var(--i) * var(--o)) calc(-1 * var(--j) * var(--o));
  background: #000;
  clip-path: polygon(calc(var(--i) * var(--o)) 0, 100% 0, calc(100% - var(--j) * var(--o)) 100%, 0 100%);
  content: '';
}

.shape::after {
  --i: 1;
}

/* Typography & Spacing */
a, p {
  padding: 1em;
}

a {
  grid-area: 1 / 1;
}

p {
  grid-area: 3 / 3;
}

/* Prettifying / Global Styles */
* {
  margin: 0;
}



svg[aria-hidden='true'][height='0'] {
  position: fixed;
}
  </style>
