import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as NavLogo } from "../../../assets/gisau-logo/gisau_white.svg";
import { pages } from "./constants";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuInterface } from "./MenuInterface";

const NavigationBar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Box className="flex justify-between items-center absolute z-10 w-full top-1/20">
        <Box className={`ml-6 sm:ml-20 md:ml-6 lg:ml-20`}>
          <Link to="/">
            <NavLogo className={`w-10 sm:w-16 h-auto`} />
          </Link>
        </Box>
        {isMobile ? (
          <div className={`mr-6 sm:mr-20`}>
            {isMenuOpen ? (
              <MenuInterface
                className={`w-6`}
                clickHandler={() => setIsMenuOpen(false)}
              />
            ) : (
              <MenuIcon
                className={`text-white`}
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>
        ) : (
          <Box className="flex mr-6 lg:mr-20">
            {pages.map((page) => (
              <Link key={page.name} to={page.path} className="px-5 pt-3">
                <p className="text-white hover:underline underline-offset-8 decoration-2 font-oswald text-xl">
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

export default NavigationBar;
