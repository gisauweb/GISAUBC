import React from 'react';
import { Dialog, DialogTitle, DialogContent, Box, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// eslint-disable-next-line object-curly-newline
function TaskDialog({ open, handleClose, newTask, updateNewTaskField, editTask, addTask }) {
	return (
		<Dialog open={open} onClose={handleClose} PaperProps={{ sx: { borderRadius: '20px' } }}>
			<Box sx={{ backgroundColor: '#F5F1ED' }} className='flex flex-col'>
				<DialogTitle>
					<Typography sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '5px' }}>
						{newTask.edit ? 'Edit Task' : 'Add Task'}
					</Typography>
					<IconButton
						aria-label='close'
						onClick={handleClose}
						sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
					>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent>
					<Typography sx={{ fontWeight: 'bold' }}>Title</Typography>
					<input
						type='text'
						placeholder='Enter task name'
						value={newTask.title}
						onChange={(e) => updateNewTaskField(newTask, 'title', e.target.value)}
						className='self-center grow w-full h-12 px-4 mb-2 transition duration-200
								bg-white outline outline-hidden rounded-2xl shadow-xs appearance-none'
					/>
					<Typography sx={{ fontWeight: 'bold', marginTop: '5px' }}>Description (optional)</Typography>
					<textarea
						placeholder='Enter task description'
						value={newTask.description}
						onChange={(e) => updateNewTaskField(newTask, 'description', e.target.value)}
						className='self-center grow w-full h-24 px-4 mb-2 transition duration-200
								bg-white outline-hidden rounded-2xl shadow-xs appearance-none'
						style={{ resize: 'none' }}
					/>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							gap: '10px',
							marginTop: '5px',
						}}
						className='items-center'
					>
						<Typography sx={{ fontWeight: 'bold' }}>Total cycles needed to complete task</Typography>
						<input
							type='number'
							value={newTask.target}
							onChange={(e) => updateNewTaskField(newTask, 'target', parseInt(e.target.value, 10) || 0)}
							className='self-center w-1/5 px-4 transition duration-200
									bg-white outline-hidden rounded-xl shadow-xs ml-2'
							style={{ borderRadius: '20px' }}
						/>
					</Box>
				</DialogContent>
				<Box sx={{ display: 'flex', justifyContent: 'end', p: 2 }}>
					<Button
						onClick={() => (newTask.edit ? editTask() : addTask())}
						variant='contained'
						sx={{
							backgroundColor: '#BFA285',
							color: 'white',
							'&:hover': { backgroundColor: '#A08064' },
							borderRadius: '20px',
							textTransform: 'none',
						}}
					>
						{newTask.edit ? 'Update Task' : 'Add Task'}
					</Button>
				</Box>
			</Box>
		</Dialog>
	);
}

export default TaskDialog;
