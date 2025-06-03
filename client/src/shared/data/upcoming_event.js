import { EVENTS_25_26 } from 'assets/events-page';
// import { RANTANGAN_24_25 } from 'assets/rantangan-page';
// import infoFile from 'assets/rantangan-page/info.pdf';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_25_26[0],
		title: 'Summer Hiring',
		caption: `☀️ Look up! It’s a bird! It’s a plane! It’s a GISAU HIRING POST!☀️
The sun’s out, and so are GISAU’s available positions for the 2025/2026 school year! 

This summer, we’re hiring for:
🎨 Creative Director
🎨 Creative Coordinator
📸 Content Creator
💻 Web Developer
🧩 UI/UX Designer
🫂 Outreach Coordinator 
🎉 Events Coordinator
🔗 Sponsorship Coordinator
🍽️ F&B Coordinator

We are accepting applications until Saturday, June 7th, 2025 at 11:59pm PDT 🗓️`,
		date: 'June 7th | 11:59PM PDT',
		loc: 'Online',
		registrationLink: 'https://forms.gle/gETkqXraA23afTTv8',
		isEvent: true,
		infoLink: '/past-events/package.pdf',
	},
];

export default UPCOMING_EVENTS;

// upcoming event's template:
// {
// 	image: EVENTS_23_24[4],
// 	title: 'Rumah Hantu',
// 	date: 'Wednesday, October 27 | 3-8:30PM',
// 	loc: 'AMS Nest Room 2314',
// 	registrationLink: 'https://forms.gle/rDxe3Ho5aJn9aBiN9',
//  isEvent: false, true = an event & false = a rantangan
// 	infoLink: 'ruhan',
// },
