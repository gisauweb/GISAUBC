import React from "react";
import { pages } from "./constants";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as NavLogo } from "../../../assets/gisau-logo/gisau_white.svg";

export const MenuInterface = ({ clickHandler }) => {
  return (
    <div>
      <div
        className="bg-black fixed top-0 left-0 w-full h-full z-10 opacity-50"
        onClick={clickHandler}
      ></div>
      <div className="fixed bg-primary top-0 right-0 w-[21rem] h-full z-10 shadow">
        <div className="fixed top-1/20 right-0 flex items-center">
          <NavLogo className={`w-10 h-auto invisible`} />
          <CloseIcon className="mr-6 text-white" onClick={clickHandler} />
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
};
