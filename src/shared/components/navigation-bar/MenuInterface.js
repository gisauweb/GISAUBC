import React from "react";
import { pages } from "./constants";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as NavLogo } from "../../../assets/gisau-logo/gisau_white.svg";

export const MenuInterface = ({ className, isOpen, setIsOpen, isHomePage }) => {
  return (
    <div className={className}>
      <div className="w-6 h-6 relative z-50" onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`w-full h-full flex flex-col flex-wrap items-center content-center`}
        >
          <span
            className={`menu-line-1 w-3 h-[2px] mt-[3px] mb-[3px] block rounded-l-sm duration-500 origin-[right_center] bg-white ${
              isOpen && "translate-y-2 rotate-45"
            }`}
          ></span>
          <span
            className={`menu-line-2 w-3 h-[2px] mt-[3px] mb-[3px] block rounded-l-sm duration-500 origin-[right_center] bg-white ${
              isOpen && "scale-0"
            }`}
          ></span>
          <span
            className={`menu-line-3 w-3 h-[2px] mt-[3px] mb-[3px] block rounded-l-sm duration-500 origin-[right_center] bg-white ${
              isOpen && "-translate-y-2 -rotate-45"
            }`}
          ></span>
          <span
            className={`menu-line-4 w-3 h-[2px] mt-[3px] mb-[3px] block rounded-r-sm duration-500 origin-[left_center] bg-white ${
              isOpen && "translate-y-2 -rotate-45"
            }`}
          ></span>
          <span
            className={`menu-line-5 w-3 h-[2px] mt-[3px] mb-[3px] block rounded-r-sm duration-500 origin-[left_center] bg-white ${
              isOpen && "scale-0"
            }`}
          ></span>
          <span
            className={`menu-line-6 w-3 h-[2px] mt-[3px] mb-[3px] block rounded-r-sm duration-500 origin-[left_center] bg-white ${
              isOpen && "-translate-y-2 rotate-45"
            }`}
          ></span>
        </div>
      </div>
      <div
        className={`bg-black fixed top-0 left-0 w-full h-full z-30   duration-500 ${
          isOpen ? "block visible opacity-50" : "hidden invisible opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`fixed bg-primary top-0 right-0 w-[21rem] h-full z-40  duration-1000 ${
          isOpen ? "translate-x-0 visible" : "invisible translate-x-full"
        }`}
      >
        <div className="fixed right-0 mt-[4rem]">
          <div className="text-right mr-6 mt-6 sm:mr-20">
            {pages.map((page) => (
              <Link key={page.name} to={page.path} className="px-5 pt-3">
                <p className="text-white hover:underline underline-offset-8 decoration-2 font-oswald text-xl uppercase">
                  {page.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (isOpen) {
    return (
      <div className={`${className}`}>
        <div
          className="bg-black fixed top-0 left-0 w-full h-full z-10 opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="fixed bg-primary top-0 right-0 w-[21rem] h-full z-10 shadow">
          <div className="fixed top-1/20 right-0 flex items-center">
            <NavLogo className={`w-10 h-auto invisible`} />
            <CloseIcon
              className="mr-6 text-white"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className="fixed right-0 mt-[4rem]">
            <div className="text-right mr-6 mt-6">
              {pages.map((page) => (
                <Link key={page.name} to={page.path} className="px-5 pt-3">
                  <p className="text-white hover:underline underline-offset-8 decoration-2 font-oswald text-xl uppercase">
                    {page.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <MenuIcon
        className={`${isHomePage ? "text-white" : "text-black"} `}
        onClick={() => setIsOpen(true)}
      />
    );
  }
};
