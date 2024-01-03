import React from 'react';
import Leaderboard from 'pages/games/Leaderboard';
import Sidebar from 'pages/games/Sidebar';
import Profile from 'pages/games/Profile';
import Points from 'pages/games/Points';
import Activity from 'pages/games/Activity';

export default function Dashboard() {
	return (
		<div className='flex h-screen'>
			<Sidebar />

			<div className='flex-1 flex flex-col items-center h-screen justify-center'>
				<div className='flex h-1/3 w-4/5'>
					<Profile />
					<Points />
				</div>
				<div className='flex h-1/2 w-4/5'>
					<Activity />
				</div>
			</div>

			<Leaderboard />
		</div>
	);
}
