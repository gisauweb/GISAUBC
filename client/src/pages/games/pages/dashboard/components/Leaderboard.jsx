/* eslint-disable object-curly-newline */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import crown from 'assets/games/crown.png';
import { useMediaQuery } from 'react-responsive';
import curls from 'assets/home-page/events/rantangan.svg';

const ANON_PICTURE = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';

export default function Leaderboard({ username, token }) {
	const [isBigger, setIsBigger] = useState(true);
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });
	const [leaderboard, setLeaderboard] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getLeaderboard() {
			try {
				fetch(`${process.env.REACT_APP_SERVER_URL}/points/leaderboard`, {
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						Authorization: `Bearer ${token}`,
					},
				})
					.then((res) => res.json())
					.then((res) => {
						setLeaderboard(res.result);
						setLoading(false);
					});
			} catch (err) {
				console.error(err.message);
			}
		}
		if (loading) {
			getLeaderboard();
		}
	}, [token, loading]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIsBigger((prevIsBigger) => !prevIsBigger);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return loading ? (
		<div>Loading...</div>
	) : (
		<Box className={`${isMobileView ? 'h-fit' : 'h-full'} rounded-2xl flex flex-col justify-center items-center`}>
			<Box
				style={{
					borderRadius: '30px',
					height: isMobileView ? 'fit' : '92vh',
					width: isMobileView ? '80vw' : '25vw',
					overflowY: 'hidden',
					overflowX: 'hidden',
					zIndex: 1,
				}}
				className={`${
					isMobileView ? 'bottom-20 mt-10' : 'mr-10'
				} bg-gamesBox flex flex-col items-center gap-5 py-3 `}
			>
				<Typography style={{ fontWeight: 'bold' }} className='mt-3'>
					Leaderboard
				</Typography>
				<Box className='flex flex-row w-auto h-auto'>
					{secondPlace(leaderboard[1], username)}
					{firstPlace(leaderboard[0], isBigger, username)}
					{thirdPlace(leaderboard[2], username)}
				</Box>
				<Box className='flex flex-col gap-3 mt-5 items-center overflow-y-auto w-full'>
					{leaderboard.slice(3).map((user, index) => (
						<Box
							key={user.firstName}
							className='bg-white rounded-xl p-2 flex items-center gap-5'
							style={{ width: '80%', maxWidth: '80%', flexShrink: 0 }}
						>
							<Typography className='text-gamesRed' style={{ fontWeight: 'bold' }}>
								{index + 4}
							</Typography>
							<img
								src={user.profilePicture || ANON_PICTURE}
								alt={`profile_pic_${index}`}
								style={{
									width: '40px',
									height: '40px',
									objectFit: 'cover',
									borderRadius: '50%',
								}}
							/>
							<div
								style={{
									width: '50%',
									overflow: 'auto',
									maxWidth: '50%',
								}}
							>
								<Typography
									style={{
										fontWeight: user.firstName.trim() === username.trim() ? 'bold' : 'normal',
									}}
								>
									{user.firstName.trim() === username.trim() ? 'Me' : user.firstName}
								</Typography>
							</div>
							<Typography style={{ fontWeight: 'bold' }}>{user.points}</Typography>
						</Box>
					))}
				</Box>
			</Box>
			{isMobileView && (
				<img
					src={curls}
					alt='curls'
					style={{
						width: '50px',
						height: '50px',
						objectFit: 'cover',
						marginLeft: '-75vw',
						marginTop: '-30px',
						transform: 'scaleX(-1)',
						zIndex: 10,
					}}
				/>
			)}
		</Box>
	);
}
function thirdPlace(user, username) {
	return (
		<Box className='flex flex-col mt-32 ml-[-2] items-center relative w-1/3'>
			<img
				src={user.profilePicture || ANON_PICTURE}
				alt='profile_pic'
				style={{
					width: '60px',
					height: 'auto',
					objectFit: 'cover',
					borderRadius: '50%',
				}}
			/>
			<Typography
				className='absolute top-1/3 right-5 bg-right-bottom text-gamesRed'
				style={{ fontWeight: 'bold', fontSize: 20, zIndex: 100 }}
			>
				3
			</Typography>
			<Typography
				style={{
					textAlign: 'center',
					fontWeight: user.firstName.trim() === username.trim() ? 'bold' : 'normal',
				}}
			>
				{user.firstName.trim() === username.trim() ? 'Me' : user.firstName}
			</Typography>
			<Typography style={{ fontWeight: 'bold' }}>{user.points}</Typography>
		</Box>
	);
}

function firstPlace(user, isBigger, username) {
	return (
		<Box className='flex flex-col mt-8 items-center relative'>
			<img
				src={crown}
				alt='crown'
				style={{
					width: isBigger ? '50px' : '45px',
					height: isBigger ? '40px' : '35px',
					objectFit: 'cover',
					position: 'absolute',
					top: -15,
					left: -15,
					transition: 'transform 0.5s, width 0.5s, height 0.5s',
				}}
			/>
			<img
				src={user.profilePicture || ANON_PICTURE}
				alt='profile_pic'
				style={{
					width: '80px',
					height: 'auto',
					objectFit: 'cover',
					borderRadius: '50%',
					zIndex: 10,
				}}
			/>
			<Typography
				className='absolute top-14 right-3 bg-right-bottom text-gamesRed'
				style={{ fontWeight: 'bold', fontSize: 20, zIndex: 100 }}
			>
				1
			</Typography>
			<Typography
				style={{
					textAlign: 'center',
					fontWeight: user.firstName.trim() === username.trim() ? 'bold' : 'normal',
				}}
			>
				{user.firstName.trim() === username.trim() ? 'Me' : user.firstName}
			</Typography>
			<Typography style={{ fontWeight: 'bold' }}>{user.points}</Typography>
		</Box>
	);
}

function secondPlace(user, username) {
	return (
		<Box className='flex flex-col mt-32 mr-[-2] items-center relative w-1/3'>
			<img
				src={user.profilePicture || ANON_PICTURE}
				alt='profile_pic'
				style={{
					width: '60px',
					height: 'auto',
					objectFit: 'cover',
					borderRadius: '50%',
				}}
			/>
			<Typography
				className='absolute top-1/3 right-5 bg-right-bottom text-gamesRed'
				style={{ fontWeight: 'bold', fontSize: 20, zIndex: 100 }}
			>
				2
			</Typography>
			<Typography
				style={{
					textAlign: 'center',
					fontWeight: user.firstName.trim() === username.trim() ? 'bold' : 'normal',
				}}
			>
				{user.firstName.trim() === username.trim() ? 'Me' : user.firstName}
			</Typography>
			<Typography style={{ fontWeight: 'bold' }}>{user.points}</Typography>
		</Box>
	);
}
