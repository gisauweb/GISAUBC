import { Box } from '@mui/material';
import sunshineImg from 'assets/home-page/about/sunshine.svg';
import stars from 'assets/home-page/activities/stars.svg';
import { useState } from 'react';
import GridContainer from 'app/shared/components/grid/GridContainer';
import GridContent from 'app/shared/components/grid/GridContent';
import { DropdownMenu } from 'app/shared/components/index';
import SubHeading from 'app/shared/components/SubHeading';
import UPCOMING_EVENTS from 'app/shared/data/upcoming_event';
import PAST_EVENTS from './constants';

function EventContent({ upcoming }) {
	const [selectedYear, setSelectedYear] = useState('2025/2026');
	const eventData = upcoming ? UPCOMING_EVENTS.filter((el) => el.isEvent) : PAST_EVENTS[selectedYear];

	return (
		<Box className={`${upcoming ? '' : 'pb-4 lg:pb-6'}`}>
			<Box className='flex flex-col w-full justify-between'>
				<SubHeading
					text={upcoming ? 'UPCOMING' : 'PAST EVENTS'}
					isLeft
					isMirror
					icon={upcoming ? sunshineImg : stars}
				/>
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
