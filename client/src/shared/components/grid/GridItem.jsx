import React from 'react';
import { Box, Grid } from '@mui/material';
import Button from 'shared/components/button/Button';
import GridItemDescription from 'shared/components/grid/GridItemDescription';

export default function GridItem({ item, upcomingEvent, itemType }) {
	const handleClickButton = (link) => {
		window.open(`https://${link}`, '_blank', 'noreferrer');
	};

	return itemType === 'rantangan' && upcomingEvent ? (
		<Grid item xs={1} sm={1.5} md={2}>
			<Box className='flex flex-row'>
				<img src={item.image} alt='item_image' className='rounded-2xl' />
				<Box className='flex flex-col ml-8 mt-3 space-y-4'>
					<span className='font-semibold text-xl py-2 inline-block'>{item.title}</span>
					<GridItemDescription item={item} itemType={itemType} upcomingEvent={upcomingEvent} />
					<Button text='Order Now' handleClickButton={() => handleClickButton(item.link)} />
				</Box>
			</Box>
		</Grid>
	) : (
		<Grid item xs={1} sm={1.5} md={2}>
			<Box className='flex flex-col mx-7 sm:mx-0'>
				<img src={item.image} alt='item_image' className='rounded-2xl' />
				<Box className='text-center flex flex-col py-4'>
					<span className='py-2 font-semibold text-xl'>{item.title}</span>
					<GridItemDescription item={item} itemType={itemType} />
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
