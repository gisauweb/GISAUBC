import React from 'react';
import { Box, Divider } from '@mui/material';
import { ScrollButton, LandingImage, Footer } from 'shared/components/index';
import partnersLandingImg from 'assets/landing-image/partners.webp';
import MainContainer from 'shared/layout/MainContainer';
import { PartnerRegistration, PartnerTitle, PartnerList, PartnerContact } from './components/index';
import PartnerButton from './PartnerButton';

export default function Partners() {
	return (
		<Box>
			<LandingImage bgImage={partnersLandingImg} text='Our Partners' button={<PartnerButton />} />
			<MainContainer>
				<PartnerTitle />
				<Divider className='py-[0.5px]' color='black' />
				<PartnerList />
				<Divider className='py-[0.5px]' color='black' />
				<PartnerRegistration />
				<Divider className='py-[0.5px]' color='black' />
				<PartnerContact />
				<ScrollButton threshold={1 / 2} />
			</MainContainer>
			<Footer showPlane={false} />
		</Box>
	);
}
