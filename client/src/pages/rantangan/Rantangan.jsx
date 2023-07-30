import React from 'react';
import { Box } from '@mui/material';
import MainContainer from 'shared/layout/MainContainer';
import { Typography, ScrollButton, LandingImage, Footer } from 'shared/components/index';
import rantanganLandingImage from 'assets/landing/rantangan.jpg';
import bakmi from 'assets/rantangan-page/bakmi.svg';
import RantanganContent from './components/RantanganContent';

export default function Rantangan() {
	return (
		<Box className='bg-[#FFFDF5]'>
			<LandingImage bgImage={rantanganLandingImage} text='RANTANGAN' />
			<MainContainer>
				<Box className='w-4/5'>
					<Typography
						variant='h1'
						text='Fuel your study sessions with some delicious Indonesian food prepared by our F&B team.'
					/>
				</Box>
				<RantanganContent upcoming />
				<RantanganContent upcoming={false} />
				<img
					src={bakmi}
					alt='bakmi-icon'
					className='absolute w-full sm:w-[30%] 2xl:max-w-4xl right-0 z-0
				top-2/3 md:top-[250%] lg:top-[250%] xl:top-[250%] 2xl:top-[250%]'
				/>
				<ScrollButton threshold={7 / 10} />
			</MainContainer>
			<Footer />
		</Box>
	);
}
