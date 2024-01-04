import React, { useEffect, useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './dashboard/Dashboard';
import Onboarding from './onboarding/Onboarding';

export default function Games() {
	const { isAuthenticated, isLoading, getAccessTokenSilently, loginWithPopup, user } = useAuth0();
	const [token, setToken] = useState(null);
	const [isRegistered, setIsRegistered] = useState(false);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		async function getToken() {
			const result = await getAccessTokenSilently();
			setToken(result);
			if (!isRegistered) {
				fetch(`http://127.0.0.1:5001/gisaubc-dev/us-central1/api/users/user/${user.sub}`, {
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						Authorization: `Bearer ${result}`,
					},
				})
					.then((res) => res.json())
					.then((res) => {
						setIsRegistered(res.result);
						setLoading(false);
					});
			}
		}
		if (!isAuthenticated) {
			loginWithPopup();
		} else {
			getToken();
		}
	}, [isAuthenticated, isRegistered, user, loginWithPopup, getAccessTokenSilently]);

	return isLoading && loading ? (
		<div>Loading...</div>
	) : isAuthenticated && isRegistered ? (
		<Dashboard token={token} />
	) : (
		!isLoading && !loading && <Onboarding token={token} setIsRegistered={setIsRegistered} />
	);
}
