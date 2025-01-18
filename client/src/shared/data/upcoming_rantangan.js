import { RANTANGAN_24_25 } from 'assets/rantangan-page/past-rantangan';
import infoFile from 'assets/rantangan-page/info.pdf';

const UPCOMING_RANTANGAN = [
	{
		image: RANTANGAN_24_25[0],
		title: 'Bakso Malang',
		description: 'Pickup Date: Friday, January 24 | 12-4PM',
		loc: 'UBC AMS Student Nest',
		price: '$13 for GISAU members, $15 for non-members',
		registrationLink: 'https://forms.gle/6744yakAveEV7d4j7',
		infoLink: infoFile,
	},
];
export default UPCOMING_RANTANGAN;

// upcoming rantangan's template:
// {
//     image: RANTANGAN_24_25[0],
//     title: 'Bakso Malang',
//     description: 'Friday, January 24 | 12-4PM',
//     loc: 'UBC AMS Student Nest',
//     price: '$13 for GISAU members, $15 for non-members',
//     registrationLink: '',
//     infoLink: infoFile,
// },
