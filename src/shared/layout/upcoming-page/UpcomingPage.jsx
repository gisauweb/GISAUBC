import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import MainContainer from 'shared/layout/MainContainer';
import StayTuned from 'shared/layout/upcoming-page/StayTuned';
import Footer from 'shared/components/footer/Footer';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

export default function UpcomingPage() {
	const location = useLocation();
	useEffect(() => {
		ReactGA.pageview(location.pathname);
	}, [location]);
	return (
		<Box className='bg-[#FFFDF5]'>
			<div className='flex justify-center h-[37vh]' />
			<MainContainer>
				<Box className='flex w-full'>
					<StayTuned />
				</Box>
			</MainContainer>
			<Footer />
		</Box>
	);
}
