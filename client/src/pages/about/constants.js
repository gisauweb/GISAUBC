import EXECS_22_23 from 'assets/about/executives';

const BUTTONS = ['All', 'Core', 'Events', 'External', 'F&B', 'Marketing'];

const VISION_MISSION = [
	{
		vision: 'Diverse and Inclusive Community',
		mission: `We aim to create an Indonesian club at UBC that embraces diversity, respects individual identities,
			and celebrates Indonesian culture, fostering a sense of belonging for all members.`,
	},
	{
		vision: 'Fun and Engaging Activities',
		mission: `We aim to organize a variety of recreational and cultural events, 
		social gatherings, and outings that cater to diverse interests, 
		ensuring members have enjoyable experiences and create lasting memories.`,
	},
	{
		vision: "Members' Career Development",
		mission: `We aim to provide resources, workshops, and networking opportunities to 
			support our members in their academic and professional growth, equipping 
			them with skills, connections, and guidance for successful career paths.`,
	},
];

const EXECUTIVES = {
	'2023/2024': {
		Core: [],
		Events: [],
		External: [],
		'F&B': [],
		Marketing: [],
	},
	'2022/2023': {
		Core: [
			{
				name: 'Louistrycia Kho',
				position: 'President',
				department: 'Core',
				image: EXECS_22_23[15],
				education: '4th Year LFS',
			},
			{
				name: 'Iervinny Tanto',
				position: 'Vice President',
				department: 'Core',
				image: EXECS_22_23[4],
				education: '4th Year Commerce',
			},
			{
				name: 'Ian Christiawan Sentoso',
				position: 'Treasurer',
				department: 'Core',
				image: EXECS_22_23[3],
				education: '3rd Year Commerce',
			},
			{
				name: 'Josephine Kania Valyne',
				position: 'Secretary',
				department: 'Core',
				image: EXECS_22_23[10],
				education: '3rd Year Arts',
			},
			{
				name: 'Russell William Sumarno',
				position: 'Internal',
				department: 'Core',
				image: EXECS_22_23[22],
				education: '3rd Year Applied Science ',
			},
		],
		Events: [
			{
				name: 'Kihana Sasha Siswanto',
				position: 'Events Director',
				department: 'Events',
				image: EXECS_22_23[14],
				education: '2nd Year Arts',
			},
			{
				name: 'Sidney Lukito',
				position: 'Events Director',
				department: 'Events',
				image: EXECS_22_23[23],
				education: '2nd Year Commerce',
			},
			{
				name: 'Findytia Viandra',
				position: 'Events Coordinator',
				department: 'Events',
				image: EXECS_22_23[2],
				education: '2nd Year Arts',
			},
			{
				name: 'Jade Tjandra',
				position: 'Events Coordinator',
				department: 'Events',
				image: EXECS_22_23[6],
				education: '3rd Year LFS',
			},
			{
				name: 'Joanico Huang',
				position: 'Events Coordinator',
				department: 'Events',
				image: EXECS_22_23[8],
				education: '1st Year Commerce',
			},
			{
				name: 'Jonathan Santoso',
				position: 'Events Coordinator',
				department: 'Events',
				image: EXECS_22_23[9],
				education: '2nd Year Commerce',
			},
		],
		External: [
			{
				name: 'Nadya Rei',
				position: 'Corporate Relations Director',
				department: 'External',
				image: EXECS_22_23[18],
				education: '2nd Year LFS',
			},
			{
				name: 'Kent Jose',
				position: 'Sponsorship Coordinator',
				department: 'External',
				image: EXECS_22_23[13],
				education: '1st Year Arts',
			},
			{
				name: 'Vincent Danyo',
				position: 'Sponsorship Coordinator',
				department: 'External',
				image: EXECS_22_23[25],
				education: '3rd Year LFS',
			},
			{
				name: 'Rachel Tandjung',
				position: 'Outreach Director',
				department: 'External',
				image: EXECS_22_23[20],
				education: '4th Year Commerce',
			},
		],
		'F&B': [
			{
				name: 'Luna Tedjokusumo',
				position: 'F&B Director',
				department: 'F&B',
				image: EXECS_22_23[16],
				education: '2nd Year Applied Science',
			},
			{
				name: 'Christella Khosasih ',
				position: 'F&B Coordinator',
				department: 'F&B',
				image: EXECS_22_23[0],
				education: '2nd Year LFS ',
			},
			{
				name: 'Fernando Axel',
				position: 'F&B Coordinator',
				department: 'F&B',
				image: EXECS_22_23[19],
				education: '4th Year Commerce',
			},
		],
		Marketing: [
			{
				name: 'Kelly Milana Widjaja',
				position: 'Marketing Director',
				department: 'Marketing',
				image: EXECS_22_23[12],
				education: '4th Year LFS',
			},
			{
				name: 'Imelda Alimin',
				position: 'Creative Director',
				department: 'Marketing',
				image: EXECS_22_23[5],
				education: '3rd Year Commerce',
			},
			{
				name: 'Tavaella Gozali',
				position: 'Creative Coordinator',
				department: 'Marketing',
				image: EXECS_22_23[24],
				education: '1st Year LFS',
			},
			{
				name: 'Richelle Tan',
				position: 'Creative Coordinator',
				department: 'Marketing',
				image: EXECS_22_23[21],
				education: '1st Year Arts',
			},
			{
				name: 'Michelle TjondroSuharto ',
				position: 'Content Creator',
				department: 'Marketing',
				image: EXECS_22_23[17],
				education: '2nd Year Commerce',
			},
			{
				name: 'Julian Widjaja',
				position: 'Webmaster',
				department: 'Marketing',
				image: EXECS_22_23[11],
				education: '3rd Year Science',
			},
			{
				name: 'Christopher Hadrian Wong',
				position: 'Webmaster',
				department: 'Marketing',
				image: EXECS_22_23[1],
				education: '3rd Year Science',
			},
			{
				name: 'Jena Arianto',
				position: 'Webmaster',
				department: 'Marketing',
				image: EXECS_22_23[7],
				education: '3rd Year Arts',
			},
		],
	},
};

export { BUTTONS, EXECUTIVES, VISION_MISSION };
