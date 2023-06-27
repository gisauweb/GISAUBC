import { Box } from '@mui/material';
import React from 'react';
import { Button } from 'shared/components';
import { BUTTONS } from './constants';

export default function TeamButtons({ selectedButton, setSelectedButton }) {
	const handleClickButton = (buttonName) => {
		setSelectedButton(buttonName);
	};

	return (
		<Box className='flex space-x-10'>
			{BUTTONS.map((buttonName) => (
				<Button
					key={buttonName}
					text={buttonName}
					background={selectedButton === buttonName ? '' : 'grayBg'}
					handleClickButton={() => {
						handleClickButton(buttonName);
					}}
				/>
			))}
		</Box>
	);
}
