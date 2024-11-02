import { Box } from '@mui/material';
import personIcon from 'assets/partners/personIcon.svg';
import puraIcon from 'assets/partners/puraIcon.svg';

function Image({ src, alt }) {
	return <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />;
}

export default function PartnerBackgroundIcons() {
	return (
		<>
			<Box className='absolute w-24 sm:w-28 md:w-1/10 left-0 top-0 opacity-80'>
				<Image src={personIcon} alt='icon' />
			</Box>
			<Box className='absolute w-52 lg:w-1/6 right-0 bottom-10 opacity-80'>
				<Image src={puraIcon} alt='icon' />
			</Box>
		</>
	);
}
