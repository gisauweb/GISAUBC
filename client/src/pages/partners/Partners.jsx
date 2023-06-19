import React from 'react';
import { Box, Divider } from '@mui/material';
import { ScrollButton, LandingImage, Footer } from 'shared/components/index';
import partnersLandingImg from 'assets/landing/partners.jpeg';
import MainContainer from 'shared/layout/MainContainer';
import { SponsorRegistration, SponsorTitle, SponsorList } from './components/index';

export default function Partners() {
	return (
		<Box className='bg-[#FFFDF5]'>
			<LandingImage bgImage={partnersLandingImg} text='Our Partners' />
			<MainContainer>
				<SponsorTitle />
				<Divider className='py-[0.5px]' color='black' />
				<SponsorList />
				<Divider className='py-[0.5px]' color='black' />
				<SponsorRegistration />
				<ScrollButton threshold={1 / 2} />
			</MainContainer>
			<Footer showPlane={false} />
		</Box>
	);
}
