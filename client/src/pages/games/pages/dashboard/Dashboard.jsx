import Activity from './components/Activity';
// import Leaderboard from './components/Leaderboard';
import Points from './components/Points';
import Profile from './components/Profile';
import UpcomingEventCard from 'pages/games/UpcomingEventCard';

export default function Dashboard({ account, picture, token }) {
	return (
		<div className='w-full overflow-y-auto bg-[#FAF7F4] min-h-full'>
			<div className='mx-auto max-w-7xl px-4 sm:px-8 py-8'>
				<div className='flex flex-col gap-6'>
					<div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
						<Profile username={account.firstName} picture={picture} />
						<Points account={account} />
						<div className='bg-games-box w-full h-full rounded-2xl flex flex-col justify-center items-center gap-2 py-6 px-4'>
							<span className='text-4xl font-bold text-games-red'>0</span>
							<span className='text-sm text-gray-600 text-center'>Events Participated</span>
						</div>
					</div>
					<Activity account={account} />
					<UpcomingEventCard />
				</div>
			</div>
		</div>
	);
}
