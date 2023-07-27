import { Box, Typography } from '@mui/material';
import React from 'react';
import PLUGS from '../constants';

export default function PlugBox() {
	const handlePlugClick = (link) => {
		window.open(link, '_blank', 'noreferrer');
	};
	return (
		<Box className='flex justify-between space-x-16 my-10'>
			{PLUGS.map((plug) => (
				<Box
					className='bg-bgPrimary w-1/2 border-2 border-[#F2F0E3] rounded-2xl hover:cursor-pointer'
					onClick={() => {
						handlePlugClick(plug.link);
					}}
				>
					<Box className='p-8'>
						<img src={plug.icon} alt='social-media-icon' />
						<Box className='flex flex-col space-y-3 mt-14'>
							<Typography variant='h5' color='primary'>
								{plug.name}
							</Typography>
							<Typography variant='body1'>{plug.description}</Typography>
							<Typography variant='body1' sx={{ textDecoration: 'underline', fontWeight: 'bold' }}>
								{plug.handle}
							</Typography>
						</Box>
					</Box>
				</Box>
			))}
		</Box>
	);
}
