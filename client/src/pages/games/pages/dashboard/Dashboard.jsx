import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useMediaQuery } from 'react-responsive';
// import { Sentry } from 'libs/sentry';
import Profile from './components/Profile';
import Points from './components/Points';
import Activity from './components/Activity';
import UpcomingEventCard from 'pages/games/UpcomingEventCard';

import Leaderboard from './components/Leaderboard';

export default function Dashboard({ account, picture, token }) {
	const { user } = useAuth0();
	const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });
	const [loadingLeader, setLoadingLeader] = useState(true);
	const [leaderboard, setLeaderboard] = useState([]);

	// useEffect(() => {
	// 	async function getLeaderboard() {
	// 		try {
	// 			fetch(`${process.env.REACT_APP_SERVER_URL}/points/leaderboard`, {
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 					Accept: 'application/json',
	// 					Authorization: `Bearer ${token}`,
	// 				},
	// 			})
	// 				.then((res) => res.json())
	// 				.then((res) => {
	// 					setLeaderboard(res.result);
	// 					setLoadingLeader(false);
	// 				});
	// 		} catch (err) {
	// 			Sentry.captureException('Error when getting leaderboard: ', err);
	// 		}
	// 	}
	// 	if (loadingLeader) {
	// 		getLeaderboard();
	// 	}
	// }, [token, loadingLeader]);

	// if (loadingLeader || !account || !user) {
	// 	return <div>Loading...</div>;
	// }
	return !isMobileView ? (
		<div className='h-screen w-full overflow-y-auto'>
			<div className='w-11/12 mx-auto pt-10'>
				{/* SECTION 1: full viewport height */}
				<div className='min-h-screen flex gap-10 items-start'>
					<div className='flex-1 flex flex-col gap-6'>
						<div className='flex gap-6 items-stretch'>
							<div className='flex-1'>
								<Profile username={account.firstName} picture={picture} />
							</div>
							<div className='flex-1'>
								<Points account={account} leaderboard={leaderboard} />
							</div>
						</div>

						<Activity account={account} />
					</div>

					{/* RIGHT column (NOT fixed) */}
					<div className='w-[25vw] min-w-[320px]'>
						<Leaderboard uid={account.id} leaderboard={leaderboard} />
					</div>
				</div>

				{/* SECTION 2: below the fold (scroll down to see) */}
				<div className='pb-20'>
					<UpcomingEventCard />
				</div>
			</div>
		</div>
	) : (
		<div className='flex flex-col my-16 h-fit items-center gap-3 relative'>
			<Profile username={account.firstName} picture={picture} />
			{/* <Points account={account} leaderboard={leaderboard} /> */}
			{/* <Activity account={account} /> */}
			{/* <Leaderboard uid={account.uid} leaderboard={leaderboard} /> */}
		</div>
	);
}
