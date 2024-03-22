import { EVENTS_23_24 } from 'assets/events-page/past-events';
import agm from 'assets/events-page/AGM.pdf';
import lanusa from 'assets/events-page/lanusa.pdf';

const UPCOMING_EVENTS = [
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
	{
		image: EVENTS_23_24[12],
		title: 'LA NUSA',
		date: 'Saturday, March 23 | 10PM',
		loc: 'AURA Nightclub (Downtown)',
		registrationLink:
			// eslint-disable-next-line max-len
			'https://docs.google.com/forms/d/e/1FAIpQLScwEwNidJrym2XqL1Tfx_j0pYcwpnO_CDK-6pzNy-E2vmJQIA/viewform?usp=sf_link',
		infoLink: lanusa,
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
