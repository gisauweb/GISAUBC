/* eslint-disable max-len */
import wizeprep from 'assets/partners/wizeprep.svg';
import steves from 'assets/partners/steves.svg';
import rainbowSVG from 'assets/home-page/rainbow.svg';
import bananaleaf from 'assets/partners/bananaLeaf.svg';
import prestigeOptical from 'assets/partners/prestigeOptical.svg';
import storageHotel from 'assets/partners/storageHotel.svg';

const PARTNERS = [
	{
		name: 'Banana Leaf Vancouver',
		logo: bananaleaf,
		description:
			'Banana Leaf is a journey through Malaysian and Southeast Asian flavors and hospitality. Founded in 1995, we’ve grown from a cozy spot to five locations across Metro Vancouver. Blending Malaysian roots with influences from Indonesia, Singapore, Thailand, China, and India, we offer unique dishes bursting with diverse flavors.',
		link: 'https://indomieonline.ca/',
		yearlong: true,
	},
	{
		name: 'Prestige Optical',
		logo: prestigeOptical,
		description:
			'Prestige Optical is a one stop boutique optical store located in Kitsilano, Vancouver, founded and operated by Licensed Opticians with over 70 years of lineage in vision care providing high-quality eye care and fashionable eyewear.',
		link: 'https://www.lemonjarz.com/',
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
		name: 'Storagehotel',
		logo: storageHotel,
		description:
			"Storagehotel is UBC and UofT's #1 student storage service! We pick up, store, and deliver. Free boxes and tape. Starting at $5/month. Upfront pricing.",
		link: 'https://milkcowcafe.ca/',
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
];

const rainbow = rainbowSVG;

export { PARTNERS, rainbow };
