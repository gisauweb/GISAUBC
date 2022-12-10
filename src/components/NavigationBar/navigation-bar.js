import { Box } from '@mui/material'
import React from 'react'
import { Router } from 'react-router-dom'
import logo from '../../assets/gisau_white.svg'

const NavigationBar = () => {
    return (
        <Box className="bg-[#D9D9D9]/50">
            <Box>
                <img src={logo}></img>
            </Box>
            <Box>
                
            </Box>
        </Box>
    )
}

export default NavigationBar