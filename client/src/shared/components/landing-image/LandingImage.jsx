import React from 'react';

export default function LandingImage({ bgImage, text, isHomePage, children }) {
	const backgroundStyles = {
		filter: 'brightness(0.4)',
		backgroundSize: 'cover',
		backgroundImage: `url(${bgImage})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	};

	return (
		<div className='h-screen w-screen items-center overflow-hidden'>
			<div className='absolute w-screen h-screen' style={backgroundStyles} />
			<div className='relative flex justify-center items-center h-full w-full'>
				<div className='w-full mt-1/20'>
					{isHomePage ? (
						children
					) : (
						<h1
							className='my-4 md:my-8 mx-2 tracking-wide
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
