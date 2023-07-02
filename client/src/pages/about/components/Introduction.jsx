import React from 'react';
import about1 from 'assets/about/img_1.png';
import about2 from 'assets/about/img_2.png';
import { Box } from '@mui/material';
import { Typography } from 'shared/components';

export default function Introduction() {
	return (
		<>
			<Box className='py-5'>
				<Typography
					variant='h1'
					text='We are a student organization that promotes and
						celebrates Indonesian culture in UBC since the early 2000s.'
				/>
			</Box>
			<Box
				className='flex flex-col sm:flex-row items-start sm:justify-between
							py-6 sm:py-8 space-y-5 sm:space-y-0'
			>
				<Box className='w-full sm:w-1/2'>
					<img src={about1} alt='about_1' className='w-full sm:w-[95%] rounded-2xl' />
				</Box>
				<Box className='w-full sm:w-1/2 flex justify-end'>
					<img src={about2} alt='about_2' className='w-full sm:w-[95%] rounded-2xl' />
				</Box>
			</Box>
		</>
	);
}
