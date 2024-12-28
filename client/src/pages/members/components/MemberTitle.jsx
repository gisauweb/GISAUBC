import { Box, Typography } from '@mui/material';
import React from 'react';
import shineIcon from 'assets/members/shineIcon.svg';

export default function MemberTitle() {
	return (
		<Box className='relative w-full pb-3 align-bottom'>
			<img src={shineIcon} alt='stars.png' className='absolute -top-6 -left-10 h-10 w-10' />
			<div className='flex flex-col justify-end'>
				<Typography variant='h4' color='primary'>
					How To Access Member Benefits?
				</Typography>
			</div>
		</Box>
	);
}
