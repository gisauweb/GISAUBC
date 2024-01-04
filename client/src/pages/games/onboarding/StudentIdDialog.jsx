import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAuth0 } from '@auth0/auth0-react';

export default function StudentIdDialog({ open, setOpen, setIsRegistered, token }) {
	const { user } = useAuth0();
	const [studentID, setStudentID] = React.useState('');

	const handleClose = () => {
		setStudentID('');
		setOpen(false);
	};

	const handleRegisterClicked = () => {
		fetch('http://127.0.0.1:5001/gisaubc-dev/us-central1/api/users/create', {
			method: 'POST',
			headers: { Authorization: `Bearer ${token}` },
			body: JSON.stringify({
				sid: studentID,
				uid: user.sub,
				first_name: user.given_name || user.nickname,
				last_name: user.family_name || user.nickname,
				email: user.email,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				setIsRegistered(res.result);
			})
			.catch((error) => {
				console.error('There was a problem with the register operation:', error);
			});
		handleClose();
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Registration</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To start playing the game, please enter your student id here. You can only link your student id with
					one account, choose wisely!
				</DialogContentText>
				<TextField
					margin='dense'
					id='name'
					label='Student ID'
					type='number'
					fullWidth
					variant='standard'
					value={studentID}
					onChange={(e) => {
						setStudentID(e.target.value);
					}}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleRegisterClicked} variant='contained'>
					Register
				</Button>
			</DialogActions>
		</Dialog>
	);
}
