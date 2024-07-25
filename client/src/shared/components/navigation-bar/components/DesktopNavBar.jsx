import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import GameMenu from './GameMenu';
import isGamesPage from '../../../../routeUtils';

export default function DesktopNavBar({ hasLandingImage, bgColor, pages, location }) {
	const ScrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<Box className='right-0 fixed'>
			<Box
				className={`flex mr-6 lg:mr-20 navbar ${
					hasLandingImage ? bgColor : 'bg-white bg-opacity-70'
				} h-14 rounded-[15px]`}
			>
				{pages.map((page) => (
					<Link key={page.name} to={page.path} className='px-5 pt-3' onClick={ScrollToTop} target='_self'>
						{isGamesPage(page.path) ? (
							<GameMenu hasLandingImage={hasLandingImage} page={page} location={location} />
						) : (
							<p
								className={`underline-animation font-oswald text-xl
								${hasLandingImage ? 'text-white' : 'text-primary underline-animation-red'}
								${page.path === location.pathname && 'underlined'}`}
							>
								{page.name}
							</p>
						)}
					</Link>
				))}
			</Box>
		</Box>
	);
}
