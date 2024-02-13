import React from 'react';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo() {
	return (
		<Box className='relative w-full flex flex-col items-center'>
			<Box className='w-full py-2 top-20 absolute flex flex-row justify-center gap-20'>
				<Typography
					className='text-center font-bold'
					style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}
				>
					Task List
				</Typography>
				<Box className='flex flex-row gap-3'>
					<AddIcon>Add</AddIcon>
					<EditIcon>Edit</EditIcon>
					<DeleteIcon>Delete</DeleteIcon>
				</Box>
			</Box>
			<Box className='flex-1 flex justify-center items-center'>
				<Typography className='text-slate-600'>No tasks left.</Typography>
			</Box>
		</Box>
	);
}

export default Todo;
