import { EVENTS_24_25 } from 'assets/events-page/past-events';
const link = 'https://docs.google.com/forms/d/e/1FAIpQLSeaHgZWC-FZyplz082yRw1G7BaqZjFGOPboKiB1HjfF2jq2ZQ/viewform';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_24_25[5],
		title: 'Exam Care Package',
		date: 'Tuesday & Wednesday, December 3-4 | 12-3PM',
		loc: 'AMS Nest',
		registrationLink: link,
		infoLink: examCarePackage,
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
