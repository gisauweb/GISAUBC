import React, { useState } from 'react';
import GisauLogo from 'assets/gisau-logo/gisau.png';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'shared/components';
import StudentIdDialog from './StudentIdDialog';

function capitalizeString(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Onboarding({ token, setIsRegistered }) {
	const { isAuthenticated, logout, user } = useAuth0();
	const [openDialog, setOpenDialog] = useState(false);

	return (
		<>
			<div className='h-screen flex flex-col justify-center items-center space-y-4'>
				<img src={GisauLogo} alt='GISAU logo' className='w-44 lg:w-52 xl:w-64' loading='lazy' />
				<h1 className='text-center text-xl sm:text-2xl xl:text-3xl font-normal font-oswald text-primary mt-4'>
					{`Welcome, ${user ? capitalizeString(user.nickname || user.given_name) : 'user'}`}
				</h1>
				<h1 className='text-center text-lg sm:text-xl xl:text-2xl font-normal font-oswald text-primary mt-4'>
					{isAuthenticated ? 'Please link your student id with your account.' : 'Please verify your email.'}
				</h1>
				<div className='flex space-x-4'>
					<Button text='Logout' background='transparentBg' handleClickButton={() => logout()} />
					{isAuthenticated && <Button text='Register' handleClickButton={() => setOpenDialog(!openDialog)} />}
				</div>
			</div>
			<StudentIdDialog
				open={openDialog}
				setOpen={setOpenDialog}
				setIsRegistered={setIsRegistered}
				token={token}
			/>
		</>
	);
}
