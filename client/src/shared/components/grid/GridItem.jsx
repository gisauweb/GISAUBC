import { Box, Grid } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import Button from 'shared/components/button/Button';
import GridItemDescription from 'shared/components/grid/GridItemDescription';
import PastGridItem from './PastGridItem';
import UpcomingGridItem from './UpcomingGridItem';

export default function GridItem({ item, upcomingEvent, itemType }) {
	const handleClickButton = (link) => {
		window.open(link, '_blank', 'noreferrer');
	};
	const isMobileView = useMediaQuery({ query: '(max-width: 750px)' });

	return itemType === 'rantangan' && upcomingEvent ? (
		// upcoming rantangan
		<Grid item>
			<Box className={`flex ${isMobileView ? 'flex-col' : 'flex-row'} mx-7 sm:mx-0`}>
				<img src={item.image} alt='item_image' className='rounded-2xl z-10' loading='lazy' />
				<Box className={`flex flex-col ${isMobileView ? 'items-center text-center' : 'ml-8 mt-5'} space-y-4`}>
					<span className='font-semibold text-xl py-2' style={{ zIndex: 5 }}>
						{item.title}
					</span>
					<GridItemDescription item={item} itemType={itemType} upcomingEvent={upcomingEvent} />
					<Button text='Pre-order' handleClickButton={() => handleClickButton(item.registrationLink)} />
				</Box>
			</Box>
		</Grid>
	) : (
		// event
		<Grid item xs={1} sm={1.5} md={2}>
			{upcomingEvent ? (
				<UpcomingGridItem item={item} upcomingEvent={upcomingEvent} itemType={itemType} />
			) : (
				<PastGridItem item={item} />
			)}
		</Grid>
	);
}
