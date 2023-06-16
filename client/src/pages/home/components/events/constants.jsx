import rantangan from 'assets/home-page/events/rantangan.svg';
import upcomingEvent from 'assets/home-page/events/upcoming_event.svg';
import summerHiring from 'assets/home-page/events/summer_hiring.jpeg';

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
			title: 'Summer Hiring',
			desc: ['Now - June 6 11:59 PM'],
			img: <img src={summerHiring} alt='Summer Hiring' />,
			link: 'drive.google.com/file/d/1pznE1l3oLW-n5KpCiyQ6UWNShFJgJ-fQ/view?usp=drive_link',
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
