import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

function ExpandableBox({ title, description }) {
	const [expanded, setExpanded] = useState(false);

	const handleClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'flex-start',
				padding: '15px',
				borderBottom: '1px solid #e2e8f0',
				borderRadius: '6px',
				transition: 'box-shadow 0.3s ease-in-out',
				boxShadow: expanded ? '0px 3px 5px rgba(0, 0, 0, 0.2)' : '0px 1px 2px rgba(0, 0, 0, 0.1)',
				'&:hover': {
					transform: 'translateY(-2px)',
					boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
				},
				cursor: 'pointer',
			}}
			onClick={handleClick}
		>
			<Box
				sx={{
					width: '4px',
					height: '100%',
					backgroundColor: expanded ? 'blue' : 'lightblue',
					borderRadius: '6px',
					marginBottom: '10px',
					transition: 'height 0.3s ease-in-out, background-color 0.3s ease-in-out',
				}}
			/>
			<Box>
				<Typography
					variant='h6'
					sx={{
						marginBottom: '5px',
						fontWeight: 'bold',
						visibility: 'visible',
					}}
				>
					{title}
				</Typography>
				{expanded && <Typography variant='body1'>{description}</Typography>}
			</Box>
		</Box>
	);
}

export default ExpandableBox;
