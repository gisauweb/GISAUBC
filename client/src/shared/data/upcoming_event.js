import { EVENTS_25_26 } from 'assets/events-page';
// import { RANTANGAN_24_25 } from 'assets/rantangan-page';
// import infoFile from 'assets/rantangan-page/info.pdf';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_25_26[3],
		title: 'SOTO',
		caption: `Hey Thunderbirds... SOTO 2025 is FINALLY here! 🌟

From fun games 🤸‍♀️, huge prizes 🏆, to a free Indonesian dinner 😋, SOTO is the perfect chance for you to meet new friends, reconnect with old ones, and learn more about what GISAU has planned for the year. 

📍 AMS Nest Great Hall South
🕠 5:30PM – END
📅 Friday, Sept 26, 2025

So make sure you invite your Sobat Tongkrongan(s)! and start your school years the right way — with community, culture, and lots of laughter. Sampai jumpa, we’ll see you there! 👋

*This event is for GISAU Members only. Purchase your membership at the AMS Clubs Fair 💳`,
		// date: 'August 1th | 11:59PM PDT',
		loc: 'AMS Nest',
		registrationLink:
			'https://docs.google.com/forms/d/e/1FAIpQLScgRLJGYr_iI1t3470sgXFYJtNdneWHJXD0QfAjtJHms3Zpfw/viewform?usp=sharing&ouid=102355813688502067773',
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
