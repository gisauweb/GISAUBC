import { Box } from '@mui/material'
import sunshine_image from "assets/rainbow.svg";
import React from 'react'
import Marquee from 'react-fast-marquee';
import { partners } from './constants';

const Partners = () => {
    return (
        <Box>
            <Box className="w-full flex pb-1.5">
                <span className="text-3xl font-bold font-oswald text-primary pt-8">
                    OUR PARTNERS
                </span>
                <img src={sunshine_image} alt="Sunshine" className="w-10 relative -z-10 right-6 bottom-1.5"></img>
            </Box>
            <Box className='w-1/2'>
                <Marquee speed={50}>
                    <div className="flex items-center justify-around flex-wrap">
                        {partners.map((partner, i) => (
                            <div className="">
                                <img
                                    src={partner.logo}
                                    key={i}
                                    alt={partner.name}
                                />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </Box>
        </Box>
    )
}

export default Partners