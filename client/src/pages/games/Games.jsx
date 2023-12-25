import React, { useEffect, useState } from 'react';
import Dashboard from './dashboard/Dashboard';

export default function Games() {
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		async function fetchLoginStatus() {
			const loginStatus = await fetch(`http://${process.env.REACT_APP_SERVER_URL}`);
			setIsLogin(loginStatus === 'Logged in');
		}
		fetchLoginStatus();
	}, []);

	useEffect(() => {
		if (!isLogin) {
			window.location.href = `${process.env.REACT_APP_SERVER_URL}/profile`;
		}
	}, [isLogin]);

	return isLogin ? <Dashboard /> : <div>Loading...</div>;
}
