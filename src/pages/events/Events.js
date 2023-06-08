import React from 'react';
import { Box } from '@mui/material';
import { MainContainer } from '../../shared/layout/MainContainer';
import { Footer } from '../../shared/components/footer/Footer';
import { Typography } from 'shared/components/Typography';
import EventContent from './components/EventContent';
import { ScrollButtonContainer } from 'shared/components/ScrollButton';
import { LandingImage } from 'shared/components/landing-image/LandingImage';
import landing_img from 'assets/landing/event.jpg';

export const Events = () => {
	return (
		<Box className='bg-[#FFFDF5]'>
			<LandingImage bgImage={landing_img} text={'Our Events'} />
			<MainContainer>
				<Box className='w-4/5'>
					<Typography
						variant='h1'
						text='Connect with fellow Indonesians at our socials and large-scale events.'
					/>
				</Box>
				<EventContent upcoming={true} />
				<EventContent upcoming={false} />
				<ScrollButtonContainer threshold={7 / 10} />
			</MainContainer>
			<Footer />
		</Box>
	);
};
