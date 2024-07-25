import { EVENTS_24_25 } from 'assets/events-page/past-events';
import ubud from 'assets/events-page/ubud.pdf';

const link = 'https://docs.google.com/forms/d/e/1FAIpQLScGKKv3lGiwqnB6S0wfAJGLFS-ywHWNMIiHEXP03BITOD9iSQ/viewform';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_24_25[1],
		title: 'UBUD: UBC Udah Dekat',
		date: 'Friday, August 2 | 8:00PM PDT',
		loc: 'Online on Zoom',
		registrationLink: link,
		infoLink: ubud,
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
// 	infoLink: ruhan,
// },
