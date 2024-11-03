import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import pages from './constants';
import MobileNavBar from './components/MobileNavBar';
// import NavBarLogo from './components/NavBarLogo';
import DesktopNavBar from './components/DesktopNavBar';
import isGamesPage from '../../../routeUtils';

export default function NavigationBar() {
	const location = useLocation();
	const filteredPaths = pages.filter((page) => page.hasLandingImage).map((page) => page.path);
	const hasLandingImage = filteredPaths.includes(location.pathname);

	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return isGamesPage(location.pathname) ? (
		<Outlet />
	) : (
		<div className={isMenuOpen ? 'overflow-y-hidden' : 'overflow-y-visible'}>
			<Box className='flex justify-between items-center z-30 w-full mt-[5vh] absolute'>
				{/* <NavBarLogo hasLandingImage={hasLandingImage} /> */}
				{isMobile ? (
					<MobileNavBar
						isMenuOpen={isMenuOpen}
						setIsMenuOpen={setIsMenuOpen}
						hasLandingImage={hasLandingImage}
						location={location}
					/>
				) : (
					<DesktopNavBar hasLandingImage={hasLandingImage} location={location} pages={pages} />
				)}
			</Box>
			<Box>
				<Outlet />
			</Box>
		</div>
	);
}
