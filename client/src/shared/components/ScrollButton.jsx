import React, { useState, useEffect } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive';

export default function ScrollButton({ threshold }) {
	const [visible, setVisible] = useState(false);
	const isMobile = useMediaQuery({ query: '(max-width: 639px) ' });

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		const websiteHeight = document.getElementById('root').clientHeight;
		if (scrolled > websiteHeight * threshold) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisible);
	});

	return (
		<div
			className='sb fixed right-12 sm:right-32 2xl:right-64 z-30 bottom-48 sm:bottom-52 lg:bottom-64'
			style={{ display: visible ? 'inline' : 'none' }}
		>
			<div
				className='flex justify-center items-center hover:cursor-pointer circleButton bg-primary rounded-full'
				style={{ width: '3rem', height: '3rem' }}
				onClick={scrollToTop}
			>
				<KeyboardArrowUp style={{ color: '#FFFDF7' }} fontSize={isMobile ? 'medium' : 'large'} />
			</div>
		</div>
	);
}
