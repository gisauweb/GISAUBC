import React from 'react';
import spaceship from 'assets/games/spaceship.gif';

export default function ComingSoon() {
	return (
		<div className='h-screen w-full flex flex-col items-center justify-center text-center px-6'>
			<img src={spaceship} alt='Coming Soon' className='w-40 mb-6' />

			<p className='font-bold text-lg'>Coming soon...</p>
			<p className='text-gray-600'>Stay tuned for tons of exciting</p>
			<p className='text-gray-600'>merch and fun!</p>
		</div>
	);
}
