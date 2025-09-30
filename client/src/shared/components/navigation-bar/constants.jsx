import Home from 'app/home/Home';
import Events from 'app/events/Events';
import Partners from 'app/partners/Partners';
import Rantangan from 'app/rantangan/Rantangan';
import About from 'app/about/About';
import Games from 'app/games/Games';
import Members from 'app/members/Members';

export const pages = [
	{
		name: 'Home',
		path: '/',
		hasLandingImage: true,
		element: <Home />,
	},
	{
		name: 'About',
		path: '/about',
		hasLandingImage: true,
		element: <About />,
	},
	{
		name: 'Events',
		path: '/events',
		hasLandingImage: true,
		element: <Events />,
	},
	{
		name: 'Rantangan',
		path: '/rantangan',
		hasLandingImage: true,
		element: <Rantangan />,
	},
	{
		name: 'Partners',
		path: '/partners',
		hasLandingImage: true,
		element: <Partners />,
	},
	{
		name: 'Games',
		path: '/games',
		hasLandingImage: false,
		element: <Games />,
	},
];

export const button = [
	{
		name: 'Members',
		path: '/members',
		hasLandingImage: true,
		element: <Members />,
	},
];
