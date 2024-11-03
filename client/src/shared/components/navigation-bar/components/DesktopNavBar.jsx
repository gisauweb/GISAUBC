import { Box } from '@mui/material';
import ReactGA from 'react-ga4';
import { Link } from 'react-router-dom';
import { Button } from 'shared/components';
// import GameMenu from './GameMenu';
// import isGamesPage from '../../../../routeUtils';

export default function DesktopNavBar({ hasLandingImage, pages, location }) {
	const ScrollToTop = () => {
		window.scrollTo(0, 0);
	};

	const handleMemberButton = () => {
		ReactGA.event({
			category: 'Join Member',
			action: 'Click to register for membership',
		});
		window.open('https://forms.gle/33ovq6wBh1jaXjBu7', '_blank', 'noreferrer');
	};

	return (
		<Box className='w-full flex justify-around'>
			<Box>LOGO</Box>
			<Box
				className={`flex mx-6 navbar px-4 ${
					hasLandingImage ? 'bg-gamesRed h-14 rounded-[20px]' : 'bg-white bg-opacity-70'
				} h-14 rounded-full`}
			>
				{pages.map((page) => (
					<Link key={page.name} to={page.path} className='px-5 pt-3' onClick={ScrollToTop} target='_self'>
						<p
							className={`underline-animation font-oswald text-md
								${hasLandingImage ? 'text-white' : 'text-primary underline-animation-red'}
								${page.path === location.pathname && 'underlined'}`}
						>
							{page.name}
						</p>
					</Link>
				))}
			</Box>
			<Box>
				<Button
					text='Become a member'
					className='bg-[#222222] border-2 border-gamesRed h-full'
					handleClickButton={handleMemberButton}
				/>
			</Box>
		</Box>
	);
}
