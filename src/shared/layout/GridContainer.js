import React from 'react'
import { Box, Grid } from '@mui/material'
import { Button } from 'shared/components/button/Button'

const GridContainer = ({ data, source, button, className }) => {
    const handleClickButton = (link) => {
        window.open(link, "_blank", "noreferrer");
    };

    const GridItem = ({ event }) => (
        <Grid item xs={2} sm={4} md={4}>
            <Box className='flex flex-col mx-7 sm:mx-0'>
                <img src={event.image} alt="event_image" className='' />
                {source === 'events' &&
                    <Box className='text-center flex flex-col py-4'>
                        <span className='py-2 font-semibold text-xl'>{event.title}</span>
                        <span>{event.date}</span>
                        <span>{event.loc}</span>
                    </Box>
                }
                {button &&
                    <Box className='flex justify-center'>
                        <Button
                            text={"Register"}
                            handleClickButton={() => handleClickButton(event.link)}
                        />
                    </Box>
                }
            </Box>
        </Grid>
    )

    return (
        <Box sx={{ flexGrow: 1, mt: 6 }} className={className}>
            <Grid container spacing={{ xs: 10, md: 12 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {data.map((event, index) => (
                    <GridItem event={event} key={index} />
                ))}
            </Grid>
        </Box>
    )
}

export default GridContainer