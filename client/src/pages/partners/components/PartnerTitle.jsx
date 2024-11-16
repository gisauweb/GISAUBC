import { Box, Typography } from '@mui/material';
import React from 'react';
import shineIcon from 'assets/partners/shineIcon.svg';

export default function PartnerTitle() {
	return (
		<Box className='flex w-full pb-3 align-bottom'>
			<img src={shineIcon} alt='stars.png' />
			<div className='flex flex-col justify-end'>
				<Typography variant='h4' color='primary' className=''>
					OUR YEAR-LONG PARTNERS
				</Typography>
			</div>
		</Box>
	);
}
