/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { useMediaQuery } from 'react-responsive';
import Dashboard from './pages/dashboard/Dashboard';
import Onboarding from './pages/onboarding/Onboarding';
import AlertDialog from './pages/onboarding/components/AlertDialog';
import Profile from './pages/profile/Profile';
import Sidebar from './pages/Sidebar';
import MobileSideBar from './pages/MobileSidebar';
import Pomodoro from './pages/pomodoro/Pomodoro';

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
	const [account, setAccount] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [alert, setAlert] = useState(false);
	const [currentPage, setCurrentPage] = useState('Dashboard');
	const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });

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
				if (!account && user) {
					fetch(`${process.env.REACT_APP_SERVER_URL}/users/user/${user.sub}`, {
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json',
							Authorization: `Bearer ${result}`,
						},
					})
						.then((res) => res.json())
						.then((res) => {
							setAccount(res.result);
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
		if (isAuthenticated && user && !account) {
			getToken();
		}
	}, [isAuthenticated, user, account, getAccessTokenSilently]);

	useEffect(() => {
		if (!isAuthenticated) {
			loginWithPopup();
		}
	}, [isAuthenticated, loginWithPopup]);

	async function updateAccountState() {
		fetch(`${process.env.REACT_APP_SERVER_URL}/users/user/${user.sub}`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((res) => {
				setAccount(res.result);
			})
			.catch((err) => {
				setError(err.message);
			});
	}

	return isLoading || loading || alert ? (
		<Loading params={(alert, error, handleConsent, handleLoginAgain, logout, setLoading, setAlert)} />
	) : !account ? (
		<Onboarding token={token} setAccount={setAccount} />
	) : isMobileView ? (
		<div className='w-screen flex flex-col h-fit mb-10 items-center gap-3 relative bg-overlay bg-white'>
			<MobileSideBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
			{currentPage === 'Dashboard' ? (
				<Dashboard account={account} token={token} />
			) : currentPage === 'Profile' ? (
				<Profile
					account={account}
					token={token}
					setCurrentPage={setCurrentPage}
					updateAccountState={() => updateAccountState()}
				/>
			) : null}
		</div>
	) : (
		<div className='flex h-screen bg-white'>
			<Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
			{currentPage === 'Dashboard' ? (
				<Dashboard account={account} token={token} setCurrentPage={setCurrentPage} />
			) : currentPage === 'Profile' ? (
				<Profile
					account={account}
					token={token}
					setCurrentPage={setCurrentPage}
					updateAccountState={() => updateAccountState()}
				/>
			) : currentPage === 'Pomodoro' ? (
				<Pomodoro account={account} token={token} updateAccountState={() => updateAccountState()} />
			) : null}
		</div>
	);
}

function Loading({ params }) {
	const { alert, error, handleConsent, handleLoginAgain, logout, setLoading, setAlert } = params;
	return (
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
									returnTo: `${window.location.origin.toString()}`,
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
	);
}
