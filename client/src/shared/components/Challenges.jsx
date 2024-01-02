import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

export default function Challenges({ location }) {
	const { code } = queryString.parse(location.search);
	const [challengesData, setChallengesData] = useState('none');

	useEffect(() => {
		fetch(`http://localhost:3001/challenges?code=${code}`)
			.then((res) => res.json())
			.then((res) => setChallengesData(JSON.stringify(res)));
	}, [code]);

	return (
		<div>
			<h3>Challenges</h3>
			<h5 className='Content'>{challengesData}</h5>
		</div>
	);
}
