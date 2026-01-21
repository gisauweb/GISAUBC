import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

function PartnerContainer({ name, logo, description, link, code }) {
    const [hovered, setHovered] = useState(false);
    const hasCode = Boolean(code);

    return (
        <Box className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-12 z-40">
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={hasCode ? () => setHovered(true) : undefined}
                onMouseLeave={hasCode ? () => setHovered(false) : undefined}
                className="block"
            >
                <div className="relative w-52 h-52 [perspective:1000px]">
                    <div
                        className={`
                            absolute inset-0
                            transition-transform duration-700 ease-in-out
                            [transform-style:preserve-3d]
                            ${hasCode && hovered ? '[transform:rotateY(180deg)]' : ''}
                        `}
                    >
                        <div className="absolute inset-0 backface-hidden rounded-xl
                                        flex items-center justify-center">
                            <img alt={name} src={logo} loading="lazy" />
                        </div>

                        {hasCode && (
                            <div
                                className="absolute inset-0 backface-hidden rounded-xl
                                           [transform:rotateY(180deg)]
                                           flex items-center justify-center
                                           bg-[#F5F1ED] text-[#222222]"
                            >
                                <div className="text-center">
                                    <span className="text-sm font-semibold uppercase tracking-wide">
                                        Code
                                    </span>
                                    <div className="text-xl font-bold tracking-wider mt-1">
                                        {code}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </a>

            <Box className="flex flex-col w-3/4 pt-6 sm:pt-8 gap-4 justify-center items-center">
                <Typography variant="h4" color="maroon" className="text-left w-full">
                    {name}
                </Typography>
                <Typography variant="body1" color="black" className="text-left">
                    {description}
                </Typography>
            </Box>
        </Box>
    );
}

export default PartnerContainer;
