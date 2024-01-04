import React from 'react';
import { Box, Typography } from '@mui/material';
import user from './user.json';

export default function Leaderboard() {
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
				<Box className='flex flex-row'>
					<Box className='flex flex-col mt-32 mr-[-2] items-center'>
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
						<Typography>{user.leaderboard_name[1]}</Typography>
						<Typography style={{ fontWeight: 'bold' }}>{user.leaderboard_points[1]}</Typography>
					</Box>
					<Box className='flex flex-col mt-8 items-center'>
						<img
							src={user.leaderboard_image[0]}
							alt='profile_pic'
							style={{
								width: '80px',
								height: '80px',
								objectFit: 'cover',
								borderRadius: '50%',
							}}
						/>
						<div
							style={{
								overflow: 'auto',
								maxWidth: '100%',
							}}
						>
							<Typography>{user.leaderboard_name[0]}</Typography>
						</div>
						<Typography style={{ fontWeight: 'bold' }}>{user.leaderboard_points[0]}</Typography>
					</Box>
					<Box className='flex flex-col mt-32 ml-[-2] items-center'>
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
						<Typography>{user.leaderboard_name[2]}</Typography>
						<Typography style={{ fontWeight: 'bold' }}>{user.leaderboard_points[2]}</Typography>
					</Box>
				</Box>
				<Box className='flex flex-col gap-3 mt-5 items-center'>
					{user.leaderboard_image.slice(3).map((image, index) => (
						<Box
							key={index + 3}
							className='bg-white rounded-xl p-2 flex items-center gap-5 w-10/12'
							style={{ maxWidth: '80%' }}
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
								<Typography>{user.leaderboard_name[index + 3]}</Typography>
							</div>
							<Typography style={{ fontWeight: 'bold' }}>{user.leaderboard_points[index + 3]}</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</div>
	);
}
