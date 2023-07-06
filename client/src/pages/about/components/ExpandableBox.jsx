import React from 'react';
import { Box, Typography } from '@mui/material';

function ExpandableBox({ title, description, expandedBox, setExpandedBox }) {
	const expanded = expandedBox === title;

	const handleClick = () => {
		setExpandedBox((prev) => (prev === title ? null : title));
	};

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				height: expanded ? '12rem' : '7rem',
				borderBottom: '1px solid #e2e8f0',
				borderRadius: '6px',
				transition: 'box-shadow 0.3s ease-in-out',
				boxShadow: expanded ? '0px 3px 5px rgba(0, 0, 0, 0.4)' : '0px 1px 2px rgba(0, 0, 0, 0.1)',
				'&:hover': {
					transform: 'translateY(-2px)',
					boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.4)',
				},
				cursor: 'pointer',
				backgroundColor: '#FFFDF5',
			}}
			onClick={handleClick}
		>
			<Box
				sx={{
					width: expanded ? '1.2rem' : '0.38rem',
					height: '100%',
					backgroundColor: expanded ? '#7D0202' : '#B31717',
					borderRadius: '6px',
					transition: 'background-color 1s ease-in-out',
					mr: 1,
				}}
			/>
			<Box className='flex flex-col p-2 '>
				<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
					{title}
				</Typography>
				{expanded && <Typography variant='body1'>{description}</Typography>}
			</Box>
		</Box>
	);
}

export default ExpandableBox;
