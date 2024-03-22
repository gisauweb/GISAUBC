import React from 'react';
import { Dialog, DialogContent, Typography, IconButton } from '@mui/material';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CloseIcon from '@mui/icons-material/Close';

function AllCompleteDialog({ open, handleClose }) {
	return (
		<Dialog open={open} onClose={handleClose} PaperProps={{ sx: { borderRadius: '10px' } }}>
			<CelebrationIcon
				className='flex self-center'
				style={{ color: '#D9D9D9', width: '90px', height: '90px', marginTop: '12px', marginBottom: '3px' }}
			/>
			<DialogContent className='flex flex-col text-center gap-3'>
				<Typography style={{ fontWeight: 'bold', marginTop: '-10px' }}>Great Job!</Typography>
				<Typography style={{ fontSize: '12px' }}>You have completed all tasks.</Typography>
			</DialogContent>
			<IconButton
				aria-label='close'
				onClick={handleClose}
				sx={{ position: 'absolute', right: 0, top: 0, color: '#732727' }}
			>
				<CloseIcon />
			</IconButton>
		</Dialog>
	);
}

export default AllCompleteDialog;
