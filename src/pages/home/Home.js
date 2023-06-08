import React from 'react';
import About from './components/About';
import { MainContainer } from '../../shared/layout/MainContainer';
import { HomeLandingImage } from './components/HomeLandingImage';
import Activities from './components/activities/Activities';
import { Events } from './components/events/Events';
import Partners from './components/partners/Partners';
import { Box } from '@mui/material';
import { Footer } from '../../shared/components/footer/Footer';
import { ScrollButtonContainer } from '../../shared/components/ScrollButton';

export const Home = () => {
	return (
		<Box className='bg-[#FFFDF5]'>
			<HomeLandingImage />
			<MainContainer>
				<About />
				<Activities />
				<Events />
				<Partners />
				<ScrollButtonContainer threshold={13 / 20} />
			</MainContainer>
			<Footer showPlane={true} />
		</Box>
	);
};
