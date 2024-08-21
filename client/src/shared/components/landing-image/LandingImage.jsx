import React from 'react';

export default function LandingImage({ bgImage, text, isHomePage, children }) {
	return (
		<div className='relative h-screen w-screen items-center'>
			<div className='fixed -z-index-10 flex justify-center items-center h-screen w-full'>
				<img
					className='h-[115vh] w-full absolute top-0 object-cover bg-white brightness-[0.4]'
					src={bgImage}
					alt='hero'
				/>
				<div className='w-full mt-1/20'>
					{isHomePage ? (
						children
					) : (
						<h1
							className='relative my-4 md:my-8 mx-2 tracking-wide
						text-center text-white text-3xl sm:text-5xl lg:text-7xl
						font-montserrat font-semibold uppercase'
						>
							{text}
						</h1>
					)}
				</div>
			</div>
		</div>
	);
}
