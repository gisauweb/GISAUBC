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
		<Box className='flex flex-col mx-7 sm:mx-0 justify-center items-center'>
			<a href={item.infoLink} target='_blank' rel='noreferrer'>
				<img src={item.image} alt='item_image' className='rounded-2xl z-10 object-cover' loading='lazy' />
			</a>
			<Box className='text-center justify-center flex flex-col py-4'>
				<span className='py-2 font-semibold text-xl'>{item.title}</span>
				<GridItemDescription item={item} itemType={itemType} />
				{item.button && (
					<a
						href={item.button.link}
						target='_blank'
						rel='noreferrer'
						className='mt-5 flex justify-center'
						aria-label={item.button.name}
					>
						<Button text={item.button.name} />
					</a>
				)}
			</Box>
			<Box className='flex flex-col items-center justify-center space-y-6'>
				<Button
					text={item.title === 'Summer Hiring' ? 'View Hiring Package' : 'Register'}
					handleClickButton={() => handleRegisterButton(item.registrationLink)}
				/>
				{item.title !== 'Summer Hiring' && (
					<a href={item.infoLink} target='_blank' rel='noreferrer' aria-label='Save'>
						<Button text='View Details' background='transparentBg' />
					</a>
				)}
			</Box>
		</Box>
	);
}
