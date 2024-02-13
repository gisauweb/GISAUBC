import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo() {
	const [tasks, setTasks] = useState([]);

	const addTask = (newTask) => {
		setTasks([...tasks, newTask]);
	};

	const editTask = (taskIndex, editedTask) => {
		const updatedTasks = [...tasks];
		updatedTasks[taskIndex] = editedTask;
		setTasks(updatedTasks);
	};

	const deleteTask = (taskIndex) => {
		const updatedTasks = [...tasks];
		updatedTasks.splice(taskIndex, 1);
		setTasks(updatedTasks);
	};

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
					<AddIcon onClick={() => addTask(prompt('Enter new task:'))}>Add</AddIcon>
					<EditIcon
						onClick={() => {
							const taskIndex = prompt('Enter task index to edit:');
							const editedTask = prompt('Enter edited task:');
							editTask(taskIndex, editedTask);
						}}
					>
						Edit
					</EditIcon>
					<DeleteIcon
						onClick={() => {
							const taskIndex = prompt('Enter task index to delete:');
							deleteTask(taskIndex);
						}}
					>
						Delete
					</DeleteIcon>
				</Box>
			</Box>
			<Box className='flex-1 flex flex-col justify-center items-center'>
				{tasks.length === 0 ? (
					<Typography className='text-slate-600'>No tasks left.</Typography>
				) : (
					tasks.map((task, index) => (
						// eslint-disable-next-line react/no-array-index-key
						<Typography key={index} className='text-slate-600'>
							{task}
						</Typography>
					))
				)}
			</Box>
		</Box>
	);
}

export default Todo;
