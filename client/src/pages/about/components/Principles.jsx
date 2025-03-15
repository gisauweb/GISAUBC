import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ExpandableBox from './ExpandableBox';
import { VISION_MISSION } from '../constants';

export default function Principles() {
	const [expandedBox, setExpandedBox] = useState(null);

	return (
		<Box
			className='flex flex-col items-center sm:flex-row sm:items-left
				mt-10 p-8 bg-[#FEF8EF] rounded-xl min-h-[20rem]'
			sx={{
				gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
				boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
			}}
		>
			<Box className='w-full sm:w-1/2 flex flex-col justify-center items-center mb-6 sm:mb-0'>
				<Typography variant='h2' color='primary'>
					Our
				</Typography>
				<Typography variant='h2' color='primary'>
					Values
				</Typography>
			</Box>
			<Box className='flex flex-col w-full sm:w-1/2 justify-center space-y-4 hover:cursor-pointer'>
				{VISION_MISSION.map((item) => (
					<ExpandableBox
						title={item.vision}
						description={item.mission}
						expandedBox={expandedBox}
						setExpandedBox={setExpandedBox}
						key={item.vision}
					/>
				))}
			</Box>
		</Box>
	);
}
