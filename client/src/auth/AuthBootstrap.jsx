import { useEffect } from 'react';
import supabase from 'libs/supabaseClient';

export default function AuthBootstrap() {
	useEffect(() => {
		(async () => {
			// A) Code flow
			const code = new URLSearchParams(window.location.search).get('code');
			if (code) {
				const { error } = await supabase.auth.exchangeCodeForSession(code);
				if (error) console.error('exchangeCodeForSession:', error);
				window.history.replaceState({}, '', window.location.pathname);
				return;
			}

			// B) Implicit flow
			const hash = window.location.hash.startsWith('#') ? window.location.hash.slice(1) : window.location.hash;

			const hashParams = new URLSearchParams(hash);
			const access_token = hashParams.get('access_token');
			const refresh_token = hashParams.get('refresh_token');

			if (access_token && refresh_token) {
				const { error } = await supabase.auth.setSession({
					access_token,
					refresh_token,
				});
				if (error) console.error('setSession:', error);
				window.history.replaceState({}, '', window.location.pathname);
			}
		})();
	}, []);

	return null;
}
