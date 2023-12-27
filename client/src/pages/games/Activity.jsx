import React from 'react';
import { Box, Typography } from '@mui/material';
// import { LineChart } from '@mui/x-charts';

export default function Activity() {
	return (
		<div className='w-full h-50'>
			<Box className='justify-center items-center h-full bg-gamesBox rounded-2xl mt-5'>
				<Typography variant='h6' className='ml-10 mt-5'>
					Activity Overview
				</Typography>
			</Box>
		</div>
	);
}
