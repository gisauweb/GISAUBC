import upcomingEvent from 'assets/home-page/events/upcoming_event.svg';
// import { useNavigate } from 'react-router-dom';
import SubHeading from 'shared/components/SubHeading';
import UPCOMING_EVENTS from 'shared/data/upcoming_event';
// import Button from '../../components/button/Button';
import './EventLayout.css';
import { Link } from 'react-router-dom';
import { Button } from 'shared/components';

function EventCards({ isEvent }) {
	const eventDatas = UPCOMING_EVENTS[0];
	return (
		<div className='flex flex-col w-fit'>
			<img src={eventDatas.image} alt='' className='aspect-square w-full md:w-[440px] object-fill' />
			<div className='flex flex-col sm:flex-row justify-start sm:justify-between items-center'>
				<div className='flex flex-col space-y-2 w-full sm:w-3/4'>
					<p className='font-oswald text-primary font-medium'>{isEvent ? 'EVENT' : 'RANTANGAN'}</p>
					<p className='font-oswald font-semibold text-3xl'>{eventDatas.title}</p>
					<p className='text-sm bg-bgCream w-fit px-2 rounded-md'>{eventDatas.date}</p>
					<p className='text-sm bg-bgCream w-fit px-2 rounded-md'>{eventDatas.time}</p>
					<p className='text-sm bg-bgCream w-fit px-2 rounded-md'>{eventDatas.loc}</p>
				</div>
				<Link to='/events' className='relative w-full sm:w-7/12 mt-5 sm:mt-0'>
					<Button text={isEvent ? 'Register Now' : 'Order Now'} className='w-full text-start' />
				</Link>
			</div>
		</div>
	);
}

export default function EventLayout(props) {
	const { id } = props;
	// const navigate = useNavigate();

	// const handleClickButton = (link) => {
	// 	ReactGA.event({
	// 		category: 'Event',
	// 		action: 'Clicked register for GISAU Hiring',
	// 	});
	// 	window.open(link, '_blank', 'noreferrer');
	// };

	// const handleClickButton2 = () => {
	// 	navigate(button2.path);
	// };

	return (
		<div className='w-full' id={id}>
			<SubHeading text='UPCOMING'>
				<div className='absolute top-0 -left-10 lg:-left-14'>
					<img src={upcomingEvent} alt='Sunshine' className='h-10 lg:h-full' loading='lazy' />
				</div>
			</SubHeading>
			<div className='mt-10 flex flex-col lg:flex-row justify-start items-center gap-8'>
				<EventCards isEvent />
				<EventCards isEvent={false} />
			</div>
			{/* VIEW PAST EVENTS BUTTON */}
			{/* <div className={`grid justify-center lg:w-[95%] ${events.length === 0 ? 'mt-12' : 'mt-4'} `}>
				<Button text={button2.name} background='transparentBg' handleClickButton={handleClickButton2} />
			</div> */}
		</div>
	);
}
