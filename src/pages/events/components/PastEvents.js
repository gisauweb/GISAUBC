import React, { useState } from 'react'
import { Box } from '@mui/material'
import DropdownMenu from './DropdownMenu';

export const PastEvents = (props) => {
    const [year, setYear] = useState("2022/2023")

    const handleChange = (event) => {
        setYear(event.target.value);
    };

    return (
        <Box className='my-14'>
            <Box className='flex w-full justify-between'>
                <span className="text-2xl sm:text-3xl xl:text-4xl font-medium font-oswald text-primary pt-1.5">
                    PAST EVENTS
                </span>
                <DropdownMenu />
            </Box>
        </Box>
    )
}

