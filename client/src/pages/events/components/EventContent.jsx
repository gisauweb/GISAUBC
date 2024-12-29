import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import GridContainer from 'shared/components/grid/GridContainer';
import { DropdownMenu } from 'shared/components/index';
import UPCOMING_EVENTS from 'shared/data/upcoming_event';
import GridContent from 'shared/components/grid/GridContent';
import PAST_EVENTS from './constants';

function EventContent({ upcoming }) {
	const [selectedYear, setSelectedYear] = useState('2024/2025');
	const eventData = upcoming ? UPCOMING_EVENTS : PAST_EVENTS[selectedYear];

	return (
		<Box className={`${upcoming ? '' : 'pb-4 lg:pb-6'}`}>
			<Box className='flex flex-col w-full justify-between'>
				<Typography variant='h4' color='primary' className={`pt-0.5 ${upcoming ? 'pt-20' : 'pb-3 sm:pb-0'}`}>
					{`${upcoming ? 'UPCOMING' : 'PAST'} EVENTS`}
				</Typography>
				{!upcoming && (
					<DropdownMenu selectedYear={selectedYear} setSelectedYear={setSelectedYear} source='Event' />
				)}
			</Box>
			<GridContainer className='sm:my-28'>
				<GridContent upcomingEvent={upcoming} data={eventData} itemType='event' />
			</GridContainer>
		</Box>
	);
}

export default EventContent;
