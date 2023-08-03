import ubud from 'assets/home-page/events/ubud.jpeg';
import ubudRundown from 'assets/home-page/events/ubud_rundown.pdf';

const UPCOMING_EVENTS = [
	{
		image: ubud,
		title: 'UBUD: UBC Udah Dekat',
		date: 'Friday, August 4 | 8-9:40 PM',
		loc: 'Online on Zoom',
		registerLink: 'forms.gle/AXqcbDGtKBBiHCqX6',
		infoLink: ubudRundown,
	},
];

export default UPCOMING_EVENTS;

// upcoming event's template:
// {
// 		image: EVENTS_22_23[0],
// 		title: 'SEA Pit Night',
// 		date: 'Wednesday, April 8 | 9PM-1AM',
// 		loc: 'The Pit Pub @ UBC',
// 		link: 'google.com',
// },
