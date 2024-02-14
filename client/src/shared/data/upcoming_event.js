import { EVENTS_23_24 } from 'assets/events-page/past-events';
import MOLE from 'assets/events-page/MOLE.pdf';
import FIFA from 'assets/events-page/FIFA.pdf';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_23_24[8],
		title: 'Bermain Bersama GISAU (Mobile Legends)',
		date: 'February 9-11',
		loc: 'Online',
		registrationLink: 'https://forms.gle/pJjdw5Ac5B7MdnbPA',
		infoLink: MOLE,
	},
	{
		image: EVENTS_23_24[8],
		title: 'Bermain Bersama GISAU (FIFA 23)',
		date: 'February 11 | 12-4PM',
		loc: 'Metrotown',
		registrationLink: 'https://forms.gle/ggF7TUsArMX7Rai96',
		infoLink: FIFA,
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
