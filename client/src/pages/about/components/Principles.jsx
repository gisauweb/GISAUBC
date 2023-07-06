import React, { useState } from 'react';
import { Box } from '@mui/material';
import ExpandableBox from './ExpandableBox';
import { VISION_MISSION } from '../constants';

export default function Principles() {
	const [expandedBox, setExpandedBox] = useState(null);

	return (
		<Box
			className='flex my-20'
			sx={{
				gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
				padding: '2rem',
				backgroundColor: '#FEF8EF',
				borderRadius: '12px',
				boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
				height: '30rem',
			}}
		>
			<Box className='w-1/2 flex flex-col justify-center items-center'>
				<span className='text-8xl text-primary'>Our</span>
				<span className='text-8xl text-primary'>Values</span>
			</Box>
			<Box className='flex flex-col w-1/2 justify-center space-y-4'>
				{VISION_MISSION.map((item) => (
					<ExpandableBox
						title={item.vision}
						description={item.mission}
						expandedBox={expandedBox}
						setExpandedBox={setExpandedBox}
					/>
				))}
			</Box>
		</Box>
	);
}
