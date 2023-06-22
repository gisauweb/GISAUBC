import React from 'react';
import { Box, Grid } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import PastEventGrow from './PastEventGrow';
import PastEvent from './PastEvent';

// const features = {
// 	event: true,
// 	upcomingEvent: upcoming,
// };

export default function PastEventsContainer({ data, features, className }) {
	const dataLength = data.length;
	const isMobile = useMediaQuery({ query: '(max-width: 639px) ' });

	return (
		<Box sx={{ flexGrow: 1, mt: 6 }} className={className}>
			<Grid container spacing={{ xs: 10, md: 12 }} columns={{ xs: 1, sm: 4, md: 6 }}>
				{dataLength === 0 ? (
					<Grid item xs={1} sm={2} md={2}>
						<p>Stay tuned :)</p>
					</Grid>
				) : (
					<>
						{' '}
						{data
							.slice(0, !features.upcomingEvent && isMobile ? dataLength / 3 : dataLength)
							.map((item) => (
								<PastEvent item={item} features={features} key={item.title} />
							))}
						<PastEventGrow data={data} dataLength={dataLength} features={features} isMobile={isMobile} />
					</>
				)}
			</Grid>
		</Box>
	);
}
