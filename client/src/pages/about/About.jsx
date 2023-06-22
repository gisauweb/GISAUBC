import React from 'react';
import { Box } from '@mui/material';
import MainContainer from 'shared/layout/MainContainer';
import { Typography, ScrollButton, LandingImage, Footer } from 'shared/components/index';
import eventLandingImage from 'assets/landing/event.jpg';
import Introduction from './Introduction';

export default function About() {
	return (
		<Box className='bg-[#FFFDF5]'>
			<LandingImage bgImage={eventLandingImage} text='About Us' />
			<MainContainer>
				<Box className='w-[85%] mx-auto pt-0'>
					<Introduction />
					<Box className='w-full py-10'>
						<Typography variant='h1' text='Meet our team.' />
					</Box>
					<Box>{/* Buttons */}</Box>
				</Box>
				<ScrollButton threshold={7 / 10} />
			</MainContainer>
			<Footer />
		</Box>
	);
}
