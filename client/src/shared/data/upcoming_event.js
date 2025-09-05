import { EVENTS_25_26 } from 'assets/events-page';
// import { RANTANGAN_24_25 } from 'assets/rantangan-page';
// import infoFile from 'assets/rantangan-page/info.pdf';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_25_26[2],
		title: 'KUY!',
		caption: `Are you a first-year student? An international student new to Vancouver? Or just someone looking to connect with RBC industry professionals?

You're in luck! GISAU is teaming up with RBC (the Royal Bank of Canada) for a fun & beginner-friendly session on:
🏦 Opening a bank account
📊 Saving & investing basics
🧠 Smart student money habits

When & Where?
🗓 Thursday, Sept 11, 2025
🕔 5:00 – 6:40 PM PDT
📍 Room 2306/2309, AMS Nest | UBC Vancouver

📢 RSVP by September 10 to save your spot!
Let’s take the first step to financial independence together 🫰🇨🇦`,
		// date: 'August 1th | 11:59PM PDT',
		loc: 'AMS Nest',
		registrationLink:
			'https://docs.google.com/forms/d/e/1FAIpQLSd_ZnNHJB9YR6XAIvpKWPwONgrUeGUmJJ5P3vrv9jnDhkK9KQ/viewform?fbclid=PAdGRleAMnRUNleHRuA2FlbQIxMQABpz0auZShiLoNhbtCFd9DCMk3fDxysBTUj_1xK7nRUIQgrlVG8ze_z1HLIvMP_aem_B8swQbTuZW3oGC9a5iHdJQ',
		isEvent: true,
		// infoLink: '/past-events/package.pdf',
	},
];

export default UPCOMING_EVENTS;

// upcoming event's template:
// {
// 	image: EVENTS_23_24[4],
// 	title: 'Rumah Hantu',
//  caption: ``,
// 	date: 'October 27th | 3-8:30PM',
//  time: '', optional
// 	loc: 'AMS Nest Room 2314',
// 	registrationLink: 'https://forms.gle/rDxe3Ho5aJn9aBiN9',
//  isEvent: true,
// 	infoLink: '/past-events/package.pdf',
// },

// upcoming rantangan's tempalte:
// {
// 	image: RANTANGAN_24_25[0],
// 	title: 'Bakso Malang',
// 	caption: `Pre-order our Rawon Rice Bowls 🍲
// Made with love by our amazing F&B team!`,
// 	date: 'June 7th | 11:59PM PDT',
//  time: '', optional
// 	loc: 'AMS NEST',
// 	priceMember: '$13',
// 	priceRegular: '$15',
// 	registrationLink: 'https://forms.gle/gETkqXraA23afTTv8',
// 	isEvent: false,
// 	infoLink: '/past-events/package.pdf',
// },
