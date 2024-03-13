import React, { useState } from 'react';
import { Box, Typography, Dialog, DialogTitle, DialogContent, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import CelebrationIcon from '@mui/icons-material/Celebration';

function Todo() {
	const [tasks, setTasks] = useState([]);
	const [open, setOpen] = useState(false);
	const [newTask, setNewTask] = useState('');
	const [description, setDescription] = useState('');
	const [cycles, setCycles] = useState(1);
	const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
	const [editedTaskIndex, setEditedTaskIndex] = useState(null);
	const [openAllCompleteDialog, setOpenAllCompleteDialog] = useState(false);

	const handleCloseAllCompleteDialog = () => {
		setOpenAllCompleteDialog(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setNewTask('');
		setDescription('');
		setCycles('1');
	};

	const addTask = () => {
		if (newTask.trim() !== '') {
			const task = {
				title: newTask,
				description,
				cycles,
				complete: false,
			};
			setTasks([...tasks, task]);
			handleClose();
			setSelectedTaskIndex(0);
		}
	};

	const editTask = () => {
		if (editedTaskIndex !== null) {
			const editedTask = tasks[editedTaskIndex];
			editedTask.title = newTask;
			editedTask.description = description;
			editedTask.cycles = cycles;
			setTasks([...tasks.slice(0, editedTaskIndex), editedTask, ...tasks.slice(editedTaskIndex + 1)]);
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

		const allTasksCompleted = updatedTasks.every((task) => task.complete);
		if (allTasksCompleted) {
			setOpenAllCompleteDialog(true);
		}
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
		<Box className='relative w-full h-full flex flex-col justify-center items-start'>
			<Box className='w-full pb-2 top-0 mt-1/5 absolute flex flex-row justify-between items-center px-12'>
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
				<Box className='flex flex-col justify-center self-center h-full'>
					<Typography className='text-slate-600'>No tasks left.</Typography>
				</Box>
			) : (
				<Box
					className='flex flex-col h-full mt-[33%] mb-1/10
								w-full px-12 items-center'
					sx={{
						overflowY: 'scroll',
						scrollbarWidth: 'none',
						'&::-webkit-scrollbar': { display: 'none' },
					}}
				>
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
			<Dialog
				open={openAllCompleteDialog}
				onClose={handleCloseAllCompleteDialog}
				PaperProps={{ sx: { borderRadius: '10px' } }}
			>
				<CelebrationIcon
					className='flex self-center'
					style={{ color: '#D9D9D9', width: '90px', height: '90px', marginTop: '12px', marginBottom: '3px' }}
				/>
				<DialogContent className='flex flex-col text-center gap-3'>
					<Typography style={{ fontWeight: 'bold', marginTop: '-10px' }}>Great Job!</Typography>
					<Typography style={{ fontSize: '12px' }}>You have completed all tasks.</Typography>
				</DialogContent>
				<IconButton
					aria-label='close'
					onClick={handleCloseAllCompleteDialog}
					sx={{ position: 'absolute', right: 0, top: 0, color: '#732727' }}
				>
					<CloseIcon />
				</IconButton>
			</Dialog>
		</Box>
	);
}

export default Todo;
