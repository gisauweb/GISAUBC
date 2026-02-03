import AuthBootstrap from 'auth/AuthBootstrap';
import supabase from 'libs/supabaseClient';
import RegisterForm from 'pages/register/Register';
import { useEffect, useState } from 'react';
import ComingSoon from './pages/ComingSoon';
import Dashboard from './pages/dashboard/Dashboard';
import Pomodoro from './pages/pomodoro/Pomodoro';
import Settings from './pages/settings/Settings';
import Sidebar from './pages/Sidebar/Sidebar';

export default function Games() {
	const [email, setEmail] = useState(null);
	const [registered, setRegistered] = useState(null); // null = loading
	const [currentPage, setCurrentPage] = useState('Dashboard');

	const refreshAccountState = async () => {
		const { data } = await supabase.auth.getSession();
		const session = data.session;

		if (!session) {
			setEmail(null);
			setRegistered(null);
			return;
		}

		setEmail(session.user.email);

		const token = session.access_token;

		const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/me`, {
			headers: { Authorization: `Bearer ${token}` },
		});

		const body = await res.json();
		setRegistered(!!body.registered);
	};

	useEffect(() => {
		refreshAccountState();

		const { data: sub } = supabase.auth.onAuthStateChange(() => {
			refreshAccountState();
		});

		return () => sub.subscription.unsubscribe();
	}, []);

	const login = () => {
		window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google`;
	};

	const logout = async () => {
		await supabase.auth.signOut();
		setEmail(null);
		setRegistered(null);
	};

	return (
		<div>
			<AuthBootstrap />
			<div>User: {email ?? 'NOT SIGNED IN'}</div>

			{!email && <button onClick={login}>Sign in with Google</button>}

			{email && !registered && (
				<>
					<button onClick={logout}>Log out</button>
					<RegisterForm onSuccess={refreshAccountState} />
				</>
			)}

			{email && registered && (
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
			{email && registered === null && <div>Checking account…</div>}
		</div>
	);
}
