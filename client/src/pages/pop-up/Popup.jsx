import React from 'react';
import { Modal, Typography, IconButton, Box, CircularProgress } from '@mui/material';
import { CancelRounded as CancelRoundedIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import { Button } from 'shared/components';

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

function Popup({ data, isOpen, onClose, loading, error }) {
	const handleClose = () => {
		onClose();

		if (!document.getElementById('chatling-embed-script')) {
			window.chtlConfig = { chatbotId: '1938486472' };

			const script = document.createElement('script');
			script.src = 'https://chatling.ai/js/embed.js';
			script.async = true;
			script.setAttribute('data-id', '1938486472');
			script.id = 'chatling-embed-script';

			document.body.appendChild(script);
		}
	};

	return (
		<Modal open={isOpen} onClose={handleClose} disableAutoFocus>
			<PopupWrapper>
				<IconButton
					aria-label='Close'
					color='inherit'
					onClick={handleClose}
					size='small'
					sx={{ position: 'absolute', right: '0.3rem', top: '0.1rem' }}
				>
					<CancelRoundedIcon />
				</IconButton>

				{loading && (
					<Box display='flex' justifyContent='center' alignItems='center' height='200px'>
						<CircularProgress color='inherit' />
					</Box>
				)}

				{error && <Typography color='error'>Failed to load data</Typography>}

				{!loading && !error && data && (
					<>
						<div className='my-3 flex justify-center items-center'>
							<div className='w-4/5 aspect-square rounded-md'>
								<img
									src={data.coverImage}
									alt='Upcoming Event'
									className='w-full h-full object-cover rounded-2xl'
									loading='lazy'
								/>
							</div>
						</div>

						<Typography variant='h4' className='mt-4' gutterBottom>
							Upcoming {data.type === 'event' ? 'Event' : 'Rantangan'}
						</Typography>

						<Typography variant='body1'>
							Check out our newest {data.type === 'event' ? 'event!' : 'rantangan!'}
						</Typography>

						<Box mt={2} display='flex' justifyContent='center'>
							<a aria-label='Save' href='#events' onClick={handleClose}>
								<Button background='transparentBg' text='Take me there' />
							</a>
						</Box>
					</>
				)}
			</PopupWrapper>
		</Modal>
	);
}

export default Popup;
