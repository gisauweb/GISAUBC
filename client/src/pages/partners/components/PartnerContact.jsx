import React from 'react';
import wavy from 'assets/partners/text decor 3.svg';
// import pura from 'assets/partners/Pura (1).svg';
import { Container, Typography } from '@mui/material';
import { Button } from 'shared/components';

function PartnerContact() {
	// const containerStyle = {
	// 	width: '100%',
	// 	maxWidth: '100%',
	// 	display: 'flex',
	// 	flexDirection: 'column',
	// 	alignItems: 'center',
	// 	textAlign: 'center',
	// };

	return (
		<Container className='flex w-full h-full mt-28 sm:py-3 pb-24 lg:pb-36 lg:pt-6 pt-4 relative'>
			<div>
				<div className='flex'>
					<img
						src={wavy}
						alt='Wavy'
						className='h-6 sm:h-10 xl:h-full right-0 top-0 sm:right-3 sm:top-0 lg:top-2 xl:top-0'
						loading='lazy'
					/>
					<Typography variant='h4' color='primary' className='flex uppercase'>
						Interested to become a partner?
					</Typography>
				</div>
				<Container className='flex mt-16 justify-center items-center'>
					<Typography variant='h4' className='flex justify-center items-center uppercase mb-6'>
						Contact us at
					</Typography>
					<p className='flex items-center justify-center mt-5'>
						<a
							href='mailto:sponsorship.gisau@gmail.com'
							className='items-center border-3 border-primary rounded-full pb-20 lg:pb-0'
							aria-label='Save'
						>
							<Button text='sponsorship.gisau@gmail.com' background='transparentBg' />
						</a>
					</p>
				</Container>
			</div>
			{/* <img
				src={pura}
				alt='Pura'
				className='h-6 xl:h-full absolute right-0 top-1 sm:right-2 sm:top-0 lg:top-20 xl:bottom-11'
				loading='lazy'
			/> */}
		</Container>
	);
}

export default PartnerContact;
