// src/components/Popup.js
import React from 'react';
import { Modal, Typography, IconButton, Box, Button } from '@mui/material';
import { CancelRounded as CancelRoundedIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

const PopupWrapper = styled('div')({
	backgroundColor: '#7D0202',
	color: '#FFFDF5',
	padding: '20px',
	borderRadius: '8px',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: '80%',
	width: '400px',
	zIndex: 1000,
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'center',
});
function Popup({ isOpen, onClose }) {
	const eventText = 'Join us for our annual student association picnic on Saturday!';

	return (
		<Modal open={isOpen} onClose={onClose}>
			<PopupWrapper>
				<IconButton
					aria-label='Close'
					color='inherit'
					onClick={onClose}
					size='small'
					sx={{ position: 'absolute', right: '0.3rem', top: '0.1rem' }}
				>
					<CancelRoundedIcon />
				</IconButton>
				<Typography variant='h5' gutterBottom>
					Current Event
				</Typography>
				<Typography variant='body1'>{eventText}</Typography>
				<Box mt={2}>
					<Button variant='contained' color='secondary' onClick={onClose}>
						Register
					</Button>
				</Box>
			</PopupWrapper>
		</Modal>
	);
}

export default Popup;
