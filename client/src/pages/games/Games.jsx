import AuthBootstrap from 'auth/AuthBootstrap';
import supabase from 'libs/supabaseClient';
import { useEffect, useState } from 'react';
import ComingSoon from './pages/ComingSoon';
import Dashboard from './pages/dashboard/Dashboard';
import Pomodoro from './pages/pomodoro/Pomodoro';
import Settings from './pages/settings/Settings';
import Sidebar from './pages/Sidebar/Sidebar';

export default function Games() {
	const [email, setEmail] = useState(null);
	const [currentPage, setCurrentPage] = useState('Dashboard');

	useEffect(() => {
		(async () => {
			const { data } = await supabase.auth.getSession();
			setEmail(data.session?.user?.email ?? null);
		})();
	}, []);

	const login = () => {
		window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google`;
	};

	const logout = async () => {
		await supabase.auth.signOut();
		setEmail(null);
	};

	// const callApi = async () => {
	// 	const { data } = await supabase.auth.getSession();
	// 	const token = data.session?.access_token;

	// 	const res = await fetch('http://localhost:3000/auth/me', {
	// 		headers: { Authorization: `Bearer ${token}` },
	// 	});

	// 	console.log(await res.json());
	// };

	return (
		<div>
			<AuthBootstrap />
			<div>User: {email ?? 'NOT SIGNED IN'}</div>

			{!email && <button onClick={login}>Sign in with Google</button>}
			{email && (
				<>
					<button onClick={logout}>Log out</button> <br />
					<div className='flex h-screen bg-white'>
						<Sidebar username={email} currentPage={currentPage} setCurrentPage={setCurrentPage} />
						{currentPage === 'Dashboard' ? (
							<Dashboard />
						) : currentPage === 'Pomodoro' ? (
							<Pomodoro updateAccountState={() => updateAccountState()} />
						) : currentPage === 'Settings' ? (
							<Settings updateAccountState={() => updateAccountState()} />
						) : (
							<ComingSoon />
						)}
					</div>
				</>
			)}
		</div>
	);
}
