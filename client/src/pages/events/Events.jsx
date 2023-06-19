import React from 'react';
import { Box } from '@mui/material';
import MainContainer from 'shared/layout/MainContainer';
import { Typography, ScrollButton, LandingImage, Footer } from 'shared/components/index';
import eventLandingImage from 'assets/landing/event.jpg';
import EventContent from './components/EventContent';

export default function Events() {
	return (
		<Box className='bg-[#FFFDF5]'>
			<LandingImage bgImage={eventLandingImage} text='Our Events' />
			<MainContainer>
				<Box className='w-4/5'>
					<Typography
						variant='h1'
						text='Connect with fellow Indonesians at our socials and large-scale events.'
					/>
				</Box>
				<EventContent upcoming />
				<EventContent upcoming={false} />
				<ScrollButton threshold={7 / 10} />
			</MainContainer>
			<Footer />
		</Box>
	);
}
