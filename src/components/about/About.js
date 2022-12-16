import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import about_image from './../../assets/about.svg'
import { useNavigate } from 'react-router-dom';

const typographyStyle = 'text-lg font-montserrat my-6';

const buttonStyle = { 
    borderRadius: '24px', 
    textTransform: 'none', 
    width: '27%', 
    background: "#7D0202"
}

const About = () => {
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate('about')
    }

    return (
        <Box className='flex justify-between items-center'>
            <Box className='w-5/12'>
                <span className='text-4xl font-bold font-oswald text-primary'>
                    WHO WE ARE
                </span>
                <p className={typographyStyle}>
                    Hello! We are a non-profit cultural organization centered in promoting Indonesian hospitality around the UBC Vancouver campus.
                </p>
                <p className={typographyStyle}>
                    GISAU aims to foster an inclusive, close-knitted, and connected community that exemplifies the signature Indonesian warmth and welcomes the diverse UBC society of Indonesian and non-Indonesian students alike.
                </p>
                <Button variant='contained' size='large' sx={buttonStyle} onClick={handleClickButton}>Learn More</Button>
            </Box>
            <Box className='w-1/2'>
                <img src={about_image} className="w-full">
                </img>
            </Box>
        </Box>
    )
}

export default About
