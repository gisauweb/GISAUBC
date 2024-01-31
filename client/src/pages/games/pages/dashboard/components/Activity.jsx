import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import Chart from 'chart.js/auto';
import icon from 'assets/games/activity_icon.gif';
import user from 'pages/games/user.json';
import { useMediaQuery } from 'react-responsive';
import bang from 'assets/home-page/events/upcoming_event.svg';
import plane from 'assets/games/plane.svg';
import trophy from 'assets/games/trophy.svg';

export default function Activity() {
	const chartRef = useRef(null);
	const { date, activity } = user;
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

	useEffect(() => {
		const ctx = chartRef.current.getContext('2d');
		const gradient = ctx.createLinearGradient(0, 0, 0, 300);
		gradient.addColorStop(0, '#BFA4856E');
		gradient.addColorStop(0.25, '#E5D9CDD3');
		gradient.addColorStop(0.5, '#ECE4DBE6');
		gradient.addColorStop(0.75, '#F5F1ED');
		const chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: date,
				datasets: [
					{
						backgroundColor: gradient,
						borderColor: '#BFA285',
						borderWidth: 1,
						data: activity,
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
	}, [activity, date]);

	return (
		<Box
			className='h-50 justify-center items-center mt-5 bg-gamesBox rounded-2xl px-2'
			style={{ width: isMobileView ? '80vw' : '100%' }}
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
					/>
				</div>
			)}
			<Box className='flex flex-row'>
				<img src={icon} alt='icon' className='w-auto h-16 mt-2' style={{ transform: 'scaleX(-1)' }} />
				<Box className='flex flex-col mt-5'>
					<Typography style={{ fontWeight: 'bold', fontSize: '15px' }}>Activity Overview</Typography>
					<Typography style={{ fontSize: '12px' }}>Your daily activeness for the past 14 days</Typography>
				</Box>
			</Box>
			<canvas
				ref={chartRef}
				id='chart'
				width='80%'
				height='70%'
				style={{ maxHeight: '70%', marginTop: 'auto', marginBottom: '3px' }}
			/>
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
