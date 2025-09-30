import React from 'react';
import { Box, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { Add, Edit, Delete, Archive, Unarchive } from '@mui/icons-material';

export default function Header({
	handleOpen,
	handleEditIconClick,
	selectedTaskId,
	deleteTask,
	viewArchives,
	setViewArchives,
}) {
	const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });

	return (
		<Box
			className={`w-full pb-2 top-0 mt-1/5 absolute flex flex-row 
			justify-between items-center ${isMobileView ? 'px-20' : 'px-24'}`}
		>
			<Typography
				className='text-center'
				style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}
			>
				{viewArchives ? 'Archives' : 'Task List'}
			</Typography>
			<Box className='flex flex-row gap-3 justify-center items-center h-[30px]'>
				{viewArchives ? (
					<Unarchive onClick={() => setViewArchives(false)} style={{ cursor: 'pointer', color: '#003249' }} />
				) : (
					<Archive onClick={() => setViewArchives(true)} style={{ cursor: 'pointer', color: '#003249' }} />
				)}
				{!viewArchives && (
					<Add
						onClick={() => handleOpen(false)}
						style={{ cursor: 'pointer', color: '#014900', width: '30px', height: '30px' }}
					/>
				)}
				{selectedTaskId !== null && (
					<Edit
						onClick={() => handleEditIconClick(selectedTaskId)}
						style={{ cursor: 'pointer', color: '#003249' }}
					/>
				)}
				{selectedTaskId !== null && (
					<Delete
						onClick={() => deleteTask(selectedTaskId)}
						style={{ cursor: 'pointer', color: '#732727' }}
					/>
				)}
			</Box>
		</Box>
	);
}
