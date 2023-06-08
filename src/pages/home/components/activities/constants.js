import activity1 from 'assets/home-page/activities/img_1.svg';
import activity2 from 'assets/home-page/activities/img_2.svg';
import activity3 from 'assets/home-page/activities/img_3.svg';
import smileySVG from 'assets/home-page/activities/smiley.svg';
import stars from 'assets/home-page/activities/stars.svg';
import pencil from 'assets/home-page/activities/pencil.svg';
import klepon from 'assets/home-page/activities/klepon.svg';

const activities = [
	{
		id: 0,
		image: activity1,
		title: 'Organize lively events',
		description: `From back-to-campus welcoming parties, 
			Indomie eating competitions, 
			to charity-based challenges and picnic socials, 
			we strive to provide enjoyable experiences for attendees!`,
		alignment: 'start',
		icon: stars,
		iconStyle: 'right-0 -top-[15%]',
	},
	{
		id: 1,
		image: activity2,
		title: 'Host informational workshops',
		description: `Gain co-op/industry insights and join inspiring career-based talks
			with current Indonesian students, alumni and professionals!`,
		alignment: 'center',
		icon: pencil,
		iconStyle: '-bottom-[2%] -right-[1%]',
	},
	{
		id: 2,
		image: activity3,
		title: 'Share Indonesian delicacy',
		description: `Experience a taste of Indonesian cuisine through our monthly Rantangan 
			and annual Taste of Sea event (in collaboration with UBC ASEAC).`,
		alignment: 'end',
		icon: klepon,
		iconStyle: '-top-1/5 -left-[2%]',
	},
];

const smiley = smileySVG;

export { activities, smiley };
