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
        { "id": "3", "details": "Enjoy all access to our partners" }
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
            <span className="text-2xl sm:text-3xl xl:text-4xl font-proxima-nova text-primary pt-4 lg:pt-6">
                How to access our partners?
            </span>
            <Box style={stepsBoxStyle} className="flex-col sm:flex-row">
                {steps.map((step) => (
                    <Box style={stepBoxStyle} className="flew-row sm:flex-col" key={step.id}>
                        <Box className="">
                            <span className="text-2xl sm:text-3xl xl:text-4xl font-oswald text-primary border-4 border-primary rounded-full px-7 py-2 ">
                                {step.id}
                            </span>
                        </Box>
                        <Box className="mt-7">
                            <span className="text-lg sm:text-xl xl:text-2xl font-proxima-nova text-black">
                                {step.details}
                            </span>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}

export default SponsorRegistration