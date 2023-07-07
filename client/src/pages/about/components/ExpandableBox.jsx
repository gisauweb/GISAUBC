import React from 'react';
import { Box, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

function ExpandableBox({ title, description, expandedBox, setExpandedBox }) {
	const expanded = expandedBox === title;
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

	const handleClick = () => {
		setExpandedBox((prev) => (prev === title ? null : title));
	};

	return (
		<Box
			className={`flex items-center rounded-md cursor-pointer bg-bgPrimary ${expanded ? 'h-56 sm:h-40' : 'h-16'}`}
			sx={{
				borderBottom: '1px solid #e2e8f0',
				transition: 'box-shadow 0.3s ease-in-out',
				boxShadow: expanded ? '0px 3px 5px rgba(0, 0, 0, 0.4)' : '0px 0px 8px rgba(0, 0, 0, 0.1)',
				'&:hover': {
					transform: 'translateY(-2px)',
					boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.4)',
				},
			}}
			onClick={handleClick}
		>
			<Box
				className='rounded-md'
				sx={{
					width: '1px',
					height: '100%',
					backgroundColor: expanded ? '#7D0202' : '#B31717',
					transition: 'background-color 1s ease-in-out',
					pr: 0.5,
				}}
			/>
			<Box className='flex flex-col px-2 sm:pl-4 sm:pr-0'>
				<Typography variant={isMobileView ? 'subtitle2' : 'h6'} sx={{ fontWeight: 'bold' }}>
					{title}
				</Typography>
				{expanded && (
					<Typography variant={isMobileView ? 'caption' : 'body1'} sx={{ mt: 1 }}>
						{description}
					</Typography>
				)}
			</Box>
		</Box>
	);
}

export default ExpandableBox;
