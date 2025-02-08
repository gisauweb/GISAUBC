import { useMediaQuery } from 'react-responsive';
import ReactGA from 'react-ga4';
import { Button, LandingImage } from 'shared/components';
import { Link } from 'react-router-dom';
import gisauLogo from 'assets/gisau-logo/gisau.png';
import homeLandingImg from 'assets/landing-image/home.webp';
import gamesButtonIcon from 'assets/home-page/buttons/gameBtnIcon.svg';
import memberButtonIcon from 'assets/home-page/buttons/memberBtnIcon.svg';

export default function HomeLandingImage() {
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

	const handleMemberButton = () => {
		ReactGA.event({
			category: 'Join Member',
			action: 'Click to register for membership',
		});
		window.open('https://forms.gle/33ovq6wBh1jaXjBu7', '_blank', 'noreferrer');
	};

	const handleGamesButton = () => {
		ReactGA.event({ category: 'GISAU Games', action: 'Take me to GISAU Games' });
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
			<div className='flex flex-col sm:flex-row sm:gap-x-4 gap-y-4 justify-center w-full'>
				<div className='flex fl justify-center mt-4 sm:mt-0'>
					<Button text='Become a Member' icon={memberButtonIcon} handleClickButton={handleMemberButton} />
				</div>
				<div className='flex fl justify-center mt-1 sm:mt-0'>
					<Link to='/games' onClick={handleGamesButton}>
						<Button text='Take Me to GISAU Games' icon={gamesButtonIcon} />
					</Link>
				</div>
			</div>
		</LandingImage>
	);
}
