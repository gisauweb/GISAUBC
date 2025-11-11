import { Box } from '@mui/material';
import klepon from 'assets/home-page/activities/klepon.svg';
import bakmiIcon from 'assets/rantangan-page/bakmiIcon.svg';
import { useState } from 'react';
import GridContainer from 'shared/components/grid/GridContainer';
import { DropdownMenu } from 'shared/components/index';
import SubHeading from 'shared/components/SubHeading';
import UPCOMING_EVENTS from 'shared/data/upcoming_event';
import GridContent from '../../../shared/components/grid/GridContent';
import PAST_RANTANGAN from './constants';

function RantanganContent({ upcoming }) {
	const [selectedYear, setSelectedYear] = useState('2025/2026');
	const eventData = upcoming ? UPCOMING_EVENTS.filter((el) => !el.isEvent) : PAST_RANTANGAN[selectedYear];

	return (
		<Box className={`relative ${upcoming ? '' : 'pb-4 lg:pb-6'}`}>
			<Box className='absolute w-screen left-0'>
				{!upcoming && (
					<img
						src={bakmiIcon}
						alt='bakmi-icon'
						className='absolute w-[30%] right-10 z-0 -top-80'
						loading='lazy'
					/>
				)}
			</Box>
			<Box className='flex flex-col w-full justify-between'>
				<SubHeading
					text={upcoming ? 'UPCOMING' : 'PAST RANTANGAN'}
					isLeft
					icon={upcoming ? '/icons/noodle.svg' : klepon}
				/>

				{!upcoming && (
					<DropdownMenu selectedYear={selectedYear} setSelectedYear={setSelectedYear} source='Rantangan' />
				)}
			</Box>
			<GridContainer className='my-10 sm:my-28'>
				<GridContent upcomingEvent={upcoming} data={eventData} itemType='rantangan' />
			</GridContainer>
		</Box>
	);
}

export default RantanganContent;
