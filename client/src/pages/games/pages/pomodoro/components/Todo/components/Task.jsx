import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Task({ task, onEdit, onDelete, onComplete }) {
	return (
		<Box
			className='text-slate-600 bg-white rounded-2xl py-4 w-3/4 flex flex-row mb-4 gap-10 items-center'
			style={{
				borderLeft: task.complete ? '20px solid green' : '20px solid white',
				cursor: 'pointer',
			}}
		>
			<Box className='flex flex-col ml-5 w-full overflow-x-auto'>
				<Typography style={{ fontWeight: 'bold' }}>{task.title}</Typography>
				<Typography>{task.description}</Typography>
			</Box>
			<Box className='flex gap-3 w-1/5 mr-3 justify-end'>
				<Typography style={{ fontWeight: 'bold' }}>{task.cycles}</Typography>
				<IconButton
					onClick={(e) => {
						e.stopPropagation();
						onComplete();
					}}
					style={{
						backgroundColor: task.complete ? 'green' : 'grey',
						width: '25px',
						height: '25px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<span style={{ color: 'white', fontSize: '16px' }}>✔</span>
				</IconButton>
				<EditIcon
					onClick={(e) => {
						e.stopPropagation();
						onEdit();
					}}
					style={{ cursor: 'pointer', color: '#003249' }}
				/>
				<DeleteIcon
					onClick={(e) => {
						e.stopPropagation();
						onDelete();
					}}
					style={{ cursor: 'pointer', color: '#732727' }}
				/>
			</Box>
		</Box>
	);
}

export default Task;
