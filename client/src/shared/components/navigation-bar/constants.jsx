import About from 'pages/about/About';
import Events from 'pages/events/Events';
import WorkInProgress from 'pages/404/WorkInProgress';
import Home from 'pages/home/Home';
import Members from 'pages/members/Members';
import Partners from 'pages/partners/Partners';
import Rantangan from 'pages/rantangan/Rantangan';

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
		path: '/wip',
		hasLandingImage: false,
		element: <WorkInProgress />,
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
