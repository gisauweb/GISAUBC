import React from 'react';
import './Footer.css';
import { Email } from '@mui/icons-material';
import spotifyIcon from 'assets/footer/spotify-icon.svg';
import instagramIcon from 'assets/footer/instagram-icon.svg';
import linkedinIcon from 'assets/footer/linkedin-icon.svg';
import facebookIcon from 'assets/footer/facebook-icon.svg';
import plane from 'assets/footer/plane.svg';
import { useMediaQuery } from 'react-responsive';

export default function Footer({ showPlane }) {
	const isMobile = useMediaQuery({ query: '(max-width: 639px)' });

	return (
		<div id='contact' className='w-full relative bg-bgPrimary'>
			{showPlane && (
				<div className='w-4/5 mx-auto justify-end py-28 pb-60 hidden lg:flex bg-bgPrimary relative'>
					<img src={plane} alt='paper-plane' loading='lazy' />
				</div>
			)}
			<div className='footer mt-24 lg:mt-36 bg-bgPrimary'>
				<div className='footer-title text-lg sm:text-2xl'>Connect with us!</div>
				<div className='footer-icons'>
					<a href='https://www.instagram.com/gisaubc/' target='_blank' rel='noreferrer' className='icon'>
						<img src={instagramIcon} alt='instagram-icon' loading='lazy' />
					</a>
					<a href='https://ca.linkedin.com/company/gisau' target='_blank' rel='noreferrer' className='icon'>
						<img src={linkedinIcon} alt='linkedin-icon' loading='lazy' />
					</a>
					<a href='https://www.facebook.com/gisaubc/' target='_blank' rel='noreferrer' className='icon'>
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
				</div>
				<div className='footer-email text-base sm:text-xl'>
					<a href='mailto:contact.gisau@gmail.com'>
						<Email className='mr-1 pb-0.5' fontSize={isMobile ? 'small' : 'medium'} />
						contact.gisau@gmail.com
					</a>
				</div>
				<div className='footer-copyright text-base sm:text-xl'>GISAUBC &#169; 2023</div>
			</div>
		</div>
	);
}
