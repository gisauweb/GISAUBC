import React from 'react';
import { LogoSpinning } from 'shared/components/logo-spinning/LogoSpinning';

export const StayTuned = () => {
	return (
		<div className='text-center relative h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<LogoSpinning />
			<h1 className='text-2xl sm:text-3xl xl:text-4xl mt-8 font-normal font-oswald text-primary'>
				Stay Tuned! <br />
				Something exciting will come
			</h1>
		</div>
	);
};
