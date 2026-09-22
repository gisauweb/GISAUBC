export const FACULTIES = [
	'Arts',
	'Science',
	'Engineering',
	'Sauder',
	'Land & Food Systems',
	'Kinesiology',
	'Forestry',
	'Pharmaceutical Science',
	'Other',
];
export const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th+ Year', 'Graduate'];

const _now = new Date();
const _startYear = _now.getMonth() >= 8 ? _now.getFullYear() : _now.getFullYear() - 1; // Sept = month 8
const _endYear = _startYear + 1;

export const MEMBERSHIP_TYPES = [
	{ id: 'full', label: `Full term membership (September ${_startYear} - April ${_endYear})`, price: 9 },
	{ id: 'sem1', label: `Half term membership (September ${_startYear} - December ${_startYear})`, price: 5 },
	{ id: 'sem2', label: `Half term membership (January ${_endYear} - April ${_endYear})`, price: 5 },
];
