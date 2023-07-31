import React from 'react';
import { Box } from '@mui/material';
import MainContainer from 'shared/layout/MainContainer';
import { Footer, ScrollButton } from 'shared/components/index';
import About from './components/About';
import HomeLandingImg from './components/HomeLandingImage';
import Activities from './components/activities/Activities';
import Events from './components/events/Events';
import Partners from './components/partners/Partners';

export default function Home() {
	return (
		<Box>
			<HomeLandingImg />
			<MainContainer>
				<About />
				<Activities />
				<Events />
				<Partners />
				<ScrollButton threshold={13 / 20} />
			</MainContainer>
			<Footer showPlane />
		</Box>
	);
}
