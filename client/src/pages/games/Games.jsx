import { isMembershipOpen } from 'libs/membershipConfig';
import supabase from 'libs/supabaseClient';
import MemberForm from 'pages/members/MemberForm';
import MembershipClosed from 'pages/members/MembershipClosed';
import { useEffect, useRef, useState } from 'react';
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
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const isRefreshing = useRef(false);   // guard: only one fetch at a time
	const profileLoaded = useRef(false);  // true once profile is successfully fetched

	const refreshAccountState = async (sessionOverride) => {
		// If a fetch is already in-flight, bail out immediately
		if (isRefreshing.current) return;
		isRefreshing.current = true;

		try {
			// Prefer a session passed from onAuthStateChange — calling getSession()
			// inside that callback deadlocks supabase-js (it holds an auth lock).
			const session =
				sessionOverride !== undefined
					? sessionOverride
					: (await supabase.auth.getSession()).data.session;

			if (!session) {
				setEmail(null);
				setRegistered(null);
				setProfile(null);
				setToken(null);
				return;
			}

			// getSession only reads local storage. A deleted Auth user can still
			// look signed-in until the JWT expires, which skips the sign-in screen.
			const { data: userData, error: userError } = await supabase.auth.getUser();
			if (userError || !userData?.user) {
				await supabase.auth.signOut();
				profileLoaded.current = false;
				setEmail(null);
				setRegistered(null);
				setProfile(null);
				setToken(null);
				return;
			}

			setAvatarUrl(session.user.user_metadata?.avatar_url ?? session.user.user_metadata?.picture ?? null);

			const accessToken = session.access_token;
			setEmail(userData.user.email ?? session.user.email);
			setToken(accessToken);

			const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/me`, {
				headers: { Authorization: `Bearer ${accessToken}` },
			});

			if (res.status === 401 || res.status === 403) {
				await supabase.auth.signOut();
				profileLoaded.current = false;
				setEmail(null);
				setRegistered(null);
				setProfile(null);
				setToken(null);
				return;
			}

			const body = await res.json();
			setProfile(body.profile ?? null);
			setRegistered(Boolean(body.registered));
			profileLoaded.current = true;
		} catch {
			// Fetch failed — drop back to signed-out state so the user
			// sees the sign-in screen instead of spinning forever
			setEmail(null);
			setRegistered(null);
			setProfile(null);
			setToken(null);
			profileLoaded.current = false;
		} finally {
			// Always release the lock, even if the fetch threw
			isRefreshing.current = false;
		}
	};

	useEffect(() => {
		refreshAccountState();

		const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
			if (event === 'SIGNED_OUT') {
				profileLoaded.current = false;
				setEmail(null);
				setRegistered(null);
				setProfile(null);
				setToken(null);
				return;
			}

			if (event === 'SIGNED_IN' && !profileLoaded.current && session) {
				// Defer so we are not inside the supabase-js auth lock.
				// TOKEN_REFRESHED is ignored — it fires on tab focus and only rotates the JWT.
				setTimeout(() => refreshAccountState(session), 0);
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
		profileLoaded.current = false;
		setEmail(null);
		setRegistered(null);
		setProfile(null);
		setToken(null);
	};

	return (
		<div>
			{!email && <SignIn login={login} />}

			{email && registered === null && (
				<div className='h-screen flex items-center justify-center'>
					<div className='text-center'>
						<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4'></div>
						<p className='text-gray-600 font-medium'>Verifying account...</p>
					</div>
				</div>
			)}

			{email && registered === false && !isMembershipOpen && (
				<MembershipClosed showSignOut onSignOut={logout} />
			)}

			{email && registered === false && isMembershipOpen && (
				<MemberForm
					onRegistered={(profile) => {
						setProfile(profile);
						setRegistered(true);
					}}
				/>
			)}

			{email && registered && (
				<div className='relative flex h-screen overflow-hidden bg-white'>
					{/* Mobile backdrop */}
					{sidebarOpen && (
						<div
							className='fixed inset-0 z-20 bg-black/40 lg:hidden'
							onClick={() => setSidebarOpen(false)}
						/>
					)}

					{/* Sidebar — overlay on mobile, static on desktop */}
					<div
						className={`fixed inset-y-0 left-0 z-30 transition-transform duration-300 ease-in-out lg:static lg:z-auto lg:translate-x-0 lg:transition-none ${
							sidebarOpen ? 'translate-x-0' : '-translate-x-full'
						}`}
					>
						<Sidebar
							username={profile.firstName}
							picture={avatarUrl}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							handleLogout={logout}
							onCloseSidebar={setSidebarOpen}
						/>
					</div>

					{/* Main content */}
					<div className='flex flex-1 flex-col min-w-0 overflow-hidden'>
						{/* Mobile top bar */}
						<div className='flex items-center justify-between px-4 h-14 border-b border-gray-200 bg-white shrink-0 lg:hidden'>
							<button
								onClick={() => setSidebarOpen(true)}
								className='p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100'
								aria-label='Open menu'
							>
								<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
								</svg>
							</button>
							<a href='/'><img src='/gisau-logo/gisau.svg' alt='GISAU' className='h-8 w-auto' /></a>
							<div className='w-10' />
						</div>

						{/* Page content */}
						<div className='flex-1 overflow-y-auto'>
							{currentPage === 'Dashboard' ? (
								<Dashboard account={profile} picture={avatarUrl} token={token} />
							) : currentPage === 'Pomodoro' ? (
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
					</div>
				</div>
			)}
		</div>
	);
}
