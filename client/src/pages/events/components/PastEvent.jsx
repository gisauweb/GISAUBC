import React from 'react';
import { Box, Grid } from '@mui/material';
import Button from 'shared/components/button/Button';

export default function PastEvent({ item, features }) {
	const { event, upcomingEvent } = features;

	const handleClickButton = (link) => {
		window.open(`https://${link}`, '_blank', 'noreferrer');
	};

	return (
		<Grid item xs={1} sm={2} md={2}>
			<Box className='flex flex-col mx-7 sm:mx-0'>
				<img src={item.image} alt='item_image' className='rounded-2xl' />
				{event && (
					<Box className='text-center flex flex-col py-4'>
						<span className='py-2 font-semibold text-xl'>{item.title}</span>
						<span>{item.date}</span>
						<span>{item.loc}</span>
					</Box>
				)}
				{upcomingEvent && (
					<Box className='flex justify-center'>
						<Button text='Register' handleClickButton={() => handleClickButton(item.link)} />
					</Box>
				)}
			</Box>
		</Grid>
	);
}
