import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useMediaQuery } from 'react-responsive';

export default function Profile({ username, picture, setCurrentPage }) {
	const isMobileView = useMediaQuery({ query: '(max-width: 639px)' });

	return (
		<Box
			className={`bg-${
				isMobileView ? 'transparent' : 'gamesBox'
			} w-full h-full rounded-2xl flex flex-col justify-center items-center mr-2`}
		>
			<Typography style={{ fontSize: '14px' }}>Welcome,</Typography>
			<Box className='flex flex-row justify-center items-center my-3 gap-3'>
				<div
					style={{
						width: '50px',
						height: '50px',
						marginRight: '5px',
					}}
				>
					<img
						src={picture}
						alt='profile_pic'
						style={{
							width: 'auto',
							height: 'auto',
							objectFit: 'cover',
							borderRadius: '50%',
						}}
					/>
				</div>
				<div
					style={{
						width: '70%',
						overflow: 'auto',
						maxWidth: '70%',
					}}
				>
					<Typography style={{ fontWeight: 'bold' }}>{username}</Typography>
				</div>
			</Box>
			{!isMobileView && (
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
					onClick={() => {
						setCurrentPage('Profile');
					}}
				>
					<PersonIcon className='self-center justify-center' />
					View Profile
				</Button>
			)}
		</Box>
	);
}
