import React, { useEffect, useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './components/dashboard/Dashboard';

export default function Games() {
	const { isAuthenticated, isLoading, getAccessTokenSilently, loginWithPopup } = useAuth0();
	const [token, setToken] = useState(null);

	useEffect(() => {
		async function getToken() {
			const result = await getAccessTokenSilently();
			setToken(result);
		}
		if (!isAuthenticated) {
			loginWithPopup();
		} else {
			getToken();
		}
	}, [isAuthenticated, loginWithPopup, getAccessTokenSilently]);

	return isAuthenticated && !isLoading ? <Dashboard token={token} /> : <div>Loading...</div>;
}
