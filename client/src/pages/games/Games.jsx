import React, { useState } from 'react';
import Dashboard from './dashboard/Dashboard';

export default function Games() {
	const [isLogin] = useState(true);

	return isLogin ? <Dashboard /> : <div>Loading...</div>;
}
