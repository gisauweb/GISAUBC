import rantangan from 'assets/home-page/events/rantangan.svg';
import upcomingEvent from 'assets/home-page/events/upcoming_event.svg';
import ubud from 'assets/home-page/events/ubud.jpeg';

/**
 * events field:
 * - desc
 * - img
 * - link
 */

export const UPCOMINGEVENTS = {
	title: 'Upcoming Events',
	events: [
		{
			title: 'UBUD: UBC Udah Dekat',
			desc: ['Friday, August 4 | 8-9:40 PM', 'Online on Zoom'],
			img: <img src={ubud} alt='UBUD: UBC Udah Dekat' />,
			link: 'forms.gle/AXqcbDGtKBBiHCqX6',
		},
	],
	icon: <img src={upcomingEvent} alt='' className='ml-[25%] w-[80%] sm:ml-[35%] sm:w-full' />,
	button1: 'Register',
	button2: {
		name: 'View past events',
		path: 'events',
	},
};

export const RANTANGAN = {
	title: 'Rantangan',
	events: [],
	icon: <img src={rantangan} alt='' className='ml-1/10' />,
	button1: 'Pre-order',
	button2: {
		name: 'View past menus',
		path: 'rantangan',
	},
};
