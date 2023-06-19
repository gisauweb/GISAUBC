import { Box } from '@mui/material';
import React from 'react';
import Typography from 'shared/components/Typography';

export default function SponsorTitle() {
	return (
		<Box className='flex flex-col justify-center items-center pb-3'>
			<Typography variant='h1' text='2022/23 Partners' className='lg:pb-4' />
		</Box>
	);
}
