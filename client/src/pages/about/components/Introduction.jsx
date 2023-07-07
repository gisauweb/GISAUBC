import React from 'react';
import { Box } from '@mui/material';
import { Typography } from 'shared/components';
import Principles from './Principles';

export default function Introduction() {
	return (
		<Box>
			<Box className='pr-0 sm:pr-4'>
				<Typography
					variant='h1'
					text='We are a student organization that promotes and
						celebrates Indonesian culture in UBC since the early 2000s.'
				/>
			</Box>
			<Principles />
		</Box>
	);
}
