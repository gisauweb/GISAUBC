/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import spotifyIcon from 'assets/footer/spotify-icon.svg';
import instagramIcon from 'assets/footer/instagram-icon.svg';
import linkedinIcon from 'assets/footer/linkedin-icon.svg';
import facebookIcon from 'assets/footer/facebook-icon.svg';
import tiktokIcon from 'assets/footer/tiktok-icon.svg';
import emailIcon from 'assets/footer/email-icon.svg';
import NavBarLogo from './NavBarLogo';

export default function DesktopNavBar({ bgColor, hasLandingImage, pages, location }) {
	const [isHovered, setIsHovered] = useState(false);

	const ScrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<Box className='fixed w-full h-16 flex justify-between px-10 mt-8'>
			<Box className='w-1/3'>
				<NavBarLogo />
			</Box>
			<Box className='relative h-full items-center pt-2'>
				<Box
					className={`relative flex items-center mx-6 navbar px-4 ${
						hasLandingImage ? bgColor : 'bg-white bg-opacity-70'
					} h-12 rounded-full`}
				>
					{pages.map((page) => (
						<Link key={page.name} to={page.path} className='px-5' onClick={ScrollToTop} target='_self'>
							<p
								className={`underline-animation font-oswald text-md
								${hasLandingImage ? 'text-white' : 'text-primary underline-animation-red'}
								${page.path === location.pathname && 'underlined'}`}
							>
								{page.name}
							</p>
						</Link>
					))}
				</Box>
			</Box>
			<Box className='w-1/3 flex justify-end items-center h-full'>
				<Link
					to='/members'
					onClick={ScrollToTop}
					className='bg-bgBlack border-2 rounded-full border-gamesRed h-fit
					justify-center items-center px-3 md:px-7 py-2 md:py-2.5 hidden lg:flex xl:w-1/2'
				>
					<p className='underline-animation font-oswald text-sm md:text-base text-white'>Become a Member</p>
				</Link>
			</Box>
			<Box
				className={`fixed bottom-8 right-8 transition-all duration-300 ${
					isHovered ? 'w-48' : 'w-32'
				} h-12 flex justify-center items-center`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<Link
					onClick={ScrollToTop}
					className='bg-bgBlack border-2 rounded-full border-gamesRed h-full w-full
					flex items-center justify-center overflow-hidden'
				>
					{isHovered ? (
						<Box className='footer-icons flex'>
							<a
								href='#'
								className='icon'
								onClick={(e) => {
									e.preventDefault();
									window.open('mailto:sponsorship.gisau@gmail.com', '_blank', 'noreferrer');
								}}
							>
								<img src={emailIcon} alt='email-icon' loading='lazy' />
							</a>
							<a
								href='https://www.instagram.com/gisaubc/'
								target='_blank'
								rel='noreferrer'
								className='icon'
							>
								<img src={instagramIcon} alt='instagram-icon' loading='lazy' />
							</a>
							<a href='https://www.tiktok.com/@gisaubc' target='_blank' rel='noreferrer' className='icon'>
								<img src={tiktokIcon} alt='tiktok-icon' loading='lazy' />
							</a>
							<a
								href='https://ca.linkedin.com/company/gisau'
								target='_blank'
								rel='noreferrer'
								className='icon'
							>
								<img src={linkedinIcon} alt='linkedin-icon' loading='lazy' />
							</a>
							<a
								href='https://www.facebook.com/gisaubc/'
								target='_blank'
								rel='noreferrer'
								className='icon'
							>
								<img src={facebookIcon} alt='facebook-icon' loading='lazy' />
							</a>
							<a
								href='https://open.spotify.com/show/4n3LXi2mKxLpscsIGVAgnR?si=e5a5fed87a694f17'
								target='_blank'
								rel='noreferrer'
								className='icon'
							>
								<img src={spotifyIcon} alt='spotify-icon' loading='lazy' />
							</a>
						</Box>
					) : (
						<p className='font-oswald text-sm md:text-base text-white'>Let&apos;s Connect</p>
					)}
				</Link>
			</Box>
		</Box>
	);
}
