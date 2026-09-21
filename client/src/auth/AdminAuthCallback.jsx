import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from 'libs/supabaseClient';

export default function AdminAuthCallback() {
	const navigate = useNavigate();

	useEffect(() => {
		const run = async () => {
			const { data } = await supabase.auth.getSession();

			if (data.session) {
				window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
				navigate('/admin', { replace: true });
			} else {
				navigate('/admin', { replace: true });
			}
		};

		run();
	}, [navigate]);

	return (
		<div className='h-screen flex items-center justify-center bg-gray-100'>
			<div className='text-center'>
				<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4' />
				<p className='text-gray-600 font-medium'>Completing sign-in...</p>
			</div>
		</div>
	);
}
