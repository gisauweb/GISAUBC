import React from 'react'
import { Box, Grid } from '@mui/material'
import event_1 from 'assets/events-page/past-events/event-1.svg'
import DropdownMenu from '../../../shared/components/DropdownMenu';

export const PastEvents = (props) => {
    const Item = ({image, title, date, location}) => (
        <Box className='flex flex-col'>
            <img src={event_1} className=''/>
            <Box className='text-center flex flex-col'>
                <span className='py-2 pt-6 font-semibold text-xl'>SEA Pit Night</span>
                <span>Wednesday, April ??</span>
                <span>The Pit Pub @ UBC</span>
            </Box>
        </Box>
    )

    return (
        <Box className='my-14'>
            <Box className='flex w-full justify-between'>
                <span className="text-2xl sm:text-3xl xl:text-4xl font-medium font-oswald text-primary pt-1.5">
                    PAST EVENTS
                </span>
                <DropdownMenu />
            </Box>
            <Box sx={{ flexGrow: 1, mt: 6 }}>
                <Grid container spacing={{ xs: 2, md: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item>xs=2</Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

