/* eslint-disable max-len */
import indomie from 'assets/partners/indomie.png';
import lemonjarz from 'assets/partners/lemonjarz.svg';
import milkcow from 'assets/partners/milkcow.svg';
import steves from 'assets/partners/steves.svg';
import wizeprep from 'assets/partners/wizeprep.svg';
import rainbowSVG from 'assets/home-page/rainbow.svg';
import evo from 'assets/partners/evo.svg';
import righteous from 'assets/partners/righteous.svg';
import modoyoga from 'assets/partners/modoyoga.svg';
import rainorshine from 'assets/partners/rainorshine.svg';

const PARTNERS = [
	{
		name: 'Indomie',
		logo: indomie,
		description:
			'Indomie is produced by Indofood, the pioneer of instant noodles in Indonesia and is one of the largest instant noodles manufacturers in the world. Indomie comes in many varieties from our classic soup flavours to our most popular dry noodle flavour Indomie Mi Goreng!',
		link: 'https://indomieonline.ca/',
		yearlong: true,
	},
	{
		name: 'Lemon Jarz',
		logo: lemonjarz,
		description:
			'Dried lemon slices beautifully crafted in a mason jar. The only ingredient is lemon! No added sugar or preservatives. Perfect to add to a hot cup of tea, a cocktail, a glass of sparkling water, or even plain water for a refreshing drink. Lemonjarz serves as a great housewarming gift or for your lemon-loving friends. Made in Vancouver, B.C.',
		link: 'https://www.lemonjarz.com/',
		yearlong: true,
	},
	{
		name: 'Milkcow Cafe',
		logo: milkcow,
		description:
			'All about desserts, Milkcow is a premium dessert cafe that emphasizes on creativity and innovation. Milkcow ice-cream is distinctive in that it tastes milkier and creamier than your traditional soft serve, as its organically sourced without preservatives.',
		link: 'https://milkcowcafe.ca/',
		yearlong: true,
	},
	{
		name: "Steve's Poke bar",
		logo: steves,
		description:
			"Discover authentic Hawaiian poké at Steve's Poké Bar in Metro Vancouver. Our house-made sauce marinated poké sets us apart from other spots",
		link: 'https://www.stevespokebar.ca/',
		yearlong: true,
	},
	{
		name: 'Wizeprep',
		logo: wizeprep,
		description:
			'Wizeprep is an all-in-one education platform offering instant online access to course-tailored university exam-prep, tutorials, expert tutors, and many more study tools. This cutting-edge platform delivers a seamless learning experience stocked with all the tools needed to help students reach their full academic potential.',
		link: 'https://www.wizeprep.com/',
		yearlong: true,
	},
	{
		name: 'Evo',
		logo: evo,
		link: 'https://evo.ca/',
		yearlong: false,
	},
	{
		name: 'Rain or Shine',
		logo: rainorshine,
		link: 'https://www.rainorshineicecream.com/',
		yearlong: false,
	},
	{
		name: 'Rightheous Gelato',
		logo: righteous,
		link: 'https://www.righteousgelato.com/',
		yearlong: false,
	},
	{
		name: 'Modo Yoga',
		logo: modoyoga,
		link: 'https://modoyoga.com/vancouver/',
		yearlong: false,
	},
];

const rainbow = rainbowSVG;

export { PARTNERS, rainbow };
