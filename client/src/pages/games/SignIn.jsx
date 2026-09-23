import { useState } from 'react';
import supabase from 'libs/supabaseClient';

const inputClass =
	'w-full p-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary outline-none text-left text-sm text-gray-800';
const labelClass = 'block text-sm font-medium text-gray-700 mb-1 text-left';

function GoogleIcon() {
	return (
		<svg className='w-5 h-5 mr-3' viewBox='0 0 48 48'>
			<path
				fill='#EA4335'
				d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
			/>
			<path
				fill='#4285F4'
				d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
			/>
			<path
				fill='#FBBC05'
				d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z'
			/>
			<path
				fill='#34A853'
				d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
			/>
		</svg>
	);
}

function EmailIcon() {
	return (
		<svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
			/>
		</svg>
	);
}

function formatAuthError(message) {
	if (!message) return 'Something went wrong. Please try again.';
	if (/invalid login credentials/i.test(message)) return 'Incorrect email or password.';
	if (/user already registered/i.test(message))
		return 'An account with this email already exists. Sign in with Google or email.';
	if (/email not confirmed/i.test(message)) return 'Please confirm your email before signing in.';
	if (/password should be at least/i.test(message)) return message;
	if (/rate limit/i.test(message)) return 'Too many emails were sent. Wait a bit and try again.';
	return message;
}

function normalizeEmail(value) {
	return value.trim().toLowerCase();
}

export default function SignIn({ login }) {
	const [view, setView] = useState('choose');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [checkEmailReason, setCheckEmailReason] = useState('signup');
	const [resendState, setResendState] = useState('');

	const resetForm = () => {
		setPassword('');
		setConfirmPassword('');
		setError('');
		setLoading(false);
		setResendState('');
	};

	const goTo = (next) => {
		resetForm();
		setView(next);
	};

	const handleSignUp = async (e) => {
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

		const normalizedEmail = normalizeEmail(email);
		setLoading(true);
		const { data, error: signUpError } = await supabase.auth.signUp({
			email: normalizedEmail,
			password,
			options: {
				emailRedirectTo: `${window.location.origin}/auth/callback`,
			},
		});
		setLoading(false);

		if (signUpError) {
			setError(formatAuthError(signUpError.message));
			return;
		}

		// Supabase returns an empty identities array when the email is already taken
		// (including accounts that only signed up with Google).
		if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
			setError('An account with this email already exists. Sign in with Google or email.');
			return;
		}

		// Confirmations off (e.g. local) — session exists and Games will take over
		if (data.session) return;

		setEmail(normalizedEmail);
		setCheckEmailReason('signup');
		setView('checkEmail');
	};

	const handleSignIn = async (e) => {
		e.preventDefault();
		setError('');
		setLoading(true);

		const { error: signInError } = await supabase.auth.signInWithPassword({
			email: normalizeEmail(email),
			password,
		});
		setLoading(false);

		if (signInError) {
			setError(formatAuthError(signInError.message));
		}
		// On success Games.jsx picks up SIGNED_IN and unmounts this screen
	};

	const handleForgot = async (e) => {
		e.preventDefault();
		setError('');
		setLoading(true);

		const normalizedEmail = normalizeEmail(email);
		const { error: resetError } = await supabase.auth.resetPasswordForEmail(normalizedEmail, {
			redirectTo: `${window.location.origin}/auth/update-password`,
		});
		setLoading(false);

		// Missing accounts return success. Only surface real failures (rate limit, network).
		if (resetError && !/user not found|not registered/i.test(resetError.message)) {
			setError(formatAuthError(resetError.message));
			return;
		}

		// Always show the same message — do not reveal whether the email exists
		setEmail(normalizedEmail);
		setCheckEmailReason('forgot');
		setView('checkEmail');
	};

	const handleResend = async () => {
		setResendState('');
		setError('');
		setLoading(true);
		const { error: resendError } = await supabase.auth.resend({
			type: 'signup',
			email: normalizeEmail(email),
			options: {
				emailRedirectTo: `${window.location.origin}/auth/callback`,
			},
		});
		setLoading(false);

		if (resendError) {
			setError(formatAuthError(resendError.message));
			return;
		}
		setResendState('Confirmation email sent again.');
	};

	const subtitle =
		view === 'signup'
			? 'Create your account'
			: view === 'signin'
				? 'Sign in with email'
				: view === 'forgot'
					? 'Reset your password'
					: view === 'checkEmail'
						? 'Check your email'
						: 'Membership Portal';

	return (
		<div className='relative min-h-screen flex items-center text-center justify-center bg-primary py-8'>
			<div className='absolute top-8 left-8 z-20'>
				<a href='/' aria-label='GISAU home'>
					<img src='/gisau-logo/gisau.svg' alt='GISAU Logo' className='h-16 w-auto' />
				</a>
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
				<p className='text-gray-500 mb-8 font-medium'>{subtitle}</p>

				{view === 'choose' && (
					<>
						<button
							type='button'
							onClick={login}
							className='flex items-center justify-center gap-3 w-full bg-white border-2 border-gray-200 py-3 px-4 rounded-xl font-bold text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary transition-all duration-300 shadow-sm text-sm'
						>
							<GoogleIcon />
							Sign in with Google
						</button>

						<div className='flex items-center gap-3 w-full my-5'>
							<div className='flex-1 h-px bg-gray-200' />
							<span className='text-[10px] text-gray-400 uppercase tracking-widest'>or</span>
							<div className='flex-1 h-px bg-gray-200' />
						</div>

						<button
							type='button'
							onClick={() => goTo('signup')}
							className='flex items-center justify-center gap-3 w-full bg-primary py-3 px-4 rounded-xl font-bold text-white hover:bg-primary/90 transition-all duration-300 shadow-sm text-sm'
						>
							<EmailIcon />
							Sign up with Email
						</button>
						<p className='mt-4 text-sm text-gray-500'>
							Already have an account?{' '}
							<button type='button' onClick={() => goTo('signin')} className='font-bold text-primary'>
								Sign in
							</button>
						</p>
					</>
				)}

				{view === 'signup' && (
					<form onSubmit={handleSignUp} className='w-full flex flex-col gap-4'>
						<div>
							<label htmlFor='signup-email' className={labelClass}>
								Email
							</label>
							<input
								id='signup-email'
								type='email'
								autoComplete='email'
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className={inputClass}
							/>
						</div>
						<div>
							<label htmlFor='signup-password' className={labelClass}>
								Password
							</label>
							<input
								id='signup-password'
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
							<label htmlFor='signup-confirm' className={labelClass}>
								Confirm password
							</label>
							<input
								id='signup-confirm'
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
							{loading ? 'Creating account...' : 'Create account'}
						</button>
						<p className='text-sm text-gray-500'>
							Already have an account?{' '}
							<button type='button' onClick={() => goTo('signin')} className='font-bold text-primary'>
								Sign in
							</button>
						</p>
						<button type='button' onClick={() => goTo('choose')} className='text-xs text-gray-400 hover:text-gray-600'>
							Back to other options
						</button>
					</form>
				)}

				{view === 'signin' && (
					<form onSubmit={handleSignIn} className='w-full flex flex-col gap-4'>
						<div>
							<label htmlFor='signin-email' className={labelClass}>
								Email
							</label>
							<input
								id='signin-email'
								type='email'
								autoComplete='email'
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className={inputClass}
							/>
						</div>
						<div>
							<label htmlFor='signin-password' className={labelClass}>
								Password
							</label>
							<input
								id='signin-password'
								type='password'
								autoComplete='current-password'
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className={inputClass}
							/>
						</div>
						<div className='text-right -mt-2'>
							<button type='button' onClick={() => goTo('forgot')} className='text-xs font-medium text-primary'>
								Forgot password?
							</button>
						</div>
						{error && <p className='text-red-500 text-xs text-left'>{error}</p>}
						<button
							type='submit'
							disabled={loading}
							className='w-full bg-primary py-3 px-4 rounded-xl font-bold text-white hover:bg-primary/90 transition-all duration-300 shadow-sm text-sm disabled:opacity-60'
						>
							{loading ? 'Signing in...' : 'Sign in'}
						</button>
						<p className='text-sm text-gray-500'>
							Need an account?{' '}
							<button type='button' onClick={() => goTo('signup')} className='font-bold text-primary'>
								Sign up
							</button>
						</p>
						<button type='button' onClick={() => goTo('choose')} className='text-xs text-gray-400 hover:text-gray-600'>
							Back to other options
						</button>
					</form>
				)}

				{view === 'forgot' && (
					<form onSubmit={handleForgot} className='w-full flex flex-col gap-4'>
						<p className='text-sm text-gray-500 text-left'>
							Enter your email and we&apos;ll send you a link to reset your password.
						</p>
						<div>
							<label htmlFor='forgot-email' className={labelClass}>
								Email
							</label>
							<input
								id='forgot-email'
								type='email'
								autoComplete='email'
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className={inputClass}
							/>
						</div>
						{error && <p className='text-red-500 text-xs text-left'>{error}</p>}
						<button
							type='submit'
							disabled={loading}
							className='w-full bg-primary py-3 px-4 rounded-xl font-bold text-white hover:bg-primary/90 transition-all duration-300 shadow-sm text-sm disabled:opacity-60'
						>
							{loading ? 'Sending...' : 'Send reset link'}
						</button>
						<button type='button' onClick={() => goTo('signin')} className='text-xs text-gray-400 hover:text-gray-600'>
							Back to sign in
						</button>
					</form>
				)}

				{view === 'checkEmail' && (
					<div className='w-full flex flex-col items-center gap-4'>
						<p className='text-sm text-gray-600'>
							{checkEmailReason === 'forgot'
								? `If an account exists for ${email}, we sent a password reset link. It can only be used once.`
								: `We sent a confirmation link to ${email}. Open it to finish creating your account. It can only be used once.`}
						</p>
						{checkEmailReason === 'signup' && (
							<button
								type='button'
								onClick={handleResend}
								disabled={loading}
								className='text-sm font-bold text-primary disabled:opacity-60'
							>
								{loading ? 'Sending...' : 'Resend confirmation email'}
							</button>
						)}
						{error && <p className='text-red-500 text-xs'>{error}</p>}
						{resendState && <p className='text-xs text-gray-500'>{resendState}</p>}
						<button type='button' onClick={() => goTo('signin')} className='text-sm font-bold text-primary'>
							Back to sign in
						</button>
					</div>
				)}

				<p className='mt-6 text-[10px] text-gray-400 uppercase tracking-widest'>
					Gado-gado Indonesian Students Association
				</p>
			</div>
		</div>
	);
}
