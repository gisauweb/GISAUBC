import React from 'react';
import { Box } from '@mui/material';
import { ScrollButton, LandingImage, Footer } from 'shared/components/index';
import membersLandingImg from 'assets/landing-image/members.webp';
import MainContainer from 'shared/layout/MainContainer';
import { MemberTitle, MemberContact, MemberSpecial, MemberHeadline } from './components/index';
import PartnerButton from './components/MemberButton';

export default function Members() {
	return (
		<Box>
			<LandingImage bgImage={membersLandingImg} text='Become A Member' button={<PartnerButton />} />
			<MainContainer>
				<MemberHeadline />
				<MemberSpecial />
				<MemberTitle />
				<MemberContact />
				<ScrollButton threshold={1 / 2} />
			</MainContainer>
			<Footer showPlane={false} />
		</Box>
	);
}
