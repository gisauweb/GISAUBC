import React from 'react';
import { Box, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import Points from './components/Points';
import Timer from './components/Timer';
import Todo from './components/Todo';
import Clipboard from '../../../../assets/games/clipboard.svg';

export default function Pomodoro({ account, token, updateAccountState }) {
	const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });

	return !isMobileView ? (
		<div className='flex xl:w-[80vw] h-full gap-7 px-16 justify-center items-center'>
			<div className='w-[55%] h-5/6 rounded-2xl pl-2 flex flex-col justify-center items-center gap-5'>
				<Box className='bg-gamesBox w-full h-2/3 rounded-2xl flex justify-center items-center'>
					<Timer account={account} token={token} updateAccountState={updateAccountState} />
				</Box>
				<Box className='bg-gamesBox w-full h-1/3 rounded-2xl flex top-3'>
					<Points account={account} />
				</Box>
			</div>
			<Box className='w-1/2 h-5/6 rounded-2xl flex justify-center relative'>
				<img
					src={Clipboard}
					alt='Clipboard'
					className='w-auto h-full rounded-2xl z-1 absolute top-0 self-center justify-center'
				/>
				<Todo />
			</Box>
		</div>
	) : (
		<div className='flex flex-col w-full h-full items-center'>
			<Typography style={{ fontWeight: 'bold' }}> Pomodoro Timer </Typography>
			<Points account={account} />
			<Timer account={account} token={token} updateAccountState={updateAccountState} />
			<Box className='w-full h-full py-5 rounded-2xl flex justify-center relative'>
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
