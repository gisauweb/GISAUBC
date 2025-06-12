/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import './Button.css';

export default function Button({ landingButton, className, text, background, handleClickButton, icon }) {
	const [backgroundClass, setBackgroundClass] = useState('');
	const landingButtonClass = 'landing-button px-8 py-3 font-oswald normal-case font-normal text-lg cursor-pointer';

	useEffect(() => {
		switch (background) {
			case 'transparentBg':
				setBackgroundClass('transparent_bg');
				break;
			case 'grayBg':
				setBackgroundClass('gray_bg');
				break;
			default:
				setBackgroundClass('');
				break;
		}
	}, [background]);

	return (
		<div
			className={`${
				landingButton ? landingButtonClass : 'button'
			} ${backgroundClass} ${className} flex justify-center items-center w-fit px-8 py-3 text-lg font-normal`}
			onClick={handleClickButton}
			style={{ minWidth: 'fit-content', display: 'inline-flex', alignItems: 'center' }}
		>
			{icon && <img src={icon} alt='icon' className='mr-2' style={{ height: '18px', width: 'auto' }} />}
			<span className='font-proxima'>{text}</span>
		</div>
	);
}
