import React from 'react';
import { Box } from '@mui/material';
import { Footer } from 'app/shared/components/index';
import hands from 'assets/contact-us/hands.svg';
import Title from './components/Title';
import PlugBox from './components/PlugBox';
import Location from './components/Location';

export default function ContactUs() {
	return (
		<Box className='' sx={{ background: 'linear-gradient(#EDE6CB, #FFFDF5);' }}>
			<Title />
			<Box className='w-3/4 md:w-[80%] xl:w-[72%] mx-auto my-12 pb-36'>
				<PlugBox />
				<Location />
			</Box>
			<img
				src={hands}
				alt='hands-background-aesthetic'
				className='absolute w-full sm:w-[47%] 2xl:max-w-4xl right-0 z-0
				top-2/3 md:top-[26%] lg:top-[24%] xl:top-[21.5%] 2xl:top-[18.5%]'
				loading='lazy'
			/>
			<Footer />
		</Box>
	);
}
