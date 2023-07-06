import React from 'react';
import { Typography } from 'shared/components';
import { Box } from '@mui/material';
import Marquee from 'react-fast-marquee';
import HIGHLIGHTS from 'assets/about/higlights/index';
import { useMediaQuery } from 'react-responsive';

export default function Highlights() {
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

	return (
		<Box className='my-16 sm:my-20'>
			<Typography variant='h1' text='Highlights' />
			<Marquee
				gradient
				gradientWidth={isMobileView ? 10 : 100}
				pauseOnClick
				speed={isMobileView ? 60 : 120}
				className='mt-6 sm:mt-14'
			>
				<div className='flex items-center justify-around flex-wrap'>
					{HIGHLIGHTS.map((image) => (
						<div className='mx-5' key={image}>
							<img src={image} alt='higlight' className='h-44 sm:h-60 lg:h-80' />
						</div>
					))}
				</div>
			</Marquee>
		</Box>
	);
}
