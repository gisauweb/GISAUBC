import { Leaderboard } from 'pages/games/Leaderboard';
import Sidebar from 'pages/games/Sidebar';

export default function Dashboard() {
	return (
		<div className='flex flex-col'>
			<Sidebar />
			<Leaderboard />
		</div>
	);
}
