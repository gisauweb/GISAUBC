import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useMediaQuery } from 'react-responsive';
import logo from 'assets/gisau-logo/gisau.svg';
import Sidebar from '../Sidebar';
import Profile from './components/Profile';
import Points from './components/Points';
import Activity from './components/Activity';
import Leaderboard from './components/Leaderboard';

export default function Dashboard() {
	const { user } = useAuth0();
	const username = user.given_name || user.nickname;
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

	return user && !isMobileView ? (
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
	) : (
		<div className='flex flex-col py-3 h-fit mb-10 items-center gap-3 relative bg-bgPrimary'>
			<div className='fixed right-5 top-5'>
				<img
					src={logo}
					href='/home'
					alt='GISAU logo red'
					style={{ maxWidth: '50px', height: 'auto', zIndex: '100' }}
				/>
			</div>
			<div className='flex flex-col my-16 h-screen items-center gap-3 relative'>
				<Profile username={username} picture={user.picture} />
				<Points />
				<Activity />
				<Leaderboard username={username} />
			</div>
		</div>
	);
}
