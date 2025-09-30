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
		header: '15+',
		title: 'annual lively events and festivals',
		description:
			'From back-to-campus welcoming parties, Indomie eating competitions, to one of the biggest student-led Indonesian festivals in Vancouver, we strive to provide enjoyable experiences for you all!',
		icon: stars,
		iconStyle: 'right-0 -top-[15%]',
	},
	{
		id: 1,
		image: activity2,
		header: '1000+',
		title: 'members connected',
		description:
			'Bringing together students, professionals, and newcomers, we’ve fostered a thriving community that celebrates Indonesian culture, builds connections, and creates lasting friendships.',
		icon: pencil,
		iconStyle: '-bottom-[2%] -right-[1%]',
	},
	{
		id: 2,
		image: activity3,
		header: '200+',
		title: 'Indonesian delicacies shared',
		description:
			'Showcasing the rich flavors of Indonesia, we’ve delighted our community with traditional dishes like rendang and klepon, creating memorable experiences at our events and festivals.',
		icon: klepon,
		iconStyle: '-top-1/5 -left-[2%]',
	},
];

const smiley = smileySVG;

export { activities, smiley };
