import React, { useEffect, useState } from 'react';
import GisauLogo from 'assets/gisau-logo/gisau.png';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'shared/components';
import StudentIdDialog from './components/StudentIdDialog';
import AlertDialog from './components/AlertDialog';

function capitalizeString(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Onboarding({ token, setIsRegistered }) {
	const { logout, user } = useAuth0();
	const [openDialog, setOpenDialog] = useState(false);
	const [serverError, setServerError] = useState('');
	const [alertDialog, setAlertDialog] = useState(false);

	useEffect(() => {
		setAlertDialog(!!serverError);
	}, [serverError]);

	return (
		<>
			<div className='h-screen flex flex-col justify-center items-center space-y-4'>
				<img src={GisauLogo} alt='GISAU logo' className='w-44 lg:w-52 xl:w-64' loading='lazy' />
				<h1 className='text-center text-xl sm:text-2xl xl:text-3xl font-normal font-oswald text-primary mt-4'>
					{`Welcome, ${user ? capitalizeString(user.nickname || user.given_name) : 'user'}`}
				</h1>
				<h1 className='text-center text-lg sm:text-xl xl:text-2xl font-normal font-oswald text-primary mt-4'>
					Please link your student id with your account.
				</h1>
				<div className='flex space-x-4'>
					<Button text='Logout' background='transparentBg' handleClickButton={() => logout()} />
					<Button text='Register' handleClickButton={() => setOpenDialog(!openDialog)} />
				</div>
			</div>
			<StudentIdDialog
				open={openDialog}
				setOpen={setOpenDialog}
				setIsRegistered={setIsRegistered}
				setServerError={setServerError}
				token={token}
			/>
			<AlertDialog open={alertDialog} setOpen={setAlertDialog} serverError={serverError} />
		</>
	);
}
