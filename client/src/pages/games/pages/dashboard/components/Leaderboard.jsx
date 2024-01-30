import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import user from 'pages/games/user.json';
import crown from 'assets/games/crown.png';
import { useMediaQuery } from 'react-responsive';
import curls from 'assets/home-page/events/rantangan.svg';

export default function Leaderboard({ username }) {
	const [isBigger, setIsBigger] = useState(true);
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIsBigger((prevIsBigger) => !prevIsBigger);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<Box className={`${isMobileView ? 'h-fit' : 'h-full'} rounded-2xl flex flex-col justify-center items-center`}>
			<Box
				style={{
					borderRadius: '30px',
					height: isMobileView ? 'fit' : '92vh',
					width: isMobileView ? '80vw' : '25vw',
					zIndex: 1,
				}}
				className={`${
					isMobileView ? 'bottom-10 mt-10' : 'mr-10'
				} bg-gamesBox flex flex-col items-center gap-5 py-3 `}
			>
				<Typography style={{ fontWeight: 'bold' }} className='mt-3'>
					Leaderboard
				</Typography>
				<Box className='flex flex-row w-auto h-auto'>
					<Box className='flex flex-col mt-32 mr-[-2] items-center relative w-1/3'>
						<img
							src={user.leaderboard_image[1]}
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
								fontWeight: user.leaderboard_name[1].trim() === username.trim() ? 'bold' : 'normal',
							}}
						>
							{user.leaderboard_name[1].trim() === username.trim() ? 'Me' : user.leaderboard_name[1]}
						</Typography>
						<Typography style={{ fontWeight: 'bold' }}>{user.leaderboard_points[1]}</Typography>
					</Box>
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
							src={user.leaderboard_image[0]}
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
								fontWeight: user.leaderboard_name[0].trim() === username.trim() ? 'bold' : 'normal',
							}}
						>
							{user.leaderboard_name[0].trim() === username.trim() ? 'Me' : user.leaderboard_name[0]}
						</Typography>
						<Typography style={{ fontWeight: 'bold' }}>{user.leaderboard_points[0]}</Typography>
					</Box>
					<Box className='flex flex-col mt-32 ml-[-2] items-center relative w-1/3'>
						<img
							src={user.leaderboard_image[2]}
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
								fontWeight: user.leaderboard_name[2].trim() === username.trim() ? 'bold' : 'normal',
							}}
						>
							{user.leaderboard_name[2].trim() === username.trim() ? 'Me' : user.leaderboard_name[2]}
						</Typography>
						<Typography style={{ fontWeight: 'bold' }}>{user.leaderboard_points[2]}</Typography>
					</Box>
				</Box>
				<Box
					className={`${
						isMobileView ? 'overflow-y-hidden' : 'overflow-y-auto'
					} flex flex-col gap-3 mt-5 items-center w-full`}
				>
					{user.leaderboard_image.slice(3).map((image, index) => (
						<Box
							// eslint-disable-next-line react/no-array-index-key
							key={index + 3}
							className='bg-white rounded-xl p-2 flex items-center gap-5 px-4'
							style={{ width: '80%', maxWidth: '80%', flexShrink: 0 }}
						>
							<Typography className='text-gamesRed' style={{ fontWeight: 'bold' }}>
								{index + 4}
							</Typography>
							<img
								src={user.leaderboard_image[index]}
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
									maxWidth: '50%',
								}}
							>
								<Typography
									style={{
										fontWeight:
											user.leaderboard_name[index + 3].trim() === username.trim()
												? 'bold'
												: 'normal',
									}}
								>
									{user.leaderboard_name[index + 3].trim() === username.trim()
										? 'Me'
										: user.leaderboard_name[index + 3]}
								</Typography>
							</div>
							<Typography style={{ fontWeight: 'bold' }}>{user.leaderboard_points[index + 3]}</Typography>
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
