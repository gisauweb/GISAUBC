import React, { useEffect, useState } from 'react';
import './Button.css';

export default function Button({ landingButton, className, text, background, handleClickButton }) {
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
			className={`${landingButton ? landingButtonClass : 'button'} ${backgroundClass} ${className}`}
			onClick={handleClickButton}
		>
			{text}
		</div>
	);
}
