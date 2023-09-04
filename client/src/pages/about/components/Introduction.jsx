import React from 'react';
import { Box, Typography } from '@mui/material';
import Principles from './Principles';

export default function Introduction() {
	return (
		<Box>
			<Box className='md:pr-3 lg:pr-0'>
				<Typography variant='h3' color='primary'>
					We are a student organization that promotes and celebrates Indonesian culture in UBC since the early
					2000s.
				</Typography>
			</Box>
			<Principles />
		</Box>
	);
}
