import React, { useState, useEffect } from 'react'
import { KeyboardArrowUp } from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive';

export const ScrollButtonContainer = () => {
    const [visible, setVisible] = useState(false)
    const isMobile = useMediaQuery({ query: `(max-width: 639px) ` });

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        const websiteHeight = document.getElementById('root').clientHeight; 
        if (scrolled > (websiteHeight * 13/20)) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
    }, []);

    return (
        <div className={`sb fixed right-12 sm:right-32 2xl:right-64 z-10 bottom-48 lg:bottom-64`} style={{display: visible? 'inline' : 'none'}} >
            <div className='w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full border-2 border-primary bg-red-100 hover:cursor-pointer' onClick={scrollToTop}>
                <KeyboardArrowUp style={{ color: 'rgb(125 2 2)' }} fontSize={isMobile ? 'medium' : 'large'} />
            </div>
        </div>
    );
};
