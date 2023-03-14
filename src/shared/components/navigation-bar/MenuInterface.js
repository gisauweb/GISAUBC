import React from "react";
import { pages } from "./constants";
import { Link } from "react-router-dom";
import Close from "assets/close.svg";
import CloseIcon from "@mui/icons-material/Close";

export const MenuInterface = ({ clickHandler }) => {
  return (
    <div>
      <div
        className="bg-black fixed top-0 left-0 w-full h-full z-10 opacity-50"
        onClick={clickHandler}
      ></div>
      <div className="fixed bg-red-500 top-0 right-0 w-4/5 h-full z-10 shadow">
        <CloseIcon
          className="fixed top-1/20 right-0 mr-6 text-white"
          onClick={clickHandler}
        />
        <div className="fixed right-0 mt-24">
          <div className="text-right mr-6 mt-6">
            {pages.map((page) => (
              <Link key={page.name} to={page.path} className="px-5 pt-3">
                <p className="text-white hover:underline underline-offset-8 decoration-2 font-oswald text-xl">
                  {page.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed z-20 top-6">
        <div className="text-right mr-6 mt-6">
          {pages.map((page) => (
            <Link key={page.name} to={page.path} className="px-5 pt-3">
              <p className="text-white hover:underline underline-offset-8 decoration-2 font-oswald text-xl">
                {page.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
