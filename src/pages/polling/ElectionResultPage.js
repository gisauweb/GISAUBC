import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

import { ElectionBarChart } from './ElectionBarChart';
import { countVotes } from 'libs/firebase/polling';

const ElectionResultPage = () => {
	const [voteResult, setVoteResult] = useState({
		presidentCounts: {
			'Imelda Alimin': 0,
			'Jonathan Santoso': 0,
			Abstain: 0,
		},
		vicePresidentCounts: {
			'Nadya Rei': 0,
			Abstain: 0,
		},
		treasurerCounts: {
			'Joanico Huang': 0,
			Abstain: 0,
		},
	});

	const startCountVotes = async () => {
		const result = await countVotes();
		setVoteResult(result);
	};

	useEffect(() => {
		startCountVotes();
	}, []);

	return (
		<div className='min-h-screen bg-[#CFBBBB] flex flex-col py-32'>
			<Box className='flex justify-center my-10 mt-14'>
				<Typography variant='h3'>Election Result</Typography>
			</Box>
			<ElectionBarChart result={voteResult} />
		</div>
	);
};

export default ElectionResultPage;
