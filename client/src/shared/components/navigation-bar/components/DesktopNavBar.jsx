import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import NavBarLogo from './NavBarLogo';
// import GameMenu from './GameMenu';
// import isGamesPage from '../../../../routeUtils';

export default function DesktopNavBar({ bgColor, hasLandingImage, pages, location }) {
	const ScrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<Box className='fixed w-full flex justify-between align-middle px-10 mt-8'>
			<Box className='w-1/3'>
				<NavBarLogo />
			</Box>
			<Box
				className={`flex mx-6 navbar px-4 align-middle ${
					hasLandingImage ? bgColor : 'bg-white bg-opacity-70'
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
			<Box className='w-1/3 flex justify-end'>
				<Link
					to='https://forms.gle/33ovq6wBh1jaXjBu7'
					className='bg-bgBlack border-2 rounded-full border-gamesRed h-12
					justify-center items-center px-7 py-2.5 hidden lg:flex xl:w-1/2'
				>
					<p className='underline-animation font-oswald text-sm md:text-base text-white'>Become a Member</p>
				</Link>
			</Box>
		</Box>
	);
}
