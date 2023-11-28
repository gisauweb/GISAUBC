import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import GridContainer from 'shared/components/grid/GridContainer';
import { DropdownMenu } from 'shared/components/index';
import UPCOMING_RANTANGAN from 'shared/data/upcoming_rantangan';
import bakmi from 'assets/rantangan-page/bakmi.svg';
import PAST_RANTANGAN from './constants';
import GridContent from '../../../shared/components/grid/GridContent';

function RantanganContent({ upcoming }) {
	const [selectedYear, setSelectedYear] = useState('2022/2023');
	const eventData = upcoming ? UPCOMING_RANTANGAN : PAST_RANTANGAN[selectedYear];

	return (
		<Box className='my-20 relative'>
			<Box className='absolute w-screen left-0'>
				{!upcoming && (
					<img
						src={bakmi}
						alt='bakmi-icon'
						className='absolute w-[30%] right-10 z-[0] -top-80'
						loading='lazy'
					/>
				)}
			</Box>
			<Box className='flex flex-col w-full justify-between'>
				<Typography variant='h4' color='primary' className={`pt-0.5 ${!upcoming && 'pb-3 sm:pb-0'}`}>
					{`${upcoming ? 'UPCOMING' : 'PAST'} RANTANGAN`}
				</Typography>
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
