import React from 'react';
import { useMediaQuery } from 'react-responsive';
import LandingImage from 'shared/components/landing-image/LandingImage';
import ReactGA from 'react-ga4';
import Button from 'shared/components/button/Button';
import gisauLogo from '../../../assets/gisau-logo/gisau.png';
import homeLandingImg from '../../../assets/landing/home.jpg';

export default function HomeLandingImage() {
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

	const handleClickButton = () => {
		ReactGA.event({
			category: 'Hiring',
			action: 'Clicked hiring package button',
		});
		window.open(
			'https://drive.google.com/file/d/1pznE1l3oLW-n5KpCiyQ6UWNShFJgJ-fQ/view?usp=drive_link',
			'_blank',
			'noreferrer',
		);
	};

	return (
		<LandingImage bgImage={homeLandingImg} isHomePage>
			<img src={gisauLogo} alt='Gisau Logo' className='w-[30%] md:w-1/4 lg:w-1/5 m-auto' />
			<h1
				className='my-4 md:my-8 mx-2 text-center
			font-montserrat font-semibold text-white text-xl
			sm:text-2xl md:text-4xl lg:text-[2.5rem] lg:leading-12'
			>
				{`Gado-Gado Indonesian Student Association ${!isMobileView && <br />} of UBC`}
			</h1>
			<div className='flex gap-x-4 justify-center'>
				<Button
					className='grid justify-center'
					text='Become an executive!'
					landingButton
					handleClickButton={handleClickButton}
				/>
			</div>
		</LandingImage>
	);
}
