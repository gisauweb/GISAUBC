import upcomingEvent from 'assets/home-page/events/upcoming_event.svg';
import SubHeading from 'shared/components/SubHeading';
import eventDatas from 'shared/data/upcoming_event';
import { Link } from 'react-router-dom';
import { Button } from 'shared/components';
import './EventLayout.css';

function EventCards({ data }) {
	return (
		<div className='flex flex-col w-fit'>
			<img src={data.image} alt='' className='aspect-square w-full md:w-[440px] object-fill' />
			<div className='flex flex-col sm:flex-row justify-start sm:justify-between items-center'>
				<div className='flex flex-col space-y-2 w-full sm:w-3/4'>
					<p className='font-oswald text-primary font-medium'>{data.isEvent ? 'EVENT' : 'RANTANGAN'}</p>
					<p className='font-oswald font-semibold text-3xl'>{data.title}</p>
					<p className='text-sm bg-bgCream w-fit px-2 rounded-md'>{data.date}</p>
					<p className='text-sm bg-bgCream w-fit px-2 rounded-md'>{data.time}</p>
					<p className='text-sm bg-bgCream w-fit px-2 rounded-md'>{data.loc}</p>
				</div>
				<Link to='/events' className='relative w-full sm:w-7/12 mt-5 sm:mt-0'>
					<Button text={data.isEvent ? 'Register Now' : 'Order Now'} className='w-full text-start' />
				</Link>
			</div>
		</div>
	);
}

export default function EventLayout() {
	return (
		<div className='w-full'>
			<SubHeading text='UPCOMING'>
				<div className='absolute top-0 -left-10 lg:-left-14'>
					<img src={upcomingEvent} alt='Sunshine' className='h-10 lg:h-full' loading='lazy' />
				</div>
			</SubHeading>
			<div className='mt-10 flex flex-col lg:flex-row justify-start items-center gap-8'>
				{eventDatas.length >= 1 ? (
					eventDatas.map((data) => <EventCards key={data.date} data={data} />)
				) : (
					<div className='w-full text-center'>
						<h3 className='font-oswald font-bold text-bgBlack opacity-70 text-5xl'>
							Stay tuned for more excitement!
						</h3>
						<div className='flex justify-center gap-x-10 mt-14'>
							<Link to='/events' className='relative w-4/12 mt-5 sm:mt-0'>
								<Button text='View Past Events' className='w-full' />
							</Link>
							<Link to='/rantangan' className='relative w-4/12 mt-5 sm:mt-0'>
								<Button text='View Past Rantangan' className='w-full' />
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
