import React, { useState, useEffect } from 'react'
import { KeyboardArrowUp } from '@mui/icons-material';

export const ScrollButtonContainer = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        const websiteHeight = document.getElementById('root').clientHeight; 
        if (scrolled > (websiteHeight * 3/5)) {
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
        <div className={`sb fixed right-32 2xl:right-64 z-10 bottom-64`} style={{display: visible? 'inline' : 'none'}} >
            <div className='rounded-full bg-primary w-12 h-12 flex justify-center items-center hover:cursor-pointer' onClick={scrollToTop}>
                <KeyboardArrowUp style={{ color: 'white' }} fontSize='large' />
            </div>
        </div>
    );
};
