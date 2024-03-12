import React, { useEffect, useState } from 'react';
import { Box, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
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
	const [openDialog, setOpenDialog] = useState(false); // State to manage dialog visibility
	// const currentDate = getCurrentDate();
	const points = 300;

	useEffect(() => {
		const interval = setInterval(() => {
			if (progress >= 300) {
				setOpenDialog(true); // Open dialog when progress reaches 300
			} else {
				setProgress((prevProgress) => (prevProgress >= points ? points : prevProgress + 1));
			}
		}, 10);

		return () => clearInterval(interval);
	}, [points, progress]);

	const handleCloseDialog = () => {
		window.location.reload();
	};

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
			<Dialog open={openDialog} onClose={handleCloseDialog} PaperProps={{ sx: { borderRadius: '20px' } }}>
				<NotificationImportantIcon
					className='flex self-center'
					style={{ color: '#D9D9D9', width: '100px', height: '100px', marginTop: '8px', marginBottom: '3px' }}
				/>
				<DialogContent className='flex flex-col text-center gap-3'>
					<Typography style={{ fontWeight: 'bold', marginTop: '-10px' }}>
						You have collected
						<br />
						all the points for today!
					</Typography>
					<Typography style={{ fontSize: '12px' }}>
						Come back tomorrow to
						<br />
						collect more points
					</Typography>
				</DialogContent>
				<IconButton
					aria-label='close'
					onClick={handleCloseDialog}
					sx={{ position: 'absolute', right: 0, top: 0, color: '#732727' }}
				>
					<CloseIcon />
				</IconButton>
			</Dialog>
		</Box>
	);
}
