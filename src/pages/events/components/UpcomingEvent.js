import { Box } from '@mui/material'
import React from 'react'
import UPCOMING_EVENTS from 'shared/data/UpcomingEvents'
import GridContainer from 'shared/layout/GridContainer'

export const UpcomingEvent = () => {
    return (
        <Box className='my-14'>
            <Box className='flex w-full justify-between mb-28 sm:mb-24'>
                <span className="text-2xl sm:text-3xl xl:text-4xl font-medium font-oswald text-primary pt-1.5">
                    UPCOMING EVENTS
                </span>
            </Box>
            <GridContainer data={UPCOMING_EVENTS} source={'events'} button={true} />
        </Box>
    )
}
