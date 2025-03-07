import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box, Typography } from '@mui/material';
import GridContainer from 'shared/components/grid/GridContainer';
import { DropdownMenu } from 'shared/components/index';
import UPCOMING_RANTANGAN from 'shared/data/upcoming_rantangan';
import bakmiIcon from 'assets/rantangan-page/bakmiIcon.svg';
import PAST_RANTANGAN from './constants';
import GridContent from '../../../shared/components/grid/GridContent';

function RantanganContent({ upcoming }) {
	const [selectedYear, setSelectedYear] = useState('2024/2025');
	const eventData = upcoming ? UPCOMING_RANTANGAN : PAST_RANTANGAN[selectedYear];
	const isMobile = useMediaQuery({ query: '(max-width: 639px) ' });

	return (
		<Box className={`relative ${upcoming ? '' : 'pb-4 lg:pb-6'}`}>
			<Box className='absolute w-screen left-0'>
				{!upcoming && (
					<img
						src={bakmiIcon}
						alt='bakmi-icon'
						className='absolute w-[30%] right-10 z-[0] -top-80'
						loading='lazy'
					/>
				)}
			</Box>
			<Box className='flex flex-col w-full justify-between'>
				<Typography
					variant='h4'
					color='primary'
					className={`pt-0.5 ${upcoming ? 'pt-20' : 'pb-3 sm:pb-0'} ${isMobile && !upcoming ? 'pt-12' : ''}`}
				>
					{`${upcoming ? 'UPCOMING' : 'PAST'} RANTANGAN`}
				</Typography>

				{!upcoming && (
					<DropdownMenu selectedYear={selectedYear} setSelectedYear={setSelectedYear} source='Rantangan' />
				)}
			</Box>
			<GridContainer className='sm:my-28'>
				<GridContent upcomingEvent={upcoming} data={eventData} itemType='rantangan' />
			</GridContainer>
		</Box>
	);
}

export default RantanganContent;
