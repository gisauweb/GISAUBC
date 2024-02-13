import { Box } from '@mui/material';
import React from 'react';
import Points from './components/Points';
import Timer from './components/Timer';
import Todo from './components/Todo';
import Clipboard from '../../../../assets/games/clipboard.svg';

export default function Pomodoro() {
	// const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });

	return (
		<div className='flex flex-row w-full h-full gap-5 px-5 justify-center items-center overflow-hidden'>
			<div className='w-6/12 h-5/6 rounded-2xl flex flex-col justify-center items-center mr-2 gap-5'>
				<Box className='bg-gamesBox w-10/12 h-2/3 rounded-2xl flex justify-center items-center mr-2'>
					<Timer />
				</Box>
				<Box className='bg-gamesBox w-10/12 h-1/3 rounded-2xl flex top-3 mr-2'>
					<Points />
				</Box>
			</div>
			<Box className='w-5/12 h-full py-5 rounded-2xl flex justify-center mr-2 relative'>
				<img
					src={Clipboard}
					alt='Clipboard'
					className='w-auto h-full py-5 rounded-2xl z-1 absolute top-0 self-center justify-center'
				/>
				<Todo />
			</Box>
		</div>
	);
}
