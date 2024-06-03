import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

function ConfirmationDialog({ open, onClose, onLeave }) {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby='leave-pomodoro-dialog-title'
			aria-describedby='leave-pomodoro-dialog-description'
		>
			<DialogTitle id='leave-pomodoro-dialog-title'>Leave Pomodoro Timer?</DialogTitle>
			<DialogContent>
				<DialogContentText id='leave-pomodoro-dialog-description'>
					If you leave the Pomodoro page, the timer will reset. Are you sure you want to leave?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				<Button onClick={onLeave} autoFocus>
					Leave
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default ConfirmationDialog;
