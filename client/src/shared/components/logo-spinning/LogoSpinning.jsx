import React from 'react';
import LogoGisau from 'assets/gisau-logo/gisau.png';

import './LogoSpinning.css';

export default function LogoSpinning() {
	return (
		<div className='flex justify-center'>
			<img src={LogoGisau} alt='GISAU logo' className='logo w-44 lg:w-52 xl:w-64 mt-36' loading='lazy' />
		</div>
	);
}
