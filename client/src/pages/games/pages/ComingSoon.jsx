import React from 'react';
import spaceship from 'assets/games/spaceship.gif';

export default function ComingSoon() {
	return (
		<div className='flex items-center justify-center gap-x-5 pr-3 xl:w-[80%]'>
			<img src={spaceship} alt='Coming Soon' />
			<div className='text-center'>
				<p className='font-bold'>coming soon...</p>
				<p>stay tuned for tons of exciting</p>
				<p>merch and benefits!</p>
			</div>
		</div>
	);
}
