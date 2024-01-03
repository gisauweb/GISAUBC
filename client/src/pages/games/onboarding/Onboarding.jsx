import React from 'react';
import GisauLogo from 'assets/gisau-logo/gisau.png';

export default function Onboarding() {
	return (
		<div className='h-screen flex flex-col justify-center items-center'>
			<img src={GisauLogo} alt='GISAU logo' className='w-44 lg:w-52 xl:w-64' loading='lazy' />
			<h1 className='text-center text-2xl sm:text-3xl xl:text-4xl mt-8 font-normal font-oswald text-primary'>
				Please verify your email
			</h1>
		</div>
	);
}
// text-center h-screen mx-auto my-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
