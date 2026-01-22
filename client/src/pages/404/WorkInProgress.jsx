import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainContainer from 'shared/layout/MainContainer';
import { Footer, Button } from 'shared/components/index';
import workInProgressImage from '/icons/work-in-progress-madu.png';

export default function WorkInProgress() {
    const navigate = useNavigate();

    return (
        <Box>
            <MainContainer>
                <div className='flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 py-10'>

                    <div className='space-y-5 mt-20'>
                        <h1 className='text-3xl md:text-6xl font-bold font-oswald text-primary'>UNDER CONSTRUCTION</h1>
                        <p className='text-[#222222] font-proxima font-bold text-xl'>
                            Sorry! This game is still in progress
                        </p>
                    </div>

                    <div className='pt-4'>
                        <Button
                            text="Return to Home"
                            handleClickButton={() => navigate('/')}
                        />
                    </div>

                    <div className='w-full max-w-2xl h-auto flex items-center justify-center rounded-xl text-gray-500 text-xl font-medium'>
                        <img src={workInProgressImage} alt="Work In Progress" />
                    </div>
                </div>
            </MainContainer>
            <Footer showPlane={false} />
        </Box>
    );
}
