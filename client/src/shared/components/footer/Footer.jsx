import React from 'react';
import './Footer.css';
import plane from 'assets/footer/plane.svg';
import { useMediaQuery } from 'react-responsive';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Footer({ showPlane = true }) {
	const isMobile = useMediaQuery({ query: '(max-width: 639px)' });
	const ScrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div id='contact' className='w-full h-full relative bg-bgPrimary'>
			<div className='flex flex-row gap-6'>
				<Typography
					variant='h3'
					color='primary'
					className={`${isMobile ? 'px-24 justify-center font-small w-full pt-12' : 'pl-12 w-full pt-48'}`}
				>
					Thanks for stopping by!
				</Typography>
				{showPlane && (
					<div className='w-4/5 justify-end pb-60 hidden lg:flex bg-bgPrimary'>
						<img src={plane} alt='paper-plane' loading='lazy' />
					</div>
				)}
			</div>
			<div
				className={`footer-email text-base sm:text-xl flex ${
					isMobile ? 'flex-col gap-2' : 'flex-row gap-6'
				} pb-8`}
			>
				<a href='mailto:contact.gisau@gmail.com' className='underline' fontSize={isMobile ? 'small' : 'medium'}>
					Email Us
				</a>
				<Link
					to='/partners'
					className='underline'
					fontSize={isMobile ? 'small' : 'medium'}
					onClick={ScrollToTop}
				>
					Become a Partner
				</Link>
				<div className={`footer-email flex ${isMobile ? '' : 'absolute left-12'}`}>&#169; 2024 GISAU</div>
			</div>
		</div>
	);
}
