import React, { useEffect, useState } from 'react';

export const Typography = ({ variant, text, className }) => {
	const [variantStyle, setVariantStyle] = useState('');

	useEffect(() => {
		switch (variant) {
			case 'h1':
				setVariantStyle('text-3xl sm:text-4xl xl:text-5xl font-semibold font-montserrat');
				break;
			case 'h2':
				setVariantStyle('text-2xl sm:text-3xl xl:text-4xl font-medium font-oswald');
				break;
			default:
				break;
		}
	}, [variant]);

	return <span className={`${variantStyle} ${className} text-primary`}>{text}</span>;
};
