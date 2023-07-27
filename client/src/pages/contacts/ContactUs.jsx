import React from 'react';
import { Box } from '@mui/material';
import { Footer } from 'shared/components/index';
import hands from 'assets/contact-us/hands.svg';
import Title from './components/Title';
import PlugBox from './components/PlugBox';
import Location from './components/Location';

export default function ContactUs() {
	return (
		<Box className='relative' sx={{ background: 'linear-gradient(#EDE6CB, #FFFDF5);' }}>
			<Title />
			<Box className='w-4/5 mx-auto my-12 pb-12'>
				<PlugBox />
				<Location />
			</Box>
			<img src={hands} alt='hands-background-aesthetic' className='absolute top-1/4 right-0' />
			<Footer />
		</Box>
	);
}
