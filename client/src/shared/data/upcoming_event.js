import { EVENTS_23_24 } from 'assets/events-page/past-events';
import hiring from 'assets/events-page/gisau_core_hiring_package.pdf';
import agm from 'assets/events-page/AGM.pdf';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_23_24[10],
		title: 'GISAU Core 2024/25 Hiring',
		date: 'Until March 14th, 2024',
		loc: 'Online (See PDF for details)',
		registrationLink: hiring,
		infoLink: hiring,
	},
	{
		image: EVENTS_23_24[11],
		title: "GISAU's Annual General Meeting",
		date: 'Friday, March 22 | 6PM',
		loc: 'AMS Nest Room 2306/2309',
		registrationLink:
			// eslint-disable-next-line max-len
			'https://docs.google.com/forms/d/e/1FAIpQLSfC7t4EqAPzbHNciAFSAlJYTUweqsLyzrOhxxnvYUN155L3uQ/viewform?usp=sf_link',
		infoLink: agm,
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
