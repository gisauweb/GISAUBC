import React from 'react';
import gamesIconLeft from 'assets/games/controllerL.png';
import gamesIconRight from 'assets/games/controllerR.png';
import gamesIconLRed from 'assets/games/controllerLred.png';
import gamesIconRRed from 'assets/games/controllerRred.png';

export default function GameMenu({ hasLandingImage, page, location }) {
	return (
		<div className='flex items-center ml-[-10] self-center'>
			{hasLandingImage ? (
				<img
					src={gamesIconLeft}
					alt='Games'
					className='image-class'
					style={{ height: 'auto', width: '20px' }}
				/>
			) : (
				<img
					src={gamesIconLRed}
					alt='Red Left'
					className='image-class'
					style={{ height: 'auto', width: '20px' }}
				/>
			)}
			<p
				className={`underline-animation font-oswald text-xl 
										${hasLandingImage ? 'text-white' : 'text-primary underline-animation-red'}
										${page.path === location.pathname && 'underlined'}`}
			>
				{page.name}
			</p>
			{hasLandingImage ? (
				<img
					src={gamesIconRight}
					alt='Games'
					className='image-class'
					style={{ height: 'auto', width: '20px' }}
				/>
			) : (
				<img
					src={gamesIconRRed}
					alt='Red Left'
					className='image-class'
					style={{ height: 'auto', width: '20px' }}
				/>
			)}
		</div>
	);
}
