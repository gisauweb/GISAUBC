import React from 'react';
import { LandingButton } from './LandingButton';

import './Button.css';

export const Button = ({ landingButton, className, text, transparentBg, handleClickButton }) => {
	if (landingButton) {
		return <LandingButton className={className} text={text} handleClickButton={handleClickButton} />;
	}

	return (
		<div className={className}>
			<div className={`button ${transparentBg && 'transparent_bg'} `} onClick={handleClickButton}>
				{text}
			</div>
		</div>
	);
};
