import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import about_image from './../../assets/about.svg'

const typographyStyle = 'text-xl font-montserrat my-8';

const About = () => {
    return (
        <Box className='flex justify-between'>
            <Box className='w-5/12'>
                <Typography variant='h4' sx={{mb: 4}}>
                    WHO WE ARE
                </Typography>
                <p className='text-xl font-montserrat my-8'>
                    Hello! We are a non-profit cultural organization centered in promoting Indonesian hospitality around the UBC Vancouver campus.
                </p>
                <p className={typographyStyle}>
                    GISAU aims to foster an inclusive, close-knitted, and connected community that exemplifies the signature Indonesian warmth and welcomes the diverse UBC society of Indonesian and non-Indonesian students alike.
                </p>
                <Button variant='contained' size='large' sx={{borderRadius:'24px', textTransform:'none', width: '27%'}}>Learn More</Button>
            </Box>
            <Box className='w-1/2'>
                <img src={about_image}>
                </img>
            </Box>
        </Box>
    )
}

export default About
