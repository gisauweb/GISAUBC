import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

function PartnerContainer({ name, logo, description, link, code }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Box className='flex flex-col sm:flex-row items-center sm:items-start sm:gap-12 z-40'>
            <a
                href={link}
                target='_blank'
                rel='noreferrer'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className='rounded-xl w-52 h-52 flex items-center justify-center'>
                    {hovered ? (
                        <div className="flex flex-col items-center justify-center
                w-full h-full
                bg-sky-100
                border-2 border-sky-300
                rounded-xl
                text-sky-900">
                            <span className="text-sm font-semibold tracking-wide uppercase">
                                Code
                            </span>
                            <span className="text-2xl font-bold tracking-wider mt-1">
                                {code ?? "-"}
                            </span>
                        </div>
                    ) : (
                        <img alt={name} src={logo} loading='lazy' />
                    )}
                </div>
            </a>

            <Box className='flex flex-col w-3/4 pt-6 sm:pt-8 gap-4 justify-center items-center'>
                <Typography variant='h4' color='maroon' className='text-left w-full'>
                    {name}
                </Typography>
                <Typography variant='body1' color='black' className='text-left'>
                    {description}
                </Typography>
            </Box>
        </Box>
    );
}

export default PartnerContainer;
