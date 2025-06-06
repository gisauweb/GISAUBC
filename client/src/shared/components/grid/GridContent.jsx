import { Grid } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import GridItem from './GridItem';
import PastGridGrow from './PastGridGrow';

export default function GridContent({ data, upcomingEvent, itemType }) {
	const isMobile = useMediaQuery({ query: '(max-width: 639px) ' });
	const dataLength = data.length;

	return dataLength === 0 ? (
		<Grid item className='w-full relative z-10'>
			{upcomingEvent ? (
				<h4 className='text-center w-full font-oswald text-2xl sm:text-3xl md:text-5xl font-bold text-translucent'>
					Stay tuned for more
					{data.isEvent ? ' exciting events!' : ' Indonesian delicacies!'}
				</h4>
			) : (
				<p>Stay tuned :)</p>
			)}
		</Grid>
	) : (
		<>
			{' '}
			{data.slice(0, isMobile && dataLength >= 6 ? Math.ceil(dataLength / 3) : dataLength).map((item) => (
				<GridItem item={item} upcomingEvent={upcomingEvent} itemType={itemType} key={item.title} />
			))}
			{dataLength >= 6 && (
				<PastGridGrow data={data} dataLength={dataLength} upcomingEvent={upcomingEvent} isMobile={isMobile} />
			)}
		</>
	);
}
