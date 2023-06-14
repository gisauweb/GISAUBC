import React from 'react';
import { Box, Divider } from '@mui/material';
import ScrollButtonContainer from 'shared/components/ScrollButton';
import LandingImage from 'shared/components/landing-image/LandingImage';
import partnersLandingImg from 'assets/landing/partners.jpeg';
import { SponsorRegistration, SponsorTitle, SponsorList } from './components/index';
import Footer from '../../shared/components/footer/Footer';
import MainContainer from '../../shared/layout/MainContainer';

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
				<ScrollButtonContainer threshold={1 / 2} />
			</MainContainer>
			<Footer showPlane={false} />
		</Box>
	);
}
