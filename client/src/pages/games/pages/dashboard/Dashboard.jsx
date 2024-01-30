import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useMediaQuery } from 'react-responsive';

import Profile from './components/Profile';
import Points from './components/Points';
import Activity from './components/Activity';
import Leaderboard from './components/Leaderboard';

export default function Dashboard({ account, token }) {
	const { user } = useAuth0();
	const username = user.given_name || user.nickname;
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });
	const [loadingLeader, setLoadingLeader] = useState(true);

	const [leaderboard, setLeaderboard] = useState([]);

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
						setLoadingLeader(false);
					});
			} catch (err) {
				console.error(err.message);
			}
		}
		if (loadingLeader) {
			getLeaderboard();
		}
	}, [token, loadingLeader]);

	return loadingLeader ? (
		<div>Loading...</div>
	) : user && !isMobileView ? (
		<>
			<div className='flex-1 flex flex-col items-center h-screen justify-center'>
				<div className='flex h-1/3 w-4/5'>
					<Profile username={username} picture={user.picture} />
					<Points account={account} leaderboard={leaderboard} />
				</div>
				<div className='flex h-1/2 w-4/5'>
					<Activity account={account} />
				</div>
			</div>
			<Leaderboard username={username} leaderboard={leaderboard} />
		</>
	) : (
		user && (
			<div className='flex flex-col my-16 h-screen items-center gap-3 relative'>
				<Profile username={username} picture={user.picture} />
				<Points account={account} leaderboard={leaderboard} />
				<Activity account={account} />
				<Leaderboard username={username} leaderboard={leaderboard} />
			</div>
		)
	);
}
