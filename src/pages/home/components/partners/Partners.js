import { Box } from '@mui/material'
import React from 'react'
import Marquee from 'react-fast-marquee';
import { partners, rainbow } from './constants';
import { useMediaQuery } from 'react-responsive';

const Partners = () => {
    const isLaptop = useMediaQuery({ query: `(max-width: 1440px)` });
    const isTablet = useMediaQuery({ query: `(max-width: 1023px)` });
    const isMobile = useMediaQuery({ query: `(max-width: 639px)` });	
    return (
        <Box className={`pt-24 ${isMobile && 'hidden'}`}>
            <Box className="w-full flex pb-3 justify-center lg:justify-start">
                <span className="text-3xl font-semibold font-oswald text-primary pt-8">
                    OUR PARTNERS
                </span>
                <img src={rainbow} alt="Rainbow" className="w-10 relative right-6 bottom-1.5"></img>
            </Box>
            <Box className='py-14'>
                <Marquee gradient={false} speed={isTablet ? 50 : isLaptop ? 50 : 80}>
                    <div className="flex items-center justify-around flex-wrap">
                        {partners.map((partner, i) => (
                            <div className="mx-12" key={i}>
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-28 lg:h-36"
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