/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './pages/dashboard/Dashboard';
import Onboarding from './pages/onboarding/Onboarding';
import AlertDialog from './pages/onboarding/components/AlertDialog';

export default function Games() {
	const {
		isAuthenticated,
		isLoading,
		getAccessTokenSilently,
		getAccessTokenWithPopup,
		loginWithPopup,
		user,
		logout,
	} = useAuth0();
	const [token, setToken] = useState(null);
	const [isRegistered, setIsRegistered] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [alert, setAlert] = useState(false);

	const handleLoginAgain = async () => {
		try {
			await loginWithPopup();
			setError('');
			setLoading(false);
		} catch (err) {
			setError(err.message);
		}
	};

	const handleConsent = async () => {
		try {
			await getAccessTokenWithPopup();
			setError('');
			setLoading(false);
		} catch (err) {
			setError(err.message);
		}
	};

	useEffect(() => {
		setAlert(!!error);
	}, [error]);

	useEffect(() => {
		async function getToken() {
			try {
				const result = await getAccessTokenSilently();
				setToken(result);
				if (!isRegistered && user) {
					fetch(`${process.env.REACT_APP_SERVER_URL}/users/user/${user.sub}`, {
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
						})
						.catch((err) => {
							setError(err.message);
						});
				}
			} catch (err) {
				setError(err.message);
			}
		}
		if (!isAuthenticated) {
			loginWithPopup();
		}
		getToken();
	}, [isAuthenticated, isRegistered, loading, user, loginWithPopup, getAccessTokenSilently]);
	return isLoading || loading || alert ? (
		<>
			<div>Loading...</div>
			{alert && (
				<div
					onClick={() => {
						if (error === 'Consent required') {
							handleConsent();
						} else if (error === 'Login required') {
							handleLoginAgain();
						} else {
							logout({
								logoutParams: {
									returnTo: `${window.location.origin.toString()}/games`,
								},
							});
						}
						setLoading(true);
					}}
				>
					<AlertDialog open={alert} setOpen={setAlert} serverError={error} />
				</div>
			)}
		</>
	) : isAuthenticated && isRegistered ? (
		<Dashboard token={token} />
	) : (
		<Onboarding token={token} setIsRegistered={setIsRegistered} />
	);
}
