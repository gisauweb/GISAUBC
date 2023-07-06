import React from 'react';
import { Typography } from 'shared/components';
import { Box } from '@mui/material';
import Marquee from 'react-fast-marquee';
import HIGHLIGHTS from 'assets/about/higlights/index';

export default function Highlights() {
	return (
		<Box className='my-20'>
			<Typography variant='h1' text='Highlights' />
			<Marquee gradient speed={120} className='mt-14'>
				<div className='flex items-center justify-around flex-wrap'>
					{HIGHLIGHTS.map((image) => (
						<div className='mx-5' key={image}>
							<img src={image} alt='higlight' className='h-80 aspect-[1.5] object-fill' />
						</div>
					))}
				</div>
			</Marquee>
		</Box>
	);
}
