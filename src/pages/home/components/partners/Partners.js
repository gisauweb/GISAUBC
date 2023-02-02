import { Box } from '@mui/material'
import React from 'react'
import Marquee from 'react-fast-marquee';
import { partners, rainbow } from './constants';
import { useMediaQuery } from 'react-responsive';

const Partners = () => {
    const isLaptop = useMediaQuery({ query: `(max-width: 1440px) ` });
    return (
        <Box className='pt-24'>
            <Box className="w-full flex pb-3 ">
                <span className="text-3xl font-bold font-oswald text-primary pt-8">
                    OUR PARTNERS
                </span>
                <img src={rainbow} alt="Rainbow" className="w-10 relative right-6 bottom-1.5"></img>
            </Box>
            <Box className='py-14'>
                <Marquee speed={isLaptop ? 50 : 80}>
                    <div className="flex items-center justify-around flex-wrap">
                        {partners.map((partner, i) => (
                            <div className="mx-12" key={i}>
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-36"
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