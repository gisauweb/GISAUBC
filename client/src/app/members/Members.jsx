import { Box } from '@mui/material';
import membersLandingImg from 'assets/landing-image/members.webp';
import wavy from 'assets/partners/text decor 3.svg';
import { Footer, LandingImage, ScrollButton } from 'app/shared/components/index';
import PageHeading from 'app/shared/components/PageHeading';
import SubHeading from 'app/shared/components/SubHeading';
import MainContainer from 'app/shared/layout/MainContainer';
import { MemberBenefits, MemberContact, MemberSpecial } from './components/index';
import MemberButton from './components/MemberButton';

export default function Members() {
	return (
		<Box>
			<LandingImage
				bgImage={membersLandingImg}
				text='Become A Member'
				button={<MemberButton text='GISAU Membership Form' />}
			/>
			<MainContainer>
				<PageHeading>Join our community and unlock exclusive member benefits.</PageHeading>
				<MemberSpecial />
				<MemberBenefits />
				<SubHeading text='INTERESTED TO BECOME A MEMBER?' isLeft icon={wavy} />
				<MemberContact />
				<ScrollButton threshold={1 / 2} />
			</MainContainer>
			<Footer />
		</Box>
	);
}
