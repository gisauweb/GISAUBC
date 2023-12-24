import React, { useEffect, useState } from 'react';
import Dashboard from './dashboard/Dashboard';

export default function Games() {
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		async function fetchLoginStatus() {
			const loginStatus = await fetch(`${process.env.REACT_APP_SERVER_URL}`);
			setIsLogin(loginStatus === 'Logged in');
		}
		fetchLoginStatus();
	}, []);

	return isLogin ? <Dashboard /> : <div>login page</div>;
}
