import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from '../../../shared/components/button/Button';
import { LandingImage } from 'shared/components/landing-image/LandingImage';
import gisau_logo from '../../../assets/gisau-logo/gisau.png';
import home_landing_img from '../../../assets/landing/home.jpg';
import { gtag } from 'gtag-ga';

export const HomeLandingImage = () => {
	const isMobileView = useMediaQuery({
		query: '(max-width: 639px)',
	});

	const handleClickButton = () => {
		gtag('event', 'hiring_package');
		window.open(
			'https://drive.google.com/file/d/1pznE1l3oLW-n5KpCiyQ6UWNShFJgJ-fQ/view?usp=drive_link',
			'_blank',
			'noreferrer'
		);
	};

	return (
		<LandingImage bgImage={home_landing_img} isHomePage={true}>
			<img src={gisau_logo} alt='Gisau Logo' className='w-[30%] md:w-1/4 lg:w-1/5 m-auto' />
			<h1 className='text-white my-4 md:my-8 mx-2 font-montserrat text-center font-semibold text-xl sm:text-2xl md:text-4xl lg:text-[2.5rem] lg:leading-12'>
				Gado-Gado Indonesian Student Association {!isMobileView && <br />} of UBC
			</h1>
			<div className='flex gap-x-4 justify-center'>
				<Button
					className='grid justify-center'
					text='Become an executive!'
					landingButton={true}
					// transparentBg={true}
					handleClickButton={handleClickButton}
				/>
			</div>
		</LandingImage>
	);
};
