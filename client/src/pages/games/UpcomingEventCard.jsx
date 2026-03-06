import { MapPinIcon, TagIcon } from '@heroicons/react/24/solid';
import { useUpcomingPosts, EventType } from 'hooks/usePosts';

export default function UpcomingEventCard() {
	const { posts, loading, error } = useUpcomingPosts(EventType.EVENT);

	return (
		<div className='bg-games-box rounded-2xl w-full p-6 sm:p-8'>
			<h2 className='text-2xl font-bold font-oswald text-games-red mb-5'>Upcoming Events</h2>

			{loading && (
				<div className='flex flex-col gap-4'>
					{[1, 2].map((i) => (
						<div key={i} className='bg-white rounded-2xl overflow-hidden animate-pulse flex flex-col sm:flex-row'>
							<div className='w-full h-44 sm:h-auto sm:w-44 shrink-0 bg-gray-200' />
							<div className='flex-1 p-5 flex flex-col gap-3'>
								<div className='h-4 bg-gray-200 rounded w-2/3' />
								<div className='flex gap-2'>
									<div className='h-6 bg-gray-200 rounded-full w-24' />
									<div className='h-6 bg-gray-200 rounded-full w-16' />
								</div>
								<div className='h-3 bg-gray-200 rounded w-full' />
								<div className='h-3 bg-gray-200 rounded w-4/5' />
							</div>
						</div>
					))}
				</div>
			)}

			{error && (
				<p className='text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3'>
					Failed to load events.
				</p>
			)}

			{!loading && !error && posts.length === 0 && (
				<p className='text-sm text-gray-400 text-center py-8'>No upcoming events right now. Check back soon!</p>
			)}

			<div className='flex flex-col gap-4'>
				{posts.map((event) => (
					<div
						key={event.id}
						className='bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow duration-200 group'
					>
						{/* Cover Image */}
						<div className='w-full h-44 sm:h-auto sm:w-44 shrink-0 overflow-hidden'>
							<img
								src={event.coverImage}
								alt={event.title}
								className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
							/>
						</div>

						{/* Content */}
						<div className='flex-1 p-5 flex flex-col justify-between gap-4'>
							<div className='flex flex-col gap-2'>
								<h3 className='text-base sm:text-lg font-bold text-gray-900 leading-snug'>
									{event.title}
								</h3>

								{/* Pills */}
								<div className='flex flex-wrap gap-2'>
									{event.type && (
										<span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-games-red border border-red-200'>
											<TagIcon className='w-3 h-3' />
											{event.type.charAt(0).toUpperCase() + event.type.slice(1)}
										</span>
									)}
									{event.location && (
										<span className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200'>
											<MapPinIcon className='w-3 h-3' />
											{event.location}
										</span>
									)}
								</div>

								{event.description && (
									<p className='text-sm text-gray-500 line-clamp-2 leading-relaxed'>
										{event.description}
									</p>
								)}
							</div>

							{event.registrationLink && (
								<div className='flex items-center justify-between gap-3'>
									<a
										href={event.registrationLink}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-block bg-primary text-white text-xs px-5 py-2 rounded-full font-semibold hover:bg-[#5a1e1e] transition-colors duration-150'
									>
										Register →
									</a>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
