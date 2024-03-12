import React, { useState } from 'react';
import { Box, Typography, Dialog, DialogTitle, DialogContent, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

function Todo() {
	const [tasks, setTasks] = useState([]);
	const [open, setOpen] = useState(false);
	const [newTask, setNewTask] = useState('');
	const [description, setDescription] = useState('');
	const [cycles, setCycles] = useState(1);
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
			let cyclesValue = parseInt(cycles, 10);
			if (cyclesValue < 1) {
				cyclesValue = 1;
			}
			const editedTask = tasks[editedTaskIndex];
			editedTask.title = newTask;
			editedTask.description = description;
			editedTask.cycles = cyclesValue;
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
			<Box className='w-full pb-2 top-0 mt-1/5 absolute flex flex-row justify-center items-center gap-20'>
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
								placeholder='1'
								value={cycles}
								onChange={(e) => setCycles(e.target.value)}
								className='self-center w-1/5 px-4 transition duration-200
								bg-white outline-none rounded-xl shadow-sm appearance-none ml-2'
								style={{ borderRadius: '20px' }}
							/>
						</Box>
					</DialogContent>
					<Box sx={{ display: 'flex', justifyContent: 'end', p: 2 }}>
						<Button
							onClick={editedTaskIndex !== null ? editTask : addTask}
							variant='contained'
							sx={{
								background: '#BFA285',
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
		</Box>
	);
}

export default Todo;
