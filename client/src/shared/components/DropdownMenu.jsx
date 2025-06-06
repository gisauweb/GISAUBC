import React, { useState, useRef, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useMediaQuery } from 'react-responsive';

const years = ['2025/2026', '2024/2025', '2023/2024', '2022/2023'];

export default function DropdownMenu({ selectedYear, setSelectedYear, source }) {
	const [isOpen, setIsOpen] = useState(false);
	const [rightSpacing, setRightSpacing] = useState('');
	const [display, setDisplay] = useState('');
	const dropdownRef = useRef(null);
	const isMobile = useMediaQuery({ query: '(max-width: 639px) ' });

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleSelect = (year) => {
		setSelectedYear(year);
		setIsOpen(false);
	};

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		switch (source) {
			case 'About':
				setRightSpacing('2xl:right-72');
				setDisplay('2xl:absolute');
				break;
			case 'Rantangan':
				setRightSpacing('right-0');
				setDisplay('sm:absolute');
				break;
			default:
				setRightSpacing('sm:right-24 lg:right-48');
				setDisplay('sm:absolute');
				break;
		}
	}, [source]);

	return (
		<div
			className={`w-40 sm:w-64 relative ${display} ${rightSpacing}
						rounded-2xl border-2 border-spacing-2 border-primary stroke-primary z-20`}
			ref={dropdownRef}
		>
			<button
				type='button'
				className={`bg-bgPrimary hover:bg-gray-200 text-primary text-base sm:text-xl 
							${isOpen ? 'rounded-t-2xl' : 'rounded-2xl'} focus:border-b border-gray-400 
							font-inter font-semibold flex items-center justify-between w-full py-1`}
				onClick={handleToggle}
			>
				<div />
				<span className='font-inter pl-3 sm:pl-9'>{selectedYear}</span>
				<KeyboardArrowDownIcon fontSize={isMobile ? 'medium' : 'large'} className='font-inter' />
			</button>
			{isOpen &&
				years.map((year, i) => (
					<button
						key={year}
						type='button'
						className={`block w-full py-2 bg-bgPrimary hover:bg-primary
									${i === years.length - 1 && 'rounded-b-xl'} text-base sm:text-xl
									text-primary hover:text-white font-inter font-semibold `}
						onClick={() => handleSelect(year)}
					>
						{year}
					</button>
				))}
		</div>
	);
}
