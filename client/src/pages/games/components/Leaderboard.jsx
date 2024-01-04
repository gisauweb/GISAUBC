import React from 'react';
import { Box, Typography } from '@mui/material';
import user from './user.json';
import crown from '../../../assets/games/crown.png';

export default function Leaderboard({ username }) {
	return (
		<div className='flex items-center justify-center h-screen'>
			<Box
				style={{
					borderRadius: '30px',
					height: '92vh',
					width: '25vw',
					overflowY: 'auto',
					overflowX: 'hidden',
				}}
				className='bg-gamesBox flex flex-col mr-10 items-center py-3 gap-5'
			>
				<Typography style={{ fontWeight: 'bold' }} className='mt-3'>
					Leaderboard
				</Typography>
				<Box className='flex flex-row w-10/12'>
					<Box className='flex flex-col mt-32 mr-[-2] items-center relative w-1/3'>
						<img
							src={user.leaderboard_image[1]}
							alt='profile_pic'
							style={{
								width: '60px',
								height: '60px',
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
					<Box className='flex flex-col mt-8 items-center relative w-1/3 h-auto'>
						<img
							src={crown}
							alt='crown'
							style={{
								width: '50px',
								height: '40px',
								objectFit: 'cover',
								position: 'absolute',
								top: -15,
								left: -15,
							}}
						/>
						<img
							src={user.leaderboard_image[0]}
							alt='profile_pic'
							style={{
								width: '80px',
								height: '80px',
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
								height: '60px',
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
				<Box className='flex flex-col gap-3 mt-5 items-center'>
					{user.leaderboard_image.slice(3).map((image, index) => (
						<Box
							// eslint-disable-next-line react/no-array-index-key
							key={index + 3}
							className='bg-white rounded-xl p-2 flex items-center gap-5'
							style={{ width: '100%', maxWidth: '100%', flexShrink: 0 }}
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
									overflow: 'auto',
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
		</div>
	);
}
