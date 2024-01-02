import Leaderboard from 'pages/games/dashboard/components/Leaderboard';
import Sidebar from 'pages/games/dashboard/components/Sidebar';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
	const location = useLocation();
	const { state } = queryString.parse(location.search);
	const [challengesData, setChallengesData] = useState('none');

	useEffect(() => {
		if (state) {
			fetch(`http://127.0.0.1:5001/gisaubc-dev/us-central1/api/challenges?code=${state}`)
				.then((res) => res.json())
				.then((res) => setChallengesData(JSON.stringify(res)));
		}
	}, [state]);

	return (
		<div className='flex flex-col'>
			<Sidebar />
			<Leaderboard />
			<div>{challengesData}</div>
		</div>
	);
}
