import instagram from 'assets/contact-us/instagram.svg';
import email from 'assets/contact-us/email.svg';
import selectedIG from 'assets/contact-us/selected_ig.png';
import selectedEmail from 'assets/contact-us/selected_email.png';

const PLUGS = [
	{
		icon: instagram,
		selectedIcon: selectedIG,
		name: 'Instagram',
		description: 'Explore our instagram posts.',
		handle: '@gisaubc',
		link: 'https://www.instagram.com/gisaubc',
	},
	{
		icon: email,
		selectedIcon: selectedEmail,
		name: 'Email',
		description: 'Shoot us an email.',
		handle: 'contact.gisau@gmail.com',
		link: 'mailto:contact.gisau@gmail.com',
	},
];

export default PLUGS;
