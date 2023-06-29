import React, { useState } from 'react';
import { Box } from '@mui/material';
import GridContainer from 'shared/components/GridContainer';
import { Typography, DropdownMenu } from 'shared/components/index';
import UPCOMING_EVENTS from 'shared/data/upcoming_event';
import PAST_EVENTS from './constants';
import EventGridContent from './EventGridContent';

function EventContent({ upcoming }) {
	const [selectedYear, setSelectedYear] = useState('2022/2023');

	return (
		<Box className='my-20'>
			<Box className='flex flex-col w-full justify-between'>
				<Typography
					variant='h2'
					text={`${upcoming ? 'UPCOMING' : 'PAST'} EVENTS`}
					className={`pt-0.5 ${!upcoming && 'mb-3 sm:mb-0'}`}
				/>
				{!upcoming && (
					<DropdownMenu selectedYear={selectedYear} setSelectedYear={setSelectedYear} source='Event' />
				)}
			</Box>
			<GridContainer className='sm:my-28'>
				<EventGridContent
					upcomingEvent={upcoming}
					data={upcoming ? UPCOMING_EVENTS : PAST_EVENTS[selectedYear]}
				/>
			</GridContainer>
		</Box>
	);
}

export default EventContent;
