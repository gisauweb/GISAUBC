import React from 'react';
import { Box, Typography } from '@mui/material';
// import MainContainer from 'shared/layout/MainContainer';
import { Footer } from 'shared/components/index';
// import contactUs from 'assets/landing-image/contactus.png';

export default function ContactUs() {
	return (
		<Box className='' sx={{ background: 'linear-gradient(#EDE6CB, #FFFDF5);' }}>
			<div className='flex h-[25vh]' />
			<Box className='flex flex-col items-center'>
				<Typography variant='h1' color='primary' sx={{ fontWeight: 'bold' }}>
					CONTACT US
				</Typography>
				<Typography variant='h6' color='primary'>
					Reach out to us — we don&apos;t bite!
				</Typography>
			</Box>
			<Footer />
		</Box>
	);
}
