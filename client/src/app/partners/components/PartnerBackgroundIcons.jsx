import { Box } from '@mui/material';
import personIcon from 'assets/partners/personIcon.svg';
import puraIcon from 'assets/partners/puraIcon.svg';
import flowerIcon from 'assets/partners/flowerIcon.svg';

function Image({ src, alt }) {
	return <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />;
}

export default function PartnerBackgroundIcons() {
	return (
		<>
			<Box className='absolute w-32 sm:w-28 md:w-1/10 left-0 top-1/4 opacity-80 z-0'>
				<Image src={personIcon} alt='icon' />
			</Box>
			<Box className='absolute w-52 lg:w-1/5 right-0 bottom-10 opacity-80 z-0'>
				<Image src={puraIcon} alt='icon' />
			</Box>
			<Box className='absolute w-56 lg:w-1/5 right-0 top-0 opacity-80 z-0'>
				<Image src={flowerIcon} alt='icon' />
			</Box>
		</>
	);
}
