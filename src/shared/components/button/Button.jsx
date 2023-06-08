import React from 'react';
import LandingButton from './LandingButton';
import './Button.css';

export default function Button({ landingButton, className, text, transparentBg, handleClickButton }) {
	return landingButton ? (
		<LandingButton className={className} text={text} handleClickButton={handleClickButton} />
	) : (
		<div className={className}>
			<div className={`button ${transparentBg && 'transparent_bg'} `} onClick={handleClickButton}>
				{text}
			</div>
		</div>
	);
}
