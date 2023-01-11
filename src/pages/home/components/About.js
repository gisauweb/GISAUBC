import React from 'react'
import { Box, Button } from '@mui/material'
import about_image from './../../../assets/about.svg'
import sunshine_image from './../../../assets/sunshine.svg'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const typographyStyle = 'text-[19px] font-proxima-nova my-6 w-full pr-12';

const useStyles = makeStyles({
    button: {
        borderRadius: '24px',
        textTransform: 'none',
        width: '22%',
        background: "linear-gradient(to left, #7D0202, #7D0202)",
        color: "white",
        height: '3rem',
        '&:hover': {
            background: 'linear-gradient(to left, #7D0202, #B25F4C)',
            transitionTimingFunction: "ease-out"
        },
    },
    bgImage: {
        backgroundImage: `url(${sunshine_image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 17% bottom 30%",
    },
})

const About = () => {
    const navigate = useNavigate();
    const classes = useStyles();

    const handleClickButton = () => {
        navigate('about')
    }

    return (
        <Box className='flex justify-between items-center'>
            <Box className='w-1/2'>
                <Box className={`flex w-2/5 ${classes.bgImage}`}>
                    <span className='text-4xl font-bold font-oswald text-primary pt-10'>
                        WHO WE ARE
                    </span>
                </Box>
                <p className={typographyStyle}>
                    Hello! We are a non-profit cultural organization centered in promoting Indonesian hospitality around the UBC Vancouver campus.
                </p>
                <p className={typographyStyle}>
                    GISAU aims to foster an inclusive, close-knitted, and connected community that exemplifies the signature Indonesian warmth and welcomes the diverse UBC society of Indonesian and non-Indonesian students alike.
                </p>
                <Button variant='contained' size='large' className={classes.button} onClick={handleClickButton}><span className='font-oswald text-lg'>Learn More</span></Button>
            </Box>
            <Box className='w-1/2'>
                <img src={about_image} alt="GISAU Executives" className="w-11/12 ml-12" />
            </Box>
        </Box>
    )
}

export default About
