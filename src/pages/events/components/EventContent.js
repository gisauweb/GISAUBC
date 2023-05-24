import React, { useState } from 'react'
import { Box } from '@mui/material'
import PAST_EVENTS from './constants';
import UPCOMING_EVENTS from 'shared/data/upcomingEvents'
import DropdownMenu from '../../../shared/components/DropdownMenu';
import GridContainer from 'shared/layout/GridContainer';
import { Typography } from 'shared/components/Typography';

const EventContent = ({upcoming}) => {
    const [selectedYear, setSelectedYear] = useState('2022/2023');
    const features = {
        event: true, 
        upcomingEvent: upcoming
    }

    return (
        <Box className='my-20'>
            <Box className={`flex w-full justify-between ${!upcoming && "mb-36 sm:mb-0"}`}>
                <Typography variant="h2" text={`${upcoming ? "UPCOMING" : "PAST"} EVENTS`} className="pt-0.5" />
                {!upcoming && <DropdownMenu selectedYear={selectedYear} setSelectedYear={setSelectedYear} />}
            </Box>
            <GridContainer data={upcoming ? UPCOMING_EVENTS : PAST_EVENTS[selectedYear]} features={features} className="sm:my-28"/>
        </Box>
    )
}

export default EventContent;
