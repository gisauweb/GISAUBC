import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskDialog from './TaskDialog';
import CompleteDialog from './CompleteDialog';

function Todo() {
	const [tasks, setTasks] = useState([]);
	const [open, setOpen] = useState(false);
	const [newTask, setNewTask] = useState('');
	const [description, setDescription] = useState('');
	const [cycles, setCycles] = useState(1);
	const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
	const [editedTaskIndex, setEditedTaskIndex] = useState(null);
	const [openCompleteDialog, setOpenCompleteDialog] = useState(false);

	const handleCloseCompleteDialog = () => {
		setOpenCompleteDialog(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setNewTask('');
		setDescription('');
		setCycles(1); // This should be a number
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
			setSelectedTaskIndex(tasks.length); // Adjusted to set to the new last index
		}
	};

	const editTask = () => {
		if (editedTaskIndex !== null) {
			const editedTask = { ...tasks[editedTaskIndex], title: newTask, description, cycles };
			setTasks([...tasks.slice(0, editedTaskIndex), editedTask, ...tasks.slice(editedTaskIndex + 1)]);
			handleClose();
			setEditedTaskIndex(null);
		}
	};

	const deleteTask = () => {
		if (selectedTaskIndex !== null) {
			const updatedTasks = tasks.filter((_, index) => index !== selectedTaskIndex);
			setTasks(updatedTasks);
			setSelectedTaskIndex(null); // Reset selected task
		}
	};

	const handleTaskClick = (index) => {
		setSelectedTaskIndex(index);
	};

	const handleTaskCompletion = (index) => {
		const updatedTasks = tasks.map((task, idx) => (idx === index ? { ...task, complete: !task.complete } : task));
		setTasks(updatedTasks);

		const allTasksCompleted = updatedTasks.every((task) => task.complete);
		if (allTasksCompleted) {
			setOpenCompleteDialog(true);
		}
	};

	const handleEditIconClick = (index) => {
		if (tasks.length > 0) {
			// Check if there are tasks
			setEditedTaskIndex(index);
			setNewTask(tasks[index].title);
			setDescription(tasks[index].description);
			setCycles(tasks[index].cycles);
			handleOpen();
		}
	};

	return (
		<Box className='relative w-full h-full flex flex-col justify-center items-start'>
			<Box className='w-full pb-2 top-0 mt-1/5 absolute flex flex-row justify-between items-center px-24'>
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
								className='text-slate-600 bg-white rounded-2xl py-4 w-3/4
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

			<TaskDialog
				open={open}
				handleClose={handleClose}
				newTask={newTask}
				setNewTask={setNewTask}
				description={description}
				setDescription={setDescription}
				cycles={cycles}
				setCycles={setCycles}
				editTask={editTask}
				addTask={addTask}
				editedTaskIndex={editedTaskIndex}
			/>
			<CompleteDialog open={openCompleteDialog} handleClose={handleCloseCompleteDialog} />
		</Box>
	);
}

export default Todo;
