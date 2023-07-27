import React from 'react';
import { Box } from '@mui/material';
import MainContainer from 'shared/layout/MainContainer';
import { Typography, ScrollButton, LandingImage, Footer } from 'shared/components/index';
import rantanganLandingImage from 'assets/landing/rantangan.jpg';
import RantanganContent from './components/RantanganContent';

export default function Rantangan() {
	return (
		<Box className='bg-[#FFFDF5]'>
			<LandingImage bgImage={rantanganLandingImage} text='RANTANGAN' />
			<MainContainer>
				<Box className='w-4/5'>
					<Typography variant='h1' text='Short Description of Rantangan. Maximum 2 sentences.' />
				</Box>
				<RantanganContent upcoming />
				<RantanganContent upcoming={false} />
				<ScrollButton threshold={7 / 10} />
			</MainContainer>
			<Footer />
		</Box>
	);
}
