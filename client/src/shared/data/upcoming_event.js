import { EVENTS_24_25 } from 'assets/events-page';
import { RANTANGAN_24_25 } from 'assets/rantangan-page';
// import infoFile from 'assets/rantangan-page/info.pdf';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_24_25[4],
		title: 'Rumah Hantu',
		date: 'October 27, 2024',
		time: '3:00PM - 8:30PM',
		loc: 'AMS Nest Room 2314',
		registrationLink: 'https://forms.gle/rDxe3Ho5aJn9aBiN9',
		isEvent: true,
		// infoLink: ruhan,
	},
	{
		image: RANTANGAN_24_25[0],
		title: 'Rumah Hantu',
		date: 'October 27, 2024',
		time: '3:00PM - 8:30PM',
		loc: 'AMS Nest Room 2314',
		registrationLink: 'https://forms.gle/rDxe3Ho5aJn9aBiN9',
		isEvent: false,
		// infoLink: ruhan,
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
// 	infoLink: ruhan,
// },

// upcoming rantangan's template:
// {
//     image: RANTANGAN_24_25[0],
//     title: 'Bakso Malang',
//     description: 'Friday, January 24 | 12-4PM',
//     loc: 'UBC AMS Student Nest',
//     price: '$13 for GISAU members, $15 for non-members',
//     registrationLink: '',
//     infoLink: infoFile,
// },
