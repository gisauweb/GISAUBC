import React from 'react';
import { Box } from '@mui/material';
import { ScrollButton, LandingImage, Footer } from 'shared/components/index';
import partnersLandingImg from 'assets/landing-image/partners.webp';
import { Footer, LandingImage, ScrollButton } from 'shared/components/index';
import MainContainer from 'shared/layout/MainContainer';
import { PartnerTitle, PartnerList, PartnerContact, PartnerSpecial, PartnerHeadline } from './components/index';
import PartnerButton from './components/PartnerButton';
import PartnerBackgroundIcons from './components/PartnerBackgroundIcons';

export default function Partners() {
	return (
		<Box>
			<LandingImage bgImage={partnersLandingImg} text='Our Partners' button={<PartnerButton />} />
			<MainContainer>
				<PartnerHeadline />
				<PartnerSpecial />
				<PartnerTitle />
				<PartnerList />
				<PartnerContact />
				<PartnerBackgroundIcons />
				<ScrollButton threshold={1 / 2} />
			</MainContainer>
			<Footer showPlane={false} />
		</Box>
	);
}
