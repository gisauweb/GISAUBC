import { EVENTS_23_24 } from 'assets/events-page/past-events';
import hiring from 'assets/events-page/gisau_core_hiring_package.pdf';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_23_24[10],
		title: 'GISAU Core 2024/25 Hiring',
		date: 'Until March 14th, 2024',
		loc: 'Online (See PDF for details)',
		registrationLink: hiring,
		infoLink: hiring,
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
