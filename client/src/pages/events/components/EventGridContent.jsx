import { Grid } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import GridItem from '../../../shared/components/grid/GridItem';
import PastEventGrow from '../../../shared/components/grid/PastGridGrow';

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
			{data.slice(0, isMobile && dataLength >= 6 ? Math.ceil(dataLength / 3) : dataLength).map((item) => (
				<GridItem item={item} upcomingEvent={upcomingEvent} itemType='event' key={item.title} />
			))}
			{dataLength >= 6 && (
				<PastEventGrow data={data} dataLength={dataLength} upcomingEvent={upcomingEvent} isMobile={isMobile} />
			)}
		</>
	);
}
