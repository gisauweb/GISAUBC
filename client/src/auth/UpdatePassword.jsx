import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from 'libs/supabaseClient';

const RECOVERY_FLAG = 'gisau-password-recovery';

const inputClass =
	'w-full p-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary outline-none text-left text-sm text-gray-800';
const labelClass = 'block text-sm font-medium text-gray-700 mb-1 text-left';

function hasEmailProvider(user) {
	const providers = user?.app_metadata?.providers;
	if (Array.isArray(providers) && providers.length > 0) return providers.includes('email');
	const identities = user?.identities;
	if (Array.isArray(identities) && identities.length > 0) {
		return identities.some((identity) => identity.provider === 'email');
	}
	// Session didn't include provider info — don't block a real password reset.
	return true;
}

function readAuthParams() {
	const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
	const search = new URLSearchParams(window.location.search);
	const errorDescription = hash.get('error_description') || search.get('error_description');
	return {
		type: hash.get('type') || search.get('type'),
		code: search.get('code'),
		errorDescription: errorDescription ? decodeURIComponent(errorDescription.replace(/\+/g, ' ')) : null,
	};
}

export default function UpdatePassword() {
	const navigate = useNavigate();
	const [checked, setChecked] = useState(false);
	const [hasSession, setHasSession] = useState(false);
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [oauthOnly, setOauthOnly] = useState(false);

	useEffect(() => {
		let cancelled = false;
		// Captured before getSession — supabase-js clears the hash while initializing.
		const params = readAuthParams();
		let isRecovery = params.type === 'recovery' || sessionStorage.getItem(RECOVERY_FLAG) === '1';

		const allow = async (session) => {
			if (cancelled) return;
			const { data: userData, error: userError } = await supabase.auth.getUser();
			if (cancelled) return;

			const user = userData?.user ?? session?.user;
			// Google-only accounts have no email identity. updateUser still returns
			// success and the recovery link creates a session, so they land in the app
			// without a password ever being saved.
			if (!userError && user && !hasEmailProvider(user)) {
				sessionStorage.removeItem(RECOVERY_FLAG);
				await supabase.auth.signOut();
				if (cancelled) return;
				setOauthOnly(true);
				setHasSession(false);
				setChecked(true);
				return;
			}

			sessionStorage.setItem(RECOVERY_FLAG, '1');
			window.history.replaceState({}, document.title, window.location.pathname);
			setHasSession(true);
			setChecked(true);
		};

		const deny = (message) => {
			if (cancelled) return;
			sessionStorage.removeItem(RECOVERY_FLAG);
			setError(message);
			setHasSession(false);
			setChecked(true);
		};

		const { data: sub } = supabase.auth.onAuthStateChange((event) => {
			if (event === 'PASSWORD_RECOVERY') isRecovery = true;
		});

		const run = async () => {
			if (params.errorDescription) {
				deny(params.errorDescription);
				return;
			}

			// PKCE recovery redirects land here with ?code=. Implicit links use the hash instead.
			if (params.code) {
				const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(params.code);
				if (!exchangeError && data?.session) {
					await allow(data.session);
					return;
				}
				const { data: after } = await supabase.auth.getSession();
				await new Promise((resolve) => setTimeout(resolve, 0));
				if (after.session && isRecovery) {
					await allow(after.session);
					return;
				}
				deny('This reset link is invalid or has expired. Request a new one from the sign-in page.');
				return;
			}

			const { data } = await supabase.auth.getSession();
			// PASSWORD_RECOVERY is emitted on a timer after init. Yield once so we don't miss it.
			await new Promise((resolve) => setTimeout(resolve, 0));

			if (isRecovery && data.session) {
				await allow(data.session);
				return;
			}

			deny('This reset link is invalid or has expired. Request a new one from the sign-in page.');
		};

		run();

		return () => {
			cancelled = true;
			sub.subscription.unsubscribe();
		};
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		if (password.length < 6) {
			setError('Password must be at least 6 characters.');
			return;
		}
		if (password !== confirmPassword) {
			setError('Passwords do not match.');
			return;
		}

		setLoading(true);
		const { error: updateError } = await supabase.auth.updateUser({ password });
		setLoading(false);

		if (updateError) {
			const message = /different from the old password/i.test(updateError.message)
				? 'Choose a password you have not used before.'
				: updateError.message;
			setError(message);
			return;
		}

		const { data: userData } = await supabase.auth.getUser();
		if (userData?.user && !hasEmailProvider(userData.user)) {
			sessionStorage.removeItem(RECOVERY_FLAG);
			await supabase.auth.signOut();
			setHasSession(false);
			setOauthOnly(true);
			return;
		}

		sessionStorage.removeItem(RECOVERY_FLAG);
		navigate('/app', { replace: true });
	};

	return (
		<div className='relative min-h-screen flex items-center text-center justify-center bg-primary py-8'>
			<div className='absolute top-8 left-8'>
				<img src='/gisau-logo/gisau.svg' alt='GISAU Logo' className='h-16 w-auto' />
			</div>
			<div
				className='absolute top-0 right-0 opacity-10 pointer-events-none w-[40%] h-[40%] bg-contain bg-no-repeat bg-top-right z-0'
				style={{ backgroundImage: `url(/form/batik.png)` }}
			/>
			<div
				className='absolute bottom-0 left-0 opacity-10 pointer-events-none w-[40%] h-[40%] bg-contain bg-no-repeat bg-top-right z-0'
				style={{ backgroundImage: `url(/form/batik.png)`, transform: 'rotate(180deg)' }}
			/>
			<div className='relative z-10 bg-white p-10 rounded-2xl shadow-xl flex flex-col items-center max-w-sm w-full mx-4 border border-gray-100'>
				<h1 className='text-4xl font-bold font-oswald text-primary mb-2 tracking-wide'>GISAU</h1>
				<p className='text-gray-500 mb-8 font-medium'>{oauthOnly ? 'Google account' : 'Set a new password'}</p>

				{!checked && (
					<div className='text-center'>
						<div className='animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4' />
						<p className='text-gray-600 text-sm'>Checking reset link...</p>
					</div>
				)}

				{checked && oauthOnly && (
					<div className='w-full flex flex-col items-center gap-4'>
						<p className='text-sm text-gray-600'>
							This email uses Google sign-in, so it doesn&apos;t have a password to reset. Use Sign in with
							Google instead.
						</p>
						<Link to='/app' className='text-sm font-bold text-primary'>
							Back to sign in
						</Link>
					</div>
				)}

				{checked && !hasSession && !oauthOnly && (
					<div className='w-full flex flex-col items-center gap-4'>
						<p className='text-sm text-gray-600'>{error}</p>
						<Link to='/app' className='text-sm font-bold text-primary'>
							Back to sign in
						</Link>
					</div>
				)}

				{checked && hasSession && (
					<form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
						<div>
							<label htmlFor='new-password' className={labelClass}>
								New password
							</label>
							<input
								id='new-password'
								type='password'
								autoComplete='new-password'
								required
								minLength={6}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className={inputClass}
							/>
						</div>
						<div>
							<label htmlFor='confirm-new-password' className={labelClass}>
								Confirm password
							</label>
							<input
								id='confirm-new-password'
								type='password'
								autoComplete='new-password'
								required
								minLength={6}
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								className={inputClass}
							/>
						</div>
						{error && <p className='text-red-500 text-xs text-left'>{error}</p>}
						<button
							type='submit'
							disabled={loading}
							className='w-full bg-primary py-3 px-4 rounded-xl font-bold text-white hover:bg-primary/90 transition-all duration-300 shadow-sm text-sm disabled:opacity-60'
						>
							{loading ? 'Updating...' : 'Update password'}
						</button>
					</form>
				)}

				<p className='mt-6 text-[10px] text-gray-400 uppercase tracking-widest'>
					Gado-gado Indonesian Students Association
				</p>
			</div>
		</div>
	);
}
