import React, { useState, useRef, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useMediaQuery } from 'react-responsive';

const years = ['2022/2023'];

const DropdownMenu = ({ selectedYear, setSelectedYear }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);
	const isMobile = useMediaQuery({ query: `(max-width: 639px) ` });

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

	return (
		<div
			className='w-40 sm:w-64 absolute sm:right-24 lg:right-48 mt-14 sm:mt-0 rounded-2xl border-2 border-spacing-2 border-primary stroke-primary'
			ref={dropdownRef}
		>
			<button
				type='button'
				className={`bg-bgPrimary hover:bg-gray-200 text-primary text-base sm:text-xl ${
					isOpen ? 'rounded-t-2xl' : 'rounded-2xl'
				} focus:border-b border-gray-400 font-inter font-semibold flex items-center justify-between w-full py-1`}
				onClick={handleToggle}
			>
				<div></div>
				<span className='font-inter pl-3 sm:pl-9'>{selectedYear}</span>
				<KeyboardArrowDownIcon fontSize={isMobile ? 'medium' : 'large'} className='font-inter' />
			</button>
			{isOpen &&
				years.map((year, i) => (
					<button
						key={year}
						type='button'
						className={`block bg-bgPrimary text-primary text-base sm:text-xl hover:bg-primary hover:text-white w-full py-2 font-inter font-semibold ${
							i === years.length - 1 && 'rounded-b-xl'
						}`}
						onClick={() => handleSelect(year)}
					>
						{year}
					</button>
				))}
		</div>
	);
};

export default DropdownMenu;
