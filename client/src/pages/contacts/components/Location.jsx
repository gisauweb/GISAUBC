import { Box, Typography } from '@mui/material';
import React from 'react';
import house from 'assets/contact-us/house.svg';
import arrowRight from 'assets/contact-us/arrowRight.svg';

export default function Location() {
	const handleLocationClick = () => {
		const link = 'https://goo.gl/maps/sdedU3uPyEnyQ8f19';
		window.open(link, '_blank', 'noreferrer');
	};
	return (
		<Box
			className='bg-bgPrimary border-2 border-[#F2F0E3] rounded-2xl hover:cursor-pointer'
			onClick={handleLocationClick}
		>
			<Box className='p-6 lg:p-8 flex justify-between items-center'>
				<Box className='flex items-center'>
					<img src={house} alt='house-icon' className='w-10 sm:w-14 lg:w-fit' />
					<Typography
						variant='h5'
						color='primary'
						sx={{
							ml: {
								sm: 2,
								md: 4,
							},
						}}
					>
						GISAU HQ Location
					</Typography>
				</Box>
				<Box className='flex items-center'>
					<Typography variant='body1' color='#434343'>
						Visit Our HQ
					</Typography>
					<img src={arrowRight} alt='arrow-right' className='px-3 lg:px-5' />
				</Box>
			</Box>
		</Box>
	);
}
