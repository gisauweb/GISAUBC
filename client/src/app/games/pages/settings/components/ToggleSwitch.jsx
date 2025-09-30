import React, { useState } from 'react';
import './ToggleSwitch.css';

function ToggleSwitch({ id, label, initialChecked }) {
	const [checked, setChecked] = useState(initialChecked);

	const handleChange = () => {
		setChecked((prevChecked) => !prevChecked);
	};

	return (
		<div className='toggle-switch'>
			<label htmlFor={id}>{label}</label>
			<div className={`switch ${checked ? 'on' : 'off'}`}>
				<input type='checkbox' id={id} checked={checked} onChange={handleChange} style={{ display: 'none' }} />
				<span className='slider' onClick={handleChange}>
					<span className={`slider-circle ${checked ? 'checked' : ''}`} />
					{checked ? 'on' : 'off'}
				</span>
			</div>
		</div>
	);
}

export default ToggleSwitch;
