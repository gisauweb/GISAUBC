import { Box } from '@mui/material';
import ReactGA from 'react-ga4';
import Button from 'shared/components/button/Button';

export default function UpcomingGridItem({ item }) {
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
				!item.isEvent && 'items-center'
			}`}
		>
			<a
				href={item.infoLink}
				target='_blank'
				rel='noreferrer'
				className='overflow-hidden rounded-2xl aspect-square mb-5 md:mb-0 size-full md:size-[26rem] relative'
			>
				<img
					src={item.image}
					alt='item_image'
					className='rounded-2xl z-10 aspect-square object-cover size-full'
					loading='lazy'
				/>
			</a>
			<div>
				<Box className='flex flex-col mb-4 h-fit'>
					<h4 className='mb-2 font-oswald font-semibold text-2xl'>{item.title}</h4>
					<div className='flex flex-row flex-wrap gap-1 mb-2'>
						{item.date && <p className='px-3 py-1 bg-bgCream w-fit rounded-md text-sm'>{item.date}</p>}
						{item.time && <p className='px-3 py-1 bg-bgCream w-fit rounded-md text-sm'>{item.time}</p>}
						<p className='px-3 py-1 bg-bgCream w-fit rounded-md text-sm'>{item.loc}</p>
					</div>
					<p className='whitespace-pre-line text-base font-proxima'>{item.caption}</p>
					{item.priceMember && (
						<p className='text-lg font-semibold mt-3'>
							Members:
							{item.priceMember}
						</p>
					)}
					{item.priceRegular && (
						<p className='text-lg font-semibold'>
							Non-members:
							{item.priceRegular}
						</p>
					)}
				</Box>
				<div className='flex flex-col lg:flex-row  lg:items-center space-y-6 lg:space-y-0 lg:space-x-3'>
					{item.isEvent ? (
						<>
							<Button
								text={item.title === 'Fall Hiring' ? 'View Hiring Package' : 'Register Here'}
								handleClickButton={() => handleRegisterButton(item.registrationLink)}
							/>
							{/* Below here is for hiring package usually for hiring */}
							{/* {item.title !== 'Fall Hiring' && (
								<Button
									text='Hiring Package'
									background='transparentBg'
									handleClickButton={() => handleRegisterButton(item.infoLink)}
								/>
							)} */}
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
