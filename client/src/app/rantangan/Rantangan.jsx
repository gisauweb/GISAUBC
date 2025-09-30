import { Box } from '@mui/material';
import rantanganLandingImage from 'assets/landing-image/rantangan.webp';
import { Footer, LandingImage, ScrollButton } from 'app/shared/components/index';
import PageHeading from 'app/shared/components/PageHeading';
import MainContainer from 'app/shared/layout/MainContainer';
import RantanganContent from './components/RantanganContent';

export default function Rantangan() {
	return (
		<Box className='bg-[#FFFDF5]'>
			<LandingImage bgImage={rantanganLandingImage} text='RANTANGAN' />
			<MainContainer>
				<PageHeading>
					Fuel your study sessions with some delicious Indonesian food prepared by our F&B team.
				</PageHeading>
				<RantanganContent upcoming />
				<RantanganContent upcoming={false} />
				<ScrollButton threshold={1 / 2} />
			</MainContainer>
			<Footer />
		</Box>
	);
}
