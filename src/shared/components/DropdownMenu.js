import { useState, useRef, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const years = ['2022/2023', '2021/2022', '2020/2021', '2019/2020', '2018/2019'];

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState('');
    const dropdownRef = useRef(null);

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
        <div className="relative w-40" ref={dropdownRef}>
            <button
                type="button"
                className="bg-white hover:bg-gray-200 text-red-800 font-semibold py-2 px-4 rounded-md border border-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 flex items-center justify-between w-full"
                onClick={handleToggle}
            >
                <span>{selectedYear || 'Select a Year'}</span>
                <KeyboardArrowDownIcon />
            </button>
            {isOpen && (
                <div className="absolute z-10 mt-2 rounded-md shadow-lg bg-white border border-gray-200 divide-y divide-gray-200 w-4/5">
                    {years.map((year) => (
                        <button
                            key={year}
                            type="button"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                            onClick={() => handleSelect(year)}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
