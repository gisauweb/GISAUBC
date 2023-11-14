// src/components/Popup.js
import React from 'react';
import { Modal, Typography, IconButton, Box } from '@mui/material';
import { CancelRounded as CancelRoundedIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import { Button } from 'shared/components';
import UPCOMING_EVENTS from 'shared/data/upcoming_event';

const PopupWrapper = styled('div')({
	background: 'linear-gradient(rgba(140, 28, 22, 0.7), rgba(188, 112, 89, 0.7))',
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
	backdropFilter: 'blur(20px)',
});

function Popup({ isOpen, onClose }) {
	const upcomingEvent = UPCOMING_EVENTS[0];

	return (
		<Modal open={isOpen} onClose={onClose} disableAutoFocus>
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
				<a
					href={upcomingEvent.infoLink}
					target='_blank'
					rel='noreferrer'
					className='my-3 flex justify-center items-center'
				>
					<img src={upcomingEvent.image} alt='Event Soto' className='w-4/5' loading='lazy' />
				</a>
				<Typography variant='h5' gutterBottom>
					Upcoming Event
				</Typography>
				<Typography variant='body1'>Join us in our next event!</Typography>
				<Box mt={2} className='flex justify-center'>
					<a href='#events' onClick={onClose}>
						<Button background='transparentBg' text='Register' />
					</a>
				</Box>
			</PopupWrapper>
		</Modal>
	);
}

export default Popup;
