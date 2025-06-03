import { Box } from '@mui/material';
import partnersLandingImg from 'assets/landing-image/partners.webp';
import { Footer, LandingImage, ScrollButton } from 'shared/components/index';
import PageHeading from 'shared/components/PageHeading';
import MainContainer from 'shared/layout/MainContainer';
import { PartnerContact, PartnerList, PartnerSpecial, PartnerTitle } from './components/index';
import PartnerBackgroundIcons from './components/PartnerBackgroundIcons';
import PartnerButton from './components/PartnerButton';

export default function Partners() {
	return (
		<Box>
			<LandingImage bgImage={partnersLandingImg} text='Our Partners' button={<PartnerButton />} />
			<MainContainer>
				<PageHeading>Become a partner and get featured in our events.</PageHeading>
				<PartnerSpecial />
				<PartnerTitle />
				<PartnerList />
				<PartnerContact />
				<PartnerBackgroundIcons />
				<ScrollButton threshold={1 / 2} />
			</MainContainer>
			<Footer />
		</Box>
	);
}
