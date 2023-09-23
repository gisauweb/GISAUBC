/* eslint-disable max-len */
import { EVENTS_23_24 } from 'assets/events-page/past-events';
import soto from 'assets/events-page/past-events/23_24/soto.pdf';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_23_24[2],
		title: 'SOTO: Sobat Tongkrongan',
		date: 'Wednesday, 4 October 2023 | 6:30PM',
		loc: 'UBC Asian Centre Auditorium',
		registrationLink: 'https://forms.gle/xcWs5sQ5otxwn7GV6',
		infoLink: soto,
	},
];

export default UPCOMING_EVENTS;

// upcoming event's template:
// {
// 		image: EVENTS_22_23[0],
// 		title: 'SEA Pit Night',
// 		date: 'Wednesday, April 8 | 9PM-1AM',
// 		loc: 'The Pit Pub @ UBC',
// 		registrationLink: 'google.com',
// 		infoLink: pdffile,
// },
