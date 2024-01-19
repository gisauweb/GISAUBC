import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useMediaQuery } from 'react-responsive';
import logo from 'assets/gisau-logo/gisau.svg';
import sidemenu from 'assets/games/sidebar.svg';
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
		user && (
			<div className='flex flex-col h-fit mb-10 items-center gap-3 relative bg-bgPrimary'>
				<div className='fixed z-50 left-0'>
					<Sidebar username={username} picture={user.picture} className='fixed' />
				</div>
				<div className='py-3'>
					<div className='flex flex-row'>
						<div className='flex flex-row fixed top-5 z-40 left-5'>
							<img
								src={sidemenu}
								href='/home'
								alt='sidemenu'
								style={{ maxWidth: '50px', height: 'auto', zIndex: '50', left: '0px' }}
							/>
						</div>
						<div className='flex flex-row fixed top-5 z-50 right-5'>
							<img
								src={logo}
								href='/home'
								alt='GISAU logo red'
								style={{ maxWidth: '50px', height: 'auto', zIndex: '50' }}
							/>
						</div>
					</div>
					<div className='flex flex-col my-16 h-screen items-center gap-3 relative'>
						<Profile username={username} picture={user.picture} />
						<Points />
						<Activity />
						<Leaderboard username={username} />
					</div>
				</div>
			</div>
		)
	);
}
