const upcomingEvent = {
	title: 'Welcome Night',
	date: 'March 15, 2026 • 6:00 PM',
	location: 'AMS Nest Room 2500',
	description: 'Meet fellow Indonesian students, enjoy food, and learn about GISAU!',
	image: 'https://hugxahcgzygqbgbxyvcc.supabase.co/storage/v1/object/public/rantangan_cover/25_26/1.webp',
	priceText: 'Free (Members only)', // optional line like the reference
	status: 'COMING UP', // badge
	registered: false, // badge
};

export default function UpcomingEventCard() {
	return (
		<div className='bg-games-box border border-gray-100 rounded-2xl shadow-md w-full p-8'>
			<h2 className='text-2xl font-bold font-oswald text-games-red mb-5'>Upcoming Event</h2>

			<div className='bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row'>
				{/* LEFT: Image */}
				<div className='w-full md:w-36 shrink-0 aspect-square'>
					<img src={upcomingEvent.image} alt='' className='h-full aspect-square' />
				</div>

				{/* MIDDLE: Details */}
				<div className='flex-1 p-6'>
					<h3 className='text-2xl font-bold text-gray-800'>{upcomingEvent.title}</h3>

					<div className='mt-3 space-y-1'>
						<p className='text-sm text-gray-600'>{upcomingEvent.date}</p>
						<p className='text-sm text-gray-600'>{upcomingEvent.location}</p>
						{upcomingEvent.priceText && <p className='text-sm text-gray-600'>{upcomingEvent.priceText}</p>}
					</div>

					<p className='text-sm text-gray-600 mt-4'>{upcomingEvent.description}</p>
				</div>

				{/* RIGHT: Badges + Button */}
				<div className='p-6 md:w-[16rem] w-full flex md:flex-col items-start md:items-end justify-between gap-4'>
					<div className='flex items-center gap-2 md:justify-end flex-wrap'>
						{upcomingEvent.registered && (
							<span className='px-3 py-1 rounded-full text-xs font-bold bg-gray-900 text-white'>
								REGISTERED
							</span>
						)}
						{upcomingEvent.status && (
							<span className='px-3 py-1 rounded-full text-xs font-bold bg-[#EDE3D7] text-[#7A3B2E] border border-[#E2D2C3]'>
								{upcomingEvent.status}
							</span>
						)}
					</div>

					<button className='bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-[#5a1e1e] transition'>
						{upcomingEvent.registered ? 'View Details' : 'Register'}
					</button>
				</div>
			</div>
		</div>
	);
}
