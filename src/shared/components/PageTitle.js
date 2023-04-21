import { Box } from '@mui/material'
import React from 'react'

export const PageTitle = ({ text }) => {
    return (
        <Box className='text-left w-[90%] pt-20'>
            <span className="text-3xl sm:text-4xl xl:text-5xl font-semibold font-proxima-nova text-primary pt-4 lg:pt-6">
                {text}
            </span>
        </Box>
    )
}
