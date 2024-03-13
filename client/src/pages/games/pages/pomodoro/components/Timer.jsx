import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, MenuItem, Select, Dialog, DialogContent } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import HistoryIcon from '@mui/icons-material/History';

const TimerState = {
	STOP: 0,
	FOCUS: 1,
	BREAK: 2,
};

function Timer({ account, token, updateAccountState }) {
	const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });
	const [focusDuration, setFocusDuration] = useState(25);
	const [breakDuration, setBreakDuration] = useState(5);
	const [time, setTime] = useState(focusDuration * 60);
	const [timerState, setTimerState] = useState(TimerState.STOP);
	const [isRunning, setIsRunning] = useState(false);
	const [isChangingFocus, setIsChangingFocus] = useState(false);
	const [chosenTime, setChosenTime] = useState('');

	useEffect(() => {
		async function updatePoints(points) {
			fetch(`${process.env.REACT_APP_SERVER_URL}/points/add`, {
				method: 'PUT',
				headers: { Authorization: `Bearer ${token}` },
				body: JSON.stringify({ uid: account.uid, points }),
			});
			updateAccountState();
		}

		let timer;
		if (isRunning) {
			timer = setInterval(() => {
				setTime((prevTime) => {
					if (prevTime <= 0) {
						clearInterval(timer);
						setIsRunning(false);
						if (timerState === TimerState.FOCUS) {
							updatePoints(focusDuration);
							setTime(breakDuration * 60);
							setTimerState(TimerState.BREAK);
							return breakDuration * 60;
						}
						setTime(focusDuration * 60);
						setTimerState(TimerState.FOCUS);
						return focusDuration * 60;
					}
					return prevTime - 1;
				});
			}, 1000);
		} else {
			clearInterval(timer);
		}

		return () => clearInterval(timer);
	}, [timerState, account.uid, token, focusDuration, breakDuration, isRunning, updateAccountState]);

	const handleButtonChange = () => {
		setIsRunning(!isRunning);
		if (timerState === TimerState.STOP) {
			setTimerState(TimerState.FOCUS);
		}
	};

	const handleFocusChange = (event) => {
		if (time !== focusDuration * 60) {
			setIsChangingFocus(true);
			setChosenTime(event.target.value);
		} else {
			setFocusDuration(event.target.value);
			setTime(event.target.value * 60);
		}
	};

	const handleFocusChangeConfirm = (selectedValue) => {
		setIsChangingFocus(false);
		setFocusDuration(selectedValue);
		setTime(selectedValue * 60);
		setIsRunning(false);
	};

	const handleFocusChangeCancel = () => {
		setIsChangingFocus(false);
	};

	const handleBreakChange = (event) => {
		setBreakDuration(event.target.value);
	};

	return (
		<Box className='flex flex-col px-5 w-full h-full justify-center items-center gap-1'>
			{!isMobileView && (
				<Typography style={{ fontWeight: 'bold', fontSize: '20px' }}> Pomodoro Timer </Typography>
			)}
			<Typography style={{ fontWeight: 'bold', fontSize: '12px' }}>
				{timerState === TimerState.BREAK ? 'Time to take a break!' : "Let's Focus!"}
			</Typography>
			<Typography style={{ fontWeight: 'bold', fontSize: '50px' }} className='mt-8'>
				{`${Math.floor(time / 60)
					.toString()
					.padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`}
			</Typography>
			<Button
				style={{
					backgroundColor: '#727D5B',
					borderRadius: '40px',
					fontSize: '12px',
					textTransform: 'none',
					fontStyle: 'normal',
				}}
				variant='contained'
				onClick={handleButtonChange}
			>
				{isRunning ? 'Pause' : time !== focusDuration * 60 ? 'Resume' : 'Start'}
			</Button>
			<Box className='flex flex-col'>
				<div className='flex flex-row justify-start items-center gap-1 mt-5'>
					<Typography style={{ fontWeight: 'bold', fontSize: '12px', marginRight: '10px' }}>Focus</Typography>
					<Select
						value={focusDuration}
						onChange={handleFocusChange}
						className=' bg-white h-8'
						style={{ fontSize: '12px', marginLeft: '5px' }}
					>
						<MenuItem value={25}>25</MenuItem>
						<MenuItem value={30}>30</MenuItem>
						<MenuItem value={35}>35</MenuItem>
						<MenuItem value={40}>40</MenuItem>
						<MenuItem value={45}>45</MenuItem>
					</Select>
					<Typography style={{ fontWeight: 'bold', fontSize: '12px' }}>mins</Typography>
				</div>
				<div className='flex flex-row justify-center items-center gap-1 mt-2'>
					<Typography style={{ fontWeight: 'bold', fontSize: '12px', marginRight: '10px' }}>Break</Typography>
					<Select
						value={breakDuration}
						onChange={handleBreakChange}
						className=' bg-white h-8'
						style={{ fontSize: '12px', marginLeft: '5px' }}
					>
						<MenuItem value={5}>05</MenuItem>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={15}>15</MenuItem>
					</Select>
					<Typography style={{ fontWeight: 'bold', fontSize: '12px' }}>mins</Typography>
				</div>
			</Box>
			<Dialog
				open={isChangingFocus}
				onClose={handleFocusChangeCancel}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
				className='flex flex-col py-3'
				PaperProps={{ sx: { borderRadius: '10px' } }}
			>
				<HistoryIcon
					className='self-center'
					style={{ color: '#D9D9D9', width: '100px', height: '100px', marginTop: '3px', marginBottom: '3px' }}
				/>
				<Typography style={{ fontWeight: 'bold' }} className='self-center mt-10'>
					Reset Timer?
				</Typography>
				<DialogContent>
					<Typography className='text-center' style={{ marginTop: '-10px' }}>
						Changing the focus duration
						<br />
						will reset the timer.
					</Typography>
					<Box className='flex flex-row items-center justify-center mt-5 gap-5'>
						<Button
							style={{
								backgroundColor: '#732727',
								borderRadius: '40px',
								fontSize: '12px',
								textTransform: 'none',
								fontStyle: 'normal',
								width: '40px',
								height: '30px',
							}}
							variant='contained'
							onClick={handleFocusChangeCancel}
						>
							Cancel
						</Button>
						<Button
							style={{
								backgroundColor: '#727D5B',
								borderRadius: '40px',
								fontSize: '12px',
								textTransform: 'none',
								fontStyle: 'normal',
								width: '40px',
								height: '30px',
							}}
							variant='contained'
							onClick={() => handleFocusChangeConfirm(chosenTime)}
						>
							Reset
						</Button>
					</Box>
				</DialogContent>
			</Dialog>
		</Box>
	);
}

export default Timer;
