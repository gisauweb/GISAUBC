import React from 'react';
import { Box } from '@mui/material';
import { Footer } from 'shared/components/index';
import Title from './components/Title';
import PlugBox from './components/PlugBox';
import Location from './components/Location';

export default function ContactUs() {
	return (
		<Box className='' sx={{ background: 'linear-gradient(#EDE6CB, #FFFDF5);' }}>
			<Title />
			<Box className='w-4/5 mx-auto my-12 pb-12'>
				<PlugBox />
				<Location />
			</Box>
			<Footer />
		</Box>
	);
}
