import Home from 'pages/home/Home';
import Events from 'pages/events/Events';
import Partners from 'pages/partners/Partners';
import Rantangan from 'pages/rantangan/Rantangan';
import About from 'pages/about/About';

const pages = [
	{
		name: 'Home',
		path: '',
		hasLandingImage: true,
		element: <Home />,
	},
	{
		name: 'About',
		path: 'about',
		hasLandingImage: true,
		element: <About />,
	},
	{
		name: 'Events',
		path: 'events',
		hasLandingImage: true,
		element: <Events />,
	},
	{
		name: 'Rantangan',
		path: 'rantangan',
		element: <Rantangan />,
	},
	{
		name: 'Partners',
		path: 'partners',
		hasLandingImage: true,
		element: <Partners />,
	},
];

const tempPages = [
	{
		name: 'Contact',
		path: '#contact',
	},
];

export { pages, tempPages };
