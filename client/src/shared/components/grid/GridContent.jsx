import { Grid } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import GridItem from './GridItem';
import PastEventGrow from './PastGridGrow';

export default function GridContent({ data, upcomingEvent, itemType }) {
	const isMobile = useMediaQuery({ query: '(max-width: 639px) ' });
	const dataLength = data.length;

	return dataLength === 0 ? (
		<Grid style={{ zIndex: 5 }} item xs={1} sm={2} md={2}>
			<p>Stay tuned :)</p>
		</Grid>
	) : (
		<>
			{' '}
			{data.slice(0, isMobile && dataLength >= 6 ? Math.ceil(dataLength / 3) : dataLength).map((item) => (
				<GridItem item={item} upcomingEvent={upcomingEvent} itemType={itemType} key={item.title} />
			))}
			{dataLength >= 6 && (
				<PastEventGrow data={data} dataLength={dataLength} upcomingEvent={upcomingEvent} isMobile={isMobile} />
			)}
		</>
	);
}
