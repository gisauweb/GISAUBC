import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from 'libs/supabaseClient';

const RECOVERY_FLAG = 'gisau-password-recovery';

function readAuthParams() {
	const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
	const search = new URLSearchParams(window.location.search);
	const errorDescription = hash.get('error_description') || search.get('error_description');
	return {
		type: hash.get('type') || search.get('type'),
		errorDescription: errorDescription ? decodeURIComponent(errorDescription.replace(/\+/g, ' ')) : null,
	};
}

export default function AuthCallback() {
	const navigate = useNavigate();
	const [error, setError] = useState('');

	useEffect(() => {
		let settled = false;
		const { type, errorDescription } = readAuthParams();

		const finish = (path) => {
			if (settled) return;
			settled = true;
			window.history.replaceState({}, document.title, window.location.pathname);
			navigate(path, { replace: true });
		};

		const { data: sub } = supabase.auth.onAuthStateChange((event) => {
			if (event === 'PASSWORD_RECOVERY') {
				sessionStorage.setItem(RECOVERY_FLAG, '1');
				finish('/auth/update-password');
			}
		});

		const run = async () => {
			if (errorDescription) {
				settled = true;
				setError(errorDescription);
				return;
			}

			const { data } = await supabase.auth.getSession();
			// PASSWORD_RECOVERY is emitted on a timer after the hash is parsed.
			await new Promise((resolve) => setTimeout(resolve, 0));
			if (settled) return;

			// Recovery links log the user in, but they still need to set a password.
			if (type === 'recovery' && data.session) {
				sessionStorage.setItem(RECOVERY_FLAG, '1');
				finish('/auth/update-password');
				return;
			}

			if (data.session) {
				finish('/app');
				return;
			}

			settled = true;
			setError('This link is invalid or has expired. Request a new one from the membership portal.');
		};

		run();

		return () => sub.subscription.unsubscribe();
	}, [navigate]);

	return (
		<div className='h-screen flex items-center justify-center bg-[#FFFDF5] px-4'>
			<div className='text-center max-w-sm'>
				{error ? (
					<>
						<p className='text-gray-700 font-medium mb-4'>{error}</p>
						<Link to='/app' className='text-sm font-bold text-primary'>
							Back to membership portal
						</Link>
					</>
				) : (
					<>
						<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4'></div>
						<p className='text-gray-600 font-medium'>Completing sign-in...</p>
					</>
				)}
			</div>
		</div>
	);
}
