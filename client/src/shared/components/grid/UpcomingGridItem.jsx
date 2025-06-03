import { Box } from '@mui/material';
import ReactGA from 'react-ga4';
import Button from 'shared/components/button/Button';
import GridItemDescription from 'shared/components/grid/GridItemDescription';

export default function UpcomingGridItem({ item, itemType }) {
	const handleRegisterButton = (link) => {
		ReactGA.event({
			category: 'Event',
			action: 'Clicked register for SOTO',
		});
		window.open(link, '_blank', 'noreferrer');
	};

	return (
		<Box className='flex flex-col md:flex-row w-full justify-start md:space-x-10 mb-20'>
			<a
				href={item.infoLink}
				target='_blank'
				rel='noreferrer'
				className='overflow-hidden rounded-2xl aspect-square bg-black relative'
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
					<span className='mb-2 font-oswald font-semibold text-2xl'>{item.title}</span>
					<span className='whitespace-pre-line'>{item.caption}</span>
					<GridItemDescription item={item} itemType={itemType} />
				</Box>
				<Box className='flex flex-col lg:flex-row  lg:items-center space-y-6 lg:space-y-0 lg:space-x-6'>
					<Button
						text={item.title === 'Fall Hiring' ? 'View Hiring Package' : 'Apply Here'}
						handleClickButton={() => handleRegisterButton(item.registrationLink)}
					/>
					{item.title !== 'Fall Hiring' && (
						<Button
							text='Hiring Package'
							background='transparentBg'
							handleClickButton={() => handleRegisterButton(item.infoLink)}
						/>
					)}
				</Box>
			</div>
		</Box>
	);
}
