import React, { useState } from 'react'
import { Box, Grid } from '@mui/material'
import PAST_EVENTS from './constants';
import DropdownMenu from '../../../shared/components/DropdownMenu';

export const PastEvents = (props) => {
    const [selectedYear, setSelectedYear] = useState('2022/2023');

    const Item = ({ image, title, date, location }) => (
        <Box className='flex flex-col mx-7 sm:mx-0'>
            <img src={image} alt="event_image" className='' />
            <Box className='text-center flex flex-col'>
                <span className='py-2 pt-6 font-semibold text-xl'>{title}</span>
                <span>{date}</span>
                <span>{location}</span>
            </Box>
        </Box>
    )

    return (
        <Box className='my-14'>
            <Box className='flex w-full justify-between'>
                <span className="text-2xl sm:text-3xl xl:text-4xl font-medium font-oswald text-primary pt-1.5">
                    PAST EVENTS
                </span>
                <DropdownMenu selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
            </Box>
            <Box sx={{ flexGrow: 1, mt: 6 }}>
                <Grid container spacing={{ xs: 10, md: 12 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                    {PAST_EVENTS[selectedYear].map((event, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item image={event.image} title={event.title} date={event.date} location={event.loc} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

