import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ReactComponent as NavLogoWhite } from "../../../assets/gisau-logo/gisau_white.svg";
import { ReactComponent as NavLogoBlack } from "../../../assets/gisau-logo/gisau_icon.svg";
import { pages } from "./constants";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuInterface } from "./MenuInterface";

export const NavigationBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false); // Close the navigation panel
  }, [location.pathname]);

  return (
    <div>
      <Box
        className={`flex justify-between items-center z-10 w-full mt-[5vh] ${
          isHomePage && "absolute"
        }`}
      >
        <Box className={`ml-6 sm:ml-20 md:ml-6 lg:ml-20`}>
          <Link to="/">
            {isHomePage ? (
              <NavLogoWhite className="w-10 sm:w-16 h-auto" />
            ) : (
              <NavLogoBlack className={`w-10 sm:w-16 h-auto`} />
            )}
          </Link>
        </Box>
        {isMobile ? (
          <div className={`mr-6 sm:mr-20 transition-all duration-1000`}>
            {isMenuOpen ? (
              <MenuInterface
                className={""}
                clickHandler={() => setIsMenuOpen(false)}
              />
            ) : (
              <MenuIcon
                className={`${isHomePage ? "text-white" : "text-black"} `}
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>
        ) : (
          <Box className="flex mr-6 lg:mr-20">
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
          </Box>
        )}
      </Box>
      <Box>
        <Outlet />
      </Box>
    </div>
  );
};
