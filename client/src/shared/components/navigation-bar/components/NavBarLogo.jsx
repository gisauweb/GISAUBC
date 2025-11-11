import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NavBarLogo({ hasLandingImage }) {
	const ScrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<Box className='ml-6 lg:ml-16'>
			<Link to='/' onClick={ScrollToTop}>
				<img src='/gisau-logo/gisau.svg' className='w-14 sm:w-16 h-auto' />
			</Link>
		</Box>
	);
}
