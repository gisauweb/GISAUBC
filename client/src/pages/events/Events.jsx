import React from 'react';
import { Box, Typography } from '@mui/material';
import MainContainer from 'shared/layout/MainContainer';
import { ScrollButton, LandingImage, Footer } from 'shared/components/index';
import eventLandingImage from 'assets/landing-image/event.webp';
import EventContent from './components/EventContent';

export default function Events() {
	return (
		<Box>
			<LandingImage bgImage={eventLandingImage} text='Our Events' />
			<MainContainer>
				<Box className='w-4/5'>
					<Typography variant='h3' color='primary'>
						Connect with fellow Indonesians at our socials and large-scale events.
					</Typography>
				</Box>
				<EventContent upcoming />
				<EventContent upcoming={false} />
				<ScrollButton threshold={1 / 2} />
			</MainContainer>
			<Footer />
		</Box>
	);
}
