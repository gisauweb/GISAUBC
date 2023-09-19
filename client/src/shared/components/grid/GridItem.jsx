import React from 'react';
import { Box, Grid } from '@mui/material';
import Button from 'shared/components/button/Button';
import ReactGA from 'react-ga4';
import GridItemDescription from 'shared/components/grid/GridItemDescription';
import { useMediaQuery } from 'react-responsive';

export default function GridItem({ item, upcomingEvent, itemType }) {
	const handleClickButton = (link) => {
		window.open(`https://${link}`, '_blank', 'noreferrer');
	};
	const isMobileView = useMediaQuery({ query: '(max-width: 750px)' });
	const handleRegisterButton = (link) => {
		ReactGA.event({
			category: 'Event',
			action: 'Clicked register for UBUD',
		});
		window.open(`https://${link}`, '_blank', 'noreferrer');
	};

	return itemType === 'rantangan' && upcomingEvent ? (
		<Grid item>
			<Box className={`flex ${isMobileView ? 'flex-col' : 'flex-row'} mx-7 sm:mx-0`}>
				<img src={item.image} alt='item_image' className='rounded-2xl z-10' />
				<Box className={`flex flex-col ${isMobileView ? 'items-center text-center' : 'ml-8 mt-5'} space-y-4`}>
					<span className='font-semibold text-xl py-2' style={{ zIndex: 5 }}>
						{item.title}
					</span>
					<GridItemDescription item={item} itemType={itemType} upcomingEvent={upcomingEvent} />
					<Button text='Pre-order' handleClickButton={() => handleClickButton(item.link)} />
				</Box>
			</Box>
		</Grid>
	) : (
		<Grid item xs={1} sm={1.5} md={2}>
			<Box className='flex flex-col mx-7 sm:mx-0'>
				<a href={item.infoLink} target='_blank' rel='noreferrer'>
					<img src={item.image} alt='item_image' className='rounded-2xl z-10' />
				</a>
				<Box className='text-center flex flex-col py-4'>
					<span className='py-2 font-semibold text-xl'>{item.title}</span>
					<GridItemDescription item={item} itemType={itemType} />
				</Box>
				{upcomingEvent && (
					<Box className='flex flex-col items-center justify-center space-y-6'>
						<Button text='Register' handleClickButton={() => handleRegisterButton(item.registerLink)} />
						<a href={item.infoLink} target='_blank' rel='noreferrer'>
							<Button text='View Event Details' background='transparentBg' />
						</a>
					</Box>
				)}
			</Box>
		</Grid>
	);
}
