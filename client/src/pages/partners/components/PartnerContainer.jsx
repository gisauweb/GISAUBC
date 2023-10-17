import React from 'react';
import { Box, Typography } from '@mui/material';

function PartnerContainer({ name, logo, description, link }) {
	return (
		<Box className={`flex flex-col ${name === 'Wizeprep' ? 'mb-0' : 'mb-20'}`}>
			<a href={link} target='_blank' rel='noreferrer'>
				<img alt={name} src={logo} className='w-1/2 sm:w-1/6' loading='lazy' />
			</a>
			<Box className='w-3/4 pt-6 sm:pt-8'>
				<Typography variant='body1' color='black' className='text-left'>
					{description}
				</Typography>
			</Box>
		</Box>
	);
}

export default PartnerContainer;
