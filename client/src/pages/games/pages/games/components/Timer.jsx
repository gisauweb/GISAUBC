import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, MenuItem, Select } from '@mui/material';

function Timer() {
	const [focusDuration, setFocusDuration] = useState(25);
	const [breakDuration, setBreakDuration] = useState(5);
	const [time, setTime] = useState(focusDuration * 60);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let timer;
		if (isRunning) {
			timer = setInterval(() => {
				setTime((prevTime) => {
					if (prevTime <= 0) {
						clearInterval(timer);
						return 0;
					}
					return prevTime - 1;
				});
			}, 1000);
		} else {
			clearInterval(timer);
		}

		return () => clearInterval(timer);
	}, [isRunning]);

	const startTimer = () => {
		setIsRunning(true);
	};

	const pauseTimer = () => {
		setIsRunning(false);
	};

	const resumeTimer = () => {
		setIsRunning(true);
	};

	const handleFocusChange = (event) => {
		setFocusDuration(event.target.value);
		setTime(event.target.value * 60);
	};

	const handleBreakChange = (event) => {
		setBreakDuration(event.target.value);
	};

	return (
		<Box className='flex flex-col py-1 px-5 w-full justify-center items-center'>
			<Typography style={{ fontWeight: 'bold' }}>Pomodoro Timer</Typography>
			<Typography>Let&apos;s Focus!</Typography>
			<Typography style={{ fontWeight: 'bold', fontSize: '30px' }} className='mt-8'>
				{`${Math.floor(time / 60)
					.toString()
					.padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`}
			</Typography>
			{isRunning ? (
				<Button variant='contained' onClick={pauseTimer} className='rounded-full mt-10'>
					Pause
				</Button>
			) : (
				<Button variant='contained' onClick={startTimer} className='rounded-full mt-10'>
					Start
				</Button>
			)}
			<div className='flex flex-row justify-center items-center gap-5 mt-5'>
				<Typography>Focus</Typography>
				<Select value={focusDuration} onChange={handleFocusChange} className=' bg-white h-8'>
					<MenuItem value={25}>25</MenuItem>
					<MenuItem value={30}>30</MenuItem>
					<MenuItem value={35}>35</MenuItem>
					<MenuItem value={40}>40</MenuItem>
					<MenuItem value={45}>45</MenuItem>
				</Select>
				<Typography>mins</Typography>
			</div>
			<div className='flex flex-row justify-center items-center gap-5 mt-5'>
				<Typography>Break</Typography>
				<Select value={breakDuration} onChange={handleBreakChange} className=' bg-white h-8'>
					<MenuItem value={5}>5</MenuItem>
					<MenuItem value={10}>10</MenuItem>
					<MenuItem value={15}>15</MenuItem>
				</Select>
				<Typography>mins</Typography>
			</div>
		</Box>
	);
}

export default Timer;
