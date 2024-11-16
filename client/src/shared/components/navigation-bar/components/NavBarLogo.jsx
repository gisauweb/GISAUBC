import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as NavLogoBig } from 'assets/gisau-logo/gisau.svg';
// import { ReactComponent as NavLogoSmall } from 'assets/gisau-logo/gisau.svg';

export default function NavBarLogo({ hasLandingImage }) {
	return (
		<Box className='ml-6 lg:ml-16'>
			<Link to='/'>
				{hasLandingImage ? (
					<NavLogoBig className='w-14 sm:w-16 h-auto' />
				) : (
					<NavLogoBig className='w-14 sm:w-16 h-auto' />
				)}
			</Link>
		</Box>
	);
}
