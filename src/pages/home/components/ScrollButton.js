import React, { useState, useEffect, useRef } from 'react'
import { KeyboardArrowUp } from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive';

const ScrollButton = ({ visible, onClick, scrollButtonRef }) => {
    return (
        <div ref={scrollButtonRef} className={`sb fixed bottom-28 lg:right-36 2xl:right-48 z-10`} style={{ opacity: visible ? 1 : 0 }}>
            <div className='rounded-full bg-primary w-12 h-12 flex justify-center items-center hover:cursor-pointer' onClick={onClick}>
                <KeyboardArrowUp style={{ color: 'white' }} fontSize='large' />
            </div>
        </div>
    );
};

const ScrollButtonWithFooter = ({ visible, onClick, scrollButtonRef }) => {
    return (
        <div ref={scrollButtonRef} className={`sbwf fixed bottom-64 lg:right-36 2xl:right-48 z-10`} style={{ opacity: visible ? 1 : 0 }}>
            <div className='rounded-full bg-primary w-12 h-12 flex justify-center items-center hover:cursor-pointer' onClick={onClick}>
                <KeyboardArrowUp style={{ color: 'white' }} fontSize='large' />
            </div>
        </div>
    );
};

export const ScrollButtonContainer = () => {

    const [visible, setVisible] = useState(false)
    const [buttonClass, setButtonClass] = useState('.sb')
    const [showWithFooter, setShowWithFooter] = useState(false);
    const scrollButtonRef = useRef(null);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        console.log(scrolled)
        const websiteHeight = document.getElementById('root').clientHeight; 
        console.log("Haleluya2: ", (websiteHeight))
        if (scrolled > (websiteHeight * 3/5)) {
            console.log("Haleluya: ", (websiteHeight * 3/5))
            setVisible(true)
        } else {
            setVisible(false)
        }
    };

    const handleScroll = () => {
        toggleVisible();
        const scrollButtonRect = document.querySelector(buttonClass).getBoundingClientRect();
        const footerRect = document.querySelector(".footer").getBoundingClientRect();
        if (scrollButtonRect.bottom > footerRect.top) {
            console.log("HUH")
            setShowWithFooter(true);
            setButtonClass(".sbwf");
        } else {
            setShowWithFooter(false);
            setButtonClass(".sb");
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <ScrollButton visible={visible && !showWithFooter} onClick={scrollToTop} scrollButtonRef={scrollButtonRef} />
            <ScrollButtonWithFooter visible={visible && showWithFooter} onClick={scrollToTop} scrollButtonRef={scrollButtonRef} />
        </>
    );
};
