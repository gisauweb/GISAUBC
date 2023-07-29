import React, { useState } from 'react';
import { Box } from '@mui/material';
import GridContainer from 'shared/components/grid/GridContainer';
import { Typography, DropdownMenu } from 'shared/components/index';
import UPCOMING_RANTANGAN from 'shared/data/upcoming_rantangan';
import PAST_RANTANGAN from './constants';
import RantanganGridContent from './RantanganGridContent';

function EventContent({ upcoming }) {
	const [selectedYear, setSelectedYear] = useState('2022/2023');
	const eventData = upcoming ? UPCOMING_RANTANGAN : PAST_RANTANGAN[selectedYear];

	return (
		<Box className='my-20'>
			<Box className='flex flex-col w-full justify-between'>
				<Typography
					variant='h2'
					text={`${upcoming ? 'UPCOMING' : 'PAST'} RANTANGAN`}
					className={`pt-0.5 ${!upcoming && 'mb-3 sm:mb-0'}`}
				/>
				{!upcoming && (
					<DropdownMenu selectedYear={selectedYear} setSelectedYear={setSelectedYear} source='Event' />
				)}
			</Box>
			<GridContainer className='sm:my-28'>
				<RantanganGridContent upcomingEvent={upcoming} data={eventData} />
			</GridContainer>
		</Box>
	);
}

export default EventContent;
