import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import './Points.css';

function getCurrentDate() {
	const today = new Date();

	// Define options for toLocaleDateString to format in PST
	const options = {
		timeZone: 'America/Los_Angeles',
		month: '2-digit',
		day: '2-digit',
		year: 'numeric',
	};

	// Convert today's date to a string, formatted in the PST time zone
	const dateString = today.toLocaleDateString('en-US', options);

	return dateString;
}

export default function Points({ account }) {
	const [progress, setProgress] = useState(0);
	const currentDate = getCurrentDate();
	const points = account.past_activities[currentDate] || 0;

	useEffect(() => {
		const interval = setInterval(() => {
			// Increment progress by 1 until it reaches 300
			setProgress((prevProgress) => (prevProgress >= points ? points : prevProgress + 1));
		}, 10); // Adjust the interval for smoother animation or performance

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
					<span>* 1 point per minute spent</span>
					<br />
					<span>* Maximum 300 points per day</span>
				</Typography>
			</div>
		</Box>
	);
}
