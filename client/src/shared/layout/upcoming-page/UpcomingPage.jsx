import React from 'react';
import { Box } from '@mui/material';
import MainContainer from 'app/shared/layout/MainContainer';
import StayTuned from 'app/shared/layout/upcoming-page/StayTuned';
import Footer from 'app/shared/components/footer/Footer';

export default function UpcomingPage() {
	return (
		<Box>
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
