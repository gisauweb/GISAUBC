import React from 'react';
import { Box } from '@mui/material';
import { ScrollButton, LandingImage, Footer } from 'shared/components/index';
import partnersLandingImg from 'assets/landing-image/partners.webp';
import MainContainer from 'shared/layout/MainContainer';
import { PartnerTitle, PartnerList, PartnerContact } from './components/index';

export default function Partners() {
	return (
		<Box>
			<LandingImage bgImage={partnersLandingImg} text='Our Partners' />
			<MainContainer>
				<PartnerTitle />
				<PartnerList />
				<PartnerContact />
				<ScrollButton threshold={1 / 2} />
			</MainContainer>
			<Footer showPlane={false} />
		</Box>
	);
}
