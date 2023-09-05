import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { ReactComponent as NavLogoBig } from 'assets/gisau-logo/gisau_white.svg';
import { ReactComponent as NavLogoSmall } from 'assets/gisau-logo/gisau_white_small.svg';

import pages from './constants';
import MenuInterface from './MenuInterface';

export default function NavigationBar() {
	const location = useLocation();
	const filteredPaths = pages.filter((page) => page.hasLandingImage).map((page) => page.path);
	const hasLandingImage = filteredPaths.includes(location.pathname);
	const [bgColor, setBgColor] = useState('');

	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClosingMenu = () => {
		setIsMenuOpen(false);

		// Unsets Background Scrolling to use when SideDrawer/Modal is closed
		document.body.style.overflow = 'unset';
	};

	const handleOpeningMenu = () => {
		setIsMenuOpen(true);

		// Disables Background Scrolling whilst the SideDrawer/Modal is open
		if (typeof window !== 'undefined' && window.document) {
			document.body.style.overflow = 'hidden';
		}
	};

	useEffect(() => {
		handleClosingMenu(); // Close the navigation panel
	}, [location.pathname]);

	useEffect(() => {
		const handleScroll = () => {
			const { scrollY } = window;
			const scrollThreshold = 50;
			if (scrollY > scrollThreshold) {
				setBgColor('bg-primary bg-opacity-90 h-14 rounded-[15px]');
			} else {
				setBgColor('');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={isMenuOpen ? 'overflow-y-hidden' : 'overflow-y-visible'}>
			<Box className='flex justify-between items-center z-30 w-full mt-[5vh] fixed'>
				<Box className='ml-6 sm:ml-20 md:ml-6 lg:ml-20'>
					<Link to='/'>
						{hasLandingImage ? (
							<NavLogoBig className='w-14 sm:w-16 h-auto' />
						) : (
							<NavLogoSmall className='w-14 sm:w-16 h-auto' />
						)}
					</Link>
				</Box>
				{isMobile ? (
					<div className='mr-6 sm:mr-20'>
						<MenuInterface
							isOpen={isMenuOpen}
							closeHandler={handleClosingMenu}
							openHandler={handleOpeningMenu}
							hasLandingImage={hasLandingImage}
						/>
					</div>
				) : (
					<Box
						className={`flex mr-6 lg:mr-20 navbar ${
							hasLandingImage ? bgColor : 'bg-white bg-opacity-50'
						} h-14 rounded-[15px]`}
					>
						{pages.map((page) => (
							<Link key={page.name} to={page.path} className='px-5 pt-3'>
								<p
									className={`hover:underline underline-offset-8 decoration-2 font-oswald text-xl 
									${hasLandingImage ? 'text-white' : 'text-primary'}
									${page.path === location.pathname && 'underline'}`}
								>
									{page.name}
								</p>
							</Link>
						))}
					</Box>
				)}
			</Box>
			<Box>
				<Outlet />
			</Box>
		</div>
	);
}
