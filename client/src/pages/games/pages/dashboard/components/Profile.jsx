import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Profile({ username, picture }) {
	return (
		<Box className='relative bg-games-box w-full h-full rounded-2xl flex flex-col justify-center items-center gap-2 py-6 px-3 overflow-hidden'>
			<img
				src={picture}
				alt='profile_pic'
				className='rounded-full object-cover w-10 h-10 sm:w-14 sm:h-14 relative z-10'
			/>
			<div className='text-center min-w-0 w-full px-1 relative z-10'>
				<Typography style={{ fontSize: '13px' }} className='text-gray-500'>
					Welcome,
				</Typography>
				<Typography
					style={{ fontWeight: 'bold', fontSize: '15px' }}
					className='sm:text-xl leading-tight truncate'
				>
					{username}
				</Typography>
			</div>

			{/* Madu mascot */}
			<img
				src='/gisau-logo/madu.png'
				alt='madu'
				className='absolute -bottom-1 -right-1 w-12 sm:w-17 opacity-90 -rotate-12'
			/>
		</Box>
	);
}
