import React from 'react';
import { Dialog, DialogTitle, DialogContent, Box, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function TaskDialog({
	open,
	handleClose,
	newTask,
	setNewTask,
	description,
	setDescription,
	cycles,
	setCycles,
	editTask,
	addTask,
	editedTaskIndex,
}) {
	return (
		<Dialog open={open} onClose={handleClose} PaperProps={{ sx: { borderRadius: '20px' } }}>
			<Box sx={{ backgroundColor: '#F5F1ED' }} className='flex flex-col'>
				<DialogTitle>
					<Typography sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '5px' }}>
						Task Details
					</Typography>
					<IconButton
						aria-label='close'
						onClick={handleClose}
						sx={{ position: 'absolute', right: 0, top: 0, color: '#BFA285' }}
					>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent>
					<Typography sx={{ fontWeight: 'bold' }}>Title</Typography>
					<input
						type='text'
						placeholder='Enter task name'
						value={newTask}
						onChange={(e) => setNewTask(e.target.value)}
						className='self-center flex-grow w-full h-12 px-4 mb-2 transition duration-200
                        bg-white outline outline-none rounded-2xl shadow-sm appearance-none'
					/>
					<Typography sx={{ fontWeight: 'bold', marginTop: '5px' }}>Description (optional)</Typography>
					<textarea
						placeholder='Enter task description'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className='self-center flex-grow w-full h-24 px-4 mb-2 transition duration-200
                        bg-white outline-none rounded-2xl shadow-sm appearance-none'
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
						<Typography sx={{ fontWeight: 'bold' }}>
							Total cycles needed
							<br />
							to complete task
						</Typography>
						<input
							type='number'
							value={cycles}
							onChange={(e) => {
								setCycles(parseInt(e.target.value, 10));
							}}
							className='self-center w-1/5 px-4 transition duration-200
                        bg-white outline-none rounded-xl shadow-sm ml-2'
							style={{ borderRadius: '20px' }}
						/>
					</Box>
				</DialogContent>
				<Box sx={{ display: 'flex', justifyContent: 'end', p: 2 }}>
					<Button
						onClick={editedTaskIndex !== null ? editTask : addTask}
						variant='contained'
						sx={{
							backgroundColor: '#BFA285',
							color: 'white',
							borderRadius: '40px',
							textTransform: 'none',
							fontStyle: 'normal',
						}}
					>
						{editedTaskIndex !== null ? 'Update' : 'Done'}
					</Button>
				</Box>
			</Box>
		</Dialog>
	);
}

export default TaskDialog;
