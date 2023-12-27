import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import user from './user.json';

export default function Profile() {
	const { name, image } = user;

	return (
		<Box className='bg-gamesBox w-full h-full rounded-2xl flex flex-col justify-center items-center mr-2'>
			<Typography style={{ fontSize: '14px' }}>Welcome,</Typography>
			<Box className='flex flex-row justify-center items-center my-3'>
				<div
					style={{
						width: '50px',
						height: '50px',
						marginRight: '5px',
					}}
				>
					<img
						src={image}
						alt=''
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							borderRadius: '50%',
						}}
					/>
				</div>
				<Typography className='ml-10' style={{ fontWeight: 'bold' }}>
					{name}
				</Typography>
			</Box>
			<Button
				className='mt-3'
				style={{
					height: '30px',
					width: 'fit',
					borderRadius: '40px',
					background: '#BFA285',
					boxShadow: '4px 6px 6px 0px rgba(0, 0, 0, 0.08)',
					display: 'inline-flex',
					justifyContent: 'center',
					alignItems: 'center',
					color: 'white',
					fontFamily: 'inherit',
					fontStyle: 'normal',
					fontSize: '10px',
					textTransform: 'none',
				}}
			>
				<PersonIcon className='self-center justify-center' />
				View Profile
			</Button>
		</Box>
	);
}
