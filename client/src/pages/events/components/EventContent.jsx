import { Box } from '@mui/material';
import sunshineImg from 'assets/home-page/about/sunshine.svg';
import stars from 'assets/home-page/activities/stars.svg';
import supabase from 'libs/supabaseClient';
import { useEffect, useState } from 'react';
import GridContainer from 'shared/components/grid/GridContainer';
import GridContent from 'shared/components/grid/GridContent';
import { DropdownMenu } from 'shared/components/index';
import SubHeading from 'shared/components/SubHeading';
// import UPCOMING_EVENTS from 'shared/data/upcoming_event';
import PAST_EVENTS from './constants';
import { usePastPosts, useUpcomingPosts } from 'hooks/usePosts';

function EventContent({ upcoming }) {
	const [selectedYear, setSelectedYear] = useState('2025/2026');

	const { posts: upcomingPosts, loading: upcomingLoading, error: upcomingError } = useUpcomingPosts();
	const { posts: pastPosts, loading: pastLoading, error: pastError } = usePastPosts();

	const eventData = upcoming ? upcomingPosts : PAST_EVENTS[selectedYear];

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
