import React from 'react';

const MenuLogo = ({ menuIconColor, isOpen, openHandler, closeHandler }) => {
	return (
		<div className='w-8 h-8 relative z-50' onClick={isOpen ? closeHandler : openHandler}>
			<div className={`w-full h-full flex flex-col flex-wrap items-center content-center`}>
				<span
					className={`menu-line-1 w-[0.85rem] h-[2px] mt-[4px] mb-[3px] block rounded-l-sm duration-500 origin-[right_center] ${menuIconColor} ${
						isOpen && 'translate-y-[0.56rem] rotate-45'
					}`}
				></span>
				<span
					className={`menu-line-2 w-[0.85rem] h-[2px] mt-[4px] mb-[3px] block rounded-l-sm duration-500 origin-[right_center] ${menuIconColor} ${
						isOpen && 'scale-0'
					}`}
				></span>
				<span
					className={`menu-line-3 w-[0.85rem] h-[2px] mt-[4px] mb-[3px] block rounded-l-sm duration-500 origin-[right_center] ${menuIconColor} ${
						isOpen && '-translate-y-[0.56rem] -rotate-45'
					}`}
				></span>
				<span
					className={`menu-line-4 w-[0.85rem] h-[2px] mt-[4px] mb-[3px] block rounded-r-sm duration-500 origin-[left_center] ${menuIconColor} ${
						isOpen && 'translate-y-[0.56rem] -rotate-45'
					}`}
				></span>
				<span
					className={`menu-line-5 w-[0.85rem] h-[2px] mt-[4px] mb-[3px] block rounded-r-sm duration-500 origin-[left_center] ${menuIconColor} ${
						isOpen && 'scale-0'
					}`}
				></span>
				<span
					className={`menu-line-6 w-[0.85rem] h-[2px] mt-[4px] mb-[3px] block rounded-r-sm duration-500 origin-[left_center] ${menuIconColor} ${
						isOpen && '-translate-y-[0.56rem] rotate-45'
					}`}
				></span>
			</div>
		</div>
	);
};

export default MenuLogo;
