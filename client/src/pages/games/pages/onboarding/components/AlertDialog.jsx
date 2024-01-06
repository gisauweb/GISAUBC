import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Alert } from '@mui/material';

export default function AlertDialog({ open, setOpen, serverError }) {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<DialogContent sx={{ pb: 0 }}>
				<Alert severity='error'>{serverError}</Alert>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} autoFocus>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
}
