import { useState, useRef, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const years = ['2022/2023', '2021/2022', '2020/2021', '2019/2020', '2018/2019'];

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState('2022/2023');
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
        <div className="relative mr-2.5 py-2" ref={dropdownRef}>
            <button
                type="button"
                className="bg-bgPrimary hover:bg-gray-200 text-primary font-semibold py-1 rounded-md border border-primary focus:outline-none focus:ring-1 focus:ring-primary flex items-center justify-between w-56"
                onClick={handleToggle}
            >
                <div></div>
                <span className='font-inter pl-9'>{selectedYear}</span>
                <KeyboardArrowDownIcon fontSize='large' className='font-inter' />
            </button>
            {isOpen && (
                <div className="absolute z-10 mt-2 rounded-md shadow-lg bg-white border border-gray-200 divide-y divide-gray-200 w-56">
                    {years.map((year) => (
                        <button
                            key={year}
                            type="button"
                            className="block py-2 font-inter font-semibold bg-bgPrimary text-primary hover:bg-primary hover:text-white w-full"
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
