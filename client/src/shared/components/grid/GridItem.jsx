import React from 'react';
import { Box, Grid } from '@mui/material';
import Button from 'shared/components/button/Button';
import ReactGA from 'react-ga4';
import GridItemDescription from 'shared/components/grid/GridItemDescription';
import { useMediaQuery } from 'react-responsive';

export default function GridItem({ item, upcomingEvent, itemType }) {
	const handleClickButton = (link) => {
		window.open(link, '_blank', 'noreferrer');
	};
	const isMobileView = useMediaQuery({ query: '(max-width: 750px)' });
	const handleRegisterButton = (link) => {
		ReactGA.event({
			category: 'Event',
			action: 'Clicked register for SOTO',
		});
		window.open(link, '_blank', 'noreferrer');
	};

	return itemType === 'rantangan' && upcomingEvent ? (
		// upcoming rantangan
		<Grid item>
			<Box className={`flex ${isMobileView ? 'flex-col' : 'flex-row'} mx-7 sm:mx-0`}>
				<img src={item.image} alt='item_image' className='rounded-2xl z-10' loading='lazy' />
				<Box className={`flex flex-col ${isMobileView ? 'items-center text-center' : 'ml-8 mt-5'} space-y-4`}>
					<span className='font-semibold text-xl py-2' style={{ zIndex: 5 }}>
						{item.title}
					</span>
					<GridItemDescription item={item} itemType={itemType} upcomingEvent={upcomingEvent} />
					<Button text='Pre-order' handleClickButton={() => handleClickButton(item.registrationLink)} />
				</Box>
			</Box>
		</Grid>
	) : (
		// event
		<Grid item xs={1} sm={1.5} md={2}>
			<Box className='flex flex-col mx-7 sm:mx-0 justify-center items-center'>
				<a href={item.infoLink} target='_blank' rel='noreferrer'>
					<img src={item.image} alt='item_image' className='rounded-2xl z-10' loading='lazy' />
				</a>
				<Box className='text-center justify-center flex flex-col py-4'>
					<span className='py-2 font-semibold text-xl'>{item.title}</span>
					<GridItemDescription item={item} itemType={itemType} />
					{item.button && (
						<Button
							text='Download Booklet'
							className='mt-5'
							onClick={() => {
								window.open(
									'https://stackoverflow.com/questions/42962603/href-with-onclick-in-reactjs',
									'_blank',
								);
							}}
						/>
					)}
				</Box>
				{upcomingEvent && (
					<Box className='flex flex-col items-center justify-center space-y-6'>
						<Button
							text={item.title === 'GISAU Core 2024/25 Hiring' ? 'Apply' : 'Register'}
							handleClickButton={() => handleRegisterButton(item.registrationLink)}
						/>
						<a href={item.infoLink} target='_blank' rel='noreferrer' aria-label='Save'>
							<Button text='View Details' background='transparentBg' />
						</a>
					</Box>
				)}
			</Box>
		</Grid>
	);
}
