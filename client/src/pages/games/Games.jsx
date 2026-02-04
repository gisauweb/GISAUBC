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
	const [profile, setProfile] = useState(null);
	const [avatarUrl, setAvatarUrl] = useState(null);
	const [token, setToken] = useState(null);

	const refreshAccountState = async () => {
		const { data } = await supabase.auth.getSession();
		const session = data.session;

		if (!session) {
			setEmail(null);
			setRegistered(null);
			setProfile(null);
			setToken(null);
			return;
		}

		setAvatarUrl(session.user.user_metadata?.avatar_url ?? session.user.user_metadata?.picture ?? null);

		const accessToken = session.access_token;
		setEmail(session.user.email);
		setToken(accessToken);

		const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/me`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});

		const body = await res.json();
		setProfile(body.profile ?? null);
		setRegistered(Boolean(body.registered));
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
		setProfile(null);
		setToken(null);
	};

	return (
		<div>
			<AuthBootstrap />
			{!email && <button onClick={login}>Sign in with Google</button>}

			{email && !registered && (
				<>
					<RegisterForm onSuccess={refreshAccountState} />
				</>
			)}

			{email && registered && (
				<>
					<div className='flex h-screen bg-white'>
						<Sidebar
							username={profile.firstName}
							picture={avatarUrl}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							handleLogout={logout}
						/>
						{currentPage === 'Dashboard' ? (
							<Dashboard account={profile} picture={avatarUrl} token={token} />
						) : currentPage === 'Pomodoro' ? (
							<Pomodoro updateAccountState={() => updateAccountState()} />
						) : currentPage === 'Settings' ? (
							<Settings
								account={profile}
								email={email}
								picture={avatarUrl}
								token={token}
								updateAccountState={() => updateAccountState()}
							/>
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
