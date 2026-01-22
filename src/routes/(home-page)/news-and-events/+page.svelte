<script>
	import AboutHero from '../about/components/AboutHero.svelte';
	import bgImage from '$lib/assets/images/zhejiang-university-3776783_1280.jpg';
	import Featured from './components/Featured.svelte';
	import NewsAndEvents from './components/NewsAndEvents.svelte';

	import image1 from '$lib/assets/images/StudentsModel2.jpg';
	import image2 from '$lib/assets/images/StudentModel4.jpg';
	import image3 from '$lib/assets/images/student-7468801_1280.jpg';

	const newsArticles = [
		{
			date: '12 Oct',
			category: 'Academic',
			title: 'Annual Science Fair: Exploring the Future of Green Tech',
			description:
				"Students showcased innovative solutions for renewable energy and sustainable living in this year's record-breaking event.",
			image: image1
		},
		{
			date: '08 Oct',
			category: 'Campus Life',
			title: 'Autumn Music Festival Highlights',
			description:
				'Our music department delivered a breathtaking performance featuring classical ensembles and modern jazz bands.',
			image: image2
		},
		{
			date: '05 Oct',
			category: 'Sports',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		}
	];

	const eventsArticles = [
		{
			date: '12 Oct',
			location: 'Assembly Hall',
			title: 'Annual Science Fair: Exploring the Future of Green Tech',
			description:
				"The Spring Side Lions secured their first regional trophy in a thrilling overtime final.",
			image: image1
		},
		{
			date: '08 Oct',
			location: 'School Main Ground',
			title: 'Autumn Music Festival Highlights',
			description:
				'Our music department delivered a breathtaking performance featuring classical ensembles and modern jazz bands.',
			image: image2
		},
		{
			date: '05 Oct',
			location: 'Assembly Hall',
			title: 'Regional Championship: A Historic Victory',
			description:
				'The Spring Side Lions secured their first regional trophy in a thrilling overtime final.',
			image: image3
		}
	];
</script>

<AboutHero
	heading="News & Event"
	subheading="Excellence. Integrity. Innovation."
	{bgImage}
	height="h-[85svh]"
/>

<Featured />
<NewsAndEvents articles={eventsArticles} type={'events'} />
<NewsAndEvents articles={newsArticles} type={'news'} />
