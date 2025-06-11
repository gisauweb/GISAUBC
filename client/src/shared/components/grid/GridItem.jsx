import { Grid } from '@mui/material';
import PastGridItem from './PastGridItem';
import UpcomingGridItem from './UpcomingGridItem';

export default function GridItem({ item, upcomingEvent, itemType }) {
	return itemType === 'rantangan' && upcomingEvent ? (
		// upcoming rantangan
		<Grid item>
			<UpcomingGridItem item={item} upcomingEvent={upcomingEvent} itemType={itemType} />
		</Grid>
	) : // event
	upcomingEvent ? (
		<Grid item>
			<UpcomingGridItem item={item} upcomingEvent={upcomingEvent} itemType={itemType} />
		</Grid>
	) : (
		<Grid id='upcoming_event' item xs={1} sm={1.5} md={2}>
			<PastGridItem item={item} />
		</Grid>
	);
}
