import upcomingEvent from 'assets/home-page/events/upcoming_event.svg';
import SubHeading from 'shared/components/SubHeading';
import eventDatas from 'shared/data/upcoming_event';
import { Link } from 'react-router-dom';
import { Button } from 'shared/components';
import './EventLayout.css';

function EventCards({ data }) {
	return (
		<div className='flex flex-col w-fit'>
			<img src={data.image} alt='' className='aspect-square object-cover w-full md:w-[440px] ' />
			<div className='flex flex-col sm:flex-row justify-start sm:justify-between items-center'>
				<div className='flex flex-col space-y-2 w-full sm:w-fit'>
					<p className='font-oswald text-primary font-medium'>{data.isEvent ? 'EVENT' : 'RANTANGAN'}</p>
					<p className='font-oswald font-semibold text-3xl'>{data.title}</p>
					<p className='text-sm bg-bgCream w-fit px-2 rounded-md'>{data.date}</p>
					<p className='text-sm bg-bgCream w-fit px-2 rounded-md'>{data.time}</p>
					<p className='text-sm bg-bgCream w-fit px-2 rounded-md'>{data.loc}</p>
				</div>
				<Link to='/events' className='relative w-full sm:w-6/12 mt-5 sm:mt-0'>
					<Button text={data.isEvent ? 'Register Now' : 'Order Now'} className='w-full text-start' />
				</Link>
			</div>
		</div>
	);
}

export default function EventLayout() {
	return (
		<div className='w-full'>
			<SubHeading text='UPCOMING' isLeft icon={upcomingEvent} />
			<div className='mt-10 flex flex-col lg:flex-row justify-start items-center gap-8'>
				{eventDatas.length >= 1 ? (
					eventDatas.map((data) => <EventCards key={data.date} data={data} />)
				) : (
					<div className='w-full text-center'>
						<h3 className='font-oswald font-bold text-bgBlack opacity-70 text-3xl sm:text-4xl md:text-5xl'>
							Stay tuned for more excitement!
						</h3>
						<div className='flex flex-col md:flex-row justify-center gap-4 md:gap-10 mt-14'>
							<Link to='/events' className='relative w-full lg:w-4/12 mt-5 sm:mt-0'>
								<Button text='View Past Events' className='w-full text-base md:text-lg' />
							</Link>
							<Link to='/rantangan' className='relative w-full lg:w-4/12 mt-5 sm:mt-0'>
								<Button text='View Past Rantangan' className='w-full text-base md:text-lg' />
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
