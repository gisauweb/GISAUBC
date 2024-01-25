import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAuth0 } from '@auth0/auth0-react';
import { Sentry } from 'libs/sentry';
import checkStudentIDValidity from 'libs/membership';

export default function StudentIdDialog({ open, setOpen, setIsRegistered, token, setServerError }) {
	const { user } = useAuth0();
	const [studentID, setStudentID] = useState('');
	const [error, setError] = useState('');

	const handleClose = () => {
		setStudentID('');
		setOpen(false);
		setError('');
	};

	const handleRegisterClicked = () => {
		const validationError = checkStudentIDValidity(studentID);
		if (validationError) {
			setError(validationError.message);
			return;
		}

		fetch(`${process.env.REACT_APP_SERVER_URL}/users/create`, {
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
			.then(async (res) => {
				if (res.status !== 201) {
					const responseBody = await res.json();
					setServerError(responseBody.message);
					return undefined;
				}
				return res.json();
			})
			.then((res) => {
				if (res) {
					setIsRegistered(res.result);
				}
			})
			.catch((err) => {
				Sentry.captureException('There was a problem with the register operation:', err);
			});

		handleClose();
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Registration</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To access the game, please enter your student id here. You can only link your student id with one
					account, choose wisely!
				</DialogContentText>
				<TextField
					margin='dense'
					id='name'
					label='Student ID'
					type='text'
					fullWidth
					variant='standard'
					value={studentID}
					onChange={(e) => {
						setStudentID(e.target.value);
						setError('');
					}}
					error={!!error}
					helperText={error}
					InputProps={{ pattern: checkStudentIDValidity().source }}
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
