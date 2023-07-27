import rantangan from 'assets/home-page/events/rantangan.svg';
import upcomingEvent from 'assets/home-page/events/upcoming_event.svg';
import rantanganImage from 'assets/home-page/events/rantangan.png';

/**
 * events field:
 * - desc
 * - img
 * - link
 */

export const UPCOMINGEVENTS = {
	title: 'Upcoming Events',
	events: [],
	icon: <img src={upcomingEvent} alt='' className='ml-[25%] w-[80%] sm:ml-[35%] sm:w-full' />,
	button1: 'Register',
	button2: {
		name: 'View past events',
		path: 'events',
	},
};

export const RANTANGAN = {
	title: 'Rantangan',
	events: [
		{
			title: 'Rantangan 2023',
			desc: ['Description of rantangan. Ideally 2-4 sentences only. A maximum of 3 lines for content.'],
			img: <img src={rantanganImage} alt='UBUD: UBC Udah Dekat' />,
			link: 'forms.gle/AXqcbDGtKBBiHCqX6',
		},
	],
	icon: <img src={rantangan} alt='' className='ml-1/10' />,
	button1: 'Pre-order',
	button2: {
		name: 'View past menus',
		path: 'rantangan',
	},
};
