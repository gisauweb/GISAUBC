import React, { useEffect } from 'react';
import MenuInterface from '../MenuInterface';

export default function MobileNavBar({ isMenuOpen, setIsMenuOpen, hasLandingImage }) {
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
		handleClosingMenu();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='mr-6 sm:mr-20'>
			<MenuInterface
				isOpen={isMenuOpen}
				closeHandler={handleClosingMenu}
				openHandler={handleOpeningMenu}
				hasLandingImage={hasLandingImage}
			/>
		</div>
	);
}
