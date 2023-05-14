import React, { useState } from 'react'
import { Box } from '@mui/material'
import PAST_EVENTS from './constants';
import DropdownMenu from '../../../shared/components/DropdownMenu';
import GridContainer from 'shared/layout/GridContainer';

export const PastEvents = (props) => {
    const [selectedYear, setSelectedYear] = useState('2022/2023');

    return (
        <Box className='my-14'>
            <Box className='flex w-full justify-between mb-28 sm:mb-24'>
                <span className="text-2xl sm:text-3xl xl:text-4xl font-medium font-oswald text-primary pt-1.5">
                    PAST EVENTS
                </span>
                <DropdownMenu selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
            </Box>
            <GridContainer data={PAST_EVENTS[selectedYear]} source={'events'}/>
        </Box>
    )
}
