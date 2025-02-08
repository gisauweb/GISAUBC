/* eslint-disable max-len */
import rainbowSVG from 'assets/home-page/rainbow.svg';
import bananaLeaf from 'assets/partners/bananaLeaf.svg';
import honeydewLabs from 'assets/partners/honeydewLabs.svg';
import indomie from 'assets/partners/indomie.svg';
import prestigeOptical from 'assets/partners/prestigeOptical.svg';
import stevesPoke from 'assets/partners/steves.svg';
import storageHotel from 'assets/partners/storageHotel.svg';
import wizePrep from 'assets/partners/wizeprep.svg';

const PARTNERS = [
	{
		name: 'Banana Leaf Vancouver',
		logo: bananaLeaf,
		description:
			'Banana Leaf is a journey through Malaysian and Southeast Asian flavors and hospitality. Founded in 1995, we’ve grown from a cozy spot to five locations across Metro Vancouver. Blending Malaysian roots with influences from Indonesia, Singapore, Thailand, China, and India, we offer unique dishes bursting with diverse flavors.',
		link: 'https://www.bananaleaf-vancouver.com/',
		yearlong: true,
	},
	{
		name: 'Honeydew Labs',
		logo: honeydewLabs,
		description:
			'Founded by two UBC Sauder alumni, Honeydew Labs is dedicated to delivering natural, proven skincare ingredients that are effortlessly enjoyable for daily use. We firmly believe that skincare should be a delightful journey, fostering self-love and empowerment, while leaving unrealistic standards of perfection behind.',
		link: 'https://www.honeydewlabs.com/',
		yearlong: true,
	},
	{
		name: 'Indomie',
		logo: indomie,
		description:
			'Indomie is produced by Indofood, the pioneer of instant noodles in Indonesia and is one of the largest instant noodles manufacturers in the world. Indomie comes in many varieties from our classic soup flavours to our most popular dry noodle flavour Indomie Mi Goreng!',
		link: 'https://indomieonline.ca/',
		yearlong: true,
	},
	{
		name: 'Prestige Optical',
		logo: prestigeOptical,
		description:
			'Prestige Optical is a one stop boutique optical store located in Kitsilano, Vancouver, founded and operated by Licensed Opticians with over 70 years of lineage in vision care providing high-quality eye care and fashionable eyewear.',
		link: 'https://prestigeoptical.ca/',
		yearlong: true,
	},
	{
		name: "Steve's Poke bar",
		logo: stevesPoke,
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
		link: 'https://www.storagehotel.ca/',
		yearlong: true,
	},
	{
		name: 'Wizeprep',
		logo: wizePrep,
		description:
			'Wizeprep is an all-in-one education platform offering instant online access to course-tailored university exam-prep, tutorials, expert tutors, and many more study tools. This cutting-edge platform delivers a seamless learning experience stocked with all the tools needed to help students reach their full academic potential.',
		link: 'https://www.wizeprep.com/',
		yearlong: true,
	},
];

const rainbow = rainbowSVG;

export { PARTNERS, rainbow };
