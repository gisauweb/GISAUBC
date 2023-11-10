import { EVENTS_23_24 } from 'assets/events-page/past-events';
import malming from 'assets/events-page/malming.pdf';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_23_24[5],
		title: 'Malem Mingguan',
		date: 'Saturday, November 18 | 4:30PM',
		loc: 'Consulate General of Indonesia (KJRI)',
		registrationLink: 'https://forms.gle/rDxe3Ho5aJn9aBiN9',
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
