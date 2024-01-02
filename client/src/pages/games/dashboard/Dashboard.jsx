import { useAuth0 } from '@auth0/auth0-react';
// import Leaderboard from 'pages/games/dashboard/components/Leaderboard';
import Sidebar from 'pages/games/dashboard/components/Sidebar';
import { useEffect, useState } from 'react';

export default function Dashboard({ token }) {
	const [challengesData, setChallengesData] = useState('none');
	const { user } = useAuth0();

	useEffect(() => {
		if (token) {
			fetch('http://127.0.0.1:5001/gisaubc-dev/us-central1/api/auth/challenges', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
				.then((res) => res.json())
				.then((res) => setChallengesData(JSON.stringify(res)));
		}
	}, [token]);

	return (
		<div className='flex'>
			<Sidebar />
			{/* <Leaderboard /> */}
			<div className='flex flex-col space-y-2'>
				<p>{`Hi ${user.name}`}</p>
				<p>
					This is challenges data:
					{challengesData}
				</p>
			</div>
		</div>
	);
}
