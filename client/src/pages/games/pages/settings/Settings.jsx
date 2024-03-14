import { Box } from '@mui/material';
import { Input } from '@material-tailwind/react';
import React, { useState } from 'react';
// import { useMediaQuery } from 'react-responsive';
import EditButton from './components/EditButton';

function StyledTextField({ value, label, edit, onChange }) {
	return (
		<Box className='flex flex-col mb-5 px-3'>
			<span className='text-lg font-poppins font-normal mb-1'>{label}</span>
			<Input
				variant='outlined'
				value={value}
				className={`rounded-xl font-poppins text-base leading-none outline-1
				outline-black ${edit ? 'text-black' : 'text-gray-400'}`}
				containerProps={{ className: 'h-8' }}
				disabled={!edit}
				onChange={onChange}
			/>
		</Box>
	);
}

export default function Settings({ account, token, updateAccountState }) {
	const [edit, setEdit] = useState(false);
	const [nickname, setNickname] = useState(account.nickname);
	// const isMobileView = useMediaQuery({ query: '(max-width: 1039px)' });

	const handleNicknameChange = (e) => {
		setNickname(e.target.value);
	};

	return (
		<Box className='xl:p-10 xl:pt-14 xl:pb-7 justify-center xl:h-[95%] w-screen h-screen xl:w-[80vw]'>
			<span className='text-3xl font-bold'>Settings</span>
			<Box
				className='flex xl:px-7 xl:pt-10 xl:pb-7 justify-center
						xl:justify-between w-screen h-screen xl:w-full xl:h-full'
			>
				<Box
					className='w-full xl:w-1/2 xl:h-full flex flex-col justify-start items-center
							xl:items-start'
				>
					<Box className='flex xl:self-start'>
						<span className='font-bold font-poppins text-2xl'>My profile</span>
					</Box>
					<Box className='flex flex-col h-full x-full'>
						<Box className='flex justify-center h-1/4 xl:h-1/3 my-10 xl:my-4'>
							<img
								src={account.profile_picture}
								alt="User's profile"
								style={{ height: '100%', borderRadius: '50%', borderWidth: '1px' }}
							/>
						</Box>
						<Box className='flex justify-between'>
							<StyledTextField value={account.first_name} label='First name' edit={false} />
							<StyledTextField value={account.last_name} label='Last name' edit={false} />
						</Box>
						<StyledTextField
							value={nickname}
							onChange={handleNicknameChange}
							fullWidth
							label='Preferred name'
							edit={edit}
						/>
						<StyledTextField value={account.sid} fullWidth label='Student number' edit={false} />
						<StyledTextField
							value={account.email}
							fullWidth
							label='Registered email address'
							edit={false}
						/>
						<Box className='flex justify-end mt-7'>
							<EditButton
								edit={edit}
								setEdit={setEdit}
								uid={account.uid}
								token={token}
								nickname={nickname}
								setNickname={setNickname}
								updateAccountState={updateAccountState}
							/>
						</Box>
					</Box>
				</Box>
				<Box className='w-1/2 h-full flex flex-col justify-between'>
					<Box className='h-1/2 flex flex-col justify-between'>
						<span className='font-bold font-poppins text-2xl'>Profile Visibility</span>
						<span className='font-poppins text-xl relative h-1/2 mx-auto'>coming soon...</span>
					</Box>
					<Box className='h-1/2 flex flex-col justify-between'>
						<span className='font-bold font-poppins text-2xl'>Email Notifications</span>
						<span className='font-poppins text-xl relative h-1/2 mx-auto'>coming soon...</span>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
