import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useMediaQuery } from 'react-responsive';
import logo from 'assets/gisau-logo/gisau.svg';
import sidemenu from 'assets/games/sidebar.svg';
import { useSpring, animated } from 'react-spring';
import Sidebar from '../Sidebar';
import Profile from './components/Profile';
import Points from './components/Points';
import Activity from './components/Activity';
import Leaderboard from './components/Leaderboard';

export default function Dashboard() {
	const { user } = useAuth0();
	const username = user.given_name || user.nickname;
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });
	const [sidebarVisible, setSidebarVisible] = useState(false);

	const toggleSidebar = () => {
		setSidebarVisible(!sidebarVisible);
	};

	const sidebarAnimation = useSpring({ left: sidebarVisible ? '0%' : '-80%' });

	return (
		user && (
			<div
				className={`flex flex-col h-fit mb-10 items-center gap-3 relative ${isMobileView ? 'bg-overlay' : ''}`}
			>
				{isMobileView && sidebarVisible && (
					<div
						className='fixed top-0 left-0 w-full h-full bg-black opacity-60 blur z-50'
						onClick={toggleSidebar}
					/>
				)}
				<animated.div
					className='fixed z-50'
					style={{
						...sidebarAnimation,
						position: 'fixed',
						width: '80vw',
					}}
				>
					<Sidebar username={username} picture={user.picture} className='fixed' />
				</animated.div>
				<div className='py-3'>
					<div className='flex flex-row'>
						<div className='flex flex-row fixed top-5 z-40 left-5' onClick={toggleSidebar}>
							<img
								src={sidemenu}
								alt='sidemenu'
								style={{ maxWidth: '50px', height: 'auto', zIndex: '50', left: '0px' }}
							/>
						</div>
						<div className='flex flex-row fixed top-5 z-40 right-5'>
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
