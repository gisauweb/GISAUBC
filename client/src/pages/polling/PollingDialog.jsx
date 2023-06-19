import React, { useEffect, useState } from 'react';
import { CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

export default function PollingDialog({ loading, responseCode, setResponseCode }) {
	const [responseTitle, setResponseTitle] = useState('');
	const [responseDescription, setResponseDescription] = useState('');
	const [bgColor, setBgColor] = useState('');

	useEffect(() => {
		switch (responseCode) {
			case 200:
				setBgColor('#4CAF50');
				setResponseTitle('Success');
				setResponseDescription('Vote submitted! Thank you for contributing!');
				break;
			case 400:
				setBgColor('#7D0202');
				setResponseTitle('Bad Request');
				setResponseDescription('Student ID is invalid. Please use a valid Student ID.');
				break;
			case 401:
				setBgColor('#7D0202');
				setResponseTitle('Unauthorized Error');
				setResponseDescription('Failed to authenticate. Please make sure you are a GISAU member.');
				break;
			case 409:
				setBgColor('#FFA047');
				setResponseTitle('Conflicted Error');
				setResponseDescription('You have submitted your vote. You cannot vote again.');
				break;
			default:
				setBgColor('#7D0202');
				setResponseTitle('Unknown Error');
				setResponseDescription('Please try again or come to help desk if you need further assistance.');
		}
	}, [responseCode]);

	const handleClose = () => {
		setResponseTitle('');
		setResponseDescription('');
		setBgColor('');
		setResponseCode(0);
	};

	return (
		<>
			{loading && (
				<Dialog open={loading}>
					<DialogContent>
						<CircularProgress />
					</DialogContent>
				</Dialog>
			)}
			{!!responseCode && (
				<Dialog open={!!responseCode}>
					<DialogTitle
						sx={{
							color: '#FFFFFF',
							bgcolor: bgColor,
						}}
					>
						{responseTitle}
					</DialogTitle>
					<DialogContent
						sx={{
							color: '#000000',
							mt: 2,
						}}
						className='flex flex-col'
					>
						<span>{responseDescription}</span>
						<span className='text-xs italic pt-4'>
							P.S. Please come to help desk if you have any problem
						</span>
					</DialogContent>
					<DialogActions>
						<Button
							variant='contained'
							onClick={handleClose}
							sx={{
								color: '#000000',
								bgcolor: bgColor,
							}}
						>
							Ok
						</Button>
					</DialogActions>
				</Dialog>
			)}
		</>
	);
}
