import React from 'react';
import { Box, Typography } from '@mui/material';
import ExpandableBox from './ExpandableBox';

export default function Principles() {
	return (
		<Box className='flex'>
			<Box className='w-1/2'>
				<Typography variant='h2'>About Us</Typography>
			</Box>
			<Box className='flex flex-col w-1/2 '>
				<ExpandableBox title='Box 1' description='Description for Box 1' />
				<ExpandableBox title='Box 2' description='Description for Box 2' />
				<ExpandableBox title='Box 3' description='Description for Box 3' />
			</Box>
		</Box>
	);
}
