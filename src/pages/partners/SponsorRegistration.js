import React, { useContext } from 'react';
import { Box, Container, Typography } from '@mui/material'

const SponsorRegistration = () => {
    
    const containerStyle = {
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    }

    const steps = [
        { "id": "1", "details": "Sign up for membership" },
        { "id": "2", "details": "Wait for your e-membership" },
        { "id": "3", "details": "Enjoy all access to our sponsorship partners" }
    ]

    const stepsBoxStyle = {
        display: 'flex',
        width: "100%",
    }

    const stepBoxStyle = {
        margin: "5% 0",
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "100%"
    }

    const numberSx = {
        borderRadius: '50%',
        border: 3,
        width: {
            xs: "3rem",
            sm: "4rem"
        },
        height: {
            xs: "3rem",
            sm: "4rem"
        },
        lineHeight: {
            xs: "1.2",
            sm: "1.1"
        }
    }
    
    return (
        <Container style={containerStyle} className="mt-5 sm:my-3">
            <Typography variant="h3"><p className="font-lazyDog text-gisau">How to access sponsors?</p></Typography>
            <Box style={stepsBoxStyle} className="flex-col mt-3 sm:flex-row">
                {steps.map((step) => (
                    <Box style={stepBoxStyle} className="flew-row sm:flex-col" key={step.id}>
                        <Box className="mr-5 sm:mr-0 sm:mb-5">
                            <Typography variant="h3" sx={numberSx} className="text-gisau">
                                <p className="font-lazyDog">{step.id}</p>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h5'>
                                <p className="text-left font-quicksand font-bold text-gisau sm:!text-center">{step.details}</p>
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}

export default SponsorRegistration