import { EVENTS_24_25 } from 'assets/events-page/past-events';
import infoAgm from 'assets/events-page/infoAgm.pdf';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_24_25[9],
		title: 'Annual General Meeting',
		date: 'Thursday, March 27 | 5:30PM - end',
		loc: 'Asian Centre',
		registrationLink:
			'https://docs.google.com/forms/d/e/1FAIpQLSfVH0B4QYpNr-1NTpGMYJHyt8rpvb-sPkWXxKXu6fJcANBY9w/viewform',
		infoLink: infoAgm,
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
