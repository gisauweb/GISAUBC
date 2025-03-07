import { RANTANGAN_24_25 } from 'assets/rantangan-page/past-rantangan';
import infoFile from 'assets/rantangan-page/info.pdf';

const UPCOMING_RANTANGAN = [
	{
		image: RANTANGAN_24_25[1],
		title: 'Nasi Padang',
		description: 'Friday, March 14 | 12-4PM',
		loc: 'UBC AMS Student Nest',
		price: '$13 for GISAU members, $15 for non-members',
		registrationLink:
			'https://docs.google.com/forms/d/e/1FAIpQLSc6eYoAFodZ-m0EbFH-H7Hmogl8ae7-koP-hJMu7o5cszd6nQ/viewform',
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
