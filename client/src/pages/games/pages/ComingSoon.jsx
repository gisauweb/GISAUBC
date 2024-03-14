import React from 'react';
import spaceship from 'assets/games/spaceship.gif';

export default function ComingSoon() {
	return (
		<div
			className='flex flex-col xl:flex-row h-screen items-center justify-center
						xl:gap-5 xl:w-[80%] pb-24 xl:pb-0 xl:pr-10'
		>
			<img src={spaceship} alt='Coming Soon' />
			<div className='text-center'>
				<p className='font-bold'>coming soon...</p>
				<p>stay tuned for tons of exciting</p>
				<p>merch and benefits!</p>
			</div>
		</div>
	);
}
