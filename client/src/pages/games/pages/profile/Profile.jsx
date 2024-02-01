import { Box } from '@mui/material';
import { Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EditButton from './components/EditButton';

function StyledTextField({ value, label, edit }) {
	return (
		<Box className='flex flex-col mb-5'>
			<span className='text-lg font-poppins font-normal mb-1'>{label}</span>
			<Input
				variant='outlined'
				defaultValue={value}
				className={`rounded-xl font-poppins text-base leading-none outline-1
				outline-black ${edit ? 'text-black' : 'text-gray-400'}`}
				containerProps={{ className: 'h-8' }}
				disabled={!edit}
			/>
		</Box>
	);
}

export default function Profile({ account }) {
	const [edit, setEdit] = useState(false);

	return (
		<Box className='flex px-7 py-16 justify-between w-[80vw] h-[95%]'>
			<Box className='w-1/2 flex flex-col justify-between px-5'>
				<Box className='flex items-center space-x-2'>
					<ArrowBackIosNewIcon sx={{ color: 'black', stroke: 'black', strokeWidth: 2 }} />
					<span className='font-bold font-poppins text-2xl'>My Profile</span>
				</Box>
				<img
					src={account.profile_picture}
					alt="User's profile"
					style={{ width: 200, height: 200, borderRadius: '50%', borderWidth: '1px' }}
					className='self-center my-6'
				/>
				<Box className='px-20'>
					<Box className='flex justify-between '>
						<StyledTextField value='Jessie' label='First name' edit={edit} />
						<StyledTextField value='Megan' label='Last name' edit={edit} />
					</Box>
					<StyledTextField value='Jessie' fullWidth label='Preferred name' edit={edit} />
					<StyledTextField value='12345678' fullWidth label='Student number' edit={false} />
					<StyledTextField
						value='jessmgn@gisau.com'
						fullWidth
						label='Registered email address'
						edit={false}
					/>
					<Box className='flex justify-end'>
						<EditButton edit={edit} setEdit={setEdit} />
					</Box>
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
