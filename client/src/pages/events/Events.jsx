import React from 'react';
import { Box } from '@mui/material';
import Typography from 'shared/components/Typography';
import ScrollButtonContainer from 'shared/components/ScrollButton';
import LandingImage from 'shared/components/landing-image/LandingImage';
import eventLandingImage from 'assets/landing/event.jpg';
import EventContent from './components/EventContent';
import Footer from '../../shared/components/footer/Footer';
import MainContainer from '../../shared/layout/MainContainer';

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
				<ScrollButtonContainer threshold={7 / 10} />
			</MainContainer>
			<Footer />
		</Box>
	);
}
