import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Leaderboard() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<Box
				style={{
					borderRadius: '30px',
					height: '92vh',
					width: '25vw',
				}}
				className='bg-gamesBox mr-10 flex flex-col items-center'
			>
				<Typography variant='h6 mt-10'>Leaderboard</Typography>
			</Box>
		</div>
	);
}
