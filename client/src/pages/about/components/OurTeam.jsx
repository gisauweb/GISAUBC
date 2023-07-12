import React from 'react';
import { Box } from '@mui/material';
import GridContainer from 'shared/components/GridContainer';
import { Typography, DropdownMenu } from 'shared/components/index';
import TeamButtons from './TeamButtons';
import TeamGridContent from './TeamGridContent';

export default function OurTeam({ data, states }) {
	// eslint-disable-next-line prettier/prettier
	const {
		selectedYear, selectedButton, selectedCard,
		setSelectedYear, setSelectedButton, setSelectedCard,
	} = states;

	return (
		<Box>
			<Box className='w-full pb-4 sm:pb-6 3xl:pb-10'>
				<Typography variant='h1' text='Meet our team.' />
			</Box>
			<Box>
				<Box className='flex flex-col'>
					<TeamButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
					<DropdownMenu selectedYear={selectedYear} setSelectedYear={setSelectedYear} source='About' />
				</Box>
				<GridContainer className='sm:mt-14'>
					<TeamGridContent data={data} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
				</GridContainer>
			</Box>
		</Box>
	);
}
