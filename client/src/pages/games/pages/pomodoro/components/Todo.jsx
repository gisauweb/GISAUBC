import React, { useState } from 'react';
import { Box, Typography, Dialog, DialogTitle, DialogContent, TextField, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

function Todo() {
	const [tasks, setTasks] = useState([]);
	const [open, setOpen] = useState(false);
	const [newTask, setNewTask] = useState('');
	const [description, setDescription] = useState('');
	const [cycles, setCycles] = useState('');
	const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
	const [editedTaskIndex, setEditedTaskIndex] = useState(null);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const addTask = () => {
		if (newTask.trim() !== '' && cycles !== '') {
			let cyclesValue = parseInt(cycles, 10);
			if (cyclesValue < 1) {
				cyclesValue = 1;
			}
			const task = {
				title: newTask,
				description,
				cycles: cyclesValue,
				complete: false,
			};
			setTasks([...tasks, task]);
			setNewTask('');
			setDescription('');
			setCycles('');
			handleClose();
			setSelectedTaskIndex(0);
		}
	};

	const editTask = () => {
		if (editedTaskIndex !== null) {
			const editedTask = tasks[editedTaskIndex];
			editedTask.title = newTask;
			editedTask.description = description;
			editedTask.cycles = parseInt(cycles, 10);
			setTasks([...tasks.slice(0, editedTaskIndex), editedTask, ...tasks.slice(editedTaskIndex + 1)]);
			setNewTask('');
			setDescription('');
			setCycles('');
			handleClose();
			setEditedTaskIndex(null);
		}
	};

	const deleteTask = () => {
		if (selectedTaskIndex !== null) {
			const updatedTasks = tasks.filter((_, index) => index !== selectedTaskIndex);
			setTasks(updatedTasks);
			setSelectedTaskIndex(0);
		}
	};

	const handleTaskClick = (index) => {
		setSelectedTaskIndex(index);
	};

	const handleTaskCompletion = (index) => {
		const updatedTasks = [...tasks];
		updatedTasks[index].complete = !updatedTasks[index].complete;
		setTasks(updatedTasks);
	};

	const handleEditIconClick = (index) => {
		if (tasks.length !== 0) {
			setEditedTaskIndex(index);
			setNewTask(tasks[index].title);
			setDescription(tasks[index].description);
			setCycles(tasks[index].cycles.toString());
			handleOpen();
		}
	};

	return (
		<Box className='relative w-full flex flex-col items-center justify-center'>
			<Box className='w-full pb-2 top-0 mt-1/5 absolute flex flex-row justify-center items-center gap-24'>
				<Typography
					className='text-center'
					style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}
				>
					Task List
				</Typography>
				<Box className='flex flex-row gap-5'>
					<AddIcon onClick={handleOpen} style={{ cursor: 'pointer' }}>
						Add
					</AddIcon>
					<EditIcon onClick={() => handleEditIconClick(selectedTaskIndex)} style={{ cursor: 'pointer' }}>
						Edit
					</EditIcon>
					<DeleteIcon onClick={deleteTask} style={{ cursor: 'pointer' }}>
						Delete
					</DeleteIcon>
				</Box>
			</Box>

			{tasks.length === 0 ? (
				<Box className='flex flex-col justify-center items-center h-full'>
					<Typography className='text-slate-600'>No tasks left.</Typography>
				</Box>
			) : (
				<Box className='flex flex-col items-center h-full mt-36 overflow-y-auto mb-14 w-3/5 overflow-x-hidden'>
					{tasks
						.slice(0)
						.reverse()
						.map((task, index) => (
							<Box
								// eslint-disable-next-line react/no-array-index-key
								key={index}
								className='text-slate-600 bg-white rounded-2xl py-4 w-full
								flex flex-row mb-4 gap-10 items-center'
								style={{
									borderLeft:
										selectedTaskIndex === tasks.length - 1 - index
											? '20px solid #732727'
											: '20px solid white',
									cursor: 'pointer',
								}}
								onClick={() => handleTaskClick(tasks.length - 1 - index)}
							>
								<Box className='flex flex-col ml-5 w-full overflow-x-auto'>
									<Typography style={{ fontWeight: 'bold' }}>{task.title}</Typography>
									<Typography>{task.description}</Typography>
								</Box>
								<Box className='flex gap-3 w-1/5 mr-3 justify-end'>
									<Typography style={{ fontWeight: 'bold' }}>{task.cycles}</Typography>
									<IconButton
										onClick={() => handleTaskCompletion(tasks.length - 1 - index)}
										style={{
											backgroundColor: task.complete ? 'green' : 'grey',
											width: '25px',
											height: '25px',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
										}}
										className='items-center'
									>
										<span style={{ color: 'white', fontSize: '16px' }}>✔</span>
									</IconButton>
								</Box>
							</Box>
						))
						.reverse()}
				</Box>
			)}

			<Dialog
				open={open}
				onClose={handleClose}
				PaperProps={{ sx: { borderRadius: '20px', bgcolor: 'gamesBox' } }}
			>
				<DialogTitle>
					<IconButton
						aria-label='close'
						onClick={handleClose}
						sx={{ position: 'absolute', right: 0, top: 0 }}
					>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent>
					<Typography>Title</Typography>
					<TextField
						autoFocus
						margin='dense'
						type='text'
						fullWidth
						placeholder='Enter title'
						value={newTask}
						onChange={(e) => setNewTask(e.target.value)}
					/>
					<Typography>Description (optional)</Typography>
					<TextField
						margin='dense'
						type='text'
						fullWidth
						placeholder='Enter description'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Typography>Total cycles needed to complete task</Typography>
						<TextField
							type='number'
							placeholder='Min. 1'
							value={cycles}
							onChange={(e) => setCycles(e.target.value)}
						/>
					</Box>
				</DialogContent>
				<Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
					<Button onClick={editedTaskIndex !== null ? editTask : addTask} variant='contained'>
						{editedTaskIndex !== null ? 'Update' : 'Done'}
					</Button>
				</Box>
			</Dialog>
		</Box>
	);
}

export default Todo;
