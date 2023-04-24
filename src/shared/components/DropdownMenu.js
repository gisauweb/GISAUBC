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
        <div className="mr-2.5 rounded-lg border border-primary focus:ring-1 focus:ring-primary" ref={dropdownRef}>
            <button
                type="button"
                className="bg-bgPrimary hover:bg-gray-200 text-primary focus:border-b border-gray-400 font-inter font-semibold flex items-center justify-between w-56 py-1 "
                onClick={handleToggle}
            >
                <div></div>
                <span className='font-inter pl-9'>{selectedYear}</span>
                <KeyboardArrowDownIcon fontSize='large' className='font-inter' />
            </button>
            {isOpen && years.map((year) => (
                <button
                    key={year}
                    type="button"
                    className="block bg-bgPrimary text-primary hover:bg-primary hover:text-white w-full py-2 font-inter font-semibold"
                    onClick={() => handleSelect(year)}
                >
                    {year}
                </button>
            ))}
        </div>
    );
};

export default DropdownMenu;
