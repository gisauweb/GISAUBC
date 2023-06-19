import React from 'react';
import { Box } from '@mui/material';
import MainContainer from 'shared/layout/MainContainer';
import StayTuned from 'shared/layout/upcoming-page/StayTuned';
import Footer from 'shared/components/footer/Footer';

export default function UpcomingPage() {
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
