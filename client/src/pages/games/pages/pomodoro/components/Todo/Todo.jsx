import React, { useState } from 'react';
import { Box } from '@mui/material';

import TaskDialog from './components/TaskDialog';
import CompleteDialog from './components/CompleteDialog';
import TaskList from './components/TaskList';
import Header from './components/Header';

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
			<Header
				handleOpen={handleOpen}
				handleEditIconClick={handleEditIconClick}
				selectedTaskIndex={selectedTaskIndex}
				deleteTask={deleteTask}
			/>
			<TaskList
				tasks={tasks}
				handleTaskClick={handleTaskClick}
				handleTaskCompletion={handleTaskCompletion}
				selectedTaskIndex={selectedTaskIndex}
			/>
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
