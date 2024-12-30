import React from 'react';
import { Box, Typography } from '@mui/material';
import MainContainer from 'shared/layout/MainContainer';
import { ScrollButton, LandingImage, Footer } from 'shared/components/index';
import rantanganLandingImage from 'assets/landing-image/rantangan.webp';
import RantanganContent from './components/RantanganContent';

export default function Rantangan() {
	return (
		<Box className='bg-[#FFFDF5]'>
			<LandingImage bgImage={rantanganLandingImage} text='RANTANGAN' />
			<MainContainer>
				<Box className='w-4/5'>
					<Typography variant='h3' color='primary' className='z-10'>
						Fuel your study sessions with some delicious Indonesian food prepared by our F&B team.
					</Typography>
				</Box>
				<RantanganContent upcoming />
				<RantanganContent upcoming={false} />
				<ScrollButton threshold={1 / 2} />
			</MainContainer>
			<Footer />
		</Box>
	);
}
