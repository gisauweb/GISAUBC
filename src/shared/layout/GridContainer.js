import React from 'react'
import { Box, Grid } from '@mui/material'
import { useMediaQuery } from 'react-responsive';
import GrowContainer from './GrowContainer';
import GridItem from './GridItem';

const GridContainer = ({ data, source, upcoming, className }) => {
    const dataLength = data.length
    const isMobile = useMediaQuery({ query: `(max-width: 639px) ` });

    return (
        <Box sx={{ flexGrow: 1, mt: 6 }} className={className}>
            <Grid container spacing={{ xs: 10, md: 12 }} columns={{ xs: 1, sm: 4, md: 6 }}>
                {data.slice(0, (!upcoming && isMobile) ? dataLength / 3 : dataLength).map((item, index) => (
                    <GridItem item={item} source={source} upcoming={upcoming} key={index} />
                ))}
                <GrowContainer data={data} dataLength={dataLength} upcoming={upcoming} isMobile={isMobile}/>
            </Grid>
        </Box>
    )
}

export default GridContainer