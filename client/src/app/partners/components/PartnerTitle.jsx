import { Box, Typography } from '@mui/material';
import React from 'react';
import shineIcon from 'assets/partners/shineIcon.svg';

export default function PartnerTitle() {
	return (
		<Box className='relative w-full pb-3 align-bottom'>
			<img src={shineIcon} alt='stars.png' className='absolute -top-4 -left-10 h-12 w-12' />
			<div className='flex flex-col justify-end'>
				<Typography variant='h4' color='primary' className=''>
					OUR YEAR-LONG PARTNERS
				</Typography>
			</div>
		</Box>
	);
}
