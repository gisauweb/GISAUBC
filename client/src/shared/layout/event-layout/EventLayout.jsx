import upcomingEvent from 'assets/home-page/events/upcoming_event.svg';
import { useUpcomingPosts } from 'hooks/usePosts';
import { Link } from 'react-router-dom';
import { Button } from 'shared/components';
import SubHeading from 'shared/components/SubHeading';
import './EventLayout.css';

function EventCards({ data }) {
	const isEvent = data.type === 'event';
	return (
		<div className='flex flex-col w-fit'>
			<img src={data.coverImage} alt='' className='aspect-square rounded-2xl object-cover w-full md:w-[440px] ' />
			<div className='flex flex-col sm:flex-row justify-start sm:justify-between items-center'>
				<div className='flex flex-col mt-3 w-full gap-y-2 sm:w-fit'>
					<p className='font-oswald text-primary font-medium'>{isEvent ? 'EVENT' : 'RANTANGAN'}</p>
					<p className='font-oswald font-semibold text-3xl'>{data.title}</p>
					<div className='flex flex-row flex-wrap gap-1'>
						{/* {data.date && <p className='text-sm bg-bg-cream w-fit px-3 py-1 rounded-md'>{data.date}</p>} */}
						{/* {data.time && <p className='text-sm bg-bg-cream w-fit px-3 py-1 rounded-md'>{data.date}</p>} */}
						<p className='text-sm bg-bg-cream w-fit px-3 py-1 rounded-md'>{data.location}</p>
					</div>
				</div>
				<Link to={isEvent ? '/event' : '/rantangan'} className='relative w-full sm:w-6/12 mt-5 sm:mt-0'>
					<Button text={isEvent ? 'Register Now' : 'Order Now'} className='w-full text-start' />
				</Link>
			</div>
		</div>
	);
}

export default function EventLayout() {
	const { posts, loading, error } = useUpcomingPosts();
	return (
		<div className='w-full'>
			<SubHeading text='UPCOMING' isLeft icon={upcomingEvent} />
			<div className='mt-10 flex flex-col lg:flex-row justify-start items-center gap-8'>
				{posts.length >= 1 ? (
					posts.map((data) => <EventCards key={data.date} data={data} />)
				) : (
					<div className='w-full text-center'>
						<h3 className='font-oswald font-bold text-bg-black opacity-70 text-3xl sm:text-4xl md:text-5xl'>
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
