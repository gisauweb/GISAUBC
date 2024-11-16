import Home from 'pages/home/Home';
import Events from 'pages/events/Events';
import Partners from 'pages/partners/Partners';
import Rantangan from 'pages/rantangan/Rantangan';
import About from 'pages/about/About';
// import ContactUs from 'pages/contacts/ContactUs';
import Games from 'pages/games/Games';

const pages = [
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
	// {
	// 	name: 'Contact Us',
	// 	path: '/contact-us',
	// 	hasLandingImage: false,
	// 	element: <ContactUs />,
	// },
	{
		name: 'Games',
		path: '/games',
		hasLandingImage: false,
		element: <Games />,
	},
];

export default pages;
