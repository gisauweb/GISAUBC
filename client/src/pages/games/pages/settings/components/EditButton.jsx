/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const customButtonStyles = {
	bgcolor: '#BFA285',
	color: 'white',
	boxShadow: 'none',
	borderRadius: '50px',
	'&:hover': {
		bgcolor: 'tan',
		boxShadow: 'none',
	},
	width: '87px',
	height: '39px',
	textTransform: 'none',
	transition: 'all 0.3s ease', // Animation transition
};

// Styles for icon buttons
const iconButtonStyles = {
	bgcolor: '#BFA285',
	color: 'white',
	'&:hover': { bgcolor: 'tan' },
	width: '39px',
	height: '39px',
	transition: 'all 0.3s ease', // Animation transition
};

export default function EditButton({ edit, setEdit, uid, token, nickname, setNickname, updateAccountState }) {
	const [oldNickname, setOldNickname] = useState('');
	async function EditUserProfile() {
		await fetch(`${process.env.REACT_APP_SERVER_URL}/users/user`, {
			method: 'PUT',
			headers: { Authorization: `Bearer ${token}` },
			body: JSON.stringify({ uid, nickname }),
		});
		updateAccountState();
	}
	if (edit) {
		return (
			<>
				<IconButton
					sx={{ ...iconButtonStyles, bgcolor: '#F44336', mr: '10px' }}
					onClick={() => {
						setNickname(oldNickname);
						setEdit(false);
					}}
				>
					<CloseIcon />
				</IconButton>
				<IconButton
					sx={{ ...iconButtonStyles, bgcolor: '#4CAF50' }}
					onClick={async () => {
						await EditUserProfile(nickname);
						setEdit(false);
					}}
				>
					<CheckIcon />
				</IconButton>
			</>
		);
	}
	return (
		<Button
			variant='contained'
			startIcon={<EditIcon />}
			sx={customButtonStyles}
			onClick={() => {
				setOldNickname(nickname);
				setEdit(true);
			}}
		>
			Edit
		</Button>
	);
}
