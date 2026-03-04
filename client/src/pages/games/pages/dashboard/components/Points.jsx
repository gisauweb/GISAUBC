import React from 'react';
import { Box } from '@mui/material';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import pointIcon from 'assets/games/points_icon.svg';

export default function Points({ account, leaderboard }) {
	return (
		<Box className='w-full h-full rounded-2xl flex flex-col justify-center items-center py-4'>
			<Box style={{ width: '100%', maxWidth: '160px', aspectRatio: '1 / 1' }}>
				<CircularProgressbarWithChildren
					value={0}
					className='z-10'
					styles={{
						height: '100%',
						path: { stroke: '#BFA285' },
						trail: { stroke: '#F5F1ED' },
					}}
				>
					<div className='flex flex-col justify-center items-center gap-3'>
						<strong style={{ fontSize: 15 }}>Total Points</strong>
						<div className='flex items-center'>
							<strong style={{ fontSize: 18 }}>0</strong>
							<img src={pointIcon} alt='' className='w-10 ml-7 mb-7 absolute' />
						</div>
					</div>
				</CircularProgressbarWithChildren>
			</Box>
		</Box>
	);
}
