import { EVENTS_24_25 } from 'assets/events-page/past-events';
import liwetan from 'assets/events-page/liwetan.pdf';

const link = 'https://docs.google.com/forms/d/e/1FAIpQLScI6tJlEQ-EBCtcNQfhKh0WcHRXWvdciM5yiMC_jV0HQVuVXA/viewform';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_24_25[5],
		title: 'Liwetan',
		date: 'Friday, November 8 | 5:30PM',
		loc: 'Consulate General of Indonesia (KJRI)',
		registrationLink: link,
		infoLink: liwetan,
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
