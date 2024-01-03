import React from 'react';
import Dashboard from './components/dashboard/Dashboard';

export default function Games() {
	const isLogin = false;

	return isLogin ? <Dashboard /> : <div>login page</div>;
}
