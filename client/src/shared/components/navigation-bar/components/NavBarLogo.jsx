import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as NavLogoBig } from 'assets/gisau-logo/gisau_white.svg';
import { ReactComponent as NavLogoSmall } from 'assets/gisau-logo/gisau_white_small.svg';

export default function NavBarLogo({ hasLandingImage }) {
	return (
		<Box className='ml-6 sm:ml-20 md:ml-6 lg:ml-20'>
			<Link to='/'>
				{hasLandingImage ? (
					<NavLogoBig className='w-14 sm:w-16 h-auto' />
				) : (
					<NavLogoSmall className='w-14 sm:w-16 h-auto' />
				)}
			</Link>
		</Box>
	);
}
