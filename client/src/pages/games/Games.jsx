import supabase from 'libs/supabaseClient';
import MemberForm from 'pages/members/MemberForm';
import { useEffect, useState } from 'react';
import ComingSoon from './pages/ComingSoon';
import Dashboard from './pages/dashboard/Dashboard';
import Settings from './pages/settings/Settings';
import Sidebar from './pages/Sidebar/Sidebar';
import SignIn from './SignIn';

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

		const { data: sub } = supabase.auth.onAuthStateChange((event) => {
			if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
				refreshAccountState();
			}
		});

		return () => sub.subscription.unsubscribe();
	}, []);

	const login = async () => {
		await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `${window.location.origin}/auth/callback`,
			},
		});
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
			{/* <AuthBootstrap /> */}
			{!email && <SignIn login={login} />}

			{email && registered === null && (
				<div className='h-screen flex items-center justify-center'>
					<div className='text-center'>
						<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4'></div>
						<p className='text-gray-600 font-medium'>Verifying membership...</p>
					</div>
				</div>
			)}

			{email && registered === false && <MemberForm />}

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
							// <Pomodoro updateAccountState={() => refreshAccountState()} />
							<ComingSoon />
						) : currentPage === 'Settings' ? (
							<Settings
								account={profile}
								email={email}
								picture={avatarUrl}
								token={token}
								updateAccountState={() => refreshAccountState()}
							/>
						) : (
							<ComingSoon />
						)}
					</div>
				</>
			)}
		</div>
	);
}
