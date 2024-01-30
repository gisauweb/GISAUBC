import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Profile() {
	return (
		<Box className='flex px-7 py-16 justify-between w-full h-[90%]'>
			<Box className='w-1/2 flex flex-col justify-between px-5'>
				<Box className='flex items-center space-x-2'>
					<ArrowBackIosNewIcon sx={{ color: 'black', stroke: 'black', strokeWidth: 2 }} />
					<span className='font-bold font-poppins text-2xl'>My Profile</span>
				</Box>
				<Box
					className='self-center my-6'
					sx={{ width: 140, height: 140, bgcolor: 'grey.300', borderRadius: '50%' }}
				/>
				<Box className='px-5'>
					<TextField label='First name' variant='outlined' defaultValue='Jessie' fullWidth margin='normal' />
					<TextField label='Last name' variant='outlined' defaultValue='Megan' fullWidth margin='normal' />
					<TextField
						label='Preferred name'
						variant='outlined'
						defaultValue='Jess'
						fullWidth
						margin='normal'
					/>
					<TextField
						label='Student number'
						variant='outlined'
						defaultValue='12345678'
						fullWidth
						margin='normal'
					/>
					<TextField
						label='Registered email address'
						variant='outlined'
						defaultValue='jessmgn@gisau.com'
						fullWidth
						margin='normal'
					/>
					<Button variant='outlined' startIcon={<ArrowBackIosNewIcon />}>
						Edit
					</Button>
				</Box>
			</Box>
			<Box className='w-1/2 h-full flex flex-col justify-between'>
				<Box className='h-1/2 flex flex-col justify-between'>
					<span className='font-bold font-poppins text-2xl'>Daily Challenges</span>
					<span className='font-poppins text-xl relative h-1/2 mx-auto'>coming soon...</span>
				</Box>
				<Box className='h-1/2 flex flex-col justify-between'>
					<span className='font-bold font-poppins text-2xl'>My Badges</span>
					<span className='font-poppins text-xl relative h-1/2 mx-auto'>coming soon...</span>
				</Box>
			</Box>
		</Box>
	);
}
