import React from 'react';

export default function MainContainer({ children }) {
	return (
		<div className='w-full bg-bgPrimary relative'>
			<div className='w-4/5 mx-auto pt-10 sm:pt-15 lg:pt-20'>{children}</div>
		</div>
	);
}
