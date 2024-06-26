import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import Chart from 'chart.js/auto';
import icon from 'assets/games/activity_icon.gif';
import { useMediaQuery } from 'react-responsive';
import bang from 'assets/home-page/events/upcoming_event.svg';
import plane from 'assets/games/plane.svg';
import trophy from 'assets/games/trophy.svg';

const handlePastActivities = (userPastActivities) => {
	if (!userPastActivities) {
		return {};
	}

	const pastActivities = userPastActivities;
	const sortedActivitiesArray = Object.entries(pastActivities).sort((a, b) => {
		const dateA = new Date(a[0].replace(/ /g, ', ')); // Adjust format to original for proper conversion
		const dateB = new Date(b[0].replace(/ /g, ', ')); // Adjust format to original for proper conversion
		return dateA.getTime() - dateB.getTime();
	});

	// Convert the sorted array back into an object
	const sortedActivities = sortedActivitiesArray.reduce((obj, [key, value]) => {
		// eslint-disable-next-line no-param-reassign
		obj[key] = value;
		return obj;
	}, {});

	return sortedActivities;
};

export default function Activity({ account }) {
	const chartRef = useRef(null);
	const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });

	useEffect(() => {
		if (!account) {
			return () => {};
		}
		const pastActivities = handlePastActivities(account.past_activities);
		const ctx = chartRef.current.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, 300);
		gradient.addColorStop(0, '#BFA4856E');
		gradient.addColorStop(0.25, '#E5D9CDD3');
		gradient.addColorStop(0.5, '#ECE4DBE6');
		gradient.addColorStop(0.75, '#F5F1ED');
		const chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: Object.keys(pastActivities),
				datasets: [
					{
						backgroundColor: gradient,
						borderColor: '#BFA285',
						borderWidth: 1,
						data: Object.values(pastActivities),
						fill: true,
					},
				],
			},
			options: {
				animation: {
					x: {
						duration: 5000,
						from: 0,
					},
					y: {
						duration: 3000,
						from: 500,
					},
				},
				scales: {
					x: {
						ticks: {
							color: '#BFA285',
							font: { size: 10 },
						},
						grid: { color: '#F5F1ED' },
					},
					y: {
						title: {
							display: true,
							text: 'Points',
							color: '#BFA285',
							font: { size: 10 },
						},
						ticks: {
							color: '#BFA285',
							font: { size: 10 },
						},
						grid: { color: '#F5F1ED' },
					},
				},
				plugins: { legend: { display: false } },
			},
		});

		return () => {
			chart.destroy();
		};
	}, [account]);

	return (
		<Box
			className='justify-center items-center mt-5 bg-gamesBox rounded-2xl px-2'
			style={{ width: isMobileView ? '80vw' : '100%', height: isMobileView ? 'h-96' : 'h-50' }}
		>
			{isMobileView && (
				<div style={{ position: 'relative' }}>
					<img
						src={bang}
						alt='bang'
						style={{
							width: '30px',
							height: '30px',
							position: 'absolute',
							zIndex: 30,
							right: '-10px',
							marginTop: '-5px',
						}}
						className='gap-3 justify-between'
					/>
				</div>
			)}
			<Box className='flex flex-row mt-5 ml-3'>
				<img src={icon} alt='icon' className='w-auto h-16 mt-3' style={{ transform: 'scaleX(-1)' }} />
				<Box className='flex flex-col mt-5'>
					<Typography style={{ fontWeight: 'bold', fontSize: '18px' }}>Activity Overview</Typography>
					<Typography style={{ fontSize: '15px' }}>Your daily activeness for the past 14 days</Typography>
				</Box>
			</Box>
			{!isMobileView ? (
				<Box className='flex w-full h-5/6 justify-center items-center' style={{ marginTop: '-50px' }}>
					<canvas
						ref={chartRef}
						id='chart'
						width='100%'
						height='100%'
						style={{ maxHeight: '70%', marginTop: 'auto', marginBottom: '3px' }}
					/>
				</Box>
			) : (
				<canvas
					ref={chartRef}
					id='chart'
					width='100%'
					height='100%'
					style={{ maxHeight: '70%', marginTop: '0px', marginBottom: '3px' }}
				/>
			)}
			{isMobileView && (
				<div style={{ position: 'relative' }}>
					<img
						src={plane}
						alt='plane'
						style={{
							width: '100px',
							height: '100px',
							objectFit: 'cover',
							position: 'absolute',
							left: '-2px',
							marginBottom: '-8px',
							zIndex: 20,
						}}
					/>
					<img
						src={trophy}
						alt='trophy'
						style={{
							width: '100px',
							height: '100px',
							position: 'absolute',
							right: '-10vw',
							zIndex: 0,
						}}
					/>
				</div>
			)}
		</Box>
	);
}
