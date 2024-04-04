import React from 'react';
import { Box, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

function TaskList({ tasks, handleTaskClick, handleTaskCompletion, selectedTaskId }) {
	const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });

	return (
		<Box
			className={`flex flex-col h-${isMobileView ? '96' : 'full'} ${
				isMobileView ? 'mt-32' : 'mt-[33%]'
			} mb-1/10 w-full px-12 items-center`}
			sx={{ overflowY: 'scroll', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}
		>
			{tasks.length === 0 ? (
				<Typography className='text-slate-600'>No tasks left.</Typography>
			) : (
				tasks.map((task) => (
					<Box
						key={task.title}
						className='text-slate-600 bg-white rounded-2xl mb-4
									py-4 w-3/4 flex flex-row gap-10 items-center'
						style={{
							borderLeft: selectedTaskId === task.id ? '20px solid #732727' : '20px solid white',
							cursor: 'pointer',
						}}
						onClick={() => handleTaskClick(task.id)}
					>
						<Box className='flex flex-col ml-5 w-full overflow-x-auto'>
							<Typography style={{ fontWeight: 'bold' }}>{task.title}</Typography>
							<Typography>{task.description}</Typography>
						</Box>
						<Box className='flex gap-3 w-2/5 pr-3 justify-end'>
							<Typography style={{ fontWeight: 'bold' }}>{`${task.cycles}/${task.target}`}</Typography>
							<Box
								onClick={(e) => {
									e.stopPropagation();
									handleTaskCompletion(task.id);
								}}
								style={{
									cursor: 'pointer',
									backgroundColor: task.completed ? 'green' : 'grey',
									borderRadius: '50%',
								}}
								className='flex justify-center items-center w-[30px] h-[30px]'
							>
								<Typography style={{ color: 'white' }}>✔</Typography>
							</Box>
						</Box>
					</Box>
				))
			)}
		</Box>
	);
}

export default TaskList;
