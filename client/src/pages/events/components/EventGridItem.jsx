import React from 'react';
import { Box, Grid } from '@mui/material';
import Button from 'shared/components/button/Button';
import { ReactGAImplementation } from 'react-ga4';

export default function EventGridItem({ item, upcomingEvent }) {
	const handleClickButton = (link) => {
		ReactGAImplementation.event({
			category: 'Event',
			action: 'Clicked register for UBUD',
		});
		window.open(`https://${link}`, '_blank', 'noreferrer');
	};

	return (
		<Grid item xs={1} sm={1.5} md={2}>
			<Box className='flex flex-col mx-7 sm:mx-0'>
				<img src={item.image} alt='item_image' className='rounded-2xl' />
				<Box className='text-center flex flex-col py-4'>
					<span className='py-2 font-semibold text-xl'>{item.title}</span>
					<span>{item.date}</span>
					<span>{item.loc}</span>
				</Box>
				{upcomingEvent && (
					<Box className='flex justify-center'>
						<Button text='Register' handleClickButton={() => handleClickButton(item.link)} />
					</Box>
				)}
			</Box>
		</Grid>
	);
}
