import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Title() {
	return (
		<>
			<div className='flex h-[18vh]' />
			<Box className='flex flex-col items-center'>
				<Typography variant='h1' color='primary' sx={{ fontWeight: 'bold' }}>
					CONTACT US
				</Typography>
				<Typography variant='h6' color='primary' sx={{ my: 2 }}>
					Reach out to us — we don&apos;t bite!
				</Typography>
			</Box>
		</>
	);
}
