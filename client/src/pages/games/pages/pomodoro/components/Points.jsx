import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import './Points.css';

function getCurrentDate() {
	const today = new Date();

	const options = {
		timeZone: 'America/Los_Angeles',
		month: '2-digit',
		day: '2-digit',
		year: 'numeric',
	};

	const dateString = today.toLocaleDateString('en-US', options);

	return dateString;
}

export default function Points({ account }) {
	const [progress, setProgress] = useState(0);
	const currentDate = getCurrentDate();
	const points = account.past_activities[currentDate] || 0;

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prevProgress) => (prevProgress >= points ? points : prevProgress + 1));
		}, 10);

		return () => clearInterval(interval);
	}, [points]);

	return (
		<Box className='flex flex-col py-1 px-5 w-full justify-center'>
			<Typography style={{ fontWeight: 'bold' }} className='top-0'>
				Points Earned Today
			</Typography>
			<div className='progress-bar-container w-4/6 self-center items-center mt-10'>
				<div
					className='progress-bar'
					style={{ width: `${(progress / 300) * 100}%`, backgroundColor: '#BFA285' }}
				/>
				<div className='triangle' style={{ left: `${(progress / 300) * 100}%`, fontSize: '10px' }}>
					<Typography style={{ fontSize: '10px' }} className='pts'>
						{progress}
						pts
					</Typography>
				</div>
			</div>
			<div className='botom-2 mt-5'>
				<Typography style={{ fontSize: '10px' }} className='mt-5'>
					<span>* 1 point per focus minute spent</span>
					<br />
					<span>* Maximum 300 points per day</span>
				</Typography>
			</div>
		</Box>
	);
}
