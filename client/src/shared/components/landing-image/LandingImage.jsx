import React from 'react';

export default function LandingImage({ bgImage, text, isHomePage, children, button }) {
	return (
		<div className='relative h-screen w-screen items-center'>
			<div className='-z-index-10 flex justify-center items-center h-screen w-full'>
				<img className='h-full w-full absolute top-0 object-cover bg-bg-primary' src={bgImage} alt='hero' />
				<div className='absolute top-0 left-0 h-full w-full bg-black opacity-60' />
				<div className='w-full mt-1/20 relative'>
					{isHomePage ? (
						children
					) : (
						<>
							<h1
								className='relative my-4 md:my-8 mx-2 tracking-wide
							text-center text-white text-3xl sm:text-5xl lg:text-7xl
							font-montserrat font-semibold uppercase'
							>
								{text}
							</h1>
							<div className='flex fl justify-center mt-4 sm:mt-0'>{button}</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
