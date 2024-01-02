import React, { useEffect } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './dashboard/Dashboard';

export default function Games() {
	const { isAuthenticated, isLoading, loginWithPopup } = useAuth0();

	useEffect(() => {
		if (!isAuthenticated) {
			loginWithPopup();
		}
	}, [isAuthenticated, loginWithPopup]);
	return isAuthenticated && !isLoading ? <Dashboard /> : <div>Loading...</div>;
}
