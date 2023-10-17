import React from 'react';
import { Box, Divider } from '@mui/material';
import { ScrollButton, LandingImage, Footer } from 'shared/components/index';
import partnersLandingImg from 'assets/landing-image/partners.jpeg';
import MainContainer from 'shared/layout/MainContainer';
import { PartnerRegistration, PartnerTitle, PartnerList } from './components/index';

export default function Partners() {
	return (
		<Box>
			<LandingImage bgImage={partnersLandingImg} text='Our Partners' />
			<MainContainer>
				<PartnerTitle />
				<Divider className='py-[0.5px]' color='black' />
				<PartnerList />
				<Divider className='py-[0.5px]' color='black' />
				<PartnerRegistration />
				<ScrollButton threshold={1 / 2} />
			</MainContainer>
			<Footer showPlane={false} />
		</Box>
	);
}
