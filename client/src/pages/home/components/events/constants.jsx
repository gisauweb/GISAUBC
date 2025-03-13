import rantangan from 'assets/home-page/events/rantangan.svg';
import upcomingEvent from 'assets/home-page/events/upcoming_event.svg';
import UPCOMING_EVENTS from 'shared/data/upcoming_event';
import UPCOMING_RANTANGAN from 'shared/data/upcoming_rantangan';

/**
 * events field:
 * - desc
 * - img
 * - link
 */

export const UPCOMINGEVENTS = {
	title: 'Upcoming Events',
	events: UPCOMING_EVENTS,
	icon: <img src={upcomingEvent} alt='' className='ml-[25%] w-[80%] sm:ml-[35%] sm:w-full' loading='lazy' />,
	button1: 'View Hiring Package',
	button2: {
		name: 'View Past Events',
		path: 'events',
	},
};

export const RANTANGAN = {
	title: 'Rantangan',
	events: UPCOMING_RANTANGAN,
	icon: <img src={rantangan} alt='' className='ml-1/10' loading='lazy' />,
	button1: 'Pre-order',
	button2: {
		name: 'View Past Menus',
		path: 'rantangan',
	},
};
