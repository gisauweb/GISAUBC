import React from 'react';
import { Box, Typography } from '@mui/material';
import Marquee from 'react-fast-marquee';
import HIGHLIGHTS from 'assets/about/higlights';
import { useMediaQuery } from 'react-responsive';

export default function Highlights() {
	const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });
	return (
		<Box className='pt-0 pb-20 sm:pt-15 sm-pb-40'>
			<Marquee
				gradient
				gradientWidth={isMobileView ? 10 : 100}
				pauseOnClick
				speed={isMobileView ? 60 : 120}
				className='mt-9 sm:mt-10'
			>
				<div className='flex items-center justify-around flex-wrap'>
					{HIGHLIGHTS.map((image) => (
						<div className='mx-5' key={image}>
							<img src={image} alt='higlight' className='h-44 sm:h-60 lg:h-80 rounded-[20px]' loading='lazy' />
						</div>
					))}
				</div>
			</Marquee>
		</Box>
	);
}
