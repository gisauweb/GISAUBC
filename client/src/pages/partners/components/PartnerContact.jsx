import React from 'react';
import { Container, Typography } from '@mui/material';
import { Button } from 'shared/components';

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
			<a href='mailto:contact.gisau@gmail.com' className='flex mt-10 border-3 border-primary rounded-full'>
				<Button text='Contact us at sponsorship.gisau@gmail.com' />
			</a>
		</Container>
	);
}

export default PartnerContact;
