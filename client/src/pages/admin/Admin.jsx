import supabase from 'libs/supabaseClient';
import { useEffect, useRef, useState } from 'react';
import AdminDashboard from './AdminDashboard';
import AdminLayout from './AdminLayout';
import AdminMembers from './AdminMembers';
import AdminSignIn from './AdminSignIn';

// Placeholder for sections not yet built
function ComingSoon({ page }) {
	return (
		<div className='p-8 flex flex-col items-center justify-center h-full text-center'>
			<div className='text-5xl mb-4'>🚧</div>
			<h2 className='text-xl font-bold text-gray-800 mb-2'>{page}</h2>
			<p className='text-gray-500 text-sm'>This section is coming soon.</p>
		</div>
	);
}

export default function AdminApp() {
	const [email, setEmail] = useState(null);
	const [profile, setProfile] = useState(null);
	const [loading, setLoading] = useState(true); // true while checking session
	const [isAdmin, setIsAdmin] = useState(false);
	const [token, setToken] = useState(null);
	const [currentPage, setCurrentPage] = useState('Dashboard');
	const isRefreshing = useRef(false);   // guard: only one fetch at a time
	const profileLoaded = useRef(false);  // true once profile is successfully fetched

	const refreshAccountState = async () => {
		// If a fetch is already in-flight, bail out immediately
		if (isRefreshing.current) return;
		isRefreshing.current = true;

		setLoading(true);
		try {
			const { data } = await supabase.auth.getSession();
			const session = data.session;

			if (!session) {
				setEmail(null);
				setProfile(null);
				setIsAdmin(false);
				setToken(null);
				return;
			}

			setEmail(session.user.email);
			setToken(session.access_token);

			const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/me`, {
				headers: { Authorization: `Bearer ${session.access_token}` },
			});
			const body = await res.json();
			const p = body.profile ?? null;
			setProfile(p);
			setIsAdmin(p?.role === 'admin');
			profileLoaded.current = true;
		} catch {
			// Fetch failed — reset to signed-out state
			setEmail(null);
			setProfile(null);
			setIsAdmin(false);
			setToken(null);
			profileLoaded.current = false;
		} finally {
			setLoading(false);
			isRefreshing.current = false;
		}
	};

	useEffect(() => {
		refreshAccountState();

		const { data: sub } = supabase.auth.onAuthStateChange((event) => {
			if (event === 'SIGNED_IN' && !profileLoaded.current) {
				// Only re-fetch on a real new sign-in and we don't have a profile yet.
				// TOKEN_REFRESHED is intentionally ignored — it fires on tab focus
				// and doesn't change the profile, only rotates the JWT.
				refreshAccountState();
			}
		});

		return () => sub.subscription.unsubscribe();
	}, []);

	const login = async () => {
		await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: { redirectTo: `${window.location.origin}/auth/admin-callback` },
		});
	};

	const logout = async () => {
		await supabase.auth.signOut();
		setEmail(null);
		setProfile(null);
		setIsAdmin(false);
		setToken(null);
		setCurrentPage('Dashboard');
	};

	// ── Loading spinner ──────────────────────────────────────────────────────
	if (loading) {
		return (
			<div className='h-screen flex items-center justify-center bg-gray-100'>
				<div className='text-center'>
					<div className='animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-3' />
					<p className='text-gray-500 text-sm'>Checking access...</p>
				</div>
			</div>
		);
	}

	// ── Not signed in ────────────────────────────────────────────────────────
	if (!email) return <AdminSignIn login={login} />;

	// ── Signed in but not admin ──────────────────────────────────────────────
	if (!isAdmin) {
		return (
			<div className='h-screen flex items-center justify-center bg-gray-100'>
				<div className='bg-white p-10 rounded-xl shadow-md text-center max-w-sm mx-4 border border-gray-200'>
					<div className='text-4xl mb-4'>🚫</div>
					<h2 className='text-xl font-bold text-gray-800 mb-2'>Access Denied</h2>
					<p className='text-gray-500 text-sm mb-6'>
						Your account (<span className='font-medium'>{email}</span>) does not have admin privileges.
					</p>
					<button
						onClick={logout}
						className='text-sm text-red-500 hover:text-red-700 font-medium'
					>
						Sign out
					</button>
				</div>
			</div>
		);
	}

	// ── Admin ────────────────────────────────────────────────────────────────
	const renderPage = () => {
		switch (currentPage) {
			case 'Dashboard':
				return <AdminDashboard profile={profile} setCurrentPage={setCurrentPage} />;
			case 'Members':
				return <AdminMembers token={token} />;
			case 'Cash Payments':
			case 'Events':
			case 'Registrations':
			case 'Existing Members':
			case 'Merch':
				return <ComingSoon page={currentPage} />;
			default:
				return <AdminDashboard profile={profile} setCurrentPage={setCurrentPage} />;
		}
	};

	return (
		<AdminLayout
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
			profile={profile}
			onLogout={logout}
		>
			{renderPage()}
		</AdminLayout>
	);
}
