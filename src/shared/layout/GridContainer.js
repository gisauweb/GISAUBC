import React from 'react'
import { Box, Grid } from '@mui/material'

const GridContainer = ({ data, source }) => {

    const GridItem = ({ event }) => (
        <Grid item xs={2} sm={4} md={4}>
            <Box className='flex flex-col mx-7 sm:mx-0'>
                <img src={event.image} alt="event_image" className='' />
                {source === 'events' &&
                    <Box className='text-center flex flex-col'>
                        <span className='py-2 pt-6 font-semibold text-xl'>{event.title}</span>
                        <span>{event.date}</span>
                        <span>{event.location}</span>
                    </Box>
                }
            </Box>
        </Grid>
    )

    return (
        <Box sx={{ flexGrow: 1, mt: 6 }}>
            <Grid container spacing={{ xs: 10, md: 12 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {data.map((event, index) => (
                    <GridItem event={event} key={index} />
                ))}
            </Grid>
        </Box>
    )
}

export default GridContainer