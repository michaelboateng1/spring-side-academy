<script>
	import AboutHero from '../about/components/AboutHero.svelte';
	import Intro from './components/Intro.svelte';
	import Process from './components/Process.svelte';
	import Stats from './components/Stats.svelte';
	import Requirments from './components/Requirments.svelte';
	import FeesInfo from './components/FeesInfo.svelte';
	import CTA from '../components/CTA.svelte';

	import bgImage from '$lib/assets/images/zhejiang-university-3776785_1280.jpg';
	// import img1 from '$lib/assets/images/studentModel1.jpg';
	// import img2 from '$lib/assets/images/StudentsModel2.jpg';
	// import img3 from '$lib/assets/images/studentModel3.jpg';
	// import img4 from '$lib/assets/images/StudentModel4.jpg';
	// import img5 from '$lib/assets/images/studentModel5.jpg';
	// import img6 from '$lib/assets/images/studentModel6.jpg';
	// import img7 from '$lib/assets/images/studentModel7.jpg';
	// import img8 from '$lib/assets/images/studentModel8.jpg';
	// import img9 from '$lib/assets/images/studentModel9.jpg';
	// import img10 from '$lib/assets/images/studentModel10.jpg';
	// import classrm from '$lib/assets/images/classroom-2787754_1280.jpg';
	// const gallery = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, classrm];
	// let lightboxOpen = $state(false);
	// let activeIndex = $state(0);
	// const openLightbox = (i) => {
	// 	activeIndex = i;
	// 	lightboxOpen = true;
	// };
	// const closeLightbox = () => {
	// 	lightboxOpen = false;
	// };
	// const nextImage = () => {
	// 	activeIndex = (activeIndex + 1) % gallery.length;
	// };
	// const prevImage = () => {
	// 	activeIndex = (activeIndex - 1 + gallery.length) % gallery.length;
	// };
</script>

<svelte:head>
	<title>Spring Side Academy | Admission</title>
	<meta
		name="description"
		content="Join us as we build confident learners and future leaders through a rigorous admissions process, innovative curriculum, and a supportive learning environment."
	/>
</svelte:head>

<AboutHero
	heading="Admissions"
	subheading="Excellence. Integrity. Innovation."
	{bgImage}
	height="h-[85svh]"
/>
<Intro />
<Process />
<Requirments />
<FeesInfo />
<Stats />
<CTA />
