import { useMediaQuery } from 'react-responsive';
import ReactGA from 'react-ga4';
import { Button, LandingImage } from 'shared/components';
import gisauLogo from 'assets/gisau-logo/gisau.png';
import homeLandingImg from 'assets/landing-image/home.jpg';

export default function HomeLandingImage() {
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

	const handleClickButton = () => {
		ReactGA.event({
			category: 'Join Member',
			action: 'Clicked register for membership',
		});
		window.open('https://forms.gle/VF4Vvascc56iujT67', '_blank', 'noreferrer');
	};

	// const handleClickButton2 = () => {
	// 	ReactGA.event({
	// 		category: 'Hiring',
	// 		action: 'Clicked register for executives',
	// 	});
	// 	window.open(
	// 		// eslint-disable-next-line max-len
	// 		hiring,
	// 		'_blank',
	// 		'noreferrer',
	// 	);
	// };

	return (
		<LandingImage bgImage={homeLandingImg} isHomePage>
			<img
				src={gisauLogo}
				alt='Gisau Logo'
				className='relative w-[30%] md:w-1/4 lg:w-1/5 m-auto'
				loading='lazy'
			/>
			<h1
				className='my-4 md:my-8 mx-2 text-center relative
			font-montserrat font-semibold text-white text-xl
			sm:text-2xl md:text-4xl lg:text-[2.5rem] lg:leading-12'
			>
				{' '}
				Gado-Gado Indonesian Student Association&nbsp;
				{!isMobileView && <br />}
				of UBC
			</h1>
			<div className='flex flex-col sm:flex-row sm:gap-x-4 justify-center'>
				{/* <div className='grid justify-center'>
					<Button text='Become an executive!' landingButton handleClickButton={handleClickButton2} />
				</div> */}
				<div className='grid justify-center mt-4 sm:mt-0'>
					<Button text='Become a member!' landingButton handleClickButton={handleClickButton} />
				</div>
			</div>
		</LandingImage>
	);
}
