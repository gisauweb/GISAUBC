import { Typography } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';

export default function PartnerHeadline() {
	return (
		<Box className='relative flex mb-6 pb-10 z-10'>
			<Typography variant='h3' color='primary'>
				Become a partner and get featured in our events.
			</Typography>
		</Box>
	);
}
