import { EVENTS_23_24 } from 'assets/events-page/past-events';
import malming from 'assets/events-page/malming.pdf';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_23_24[6],
		title: 'Study Cafe',
		date: 'Wednesday, December 6 | 1-5:30PM',
		loc: 'AMS Lev Bukhman (Bird Nest)',
		registrationLink: malming,
		infoLink: malming,
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
