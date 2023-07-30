import React from 'react';
import { useMediaQuery } from 'react-responsive';
import LandingImage from 'shared/components/landing-image/LandingImage';
import ReactGA from 'react-ga4';
import Button from '../../../shared/components/button/Button';
import gisauLogo from '../../../assets/gisau-logo/gisau.png';
import homeLandingImg from '../../../assets/landing-image/home.jpg';

export default function HomeLandingImage() {
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

	const handleClickButton = () => {
		ReactGA.event({
			category: 'Hiring',
			action: 'Clicked register for UBUD',
		});
		window.open('https://forms.gle/AXqcbDGtKBBiHCqX6', '_blank', 'noreferrer');
	};

	return (
		<LandingImage bgImage={homeLandingImg} isHomePage>
			<img src={gisauLogo} alt='Gisau Logo' className='w-[30%] md:w-1/4 lg:w-1/5 m-auto' />
			<h1
				className='my-4 md:my-8 mx-2 text-center
			font-montserrat font-semibold text-white text-xl
			sm:text-2xl md:text-4xl lg:text-[2.5rem] lg:leading-12'
			>
				{' '}
				Gado-Gado Indonesian Student Association
				{!isMobileView && <br />}
				of UBC
			</h1>
			<div className='flex gap-x-4 justify-center'>
				<div className='grid justify-center'>
					<Button text='Register for UBUD!' landingButton handleClickButton={handleClickButton} />
				</div>
			</div>
		</LandingImage>
	);
}
