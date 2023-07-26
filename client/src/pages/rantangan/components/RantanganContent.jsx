import React, { useState } from 'react';
import { Box } from '@mui/material';
import GridContainer from 'shared/layout/GridContainer';
import { Typography, DropdownMenu } from 'shared/components/index';
import UPCOMING_EVENTS from 'shared/data/upcoming_event';
import PAST_EVENTS from './constants';

function EventContent({ upcoming }) {
	const [selectedYear, setSelectedYear] = useState('2023/2024');
	const eventData = upcoming ? UPCOMING_EVENTS : PAST_EVENTS[selectedYear];
	const features = {
		event: true,
		upcomingEvent: upcoming,
	};

	return (
		<Box className='my-20'>
			<Box className={`flex w-full justify-between ${!upcoming && 'mb-36 sm:mb-0'}`}>
				<Typography variant='h2' text={`${upcoming ? 'UPCOMING' : 'PAST'} EVENTS`} className='pt-0.5' />
				{!upcoming && <DropdownMenu selectedYear={selectedYear} setSelectedYear={setSelectedYear} />}
			</Box>
			<GridContainer data={eventData} features={features} className='sm:my-28' />
		</Box>
	);
}

export default EventContent;
