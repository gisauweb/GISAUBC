import { Box } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as NavLogo } from "../../../assets/gisau-logo/gisau_white.svg";
import { pages } from "./constants";

const NavigationBar = () => {
  return (
    <>
      <Box className="bg-[#D9D9D9]/100 flex justify-between items-center">
        <Box className="ml-20">
          <Link to="/">
            <NavLogo className="w-16" />
          </Link>
        </Box>
        <Box className="flex mr-20">
          {pages.map((page) => (
            <Link key={page.name} to={page.path} className="px-5 pt-3">
              <p className="text-white hover:underline underline-offset-8 font-oswald text-xl">
                {page.name}
              </p>
            </Link>
          ))}
        </Box>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default NavigationBar;
