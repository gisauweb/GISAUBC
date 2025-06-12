import { Box } from '@mui/material';
import React from 'react';
import Profile from './components/Profile';
import ToggleSwitch from './components/ToggleSwitch';

export default function Settings({ account, token, updateAccountState }) {
	return (
		<Box className='py-1/10 xl:p-10 xl:pt-14 xl:pb-7 xl:justify-center w-screen xl:w-[80vw] xl:h-[95%]'>
			<span className='text-xl xl:text-3xl font-bold hidden xl:inline-block'>Settings</span>
			<Box
				className='flex flex-col xl:flex-row xl:px-7 xl:pt-10 xl:pb-7 justify-between
				w-screen xl:w-full xl:h-full gap-y-14 xl:gap-y-0'
			>
				<Profile account={account} token={token} updateAccountState={updateAccountState} />
				<Box
					className='w-[85%] xl:w-1/2 xl:h-3/4 flex flex-col
							justify-start xl:justify-between mx-auto gap-y-14 pb-4'
				>
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
