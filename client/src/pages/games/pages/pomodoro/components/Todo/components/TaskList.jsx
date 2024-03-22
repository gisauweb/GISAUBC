import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

function TaskList({ tasks, handleTaskClick, handleTaskCompletion, selectedTaskIndex }) {
	const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });
	return tasks.length === 0 ? (
		<Box className={`flex flex-col justify-center self-center h-full ${isMobileView ? 'mt-60' : ''}`}>
			<Typography className='text-slate-600'>No tasks left.</Typography>
		</Box>
	) : (
		<Box
			className={`flex flex-col h-${isMobileView ? '96' : 'full'} 
					${isMobileView ? 'mt-32' : 'mt-[33%]'} mb-1/10
					w-full px-12 items-center`}
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
	);
}
export default TaskList;
