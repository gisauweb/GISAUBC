import { Box } from '@mui/material';
import React from 'react';
import { Button } from 'shared/components';
import { useMediaQuery } from 'react-responsive';
import { BUTTONS } from './constants';

export default function TeamButtons({ selectedButton, setSelectedButton }) {
	const handleClickButton = (buttonName) => {
		setSelectedButton(buttonName);
	};
	const isMobile = useMediaQuery({ query: '(max-width: 639px) ' });
	return isMobile ? (
		<Box>Test</Box>
	) : (
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
