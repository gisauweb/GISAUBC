import Leaderboard from 'pages/games/dashboard/components/Leaderboard';
import Sidebar from 'pages/games/dashboard/components/Sidebar';

export default function Dashboard() {
	return (
		<div className='flex flex-col'>
			<Sidebar />
			<Leaderboard />
		</div>
	);
}
