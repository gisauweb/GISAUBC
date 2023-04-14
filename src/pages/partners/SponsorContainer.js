import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";

const SponsorContainer = ({ name, logo, reversed }) => {

    const containerStyle = {
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center'
    }
    const boxStyle = {
        width: '50%',
        height: 'auto',
        display: 'flex',
    }
    const typographyStyle = {
        color: "#AF4328"
    }

    return (
        <Container style={containerStyle} className="py-3">
            <Box style={boxStyle} className="justify-end pr-4 sm:pr-9">
                {
                    reversed ? <Typography variant="h4" style={typographyStyle}><p className="font-lazyDog text-right">{name}</p></Typography>
                        : <img alt={name} src={logo} className="w-3/4 h-auto rounded-md sm:w-2/5 sm:max-h-60"/>
                }
            </Box>
            <Box style={boxStyle} className="justify-start pl-4 sm:pl-9">
                {
                    reversed ? <img alt={name} src={logo} className="w-3/4 h-auto rounded-md sm:w-2/5 sm:max-h-60"/>
                        : <Typography variant="h4" style={typographyStyle}><p className="font-lazyDog text-left">{name}</p></Typography>
                }
            </Box>
        </Container >
    )
}


export default SponsorContainer