import React, { useState } from 'react'
import { Box, Grid, Grow } from '@mui/material'
import { Button } from 'shared/components/button/Button'
import { useMediaQuery } from 'react-responsive';

const GridContainer = ({ data, source, upcoming, className }) => {
    const dataLength = data.length
    const [grow, setGrow] = useState(false)
    const isMobile = useMediaQuery({ query: `(max-width: 639px) ` });

    const handleClickButton = (link) => {
        window.open("https://" + link, "_blank", "noreferrer");
    };

    const handleChange = () => {
        setGrow(!grow);
    };


    const GridItem = ({ event }) => (
        <Grid item xs={1} sm={2} md={2}>
            <Box className='flex flex-col mx-7 sm:mx-0'>
                <img src={event.image} alt="event_image" className='' />
                {source === 'events' &&
                    <Box className='text-center flex flex-col py-4'>
                        <span className='py-2 font-semibold text-xl'>{event.title}</span>
                        <span>{event.date}</span>
                        <span>{event.loc}</span>
                    </Box>
                }
                {upcoming &&
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
            <Grid container spacing={{ xs: 10, md: 12 }} columns={{ xs: 1, sm: 4, md: 6 }}>
                {data.slice(0, (!upcoming && isMobile) ? dataLength / 3 : dataLength).map((event, index) => (
                    <GridItem event={event} key={index} />
                ))}
                {grow ? <>
                    <Grow in={grow}
                        style={{ transformOrigin: '0 0 0', width: "100%" }}
                        {...(grow ? { timeout: 3000 } : {})}
                    >
                        <Grid item xs={1} sm={2} md={2}>
                            <Grid container spacing={{ xs: 10, md: 12 }} columns={{ xs: 1, sm: 4, md: 6 }}>
                                {data.slice(dataLength / 3, dataLength * 2 / 3).map((event, index) => (
                                    <GridItem event={event} key={index} />
                                ))}
                            </Grid>
                        </Grid>
                    </Grow>
                    {/* Conditionally applies the timeout prop to change the entry speed. */}
                    <Grow
                        in={grow}
                        style={{ transformOrigin: '0 0 0', width: "100%" }}
                        {...(grow ? { timeout: 5000 } : {})}
                    >
                        <Grid item xs={1} sm={2} md={2}>
                            <Grid container spacing={{ xs: 10, md: 12 }} columns={{ xs: 1, sm: 4, md: 6 }}>
                                {data.slice(dataLength * 2 / 3).map((event, index) => (
                                    <GridItem event={event} key={index} />
                                ))}
                            </Grid>
                        </Grid>
                    </Grow>
                    <Grid item xs={1} sm={2} md={2} className='flex justify-center'>
                        <Button text="Show Less" handleClickButton={handleChange} transparentBg={true} />
                    </Grid>
                </> : (!upcoming && isMobile) &&
                <Grid item xs={1} sm={2} md={2} className='flex justify-center'>
                    <Button text="Show More" handleClickButton={handleChange} />
                </Grid>
                }
            </Grid>
        </Box>
    )
}

export default GridContainer