import { Box, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

export default function Header({ handleOpen, handleEditIconClick, selectedTaskIndex, deleteTask }) {
	const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });
	return (
		<Box
			className={`w-full pb-2 top-0 mt-1/5 absolute flex flex-row justify-between items-center 
		  ${isMobileView ? 'px-20' : 'px-24'}`}
		>
			<Typography
				className='text-center'
				style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}
			>
				Task List
			</Typography>
			<Box className='flex flex-row gap-3 justify-center items-center'>
				<AddIcon
					onClick={handleOpen}
					style={{ cursor: 'pointer', color: '#014900', width: '30px', height: '30px' }}
				>
					Add
				</AddIcon>
				<EditIcon
					onClick={() => handleEditIconClick(selectedTaskIndex)}
					style={{ cursor: 'pointer', color: '#003249' }}
				>
					Edit
				</EditIcon>
				<DeleteIcon onClick={deleteTask} style={{ cursor: 'pointer', color: '#732727' }}>
					Delete
				</DeleteIcon>
			</Box>
		</Box>
	);
}
