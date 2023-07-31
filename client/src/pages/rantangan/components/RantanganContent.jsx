import React, { useState } from 'react';
import { Box } from '@mui/material';
import GridContainer from 'shared/components/grid/GridContainer';
import { Typography, DropdownMenu } from 'shared/components/index';
import UPCOMING_RANTANGAN from 'shared/data/upcoming_rantangan';
import bakmi from 'assets/rantangan-page/bakmi.svg';
import PAST_RANTANGAN from './constants';
import GridContent from '../../../shared/components/grid/GridContent';

function RantanganContent({ upcoming }) {
	const [selectedYear, setSelectedYear] = useState('2022/2023');
	const eventData = upcoming ? UPCOMING_RANTANGAN : PAST_RANTANGAN[selectedYear];

	return (
		<Box className='my-20 relative'>
			{!upcoming && (
				<img
					src={bakmi}
					alt='bakmi-icon'
					className='absolute w-[70%] sm:w-[30%] -right-[126px] z-[0] -top-20'
				/>
			)}
			<Box className='flex flex-col w-full justify-between'>
				<Typography
					variant='h2'
					text={`${upcoming ? 'UPCOMING' : 'PAST'} RANTANGAN`}
					className={`pt-0.5 ${!upcoming && 'mb-3 sm:mb-0'}`}
				/>
				{!upcoming && (
					<DropdownMenu selectedYear={selectedYear} setSelectedYear={setSelectedYear} source='Rantangan' />
				)}
			</Box>
			<GridContainer className='sm:my-28'>
				<GridContent upcomingEvent={upcoming} data={eventData} itemType='rantangan' />
			</GridContainer>
		</Box>
	);
}

export default RantanganContent;
