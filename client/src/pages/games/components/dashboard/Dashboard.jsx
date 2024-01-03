import React from 'react';
import Leaderboard from 'pages/games/components/Leaderboard';
import Profile from 'pages/games/components/Profile';
import Points from 'pages/games/components/Points';
import Activity from 'pages/games/components/Activity';
import Sidebar from './components/Sidebar';

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
