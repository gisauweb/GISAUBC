/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useMediaQuery } from 'react-responsive';
import { Sentry } from 'libs/sentry';
import Profile from './components/Profile';
import Points from './components/Points';
import Activity from './components/Activity';
import Leaderboard from './components/Leaderboard';

export default function Dashboard({ account, token, setCurrentPage }) {
	const { user } = useAuth0();
	const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });
	const [loadingLeader, setLoadingLeader] = useState(true);
	const [leaderboard, setLeaderboard] = useState([]);

	useEffect(() => {
		let retryCount = 0;
		const maxRetries = 3; // Set a maximum number of retries to avoid infinite loops
		const retryDelay = 5000; // Retry delay in milliseconds (5 seconds)

		async function getLeaderboard() {
			try {
				const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/points/leaderboard`, {
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						Authorization: `Bearer ${token}`,
					},
				});
				const res = await response.json();
				setLeaderboard(res.result);
				console.log('res.result account.uid', res.result[account.uid]);
				if (res.result && Object.hasOwnProperty.call(res.result, account.uid)) {
					setLoadingLeader(false);
				} else if (retryCount < maxRetries) {
					retryCount += 1;
					setTimeout(getLeaderboard, retryDelay); // Retry after a delay
				} else {
					setLoadingLeader(false); // Stop trying after reaching the max retries
				}
			} catch (err) {
				Sentry.captureException(`Error when getting leaderboard: ${err}`);
				setLoadingLeader(false); // Also consider stopping if there's an error
			}
		}

		if (account && token && loadingLeader) {
			getLeaderboard();
		}
	}, [token, account, loadingLeader]); // Dependencies

	if (loadingLeader || !account || !user) {
		return <div>Loading...</div>;
	}

	console.log('loadingLeader: ', loadingLeader);

	return !isMobileView ? (
		<>
			<div className='flex-1 flex flex-col items-center h-screen justify-center'>
				<div className='flex h-1/3 w-4/5'>
					<Profile username={account.nickname} picture={user.picture} setCurrentPage={setCurrentPage} />
					<Points account={account} leaderboard={leaderboard} />
				</div>
				<div className='flex h-1/2 w-4/5'>
					<Activity account={account} />
				</div>
			</div>
			<Leaderboard uid={account.uid} leaderboard={leaderboard} />
		</>
	) : (
		<div className='flex flex-col my-16 h-fit items-center gap-3 relative'>
			<Profile username={account.nickname} picture={user.picture} />
			<Points account={account} leaderboard={leaderboard} />
			<Activity account={account} />
			<Leaderboard uid={account.uid} leaderboard={leaderboard} />
		</div>
	);
}
