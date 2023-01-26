import { Box } from '@mui/material'
import rainbow from "assets/rainbow.svg";
import React from 'react'
import Marquee from 'react-fast-marquee';
import { partners } from './constants';

const Partners = () => {
    return (
        <Box>
            <Box className="w-full flex py-14 ">
                <span className="text-3xl font-bold font-oswald text-primary pt-8">
                    OUR PARTNERS
                </span>
                <img src={rainbow} alt="Rainbow" className="w-10 relative right-6 bottom-1.5"></img>
            </Box>
            <Box className='pt-8'>
                <Marquee speed={200}>
                    <div className="flex items-center justify-around flex-wrap">
                        {partners.map((partner, i) => (
                            <div className="mx-8">
                                <img
                                    src={partner.logo}
                                    key={i}
                                    alt={partner.name}
                                    className="h-44"
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