import React, { useState } from 'react'
import { Grid, Grow } from '@mui/material';
import GridItem from './GridItem';
import { Button } from 'shared/components/button/Button';

const GrowContainer = ({ data, dataLength, features, isMobile }) => {
    const [grow, setGrow] = useState(false)

    const handleChange = () => {
        setGrow(!grow);
    };

    return (
        <>
            {grow ? <>
                <Grow in={grow}
                    style={{ transformOrigin: '0 0 0', width: "100%" }}
                    {...(grow ? { timeout: 3000 } : {})}
                >
                    <Grid item xs={1} sm={2} md={2}>
                        <Grid container spacing={{ xs: 10, md: 12 }} columns={{ xs: 1, sm: 4, md: 6 }}>
                            {data.slice(dataLength / 3, dataLength * 2 / 3).map((item, index) => (
                                <GridItem item={item} features={features} key={index} />
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
                            {data.slice(dataLength * 2 / 3).map((item, index) => (
                                <GridItem item={item} features={features} key={index} />
                            ))}
                        </Grid>
                    </Grid>
                </Grow>
                <Grid item xs={1} sm={2} md={2} className='flex justify-center'>
                    <Button text="Show Less" handleClickButton={handleChange} transparentBg={true} />
                </Grid>
            </> : (!(features.upcomingEvent) && isMobile) &&
            <Grid item xs={1} sm={2} md={2} className='flex justify-center'>
                <Button text="Show More" handleClickButton={handleChange} />
            </Grid>}
        </>
    )
}

export default GrowContainer