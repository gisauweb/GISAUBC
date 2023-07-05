import rantangan from 'assets/home-page/events/rantangan.svg';
import upcomingEvent from 'assets/home-page/events/upcoming_event.svg';

/**
 * events field:
 * - desc
 * - img
 * - link
 */

export const UPCOMINGEVENTS = {
	title: 'Upcoming Events',
	events: '',
	icon: <img src={upcomingEvent} alt='' className='ml-[25%] w-[80%] sm:ml-[35%] sm:w-full' />,
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
