import { Box } from '@mui/material';
import React, { useState } from 'react';
import StyledTextField from './StyledTextField';
import EditButton from './EditButton';

export default function Profile({ account, token, updateAccountState }) {
	const [edit, setEdit] = useState(false);
	const [nickname, setNickname] = useState(account.nickname);

	const handleNicknameChange = (e) => {
		setNickname(e.target.value);
	};
	return (
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
				<StyledTextField value={account.email} fullWidth label='Registered email address' edit={false} />
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
	);
}
