import React from "react";
import { Box, Container } from "@mui/material";

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

    return (
        <Container style={containerStyle} className="py-6">
            <Box style={boxStyle} className="justify-end pr-4 sm:pr-9">
                {
                    reversed ?
                        <span className="text-2xl sm:text-3xl xl:text-4xl font-semibold font-oswald text-primary text-right">
                            {name}
                        </span>
                        : <img alt={name} src={logo} className="rounded-md h-16 sm:h-20 lg:h-28 sm:max-h-60" />
                }
            </Box>
            <Box style={boxStyle} className="justify-start pl-4 sm:pl-9">
                {
                    reversed ?
                        <img alt={name} src={logo} className="rounded-md h-16 sm:h-20 lg:h-28 sm:max-h-60" />
                        : <span className="text-2xl sm:text-3xl xl:text-4xl font-semibold font-oswald text-primary text-left">
                            {name}
                        </span>
                }
            </Box>
        </Container >
    )
}


export default SponsorContainer