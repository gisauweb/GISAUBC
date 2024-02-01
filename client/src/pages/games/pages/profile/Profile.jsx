import { Box, Button } from '@mui/material';
import { Input } from '@material-tailwind/react';
import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function StyledTextField({ value, label }) {
	return (
		<Box className='flex flex-col mb-5'>
			<span className='text-lg font-poppins font-normal mb-1'>{label}</span>
			<Input defaultValue={value} className='rounded-xl font-poppins text-base' disabled />
		</Box>
	);
}

export default function Profile() {
	return (
		<Box className='flex px-7 py-16 justify-between w-full h-[95%]'>
			<Box className='w-1/2 flex flex-col justify-between px-5'>
				<Box className='flex items-center space-x-2'>
					<ArrowBackIosNewIcon sx={{ color: 'black', stroke: 'black', strokeWidth: 2 }} />
					<span className='font-bold font-poppins text-2xl'>My Profile</span>
				</Box>
				<Box
					className='self-center my-6'
					sx={{ width: 250, height: 250, bgcolor: 'grey.300', borderRadius: '50%' }}
				/>
				<Box className='px-20'>
					<Box className='flex justify-between space-x-4'>
						<StyledTextField value='Jessie' label='First name' />
						<StyledTextField value='Megan' label='Last name' />
					</Box>
					<StyledTextField value='Jessie' fullWidth label='Preferred name' />
					<StyledTextField value='12345678' fullWidth label='Student number' />
					<StyledTextField value='jessmgn@gisau.com' fullWidth label='Registered email address' />
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
