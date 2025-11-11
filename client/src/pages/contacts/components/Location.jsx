import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import house from 'assets/contact-us/house.svg';
import selectedHouse from 'assets/contact-us/selected_house.png';
import arrowRight from 'assets/contact-us/arrowRight.svg';

export default function Location() {
	const [hoveredBox, setHoveredBox] = useState(false);

	const handleLocationClick = () => {
		const link = 'https://goo.gl/maps/sdedU3uPyEnyQ8f19';
		window.open(link, '_blank', 'noreferrer');
	};

	const handleBoxHover = (isHovered) => {
		setHoveredBox(isHovered);
	};

	return (
		<Box
			className='bg-bg-primary border-2 border-[#F2F0E3] hover:border-[#7D0202] rounded-2xl hover:cursor-pointer'
			onMouseEnter={() => handleBoxHover(true)}
			onMouseLeave={() => handleBoxHover(false)}
			onClick={handleLocationClick}
			sx={{ boxShadow: hoveredBox ? '0px 6px 18px rgba(125, 2, 2, 0.2)' : 'none' }}
		>
			<Box className='p-6 lg:p-8 flex flex-col sm:flex-row justify-between sm:items-center'>
				<Box className='flex flex-col sm:flex-row sm:items-center'>
					<img
						src={hoveredBox ? selectedHouse : house}
						alt='house-icon'
						className='w-fit sm:w-14 lg:w-fit'
						loading='lazy'
					/>
					<Typography
						variant='h5'
						color='primary'
						sx={{
							ml: {
								sm: 2,
								md: 4,
							},
							mt: { xs: 5, sm: 0 },
						}}
					>
						GISAU HQ Location
					</Typography>
				</Box>
				<Box className='flex sm:items-center mt-2 sm:mt-0'>
					<Typography variant='body1' color='#434343'>
						Visit Our HQ
					</Typography>
					<img src={arrowRight} alt='arrow-right' className='px-3 lg:px-5' loading='lazy' />
				</Box>
			</Box>
		</Box>
	);
}
