import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import About from './components/About';
import MainContainer from '../../shared/layout/MainContainer';
import HomeLandingImg from './components/HomeLandingImage';
import Activities from './components/activities/Activities';
import Events from './components/events/Events';
import Partners from './components/partners/Partners';
import Footer from '../../shared/components/footer/Footer';
import ScrollButtonContainer from '../../shared/components/ScrollButton';

export default function Home() {
	const location = useLocation();
	useEffect(() => {
		ReactGA.send({ hitType: 'pageview', page: location.pathname });
	}, [location]);

	return (
		<Box className='bg-[#FFFDF5]'>
			<HomeLandingImg />
			<MainContainer>
				<About />
				<Activities />
				<Events />
				<Partners />
				<ScrollButtonContainer threshold={13 / 20} />
			</MainContainer>
			<Footer showPlane />
		</Box>
	);
}
