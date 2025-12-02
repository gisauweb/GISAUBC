import { Box } from '@mui/material';
import React from 'react';
import { Button } from 'shared/components';
import { BUTTONS } from '../constants';

export default function TeamButtons({ selectedButton, setSelectedButton }) {
	const handleClickButton = (buttonName) => {
		setSelectedButton(buttonName);
	};
	return (
		<Box className='flex flex-wrap lg:space-x-6 3xl:space-x-10 mb-1 sm:mb-0'>
			{BUTTONS.map((buttonName) => (
				<Button
					key={buttonName}
					text={buttonName}
					background={selectedButton === buttonName ? '' : 'cremeBg'}
					handleClickButton={() => {
						handleClickButton(buttonName);
					}}
					className='mr-4 mb-4 sm:mr-6 sm:mb-1 2xl:mr-0 text-sm! px-6! h-full!'
				/>
			))}
		</Box>
	);
}
