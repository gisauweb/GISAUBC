import { Box } from "@mui/material";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ReactComponent as NavLogoWhite } from "../../../assets/gisau-logo/gisau_white.svg";
import { ReactComponent as NavLogoBlack } from "../../../assets/gisau-logo/gisau_icon.svg";
import { pages } from "./constants";

export const NavigationBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const isMobile = useMediaQuery({ query: `(max-width: 639px) ` });
  return (
    <div>
      <Box
        className={`flex justify-between items-center z-10 w-full mt-[5vh] ${
          isHomePage && "absolute"
        }`}
      >
        <Box className="ml-20">
          <Link to="/">
            {isHomePage ? (
              <NavLogoWhite className="w-16 h-16" />
            ) : (
              <NavLogoBlack className="w-16 h-16" />
            )}
          </Link>
        </Box>
        {isMobile ? (
          <div></div>
        ) : (
          <Box className="flex mr-20">
            {pages.map((page) => (
              <Link key={page.name} to={page.path} className="px-5 pt-3">
                <p
                  className={`hover:underline underline-offset-8 decoration-2 font-oswald text-xl ${
                    isHomePage ? "text-white" : "text-black"
                  }`}
                >
                  {page.name}
                </p>
              </Link>
            ))}
            <a href="#contact" className="px-5 pt-3">
              <p
                className={`hover:underline underline-offset-8 decoration-2 font-oswald text-xl ${
                  isHomePage ? "text-white" : "text-black"
                }`}
              >
                Contact
              </p>
            </a>
          </Box>
        )}
      </Box>
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};
