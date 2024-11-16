import { Box, Divider } from '@mui/material';
import partnersLandingImg from 'assets/landing-image/partners.webp';
import { Footer, LandingImage, ScrollButton } from 'shared/components/index';
import MainContainer from 'shared/layout/MainContainer';
import { PartnerContact, PartnerList, PartnerRegistration, PartnerTitle } from './components/index';
import PartnerButton from './components/PartnerButtonrtnerButton';
import PartnerBackgroundIcons from './components/PartnerBackgroundIcons';

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
				<PartnerBackgroundIcons />
				<ScrollButton threshold={1 / 2} />
			</MainContainer>
			<Footer showPlane={false} />
		</Box>
	);
}
