import { EVENTS_25_26 } from 'assets/events-page';
// import { RANTANGAN_24_25 } from 'assets/rantangan-page';
// import infoFile from 'assets/rantangan-page/info.pdf';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_25_26[4],
		title: 'Fall Hiring',
		caption: `We’re FALLing for YOU… because GISAU Fall Hiring is finally open! 🍁🫂

Are you looking for a home away from home? 🏡
Want to make new friends 🤝 and make memories with the BEST team ever? 📸

If so... we want YOU in GISAU! 🇮🇩❤️

We’re hiring for:
🎉 Events Coordinator
🎨 Creative Coordinator
💻 UI/UX Designer
🌐 Webmaster
🍳 F&B Coordinator

🗓️ Applications close Friday, October 10th, 2025 at 11:59PM PST!

(For any hiring-related inquiries, DM us or email contact.gisau@gmail.com)`,
		// date: 'August 1th | 11:59PM PDT',
		loc: 'Online',
		registrationLink: 'https://forms.gle/XTprZog16sn8g71J7',
		isEvent: true,
		infoLink: 'https://drive.google.com/file/d/1FJk_yMbl3MIIHhSYIQ92RRuAqKCA6up4/view?usp=sharing',
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
