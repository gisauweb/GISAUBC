import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function SponsorContainer({ name, logo, reversed }) {
	const containerStyle = {
		width: '100%',
		maxWidth: '100%',
		display: 'flex',
		alignItems: 'center',
	};
	const boxStyle = {
		width: '50%',
		height: 'auto',
		display: 'flex',
	};

	return (
		<Container style={containerStyle} className='py-6'>
			<Box style={boxStyle} className='justify-end pr-4 sm:pr-9'>
				{reversed ? (
					<Typography variant='h4' color='primary' className='text-right'>
						{name}
					</Typography>
				) : (
					<img alt={name} src={logo} className='rounded-md h-12 sm:h-20 lg:h-24 sm:max-h-60' loading='lazy' />
				)}
			</Box>
			<Box style={boxStyle} className='justify-start pl-4 sm:pl-9'>
				{reversed ? (
					<img alt={name} src={logo} className='rounded-md h-12 sm:h-20 lg:h-24 sm:max-h-60' loading='lazy' />
				) : (
					<Typography variant='h4' color='primary' className='text-left'>
						{name}
					</Typography>
				)}
			</Box>
		</Container>
	);
}

export default SponsorContainer;
