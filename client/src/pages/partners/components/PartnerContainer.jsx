import React from 'react';
import { Box, Typography } from '@mui/material';

function PartnerContainer({ name, logo, description, link }) {
	return (
		<Box
			className={`flex flex-col sm:flex-row items-center sm:items-start sm:gap-12 ${
				name === 'Wizeprep' ? 'mb-0' : 'mb-20'
			}`}
		>
			<a href={link} target='_blank' rel='noreferrer'>
				<img alt={name} src={logo} className='w-52 h-52' loading='lazy' />
			</a>
			<Box className='flex flex-col w-3/4 pt-6 sm:pt-8 gap-4 justify-center items-center'>
				<Typography variant='h4' color='maroon' className='text-left w-full'>
					{name}
				</Typography>
				<Typography variant='body1' color='black' className='text-left'>
					{description}
				</Typography>
			</Box>
		</Box>
	);
}

export default PartnerContainer;
