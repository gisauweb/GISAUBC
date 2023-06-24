import { Grid } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import EventGridItem from './EventGridItem';
import PastEventGrow from './PastEventGrow';

export default function EventGridContent({ data, upcomingEvent }) {
	const isMobile = useMediaQuery({ query: '(max-width: 639px) ' });
	const dataLength = data.length;

	return dataLength === 0 ? (
		<Grid item xs={1} sm={2} md={2}>
			<p>Stay tuned :)</p>
		</Grid>
	) : (
		<>
			{' '}
			{data.slice(0, !upcomingEvent && isMobile ? dataLength / 3 : dataLength).map((item) => (
				<EventGridItem item={item} upcomingEvent={upcomingEvent} key={item.title} />
			))}
			<PastEventGrow data={data} dataLength={dataLength} upcomingEvent={upcomingEvent} isMobile={isMobile} />
		</>
	);
}
