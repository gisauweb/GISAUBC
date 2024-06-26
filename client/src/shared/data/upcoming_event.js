import { EVENTS_24_25 } from 'assets/events-page/past-events';
import hiring from 'assets/events-page/hiring.pdf';

const UPCOMING_EVENTS = [
	{
		image: EVENTS_24_25[0],
		title: 'Summer Hiring',
		date: 'Monday, July 1 | 11:59PM',
		loc: 'Submit Via Email',
		registrationLink: 'https://drive.google.com/file/d/1QO74HYHxK4CHa-2WXFeJpf_u78X0idA4/view?usp=sharing',
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
