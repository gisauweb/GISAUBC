import Home from 'pages/home/Home';
import Events from 'pages/events/Events';
import Partners from 'pages/partners/Partners';
import Rantangan from 'pages/rantangan/Rantangan';
import About from 'pages/about/About';
import Games from 'pages/games/Games';
import Members from 'pages/members/Members';

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
