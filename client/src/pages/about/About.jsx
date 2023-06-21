import React from 'react';
import { Box } from '@mui/material';
import MainContainer from 'shared/layout/MainContainer';
import { Typography, ScrollButton, LandingImage, Footer } from 'shared/components/index';
import eventLandingImage from 'assets/landing/event.jpg';
import about1 from 'assets/about/img_2.svg';
import about2 from 'assets/about/img_1.svg';

export default function About() {
	return (
		<Box className='bg-[#FFFDF5]'>
			<LandingImage bgImage={eventLandingImage} text='About Us' />
			<MainContainer>
				<Box className='w-[85%] mx-auto pt-0'>
					<Box className='py-14'>
						<Typography
							variant='h1'
							text='We are a student organization that promotes and
						celebrates Indonesian culture in UBC since early 2000s.'
						/>
					</Box>
					<Box className='flex justify-between w-full py-6'>
						<Box className='w-1/2'>
							<img src={about1} alt='about_1' className='w-[95%]' />
						</Box>
						<Box className='w-1/2 flex justify-end'>
							<img src={about2} alt='about_2' className='w-[95%]' />
						</Box>
					</Box>
				</Box>
				<ScrollButton threshold={7 / 10} />
			</MainContainer>
			<Footer />
		</Box>
	);
}
