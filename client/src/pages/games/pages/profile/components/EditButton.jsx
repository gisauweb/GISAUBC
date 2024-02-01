import React from 'react';
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

export default function EditButton({ edit, setEdit }) {
	if (edit) {
		return (
			<>
				<IconButton
					sx={{ ...iconButtonStyles, bgcolor: '#4CAF50', mr: '10px' }} // Green for check
					onClick={() => {
						// Implement save changes logic here
						setEdit(false);
					}}
				>
					<CheckIcon />
				</IconButton>
				<IconButton
					sx={{ ...iconButtonStyles, bgcolor: '#F44336' }} // Red for close
					onClick={() => {
						// Implement discard changes logic here
						setEdit(false);
					}}
				>
					<CloseIcon />
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
				setEdit(true);
			}}
		>
			Edit
		</Button>
	);
}
