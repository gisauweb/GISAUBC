import React, { useEffect, useState } from 'react';

export default function Typography({ variant, text, className }) {
	const [tailwindStyle, setTailwindStyle] = useState('');

	useEffect(() => {
		switch (variant) {
			case 'h1':
				setTailwindStyle('text-3xl sm:text-4xl xl:text-5xl font-semibold font-montserrat');
				break;
			case 'h2':
				setTailwindStyle('text-2xl sm:text-3xl xl:text-4xl font-medium font-oswald');
				break;
			default:
				break;
		}
	}, [variant]);

	return <span className={`${tailwindStyle} ${className} text-primary`}>{text}</span>;
}
