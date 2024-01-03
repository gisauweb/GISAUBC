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
				className='bg-gamesBox flex flex-col mr-10 items-center py-3'
			>
				<Typography style={{ fontWeight: 'bold' }}> Leaderboard</Typography>
			</Box>
		</div>
	);
}
