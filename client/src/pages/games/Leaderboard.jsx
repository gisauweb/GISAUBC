import React from 'react';
import { Box } from '@mui/material';

export default function Leaderboard() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<Box
				style={{
					borderRadius: '30px',
					height: '92vh',
					width: '25vw',
				}}
				className='bg-gamesBox mr-10'
			>
				<p>Leaderboard</p>
			</Box>
		</div>
	);
}
