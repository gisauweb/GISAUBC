import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

export default function Games() {
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		async function fetchLoginStatus() {
			const loginStatus = await fetch(`${process.env.REACT_APP_SERVER_URL}`);
			console.log('login status: ', loginStatus);
			setIsLogin(loginStatus === 'Logged in');
		}
		fetchLoginStatus();
	}, []);

	const navigate = useNavigate();
	if (!isLogin) {
		navigate(`${process.env.REACT_APP_SERVER_URL}/login`);
	}

	return isLogin ? <Dashboard /> : <div>login page</div>;
}
