import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function PartnerContact() {
	const containerStyle = {
		width: '100%',
		maxWidth: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
	};

	return (
		<Container style={containerStyle} className='mt-5 sm:my-3'>
			<Typography variant='h3' color='primary' className='pt-4 lg:pt-6'>
				Interested to partner with us?
			</Typography>
			<a href='mailto:contact.gisau@gmail.com'>
				<Box className='flex-col lg:flex-row mt-10'>
					<Box className='flex lg:flex-col'>
						<Typography
							variant='button'
							color='primary'
							className='border-4 border-primary rounded-full px-3 sm:px-7 sm:py-2'
						>
							Contact us at sponsorship.gisau@gmail.com
						</Typography>
					</Box>
				</Box>
			</a>
		</Container>
	);
}

export default PartnerContact;
