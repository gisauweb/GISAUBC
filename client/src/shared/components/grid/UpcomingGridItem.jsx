import { Box } from '@mui/material';
import ReactGA from 'react-ga4';
import Button from 'shared/components/button/Button';

export default function UpcomingGridItem({ item }) {
	const isEvent = item.type === 'event';
	const isMembersOnly = item.priceRegular == null && item.priceMember != null;

	const handleRegisterButton = (link) => {
		ReactGA.event({
			category: 'Event',
			action: 'Clicked register for SOTO',
		});
		window.open(link, '_blank', 'noreferrer');
	};

	return (
		<Box
			className={`flex flex-col md:flex-row w-full justify-start md:space-x-10 mb-20 ${
				!isEvent && 'items-center'
			}`}
		>
		{item.infoLink ? (
			<a
				href={item.infoLink}
				target='_blank'
				rel='noreferrer'
				className='group relative block shrink-0 aspect-square size-full md:size-104'
			>
				<img
					src={item.coverImage}
					alt='item_image'
					className='rounded-2xl z-10 w-full h-full object-cover transition-all duration-300 group-hover:brightness-75'
					loading='lazy'
				/>
				<div className='absolute inset-0 flex items-center justify-center rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20'>
					<div className='bg-black/60 rounded-full px-4 py-2 flex items-center gap-2'>
						<svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
							<path strokeLinecap='round' strokeLinejoin='round' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
						</svg>
						<span className='text-white text-sm font-oswald'>View</span>
					</div>
				</div>
			</a>
		) : (
			<img
				src={item.coverImage}
				alt='item_image'
				className='rounded-2xl z-10 aspect-square size-full md:size-104 object-cover'
				loading='lazy'
			/>
		)}
			<div>
				<Box className='flex flex-col mb-4 h-fit'>
					<h4 className='mb-2 font-oswald font-semibold text-2xl'>{item.title}</h4>
					<div className='flex flex-row flex-wrap gap-1 mb-2'>
						{item.time && <p className='px-3 py-1 bg-bg-cream w-fit rounded-md text-sm'>{item.time}</p>}
						<p className='px-3 py-1 bg-bg-cream w-fit rounded-md text-sm'>{item.location}</p>
					</div>
					<p className='whitespace-pre-line text-base font-proxima'>{item.description}</p>
					{item.priceMember && <p className='text-lg font-semibold mt-3'>Members: ${item.priceMember}</p>}
					{item.priceRegular && <p className='text-lg font-semibold'>Non-members: ${item.priceRegular}</p>}
				</Box>
				<div className='flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-y-0 lg:space-x-3'>
					{isEvent ? (
						<>
							{isMembersOnly ? (
								<div className='flex flex-col gap-2'>
									<Button
										text='Members Only — Sign In'
										background='transparentBg'
										handleClickButton={() => (window.location.href = '/app')}
									/>
									<p className='text-sm text-gray-500'>This event is exclusive to GISAU members.</p>
								</div>
							) : (
								<Button
									text='Register Here'
									handleClickButton={() => handleRegisterButton(item.registrationLink)}
								/>
							)}
							{item.infoLink && (
								<Button
									text='Hiring Package'
									background='transparentBg'
									handleClickButton={() => handleRegisterButton(item.infoLink)}
								/>
							)}
						</>
					) : (
						<Button
							text='Order Now'
							handleClickButton={() => handleRegisterButton(item.registrationLink)}
						/>
					)}
				</div>
			</div>
		</Box>
	);
}
