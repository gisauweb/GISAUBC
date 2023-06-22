import { Box } from '@mui/material';
import React, { useState } from 'react';
import { Button } from 'shared/components';

export default function TeamButtons() {
	const [selected, setSelected] = useState('All');
	const buttons = ['All', 'Core', 'Events', 'Marketing', 'FnB'];

	const handleClickButton = (buttonName) => {
		setSelected(buttonName);
	};

	return (
		<Box className='flex space-x-10'>
			{buttons.map((buttonName) => (
				<Button
					key={buttonName}
					text={buttonName}
					background={selected === buttonName ? '' : 'grayBg'}
					handleClickButton={() => {
						handleClickButton(buttonName);
					}}
				/>
			))}
		</Box>
	);
}
