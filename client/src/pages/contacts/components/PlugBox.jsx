import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import PLUGS from '../constants';

export default function PlugBox() {
	const [hoveredBox, setHoveredBox] = useState(null);

	const handlePlugClick = (link) => {
		window.open(link, '_blank', 'noreferrer');
	};

	const handleBoxHover = (index) => {
		setHoveredBox(index);
	};

	return (
		<Box
			className='relative flex flex-col sm:flex-row justify-between z-10
						space-y-10 sm:space-y-0 sm:space-x-10 lg:space-x-16 my-10'
		>
			{PLUGS.map((plug, index) => (
				<Box
					className='bg-bg-primary w-full sm:w-1/2 border-2 rounded-2xl
								border-[#F2F0E3] hover:border-[#7D0202] hover:cursor-pointer'
					onMouseEnter={() => handleBoxHover(index)}
					onMouseLeave={() => handleBoxHover(null)}
					onClick={() => {
						handlePlugClick(plug.link);
					}}
					key={plug.name}
					sx={{ boxShadow: hoveredBox === index ? '0px 6px 18px rgba(125, 2, 2, 0.2)' : 'none' }}
				>
					<Box className='p-6 lg:p-8'>
						<img
							src={hoveredBox === index ? plug.selectedIcon : plug.icon}
							alt='social-media-icon'
							loading='lazy'
						/>
						<Box className='flex flex-col space-y-3 mt-10 lg:mt-14'>
							<Typography variant='h5' color='primary'>
								{plug.name}
							</Typography>
							<Typography variant='body1' color='#434343'>
								{plug.description}
							</Typography>
							<Typography
								variant='body1'
								color={hoveredBox === index ? 'primary' : '#434343'}
								sx={{ textDecoration: 'underline', fontWeight: 'bold' }}
							>
								{plug.handle}
							</Typography>
						</Box>
					</Box>
				</Box>
			))}
		</Box>
	);
}
