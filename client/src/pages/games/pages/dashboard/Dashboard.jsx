import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from '../Sidebar';
import Profile from './components/Profile';
import Points from './components/Points';
import Activity from './components/Activity';
import Leaderboard from './components/Leaderboard';

export default function Dashboard() {
	const { user } = useAuth0();
	const username = user.given_name || user.nickname;

	return (
		user && (
			<div className='flex h-screen'>
				<Sidebar />
				<div className='flex-1 flex flex-col items-center h-screen justify-center'>
					<div className='flex h-1/3 w-4/5'>
						<Profile username={username} picture={user.picture} />
						<Points />
					</div>
					<div className='flex h-1/2 w-4/5'>
						<Activity />
					</div>
				</div>
				<Leaderboard username={username} />
			</div>
		)
	);
}
