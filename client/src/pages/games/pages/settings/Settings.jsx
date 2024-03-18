import { Box } from '@mui/material';
import React from 'react';
import Profile from './components/Profile';
import ToggleSwitch from './components/ToggleSwitch';

export default function Settings({ account, token, updateAccountState }) {
	return (
		<Box className='xl:p-10 xl:pt-14 xl:pb-7 justify-center xl:h-[95%] w-screen h-screen xl:w-[80vw]'>
			<span className='text-3xl font-bold'>Settings</span>
			<Box
				className='flex xl:px-7 xl:pt-10 xl:pb-7 justify-center
						xl:justify-between w-screen h-screen xl:w-full xl:h-full'
			>
				<Profile account={account} token={token} updateAccountState={updateAccountState} />
				<Box className='w-1/2 h-3/4 flex flex-col justify-between'>
					<Box className='h-1/2 flex flex-col justify-start gap-y-[1.25rem]'>
						<span className='font-bold font-poppins text-2xl'>Profile Visibility</span>
						<ToggleSwitch id='show_profile' label='Show my profile to others' />
						<ToggleSwitch id='show_profile_picture' label='Show my profile picture to others' />
					</Box>
					<Box className='h-1/2 flex flex-col justify-start gap-y-[1.25rem]'>
						<span className='font-bold font-poppins text-2xl'>Email Notifications</span>
						<ToggleSwitch id='show_profile' label='Daily reminders' />
						<ToggleSwitch id='show_profile_picture' label='Weekly updates' />
						<ToggleSwitch id='show_profile_picture' label='Weekly rewards info' />
						<ToggleSwitch id='show_profile_picture' label='Weekly leaderboard' />
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
