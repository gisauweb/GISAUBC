import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from 'libs/supabaseClient';

export default function AuthCallback() {
	const navigate = useNavigate();

	useEffect(() => {
		const run = async () => {
			// If tokens are in the hash, Supabase can consume them.
			const { data } = await supabase.auth.getSession();

			if (data.session) {
				// remove #access_token=... from the URL
				window.history.replaceState({}, document.title, window.location.pathname + window.location.search);

				navigate('/app', { replace: true });
			} else {
				navigate('/', { replace: true });
			}
		};

		run();
	}, [navigate]);

	return (
		<div className='h-screen flex items-center justify-center bg-[#FFFDF5]'>
			<div className='text-center'>
				<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4'></div>
				<p className='text-gray-600 font-medium'>Completing sign-in...</p>
			</div>
		</div>
	);
}
