import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Sentry } from 'libs/sentry';
import TaskDialog from './components/TaskDialog';
import CompleteDialog from './components/CompleteDialog';
import TaskList from './components/TaskList';
import Header from './components/Header';

export default function Todo({ account, token, updateAccountState }) {
	const [open, setOpen] = useState(false);
	const [tasks, setTasks] = useState(account.tasks);
	const [taskCounter, setTaskCounter] = useState(account.taskCounter);
	const selectedTaskIdDefault = parseInt(Object.keys(tasks)[0], 10) || null;
	const [selectedTaskId, setSelectedTaskId] = useState(selectedTaskIdDefault);
	const [openCompleteDialog, setOpenCompleteDialog] = useState(false);

	const NEW_TASK_INITIAL_VALUE = {
		id: taskCounter,
		title: '',
		description: '',
		cycles: 0,
		target: 1,
		completed: false,
		edit: false,
	};

	const [newTask, setNewTask] = useState(NEW_TASK_INITIAL_VALUE);

	const updateNewTaskField = (task, field, value) => {
		setNewTask({ ...task, [field]: value });
	};

	const handleCloseCompleteDialog = () => {
		setOpenCompleteDialog(false);
	};

	const handleOpen = (task, edit) => {
		updateNewTaskField(task, 'edit', edit);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setNewTask(NEW_TASK_INITIAL_VALUE);
	};

	const upsertTask = (task, edit = false) => {
		fetch(`${process.env.REACT_APP_SERVER_URL}/tasks/upsert`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				...task,
				id: taskCounter,
				uid: account.uid,
				edit,
				updated_at: new Date().toISOString(),
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				const newOrUpdatedTaskId = edit ? task.id : result.taskCounter;

				const updatedTasks = {
					...tasks,
					[newOrUpdatedTaskId]: { ...task, id: newOrUpdatedTaskId, edit },
				};

				setTasks(updatedTasks);

				if (!edit) {
					setSelectedTaskId(newOrUpdatedTaskId);
				}

				updateAccountState();

				setTaskCounter(result.taskCounter + 1);
				handleClose();
			})
			.catch((err) => {
				Sentry.captureException('Failed to upsert task:', err);
			});
	};

	const addTask = () => {
		if (newTask.title.trim() !== '') {
			upsertTask(newTask, false);
		}
	};

	const editTask = () => {
		if (selectedTaskId !== null) {
			upsertTask(newTask, true);
		}
	};

	const deleteTask = () => {
		if (selectedTaskId !== null) {
			fetch(`${process.env.REACT_APP_SERVER_URL}/tasks/remove`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ uid: account.uid, id: selectedTaskId }),
			})
				.then(async (res) => {
					if (res.ok) {
						const updatedTasks = { ...tasks };
						delete updatedTasks[selectedTaskId];
						setTasks(updatedTasks);
						await updateAccountState();
						const updatedId = parseInt(Object.keys(updatedTasks)[0], 10) || null;
						setSelectedTaskId(updatedId);
					} else {
						Sentry.captureException('Failed to delete task');
					}
				})
				.catch((err) => {
					Sentry.captureException('Error deleting task:', err);
				});
		}
	};

	const handleTaskClick = (id) => {
		setSelectedTaskId(id);
	};

	const handleTaskCompletion = (id) => {
		const updatedTasks = {
			...tasks,
			[id]: { ...tasks[id], complete: !tasks[id].complete },
		};
		setTasks(updatedTasks);

		const allTasksCompleted = Object.values(updatedTasks).every((task) => task.completed);
		if (allTasksCompleted) {
			setOpenCompleteDialog(true);
		}
	};

	const handleEditIconClick = (id) => {
		const editedTask = tasks[id];
		if (editedTask) {
			setNewTask(editedTask);
			handleOpen(editedTask, true);
		}
	};

	return (
		<Box className='relative w-full h-full flex flex-col justify-center items-start'>
			<Header
				handleOpen={handleOpen}
				handleEditIconClick={handleEditIconClick}
				selectedTaskId={selectedTaskId}
				deleteTask={deleteTask}
			/>
			<TaskList
				tasks={Object.values(tasks)}
				handleTaskClick={handleTaskClick}
				handleTaskCompletion={handleTaskCompletion}
				selectedTaskId={selectedTaskId}
			/>
			<TaskDialog
				key={selectedTaskId}
				open={open}
				handleClose={handleClose}
				newTask={newTask}
				updateNewTaskField={updateNewTaskField}
				editTask={editTask}
				addTask={addTask}
			/>
			<CompleteDialog open={openCompleteDialog} handleClose={handleCloseCompleteDialog} />
		</Box>
	);
}
