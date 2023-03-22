import React from "react";
import { pages } from "./constants";
import { Link } from "react-router-dom";

export const MenuInterface = ({
  className,
  isOpen,
  closeHandler,
  openHandler,
  isHomePage,
}) => {
  let menuIconColor;
  if (!isHomePage && !isOpen) {
    menuIconColor = "bg-black";
  } else {
    menuIconColor = "bg-white";
  }

  return (
    <div className={className}>
      <div
        className="w-8 h-8 relative z-50"
        onClick={isOpen ? closeHandler : openHandler}
      >
        <div
          className={`w-full h-full flex flex-col flex-wrap items-center content-center`}
        >
          <span
            className={`menu-line-1 w-[0.85rem] h-[2px] mt-[4px] mb-[3px] block rounded-l-sm duration-500 origin-[right_center] ${menuIconColor} ${
              isOpen && "translate-y-[0.56rem] rotate-45"
            }`}
          ></span>
          <span
            className={`menu-line-2 w-[0.85rem] h-[2px] mt-[4px] mb-[3px] block rounded-l-sm duration-500 origin-[right_center] ${menuIconColor} ${
              isOpen && "scale-0"
            }`}
          ></span>
          <span
            className={`menu-line-3 w-[0.85rem] h-[2px] mt-[4px] mb-[3px] block rounded-l-sm duration-500 origin-[right_center] ${menuIconColor} ${
              isOpen && "-translate-y-[0.56rem] -rotate-45"
            }`}
          ></span>
          <span
            className={`menu-line-4 w-[0.85rem] h-[2px] mt-[4px] mb-[3px] block rounded-r-sm duration-500 origin-[left_center] ${menuIconColor} ${
              isOpen && "translate-y-[0.56rem] -rotate-45"
            }`}
          ></span>
          <span
            className={`menu-line-5 w-[0.85rem] h-[2px] mt-[4px] mb-[3px] block rounded-r-sm duration-500 origin-[left_center] ${menuIconColor} ${
              isOpen && "scale-0"
            }`}
          ></span>
          <span
            className={`menu-line-6 w-[0.85rem] h-[2px] mt-[4px] mb-[3px] block rounded-r-sm duration-500 origin-[left_center] ${menuIconColor} ${
              isOpen && "-translate-y-[0.56rem] rotate-45"
            }`}
          ></span>
        </div>
      </div>
      <div
        className={`bg-black fixed top-0 left-0 w-full h-full z-30   duration-500 ${
          isOpen ? "block visible opacity-50" : "hidden invisible opacity-0"
        }`}
        onClick={closeHandler}
      ></div>
      <div
        className={`fixed bg-primary top-0 right-0 w-[21rem] h-full z-40  duration-1000 ${
          isOpen ? "translate-x-0 visible" : "invisible translate-x-full"
        }`}
      >
        <div className="fixed right-0 mt-1/4">
          <div className="text-right mr-6 mt-6 sm:mr-20">
            {pages.map((page) => (
              <Link
                key={page.name}
                to={page.path}
                className=""
                onClick={closeHandler}
              >
                <p className="text-white hover:underline underline-offset-8 decoration-2 font-oswald text-3xl leading-[300%] uppercase">
                  {page.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
